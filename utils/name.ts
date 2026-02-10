import axios from "axios";

class Name {
  async getNameNacionalityPropability(name: string): Promise<{country_id: string, probability: number} | undefined> {
    const url = `https://api.nationalize.io/?name=${name.replaceAll(' ', '+')}`;
  
    try {
      const response = await axios.get(url);
      if (response['data']['country'].length == 0){
        return;
      }

      return response['data']['country'][0]
    } catch(e) {
      console.log(e);
    }
  }
}

export default Name;