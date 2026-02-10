import { title } from "process";

class PollInfo {
  createWhoWinFightInfo(v1: string,v2: string){
    return {
      title: `*🥊 Quem vence? 🥊*`.toUpperCase(), 
      values: [v1, v2]
    }
  }

  createPowerChooseInfo(v1: string,v2: string){
    return {
      title: `*✨ Escolha um Poder ✨*`.toUpperCase(), 
      values: [v1, v2]
    }
  }

  createFoodChooseInfo(v1: string,v2: string){
    return {
      title: `*🍽️ Melhor Comida/Bebida 🍽️*`.toUpperCase(), 
      values: [v1, v2]
    }
  }

  createPlacesChooseInfo(v1: string,v2: string){
    return {
      title: `*📍 Melhor lugar para viajar? 📍*`.toUpperCase(), 
      values: [v1, v2]
    }
  }

  createTimeChooseInfo(v1: string,v2: string){
    return {
      title: `*👙 Melhor tempo? 🧥*`.toUpperCase(), 
      values: [v1, v2]
    }
  }
}

class Poll {
  pollInfo = new PollInfo();

  whoFightPoll = [
    this.pollInfo.createWhoWinFightInfo('Batman 🦇','Superman 🦸🏻‍♂️'),
    this.pollInfo.createWhoWinFightInfo('Batman 🦇','Goku 🫴🏻'),
    this.pollInfo.createWhoWinFightInfo('Rick Sanchez 🧪','Deadpool 🩸'),
    this.pollInfo.createWhoWinFightInfo('Dumbledore 🧙🏼‍♂️','Pennywise 🎈'),
    this.pollInfo.createWhoWinFightInfo('Jason 🧟‍♂️','Michael Myers 🔪'),
    this.pollInfo.createWhoWinFightInfo('Freddy krueger  💭','Pennywise 🎈'),
    this.pollInfo.createWhoWinFightInfo('Batman 🦇','Pennywise 🎈'),
    this.pollInfo.createWhoWinFightInfo('Harry Potter  🪄','Percy Jackson 🌊'),
    this.pollInfo.createWhoWinFightInfo('Jhon Wick ✏️','Slade (DC) 🗡️'),
    this.pollInfo.createWhoWinFightInfo('Hulk 💢','Thanos 🪬'),
    this.pollInfo.createWhoWinFightInfo('Bruce Lee 🥋','Jackie Chan 👊🏻'),
    this.pollInfo.createWhoWinFightInfo('Saitama 👨🏻‍🦲','Goku (auge) 🫴🏻'),
    this.pollInfo.createWhoWinFightInfo('Meliodas 😎','Escanor ☀️'),
    this.pollInfo.createWhoWinFightInfo('L 🤔','Light Yagami (Kira) ✍🏻'),
    this.pollInfo.createWhoWinFightInfo('Doutor Estranho 👁️','Feiticeira Escarlate 🫀'),
  ]

  powerChoosePoll = [
    this.pollInfo.createPowerChooseInfo('Telepatia 🧠','Super Velocidade ⚡'),
    this.pollInfo.createPowerChooseInfo('Invisibilidade 🫥','Voar 🪽'),
    this.pollInfo.createPowerChooseInfo('Invisibilidade 🫥','Ser Super Famoso 📸'),
    this.pollInfo.createPowerChooseInfo('Super Força 💪',"Respiração Aquática 🫧"),
    this.pollInfo.createPowerChooseInfo('Viajar para o Futuro ⌚',"Viajar para o Passado 🕰️"),
    this.pollInfo.createPowerChooseInfo('Ter qualquer pessoa que deseja 🤵🏻‍♂️',"Ter qualquer objeto 💎"),
    this.pollInfo.createPowerChooseInfo('Nunca morrer ☠️',"Ser um gênio 🤓"),
    this.pollInfo.createPowerChooseInfo('Teletransporte  🚀',"Ser Indestrutivel 🛡️"),
    this.pollInfo.createPowerChooseInfo('Super Pulo 🐇',"Atravessar Objetos 🚶‍♂️"),
    this.pollInfo.createPowerChooseInfo('Raio Lazer 👀',"Grito Sônico 🗣️"),
  ]

