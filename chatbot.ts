import e from "express";
import os from "os"
import EvolutionApi from "./utils/evolutionAPI.ts";

import User from "./utils/user.ts";
import Users from "./utils/users.ts";
import RequestInfo from "./utils/requestInfo.ts";
import Tasks from "./utils/tasks.ts";
import Bot from "./utils/bot.ts";
import Database from "./utils/database.ts";
import Link from "./utils/link.ts";
import { exec } from "child_process";

const app = e();
const PORT = 5000;

const users = new Users();

app.use(e.json({ limit: '50mb' }));
app.use(e.urlencoded({ limit: '50mb', extended: true }));

const evolutionAPI = new EvolutionApi();
const bot = Bot;
const link = new Link();
const db = new Database();

Bot.groupAllowed = await db.getAllGroupJids();

app.post('/webhook', async (req, res) => { 
    const data = req.body
    console.log(JSON.stringify(data));
    console.log(req.body);
    

    const request = new RequestInfo(data);

    const user: User = users.findUserByLid(request.userLid) 
                       || users.addUser(new User(request))

    if (!bot.groupAllowed.find(groupJid => groupJid['jid'] == request.senderJid)){
        evolutionAPI.leaveGroup(request, request.senderJid);
        return res.send('hi')
    }

    if (
        bot.usersMutted[request.senderJid] 
        && 
        bot.usersMutted[request.senderJid]!.find(userJid => userJid == user.jid)
    ){
        evolutionAPI.deleteMessage(request, request.messageId, request.userLid);
        
        console.log(await evolutionAPI.userIsAdmin(request, user.jid));
        return res.send('hi');
    }
 

    if (
        request.userMessage 
        && 
        link.isLink(request.userMessage.split(' ')[0]!)
        &&
        !await evolutionAPI.userIsAdmin(request, user.lid)
    ){
        user.userStrike += 1;
        if (user.userStrike > 1){
            evolutionAPI.removeUser(request, user.number)
            return res.send('hi');
        }
        evolutionAPI.sendMessage(
            request,
            {
                success: false,
                msg: '*NÃO MANDE LINK DIRETAMENTE OU SERA BANIDO, links só são permitidos em certos comandos*'.toUpperCase(),
                mentions: undefined
            }
        )

        return res.send('hi');
    }


//    const x = evolutionAPI.fetchProfile(request, request.userMessage.split(" ").slice(1).join())
//     if (!x) {
//         console.log('Pessoa nao encontrada');
//         return res.send('hi');
//     }
//     x.then(r => {
//         console.log('batata: ' + JSON.stringify(r['data']));
//     })

    //---------------------------------------------
    
    const botAnswer = await new Tasks().doUserTask(request, user, users);
    if (botAnswer['msg'] == 'Comando não encontrado!' || botAnswer['msg'] == 'Dont Send' || botAnswer['msg'] == ''){ return res.send('hi'); }
    
    //---------------------------------------------
 
    const response = evolutionAPI.sendMessage(request, botAnswer)
    

    // 🚨 Adicione estas linhas para diagnóstico
    // console.log("--- RESPOSTA DA API ---")
    // console.log(`Status Code: ${response.status_code}`)
    // console.log(`Response Body: ${response.text}`)
    // console.log("-----------------------")
    
    return res.send('hi');
});

app.listen(PORT);

process.on('unhandledRejection', (reason, promise) => {
  console.error('Uma promessa falhou sem tratamento:', reason);
  reOpenSystem();
});

process.on('uncaughtException', (err) => {
  console.error('Erro crítico não tratado:', err);
  reOpenSystem();
});

function reOpenSystem() { exec("node chatbot.ts"); }