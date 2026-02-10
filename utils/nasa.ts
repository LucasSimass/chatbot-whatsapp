import axios from 'axios';
import * as dotenv from 'dotenv'
import { defaultArg } from 'tone';
dotenv.config({quiet: true});

class Nasa {
  async getPhotoOfDay() {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`;

    try {
      return await axios.get(url);
    } catch(e) {
      console.log(e);
    }
  }
}

export default Nasa;