import axios from "axios";
import * as dotenv from 'dotenv'
dotenv.config({quiet: true});

class Photo {
  async getPhotoInfo(query: string) {
    const url = `https://api.pexels.com/v1/search?query=${query}`;

    const header = {
      'Authorization': `${process.env.PEXELS_API_KEY}`,
      'Content-Type': "application/json",
      'Accept': 'application/json',
      'User-Agent': `bot/1.0 (simaslucas1m@gmail.com)`
    };

    try{
      const photoInfo = await axios.get(url, { headers: header});
      return photoInfo;
    }catch(e){
      console.log(e);
    }
  }
}

export default Photo;