  foodChoosePoll = [
    this.pollInfo.createFoodChooseInfo('Banana 🍌', 'Maça 🍎'),
    this.pollInfo.createFoodChooseInfo('Arroz 🍚', 'Feijão 🫘'),
    this.pollInfo.createFoodChooseInfo('Sushi 🍣', 'Salgado 🥐'),
    this.pollInfo.createFoodChooseInfo('Chocolate 🍫', 'Sorvete 🍨'),
    this.pollInfo.createFoodChooseInfo('Camarão 🍤', 'Lagosta 🦞'),
    this.pollInfo.createFoodChooseInfo('Abacaxi 🍍', 'Manga 🥭'),
    this.pollInfo.createFoodChooseInfo('Pudim 🍮', 'Bolo 🍰'),
    this.pollInfo.createFoodChooseInfo('Vinho 🍷', 'Cerveja 🍺'),
    this.pollInfo.createFoodChooseInfo('Batata 🍟', 'Cachorro-quente 🌭'),
    this.pollInfo.createFoodChooseInfo('Suco de Limão 🍋‍🟩', 'Suco de Laranja 🍊'),
    this.pollInfo.createFoodChooseInfo('Café ☕', 'Chá 🍵'),
    this.pollInfo.createFoodChooseInfo('Milkshake 🥤', 'Sorvete 🍦'),
    this.pollInfo.createFoodChooseInfo('Salgado 🧂', 'Sorvete 🧁'),
  ]

  placeChoosePoll = [
    this.pollInfo.createPlacesChooseInfo('Estados Unidos 🇺🇸', 'Canadá 🇨🇦'),
    this.pollInfo.createPlacesChooseInfo('Paris 🇫🇷', 'Madrid 🇪🇸'),
    this.pollInfo.createPlacesChooseInfo('Portugal 🇵🇹 🇫🇷', 'Espanha 🇪🇸'),
    this.pollInfo.createPlacesChooseInfo('Japão 🇯🇵', 'Coreia do Sul 🇰🇷'),
    this.pollInfo.createPlacesChooseInfo('Russia 🇷🇺', 'China 🇨🇳'),
    this.pollInfo.createPlacesChooseInfo('Reino Unido 🇬🇧', 'Suiça 🇨🇭'),

    this.pollInfo.createPlacesChooseInfo('Rio de Janeiro 🇧🇷', 'São Paulo 🇧🇷'),
    this.pollInfo.createPlacesChooseInfo('Minas Gerais 🇧🇷', 'São Paulo 🇧🇷'),
    this.pollInfo.createPlacesChooseInfo('Bahia 🇧🇷', 'Espirito Santo 🇧🇷'),

    this.pollInfo.createPlacesChooseInfo('Egito 🇪🇬', 'África do Sul 🇿🇦'),
    this.pollInfo.createPlacesChooseInfo('Alemanha 🇩🇪', 'Itália 🇮🇹'),
    this.pollInfo.createPlacesChooseInfo('França 🇫🇷', 'Reino Unido 🇬🇧'),
    
  ]

  timeChoosePoll = [
    this.pollInfo.createTimeChooseInfo('Inverno ❄️', 'Verão ☀️'),
    this.pollInfo.createTimeChooseInfo('Verão ☀️', 'Outono 🍂'),
    this.pollInfo.createTimeChooseInfo('Outono 🍂', 'Inverno ❄️'),
    this.pollInfo.createTimeChooseInfo('Outono 🍂', 'Primavera 🌸'),
    this.pollInfo.createTimeChooseInfo('Primavera 🌸','Inverno ❄️'),
    this.pollInfo.createTimeChooseInfo('Primavera 🌸','Verão ☀️'),

  ]

  polls = [
    ...this.placeChoosePoll,
    ...this.foodChoosePoll,
    ...this.powerChoosePoll,
    ...this.whoFightPoll,
    ...this.timeChoosePoll
  ]

  public getRandomPoll(){
    const rIndex = Math.floor(Math.random() * (this.polls.length - 0 + 1)) + 0;

    return this.polls[rIndex]!; 
  }

  public getRandomPlacePoll(){
    const rIndex = Math.floor(Math.random() * (this.placeChoosePoll.length - 0 + 1)) + 0;

    return this.placeChoosePoll[rIndex]!; 
  }

  public getRandomPowerPoll(){
    const rIndex = Math.floor(Math.random() * (this.powerChoosePoll.length - 0 + 1)) + 0;

    return this.powerChoosePoll[rIndex]!; 
  }

  public getRandomFoodPoll(){
    const rIndex = Math.floor(Math.random() * (this.foodChoosePoll.length - 0 + 1)) + 0;

    return this.foodChoosePoll[rIndex]!; 
  }

  public getRandomFightPoll(){
    const rIndex = Math.floor(Math.random() * (this.whoFightPoll.length - 0 + 1)) + 0;

    return this.whoFightPoll[rIndex]!; 
  }


  public getRandomTimePoll(){
    const rIndex = Math.floor(Math.random() * (this.timeChoosePoll.length - 0 + 1)) + 0;

    return this.timeChoosePoll[rIndex]!; 
  }
}

export default Poll;