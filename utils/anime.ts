import axios from "axios"

class Anime {
  async getAnimeInfo(animeName: string){
    const url = `https://api.jikan.moe/v4/anime?q=${animeName}`

    try {
      return await axios.get(url);
    } catch(e) {
      console.log(e);
    }
  }
}

export default Anime;