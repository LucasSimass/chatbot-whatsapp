import axios from 'axios';
import * as dotenv from 'dotenv'
dotenv.config({quiet: true});

class Giphy {
  async getGif(query: string){
    const url = `https://api.giphy.com/v1/stickers/search?api_key=${process.env.GIPHY_API_KEY}&q=${query}&limit=1`;

    try {
      return await axios.get(url)
    } catch (e) {
      console.log(e); 
    }
  }
}

export default Giphy;