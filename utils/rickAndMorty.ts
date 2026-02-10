import axios from "axios"

class RickAndMorty {
  async getCharacterInfo(characterName: string){
    const url = `https://rickandmortyapi.com/api/character/?name=${characterName}`
    try {
      const response = await axios.get(url);
      return response;
    } catch (e) {
      console.log(e);
    }
  }
}

export default RickAndMorty;