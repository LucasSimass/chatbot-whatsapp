import axios from "axios";

class Tiktok {
  async getTiktokVideo(tiktokUrl: string){
    const url = `https://www.tikwm.com/api/?url=${tiktokUrl}`;

    try {
      return await axios.get(url);
    } catch(e) {
      console.log(e); 
    }
  }

  async getTiktokVideoBySearch(search: string){
    const url = `https://www.tikwm.com/api/feed/search?keywords=${search}`;

    try {
      return await axios.get(url);
    } catch(e) {
      console.log(e); 
    }
  }

  async getUserInfoByName(userName: string) {
    const url = `https://www.tikwm.com/api/user/search?keywords=${userName.replace('@', '')}`;
    
    try {
      const response = await axios.get(url)
      return response;
    } catch(e) {
      console.log(e);
    }
  }

  async  getUserInfoById(userId: string) {
    const url = `https://www.tikwm.com/api/user/info?unique_id=${userId.replace('@', '')}`;
    
    try {
      const response = await axios.get(url);
      return response;
    } catch(e) {
      console.log(e);
    }
  }
}

export default Tiktok;