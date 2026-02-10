import type { userDefaultReturn } from "../types/UserType.ts";
import type User from "./user.ts";
import type Users from "./users.ts";
import RequestInfo from "./requestInfo.ts";
import Anime from "./anime.ts";
import EvolutionApi from "./evolutionAPI.ts";
import FlipCoin from "./flipCoin.ts";
import RickAndMorty from "./rickAndMorty.ts";
import Photo from "./photo.ts";
import Gemini from "./gemini.ts";
import Content from "./film.ts";
import Wikipedia from "./wikipedia.ts";
import Base64 from "./base64.ts";
import Tasks from "./tasks.ts";
import Message from "./message.ts";
import Youtube from "./youtube.ts";
import Tiktok from "./tiktok.ts";
import Meme from "./meme.ts";
import MoneyExchange from "./moneyExchange.ts";
import BrasilApi from "./brasilApi.ts";
import VoiceMod from "./voiceMod.ts";
import IBGE from "./ibge.ts";
import NumberFormat from "./numberFormat.ts";
import CNPJ from "./CNPJ.ts";
import Code from "./code.ts";
import Motivation from "./motivation.ts";
import Calculate from "./calculate.ts";
import Translate from "./translate.ts";
import {ChessFull, ChessMatch} from "./chess.ts";
import Giphy from "./giphy.ts";
import Hex from "./hex.ts";
import Facts from "./facts.ts";
import News from "./news.ts";
import UnixTimestamp from "./unixTimestamp.ts";
import Game from "./game.ts";
import Jokes from "./jokes.ts";
import ip from "./ip.ts";
import Sticker from "./sticker.ts";
import ShortUrl from "./shortUrl.ts";
import Nasa from "./nasa.ts";
import Domain from "./domain.ts";
import Screenshot from "./screenshot.ts";
import Poll from "./poll.ts";
import Bot from "./bot.ts";
import Music from "./music.ts";
import Password from "./password.ts";
import Animals from "./animals.ts";
import Shopee from "./shopee.ts";
import Country from "./country.ts";
import Name from "./name.ts";
import Coffee from "./coffee.ts";
import Database from "./database.ts";
import { isNumber } from "tone";
import Flirt from "./flirt.ts";
import { getSystemErrorMessage } from "util";
import { equalPowerScale } from "tone/build/esm/core/type/Conversions.js";
import RobotAudio from "./audio.ts";
import Video from "./video.ts";

const evolutionAPI = new EvolutionApi();
const translate = new Translate();
const numberFormat = new NumberFormat();
const password = new Password();
const bot = Bot;
const db = new Database();
const message = new Message().messages;

class Task {
  taskName: string;
  hint: string | undefined;
  taskCategory: {name: string, emoji: string};
  tasksNames: Tasks['tasksName'] | undefined;

  getAllTasks(tasks: Tasks){
    const allTasks = {};
    this.tasksNames = tasks.tasksName;  

    const tasksNames = tasks.tasksName;

    allTasks[tasksNames.menu] = this.taskMenu;
    allTasks[tasksNames.categorys] = this.taskCategorys;
    allTasks[tasksNames.status] = this.taskStatus;
    allTasks[tasksNames.suport] = this.taskSuport;
    allTasks[tasksNames.commands] = this.taskCommands;
    allTasks[tasksNames.donate] = this.taskDonate;

    allTasks[tasksNames.register] = this.taskRegister;
    allTasks[tasksNames.rank] = this.taskRank;
    allTasks[tasksNames.gold] = this.taskGold;
    allTasks[tasksNames.quiz] = this.taskQuiz;
    allTasks[tasksNames.mine] = this.taskMine;
    allTasks[tasksNames.store] = this.taskStore;
    allTasks[tasksNames.buyPickaxe] = this.taskBuyPickaxe;

    allTasks[tasksNames.calculate] = this.taskCalculate;
    allTasks[tasksNames.factorial] = this.taskFactorial;
    allTasks[tasksNames.exponetial] = this.taskExponential;
    allTasks[tasksNames.sqrt] = this.taskSqrt;
    allTasks[tasksNames.pi] = this.taskPi;
    allTasks[tasksNames.rNum] = this.taskRandomNumber;

    allTasks[tasksNames.st] = this.taskSt;
    allTasks[tasksNames.active] = this.taskActive;
    allTasks[tasksNames.kill] = this.taskKill;
    
    allTasks[tasksNames.img] = this.taskImg;
    allTasks[tasksNames.imgd] = this.taskImg;

    allTasks[tasksNames.anime] = this.taskAnime;
    allTasks[tasksNames.nasa] = this.taskNasa;
    allTasks[tasksNames.name] = this.taskNameRegion;
    allTasks[tasksNames.emoji] = this.taskEmoji;
    allTasks[tasksNames.meme] = this.taskMeme;
    allTasks[tasksNames.flipCoin] = this.taskFlipCoin;
    allTasks[tasksNames.yesNo] = this.taskYesOrNo;
    allTasks[tasksNames.motivation] = this.taskMotivation;
    allTasks[tasksNames.facts] = this.taskFacts;
    allTasks[tasksNames.catFacts] = this.taskCatFacts;
    allTasks[tasksNames.catPhoto] = this.taskRandomCatPhoto;
    allTasks[tasksNames.dogPhoto] = this.taskRandomDogPhoto;
    allTasks[tasksNames.coffeePhoto] = this.taskRandomCoffeePhoto;
    allTasks[tasksNames.insult] = this.taskInsult;

    allTasks[tasksNames.createChessGame] = this.taskCreateChessGame;
    allTasks[tasksNames.moveChessGame] = this.taskMoveChessGame;
    allTasks[tasksNames.giveUpChessGame] = this.taskGiveUpChessGame;
    allTasks[tasksNames.puzzleChess] = this.taskGetRandomPuzzleChess;
    allTasks[tasksNames.playerChess] = this.taskGetPlayerInfoOnChessCom;

    // Bot Category
    allTasks[tasksNames.creator] = this.taskCreator;
    allTasks[tasksNames.say] = this.taskSayIt;
    allTasks[tasksNames.thanks] = this.taskThanks;
    allTasks[tasksNames.curseBot] = this.taskCurse;
    allTasks[tasksNames.cigarrete] = this.taskGiveCigarette;

    allTasks[tasksNames.translate] = this.taskTranslate;
    allTasks[tasksNames.viralVideo] = this.taskViralVideo;
    allTasks[tasksNames.reupload] = this.taskReupload;
    allTasks[tasksNames.createAudio] = this.taskCreateAudio;

    allTasks[tasksNames.film] = this.taskFilm;
    allTasks[tasksNames.series] = this.taskFilm;
    
    allTasks[tasksNames.gemini] = this.taskGemini;

    allTasks[tasksNames.youtube] = this.taskYoutube;
    allTasks[tasksNames.youtubeAudioExtract] = this.taskYoutubeAudioExtract;

    allTasks[tasksNames.news] = this.taskNews;
    allTasks[tasksNames.tiktok] = this.taskTiktokVideo;
    allTasks[tasksNames.tiktokSearch] = this.taskTiktokSearch;
    allTasks[tasksNames.tiktokSearchInfo] = this.taskTiktokSearch;
    allTasks[tasksNames.tiktokUserByName] = this.taskTiktokUserByName;
    allTasks[tasksNames.tiktokUserById] = this.taskTiktokUserById;

    allTasks[tasksNames.freeGamePc] = this.taskFreeGamePc;
    allTasks[tasksNames.freeGameBrowser] = this.taskFreeGameBrowser;

    allTasks[tasksNames.music] = this.taskFindMusicAudio;
    allTasks[tasksNames.findArtist] = this.taskFindArtistByMusic;
    allTasks[tasksNames.lyric] = this.taskFindLyricByMusic;
    
    allTasks[tasksNames.shopee] = this.taskShopee;
    allTasks[tasksNames.shopeeGamer] = this.taskShopeeGamer;
    allTasks[tasksNames.shopeeHeadphone] = this.taskShopeeHeadphone;
    allTasks[tasksNames.shopeeMasc] = this.taskShopeeMasc;
    allTasks[tasksNames.shopeeFem] = this.taskShopeeFem;

    allTasks[tasksNames.cep] = this.taskCep;
    allTasks[tasksNames.ddd] = this.taskDDD;
    allTasks[tasksNames.cnpj] = this.taskCNPJ;
    allTasks[tasksNames.holidays] = this.taskHolidays;

    allTasks[tasksNames.lowVoice] = this.taskLowVoice;
    allTasks[tasksNames.superLowVoice] = this.taskSuperLowVoice;
    allTasks[tasksNames.highVoice] = this.taskHighVoice;
    allTasks[tasksNames.superHighVoice] = this.taskSuperHighVoice;
    allTasks[tasksNames.reverseVoice] = this.taskReverseVoice;
    allTasks[tasksNames.slowVoice] = this.taskSlowVoice;
    allTasks[tasksNames.fastVoice] = this.taskFastVoice;
    allTasks[tasksNames.echo] = this.taskEchoVoice;


    allTasks[tasksNames.wiki] = this.taskWiki;
    allTasks[tasksNames.exchange] = this.taskExchange;
    
    allTasks[tasksNames.lock] = this.taskLock;
    allTasks[tasksNames.unlock] = this.taskUnlock;
    allTasks[tasksNames.mentionAll] = this.taskMentionAll;
    allTasks[tasksNames.deleteMessage] = this.taskDeleteMessage;
    allTasks[tasksNames.mute] = this.taskMuteUser;
    allTasks[tasksNames.desmute] = this.taskDesmuteUser;

    allTasks[tasksNames.shutdownAlert] = this.taskShutDownAdvice;
    allTasks[tasksNames.shutdown] = this.taskShutDown;
    allTasks[tasksNames.opening] = this.taskOpenBot;
    allTasks[tasksNames.advice] = this.taskAdvice;

    allTasks[tasksNames.rickMorty] = this.taskRickMorty;
    allTasks[tasksNames.fm] = this.taskFigImg;
    allTasks[tasksNames.searchSticker] = this.taskSearchSticker;
    allTasks[tasksNames.qrCode] = this.taskQrCode;
    allTasks[tasksNames.url] = this.taskShortUrl;
    allTasks[tasksNames.userImage] = this.taskGetUserImage;
    allTasks[tasksNames.print] = this.taskScreenshotWebsite;
    allTasks[tasksNames.dice] = this.taskRollDice;
    allTasks[tasksNames.flirt] = this.taskFlirt;

    allTasks[tasksNames.poll] = this.taskRandomPoll;
    allTasks[tasksNames.foodPoll] = this.taskFoodPoll;
    allTasks[tasksNames.fightPoll] = this.taskFightPoll;
    allTasks[tasksNames.timePoll] = this.taskTimePoll;
    allTasks[tasksNames.powerPoll] = this.taskPowerPoll;
    allTasks[tasksNames.placePoll] = this.taskPlacesPoll;

    allTasks[tasksNames.hex] = this.taskConvertTextToHex;
    allTasks[tasksNames.text] = this.taskConvertHexToText;

    allTasks[tasksNames.npm] = this.taskNPM;
    allTasks[tasksNames.pip] = this.taskPIP;
    allTasks[tasksNames.ipv6] = this.taskIPV6;
    allTasks[tasksNames.createPassword] = this.taskGenerateStrongPassword;
    allTasks[tasksNames.uuid] = this.taskGenerateUUID;
    allTasks[tasksNames.domain] = this.taskCheckDomain;
    return allTasks;
  }

  constructor(
    taskName: string,
    taskCategory: {name: string, emoji: string},
    hint: string | undefined
  ) {
    this.taskName = taskName;
    this.taskCategory = taskCategory;
    this.hint = hint;
  }

  public doTask(
    request: RequestInfo,
    user: User,
    users: Users,
    tasks: Tasks
  ): userDefaultReturn {
 
    // Collect Task
    const taskFunction: (request, user, users, tasks) => userDefaultReturn = this.getAllTasks(tasks)[this.taskName];
    //--------------------------------------------------------------------
    
    // DO TASK
    if (taskFunction) {
      return taskFunction(request, user, users, tasks);
    }
    return {
      success: false,
      msg: "Comando não encontrado!",
      mentions: undefined,
    };
  }

  private async taskMenu(
    request: RequestInfo,
    user: User,
    users: Users,
    tasks: Tasks
  ): Promise<userDefaultReturn>  {
    const userCategoryRequest = request.userMessage.split(" ").slice(1).join("+");
    const messageStructure = new Message();
    
    let menuMsg = '';

    const organizedCategorys: {category: Task[]} | {} = {};

    tasks.allTasks.forEach((task, i, array) => {
      if (!organizedCategorys[task.taskCategory.name.toLowerCase()]){
        organizedCategorys[task.taskCategory.name.toLowerCase()] = [];
      }
      organizedCategorys[task.taskCategory.name.toLowerCase()].push(task);
    })

    // if user request for an specific category
    if (userCategoryRequest){
      const tasks: Task[] = organizedCategorys[userCategoryRequest.toLowerCase()];
      if (!tasks){
        return {
          success: false,
          msg: "Categoria não encontrada, tente outra!",
          mentions: undefined
        }
      }

      if (!tasks[0]){
        return {
          success: false,
          msg: "Categoria encontrada, mas não possui comandos!",
          mentions: undefined
        }
      }

      const menuMsg = 
      messageStructure.CreateCategoryMsgOnMenu(userCategoryRequest, true, tasks[0].taskCategory.emoji) 
      +
      messageStructure.createAllTaskCategoryOnMenu(tasks, tasks[0].taskCategory.emoji);

      return {
        success: true,
        msg: menuMsg,
        mentions: undefined
      };
    }

    
    console.log(organizedCategorys);
    

    for (const chave in organizedCategorys) {
      menuMsg += messageStructure.CreateCategoryMsgOnMenu(
        chave, 
        Object.keys(organizedCategorys)[0] == chave,
        organizedCategorys[chave][0].taskCategory.emoji
      );
      
      const tasks: Task[] = organizedCategorys[chave];
      if (!tasks[0]){ continue; }

      console.log(typeof organizedCategorys[chave]);
      
      menuMsg += messageStructure.createAllTaskCategoryOnMenu(tasks, tasks[0].taskCategory.emoji);
      //if you want change just change the top line to this
      // tasks.map(task => {
      //   menuMsg += messageStructure.createTaskMsgLineOnMenu(
      //     task.taskName, 
      //     task.hint,
      //     task.taskCategory.emoji
      //   );
      // })

    }
    
    return {success: true, msg: menuMsg.trim(), mentions: undefined};
  }

  // TODO: Create categorys
  private async taskCategorys(
    request: RequestInfo,
    user: User,
    users: Users,
    tasks: Tasks
  ): Promise<userDefaultReturn>  {
    const categorysMessage = 
    `_(TODAS AS CATEGORIAS)_\n\n_Use *!menu 'categoria'* com a categoria desejada parareceber a categoria desejada_\n\n` 
    +
    `${Object.values(tasks.categorys).map((cateogory, i, a) => {     
      return `- _*${cateogory.name}*_\n`
    })}\n`.replaceAll(',', '') 
    +
    `Exemplo: *!menu '${tasks.categorys.funny.name}'*`;

    return {
      success: true,
      msg: categorysMessage,
      mentions: undefined
    }
  }

  private async taskStatus(
    request: RequestInfo,
    user: User,
    users: Users
  ): Promise<userDefaultReturn> {
    const statusMsg = 
    `(Todas as informações sobre ${user.name})\n\n` 
    +
    `🪪  *Nome:* _${user.name}_ \n\n` 
    +
    `🦧  *Apelido:* _@${user.number}_ \n\n`
    +
    `${user.status ? `🪪  *Status:* _"${user.status}"_ \n\n` : ''}`
    +
    `📞  *Número:* _+${user.number}_ \n\n` 
    +
    `👀  *Último Comando:* ${user.lastCommand || "[NENHUM COMANDO USADO]"} \n\n`
    +
    `🎲  *Comandos:* _Usou ${user.commandAmount} comando(s)!_\n\n`
    +
    `📱  *Sistema do Usúario:* _${user.source.toUpperCase()}_\n\n`
    +
    `(Algumas informações podem ser apagadas, caso o servidor reinicie)`;

    if (user.statusImageProfileUrl){
      console.log('iamgeUrl: ' + user.statusImageProfileUrl);
      
      evolutionAPI.sendMedia(
      request,
      user.statusImageProfileUrl, 
      statusMsg,
      false,
      'jpg',
      [user.jid]);
      return {
        success: true, 
        msg: "",
        mentions: [user.jid]
      }
    }
    
    return {
      success: true,
      msg: statusMsg,
      mentions: [user.jid]
    }
  }

  private async taskSuport(
    request: RequestInfo,
    user: User,
    users: Users,
    tasks: Tasks
  ): Promise<userDefaultReturn> {
    const userTaskError = request.userMessage.split(" ")[1];
    const userTaskMsgError = request.userMessage.split(" ").slice(1).slice(1).join(' ');
  
    if (!userTaskError) {
      return {
        success: false,
        msg: `Digite o nome do comando e reporte o problema, exemplo: *!suporte '!menu' 'não está funcionando'*`,
        mentions: undefined,
      };
    }

    if (!userTaskMsgError) {
      return {
        success: false,
        msg: `Digite o motivo do erro e reporte o problema, exemplo: *!suporte '!menu' 'não está funcionando'*`,
        mentions: undefined,
      };
    }

    const taskWithError = tasks.findTask(userTaskError.replaceAll("'", ""));
    if (!taskWithError){
      return {
        success: false,
        msg: "Comando não encontrado, use um comando válido!",
        mentions: undefined
      }
    }

    const errorMsg = 
    `_(Erro Encontrado!)_ \n\n` +
    `*Comando:* *${taskWithError.taskName}* \n\n`
    +
    `*Categoria:* _*${taskWithError.taskCategory.name}*_ ${taskWithError.taskCategory.emoji}`
    +
    `${userTaskMsgError ? `\n\n*Motivo do erro:* _*${userTaskMsgError}*_` : ''}`

    evolutionAPI.sendMessageToOwner(
      request,
      errorMsg
    );
    
    return {
      success: true,
      msg: "Erro enviado para o desenvolvedor com sucesso ✅",
      mentions: undefined
    }
  }

  private async taskCommands(
    request: RequestInfo,
    user: User,
    users: Users,
    tasks: Tasks
  ): Promise<userDefaultReturn>  {
    const commandsMessage = 
    `_O bot possui *${tasks.allTasks.length} comandos* 😯_`;
    

    return {
      success: true,
      msg: commandsMessage,
      mentions: undefined
    }
  }

