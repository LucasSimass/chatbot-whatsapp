import axios from "axios";

class ShortUrl {
  async getShortUrl(link: string) {
    const url = `https://tinyurl.com/api-create.php?url=${link}`;
    try {
      return await axios.post(url, {url: link});
    } catch(e) {
      console.log(e);
    }
  }
}

export default ShortUrl;