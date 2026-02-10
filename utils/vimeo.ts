import axios from "axios";

class Vimeo {
  async getVideoUrl(query: string): Promise<object | undefined>{
    const url = `https://api.vimeo.com/videos?query=${query}&per_page=1`;

    const header = {
      Authorization: 'Bearer ee633b86716aa2a1d2c24aac057aed25',
      Accept: 'application/vnd.vimeo.*+json; version=3.4'
    }

    try {
      const response = await axios.get(url, {headers: header});
      return response['data']['data'][0]
    } catch(e){
      console.log(e);
    }
  }
}

export default Vimeo;