import axios from 'axios';
import * as dotenv from 'dotenv'
dotenv.config({quiet: true});

class ip {
  async getIPV6Info(ipv6: string){
    const url = `https://apiip.net/api/check?ip=${ipv6}&accessKey=${process.env.APIIP_API_KEY}`;

    try {
      return await axios.get(url);
    } catch(e) {
      console.log(e);
    }
  }
}

export default ip;