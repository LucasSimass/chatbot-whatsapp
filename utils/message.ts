import { error } from "node:console";
import type Task from "./task.ts";

/**
 * Create message structure
 * Example: Message.CreateCategoryMsgLine(); => categoryMessageLine
 */
class Message {

  messages = {
    errorMsg: 'Algo deu errado, tente de novo!',
    errorMsgLater: 'Algo deu errado, tente de novo mais tarde!',
    register: 'Para jogar o RPG, você deve se registar usando *!registrar*!',
    audioInvalid: 'Áudio invalido para conversão, use outro!'
  }

  CreateCategoryMsgOnMenu(categoryName: string, isFirstCategory: boolean, categoryEmoji: string){
    return `${isFirstCategory ? '' : '╎\n'}` +
           `┏═•✭･ﾟ✧･ﾟ| ⊱✿⊰ |✭˚･ﾟ✧･ﾟ•═┓\n` +
           `┣ *${categoryName.toUpperCase()}* 【${categoryEmoji}】\n` +
           `┗═•✭･ﾟ✧･ﾟ| ⊱✿⊰ |✭˚･ﾟ✧･ﾟ•═┛ \n` + 
           '╎\n';
  }

  createAllTaskCategoryOnMenu(tasks: Task[], categoryEmoji: string) {
    return  `┏═•✭･ﾟ✧･ﾟ| ⊱✿⊰ |✭˚･ﾟ✧･ﾟ•═┓\n` +  
            `┃╭━━─ ≪ •❈• ≫ ─━━╮\n` +
            `┃╎ \n` +
            `${tasks.map(task => {
              return this.createTaskMsgLineOnMenu(task.taskName, task.hint, categoryEmoji)
            })}`.replaceAll(',', '') +
            `┃╎ \n` +
            `┃╰━━─ ≪ •❈• ≫ ─━━╯ \n` +
            `┗═•✭･ﾟ✧･ﾟ| ⊱✿⊰ |✭˚･ﾟ✧･ﾟ•═┛\n`;

  
  } 

  createTaskMsgLineOnMenu(taskName: string, taskHint: string | undefined, categoryEmoji: string) {
    return `┃╎✰ۣۜۜ͜͡${categoryEmoji} ${taskName} ${taskHint ? taskHint : ''}\n` +
    `┃╎ \n`;
  }
}

/**
┏═•✭･ﾟ✧･ﾟ| ⊱✿⊰ |✭˚･ﾟ✧･ﾟ•═┓
┃╭━━─ ≪ •❈• ≫ ─━━╮
┃╎✫✫✫✫✫
┃╎  Oiê @Meu Amor Boa tarde TwT
┃╎ ✯ Número: 5524992343969
┃╎ ✯ Bot: ᴠᴏɪᴅ-ʙᴏᴛ
┃╎ ✯ Dono: @ꜰ.ꜰᴏɴꜱᴄꜱ
┃╎ ✯ Hora: 15:10:26
┃╎ ✯ Premium: Não
┃╎ ✯ Usuario: 𖣂
┃╎✫✫✫✫✫
┃╰━━─ ≪ •❈• ≫ ─━━╯
┗═•✭･ﾟ✧･ﾟ| ⊱✿⊰ |✭˚･ﾟ✧･ﾟ•═┛
*/

export default Message;