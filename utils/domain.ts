import axios from "axios"

class Domain {
  async domainExist(domain: string){
    const url = `https://dns.google/resolve?name=${domain}`

    try {
      return await axios.get(url)
    } catch(e) {
      console.log(e);
    }
  }
}

export default Domain;