  private async taskDonate(
    request: RequestInfo,
    user: User,
    users: Users,
    tasks: Tasks
  ): Promise<userDefaultReturn>  {

    const donateMessage = 
    '☕ Faça uma doação para eu comprar um café!\n\n' +
    '😃 Qualquer valor ajuda muito!\n\n' +
    '🔑 *Doar via Pix: +5524988417737*\n\n'
    + 
    '💳 *Doar via Cartão de Crédito: link.mercadopago.com.br/doacaobot*\n\n'
    +
    `(Obrigado pelo carinho 😊❤️)`;
    
    return {
      success: true,
      msg: donateMessage,
      mentions: undefined
    }
  }

  private async taskCreator(
    request: RequestInfo,
    user: User,
    users: Users,
    tasks: Tasks
  ): Promise<userDefaultReturn> {
    const ownerMsg = 
    `O meu criador se chama _*Lucas Simas*_ 😻\n` 
    +
    `Número do meu criador: +5524988417737 \n\n`
    +
    `(Caso tenha algum problema com algum comando, use *!suporte 'comando' 'motivo do erro'*)`;

    return {
      success: true,
      msg: ownerMsg,
      mentions: undefined
    }
  }
  
  private async taskRegister(
    request: RequestInfo,
    user: User,
    users: Users,
    tasks: Tasks
  ): Promise<userDefaultReturn> {
    
    if (await db.getUserInfoByJid(request.userJid, request.senderJid)){
      return {
        success: false,
        msg: "*Você já é registrado no rpg.*".toUpperCase(),
        mentions: undefined
      }
    }
    
    db.addUserData(
        user.jid, 
        user.lid, 
        user.number,
        user.name, 
        request.senderJid
    );

    return {
      success: true,
      msg: '*Usúario registrado no rpg com sucesso!* ✅'.toUpperCase(),
      mentions: undefined
    }
  }

  private async taskStore(
    request: RequestInfo,
    user: User,
    users: Users,
    tasks: Tasks
  ): Promise<userDefaultReturn> {
    const userInfo = await db.getUserInfoByJid(request.userJid, request.senderJid);
    if (!userInfo){
      return {
        success: false,
        msg: message.register,
        mentions: undefined
      }
    }

    const storeMsg = 
    `
⚒️ *FERRARIA DO VELHO OTTO* ⚒️
---------------------------------------
Olá, *${user.name}*! O que deseja comprar hoje? 
Trabalhar nas minas exige as melhores ferramentas!

⚒️ *ITEM DISPONÍVEL:*
   
*Item:* Picareta de Ferro
*Preço:* 💰 \`20 moedas\`
*Comando:* \`!comprar_picareta\`
*Efeito:* Permite coletar minérios valiosos.

---------------------------------------
💰 _Seu ouro aparecerá aqui ao lado no perfil._
⚠️ _Dica: Digite o comando exatamente como acima._
  `.trim();

    evolutionAPI.sendMedia(
      request,
      'https://www.universoeso.com.br/wp-content/uploads/2016/05/bs.jpg',
      storeMsg 
    )

    return{
      success: false,
      msg: '',
      mentions: undefined
    }
  }

  private async taskMine(
    request: RequestInfo,
    user: User,
    users: Users,
    tasks: Tasks
  ): Promise<userDefaultReturn> {
    const userInfo = await db.getUserInfoByJid(request.userJid, request.senderJid);
    if (!userInfo){
      return {
        success: false,
        msg: message.register,
        mentions: undefined
      }
    }

    if (userInfo['pickaxe_durability'] - 20 < 0){
      return {
        success: false,
        mentions: undefined,
        msg: `
⚠️ *CRACK!* ⚠️
---------------------------------------
"Opa, parece que você forçou demais, *${user.name}*!"

❌ *FERRAMENTA QUEBRADA!*
Sua *Picareta de Ferro* não aguenta mais nem um golpe. O cabo rachou e o ferro entortou.

---------------------------------------
🛒 *O que fazer?*
Vá até o mercado e compre uma nova para continuar sua jornada!

👉 Use: \`!loja\` ou \`!comprar_picareta\`
💰 *Custo:* \`20g\`
  `.trim()
      }
    }

    const goldFound = Math.floor(Math.random() * (30 - 10 + 1)) + 10

    await db.setPickage(request.userJid, request.senderJid, userInfo['pickaxe_durability'] - 20);

    if (new Calculate().randomIntNumber(1, 5) == 5){

      const frases = [
        "Você atingiu apenas pedra seca...",
        "Só encontrou cascalho e poeira.",
        "O filão de ouro parece estar mais fundo.",
        "Suas mãos doem, mas nada brilhou dessa vez."
      ];
      const randomPhrase = frases[Math.floor(Math.random() * frases.length)];

      return {
        success: false,
        mentions: undefined,
        msg: `
⛏️ *MINERAÇÃO FRUSTRADA* ⛏️
---------------------------------------
"Suor e esforço, mas a sorte não veio, *${user.name}*."

🪨 *RESULTADO:* ${randomPhrase}

🛠️ Durabilidade Restante: \`${userInfo['pickaxe_durability'] - 20}%\`
---------------------------------------
💪 _Não desista! O próximo golpe pode ser o da fortuna._
👉 _Dica: Descance um pouco e tente novamente!_
  `.trim(),
      }
    }


    await db.setUserGold(request.userJid, request.senderJid, userInfo['gold'] + goldFound)


    const successMineMsg = 
`
⛏️ *MINERAÇÃO CONCLUÍDA!* ⛏️
---------------------------------------
"Clang! Clang! *${user.name}*, você atingiu um veio de ouro!"

✨ *RECOMPENSA:*
💰 Você encontrou: \`${goldFound}g de ouro\`
🛠️ Durabilidade da Picareta: \`${userInfo['pickaxe_durability'] - 20}%\`

---------------------------------------
💪 _Seus músculos doem, mas seus bolsos pesam!_
👉 _Dica: Digite !ouro para ver seu saldo total._
  `.trim();

  evolutionAPI.sendMedia(
    request,
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtiYdfDmrULHmol6Aj4CNrBmxd2snw_30FC3azIvKnKiAYkTB_IoF3uEuR4BazQgKQ5Pcq_eT7e7Q3XB00veRjFwGZ34uo_HYyb_1wOXrFuqOXKho2G_wpLtlgQ4S8esIETgvpl8MC8dk/w1200-h630-p-k-no-nu/What+is+Mining+%25281%2529.jpg',
    successMineMsg
  )
    return {
      success: false,
      mentions: undefined,
      msg: '',
    }
  }

  private async taskBuyPickaxe(
    request: RequestInfo,
    user: User,
    users: Users,
    tasks: Tasks
  ): Promise<userDefaultReturn> {
    const userInfo = await db.getUserInfoByJid(request.userJid, request.senderJid);
    if (!userInfo){
      return {
        success: false,
        msg: message.register,
        mentions: undefined
      }
    }

    const userGold = userInfo['gold'];

    const noMoneyMsg =
`
🏚️ *FERRARIA DO VELHO OTTO* 🏚️
---------------------------------------
"Escuta aqui, *${user.name}*... 
Eu não trabalho de graça e o ferro está caro!"

❌ *VENDA RECUSADA!*
💰 *Seu Ouro:* \`${userGold}g\`
🏷️ *Preço:* \`20g\`

⚠️ Faltam *${20- userGold }g* para você conseguir comprar a picareta.

---------------------------------------
💡 _Dica: Participe do !quiz para ganhar mais moedas ou tente minerar com as mãos!_`.trim()

  const stillHavePickageMsg = 
`
🏚️ FERRARIA DO VELHO OTTO 🏚️
---------------------------------------
"Escuta aqui, *${user.name}*... não seja tolo, Sua picareta ainda está inteira!"

❌ *VENDA RECUSADA!* 
⚒️ *Status:* Ferramenta em bom estado 

⚠️ Você *já possui uma Picareta funcional* no inventário. Volte aqui quando ela quebrar ou se tornar sucata!
---------------------------------------
💡 Dica: Use o comando *!status* para verificar a durabilidade atual do seu equipamento.        
`.trim();

  const buyMessage =
`
⚒️ *FERRARIA DO VELHO OTTO* ⚒️
---------------------------------------
"Belo investimento, *${user.name}*! 
Essa picareta foi forjada com o melhor ferro da região."

✅ *COMPRA CONCLUÍDA!*
📦 *Item:* \`Picareta de Ferro\`
💰 *Gasto:* \`20g\`
👛 *Saldo Restante:* \`${userGold - 20}g\`

---------------------------------------
✨ *EFEITO:* Agora você pode usar o comando \`!minerar\` para buscar tesouros!`.trim();

const storeImgUrl = `https://images.uesp.net/thumb/5/59/SR-npc-Lod.jpg/1200px-SR-npc-Lod.jpg`;

    // no money 
    if (userGold < 20){
      evolutionAPI.sendMedia(
        request,
        storeImgUrl,
        noMoneyMsg
      )
      return {
        success: false,
        mentions: undefined,
        msg: ''
      }
    }

    if (userInfo['pickaxe_durability'] > 0){
      evolutionAPI.sendMedia(
        request,
        storeImgUrl,
        stillHavePickageMsg
      )
      return {
        success: false,
        mentions: undefined,
        msg: ''
      }
    }


    await db.setUserGold(request.userJid, request.senderJid, userGold - 20);
    await db.setPickage(request.userJid, request.senderJid, 100);

    evolutionAPI.sendMedia(
      request,
      storeImgUrl,
      buyMessage 
    )

    return{
      success: false,
      msg: '',
      mentions: undefined,
    }
  }

  private async taskRank(
    request: RequestInfo,
    user: User,
    users: Users,
    tasks: Tasks
  ): Promise<userDefaultReturn> {
    const usersInfo = await db.getAllUsersByGroup(request.senderJid);
    console.log('usersInfo: ');
    console.log(usersInfo);
    
    if (!usersInfo){
      return {
        success: false,
        msg: "*Nenhum usúario está registrado no grupo, use _!registrar_ para jogar o RPG*".toUpperCase(),
        mentions: undefined
      }
    }

    const usersRank = usersInfo.sort((a, b) => b['gold'] - a['gold']).map((user, i, a) => {
      return `🏅 ${i+1}º @${user['number']} - \`${user['gold']}g\` ${i == a.length - 1 ? '' : '\n\n'}`
    });

    const rankMsg = 
    `
🏆 RANKING DE RIQUEZA (OURO) 🏆
---------------------------------------
${usersRank}
---------------------------------------
"O ouro compra a espada, mas não a coragem!"`.trim();

    return {
      success: true,
      msg: rankMsg,
      mentions: usersInfo.map((user) => user['jid'])
    }
  }


  private async taskGold(
    request: RequestInfo,
    user: User,
    users: Users,
    tasks: Tasks
  ): Promise<userDefaultReturn> {
    const gold = await db.getUserGold(request.userJid, request.senderJid);
    if (!gold){
      return {
        success: false,
        msg: message.register,
        mentions: undefined
      }
    }

    let status = "Cidadão Comum";
    if (gold > 1000) status = "Explorador Rico 💰";
    if (gold > 5000) status = "Magnata das Minas 💎";
    if (gold > 10000) status = "Rei do Tesouro 👑";

    const goldMessage =
`
📜 *PERFIL DE RIQUEZA: ${user.name.toUpperCase()}* 📜
---------------------------------------
👤 *Título:* ${status}
💰 *Saldo Atual:* \`${gold.toLocaleString('pt-BR')}g\` de ouro

${gold === 0 
  ? "❌ *Pobreza extrema!* Vá trabalhar na mina agora mesmo!" 
  : "✨ Seus bolsos estão brilhando! O que vai comprar hoje?"}
---------------------------------------
👉 Dica: Digite !loja para comprar algo.`

  /*
  `
📜 *PERFIL DE RIQUEZA: ${nome.toUpperCase()}* 📜
---------------------------------------
👤 *Título:* ${status}
💰 *Saldo Atual:* \`${gold.toLocaleString('pt-BR')}g\`

${gold === 0 
  ? "❌ *Pobreza extrema!* Vá trabalhar na mina agora mesmo!" 
  : "✨ Seus bolsos estão brilhando! O que vai comprar hoje?"}
---------------------------------------
🕹️ _Use !loja para gastar suas moedas_
  `.trim();
  */

  evolutionAPI.sendMedia(
    request,
    'https://acdmin.com.br/wp-content/uploads/2024/11/IMG_BLOG_-_MI_48-1024x576.webp',
    goldMessage
  );

    return {
      success: true,
      msg: '',
      mentions: undefined
    }
  }

  private async taskRob(
    request: RequestInfo,
    user: User,
    users: Users,
    tasks: Tasks
  ): Promise<userDefaultReturn> {
    const userInfo = await db.getUserInfoByJid(request.userJid, request.senderJid);
    if (!userInfo){
      return {
        success: false,
        msg: message.register,
        mentions: undefined
      }
    }


  evolutionAPI.sendMedia(
    request,
    'https://acdmin.com.br/wp-content/uploads/2024/11/IMG_BLOG_-_MI_48-1024x576.webp',
    ''
  );

    return {
      success: true,
      msg: '',
      mentions: undefined
    }
  }

  private async taskQuiz(
    request: RequestInfo,
    user: User,
    users: Users,
    tasks: Tasks
  ): Promise<userDefaultReturn> {
    const userQuiz = request.userMessage.split(' ').slice(1)[0];
    if (!userQuiz){
      return {
        success: false,
        msg: "*Adicione um número entre 0 a 5*".toUpperCase(),
        mentions: undefined
      }
    }
    const numberUserQuiz = Number(userQuiz);
    if (isNaN(numberUserQuiz) && numberUserQuiz >= 0 && numberUserQuiz <= 5){
      return {
        success: false,
        msg: "*Adicione um número entre 0 a 5*".toUpperCase(),
        mentions: undefined
      }
    }

    try {
        // 1. Buscar os dados do usuário
      const user = await db.getUserInfoByJid(request.userJid, request.senderJid);
      if (!user){
        return {
          success: false,
          msg: message.register,
          mentions: undefined
        }
      }


      const now = new Date();
      const fullDayByMs = 24 * 60 * 60 * 1000; // 86.400.000 ms

      const dataUltimoQuiz = new Date(user.last_quiz_time);
      const timePassed = now.getTime() - dataUltimoQuiz.getTime();

        // 2. Verificar o Cooldown
        if (user) {
            if (timePassed >= fullDayByMs) {
                await db.setQuizChances(
                  request.userJid,
                  request.senderJid,
                  5
                )
            }
        }

        // 3. Se passou (ou é a primeira vez), rodar a lógica do Quiz
        const correctNumber = Math.floor(Math.random() * 5) + 1;
        const win = numberUserQuiz === correctNumber;

        const quizChances = await db.getQuizChances(request.userJid, request.senderJid);
        if (quizChances != 0 && !quizChances){
          return {
            success: false,
            msg: message.errorMsgLater,
            mentions: undefined
          }
        }

        if (quizChances <= 0){
          const segundos = Math.floor((timePassed / 1000) % 60);
          const minutos = Math.floor((timePassed / (1000 * 60)) % 60);
          const horas = Math.floor((timePassed / (1000 * 60 * 60)));

          return {
            success: false,
            msg: `⏳ Você já tentou a sorte hoje. Suas energias recarregam daqui ${horas} horas e ${minutos} minutos ⏳`,
            mentions: undefined
          }
        }

        await db.setQuizChances(request.userJid, request.senderJid, quizChances - 1)

        if (win){
          const userGold = await db.getUserGold(request.userJid, request.senderJid);
          if (userGold != 0 && !userGold){
            return {
              success: false,
              msg: message.errorMsgLater,
              mentions: undefined
            }
          }

          await db.setUserGold(request.userJid, request.senderJid, userGold + 20);
          

          const winMessage = 
          `✨ *VITÓRIA NO QUIZ!* ✨\n\n` +
           `🎯 Você escolheu: *${numberUserQuiz}*\n` +
           `🎲 O número era: *${correctNumber}*\n\n` +
           `💰 Parabéns! Você acaba de ganhar *${20}g* de ouro!\n` +
           `⌛ Tentativas: *${quizChances - 1}* de *5* `
           
           return {
            success: true,
            msg: winMessage,
            mentions: undefined
           }
        } else {
          const losseMsg  =
          `❌ *QUE PENA...* ❌\n\n` +
           `Sua aposta: *${numberUserQuiz}*\n` +
           `O número era: *${correctNumber}*\n\n` +
           `⌛ Tentativas: *${quizChances - 1}* de *5*`

           return {
            success: false,
            msg: losseMsg,
            mentions: undefined
           }
        }
    } catch (e) {
        console.error(e);
        return {
          success: false,
          msg: "*Algo deu errado, tente de novo mais tarde...*",
          mentions: undefined
        };
    }

    return {
      success: true,
      msg: '',
      mentions: undefined
    }
  }

