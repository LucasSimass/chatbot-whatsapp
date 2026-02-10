import axios from 'axios';
import * as dotenv from 'dotenv'
dotenv.config({quiet: true});

class News {
  async getNewsInfo(query: string) {
    const url = `https://gnews.io/api/v4/search?q=${query}&lang=pt&max=1&apikey=${process.env.NEWS_API_KEY}`;

    try {
      const response = await axios.get(url);
      return response; 
    } catch(e) {
      console.log(e);
    }
  }
}

export default News;