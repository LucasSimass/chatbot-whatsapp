import axios from "axios";
import type { actionsType } from "../types/evolutionApiTypes.ts";
import type RequestInfo from "./requestInfo.ts";
import type { userDefaultReturn } from "../types/UserType.ts";

class EvolutionApi {
  actions: actionsType = {
    sendMessage:'sendMessage', 
    removeUser:'removeUser',
    getAllUsers:'getAllUsers', 
    groupSettings:'groupSettings',
    getGroupInfo:'getGroupInfo'}

  constructor() {}

  sendMessage(request: RequestInfo, botAnswer: userDefaultReturn) {
    const url = `http://localhost:8080/message/sendText/${request.instance}`;
    console.log(request);
    
    const payload: any = {
      number: request.senderNumber,
      text: botAnswer.msg,
      delay: 500,
      linkPreview: false,
      mentionsEveryOne: false,
      mentioned: botAnswer.mentions,
      quoted: {
        key: {id: request.messageId},
        message: {conversation: request.userMessage},
        participant: request.userJid
      }
    }; 
    
    console.log(payload);

    const headers = {
      apikey: request.apiKey,
      "Content-Type": "application/json",
    };

    try {
      const response = axios.post(url, payload, { headers: headers })
      console.log(response.then( r => {
        console.log(r);
        
      }));
      
      return response;
    }
    catch (err) {
      console.log(err);
    }
  }

  sendMessageToSpecificGroup(
    request: RequestInfo,
    groupJid: string,
    msg: string 
  ) {
    const url = `http://localhost:8080/message/sendText/${request.instance}`;
    console.log(request);
    
    const payload: any = {
      number: groupJid,
      text: msg,
      delay: 500,
    }; 
    
    console.log(payload);

    const headers = {
      apikey: request.apiKey,
      "Content-Type": "application/json",
    };

    try {
      const response = axios.post(url, payload, { headers: headers })
      console.log(response.then( r => {
        console.log(r);
        
      }));
      
      return response;
    }
    catch (err) {
      console.log(err);
    }
  }

  async sendSticker(request: RequestInfo, imageUrl: string | undefined, isAnimated: boolean = false){
    if (!request.quotedMessageId && !imageUrl){ return; }   

    let image64: any;
    let base64: any;
    if (!imageUrl){
      image64 = await this.getContentBase64(request);
      base64 = image64?.data['base64']; 
    }
    
    const url = `http://localhost:8080/message/sendSticker/${request.instance}`;

    const payload: any = {
      number: request.senderNumber,
      sticker: imageUrl ? imageUrl : base64,
      delay: 123,
      isAnimated: isAnimated,
      quoted: {
        key: {id: request.messageId},
        message: {conversation: request.userMessage},
        participant: request.userJid
      }
    }; 

    const headers = {
      apikey: request.apiKey,
      "Content-Type": "application/json",
    };

    try {
      const response = axios.post(url, payload, { headers: headers })
      return response;
    }
    catch (err) {
      console.log(err);
    }
  }

  async sendPoll(
    request: RequestInfo, 
    title: string,
    values: string[]
    ) {
    const url = `http://localhost:8080/message/sendPoll/${request.instance}`;
    
    const payload: any = {
      number: request.senderJid,
      name: title,
      selectableCount: 1,
      values: values,
      delay: 500,
      linkPreview: false,
      mentionsEveryOne: false,
      mentioned: undefined,
      quoted: {
        key: {id: request.messageId},
        message: {conversation: request.userMessage},
        participant: request.userJid
      }
    }; 
    
    console.log(payload);

    const headers = {
      apikey: request.apiKey,
      "Content-Type": "application/json",
    };

    try {
      const response = axios.post(url, payload, { headers: headers })
      console.log(response.then( r => {
        console.log(r);
        
      }));
      
      return response;
    }
    catch (err) {
      console.log(err);
    }
  }

  async sendMedia(
    request: RequestInfo, 
    imageUrlOrBase64: any, 
    caption: string | undefined =undefined, 
    isVideo=false, 
    imageType: string= 'jpg',
    mentionsJids: string[] | undefined= undefined
  ) {
    if (!imageUrlOrBase64){ return; }
    const url = `http://localhost:8080/message/sendMedia/${request.instance}`;
    
    const payload: any = {
      number: request.senderNumber,
      mediatype: isVideo ? 'video' : 'image',
      mimetype: isVideo? 'video/mp4' :`image/${imageType}`,
      caption: caption,
      media: imageUrlOrBase64,
      fileName: isVideo ? 'cleiton.mp4': 'cleiton.jpg',
      delay: 500,
      linkPreview: true,
      mentioned: mentionsJids,
      mentionsEveryOne: false,
      quoted: {
        key: {id: request.messageId},
        message: {conversation: request.userMessage},
        participant: request.userJid
      }
    }; 

    const headers = {
      apikey: request.apiKey,
      "Content-Type": "application/json",
    };

    try {
      const response = axios.post(url, payload, { headers: headers })
      return response;
    }
    catch (err) {
      console.log(err);
      
    }
  }

