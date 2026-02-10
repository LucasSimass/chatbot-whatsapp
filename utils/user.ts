import { json } from "express";
import type { userDefaultReturn } from "../types/UserType.ts";
import EvolutionApi from "./evolutionAPI.ts";
import type RequestInfo from "./requestInfo.ts";
import { request } from "node:http";

const evolutionAPI = new EvolutionApi();

class User {
  //
  lid: string;
  lidNumber: string;
  jid: string;

  number: string;
  name: string;
  status: string | undefined;
  statusImageProfileUrl: string | undefined;

  lastCommand: string | undefined;
  commandAmount: number = 0;

  source: string;

  gold: number = 0;

  userStrike = 0;

  // Default values (do not change)
  married: {
    isMarried: boolean,
    whoIsMarried: User | undefined,
    propose: {
      wasPropose: boolean,
      whoPropose: User | undefined
    }
  } = {
    isMarried: false,
    whoIsMarried: undefined,
    propose: {
      wasPropose: false,
      whoPropose: undefined
    }
  };

  pickaxe = {
    havePickaxe: false,
    durability: 0, // 0 to 100
    chancesPerDay: 7,
  };

  shield = {
    haveShield: false,
  };

  constructor(request: RequestInfo) {
    this.lid = request.userLid;
    this.lidNumber = request.userLidNumber;
    this.jid = request.userJid
    this.name = request.userName;
    this.number = request.userNumber;
    this.source = request.source;

    evolutionAPI.fetchProfile(request, this.jid)?.then(async r => {
      const fetchProfileData = r['data'];  

      this.status = fetchProfileData['status']['status'];
      this.statusImageProfileUrl = fetchProfileData['picture'];
    })

  }

  mine(): userDefaultReturn {
    const rNum = Math.random() * 10;
    if (rNum <= 5) {
      // user win!
      const goldReceived = Math.round(Math.random() * 100) || 10;
      this.gold += goldReceived;
      return { 
        success: true, 
        msg: `@${this.number} Minerou fundo e encontrou *${goldReceived} golds*!`,
        mentions: [this.jid]
      };
    }
    return { 
      success: false, 
      msg: `@${this.number} Minerou e não achou nada! ):`, 
      mentions: [this.jid] 
    };
  }
  
  goldInfo(): userDefaultReturn {
    return {success: true, msg: `@${this.number} possui ${this.gold} golds`, mentions: [this.jid]}
  }

  marry(): userDefaultReturn {
    if (!this.married.propose.wasPropose){
      return {
        success: false,
        msg: `@${this.number} ainda não recebeu nenhuma proposta de casamento! ):`,
        mentions: [this.jid]
      }
    }

    const whoPropose = this.married.propose.whoPropose

    this.married.isMarried = true
    this.married.whoIsMarried = whoPropose

    whoPropose!.married.isMarried = true
    whoPropose!.married.whoIsMarried = this
    

    return {
      success: false, 
      msg: `@${this.number} casou com @${this.married.whoIsMarried!.number}`,
      mentions: [this.jid, this.married.whoIsMarried!.jid]
    }
  }

  propose(userPropose: User | undefined) : userDefaultReturn {
    if (!userPropose){
      return {
        success: false, 
        msg: `Usuario não encontrado!`,
        mentions: undefined
      }
    }

    if (userPropose.married.isMarried){
      // is married already
      return {
        success: false, 
        msg: `@${userPropose.number} já é casado(a) com @${userPropose.married.whoIsMarried?.number}`,
        mentions: [userPropose.jid, userPropose.married.whoIsMarried!.jid]
      }
    }

    if (userPropose.married.propose.wasPropose){
      // is proposed already
      return {
        success: false,
        msg: `@${userPropose.number} já tem um pedido pendente do *${userPropose.married.propose.whoPropose}*!`,
        mentions: [userPropose.jid, userPropose.married.whoIsMarried!.jid]
      }
    }

    // can be propose
    userPropose.married.propose.wasPropose = true
    userPropose.married.propose.whoPropose = this

    return {
      success: false,
      msg: `@${userPropose.number} tem um pedido de casamento, aceitas? [ *!aceitar* ou *!recusar* ]`,
      mentions: [userPropose.jid]
    }
  }

}

export default User;