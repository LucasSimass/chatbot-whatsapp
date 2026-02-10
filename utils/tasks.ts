import type { userDefaultReturn } from "../types/UserType.ts";
import EvolutionApi from "./evolutionAPI.ts";
import User from "./user.ts";
import Users from "./users.ts";
import type RequestInfo from "./requestInfo.ts";
import Task from "./task.ts";

const evolutionAPI = new EvolutionApi();

class Tasks {
  categorys = {
    admin: {name: "Admin", emoji: "🍸"},
    creator: {name: "Criador", emoji: "🧠"},
    search: {name: "Pesquisar", emoji: "🔎"},
    music: {name: "Música", emoji: "🎶"},
    rpg: {name: "RPG", emoji: "🎲"},
    funny: {name: "Diversão", emoji: "💫"},
    tiktok: {name: "Tiktok", emoji: "🤳🏻"},
    voice: {name: "Voz", emoji: "🗣️"},
    brasil: {name: "Brasil", emoji: "🇧🇷"},
    bot: {name: "Bot", emoji: "🤖"},
    code: {name: "Programação", emoji: "👨🏻‍💻"},
    user: {name: "Usuário", emoji: "👤"},
    chess: {name: "Xadrez", emoji: "♟️"},
    poll: {name: "Enquete", emoji: "📝"},
    utilitys: {name: "Utilidades", emoji: "🔬"},
    shopee: {name: "Shopee", emoji: "🛍️"},
    math: {name: "Matemática", emoji: "🧮"},
  };

  tasksName = {
    menu: "!menu",
    categorys: "!categoria",
    status: "!status",
    suport: "!suporte",
    commands: "!comandos",
    donate: "!doar",

    register: "!registrar",
    rank: "!rank",
    quiz: "!quiz",
    mine: "!minerar",
    gold: "!ouro",
    store: "!loja",
    buyPickaxe: "!comprar_picareta",

    flipCoin: "!cara_coroa",
    yesNo: "!sim_nao",

    film: "!filme",
    series: "!serie",
    exchange: "!cambio",

    rickMorty: "!rick_morty",
    wiki: "!wiki",
    anime: "!anime",
    nasa: "!nasa",
    name: "!nome",
    img: "!img",
    imgd: "!imgd",
    fm: "!fm",
    searchSticker: "!fig",
    qrCode: "!qr_code",
    url: "!url",
    userImage: "!foto_perfil",
    print: "!print",
    flirt: "!cantada",


    poll: "!enquete",
    foodPoll: "!enquete_comida",
    fightPoll: "!enquete_luta",
    powerPoll: "!enquete_poder",
    placePoll: "!enquete_local",
    timePoll: "!enquete_tempo",

    emoji: "!emoji",
    meme: "!meme",
    say: "!diga",
    active: "!ativo",
    insult: "!insulto",
    cigarrete: "!cigarro",
    thanks: "!obrigado",
    curseBot: "!xingar",
    creator: "!criador",

    createChessGame: "!jogar_xadrez",
    moveChessGame: "!mover_xadrez",
    giveUpChessGame: "!desistir_xadrez",
    puzzleChess: "!desafio_xadrez",
    playerChess: "!jogador_xadrez",

    motivation: "!motivacao",
    facts: "!fatos",
    catFacts: "!fatos_gatos",
    catPhoto: "!gato",
    dogPhoto: "!cachorro",
    coffeePhoto: "!cafe",
    hex: "!hex",
    text: "!texto",
    translate: "!traduzir",
    viralVideo: "!viral",
    reupload: "!reupload",

    lowVoice: "!grave",
    superLowVoice: "!super_grave",
    highVoice: "!fino",
    superHighVoice: "!super_fino",
    reverseVoice: "!reverso",
    slowVoice: "!lento",
    fastVoice: "!rapido",
    echo: "!eco",
    createAudio: "!audio",

    calculate: "!calcular", 
    factorial: "!fact",
    exponetial: "!exp",
    sqrt: "!sqrt",
    pi: "!pi",
    rNum: "!num",

    gemini: "!gemini",

    youtube: "!yt",
    youtubeAudioExtract: "!yt_url",

    music: "!musica",
    findArtist: "!encontre_artista",
    lyric: "!letra",

    tiktok: "!tk",
    tiktokSearch: "!tk_pesquisa",
    tiktokSearchInfo: "!tk_pesquisa_info",
    tiktokUserByName: "!tk_nome",
    tiktokUserById: "!tk_id",

    freeGamePc: "!jogo_pc",
    freeGameBrowser: "!jogo_navegador",

    news: "!noticia",

    shopee: "!shopee",
    shopeeGamer: "!shopee_gamer",
    shopeeHeadphone: "!shopee_fone",
    shopeeMasc: "!shopee_masc",
    shopeeFem: "!shopee_fem",

    cep: "!cep",
    ddd: "!ddd",
    cnpj: "!cnpj",
    holidays: "!feriados",

    kill: "!kill",

    lock: "!lock",
    unlock: "!unlock",
    mentionAll: "!todos",
    deleteMessage: "!deletar",
    mute: "!mutar",
    desmute: "!desmutar",

    shutdownAlert: "!criador_fechamento",
    shutdown: "!criador_desligar",
    opening: "!criador_ligar",
    advice: "!criador_aviso",

    st: "!st",
    dice: "!dado",

    npm: "!npm",
    pip: "!pip",
    ipv6: "!ip",
    uuid: "!uuid",
    createPassword: "!gerar_senha",
    domain: "!dominio",
  }