  async sendButtonCopy(
    request: RequestInfo, 
    title: string, 
    description: string,
    copy: string,
    footer: string
  ) {
    const url = `http://localhost:8080/message/sendButtons/${request.instance}`;
    
    const payload: any = {
      number: request.senderNumber,
      title: title,
      description: description,
      footer: footer,
      buttons: [
          {
              type: "copy",
              displayText: "Copiar Código",
              id: copy
          }
        ],
      delay: 500,
      linkPreview: true,
      mentioned: undefined,
      mentionsEveryOne: false,
      quoted: {
        key: {id: request.messageId},
        message: {conversation: request.userMessage},
        participant: request.userJid
      }
    }; 

    const headers = {
      apikey: request.apiKey,
      "Content-Type": "application/json",
    };

    try {
      const response = axios.post(url, payload, { headers: headers })
      return response;
    }
    catch (err) {
      console.log(err);
      
    }
  }

  async sendGif(
    request: RequestInfo, 
    imageUrlOrBase64: any, 
    caption: string | undefined =undefined, 
    ) {
    if (!imageUrlOrBase64){ return; }
    const url = `http://localhost:8080/message/sendMedia/${request.instance}`;
    
    const payload: any = {
      number: request.senderNumber,
      mediatype: "video", // GIFs são processados como vídeo
      mimetype: "video/mp4",
      caption: caption,
      media: imageUrlOrBase64, // URL do arquivo .mp4 ou Base64
      fileName: "animacao.mp4",
      gifPlayback: true, 
      isGif: true, // Adicione este campo como redundância
      delay: 500,
      mentionsEveryOne: false,
      quoted: {
        key: {id: request.messageId},
        message: {conversation: request.userMessage},
        participant: request.userJid
      }
    }; 

    const headers = {
      apikey: request.apiKey,
      "Content-Type": "application/json",
    };

    try {
      const response = axios.post(url, payload, { headers: headers })
      return response;
    }
    catch (err) {
      console.log(err);
      
    }
  }

  async sendDocument(
    request: RequestInfo, 
    imageUrlOrBase64: any, 
    caption: string | undefined=undefined, 
    isVideo=false,
    mimeType: string='jpg') {
    if (!imageUrlOrBase64){ return; }
    const url = `http://localhost:8080/message/sendMedia/${request.instance}`;
    
    const payload: any = {
      number: request.senderNumber,
      mediatype: 'document',
      mimetype: isVideo? 'video/mp4' :`image/${mimeType}`,
      caption: caption,
      media: imageUrlOrBase64,
      fileName: isVideo ? 'cleiton.mp4': 'cleiton.jpg',
      delay: 500,
      linkPreview: true,
      mentionsEveryOne: false,
      quoted: {
        key: {id: request.messageId},
        message: {conversation: request.userMessage},
        participant: request.userJid
      }
    }; 

    const headers = {
      apikey: request.apiKey,
      "Content-Type": "application/json",
    };

    try {
      const response = axios.post(url, payload, { headers: headers })
      return response;
    }
    catch (err) {
      console.log(err);
      
    }
  }

  async sendAudio(request: RequestInfo, audioUrlOrBase64: any){
    const url = `http://localhost:8080/message/sendWhatsAppAudio/${request.instance}`;
    
    audioUrlOrBase64 = audioUrlOrBase64.replace('data:audio/wav;base64,', '')

    const payload: any = {
      number: request.senderNumber,
      audio: audioUrlOrBase64,
      delay: 500,
      linkPreview: false,
      mentionsEveryOne: false,
      quoted: {
        key: {id: request.messageId},
        message: {conversation: request.userMessage},
        participant: request.userJid
      }
    }; 

    console.log(payload);

    const headers = {
      apikey: request.apiKey,
      "Content-Type": "application/json",
    };

    try {
      const response = axios.post(url, payload, { headers: headers })
      return response;
    }
    catch (err) {
      console.log(err);
    }
  }

  async sendEmoji(request: RequestInfo, emoji: string){
    const url = `http://localhost:8080/message/sendReaction/${request.instance}`;

    const payload: any = {
      "key": {
          "remoteJid": request.senderJid, // or {{groupJid}}@g.us"
          fromMe: false,
          id: request.messageId,
          participant: request.userLid,
          participantAlt: request.userLid,
          addressingMode: 'lid'
      },
      "reaction": emoji
    }; 
    

    console.log("payload : " + JSON.stringify(payload['key']));
    

    const headers = {
      apikey: request.apiKey,
      "Content-Type": "application/json",
    };

    try {
      const response = axios.post(url, payload, { headers: headers })
      response.then(r => {
        console.log('response: ' + JSON.stringify(r['data']));
      })
      
      return response;
    }
    catch (err) {
      console.log('erroEmoji: ' + err);
    }
  }

