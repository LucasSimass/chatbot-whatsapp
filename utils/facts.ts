import axios from "axios";

class Facts {
  async getRandomFacts() {
    const url = `https://uselessfacts.jsph.pl/api/v2/facts/random`;

    try {
      const response = await axios.get(url);
      return response;
    } catch (e) {
      console.log('error: ' + e);
    }
  }

  async getCatRandomFacts() {
    const url = `https://meowfacts.herokuapp.com/?lang=por`;

    try {
      const response = await axios.get(url);
      return response;
    } catch (e) {
      console.log('error: ' + e);
    }
  }
}

export default Facts;