  allTasks = [
    new Task(this.tasksName.menu, this.categorys.user, `'${this.categorys.tiktok.name}'`),
    new Task(this.tasksName.categorys, this.categorys.user, `(Obtenha todas as categorias)`),
    new Task(this.tasksName.status, this.categorys.user, undefined),
    new Task(this.tasksName.suport, this.categorys.user, "'!menu' 'não está funcionando'"),
    new Task(this.tasksName.commands, this.categorys.user, "(Quantidade de comandos)"),
    new Task(this.tasksName.donate, this.categorys.user, "(Fazer uma doação para o desenvolvedor)"),

    new Task(this.tasksName.register, this.categorys.rpg, "(Registrar no RPG)"),
    new Task(this.tasksName.rank, this.categorys.rpg, "(Rank das pessoas)"),
    new Task(this.tasksName.gold, this.categorys.rpg, "(Quanto ouro possui)"),
    new Task(this.tasksName.quiz, this.categorys.rpg, "'3' (Chute um número de 0 a 5)"),
    new Task(this.tasksName.mine, this.categorys.rpg, undefined),
    new Task(this.tasksName.store, this.categorys.rpg, "(Menu da Loja)"),
    new Task(this.tasksName.buyPickaxe, this.categorys.rpg, "(Comprar picareta)"),

    new Task(this.tasksName.flipCoin, this.categorys.funny, undefined),
    new Task(this.tasksName.yesNo, this.categorys.funny, '(Sim ou Não)'),
    new Task(this.tasksName.emoji, this.categorys.funny, "'😎 + 😘'"),
    new Task(this.tasksName.meme, this.categorys.funny, `"txt1" "txt2" (opcional)`),
    new Task(this.tasksName.motivation, this.categorys.funny, "(Gera uma frase de motivação)"),
    new Task(this.tasksName.facts, this.categorys.funny, "(Recebe um fato aleatório)"),
    new Task(this.tasksName.catFacts, this.categorys.funny, "(Recebe um fato aleatório sobre gatos)"),
    new Task(this.tasksName.catPhoto, this.categorys.funny, "(Gera uma foto aleatório de um gato)"),
    new Task(this.tasksName.dogPhoto, this.categorys.funny, "(Gera uma foto aleatório de um cachorro)"),
    new Task(this.tasksName.coffeePhoto, this.categorys.funny, "(Gera uma foto aleatório de um café)"),
    new Task(this.tasksName.insult, this.categorys.funny, "(Gera um insulto aleatório)"),

    new Task(this.tasksName.say, this.categorys.bot, "'oi'"),
    new Task(this.tasksName.active, this.categorys.bot, "(Verifica se o bot está ativo)"),
    new Task(this.tasksName.thanks, this.categorys.bot, "(Agradeça ao bot)"),
    new Task(this.tasksName.curseBot, this.categorys.bot, "(Xingue o bot)"),
    new Task(this.tasksName.creator, this.categorys.bot, "(Criador do bot)"),
    new Task(this.tasksName.cigarrete, this.categorys.bot, "(De um cigarro para o bot)"),

    new Task(this.tasksName.createChessGame, this.categorys.chess, undefined),
    new Task(this.tasksName.moveChessGame, this.categorys.chess, 'Kf3'),
    new Task(this.tasksName.giveUpChessGame, this.categorys.chess, undefined),
    new Task(this.tasksName.puzzleChess, this.categorys.chess, "(Recebe um desafio no xadrez)"),
    new Task(this.tasksName.playerChess, this.categorys.chess, "'Hikaru' (Obtem informações de um jogador de xadrez)"),

    new Task(this.tasksName.translate, this.categorys.utilitys, "'Bonjour'"),
    new Task(this.tasksName.viralVideo, this.categorys.utilitys, "(Gera um vídeo viral para postar no tiktok)"),
    new Task(this.tasksName.reupload, this.categorys.utilitys, "(Faz reupload do vídeo)"),
    
    new Task(this.tasksName.lowVoice, this.categorys.voice, "(Mencione um áudio)"),
    new Task(this.tasksName.superLowVoice, this.categorys.voice, "(Mencione um áudio)"),
    new Task(this.tasksName.highVoice, this.categorys.voice, "(Mencione um áudio)"),
    new Task(this.tasksName.superHighVoice, this.categorys.voice, "(Mencione um áudio)"),
    new Task(this.tasksName.reverseVoice, this.categorys.voice, "(Mencione um áudio)"),
    new Task(this.tasksName.slowVoice, this.categorys.voice, "(Mencione um áudio)"),
    new Task(this.tasksName.fastVoice, this.categorys.voice, "(Mencione um áudio)"),
    new Task(this.tasksName.echo, this.categorys.voice, "(Mencione um áudio)"),
    new Task(this.tasksName.createAudio, this.categorys.utilitys, "'Bom dia!' (Crie um áudio)"),

    // Math
    new Task(this.tasksName.calculate, this.categorys.math, "'2 + 2'"),
    new Task(this.tasksName.factorial, this.categorys.math, "'5' (Valor factoria de !x)"),
    new Task(this.tasksName.exponetial, this.categorys.math, "'base' 'expoente' (Obtem o exponential de um valor)"),
    new Task(this.tasksName.sqrt, this.categorys.math, "'25' (Obtem a raiz quadrada de um valor)"),
    new Task(this.tasksName.pi, this.categorys.math, "(Obtem o valor de Pi)"),
    new Task(this.tasksName.rNum, this.categorys.math, "'min' 'max' (Obtem um valor aleatório entre min e max)"),

    
    
    new Task(this.tasksName.kill, this.categorys.admin, "'@fulano'"),

    new Task(this.tasksName.lock, this.categorys.admin, undefined),
    new Task(this.tasksName.unlock, this.categorys.admin, undefined),
    new Task(this.tasksName.mentionAll, this.categorys.admin, '(Mentiona todos)'),
    new Task(this.tasksName.deleteMessage, this.categorys.admin, '(Mencione uma mensagem para deleta-la)'),
    new Task(this.tasksName.mute, this.categorys.admin, '(Mencione uma pessoa para mutá-la)'),
    new Task(this.tasksName.desmute, this.categorys.admin, '(Mencione uma pessoa para desmutá-la)'),

    new Task(this.tasksName.shutdownAlert, this.categorys.creator, "'inicio' 'fim' 'motivo' (Aviso de desligamento e re-abertura do bot)"),
    new Task(this.tasksName.shutdown, this.categorys.creator, "'abertura' 'motivo' (Mensagem de desligamento do bot)"),
    new Task(this.tasksName.opening, this.categorys.creator, "(Mensagem de ligamento do bot)"),
    new Task(this.tasksName.advice, this.categorys.creator, "(Envia um aviso a todos de ligamento do bot)"),

    new Task(this.tasksName.anime, this.categorys.search, "'Attack on Titan'"),
    new Task(this.tasksName.nasa, this.categorys.search, "(Foto diária tirado pela Nasa)"),
    new Task(this.tasksName.name, this.categorys.search, "'Lucas' (Informações do nome)"),
    new Task(this.tasksName.gemini, this.categorys.search, "'Oq é um paralelepípedo?'"),
    new Task(this.tasksName.wiki, this.categorys.search, "'Terra'"),
    //new Task(this.tasksName.vimeo, this.categorys.search, "'meme'"),
    new Task(this.tasksName.rickMorty, this.categorys.search, "'Morty'"),
    new Task(this.tasksName.film, this.categorys.search, "'Barbie'"),
    new Task(this.tasksName.series, this.categorys.search, "'The Flash'"),
    new Task(this.tasksName.img, this.categorys.search, "'Praia'"),
    new Task(this.tasksName.imgd, this.categorys.search, "'Praia' (Imagem com mais detalhes)"),
    new Task(this.tasksName.youtube, this.categorys.search, "'Billie Jean'"),
    new Task(this.tasksName.youtubeAudioExtract, this.categorys.search, "'url' (extrai um áudio do youtube)"),

    new Task(this.tasksName.news, this.categorys.search, "'política'"),

    new Task(this.tasksName.tiktok, this.categorys.tiktok, "'url' (Baixar videos sem marca d'água)"),
    new Task(this.tasksName.tiktokSearch, this.categorys.tiktok, "'memes' (Obtem um vídeo no tiktok)"),
    new Task(this.tasksName.tiktokSearchInfo, this.categorys.tiktok, "'memes' (Obtem um vídeo no tiktok com detalhes)"),
    new Task(this.tasksName.tiktokUserByName, this.categorys.tiktok, "'Will Smith'"),
    new Task(this.tasksName.tiktokUserById, this.categorys.tiktok, "'@willsmith'"),

    new Task(this.tasksName.freeGamePc, this.categorys.search, "(Obtem um jogo grátis de pc)"),
    new Task(this.tasksName.freeGameBrowser, this.categorys.search, "(Obtem um jogo grátis de navegador)"),

    new Task(this.tasksName.music, this.categorys.music, "'Billie Jeans' (Obtem a música)"),
    new Task(this.tasksName.findArtist, this.categorys.music, "'música' (Encontre artista pela música)"),
    new Task(this.tasksName.lyric, this.categorys.music, "'sorry' (Obtem a letra da música)"),

    new Task(this.tasksName.exchange, this.categorys.search, "'BRL'"),

    new Task(this.tasksName.shopee, this.categorys.shopee, "(Obtem um produto aleatório da Shopee)"),
    new Task(this.tasksName.shopeeGamer, this.categorys.shopee, "(Obtem um produto gamer aleatório da Shopee)"),
    new Task(this.tasksName.shopeeHeadphone, this.categorys.shopee, "(Obtem um fone aleatório da Shopee)"),
    new Task(this.tasksName.shopeeMasc, this.categorys.shopee, "(Obtem uma roupa masculina da Shopee)"),
    new Task(this.tasksName.shopeeFem, this.categorys.shopee, "(Obtem uma roupa feminina da Shopee)"),
    
    new Task(this.tasksName.cep, this.categorys.brasil, "'96010052' (Obtem informações do cep)"),
    new Task(this.tasksName.ddd, this.categorys.brasil, "'21' (Obtem informações do ddd)"),
    new Task(this.tasksName.cnpj, this.categorys.brasil, "'XX.XXX.XXX/XXXX-XX' (Obtem informações do cnpj)"),
    new Task(this.tasksName.holidays, this.categorys.brasil, `'${new Date().getFullYear().toString()}' (Todos os feriados nacionais do ano desejado)`),
    
    new Task(this.tasksName.fm, this.categorys.utilitys, "(Mencione uma figurinha e converta para imagem)"),
    new Task(this.tasksName.st, this.categorys.utilitys, "(Mencione uma imagem e converta para figurinha)"),
    new Task(this.tasksName.hex, this.categorys.utilitys, "'olá, bom dia' (Converta um texto para hexadecimal)"),
    new Task(this.tasksName.text, this.categorys.utilitys, "'6f7061' (Converta um hexadecimal para texto)"),
    new Task(this.tasksName.qrCode, this.categorys.utilitys, "'https://www.chess.com/' (Gera um QR code)"),
    new Task(this.tasksName.url, this.categorys.utilitys, "'url' (Encurta a sua url)"),
    new Task(this.tasksName.userImage, this.categorys.utilitys, "(Mencione o usuário para obter a imagem dele)"),
    new Task(this.tasksName.print, this.categorys.utilitys, "'url' (Printa o site)"),
    new Task(this.tasksName.dice, this.categorys.utilitys, "(Gire o dado)"),
    new Task(this.tasksName.flirt, this.categorys.utilitys, "'@fulano' (Mencione uma pessoa para ter uma cantada)"),

    new Task(this.tasksName.poll, this.categorys.poll, "(Gera uma enquete sobre um tópico aleatória)"),
    new Task(this.tasksName.foodPoll, this.categorys.poll, "(Gera uma enquete sobre comida)"),
    new Task(this.tasksName.fightPoll, this.categorys.poll, "(Gera uma enquete sobre luta)"),
    new Task(this.tasksName.timePoll, this.categorys.poll, "(Gera uma enquete sobre tempo)"),
    new Task(this.tasksName.powerPoll, this.categorys.poll, "(Gera uma enquete sobre poder)"),
    new Task(this.tasksName.placePoll, this.categorys.poll, "(Gera uma enquete sobre locais)"),


    new Task(this.tasksName.searchSticker, this.categorys.utilitys, "'feliz' (Envia uma figurinha)"),

    new Task(this.tasksName.npm, this.categorys.code, "'express' (Recebe informações de um pacote npm)"),
    new Task(this.tasksName.pip, this.categorys.code, "'flask' (Recebe informações de um pacote pip)"),
    new Task(this.tasksName.ipv6, this.categorys.code, "'ipv6' (esse ipv6 é apenas de exemplo, não é valido) (Recebe informações do país com um ipv6)"),
    new Task(this.tasksName.uuid, this.categorys.code, "(Gera um UUID aleatório)"),
    new Task(this.tasksName.createPassword, this.categorys.code, "(Gera senha forte)"),
    new Task(this.tasksName.domain, this.categorys.code, "'google.com' (Verifique se o domínio existe)"),
  ]

