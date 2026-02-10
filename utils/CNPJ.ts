import axios from "axios";

class CNPJ {
  getCNPJinfo(cnpj: string){
    const url = `https://receitaws.com.br/v1/cnpj/${cnpj.replace(/\D/g, '')}`;

    try {
      const response = axios.get(url)
      return response;
    } catch (e){
      console.log(e);
    }
  }
}

export default CNPJ;