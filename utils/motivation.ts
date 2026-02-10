import axios from "axios";

class Motivation {
  async getMotivation() {
    const url = `https://api-random.vercel.app/`;
    
    try {
      const response = await axios.get(url);
      return response['data'];
    } catch(e) {
      console.log(e);
    }
  }
}

export default Motivation;