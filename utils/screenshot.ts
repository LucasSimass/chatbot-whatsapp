import axios from "axios";

class Screenshot {
  async getScreenshotOfWebsite(link: string){
    const url = `https://api.microlink.io/?url=${link}&screenshot=true`;

    try {
      return await axios.get(url)
    } catch (e){
      console.log(e);
    }
  }
}

export default Screenshot;