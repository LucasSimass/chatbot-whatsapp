import axios from "axios";

class Game {
  async getRandomGameByPc(){
    const url = `https://www.freetogame.com/api/games?platform=pc`;

    try {
      const response = await axios.get(url);
      const gameOptions: Array<object> = response['data'];
      
      const gameChooseIndex = Math.floor(Math.random() * ((gameOptions.length - 1) - 0 + 1)) + 0;
      return gameOptions[gameChooseIndex]
    } catch(e) {
      console.log(e);
    }
  }

  async getRandomGameByBrowser(){
    const url = `https://www.freetogame.com/api/games?platform=browser`;

    try {
      const response = await axios.get(url);
      const gameOptions: Array<object> = response['data'];
      
      const gameChooseIndex = Math.floor(Math.random() * ((gameOptions.length - 1) - 0 + 1)) + 0;
      return gameOptions[gameChooseIndex]
    } catch(e) {
      console.log(e);
    }
  }
}

export default Game;