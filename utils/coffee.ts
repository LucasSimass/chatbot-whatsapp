import axios from "axios"

class Coffee {
  async getRandomCoffeePhoto(){
    const url = `https://coffee.alexflipnote.dev/random.json`;

    try {
      return (await axios.get(url))['data']['file'];
    } catch(e) {
      console.log(e);
    }
  }
}

export default Coffee