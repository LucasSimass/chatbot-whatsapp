/**
 * An more structure request data
 */
class RequestInfo {
  instance: string;
  apiKey: string;

  userLid: string;
  userLidNumber: string;
  userJid: string;
  userName: string;
  userNumber: string;
  userMessage: string;
  source: string;

  messageId: string;

  senderNumber: string;
  senderJid: string;

  userMentionsLids: string[];

  quotedMessageId: string | undefined;
  quotedMessageImageCaption: string | undefined;
  quotedMessageText: string | undefined;
  quotedParticipantLidJid: string | undefined;
  quotedVideoMessage: string | undefined;
  quotedAudioMessage: string | undefined;

  constructor(data: object){
    console.log(data);
    
    this.instance = data['instance']
    this.apiKey = data['apikey']

    this.userLid = data['data']['key']['participant'];
    this.userLidNumber = data['data']['key']['participant'].substring(0, data['data']['key']['participant'].indexOf('@'));
    this.userJid = data['data']['key']['participantAlt'] || data['sender'] 
    this.userName = data['data']['pushName'];
    this.userNumber = data['data']['key']['participantAlt'] ? 
                      data['data']['key']['participantAlt'].substring(0, data['data']['key']['participantAlt'].indexOf('@'))
                      : data['sender'].substring(0, data['sender'].indexOf('@'));
    
    this.source = data['data']['source'];
   
    this.senderJid = data['data']['key']['remoteJid'];                  
    this.senderNumber = data['data']['key']['remoteJid'].replace('@', '');

    this.userMentionsLids = data['data']['contextInfo'] 
                         ? data['data']['contextInfo']['mentionedJid']
                         : [];
    
    this.userMessage = data['data']['message']['conversation'];
    this.messageId = data['data']['key']['id'];

    this.quotedMessageId = data['data']['contextInfo']
                          && data['data']['contextInfo']['stanzaId']

    if (data['data']['contextInfo'] && data['data']['contextInfo']['quotedMessage']){
      this.quotedMessageText = data['data']['contextInfo']['quotedMessage']['conversation']
    }

    if (data['data']['contextInfo'] && data['data']['contextInfo']['quotedMessage'] && data['data']['contextInfo']['quotedMessage']['imageMessage'] ){
      this.quotedMessageImageCaption = data['data']['contextInfo']['quotedMessage']['imageMessage']['caption'];
    }

    if (data['data']['contextInfo'] && data['data']['contextInfo']['quotedMessage']){
      this.quotedVideoMessage = data['data']['contextInfo']['quotedMessage']['videoMessage']; 
    }                        

    if (data['data']['contextInfo'] && data['data']['contextInfo']['quotedMessage']){
      this.quotedAudioMessage = data['data']['contextInfo']['quotedMessage']['audioMessage'];  
    }
    
                        
    this.quotedParticipantLidJid = data['data']['contextInfo']
                          && data['data']['contextInfo']['participant']
  }
}

export default RequestInfo;