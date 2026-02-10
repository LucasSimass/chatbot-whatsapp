import axios from "axios";

class Jokes {
  async getInsult() {
    const url = 'https://evilinsult.com/generate_insult.php?lang=pt&type=json';
    
    try {
      return await axios.get(url);
    } catch (e) {
      console.log(e);
    }
  }
}

export default Jokes;