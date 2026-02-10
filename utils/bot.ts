class Bot {
  groupAllowed: {jid: string}[] = [];

  usersMutted: {[groupJid: string]: Array<string>} = {}

  isCreator(userJid: string) {
    return userJid == "5524988417737@s.whatsapp.net"
  }
}

export default new Bot;
