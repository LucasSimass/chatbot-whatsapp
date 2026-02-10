import axios from "axios";
import * as dotenv from 'dotenv'
dotenv.config({quiet: true});

class Content {
  async getContentInfo(filmNameForUrl: string, type: "movie" | "series"): Promise<{haveImage: boolean, data: object} | undefined> {
    const url = `http://www.omdbapi.com/?apikey=${process.env.FILM_API_KEY}&t=${filmNameForUrl}`

    console.log(url);
    try {
      const response = await axios.get(url)

      try{
        const imageResponse = await axios.get(response['data']['Poster']);
        return {haveImage: true, data: response}
      }catch(e){
        return {haveImage: false, data: response}
      }

    } catch (e){
      console.log(e);
     
    }
  }
}


export default Content;