  findTask(taskName: string){
    return this.allTasks.find(task => task.taskName == taskName);
  }

  public async doUserTask(request: RequestInfo, user: User, users: Users): Promise<userDefaultReturn> {
    let userTaskMsg = request.userMessage.split(' ')[0];  
    if (!userTaskMsg){
      return {success: false, msg: "Comando não encontrado!", mentions: undefined}
    }

    userTaskMsg = userTaskMsg
                  .toLowerCase()
                  .replaceAll('á', 'a')
                  .replaceAll('ã', 'a')
                  .replaceAll('é', 'e')
                  .replaceAll('ç', 'c')
                  .replaceAll('ó', 'o')
                  .replaceAll('í', 'i');
                  

    const task: Task | undefined = this.findTask(userTaskMsg.toLowerCase());
    if (userTaskMsg.charAt(0) == '!' && !task){
      evolutionAPI.sendEmoji(request, '🚫');
      return {success: false, msg: `Comando não encontrado, use *${this.tasksName.menu}* para achar um comando válido!`, mentions: undefined}
    }
    if (!task){
      return {success: false, msg: "Comando não encontrado!", mentions: undefined}
    }


    // add the info about user using commands
    user.commandAmount += 1
    user.lastCommand = task.taskName;

    evolutionAPI.sendEmoji(request, task.taskCategory.emoji);

    return task.doTask(request, user, users, new Tasks())
  }
}

export default Tasks;