  removeUser(request: RequestInfo, userNumber: string){
    const url = `http://localhost:8080/group/updateParticipant/${request.instance}?groupJid=${request.senderJid}`;
    
    const payload = {
      action: 'remove', 
      participants: [userNumber] 
    }

    const headers = {
      apikey: request.apiKey,
      "Content-Type": "application/json",
    };

    try {
      const response = axios.post(url, payload, { headers: headers });
      return response;
    } catch(e) {
      //console.log(e);
    }
  }

  leaveGroup(request: RequestInfo, groupJid: string){
    const url = `http://localhost:8080/group/leaveGroup/${request.instance}?groupJid=${groupJid}`;

    const headers = {
      apikey: request.apiKey,
      "Content-Type": "application/json",
    };

    try {
      const response = axios.delete(url, {headers: headers});
      return response;
    } catch(e) {
      //console.log(e);
    }
  }

  fetchProfile(request, userJid: string){
    const url = `http://localhost:8080/chat/fetchProfile/${request.instance}`;

    const payload = {
      "number": `${userJid}`
    }

    const headers = {
      apikey: request.apiKey,
      "Content-Type": "application/json",
    };

    try {
      const response = axios.post(url, payload, {headers: headers});
      return response;
    } catch(e) {
      console.log(e);
    }
  }

  async userIsAdmin(request: RequestInfo, userLid: string){
    const allUsers = await this.getAllUsers(request);
    if(!allUsers){ return false; } 

    const allUsersData = allUsers['data']['participants'];
    console.log('data: ' + JSON.stringify(allUsersData));

    const user = allUsersData.find(userInfo =>{
      console.log(userInfo);
      
      return userInfo!['id'] == userLid
    } );
    if (!user){ return false };
    console.log('faseb');
    

    if (!user['admin']){ return false; }
    console.log('fasec');
    

    return true
  }

  getAllUsers(request: RequestInfo){
    const url = `http://localhost:8080/group/participants/${request.instance}?groupJid=${request.senderJid}`;
    
    const headers = {
      apikey: request.apiKey,
    }; 

    try {
      const response = axios.get(url, { headers: headers });
      return response;
    } catch(e) {
      console.log(e);
    }
  }

  async deleteMessage(request: RequestInfo, messageId: string, userJid: string){
    const url = `http://localhost:8080/chat/deleteMessageForEveryone/${request.instance}`;
  
    const payload: any = {
      id: messageId,
      remoteJid: request.senderJid,
      fromMe: false,
      participant: userJid
    }; 
    console.log('url: ' + url);
    
    
    console.log(payload);

    const headers = {
      apikey: request.apiKey,
      "Content-Type": "application/json",
    };

    try {
      const response = await axios.delete(url, {
        data: payload,
        headers: headers
      })

      console.log('delete data');
      
      console.log(response);
      
      return response;
    }
    catch (err) {
      console.log('err: ' + err);
    }
  }

  groupSettings(action, instance, apikey, groupJid){
    const url = `http://localhost:8080/group/updateSetting/${instance}?groupJid=${groupJid}`;

    const payload = {action: action}

    const headers = {
      apikey: apikey,
      "Content-Type": "application/json",
    };

    const response = axios.post(url, payload, { headers: headers });
    return response;
  }

  getGroupInfo(instance, groupJid) {
    const url = `http://localhost:8080/group/updateSetting/${instance}?groupJid=${groupJid}`;
  }

 async getContentBase64(request: RequestInfo, isConvertToMp4: boolean = true){
    const url = `http://localhost:8080/chat/getBase64FromMediaMessage/${request.instance}`;

    const payload: any = {
      message: {
        key: {id: request.quotedMessageId}
      }, 
      convertToMp4: isConvertToMp4
    }; 

    console.log("payload: ");
    console.log(payload['message']['key']['id']);  
 
    const headers = {
      apikey: request.apiKey,
      "Content-Type": "application/json",
    };

    try {
      const response = await axios.post(url, payload, { headers: headers })
      
      return response;
    }
    catch (err) {
      console.log(err);
    }
  }

  sendMessageToOwner(request: RequestInfo, msg: string) {
    const url = `http://localhost:8080/message/sendText/${request.instance}`;
    console.log(request);
    
    const payload: any = {
      number: '5524988417737@s.whatsapp.net',
      text: msg,
      delay: 500,
      linkPreview: false,
      mentionsEveryOne: false,
    }; 
    
    console.log(payload);

    const headers = {
      apikey: request.apiKey,
      "Content-Type": "application/json",
    };

    try {
      const response = axios.post(url, payload, { headers: headers })
      console.log(response.then( r => {
        console.log(r);
        
      }));
      
      return response;
    }
    catch (err) {
      console.log(err);
    }
  }
}

export default EvolutionApi;
