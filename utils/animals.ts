import axios from "axios";

class Animals {
  async getRandomPhotoOfDogs(){
    const url = `https://dog.ceo/api/breeds/image/random`;

    try {
      const r = await axios.get(url);
      if (!r['data']){ return; }
      
      return r['data']['message']
    } catch(e) {
      console.log('error: ' + e);
    }
  }

  async getRandomPhotoOfCats(){
    const url = `https://api.thecatapi.com/v1/images/search`;

    try {
      const r = await axios.get(url);
      if (!r['data']){ return; }
      return r['data'][0]['url']
    } catch(e) {
      console.log('error: ' + e);
    }
  }
}

export default Animals;