  private async taskAnime(
    request: RequestInfo,
    user: User,
    users: Users
  ): Promise<userDefaultReturn> {
    const userMessage = request.userMessage.split(" ").slice(1).join("+");
    if (!userMessage) {
      return {
        success: false,
        msg: "Digite o nome de um anime que você deseja, exemplo: *!anime attack on titan*",
        mentions: undefined,
      };
    }

    const animeInfo = new Anime().getAnimeInfo(userMessage);
    if (!animeInfo) {
      return {
        success: false,
        msg: "Anime não encontrado, tente denovo! ):",
        mentions: undefined,
      };
    }

    animeInfo.then((response) => {
      if (!response || !response['data'] ){
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: message.errorMsgLater,
            mentions: undefined
          }
        )
        return;
      }
      const animeData = response["data"]["data"][0];
      console.log(animeData);

      const animeMsg =
        `*Titulo Original:* ${animeData["title_japanese"]} \n \n` +
        `*Titulo Inglês:* ${animeData["title"]} \n \n` +
        `*Gênero Principal:* ${animeData["genres"][0]["name"]} \n\n` +
        `*Ano que lançou:* ${animeData["year"]} \n \n` +
        `*Nota:* ${animeData["score"]}/10 \n\n` +
        `*Link:* ${animeData["url"]}`;

      evolutionAPI.sendMedia(
        request,
        animeData["images"]["jpg"]["image_url"],
        animeMsg
      );
    });
    return {
      success: true,
      msg: "Preparando informações do anime...",
      mentions: undefined,
    };
  }

  private async taskFlipCoin(
    request: RequestInfo,
    user: User,
    users: Users
  ): Promise<userDefaultReturn> {
    const flipCoin = new FlipCoin().flipCoin();
    return {
      success: true,
      msg: `Lançando moeda...*${flipCoin}!*`,
      mentions: undefined,
    };
  }

  private async taskRickMorty(
    request: RequestInfo,
    user: User,
    users: Users
  ): Promise<userDefaultReturn> {
    const userMessage = request.userMessage.split(" ").slice(1).join("+");
    if (!userMessage) {
      return {
        success: false,
        msg: "Digite o nome do personagem que você deseja, exemplo: *!rick_morty rick*",
        mentions: undefined,
      };
    }

    const rickMortyInfo = new RickAndMorty().getCharacterInfo(userMessage);
    if (!rickMortyInfo) {
      return {
        success: false,
        msg: "Personagem não encontrado, tente outro!",
        mentions: undefined,
      };
    }

    rickMortyInfo.then((response) => {
      if (!response || !response['data'] ){
        evolutionAPI.sendMessage(
          request, 
          {
            success: false,
            msg: message.errorMsgLater,
            mentions: undefined
          }
        )
        return;
      }
      const characterInfo = response!["data"]["results"][0];

      const status = {
        Alive: "Vivo",
        Dead: "Morto",
        Unknown: "Desconhecido",
      };
      const gender = {
        Male: "Homem",
        Female: "Mulher",
        Genderless: "Sem gênero",
        Unknown: "Desconhecido",
      };

      const species = {
        Human: "Humano",
        Alien: "alienígena",
      };

      const infoMsg =
        `🪪  *Nome:* ${characterInfo["name"]} \n\n` +
        `👀  *Status:* ${
          status[characterInfo["status"]] || characterInfo["status"]
        } \n\n` +
        `👽  *Especie:* ${
          species[characterInfo["species"]] || characterInfo["species"]
        } \n\n` +
        `🧬  *Gênero:* ${
          gender[characterInfo["gender"]] || characterInfo["gender"]
        } \n\n` +
        `🌎  *Planeta de origem:* ${characterInfo["origin"]["name"].replace(
          "Earth",
          "Terra"
        )} \n\n` +
        `🌎  *Onde mora atualmente:* ${characterInfo["location"]["name"].replace(
          "Earth",
          "Terra"
        )}`;

      evolutionAPI.sendMedia(request, characterInfo["image"], infoMsg);
    });

    return {
      success: true,
      msg: "Preparando informações do personagem...",
      mentions: undefined,
    };
  }

  private async taskNasa(
    request: RequestInfo,
    user: User,
    users: Users
  ): Promise<userDefaultReturn> {
    const nasaPhoto = new Nasa().getPhotoOfDay();
    if (!nasaPhoto){
      return {
        success: false,
        msg: "Foto não encontrada, tente de novo mais tarde!",
        mentions: undefined
      }
    }

    nasaPhoto.then(nasaPhotoResponse => {
      if (!nasaPhotoResponse || !nasaPhotoResponse['data']){
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: "Servidor da nasa está em manutenção, tente de novo mais tarde. 🌏🪐",
            mentions: undefined
          }
        )
        return; 
      }
      const data = nasaPhotoResponse!['data'];
      const nasaMsg =
      `🌎 _${data['title']}_\n\n`
      +
      `_(Foto do dia tirado pela NASA)_`;

      evolutionAPI.sendMedia(
        request,
        data['url'],
        nasaMsg
      )
    });

    return {
      success: true,
      msg: "Coletando foto da nasa... (pode demorar um pouco)",
      mentions: undefined,
    };
  }

  private async taskNameRegion(
    request: RequestInfo,
    user: User,
    users: Users
  ): Promise<userDefaultReturn> {
    const userNameMsg = request.userMessage.split(' ').slice(1).join(' ')
    if (!userNameMsg){
      return {
        success: false,
        msg: "Adicione um nome, exemplo: !nome 'Lucas'",
        mentions: undefined,
      }; 
    } 

    const nameMsgRequest = new Name().getNameNacionalityPropability(userNameMsg.replaceAll("'", '').replaceAll('"', ''));
    
    nameMsgRequest.then(nameResponse => {
      if (!nameResponse){
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: "Nome não encontrada, tente de novo mais tarde!",
            mentions: undefined
          }
        )
        return;
      }

      console.log('country_id: ' + nameResponse['country_id']);
      

      const countryName = new Country().getCountryFullNameByAcronym(nameResponse['country_id']);
      if (!countryName){
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: "Nome não encontrada, tente de novo mais tarde!",
            mentions: undefined
          }
        )
        return;
      }
      
      const nameMsg = 
      `*${userNameMsg.at(0)?.toUpperCase() + userNameMsg.toLowerCase().slice(1)}* é do(a) *${countryName}* com ${(nameResponse['probability'] * 100).toFixed(2).replaceAll('.', ',')}% de certeza!`

      evolutionAPI.sendMessage(
        request,
        {
          success: true,
          msg: nameMsg,
          mentions: undefined
        }
      );

    });

    return {
      success: true,
      msg: "Coletando informações sobre  nome...",
      mentions: undefined,
    };
  }

  private async taskImg(request: RequestInfo, user: User, users: Users) {
    const userMessage = request.userMessage.split(" ").slice(1).join("+");
    console.log("userMessage: " + userMessage);
    
    if (!userMessage) {
      return {
        success: false,
        msg: "Digite o nome da imagem que você deseja, exemplo: *!img Praia*",
        mentions: undefined,
      };
    }

    const photo = await new Photo().getPhotoInfo(userMessage);
    if (!photo) {
      return {
        success: false,
        msg: "Algo deu errado, tente novamente!",
        mentions: undefined,
      };
    }

    const photoInfo = photo["data"]["photos"][0];
    if (!photoInfo) {
      return {
        success: false,
        msg: "Nenhuma imagem encontrada, tente outra!",
        mentions: undefined,
      };
    }
    console.log(photoInfo);

    const photoCapiton =
      request.userMessage.split(" ")[0] == "!imgd"
        ? `*Fotógrafo(a):* ${photoInfo["photographer"]} (${photoInfo["photographer_url"]}) \n\n` +
          `*Cor Média:* ${photoInfo["avg_color"]} \n\n` +
          `*Descrição:* ${photoInfo["alt"]}`
        : undefined;

    evolutionAPI.sendMedia(request, photoInfo["src"]["original"], photoCapiton);

    return { success: true, msg: "Preparando imagem...", mentions: undefined };
  }

  private async taskKill(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    if (!await evolutionAPI.userIsAdmin(request, user.lid)){
      return {
        success: true,
        msg: "Apenas *admins* podem usar esse comando...",
        mentions: undefined,
      };
    }
    
    if (!request.userMentionsLids || request.userMentionsLids.length == 0){
      return {
        success: false,
        msg: "Mencione um usuário para elimina-lo",
        mentions: undefined
      }
    }

    const userLid = request.userMentionsLids[0];
    if (!userLid){
      return {
        success: false,
        msg: 'Usuário não encontrado, mencione outro!',
        mentions: undefined
      }
    }

    const userInfo = evolutionAPI.fetchProfile(request, userLid);
    if (!userInfo){
      return {
        success: false,
        msg: 'Usuário não encontrado, mencione outro!',
        mentions: undefined
      }
    }

    const userContent = await userInfo;

    if (bot.isCreator(userContent['data']['wuid'])){
      return {
        success: false,
        msg: "*Você não pode remover o criador!*".toUpperCase(),
        mentions: undefined
      }
    }

    const userNumber = userContent['data']['wuid'].replace('@s.whatsapp.net','');
    if (!userNumber){
      return {
        success: false,
        msg: 'Usuário não encontrado, mencione outro!',
        mentions: undefined
      }
    }

    const userRemoving = await evolutionAPI.removeUser(request, userNumber);
    if (!userRemoving){
      return {
        success: false,
        msg: 'Algo deu errado, tente novamente!',
        mentions: undefined
      }
    }

    userRemoving;

    return {
      success: true,
      msg: "Usuário eliminado com sucesso",
      mentions: undefined
    }
  }

  private async taskLock(request: RequestInfo, user: User, users: Users) {

    if (!await evolutionAPI.userIsAdmin(request, user.lid)){
      return {
        success: true,
        msg: "Apenas *admins* podem usar esse comando...",
        mentions: undefined,
      };
    }

    evolutionAPI.groupSettings(
      "announcement",
      request.instance,
      request.apiKey,
      request.senderJid
    );

    return {
      success: true,
      msg: "*Mutando Todos*, os admins vão falar!",
      mentions: undefined,
    };
  }

  private async taskUnlock(request: RequestInfo, user: User, users: Users) {

    if (!await evolutionAPI.userIsAdmin(request, user.lid)){
      return {
        success: true,
        msg: "Apenas *admins* podem usar esse comando...",
        mentions: undefined,
      };
    }

    evolutionAPI.groupSettings(
      "not_announcement",
      request.instance,
      request.apiKey,
      request.senderJid
    );

    return {
      success: true,
      msg: "*Desmutando Todos*, podem voltar a conversar!",
      mentions: undefined,
    };
  }

  private async taskMentionAll(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    if (!await evolutionAPI.userIsAdmin(request, user.lid)){
      return {
        success: true,
        msg: "Apenas *admins* podem usar esse comando...",
        mentions: undefined,
      };
    }

    const allUsers = await evolutionAPI.getAllUsers(request);
    if (!allUsers){
      return {
        success: false,
        msg: message.errorMsgLater,
        mentions: undefined
      }
    }

    let mentionsMsg = '';
    let jids: string[] = [];
    allUsers['data']['participants'].forEach(user => {
      mentionsMsg += `@${user['phoneNumber'].replace('@s.whatsapp.net', '')} `;
      jids.push(user['phoneNumber']);
    })

    return {
      success: true,
      msg: mentionsMsg,
      mentions: jids,
    };
  }

  private async taskDeleteMessage(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    if (!await evolutionAPI.userIsAdmin(request, user.lid)){
      return {
        success: true,
        msg: "Apenas *admins* podem usar esse comando...",
        mentions: undefined,
      };
    }

    if (!request.quotedMessageId){
      return {
        success: false,
        msg: "*Mencione uma mensagem para deletar ela!*".toUpperCase(),
        mentions: undefined
      }
    }

    console.log('partiLid: '+ request.quotedParticipantLidJid);
    

    await evolutionAPI.deleteMessage(request, request.quotedMessageId, request.quotedParticipantLidJid!)

    return {
      success: true,
      msg: "*Mensagem deletada com sucesso ✅*",
      mentions: undefined,
    };
  }

  private async taskMuteUser(
    request: RequestInfo, 
    user: User,
    users: Users
  ): Promise<userDefaultReturn>  {
    if (!await evolutionAPI.userIsAdmin(request, user.lid)){
      return {
        success: true,
        msg: "Apenas *admins* podem usar esse comando...",
        mentions: undefined,
      };
    }
    
    if (!request.userMentionsLids || request.userMentionsLids.length == 0){
      return {
        success: false,
        msg: "Mencione um usuário para mutá-lo",
        mentions: undefined
      }
    }
    
    const userLid = request.userMentionsLids[0];
    if (!userLid){
      return {
        success: false,
        msg: 'Usuário não encontrado, mencione outro!',
        mentions: undefined
      }
    }

    if (await evolutionAPI.userIsAdmin(request, userLid)){
      return {
        success: false,
        msg: "*Você não pode mutar outro admin. 🙅🏻‍♂️*".toUpperCase(),
        mentions: undefined
      }
    }


    const userInfo = evolutionAPI.fetchProfile(request, userLid);
    if (!userInfo){
      return {
        success: false,
        msg: 'Usuário não encontrado, mencione outro!',
        mentions: undefined
      }
    }
    

    const userContent = await userInfo;

    if (bot.isCreator(userContent['data']['wuid'])){
      return {
        success: false,
        msg: "*Você não pode mutar o criador!*".toUpperCase(),
        mentions: undefined
      }
    }

    const userMentionedJid = userContent['data']['wuid']
    console.log(userContent['data']);
    
    console.log('userMentionedJid');
    console.log(userMentionedJid);
    
    if (!userMentionedJid){
      return {
        success: false,
        msg: 'Usuário não encontrado, mencione outro!',
        mentions: undefined
      }
    }

    if (!bot.usersMutted[request.senderJid]){
      bot.usersMutted[request.senderJid] = [];
    }

    bot.usersMutted[request.senderJid]!.push(userMentionedJid);
   
    return {
      success: true,
      msg: "*Usúario mutado, qualquer nova mensagem dele será deletada ✅*".toUpperCase(),
      mentions: undefined
    }
  }

  private async taskDesmuteUser(
    request: RequestInfo, 
    user: User,
    users: Users
  ): Promise<userDefaultReturn>  {
    if (!await evolutionAPI.userIsAdmin(request, user.lid)){
      return {
        success: true,
        msg: "Apenas *admins* podem usar esse comando...",
        mentions: undefined,
      };
    }
    
    if (!request.userMentionsLids || request.userMentionsLids.length == 0){
      return {
        success: false,
        msg: "Mencione um usuário para mutá-lo",
        mentions: undefined
      }
    }
    
    const userLid = request.userMentionsLids[0];
    if (!userLid){
      return {
        success: false,
        msg: 'Usuário não encontrado, mencione outro!',
        mentions: undefined
      }
    }

    const userInfo = evolutionAPI.fetchProfile(request, userLid);
    if (!userInfo){
      return {
        success: false,
        msg: 'Usuário não encontrado, mencione outro!',
        mentions: undefined
      }
    }

    const userContent = await userInfo;

    if (bot.isCreator(userContent['data']['wuid'])){
      return {
        success: false,
        msg: "*Você não pode desmutar o criador!*".toUpperCase(),
        mentions: undefined
      }
    }

    const userMentionedJid = userContent['data']['wuid']

    if (!userMentionedJid){
      return {
        success: false,
        msg: 'Usuário não encontrado, mencione outro!',
        mentions: undefined
      }
    }

    if (!bot.usersMutted[request.senderJid]){
      bot.usersMutted[request.senderJid] = [];
    }

    bot.usersMutted[request.senderJid] = bot.usersMutted[request.senderJid]!.filter(userJid => userJid !== userMentionedJid);
   
    return {
      success: true,
      msg: "*Usúario desmutado com sucesso ✅*".toUpperCase(),
      mentions: undefined
    }
  }

  private async taskShutDownAdvice(request: RequestInfo, user: User, users: Users, tasks: Tasks): Promise<userDefaultReturn> {
    if (!bot.isCreator(user.jid)){
      return {
        success: false,
        msg: "*APENAS O CRIADOR PODE USAR ESSES COMANDOS!*",
        mentions: undefined
      }
    }

    const creatorMessage = request.userMessage.split(" ").slice(1).join(' ');
    if (!creatorMessage) {
      return {
        success: false,
        msg: `Para funcionar adicione os parâmetros ${tasks.tasksName.shutdownAlert} 'incio' 'fim' 'motivo' (opcional)`,
        mentions: undefined,
      };
    }

    const startTime = creatorMessage.split(' ')[0]
    const finalTime = creatorMessage.split(' ')[1]
    const reason =  creatorMessage.split(' ').slice(1).slice(1).join(' ')

    console.log('creatorMessage: ');
    console.log(creatorMessage.split(' '));
  
    const shutdownMsg = 
    `╭─────────────\n` 
    +
    `┊ *AVISO DE DESLIGAMENTO TEMPORÁRIO.*\n`
    +
    `┊\n` 
    +
    `┊ *Horário:* _${startTime && startTime.replaceAll("'", '').replaceAll('"', '')} até ${finalTime && finalTime.replaceAll("'", '').replaceAll('"', '') }_\n` 
    +
    `┊\n`
    +
    `╰────◉\n\n`
    +
    `↺➤ *MOTIVO*: _${
      creatorMessage.split(' ')[2] 
      ? reason.replaceAll("'", '').replaceAll('"', '') 
      : `Manutenção do bot`}_ \n\n`
    +
    `─────────────`;

    bot.groupAllowed.forEach(groupJid => {
      evolutionAPI.sendMessageToSpecificGroup(
        request,
        groupJid['jid'],
        shutdownMsg
      )
    })

    return {
      success: true,
      msg: "Alerta enviado para todos ✅",
      mentions: undefined,
    };
  }

  private async taskShutDown(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    if (!bot.isCreator(user.jid)){
      return {
        success: false,
        msg: "*APENAS O CRIADOR PODE USAR ESSES COMANDOS!*",
        mentions: undefined
      }
    }

    const creatorMessage = request.userMessage.split(" ").slice(1).join(' ');
    if (!creatorMessage) {
      return {
        success: false,
        msg: "Para funcionar adicione os parâmetros *!fechar_bot 'incio' 'fim' 'motivo' (opcional)*",
        mentions: undefined,
      };
    }

    const openTime = creatorMessage.split(' ')[0];
    if (!openTime){
      return {
        success: false,
        msg: "*Adicione uma abertura ou coloque 'undefined'*".toUpperCase(),
        mentions: undefined
      }
    }

    const reason =  creatorMessage.split(' ').slice(1).join(' ');
     if (!reason){
      return {
        success: false,
        msg: "*Adicione um motivo para fechamento*".toUpperCase(),
        mentions: undefined
      }
    }

    const shutdownMsg = 
    `╭━━━━━━━━━━━━━━━━━━━━━━━╮\n`
    +
    `┃ 🚫 *BOT DESLIGADO TEMPORARIAMENTE* 🚫\n`
    +
    `┃\n`
    +
    `┃ ⏰ *RE-ABERTURA:* ${openTime.toUpperCase()}\n`
    +
    `┃\n`
    +
    `┃ ✍🏻 *MOTIVO:* ${reason}\n`
    +
    `┃\n`
    +
    `╰━━━━━━━━━━━━━━━━━━━━━━━╯`

    bot.groupAllowed.forEach(groupJid => {
      evolutionAPI.sendMessageToSpecificGroup(
        request,
        groupJid['jid'],
        shutdownMsg
      )
    })

    return {
      success: true,
      msg: "Alerta enviado para todos ✅",
      mentions: undefined,
    };
  }

  private async taskAdvice(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    if (!bot.isCreator(user.jid)){
      return {
        success: false,
        msg: "*APENAS O CRIADOR PODE USAR ESSES COMANDOS!*",
        mentions: undefined
      }
    }

    const creatorMessageAdvice = request.userMessage.split(" ").slice(1).join(' ').replaceAll("'", '').replaceAll('"', '');
    if (!creatorMessageAdvice) {
      return {
        success: false,
        msg: "*Adicione o aviso para informar as pessoas sobre algo, exemplo: !criador_aviso 'Feliz Ano Novo'*",
        mentions: undefined,
      };
    }

    const adviceMsg = 
    `╭━━━━━━━━━━━━━━━━━━━━━━━╮\n`
    +
    `┃ ❗ *MENSAGEM DO CRIADOR* ❗\n`
    +
    `┃\n`
    +
    `┃ *Mensagem:*  ${
      creatorMessageAdvice.at(0)!.toUpperCase() 
      + 
      creatorMessageAdvice.slice(1)
    }\n`
    +
    `╰━━━━━━━━━━━━━━━━━━━━━━━╯`;

    bot.groupAllowed.forEach(groupJid => {
      evolutionAPI.sendMessageToSpecificGroup(
        request,
        groupJid['jid'],
        adviceMsg
      )
    })

    return {
      success: true,
      msg: "Alerta enviado para todos ✅",
      mentions: undefined,
    };
  }

  private async taskOpenBot(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn>{
    if (!bot.isCreator(user.jid)){
      return {
        success: false,
        msg: "*APENAS O CRIADOR PODE USAR ESSES COMANDOS!*",
        mentions: undefined
      }
    }

    const openMsg = 
    `╭─────────────\n` 
    +
    `┊ *BOT LIGADO 🤖✅*\n`
    +
    `┊\n` 
    +
    `┊\n`
    +
    `┊ BOT 100% ATIVO ✅ USE *!menu* para ver todos os comandos \n`
    +
    `╰────────────◉`;

    bot.groupAllowed.forEach(groupJid => {
      evolutionAPI.sendMessageToSpecificGroup(
        request,
        groupJid['jid'],
        openMsg
      )
    })

    return {
      success: true,
      msg: "Bot aberto e enviado para todos ✅",
      mentions: undefined,
    };

   }

  private async taskGemini(request: RequestInfo, user: User, users: Users) {
    const prompt = request.userMessage.split(" ").slice(1).join();
    if (!prompt) {
      return {
        success: false,
        msg: "Após o *!gemini* digite oque você deseja falar com o gemini!",
        mentions: undefined,
      };
    }

    const geminiContentResponse = new Gemini().ask(prompt);

    geminiContentResponse.then((response) => {
      if (response == "Algo deu errado, tente de novo mais tarde!") {
        evolutionAPI.sendMessage(request, {
          success: true,
          msg: "Muitas mensagens foram feitas, tente denovo mais tarde!",
          mentions: undefined,
        });
        return;
      }

      const geminiAnswer = response["candidates"][0]["content"]["parts"][0]["text"];
      evolutionAPI.sendMessage(request, {
        success: true,
        msg: geminiAnswer.replaceAll('**', '*'),
        mentions: undefined,
      });
    });

    return {
      success: true,
      msg: "Preparando sua resposta do gemini...",
      mentions: undefined,
    };
  }

  private async taskCalculate(request: RequestInfo, user: User, users: Users) {
    const calc = request.userMessage
      .split(" ")
      .slice(1)
      .join("")
      .replaceAll("×", "*")
      .replaceAll("x", "*")
      .replaceAll("÷", "/")
      .replaceAll("^", "**")
      .replaceAll(/\s+/g, "")
      .replaceAll(',', '.');

    if (!calc) {
      return {
        success: false,
        msg: "Adicione um calculo, exemplo: *!calcular 2 + 2*",
        mentions: undefined,
      };
    }

    const divideNumber = /\d+\.?\d*|\S/g;
    const calcWithSpace = calc.match(divideNumber)?.join(" ");

    console.log("calcNoSpace: " + calc);

    const regexCalculavel = /^[0-9+\-*/().]+$/;

    if (!regexCalculavel.test(calc)) {
      console.log("calcNoSpace" + calc);

      return {
        success: false,
        msg: "*Erro:* O texto contém caracteres não matemáticos ou inválidos!",
        mentions: undefined,
      };
    }

    try {
      const res = eval(calc);
      if (typeof res == "number" && isFinite(res)) {
        return {
          success: true,
          msg: `${calcWithSpace} = *${res}*`.replaceAll('.', ','),
          mentions: undefined,
        };
      }

      return {
        success: false,
        msg: "*Erro:* A expressão é sintaticamente válida, mas resultou em um valor não numérico ou inválido (ex: divisão por zero).",
        mentions: undefined,
      };
    } catch (e) {
      return {
        success: false,
        msg: "*Erro:* A expressão não pôde ser calculada., tente de novo!",
        mentions: undefined,
      };
    }
  }

  private async taskFactorial(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const factorialNumber = request.userMessage
      .split(" ")
      .slice(1)
      .join("")
      .replaceAll("!", "");

    if (!factorialNumber) {
      return {
        success: false,
        msg: "Adicione um calculo, exemplo: *!fact 5*",
        mentions: undefined,
      };
    } 

    const factorialNumberConverted: number = Number(factorialNumber);
    if (Number.isNaN(factorialNumberConverted)){
      return {
        success: false,
        msg: "Use um número válido, exemplo: *!exp 5*",
        mentions: undefined
      }
    }
    
    const factorialValue = new Calculate().factorial(factorialNumberConverted);
    return {
      success: true,
      msg: `!${factorialNumber} = ${factorialValue}`,
      mentions: undefined
    }

  }

  private async taskExponential(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const base = request.userMessage.split(' ')[1];
    const exponential = request.userMessage.split(' ')[2];

    if (!base){
      return {
        success: false,
        msg: "Adicione a base e o exponential, exemplo: *!exp 5 2*",
        mentions: undefined
      }
    }

    if (!exponential){
      return {
        success: false,
        msg: "Adicione o exponential, exemplo: *!exp 5 2*",
        mentions: undefined
      }
    }

    const baseNum = Number(base);
    const exponentialNum = Number(exponential);
    
    if (isNaN(baseNum) || isNaN(exponentialNum)){
      return {
        success: false,
        msg: "Adicione números validos para o cálculo, exemplo: *!exp 5 2* ",
        mentions: undefined
      }
    }

    const result = baseNum ** exponentialNum;
    const exponentialFormated = new Calculate().convertToExpoent(exponential);


    return {
      success: true,
      msg: `${base + exponentialFormated} = ${result}`,
      mentions: undefined
    }
  }

  private async taskSqrt(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const sqrtRequest = request.userMessage.split(' ').slice(1).join('+');
      
    if (!sqrtRequest){
      return {
        success: false, 
        msg: 'Digite o valor que você quer fazer o cálculo, exemplo: *!sqrt 25*', 
        mentions: undefined
      };
    }

    const sqrtNumber = Number(sqrtRequest);

    if (isNaN(sqrtNumber)){
      return {
        success: false,
        msg: "Use um valor valido para calcular, exemplo: *!sqrt 25*",
        mentions: undefined
      }
    }

    const result = Math.sqrt(sqrtNumber);

    return {
      success: true,
      msg: `√${sqrtNumber} = ${result}`,
      mentions: undefined
    }
  }

  private async taskPi(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    return {
      success: true,
      msg: `π = ${Math.PI}...`,
      mentions: undefined
    }
  }

  private async taskRandomNumber(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const numbers = request.userMessage.split(" ").slice(1).join(' ').replaceAll("'", '').replaceAll('"', '');
    if (!numbers) {
      return {
        success: false,
        msg: `Coloque um valor mínimo e máximo, exemplo: *${this.taskName} '0' '10'*`,
        mentions: undefined,
      };
    }

    const min = Number(numbers.split(' ')[0]);
    const max = Number(numbers.split(' ')[1]);

    if (isNaN(min) || isNaN(max)){
      return {
        success: false,
        msg: `*Um dos valores não é um número válido, tente outro, exemplo: ${this.taskName} '1' '10'*`,
        mentions: undefined
      }
    }

    if (min > max){
      return {
        success: false,
        msg: "*O valor máximo não pode se menor que o valor mínimo!*".toUpperCase(),
        mentions: undefined
      }
    }

    const rNum = Math.floor(Math.random() * (max - min + 1)) + min;

    console.log('rNum: ' + rNum);
    

    return {
      success: true,
      msg: `${rNum}`,
      mentions: undefined
    }
  }

  private async taskFilm(request: RequestInfo, user: User, users: Users) {
    const userFilmRequest = request.userMessage.split(' ').slice(1).join('+');
      
      if (!userFilmRequest){
        return {success: false, msg: 'Digite o nome do filme, exemplo: *!filme Barbie*', mentions: undefined};
      }
      
      const filmInfo = await new Content().getContentInfo(
        userFilmRequest, 
        request.userMessage.split(' ')[0] == '!filme' ? "movie" : "series");

      if (!filmInfo){
        return {success: false, msg: 'Filme não encontrado, tente outro!', mentions: undefined};
      }
      
      const filmData = filmInfo['data']['data']

      const aboutFilmMessage = 
      `${filmInfo.haveImage ? '' : '[Imagem Não Encontrada] \n'}`+
      `*Titulo*: ${filmData['Title']} \n\n` +
      `*Ano*: ${filmData['Year']} \n\n` +
      `*Gênero*: ${filmData['Genre']} \n\n` +
      `*Diretor*: ${filmData['Director']} \n\n` +
      `*Tempo De Filme*: ${filmData['RunTime']} \n\n` +
      `*Escritor*: ${filmData['Writer']} \n\n` +
      `*Atores Principais*: ${filmData['Actors']} \n\n` +
      `*Custo de Produção*: ${filmData['BoxOffice']}`;

      if (filmInfo.haveImage){
        evolutionAPI.sendMedia(request, filmData['Poster'], aboutFilmMessage);
        return {success: true, msg: 'Dont Send', mentions: undefined};
      }
      return {success: true, msg: aboutFilmMessage, mentions: undefined};
  }

  private async taskWiki(request: RequestInfo, user: User, users: Users) {
     const userMessage = request.userMessage.split(' ').slice(1).join('+');
      if (!userMessage){
        return {success: false, msg: "Adiciona o nome para pesquisar sobre, exemplo: *!wiki terra*", mentions: undefined}
      }

      const wikiInfo = new Wikipedia().getWikiInfo(userMessage);
      if (!wikiInfo){
        return {success: false, msg: "Pesquisa não encontrada, tente outra coisa!", mentions: undefined};
      }

      wikiInfo.then(response => {
        const wikiPages: object = response['data']['query']['pages']
        const pageId: string = Object.keys(wikiPages)[0]!;
        const wikiPage = wikiPages[pageId];

        const wikiTitle = wikiPage['title']
        const wikiText = wikiPage['extract'];  
        const wikiImageUrl = wikiPage['thumbnail'] && wikiPage['thumbnail']['source'];
        
        const wikiSourceUrl = wikiPage['fullurl'];
        
        const wikiMsg =
        `*Titulo:* ${wikiTitle} \n\n` +
        `Fonte: ${wikiSourceUrl} \n\n` +
        `${wikiText}`;

        if (!wikiText){
          evolutionAPI.sendMessage(request, {
            success: true,
            msg: "Conteúdo não encontrado, tente outro!",
            mentions: undefined
          })
          return;
        }

        if (!wikiImageUrl){
          evolutionAPI.sendMessage(request, {
            success: true,
            msg: wikiMsg,
            mentions: undefined
          })
          return;
        }

        const wikiImage64 = new Base64().convertContentUrlToBase64(wikiImageUrl);
        wikiImage64.then(image64 => {
          if (!image64){ return; }
          evolutionAPI.sendMedia(request, image64, wikiMsg)
        })
        
      })

      return {success: true, msg: "Preparando pesquisa no Wikipédia...", mentions: undefined}
  }

  taskEmoji = async (request: RequestInfo, user: User, users: Users) => {
     const userMessage = request.userMessage.split(' ').slice(1).join('')
                            .replaceAll('+', "_").replaceAll(/\s+/g, '');
        if (!userMessage){
          return {success: false, msg: "Adicione dois emojis para fundi-los, exemplo: !emoji 😅 + 😀", mentions: undefined}
        }

        const emoji1 = userMessage.split('_')[0]
        const emoji2 = userMessage.split('_')[1]
        
        function converteEmojiToFuncion(emoji: string | undefined){
          if (!emoji){ return; }
          // 1. Obtém o valor numérico (decimal) do code point
          const decimalValue = emoji.codePointAt(0);

          if (decimalValue){
            const hexValue = decimalValue.toString(16).toUpperCase();
            return hexValue;
          }
        }

        const emoji1Unicode = converteEmojiToFuncion(emoji1);
        const emoji2Unicode = converteEmojiToFuncion(emoji2);
        if (!(emoji1Unicode && emoji2Unicode)){
          return {success: false, msg: "Para funcionar coloque 2 emojis, exemplo: !emoji 😅 + 😀", mentions: undefined};
        }

        console.log(`https://emojik.vercel.app/s/${emoji1Unicode.toLowerCase() + "_" + emoji2Unicode.toLowerCase()}`);
        
        const url = `https://emojik.vercel.app/s/${emoji1Unicode.toLowerCase() + "_" + emoji2Unicode.toLowerCase()}?size=128`;        

        evolutionAPI.sendMedia(request, url, `use *${this.tasksNames?.st}* para obter a figurinha`);
        
        return {success: true, msg: "Preparando emoji...", mentions: undefined};
  }

  async taskExchange(request: RequestInfo, user: User, users: Users){
    const userMessage = request.userMessage.split(' ').slice(1).join(' ');
      if (!userMessage){
        return {success: false, msg: "digite a moeda para saber o valor de mercado, exemplo: *!cambio* USD", mentions: undefined};
      }

      const exchangeInfo = await new MoneyExchange().getExchangeInfo(userMessage)
      if (!exchangeInfo){
        return {success: false, msg: "Não foi possivel encontrar o valor da moeda, tente algo como *!cambio* USD", mentions: undefined};
      }

      const base_code = exchangeInfo['data']['base_code']
      const exchangeData = exchangeInfo['data']['conversion_rates'];
      
      const converstionRatesMessage = 
      `Quanto vale *1 ${base_code}* nessas outras moedas? \n \n` +
      `(BRL) Real brasileiro: R$${exchangeData['BRL']} \n` +
      `(USD) Dólar americano: $${exchangeData['USD']} \n` +
      `(EUR) Euro: €${exchangeData['EUR']} \n` +
      `(CNY) Yuan chinês: ¥${exchangeData['CNY']} \n` +
      `(JPY) Iene japonês: ¥${exchangeData['JPY']} \n` +
      `(RUB) Rublo russo: ₽${exchangeData['RUB']} \n`;

      return {success: true, msg: converstionRatesMessage, mentions: undefined}
  }

  private async taskSayIt(request: RequestInfo, user: User, users: Users){
    if (!request.userMessage.split(' ')[1]){
      return {success: false, msg: "Adicione o algo para o bot dizer!", mentions: undefined}
    }

    let userMessage = request.userMessage.split(' ').slice(1).join(' ');
  
    function extractNumbersLidsMentioned(text: string): string[] {
      // Regex: /@(\d+)/g (Com grupo de captura e flag global)
      const regex = /@(\d+)/g;
      const resultados: string[] = [];
      let match: RegExpExecArray | null;

      // O loop continua enquanto o .exec() encontrar um match.
      // O .exec() armazena o índice da próxima busca na propriedade lastIndex da regex.
      while ((match = regex.exec(text)) !== null) {
          // match[0] é o match completo (@123)
          // match[1] é o PRIMEIRO grupo de captura (123)
          if (match && match.length > 1) {
              const lid: string | undefined = match[1]
              lid && resultados.push(lid);
          }
      }
      
      return resultados;
    }   
    console.log(extractNumbersLidsMentioned(userMessage));
    
    const usersMentioned = users.findUsersByLidNumber(extractNumbersLidsMentioned(userMessage))
    console.log(usersMentioned);
    

    const usersJids = usersMentioned 
                      && usersMentioned.map(user => user.jid)
    const usersNumber = usersMentioned 
                      && usersMentioned.map(user => user.number)
    console.log(usersJids);
                      
    const regex = /@(\d+)/g; 
    
    usersNumber?.forEach(number => {
      userMessage = userMessage.replace(regex, "@"+ number)
    })

    return {
      success: true, 
      msg: userMessage, 
      mentions: request.userMentionsLids.length > 0 ?
      request.userMentionsLids : undefined
    }
  }

  private async taskSt(request: RequestInfo, user: User, users: Users, tasks: Tasks): Promise<userDefaultReturn>{
    if (!request.quotedMessageId || request.quotedAudioMessage){
      return {
        success: false,
        msg: "Mencione uma imagem ou vídeo, para converter para figurinha".toUpperCase(),
        mentions: undefined
      }
    }

    try {
      const base64Request = evolutionAPI.getContentBase64(request);
      if (!base64Request){
        return {
          success: false,
          msg: "Não foi possivel converter essa imagem para figurinha, tente outro!",
          mentions: undefined
        }
      }

      base64Request.then(async base64Response => {
        if (!base64Response){ return; }

        const base64 = base64Response['data']['base64'];

        if (request.quotedVideoMessage){
          const videoBase64 = await new Sticker().getVideoWebp(base64)
          evolutionAPI.sendSticker(request, videoBase64);
        } else {
          evolutionAPI.sendSticker(request, base64);
        }
      })
    } catch(e) {
      console.log(e);
      return {
        success: false,
        msg: message.errorMsg,
        mentions: undefined
      }
    } 
    
    return {
      success: true,
      msg: "Preparando figurinha",
      mentions: undefined
    }
  }

  private async taskRollDice(request: RequestInfo, user: User, users: Users, tasks: Tasks): Promise<userDefaultReturn>{
    const rNum = Math.floor(Math.random() * 6) + 1;

    evolutionAPI.sendMedia(
      request,
      `https://www.calculator.net/img/dice${rNum}.png`,
      `Os dados foram rolados... O resultado é *${rNum}*!`
    )

    return {
      success: true,
      msg: "Girando os dados... 🎲",
      mentions: undefined
    }
  }

  private async taskActive(request: RequestInfo, user: User, users: Users, tasks: Tasks){
    return {
      success: true, 
      msg: `ESTOU ATIVO E A TODO VAPOR 🚂, USE ${tasks.tasksName.menu} PARA SABER TODOS OS COMANDOS!`, 
      mentions: request.userMentionsLids.length > 0 ?
      request.userMentionsLids : undefined
    }
  }



  private async taskTranslate(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const userMessageTranslate = request.userMessage.split(' ').slice(1).join(' ')
    if (!userMessageTranslate){
      return {
        success: false,
        msg: "Vídeo não encontrado...",
        mentions: undefined,
      }; 
    } 

    const translate = new Translate().getTranslate(userMessageTranslate);
    translate.then(msgTranslate => {
      if (!msgTranslate){
        evolutionAPI.sendMessage(
          request,
          {
            success: true,
            msg: "Mensagem não pode ser traduzida, tente outra",
            mentions: undefined
          }
        )
        return;
      }

      evolutionAPI.sendMessage(
        request,
        {
          success: true, 
          msg: `_*${msgTranslate}*_`,
          mentions: undefined
        }
      )
      return;
    })

    return {
      success: true,
      msg: "Traduzindo mensagem...",
      mentions: undefined
    }
  }

  private async taskViralVideo(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const musicInfo = await new Music().getRandomMusicInfoOnTop10ViralMusicName();
    if (!musicInfo){
      return {
        success: false,
        msg: "Edit de música viral não encontrada!",
        mentions: undefined
      }
    }
    
    const tiktokUserInfo = new Tiktok().getTiktokVideoBySearch(musicInfo['musicName'] + '+edit');
    if (!tiktokUserInfo){
      return {success: false, msg: `Nenhum vídeo foi encontrado!`, mentions: undefined}
    }
    tiktokUserInfo.then(async tiktokUserInfoRequest => {
      if (!tiktokUserInfoRequest || !tiktokUserInfoRequest['data']['data']['videos'][0]){ 
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: "Nenhum vídeo encontrado, tente denovo usando *!viral*",
            mentions: undefined
          }
        )
        return; 
      }

      const tiktokUserInfo = tiktokUserInfoRequest['data']['data']['videos'][0];

      const hastagsOnTile: string[] = tiktokUserInfo['title'].match(/#\w+/g);

      evolutionAPI.sendMedia(
        request, 
        tiktokUserInfo['play'], 
        `${musicInfo['musicName']}` + ` | #music #edit #${
          musicInfo['musicName']
          .replaceAll(' ', '').toLocaleLowerCase()
          .replaceAll('(', '').replaceAll(')','')
          .replaceAll('+', '').replaceAll("'", '')} #${musicInfo['artistName'].replaceAll(' ', '').toLocaleLowerCase()} ${hastagsOnTile.slice(0, 1).join(' ')}`, 
        true);
    })

    return {
      success: true,
      msg: 'Preparando vídeo viral para você postar...',
      mentions: undefined
    }
  }

  private async taskReupload(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const messageId = request.quotedMessageId;
    if (!messageId){
      return {
        success: false,
        msg: "Mentione um vídeo para fazer reupload!",
        mentions: undefined
      }
    }

    const videoBase64 = evolutionAPI.getContentBase64(request, true);
    videoBase64.then(videoBase64Response => {
      console.log('videoBase64Response');
      console.log(videoBase64Response!['data']);
      
      if(!videoBase64Response!['data']['base64']){
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: message.errorMsg,
            mentions: undefined
          }
        )
        return;
      }
      evolutionAPI.sendMedia(
        request,
        videoBase64Response['data']['base64'],
        videoBase64Response['data']['caption'],
        true
      )
    })

    return {
      success: true,
      msg: 'Fazendo reupload do vídeo...',
      mentions: undefined
    }
  }

  private async taskCreateAudio(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const userMessage = request.userMessage.split(' ').slice(1).join(' ')
    if (!userMessage){
      return {
        success: false,
        msg: "Escreva um texto para converter para áudio",
        mentions: undefined,
      }; 
    } 
    if (userMessage.length > 1000){
      return {
        success: false,
        msg: "O texto não pode ter mais que 1000 caracteres",
        mentions: undefined,
      }; 
    }

    const robotAudio = new RobotAudio().createRobotAudio(userMessage);
    robotAudio.then(msgBase64 => {
      if (!msgBase64){
        evolutionAPI.sendMessage(
          request,
          {
            success: true,
            msg: "Mensagem não pode ser convertida para áudio, tente de novo!",
            mentions: undefined
          }
        )
        return;
      }

      evolutionAPI.sendAudio(
        request,
        msgBase64
      )
      return;
    })

    return {
      success: true,
      msg: "Convendo texto para áudio...",
      mentions: undefined
    }
  }

  private async taskMotivation(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const motivationRequest = new Motivation().getMotivation();

    motivationRequest.then(motivationHttp => {
      const motivationMsg =
      `A motivação do dia é... \n\n` + 
      `"_*${motivationHttp['mensage']}*_"`;

      evolutionAPI.sendMedia(
        request,
        "https://s1.picswalls.com/wallpapers/2015/11/21/beautiful-motivation-wallpaper_10342177_288.jpg",
        motivationMsg
      );
    });

    return {
      success: true,
      msg: "Coletando frase motivacional...",
      mentions: undefined
    }
  }

  private async taskFacts(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const randomFacts = new Facts().getRandomFacts();
    if (!randomFacts) {
      return {
        success: false,
        msg: "Algo deu errado, tente de novo mais tarde!",
        mentions: undefined
      }
    }

    randomFacts.then(async randomFactsResponse => {
      if (!randomFactsResponse || !randomFactsResponse['data']){
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: message.errorMsgLater,
            mentions: undefined
          }
        )
        return;
      }

      const factsText = await translate.getTranslate(randomFactsResponse['data']['text']);

      const factsMsg = 
      `Uma curiosidade aleatório...\n\n` + 
      `"_*${factsText}*_"`;

      evolutionAPI.sendMedia(
        request,
        "https://nova-escola-producao.s3.amazonaws.com/EeFssgKNJywVn59wVQwqm54HXNumWG8uTfHjMUuu4r6XyXBPYyReTANZr2cx/blog-alfabetizacao-curiosidade-cientifica.jpg",
        factsMsg
      );
    })

    return {
      success: true,
      msg: "Preparando fato aleatório...",
      mentions: undefined
    }
  }

  private async taskCatFacts(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const randomFacts = new Facts().getCatRandomFacts();
    if (!randomFacts) {
      return {
        success: false,
        msg: "Algo deu errado, tente de novo mais tarde!",
        mentions: undefined
      }
    }

    randomFacts.then(async randomFactsResponse => {
      if (!randomFactsResponse || !randomFactsResponse['data']){
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: message.errorMsgLater,
            mentions: undefined
          }
        )
        return;
      }
      const factsText = randomFactsResponse['data']['data'][0];

      const factsMsg = 
      `Uma curiosidade aleatória sobre gatos...\n\n` + 
      `"_*${factsText}*_"`;

      evolutionAPI.sendMedia(
        request,
        "https://jpimg.com.br/uploads/2024/12/7-racas-de-gato-com-filhotes-muito-fofos.jpg",
        factsMsg
      );
    })

    return {
      success: true,
      msg: "Preparando fato aleatório sobre gatos...",
      mentions: undefined
    }
  }

  private async taskRandomCatPhoto(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const catPhoto = new Animals().getRandomPhotoOfCats();
    if (!catPhoto) {
      return {
        success: false,
        msg: "Algo deu errado, tente de novo mais tarde!",
        mentions: undefined
      }
    }

    catPhoto.then(async catPhotoResponse => {
      if(!catPhotoResponse){
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: "Algo deu errado, tente de novo mais tarde!",
            mentions: undefined
          }
        )
        return;
      }

      evolutionAPI.sendMedia(
        request,
        catPhotoResponse,
        'Miau 🐈'
      );
    })

    return {
      success: true,
      msg: "Preparando imagem de gato...",
      mentions: undefined
    }
  }

  private async taskRandomDogPhoto(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const catPhoto = new Animals().getRandomPhotoOfDogs();
    if (!catPhoto) {
      return {
        success: false,
        msg: "Algo deu errado, tente de novo mais tarde!",
        mentions: undefined
      }
    }

    catPhoto.then(async catPhotoResponse => {
      if(!catPhotoResponse){
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: "Algo deu errado, tente de novo mais tarde!",
            mentions: undefined
          }
        )
        return;
      }

      evolutionAPI.sendMedia(
        request,
        catPhotoResponse,
        'Au Au 🐕'
      );
    })

    return {
      success: true,
      msg: "Preparando imagem de cachorro...",
      mentions: undefined
    }
  }

   private async taskRandomCoffeePhoto(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const coffeePhoto = new Coffee().getRandomCoffeePhoto();
    
    coffeePhoto.then(async coffeePhotoResponse => {
      if(!coffeePhotoResponse){
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: message.errorMsg,
            mentions: undefined
          }
        )
        return;
      }

      evolutionAPI.sendMedia(
        request,
        coffeePhotoResponse,
        'Um cafézinho do dia a dia... ☕'
      );
    })

    return {
      success: true,
      msg: "Preparando imagem de café... ☕",
      mentions: undefined
    }
  }

  private async taskInsult(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const randomInsult = new Jokes().getInsult();
    if (!randomInsult) {
      return {
        success: false,
        msg: "Algo deu errado, tente de novo mais tarde!",
        mentions: undefined
      }
    }

    randomInsult.then(randomInsultResponse => {
      if (!randomInsultResponse || !randomInsultResponse['data']){
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: message.errorMsgLater,
            mentions: undefined
          }
        )
        return;
      }
      evolutionAPI.sendMessage(
        request,
        {
          success: true,
          msg: `_*${randomInsultResponse['data']['insult']}*_`,
          mentions: undefined
        }
      )
    })

    return {
      success: true,
      msg: "Preparando insulto...",
      mentions: undefined
    }
  }

  private async taskFlirt(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    if (!request.userMentionsLids || request.userMentionsLids.length == 0){
      return {
        success: false,
        msg: "Mencione um usuário para fazer uma cantada!",
        mentions: undefined
      }
    }
    
    const userLid = request.userMentionsLids[0];
    if (!userLid){
      return {
        success: false,
        msg: 'Usuário não encontrado, mencione outro!',
        mentions: undefined
      }
    }

    const userInfo = evolutionAPI.fetchProfile(request, userLid);
    if (!userInfo){
      return {
        success: false,
        msg: 'Usuário não encontrado, mencione outro!',
        mentions: undefined
      }
    }

    const userContent = await userInfo;

    const userJid: string = userContent['data']['wuid']
    
    const randomFlirt = new Flirt().getRandomFlirt();
    if (!randomFlirt) {
      return {
        success: false,
        msg: message.errorMsgLater,
        mentions: undefined
      }
    }

    return {
      success: true,
      msg: `@${userJid.replace('@s.whatsapp.net', '').replaceAll('@lid', '')} ${randomFlirt.toLowerCase()}`,
      mentions: [userJid]
    }
  }

  private async taskYesOrNo(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const rNum = Math.random();

    return {
      success: true,
      msg: `*${rNum <= 0.5 ? "Sim" : "Não"}*`,
      mentions: undefined
    }
  }

  private async taskYoutube(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const userMessage = request.userMessage.split(' ').slice(1).join(' ');
    if (!userMessage){
      return {
        success: false,
        msg: "Vídeo não encontrado...",
        mentions: undefined,
      }; 
    } 
    const youtube = new Youtube();
    
    const videoInfo = youtube.getVideoInfo(userMessage);

    videoInfo.then(ytInfo => {
      if (!ytInfo){ return; }
      
      const videoDetails = ytInfo['data']['items'][0]['snippet'];
      
      const videoInfoMsg = 
      `*(Áudio sendo preparado, aguarde!)* \n\n` +
      `*Titulo:* ${videoDetails['title']} \n\n` +
      `*Autor do Vídeo:* ${videoDetails['channelTitle']} \n\n` +
      `*Descrição Prévia:* ${videoDetails['description']} \n\n` +
      `*Link do Vídeo* https://www.youtube.com/watch?v=${ytInfo['data']['items'][0]['id']['videoId']}` 

      evolutionAPI.sendMedia(
        request, 
        videoDetails['thumbnails']['high']['url'], 
        videoInfoMsg);
    })
    
    const videoId = await youtube.getVideoId(userMessage);
    if (!videoId){
      return {success: false, msg: "Vídeo não encontado, tente outro!", mentions: undefined}
    }

    const audioBase64 = new Base64().extractAudioBase64(
      `https://www.youtube.com/watch?v=${videoId}`
    );

    audioBase64.then(base64 => {
      if (base64){
        evolutionAPI.sendAudio(request, base64);
      }
    })
    
    return {
      success: true,
      msg: "Procurando informações no youtube...",
      mentions: undefined,
    }; 
  }

  private async taskYoutubeAudioExtract(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const userLink = request.userMessage.split(' ').slice(1).join('');
    if (!userLink){
      return {
        success: false,
        msg: "Adicione um link válido do youtube..",
        mentions: undefined,
      }; 
    } 

    const audioBase64 = new Base64().extractAudioBase64(userLink);

    audioBase64.then(base64 => {
      if (!base64){
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: "Link inválido ou falha no processamento do áudio... (use links do youtube)",
            mentions: undefined
          }
        )
        return;
      }
      evolutionAPI.sendAudio(request, base64);
    })
    
    return {
      success: true,
      msg: "Procurando informações no youtube...",
      mentions: undefined,
    }; 
  }

  //TODO: CRIAR LOCAL DE AVISO PARA AS PESSOAS (dispara em todos os grupos que o bot está validado)

  private async taskYoutubeChannel(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const userMessage = request.userMessage.split(' ').slice(1).join(' ');
    if (!userMessage){
      return {
        success: false,
        msg: "Vídeo não encontrado...",
        mentions: undefined,
      }; 
    } 
   
    return {
      success: true,
      msg: "Procurando informações no youtube...",
      mentions: undefined,
    }; 
  }

  private async taskFindArtistByMusic(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    try{
      const userMusic = request.userMessage.split(' ').slice(1).join('+').replaceAll("'", '').replaceAll('"', '');
      if (!userMusic) {
        return {
          success: false,
          msg: "*Mencione uma música para obter o nome do artista...*",
          mentions: undefined,
        }; 
      } 

    const artistInfo = new Music().getArtistInfoByMusic(userMusic);
    artistInfo.then(artistInfoResponse => {
      if (!artistInfoResponse){
        evolutionAPI.sendMessage(
          request,
          {
          success: false,
          msg: "*Música não encontrada, tente novamente!*",
          mentions: undefined
        }
        )
        return ;
      }
      
      const data: object = artistInfoResponse['data']['data'][0];

      console.log('data: ' + JSON.stringify(data));
      console.log('oiiiiii');
      
      if (!data){
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: "*Música não encontrada, tente outro!*",
            mentions: undefined
          }
        )
        return;
      }

      console.log('teste1');
        

        const artistName = data['artist']['name']
        const artistImage = data['artist']['picture_xl'];

        console.log('artistName: ' + artistName);
        console.log('artistImage: ' + artistImage);
        

        evolutionAPI.sendMedia(
          request,
          artistImage,
          `E o artista encontrado foi... *${artistName}*!`
        )
      })
    } catch(e) {
      return {
      success: true,
      msg: "Algo deu errado, tente de novo!",
      mentions: undefined,
    };
    }
    
    return {
      success: true,
      msg: "Procurando possível artista... (caso demore muito, use o comando novamente) 🎶",
      mentions: undefined,
    }; 
  }

  private async taskFindLyricByMusic(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    try{
      const userMusic = request.userMessage.split(' ').slice(1).join('+').replaceAll("'", "").replaceAll('"', '');
    if (!userMusic){
      return {
        success: false,
        msg: "*Mencione uma música para obter a letra...*",
        mentions: undefined,
      }; 
    } 

    const artistInfo = new Music().getArtistInfoByMusic(userMusic);
    artistInfo.then(async artistInfoResponse => {
      if (!artistInfoResponse){
        evolutionAPI.sendMessage(
          request,
          {
          success: false,
          msg: "*Artista não encontrada, tente novamente!*",
          mentions: undefined
        }
        )
        return ;
      }
      
      const data: object = artistInfoResponse['data']['data'][0];
      if (!data){
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: "*Artista não encontrada, tente outro!*",
            mentions: undefined
          }
        )
        return;
      }
        
        const musicTitle = data['title'];
        const artistName = data['artist']['name'];
        const artistImage = data['artist']['picture_xl'];;

        const lyric = await new Music().getLyricByMusic(artistName, musicTitle);
        console.log('lyric: ' + lyric);
        
        if (!lyric){
          evolutionAPI.sendMessage(
            request,
            {
              success: false,
              msg: "*Artista não encontrada, tente outra!*".toUpperCase(),
              mentions: undefined
            }
          )
          return;
        }

        console.log('teste205');
        

        evolutionAPI.sendMedia(
          request,
          artistImage,
          `*${musicTitle} - ${artistName}*\n\n`.toUpperCase()
          +
          `Letra: ${lyric}`
        )
      })
    } catch(e) {
      return {
      success: true,
      msg: "Algo deu errado, tente de novo!",
      mentions: undefined,
    };
    }
    
    return {
      success: true,
      msg: "Procurando letra... \n(Caso demore muito, use o comando novamente) \n(Músicas internacionais são mais prováveis de funcionar) 🎶",
      mentions: undefined,
    }; 
  }

  private async taskFindMusicAudio(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const userMessage = request.userMessage.split(' ').slice(1).join(' ');
    if (!userMessage){
      return {
        success: false,
        msg: "Vídeo não encontrado...",
        mentions: undefined,
      }; 
    } 

    const youtube = new Youtube();
  
    const videoId = await youtube.getVideoId(userMessage);
    if (!videoId){
      return {success: false, msg: "Vídeo não encontado, tente outro!", mentions: undefined}
    }

    const audioBase64 = new Base64().extractAudioBase64(
      `https://www.youtube.com/watch?v=${videoId}`
    );

    audioBase64.then(base64 => {
      if (base64){
        evolutionAPI.sendAudio(request, base64);
      }
    })
    
    return {
      success: true,
      msg: "Preparando música...",
      mentions: undefined,
    }; 
  }

  private async taskTiktokVideo(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> { 
    console.log('oi');
    
    const userUrlTiktok = request.userMessage.split(' ').slice(1).join(' ')
    if (!userUrlTiktok){
      return {
        success: false,
        msg: "Vídeo não encontrado...",
        mentions: undefined,
      }; 
    } 
    
    const tiktokInfo = new Tiktok().getTiktokVideo(userUrlTiktok);
    tiktokInfo.then(tiktokInfo => {
      if (!tiktokInfo) { return; }

      console.log(tiktokInfo);
      
      

      const videoUrl = tiktokInfo['data']['data']['play'];
      if (videoUrl){
        evolutionAPI.sendMedia(request, videoUrl, undefined, true);
      }
    })
 
    return {success: true, msg: "Preparando vídeo do tiktok...", mentions: undefined}
  }

  taskTiktokUserByName = async (request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> => {
    const userName = request.userMessage.split(' ').slice(1).join('+')
    if (!userName){
      return {
        success: false,
        msg: `Adicione o nome do usuário, exemplo: *${this.tasksNames?.tiktokUserByName} @fulano*`,
        mentions: undefined,
      }; 
    } 

    const tiktokUserInfo = new Tiktok().getUserInfoByName(userName);
    if (!tiktokUserInfo){
      return {success: false, msg: `Tiktok do usuário não encontrado!`, mentions: undefined}
    }
    tiktokUserInfo.then(tiktokUserInfoRequest => {
      if (!tiktokUserInfoRequest || !tiktokUserInfoRequest['data']){
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: message.errorMsgLater,
            mentions: undefined
          }
        )
        return;
      }
      if (!tiktokUserInfoRequest['data']['data']['user_list'][0]){ 
        console.log('not found!');
        
        return;
      }
      
      const tiktokUserInfo = tiktokUserInfoRequest['data']['data']['user_list'][0];
      
      console.log(tiktokUserInfo);
      console.log("user: " + tiktokUserInfo['user']);

      const format = new NumberFormat();

      const userInfoMsg = 
      `*Nome da conta:* @${tiktokUserInfo['user']['uniqueId']} \n\n` +
      `*Nome:* ${tiktokUserInfo['user']['nickname']} \n\n` +
      `*Verificado:* ${tiktokUserInfo['user']['verified'] ? "Sim" : 'Não'}\n\n` +
      `*Biografia:* ${tiktokUserInfo['user']['signature']}\n\n` +
      `*Seguidores:* ${format.formatNumber(tiktokUserInfo['stats']['followerCount'])}\n\n` +
      `*Seguindo:* ${format.formatNumber(tiktokUserInfo['stats']['followingCount'])}\n\n` +
      `*Curtidas Totais:* ${format.formatNumber(tiktokUserInfo['stats']['heartCount'])}\n\n` +
      `*Vídeos postados:* ${format.formatNumber(tiktokUserInfo['stats']['videoCount'])}\n\n` + 
      `*É menor de idade:* ${tiktokUserInfo['user']['isUnderAge18'] ? "Sim" : "Não"}\n\n` +
      `*Favoritos Aberto:* ${tiktokUserInfo['user']['openFavorite'] ? "Sim" : "Não"}\n\n` +
      `*Conta Privada:* ${tiktokUserInfo['user']['privateAccount'] ? "Sim" : "Não"} \n\n` + 
      `*Tiktok:* https://www.tiktok.com/@${tiktokUserInfo
        ['user']['uniqueId']}`;
      
      evolutionAPI.sendMedia(request, tiktokUserInfo['user']['avatarLarger'], userInfoMsg, false);
    })
    return {success: true, msg: "Coletando informações do usuário...", mentions: undefined};
  }

  taskTiktokUserById = async (request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> => {
    const userId = request.userMessage.split(' ').slice(1).join('+');
    
    if (!userId){
      return {
        success: false,
        msg: `Adicione o nome do usuário, exemplo: *${this.tasksNames?.tiktokUserByName} @fulano*`,
        mentions: undefined,
      }; 
    } 

    const tiktokUserInfo = new Tiktok().getUserInfoById(userId);
    if (!tiktokUserInfo){
      return {success: false, msg: `Tiktok do usuário não encontrado!`, mentions: undefined}
    }
    tiktokUserInfo.then(tiktokUserInfoRequest => {
      if (!tiktokUserInfoRequest || !tiktokUserInfoRequest['data']){
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: message.errorMsgLater,
            mentions: undefined
          }
        )
        return;
      }
      if (!tiktokUserInfoRequest['data']['data']){ return;}
      
      const tiktokUserInfo = tiktokUserInfoRequest['data']['data'];

      console.log(tiktokUserInfo);
      console.log("user: " + tiktokUserInfo['user']);

      const format = new NumberFormat();

      const userInfoMsg =
      `*Nome da conta:* @${tiktokUserInfo['user']['uniqueId']} \n\n` + 
      `*Nome:* ${tiktokUserInfo['user']['nickname']} \n\n` +
      `*Verificado:* ${tiktokUserInfo['user']['verified'] ? "Sim" : 'Não'}\n\n` +
      `*Biografia:* (${tiktokUserInfo['user']['signature']})\n\n` +
      `*Seguidores:* ${format.formatNumber(tiktokUserInfo['stats']['followerCount'])}\n\n` +
      `*Seguindo:* ${format.formatNumber(tiktokUserInfo['stats']['followingCount'])}\n\n` +
      `*Curtidas Totais:* ${format.formatNumber(tiktokUserInfo['stats']['heartCount'])}\n\n` +
      `*Vídeos postados:* ${format.formatNumber(tiktokUserInfo['stats']['videoCount'])}\n\n` + 
      `*É maior de idade:* ${!tiktokUserInfo['user']['isUnderAge18'] ? "Sim" : "Não"}\n\n` +
      `*Favoritos Aberto:* ${tiktokUserInfo['user']['openFavorite'] ? "Sim" : "Não"}\n\n` +
      `*Conta Privada:* ${tiktokUserInfo['user']['privateAccount'] ? "Sim" : "Não"} \n\n` + 
      `*Tiktok:* https://www.tiktok.com/@${tiktokUserInfo
        ['user']['uniqueId']}`;
      
      evolutionAPI.sendMedia(request, tiktokUserInfo['user']['avatarLarger'], userInfoMsg);
    })
    return {success: true, msg: "Coletando informações do usuário...", mentions: undefined};
  }

  taskTiktokSearch = async (request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> => {
    const userSearch = request.userMessage.split(' ').slice(1).join('+');
    const userTask = request.userMessage.split(' ')[0];
    
    if (!userSearch){
      return {
        success: false,
        msg: `Adicione um tópico de pesquisa, exemplo: *${this.tasksNames?.tiktokUserByName} memes*`,
        mentions: undefined,
      }; 
    } 

    const tiktokUserInfo = new Tiktok().getTiktokVideoBySearch(userSearch);
    if (!tiktokUserInfo){
      return {success: false, msg: `Nenhum vídeo foi encontrado, tente outro tópico!`, mentions: undefined}
    }
    tiktokUserInfo.then(tiktokUserInfoRequest => {
      if (!tiktokUserInfoRequest || !tiktokUserInfoRequest['data']['data']['videos'][0]){ return; }
      
      const tiktokUserInfo = tiktokUserInfoRequest['data']['data']['videos'][0];

      console.log(tiktokUserInfo);
      console.log("user: " + tiktokUserInfo['user']);

      const format = new NumberFormat();

      const userInfoMsg =
      `*Título:* @${tiktokUserInfo['title']} \n\n` + 
      `*Duração de vídeo:* ${tiktokUserInfo['duration']}s \n\n` +
      `*Curtidas Totais:* ${format.formatNumber(tiktokUserInfo['digg_count'])}\n\n` +
      `*Comentários Totais:* ${format.formatNumber(tiktokUserInfo['comment_count'])}\n\n` +
      `*Compartilhamentos Totais:* ${format.formatNumber(tiktokUserInfo['share_count'])}\n\n` +
      `*Nome do Criador:* ${tiktokUserInfo['author']['nickname']} \n\n` +
      `*ID do Criador:* @${tiktokUserInfo['author']['unique_id']} \n\n` +
      `*É anuncio:* ${tiktokUserInfo['is_ad'] ? "Sim": "Não"} \n\n` + 
      `*Tiktok do vídeo:* https://www.tiktok.com/@dianecunhamm/video/${tiktokUserInfo['video_id']}`;
      
      evolutionAPI.sendMedia(
        request, 
        tiktokUserInfo['play'], 
        userTask == '!tk_pesquisa_info' ? userInfoMsg : '', 
        true);
    })
    return {success: true, msg: "Coletando informações do Tiktok...", mentions: undefined};
  }

  private async taskSearchSticker(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const userSearch = request.userMessage.split(' ').slice(1).join('+');
    
    if (!userSearch){
      return {
        success: false,
        msg: `Adicione um tópico de pesquisa, exemplo: *${this.tasksNames?.tiktokUserByName} memes*`,
        mentions: undefined,
      }; 
    } 

    const giphyRequest = new Giphy().getGif(userSearch);
    if (!giphyRequest){
      return {
        success: false,
        msg: "Figurinha não encontrado, tente outro!",
        mentions: undefined
      }
    }
    giphyRequest.then(async giphyResponse => {
      if (!giphyResponse || !giphyResponse['data']['data'][0]){
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: message.errorMsg,
            mentions: undefined
          }
        )
        return;
      }
      const giphyUrl = giphyResponse['data']['data'][0]['images']['original']['url']
      if (!giphyUrl) { return; }
    

      evolutionAPI.sendSticker(request, giphyUrl, true);
    })


    return {
      success: true,
      msg: "Procurando Figurinha...",
      mentions: undefined
    }
  }

  private async taskScreenshotWebsite(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const userUrl = request.userMessage.split(' ').slice(1).join('+');
    
    if (!userUrl){
      return {
        success: false,
        msg: `Adicione uma url válida de pesquisa, exemplo: *${this.taskName} 'url'*`,
        mentions: undefined,
      }; 
    } 

    const screenshotRequest = new Screenshot().getScreenshotOfWebsite(userUrl);
    if (!screenshotRequest){
      return {
        success: false,
        msg: "Site não encontrado, tente outro!",
        mentions: undefined
      }
    }
    screenshotRequest.then(async giphyResponse => {
      if (!giphyResponse || !giphyResponse['data']){
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: message.errorMsgLater,
            mentions: undefined
          }
        )
        return;
      }
      const screenshotUrl = giphyResponse['data']['data']['screenshot']['url'];
      if (!screenshotUrl) { return; }
    

      evolutionAPI.sendMedia(
        request,
        screenshotUrl
      );
    })


    return {
      success: true,
      msg: "Tirando print do site...",
      mentions: undefined
    }
  }

  private async taskQrCode(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const userUrl = request.userMessage.split(' ').slice(1).join('+');
    if (!userUrl){
      return {
        success: false,
        msg: `Adicione uma url para converter para qr code, exemplo: *${this.taskName} 'https://www.chess.com/'*`,
        mentions: undefined,
      }; 
    } 

    const QrCodeRequest = new Base64().convertUrlToBase64(`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${userUrl}`);
    QrCodeRequest.then(async qrCodeBase64 => {
      console.log('qrCodeBase64: ' + qrCodeBase64);
      if(!qrCodeBase64){
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: "Url ou QR Code não pode ser encontrado ou gerado, tente outro!",
            mentions: undefined
          }
        )
        return;
      }

      evolutionAPI.sendMedia(
        request,
        qrCodeBase64,
        undefined,
        false,
        'png'
      );

    })

    return {
      success: true,
      msg: "Criando Qr Code...",
      mentions: undefined
    }
  }

  private async taskShortUrl(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const userUrl = request.userMessage.split(' ').slice(1).join('+');
    if (!userUrl){
      return {
        success: false,
        msg: `Adicione uma url para converter para qr code, exemplo: *${this.taskName} 'https://www.chess.com/'*`,
        mentions: undefined,
      }; 
    } 

    const shortUrl = new ShortUrl().getShortUrl(userUrl);
    if (!shortUrl){
      return {
        success: false,
        msg: "url invalida, use outra!",
        mentions: undefined
      }
    }
    shortUrl.then(shortUrl => {
      if (!shortUrl || !shortUrl['data']){
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: message.errorMsgLater,
            mentions: undefined
          }
        )
        return;
      }

      const shortUrlData = shortUrl['data'];
      if (!shortUrlData){
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: "url invalida, use outra!",
            mentions: undefined
          }
        )
        return;
      }
      evolutionAPI.sendMessage(
        request,
        {
          success: true,
          msg: shortUrlData,
          mentions: undefined
        }
      )
    })
    return {
      success: true,
      msg: "Preparando encurtando link...",
      mentions: undefined
    }
  }

  private async taskConvertTextToHex(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const userSearch = request.userMessage.split(' ').slice(1).join(' ');
    
    if (!userSearch){
      return {
        success: false,
        msg: `Adicione um texto para converter para hexadecimal, exemplo: *${this.tasksNames?.tiktokUserByName} 'olá, tudo bem?'*`,
        mentions: undefined,
      }; 
    } 

    const convertedTextToHex = new Hex().convertStringToHex(userSearch);

    return {
      success: true,
      msg: `${userSearch} -> ${convertedTextToHex}`,
      mentions: undefined
    }
  }

  private async taskConvertHexToText(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const userSearch = request.userMessage.split(' ').slice(1).join(' ');
    
    if (!userSearch){
      return {
        success: false,
        msg: `Adicione um hexadecimal para converter para texto, exemplo: *${this.tasksNames?.tiktokUserByName} 'olá, tudo bem?'*`,
        mentions: undefined,
      }; 
    } 

    const convertedTextToHex = new Hex().convertHexToText(userSearch);
    if (convertedTextToHex == '-'){
      return {
        success: false,
        msg: 'Algo deu errado, tente outra!',
        mentions: undefined
      }
    }

    return {
      success: true,
      msg: `${userSearch} -> ${convertedTextToHex}`,
      mentions: undefined
    }
  }

  private async taskGetUserImage(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    let userLid: string | undefined;
      if (!request.quotedMessageId && request.userMentionsLids.length == 0) {
       const userInfo = evolutionAPI.fetchProfile(request, user.jid);
      if (!userInfo){
        return {
          success: false,
          msg: "Usuário não encontrado, tente outro!",
          mentions: undefined
        }
      }
      userInfo.then(userInfoResponse => {
        if (!userInfoResponse['data']['picture']){
          evolutionAPI.sendMessage(
            request, 
            {
              success: false,
              msg: "*Adicione o bot aos seus contatos para poder coletar a imagem*".toUpperCase(),
              mentions: undefined
            }
          )
          return;
        }

      console.log('userInfoResponse: ' + JSON.stringify(userInfoResponse['data']));
      
      evolutionAPI.sendMedia(
        request,
        userInfoResponse['data']['picture']
      )
    })
      
      return {
        success: true,
        msg: "Colentando imagem do usuário...",
        mentions: undefined
      };
    }

    if (request.quotedMessageId){
      userLid = request.quotedParticipantLidJid!
    }
    if (request.userMentionsLids.length > 0){
      userLid = request.userMentionsLids[0];
    }

    const userInfo = evolutionAPI.fetchProfile(request, userLid!);
    if (!userInfo){
      return {
        success: false,
        msg: "Usuário não encontrado, tente outro!",
        mentions: undefined
      }
    }
    userInfo.then(userInfoResponse => {
      if (!userInfoResponse['data']['picture']){
        evolutionAPI.sendMessage(
          request, 
          {
            success: false,
            msg: "*O usúario deve possui o bot salvo ou foto de perfil ativa para coletar imagem*".toUpperCase(),
            mentions: undefined
          }
        )
        return;
      }

      console.log('userInfoResponse: ' + JSON.stringify(userInfoResponse['data']));
      
      evolutionAPI.sendMedia(
        request,
        userInfoResponse['data']['picture']
      )
    })


    return {
      success: true,
      msg: "Colentando imagem do usuário...",
      mentions: undefined
    }
  }

  private async taskRandomPoll(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {

    const randomPoll = new Poll().getRandomPoll();

    evolutionAPI.sendPoll(
      request,
      randomPoll['title'],
      randomPoll['values']
    );

    return {
      success: true,
      msg: "",
      mentions: undefined
    }
  }

  private async taskPlacesPoll(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {

    const randomPoll = new Poll().getRandomPlacePoll();

    evolutionAPI.sendPoll(
      request,
      randomPoll['title'],
      randomPoll['values']
    );

    return {
      success: true,
      msg: "",
      mentions: undefined
    }
  }

  private async taskFoodPoll(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {

    const randomPoll = new Poll().getRandomFoodPoll();

    evolutionAPI.sendPoll(
      request,
      randomPoll['title'],
      randomPoll['values']
    );

    return {
      success: true,
      msg: "",
      mentions: undefined
    }
  }

  private async taskFightPoll(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {

    const randomPoll = new Poll().getRandomFightPoll();

    evolutionAPI.sendPoll(
      request,
      randomPoll['title'],
      randomPoll['values']
    );

    return {
      success: true,
      msg: "",
      mentions: undefined
    }
  }

  private async taskPowerPoll(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {

    const randomPoll = new Poll().getRandomPowerPoll();

    evolutionAPI.sendPoll(
      request,
      randomPoll['title'],
      randomPoll['values']
    );

    return {
      success: true,
      msg: "",
      mentions: undefined
    }
  }

  private async taskTimePoll(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {

    const randomPoll = new Poll().getRandomTimePoll();

    evolutionAPI.sendPoll(
      request,
      randomPoll['title'],
      randomPoll['values']
    );

    return {
      success: true,
      msg: "",
      mentions: undefined
    }
  }

  private async taskNews(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const userSearch = request.userMessage.split(' ').slice(1).join('+');
    
    if (!userSearch){
      return {
        success: false,
        msg: `Adicione um tópico de pesquisa, exemplo: *${this.tasksNames?.tiktokUserByName} política*`,
        mentions: undefined,
      }; 
    } 

    const newsRequest = new News().getNewsInfo(userSearch);
    if (!newsRequest){
      return {
        success: false,
        msg: "Notícia não encontrada, tente outra!",
        mentions: undefined
      }
    }

    newsRequest.then(newsResponse => {
      if (!newsResponse || !newsResponse['data']){
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: message.errorMsgLater,
            mentions: undefined
          }
        )
        return;
      }
      const data = newsResponse['data'];
      if (data['articles'].length == 0){
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: "Nenhuma notícia sobre isso encontrada, tente outra!",
            mentions: undefined
          }
        )
        return;
      }

      const article = data['articles'][0];

      const newsMsg =
      `*Fonte:* *_${article['source']['name']}_*\n\n` +
      `*Título:* _${article['title']}_ \n\n` +
      `*Descrição:* ${article['description']} \n\n` +
      `*Conteúdo Prévio:* ${article['content']} \n\n` +
      `Artigo Completo: ${article['url']}`; 

      console.log('noticia: ' + newsMsg);
      

      evolutionAPI.sendMedia(
        request,
        article['image'],
        newsMsg
      );
    })
    return {
      success: true,
      msg: "Coletando informações da notícia...",
      mentions: undefined
    }
  }

  private async taskFreeGamePc(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const gameRequest = new Game().getRandomGameByPc();

    gameRequest.then(async gameResponse => {
      if (!gameResponse){
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: "Nenhum jogo encontrado, tente novamente mais tarde!",
            mentions: undefined
          }
        )
        return;
      }

      const data = gameResponse;
      if (!data){
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: "Nenhum jogo encontrado, tente novamente mais tarde!",
            mentions: undefined
          }
        )
        return;
      }

      const newsMsg =
      `*Título:* _${data['title']}_ \n\n` +
      `*Gênero:* _${await translate.getTranslate(data['genre']) || data['genre']}_ \n\n` +
      `*Plataforma:* _${await translate.getTranslate(data['platform']) || data['platform']}_ \n\n` +
      `*Desenvolvedor:* _${data['developer']}_ \n\n` +
      `*Publicador:* _${data['publisher']}_ \n\n` +
      `*Descrição Prévia:* ${await translate.getTranslate(data['short_description']) || data['short_description']} \n\n` + 
      `*Link do jogo:* ${data['game_url']}`;
      

      evolutionAPI.sendMedia(
        request,
        data['thumbnail'],
        newsMsg
      );
    })
    return {
      success: true,
      msg: "Coletando informações da notícia...",
      mentions: undefined
    }
  }

  private async taskFreeGameBrowser(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const gameRequest = new Game().getRandomGameByBrowser();

    gameRequest.then(async gameResponse => {
      if (!gameResponse){
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: "Nenhum jogo encontrado, tente novamente mais tarde!",
            mentions: undefined
          }
        )
        return;
      }

      const data = gameResponse;
      if (!data){
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: "Nenhum jogo encontrado, tente novamente mais tarde!",
            mentions: undefined
          }
        )
        return;
      }

      const newsMsg =
      `*Título:* _${data['title']}_ \n\n` +
      `*Gênero:* _${await translate.getTranslate(data['genre']) || data['genre']}_ \n\n` +
      `*Plataforma:* _${await translate.getTranslate(data['platform']) || data['platform']}_ \n\n` +
      `*Desenvolvedor:* _${data['developer']}_ \n\n` +
      `*Publicador:* _${data['publisher']}_ \n\n` +
      `*Descrição Prévia:* ${await translate.getTranslate(data['short_description']) || data['short_description']} \n\n` + 
      `*Link do jogo:* ${data['game_url']}`;
      

      evolutionAPI.sendMedia(
        request,
        data['thumbnail'],
        newsMsg
      );
    })
    return {
      success: true,
      msg: "Coletando informações da notícia...",
      mentions: undefined
    }
  }

  private async taskMeme(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn>{
    const userMessage = request.userMessage.split(' ').slice(1).join(' ');
    if (!userMessage){
      return {
        success: false,
        msg: `Adicione parâmetros com aspas, exemplo: *!meme "txt1" "txt2" (opcional)*`,
        mentions: undefined,
      }; 
    } 

    if (!request.quotedMessageId){
      return {
        success: false,
        msg: `Mencione uma imagem e use !meme "bom" "dia"`,
        mentions: undefined
      }
    }

    if (request.quotedAudioMessage || request.quotedVideoMessage){
      return {
        success: false,
        msg: `*Mencione apenas imagens!*"`,
        mentions: undefined
      }
    }

    const resultados = [...userMessage.matchAll(/(['"])(.*?)\1/g)].map(match => match[2]);
    if (resultados.length == 0){
      return {
        success: false,
        msg: `Adicione parâmetros com aspas, exemplo: *!meme "txt1" "txt2" (opcional)*`,
        mentions: undefined
      }
    }

    const topText = resultados[0];
    const bottomText = resultados[1];

    try {
      const img64 = await evolutionAPI.getContentBase64(request);
    if (!img64){
      return {success: false, msg: 'Mencione uma image, para criar um meme!', mentions: undefined}
    }
    
    const imgMeme64 = new Meme().createMeme(img64.data['base64'], topText, bottomText);
    imgMeme64.then(meme64 => {
      console.log(meme64);

      if (!meme64){
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: "*Mencione uma imagem para gerar em meme!*",
            mentions: undefined
          }
        ) 
        return; 
      }

        evolutionAPI.sendMedia(request, meme64, `"use *!st* para obter a figurinha"`);
      })
    } catch(e) {
      console.log(e);
      return {
        success: false,
        msg: message.errorMsg,
        mentions: undefined
      }
    }
    
    return {success: true, msg: "Preparando meme...", mentions: undefined};
  }

  private async taskFigImg(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    try {
      const figBase64 = evolutionAPI.getContentBase64(request);
      if (!figBase64){
        return {success: false, msg: "*Mencione uma figurinha para converter para imagem!*", mentions: undefined}
      }
      figBase64.then(base64Info => {
        if (!base64Info){
          evolutionAPI.sendMessage(
            request,
            {
              success: false,
              msg: "*Mencione uma figurinha para converter para imagem!*",
              mentions: undefined
            }
          )
          return;
        }
        evolutionAPI.sendMedia(request, base64Info['data']['base64']);
      })
    } catch(e) {
      console.log(e);
      return {
        success: false,
        msg: message.errorMsg,
        mentions: undefined
      }
    }
    
    
    return {success: true, msg: "Convertendo figurinha para imagem!", mentions: undefined};
  } 
  
  private async taskCep(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn>{
    const cepMessage = request.userMessage.split(' ').slice(1).join('').replaceAll('-', '');
    if (!cepMessage){
      return {
        success: false,
        msg: `Adicione o número do cep, exemplo: *!cep 00000000*`,
        mentions: undefined,
      }; 
    } 

    const cepInfoRequest = new BrasilApi().getCepInfo(cepMessage);
    cepInfoRequest.then(cepInfoData => {
      if (!cepInfoData){
        evolutionAPI.sendMessage(request, {
          success: false,
          msg: "Cep inválido, tente outro!",
          mentions: undefined
        })
        return;
      }

      const cepInfo = cepInfoData['data']

      const cepInfoMsg = 
      `*(Todas as informações do CEP)*\n\n` +
      `*Cep:* ${cepInfo['cep']} \n\n` +
      `*Estado:* ${cepInfo['state']} \n\n` + 
      `*Cidade:* ${cepInfo['city']} \n\n` +
      `*Bairro:* ${cepInfo['neighborhood']} \n\n` +
      `*Rua:* ${cepInfo['street']} \n\n` +
      `*Google Maps:* https://www.google.com/maps/place/${cepInfo['street'].replaceAll(' ', '+')}-+${cepInfo['neighborhood'].replaceAll(' ', '+')},+${cepInfo['city'].replaceAll(' ', '+')}+-+${cepInfo['state'].replaceAll(' ', '+')}/`

      evolutionAPI.sendMedia(request, "https://www.ubatuba.sp.gov.br/wp-content/uploads/sites/2/2021/05/destaque_correio.jpg", cepInfoMsg); 
    })

    return {success: true, msg: "Coletando informações do cep...", mentions: undefined};
  }

  private async taskDDD(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn>{
    const dddMessage = request.userMessage.split(' ').slice(1).join('');
    if (!dddMessage){
      return {
        success: false,
        msg: `Adicione o número do ddd, exemplo: *!ddd 21*`,
        mentions: undefined,
      }; 
    } 

    const ibge = new IBGE();

    const dddInfoRequest = ibge.getDDDinfo(dddMessage);
    dddInfoRequest.then(async dddInfoData => {
      if (!dddInfoData){
        evolutionAPI.sendMessage(request, {
          success: false,
          msg: "DDD inválido, tente outro!",
          mentions: undefined
        })
        return;
      }

      const stateInfo = await ibge.getStateInfoByAcronym(dddInfoData['state']);

      if (!stateInfo){
        evolutionAPI.sendMessage(request, {
          success: false,
          msg: "DDD inválido, tente outro!",
          mentions: undefined
        })
        return;
      }

      const imageUrl = await new Wikipedia().getWikiImageOnly( stateInfo['nome'].replaceAll(" ", "+"));
   
      const dddInfoMsg =
      `O DDD ${dddMessage.trim()} é do(e) *${stateInfo['nome']}* (${stateInfo['sigla']}) na região *${stateInfo['regiao']['nome']}*!\n\n` +
      `Possíveis cidades de onde esse usuário pode ser: \n\n` +
      `${
        dddInfoData['cities'].sort().map((city, i, array) => {
          if (array.length - 1 == i){
            return `- *${city}*`;
          }
          return `- *${city}*\n\n`
        }
      )}`.replaceAll(',','');


      if (imageUrl){
        new Base64().convertContentUrlToBase64(imageUrl).then(image64 => {
          evolutionAPI.sendMedia(
            request,
            image64,
            dddInfoMsg
          );
        })
        return;
      } 
      evolutionAPI.sendMessage(request, {
        success: true,
        msg: dddInfoMsg,
        mentions: undefined
      })
    })

    return {success: true, msg: "Coletando informações do DDD...", mentions: undefined};
  }

  private async taskCreateChessGame(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const chessGame = new ChessMatch().createChessMatch(request.userJid);

    chessGame.then(chessGameInfo => {
      if (!chessGameInfo){
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: "Jogo já criado, para desistir use *!desistir_xadrez*",
            mentions: undefined
          }
        )
        return;
      }

      evolutionAPI.sendMedia(
        request,
        chessGameInfo.imageUrl,
        "Bom jogo, que vença o melhor!\n\n" +
        `Para mover uma peça use o comando, exemplo:  *!mover_xadrez 'e4'*`
      )
    })

    return {
      success: true,
      msg: "Preparando jogo...",
      mentions: undefined
    }
  }

  private async taskMoveChessGame(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const chessMatch = new ChessMatch();
    
    const chessGame = chessMatch.getChessGameByUserJid(request.userJid);
    if (!chessGame){
      return {
        success: false,
        msg: "Jogo não encontrado, para criar um jogo use o comando *!jogar_xadrez*",
        mentions: undefined
      }
    }

    const userMove = request.userMessage.split(' ').slice(1).join('');
    if (!userMove){
      return {
        success: false,
        msg: `Escolha um movimento, exemplo: *!move Kf3*`,
        mentions: undefined,
      }; 
    } 

    const chessGameAfterMove = chessMatch.movePlayer(userMove, chessGame, request.userJid);

    chessGameAfterMove.then(chessGameInfo => {
      evolutionAPI.sendMedia(
        request,
        chessGameInfo.imageUrl,
        chessGameInfo.msg 
      );
    })

    return {
      success: true,
      msg: "Fazendo jogada sua e do bot...",
      mentions: undefined
    }
  }

  private async taskGiveUpChessGame(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const chessMatch = new ChessMatch()
                       .playerGiveUp(request.userJid);
    if (chessMatch){
        return {
          success: true,
          msg: 'Você desistiu do jogo atual, vitória do *computador*!',
          mentions: undefined
        }
    }
    
    return {
      success: true,
      msg: 'Não a jogo para desistir, crie um jogo *!jogar_xadrez*',
      mentions: undefined
    }
  }

  private async taskGetRandomPuzzleChess(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const chess = new ChessFull();
    
    const userMove = request.userMessage.split(' ').slice(1).join('');
    if (userMove){
      if (!request.quotedMessageId){
        return {
          success: false,
          msg: "Mentione a mensagem do desafio para realizar o movimento!",
          mentions: undefined
        }
      }

      const messageTextMentioned = request.quotedMessageImageCaption;   
      if (!messageTextMentioned){
        return {
          success: false,
          msg: "Algo deu errado, tente de novo!",
          mentions: undefined
        }
      }

      const bestMove = new Hex().convertHexToText(messageTextMentioned.split('_')[3]!);
      console.log('message: ' + messageTextMentioned.split('_'));
      
      console.log('bestMove: ' + messageTextMentioned.split('_')[3]);
      
      console.log('bestMove: ' + bestMove);
    
      
      if (bestMove.toLowerCase() == userMove.toLowerCase()){
        return {
          success: true,
          msg: "Parabéns esse foi o melhor movimento, *você acertou!*",
          mentions: undefined
        }
      } else {
        return {
          success: true,
          msg: "Você errou, esse não era o melhor lance, tente outro!",
          mentions: undefined
        }
      }
    } 

    
    const chessPuzzleInfo = chess.getRandomPuzzle();
    if (!chessPuzzleInfo){
      return {
        success: false,
        msg: "Algo deu errado, tente de novo mais tarde!",
        mentions: undefined
      }
    }
    chessPuzzleInfo.then(async chessPuzzleResponse => {
      const chessPuzzleData = chessPuzzleResponse['data'];

      const title = chessPuzzleData['title'];
      const imageUrl = chessPuzzleData['image'];
      const bestMove = chess.getBestMovieByPGN(chessPuzzleData['pgn']);
      
      const chessMatch = new ChessMatch();
      console.log('png: ' + chessPuzzleData['pgn']);
      
      console.log('realBestMove: ' + bestMove);
      console.log('translateMove: ' + chessMatch.translateToPT(bestMove!));
      console.log('hexMove: ' + new Hex().convertStringToHex(chessMatch.translateToPT(bestMove!)));

      const translate = new Translate();
      const titleTranslated = await translate.getTranslate(title);

      
      const bestMoveConvertedHex = new Hex().convertStringToHex(chessMatch.translateToPT(bestMove!));

      if (bestMoveConvertedHex == '322e'){
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: `Algo deu errado tente, *!${this.taskName}* de novo`,
            mentions: undefined
          }
        )
        return;
      }

      const puzzleMsg = 
      `Título: _${titleTranslated ? titleTranslated : title}_\n\n` +
      `ID do jogo: _${
        bestMoveConvertedHex
      }_\n\n` +
      `*Importante:* _Para jogar o lance que você acha ser o melhor, mencione a mensagem do desafio e use o comando, exemplo:  *!desafio_xadrez* 'Rxe8+'_`;

      evolutionAPI.sendMedia(
        request,
        imageUrl + "&coordinates=true",
        puzzleMsg
      );
    });

    return {
      success: true,
      msg: "Coletando informações do desafio...",
      mentions: undefined
    }
  }

  private async taskGetPlayerInfoOnChessCom(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const userMessage = request.userMessage.split(' ').slice(1).join('');
    if (!userMessage){
        return {
          success: false,
          msg: "Adicione o nome do usuário, exemplo: *!xadrez_nome 'Hikaru'*`",
          mentions: undefined
        }
    }

    const userNameInfo = new ChessFull().getPlayerInfoOnChessCom(userMessage);
    if (!userNameInfo) {
      return {
        success: false,
        msg: "Usuário não encontrado, tente outro!",
        mentions: undefined
      }
    }
    userNameInfo.then(async nameRequest => {
      const data = nameRequest['data']
      if (!data){
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: "Usuário não encontrado, tente outro!",
            mentions: undefined
          }
        )
        return;
      }

      const timeStamp = new UnixTimestamp();

      const userChessInfoMsg =
      "```(Dados coletados do chess.com) \n\n```" + 
      `*Nome do usuário:* _${data['username']}_ \n\n` +
      `*Seguidores:* _${numberFormat.formatNumber(data['followers'])}_ \n\n` + 
      `*Última vez online:* _${
        timeStamp.convertUnixTimestampToLittleEndian(data['last_online'])
      }_ \n\n` + 
      `*Conta criada em:* _${
        timeStamp.convertUnixTimestampToLittleEndian(data['joined'])
      }_ \n\n` + 
      `*Status da conta:* _${await translate.getTranslate(data['status'])}_ \n\n` + 
      `*É verificado:* _${data['verified'] ? 'Sim' : "Não"}_\n\n` + 
      `*Liga atual:* _${data['league']}_ \n\n` + 
      `*É streamer no Chess:* _${data['is_streamer'] ? 'Sim' : "Não"}_ \n\n` + 
      `${
        data['streaming_platforms'].map(stream => {
          return `*${
            stream['type'].charAt(0).toUpperCase() + stream['type'].substring(1)
          }:* _${stream['channel_url']}_ \n\n`
      })
      }` +
      `*Link do usuário:* _${data['url']}_`;

      evolutionAPI.sendMedia(
        request,
        data['avatar'],
        userChessInfoMsg
      );
    })

    return {
      success: true,
      msg: "Coletando informações do usuário...",
      mentions: undefined
    }
    
  }

  private async taskLowVoice(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    
    console.log('oi');
    
    if (!request.quotedMessageId) {
      return {
        success: false,
        msg: "Mencione um áudio para mudar a voz!",
        mentions: undefined,
      };
    }

    if (!request.quotedAudioMessage){
      return {
        success: false,
        msg: "Mencione apenas audios para mudar a voz!",
        mentions: undefined,
      };
    }

    const voice64 = await evolutionAPI.getContentBase64(request, false);
    if (!voice64){
      return {success: false, msg: "Áudio não encontrado, tente outro!", mentions: undefined};
    }
    const lowVoice = new VoiceMod().getVoiceChangeBase64(voice64['data']['base64'], '0.7');
    lowVoice.then(voiceResponse => {
      if (!voiceResponse) {
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: message.audioInvalid,
            mentions: undefined
          }
        )
        return; 
      }
      evolutionAPI.sendAudio(request, voiceResponse);
    })

    return {
      success: true,
      msg: "Preparando áudio...",
      mentions: undefined,
    };
  }

  private async taskSuperLowVoice(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    
    console.log('oi');
    
    if (!request.quotedMessageId) {
      return {
        success: false,
        msg: "Mencione um áudio para mudar a voz!",
        mentions: undefined,
      };
    }

    if (!request.quotedAudioMessage){
      return {
        success: false,
        msg: "Mencione apenas audios para mudar a voz!",
        mentions: undefined,
      };
    }

    const voice64 = await evolutionAPI.getContentBase64(request, false);
    if (!voice64){
      return {success: false, msg: "Áudio não encontrado, tente outro!", mentions: undefined};
    }
    const lowVoice = new VoiceMod().getVoiceChangeBase64(voice64['data']['base64'], '0.5');
    lowVoice.then(voiceResponse => {
      if (!voiceResponse) {
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: message.audioInvalid,
            mentions: undefined
          }
        )
        return; 
      }
      evolutionAPI.sendAudio(request, voiceResponse);
    })

    return {
      success: true,
      msg: "Preparando áudio...",
      mentions: undefined,
    };
  }

  private async taskHighVoice(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    
    console.log('oi');
    
    if (!request.quotedMessageId) {
      return {
        success: false,
        msg: "Mencione um áudio para mudar a voz!",
        mentions: undefined,
      };
    }

    if (!request.quotedAudioMessage){
      return {
        success: false,
        msg: "Mencione apenas audios para mudar a voz!",
        mentions: undefined,
      };
    }

    const voice64 = await evolutionAPI.getContentBase64(request, false);
    if (!voice64){
      return {success: false, msg: "Áudio não encontrado, tente outro!", mentions: undefined};
    }
    const lowVoice = new VoiceMod().getVoiceChangeBase64(voice64['data']['base64'], '1.3');
    lowVoice.then(high64 => {
      if (!high64) {
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: message.audioInvalid,
            mentions: undefined
          }
        )
        return; 
      }
      evolutionAPI.sendAudio(request, high64);
    })

    return {
      success: true,
      msg: "Preparando áudio...",
      mentions: undefined,
    };
  }

  private async taskSuperHighVoice(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    if (!request.quotedMessageId) {
      return {
        success: false,
        msg: "Mencione um áudio para mudar a voz!",
        mentions: undefined,
      };
    }

    if (!request.quotedAudioMessage){
      return {
        success: false,
        msg: "Mencione apenas audios para mudar a voz!",
        mentions: undefined,
      };
    }

    const voice64 = await evolutionAPI.getContentBase64(request, false);
    if (!voice64){
      return {success: false, msg: "Áudio não encontrado, tente outro!", mentions: undefined};
    }
    const lowVoice = new VoiceMod().getVoiceChangeBase64(voice64['data']['base64'], '1.5');
    lowVoice.then(voiceResponse => {
      if (!voiceResponse) {
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: message.audioInvalid,
            mentions: undefined
          }
        )
        return; 
      }
      evolutionAPI.sendAudio(request, voiceResponse);
    })

    return {
      success: true,
      msg: "Preparando áudio...",
      mentions: undefined,
    };
  }

  private async taskReverseVoice(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    if (!request.quotedMessageId) {
      return {
        success: false,
        msg: "Mencione um áudio para mudar a voz!",
        mentions: undefined,
      };
    }

    if (!request.quotedAudioMessage){
      return {
        success: false,
        msg: "Mencione apenas audios para mudar a voz!",
        mentions: undefined,
      };
    }

    const voice64 = await evolutionAPI.getContentBase64(request, false);
    if (!voice64){
      return {success: false, msg: "Áudio não encontrado, tente outro!", mentions: undefined};
    }

    const reverseVoice = new VoiceMod().inverterAudioBase64(voice64['data']['base64']);
    reverseVoice.then(reverseVoiceResponse => {
      if (!reverseVoiceResponse) {
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: message.audioInvalid,
            mentions: undefined
          }
        )
        return; 
      }

      evolutionAPI.sendAudio(
        request,
        reverseVoiceResponse
      );
    })

    return {
      success: true,
      msg: `Preparando áudio...`,
      mentions: undefined
    }
  }

  private async taskSlowVoice(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    if (!request.quotedMessageId) {
      return {
        success: false,
        msg: "Mencione um áudio para mudar a voz!",
        mentions: undefined,
      };
    }

    if (!request.quotedAudioMessage){
      return {
        success: false,
        msg: "Mencione apenas audios para mudar a voz!",
        mentions: undefined,
      };
    }

    const voice64 = await evolutionAPI.getContentBase64(request, false);
    if (!voice64){
      return {success: false, msg: "Áudio não encontrado, tente outro!", mentions: undefined};
    }

    const reverseVoice = new VoiceMod().slowAudioBase64(voice64['data']['base64'], 0.5);
    reverseVoice.then(reverseVoiceResponse => {
      if (!reverseVoiceResponse) {
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: "Áudio maior que 5 min não serão permitidos!",
            mentions: undefined
          }
        )
        return; 
      }

      evolutionAPI.sendAudio(
        request,
        reverseVoiceResponse
      );
    })

    return {
      success: true,
      msg: `Preparando áudio...`,
      mentions: undefined
    }
  }

  private async taskFastVoice(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    if (!request.quotedMessageId) {
      return {
        success: false,
        msg: "Mencione um áudio para mudar a voz!",
        mentions: undefined,
      };
    }

    if (!request.quotedAudioMessage){
      return {
        success: false,
        msg: "Mencione apenas audios para mudar a voz!",
        mentions: undefined,
      };
    }

    const voice64 = await evolutionAPI.getContentBase64(request, false);
    if (!voice64){
      return {success: false, msg: "Áudio não encontrado, tente outro!", mentions: undefined};
    }

    const reverseVoice = new VoiceMod().slowAudioBase64(voice64['data']['base64'], 1.5);
    reverseVoice.then(reverseVoiceResponse => {
      if (!reverseVoiceResponse) {
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: "Áudio maior que 5 min não serão permitidos!",
            mentions: undefined
          }
        )
        return; 
      }

      evolutionAPI.sendAudio(
        request,
        reverseVoiceResponse
      );
    })

    return {
      success: true,
      msg: `Preparando áudio...`,
      mentions: undefined
    }
  }

  private async taskEchoVoice(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    if (!request.quotedMessageId) {
      return {
        success: false,
        msg: "Mencione um áudio para mudar a voz!",
        mentions: undefined,
      };
    }

    if (!request.quotedAudioMessage){
      return {
        success: false,
        msg: "Mencione apenas audios para mudar a voz!",
        mentions: undefined,
      };
    }

    const voice64 = await evolutionAPI.getContentBase64(request, false);
    if (!voice64){
      return {success: false, msg: "Áudio não encontrado, tente outro!", mentions: undefined};
    }

    const reverseVoice = new VoiceMod().echoVoiceBase65(voice64['data']['base64']);
    reverseVoice.then(reverseVoiceResponse => {
      if (!reverseVoiceResponse) {
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: "Áudio maior que 5 min não serão permitidos!",
            mentions: undefined
          }
        )
        return; 
      }

      evolutionAPI.sendAudio(
        request,
        reverseVoiceResponse
      );
    })

    return {
      success: true,
      msg: `Preparando áudio...`,
      mentions: undefined
    }
  }

  private async taskThanks(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {

    return {success: true, msg: 'De nada, meu amor! 🥺👉🏻👈🏻', mentions: undefined};
  }

  private async taskCurse(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {  
    const isAngry = Math.random() <= 0.5;
    
    evolutionAPI.sendGif(
      request,
      `https://media.giphy.com/media/${isAngry ? 'hCm6h7PinjD2g' : 'TRgyI2f0hRHBS'}/giphy.mp4`,
      isAngry? "*VOCÊ É BOBOCA 😾*" : '*Pq você é tão cruel comigo... ☹️💔*' 
    )

    return {success: true, msg: '', mentions: undefined};
  }

  private async taskGiveCigarette(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    
    const cigarreteMsg =
    `Obrigado pelo cigarro, estava precisando... 🚬`

    evolutionAPI.sendGif(
      request,
      'https://media.giphy.com/media/eeYbfcTxoxGlG/giphy.mp4',
      cigarreteMsg
    );
    
    return {success: true, msg: '', mentions: undefined};
  }

  private async taskShopee(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const product = new Shopee().getRandomProduct();
    if (!product){
      return {
        success: false,
        msg: "Nenhum produto encontrado, tente outro!",
        mentions: undefined
      }
    }

    const shopeeMsg = 
    `*Nome do produto:* _${product.name}_ \n\n`
    +
    `*Link:* ${product.url}`

    evolutionAPI.sendMedia(
      request,
      product.img,
      shopeeMsg
    );

    return {success: true, msg: '', mentions: undefined};
  }

  private async taskShopeeGamer(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const product = new Shopee().getRandomGamerProduct();
    if (!product){
      return {
        success: false,
        msg: "Nenhum produto encontrado, tente outro!",
        mentions: undefined
      }
    }

    const shopeeMsg = 
    `*Nome do produto:* _${product.name}_ \n\n`
    +
    `*Link:* ${product.url}`

    evolutionAPI.sendMedia(
      request,
      product.img,
      shopeeMsg
    );

    return {success: true, msg: '', mentions: undefined};
  }

  private async taskShopeeHeadphone(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const product = new Shopee().getRandomHeadphoneProduct();
    if (!product){
      return {
        success: false,
        msg: "Nenhum produto encontrado, tente outro!",
        mentions: undefined
      }
    }

    const shopeeMsg = 
    `*Nome do produto:* _${product.name}_ \n\n`
    +
    `*Link:* ${product.url}`

    evolutionAPI.sendMedia(
      request,
      product.img,
      shopeeMsg
    );

    return {success: true, msg: '', mentions: undefined};
  }

  private async taskShopeeMasc(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const product = new Shopee().getRandomMascProduct();
    if (!product){
      return {
        success: false,
        msg: "Nenhum produto encontrado, tente outro!",
        mentions: undefined
      }
    }

    const shopeeMsg = 
    `*Nome do produto:* _${product.name}_ \n\n`
    +
    `*Link:* ${product.url}`

    evolutionAPI.sendMedia(
      request,
      product.img,
      shopeeMsg
    );

    return {success: true, msg: '', mentions: undefined};
  }

  private async taskShopeeFem(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const product = new Shopee().getRandomFemProduct();
    if (!product){
      return {
        success: false,
        msg: "Nenhum produto encontrado, tente outro!",
        mentions: undefined
      }
    }

    const shopeeMsg = 
    `*Nome do produto:* _${product.name}_ \n\n`
    +
    `*Link:* ${product.url}`

    evolutionAPI.sendMedia(
      request,
      product.img,
      shopeeMsg
    );

    return {success: true, msg: '', mentions: undefined};
  }

  private async taskCNPJ(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const cnpjMessage = request.userMessage.split(' ').slice(1).join('');
    if (!cnpjMessage){
      return {
        success: false,
        msg: `Adicione o número do CNPJ, exemplo: *!cpnj XX.XXX.XXX/XXXX-XX*`,
        mentions: undefined,
      }; 
    } 

    const cpnjInfoRequest = new CNPJ().getCNPJinfo(cnpjMessage);
    if (!cpnjInfoRequest){
      return {
        success: false,
        msg: "CPNJ não encontrado, tente outro!",
        mentions: undefined
      };
    }
    cpnjInfoRequest.then(cpnjInfoHttp => {
      if (!cpnjInfoHttp['data']){ return; }
      
      const cnpjInfo = cpnjInfoHttp['data'];
      
      const cpnjInfoMsg = 
      `*[${cnpjInfo['situacao']}] ${cnpjInfo['nome']}* \n\n` +
      `*Motivo Baixa:* ${cnpjInfo['motivo_situacao'].length > 0 ?  cnpjInfo['motivo_situacao'].length : 'Não Possui'} \n\n` +
      `*Endereço:* ${cnpjInfo['logradouro']}, ${cnpjInfo['numero']}, ${cnpjInfo['municipio']}/${cnpjInfo['uf']} \n\n` + 
      `*CEP:* ${cnpjInfo['cep']} \n\n` + 
      `*Contato:* ${cnpjInfo['telefone']} | ${cnpjInfo['email']}\n\n` + 
      `*Porte:* ${cnpjInfo['porte']} \n\n` + 
      `*Natureza Jurídica:* ${cnpjInfo['natureza_juridica']} \n\n` +
      `*Capital Social:* ${cnpjInfo['capital_social']} \n\n` +
      `*Fantasia:* ${cnpjInfo['fantasia'].length > 0 ? cnpjInfo['fantasia'] : "Não possui"} \n\n` +
      `*CNPJ:* ${cnpjInfo['cnpj']}`;
     
      evolutionAPI.sendMedia(
        request,
        'https://anoregrs.org.br/wp-content/uploads/2022/05/cnpj_.png',
        cpnjInfoMsg
      );
    })

    return {success: true, msg: "Coletando informações do CNPJ...", mentions: undefined}
  }

  private async taskHolidays(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    let yearUserMessage = request.userMessage.split(' ').slice(1).join('');
    const fullYear = new Date().getFullYear().toString();
    if (!yearUserMessage){
      yearUserMessage = fullYear;
    } 

    const holidays = new BrasilApi().getBrasilHolidays(yearUserMessage);
    if (!holidays){
      return {
        success: false,
        msg: `Ano inválido, tente pesquisar por *${this.taskName} ${fullYear}*`,
        mentions: undefined
      }
    }
    holidays.then(holidaysInfoHttp => {
      if (!holidaysInfoHttp || !holidaysInfoHttp['data']){
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: message.errorMsgLater,
            mentions: undefined
          }
        )
        return;
      }
      const holidaysInfo: object[] = holidaysInfoHttp['data'];
     
      const dateFormat = new NumberFormat();

      const holidaysMsg =
      `*(FERIADOS NACIONAIS ${yearUserMessage})* \n\n` +
      `${holidaysInfo.map((holiday, i, a) => {
        return `*Feriado: ${holiday['name']}*\n` +
               `Data: ${dateFormat.formatDate(holiday['date'])}${a.length - 1 == i ? '' : '\n\n'}`
      })}`.replaceAll(',','');

      evolutionAPI.sendMedia(
        request,
        "https://pontaltech.com.br/wp-content/uploads/2022/12/Feriados-2023.png",
        holidaysMsg
      );
    })
    return {success: true, msg: "Coletando informações de feriados...", mentions: undefined};
  }

  private async taskNPM(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const userPackageRequest = request.userMessage.split(' ').slice(1).join('+');
    if (!userPackageRequest){
      return {
        success: false,
        msg: `Adicione o nome de um pacote, exemplo: *${this.taskName} react*`,
        mentions: undefined,
      }; 
    } 

    const npmResponse = new Code().getNpmPackageInfo(userPackageRequest);
    if(!npmResponse){
      return {
        success: false,
        msg: "Pacote não encontrado, tente outro, exemplo: *!npm react*",
        mentions: undefined
      }
    }
    npmResponse.then(npmFullData => {
      if (!npmFullData || !npmFullData['data']){
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: message.errorMsgLater,
            mentions: undefined
          }
        )
        return;
      }
      const npmData = npmFullData['data']['objects'][0];
      
      const numberFormat = new NumberFormat() 

      const npmMsg =
      `*📦 ${npmData['package']['name']} v${npmData['package']['version']} | ⚖️ ${npmData['package']['license']}* \n\n` +
      `_${npmData['package']['description']}_ \n\n` +
      `📈 *Popularidade:* ${numberFormat.formatNumber(npmData['downloads']['monthly'])} downloads/mês | ${numberFormat.formatNumber(npmData['dependents'])} dependentes \n\n` +
      `🕒 *Última atualização:* ${numberFormat.formatDate(npmData['updated'], false)} \n\n` +
      `🔗 *Repositório:*  ${npmData['package']["links"]['repository'].replace('git+', '')} \n\n` +
      `🔗 *NPM:*  ${npmData['package']["links"]['npm']}`;
    
      evolutionAPI.sendMedia(
        request,
        'https://images.ctfassets.net/s600jj41gsex/73Ay6sAygYK8Yzyf2i5z0j/e8ec8c9f403a22f0388820da22222c81/npm_guide.png',
        npmMsg
      );
    })
    return {
      success: true,
      msg: "Coletando dados do pacote...",
      mentions: undefined
    }
  }

  private async taskPIP(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const userPackageRequest = request.userMessage.split(' ').slice(1).join('+');
    if (!userPackageRequest){
      return {
        success: false,
        msg: `Adicione o nome de um pacote, exemplo: *${this.taskName} flask*`,
        mentions: undefined,
      }; 
    } 

    const pipResponse = new Code().GetPipPackageInfo(userPackageRequest);
    if(!pipResponse){
      return {
        success: false,
        msg: `Pacote não encontrado, tente outro, exemplo: *${this.taskName} django*`,
        mentions: undefined
      }
    }
    pipResponse.then(pipFullData => {
      if (!pipFullData || !pipFullData['data']){
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: message.errorMsgLater,
            mentions: undefined
          }
        )
        return;
      }
      const pipData = pipFullData['data']['info'];
      
      const numberFormat = new NumberFormat() 

      const pipMsg =
      `*📦 ${pipData['name']} v${pipData['version']} | ⚖️ ${pipData['license_expression']}* \n\n` +
      `_${pipData['summary']}_ \n\n` +
      `*Requer Python:* ${pipData['requires_python']} \n\n` +
      `🔗 *Pacote:*  ${pipData['release_url']} \n\n` +
      `🔗 *Documentação:*  ${pipData['project_urls']['Documentation']} \n\n` + 
      `🔗 *Fonte:*  ${pipData['project_urls']['Source']}`;
    
      evolutionAPI.sendMedia(
        request,
        'https://miro.medium.com/v2/1*3853s4U6fCqtE9P2BNbSLw.png',
        pipMsg
      );
    })
    return {
      success: true,
      msg: "Coletando dados do pacote...",
      mentions: undefined
    }
  }

  private async taskIPV6(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const userIpv6Request = request.userMessage.split(' ')[1];
    if (!userIpv6Request){
      return {
        success: false,
        msg: `Adicione um ipv6, exemplo: *${this.taskName} 5eee:7e1e:e72c:de2b:4a54:a5e8:735d:c00a*`,
        mentions: undefined,
      }; 
    } 
    const ipv6Request = new ip().getIPV6Info(userIpv6Request);
    ipv6Request.then(async ipv6Response => {
      if(!ipv6Response){
        evolutionAPI.sendMessage(request,
      {
        success: false,
        msg: `Ipv6 não encontrado, tente outro, exemplo: *!ip 5eee:7e1e:e72c:de2b:4a54:a5e8:735d:c00a* (ipv6 exemplo, não é valido)`,
        mentions: undefined
      })
      return;
    }
      const ipv6Data = ipv6Response['data'];

      const ipv6Msg = 
      `📌 *IP (v6):* _${ipv6Data['ip']}_  \n\n` 
      +
      `${ipv6Data['countryFlagEmoj']} *Nação:* _${ipv6Data['countryName']}_/_${ipv6Data['countryNameNative']}_  |  `
      + 
      `🌍 *Região:* ${await translate.getTranslate(ipv6Data['continentName']) || ipv6Data['continentName']} \n\n` 
      +
      `🗺️ *Google Maps:* https://www.google.com/maps?q=${ipv6Data['latitude']},${ipv6Data['longitude']} \n\n`
      +
      `*Capital:* ${ipv6Data['capital']} • *DDI:* +${ipv6Data['phoneCode']} • *Fronteiras:* ${ipv6Data['borders'].length || 0} países vizinhos `;
    
      evolutionAPI.sendMessage(
        request,
        {
          success: true,
          msg: ipv6Msg,
          mentions: undefined
        }
      );
    })
    return {
      success: true,
      msg: "Coletando dados do ipv6...",
      mentions: undefined
    }
  }

  private async taskGenerateUUID(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    return {
      success: true,
      msg: crypto.randomUUID(),
      mentions: undefined
    }
  }

  private async taskGenerateStrongPassword(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    return {
      success: true,
      msg: password.getStrongPassword(),
      mentions: undefined
    }
  }

  private async taskCheckDomain(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    const userDomain = request.userMessage.split(' ')[1];
    if (!userDomain){
      return {
        success: false,
        msg: `Adicione o nome do domínio, exemplo: *${this.taskName} google.com*`,
        mentions: undefined,
      }; 
    } 

    const domainExist = new Domain().domainExist(userDomain);
    if (!domainExist){
      return {
        success: false,
        msg: "domínio inválido, use outro para verificar!",
        mentions: undefined
      }
    }

    domainExist.then(domainExistResponse => {
      if (!domainExistResponse || !domainExistResponse['data']){
        evolutionAPI.sendMessage(
          request,
          {
            success: false,
            msg: message.errorMsgLater,
            mentions: undefined
          }
        )
        return;
      }
      const status = domainExistResponse['data']['Status'];

      if (status == '0'){
        evolutionAPI.sendMessage(
          request,
          {
            success: true,
            msg: "*Sucesso! O domínio existe e o IP foi encontrado.* ✅",
            mentions: undefined
          }
        )
        return;
      }

      if (status == '2'){
        evolutionAPI.sendMessage(
          request,
          {
            success: true,
            msg: "Erro no servidor DNS (problema técnico deles). ✅",
            mentions: undefined
          }
        )
        return;
      }

      if (status == '3'){
        evolutionAPI.sendMessage(
          request,
          {
            success: true,
            msg: "*Nenhum domínio encontrado, domínio possivelmente a venda para compra* ❌",
            mentions: undefined
          }
        )
        return;
      }

      if (status == '5'){
        evolutionAPI.sendMessage(
          request,
          {
            success: true,
            msg: "*O servidor DNS se recusou a responder por questões de segurança.* 🖐🏻👮🏻‍♂️",
            mentions: undefined
          }
        )
        return;
      }

      evolutionAPI.sendMessage(
        request,
        {
          success: true,
          msg: "*Nenhum domínio encontrado, domínio possivelmente a venda para compra* ❌",
          mentions: undefined
        }
      )
    })

    return {
      success: true,
      msg: "Enviando mensagem para domínio...",
      mentions: undefined
    }
  }
  
}

export default Task;