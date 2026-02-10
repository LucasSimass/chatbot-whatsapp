import axios from "axios";

class Emoji {
  async mergeEmojis(emojis: string){
    const url = `https://emojik.vercel.app/s/${emojis}`;

    try {
      const response = await axios.get(url);
      return response;
    } catch(e){
      console.log(e);
    }
  }
}

export default Emoji;