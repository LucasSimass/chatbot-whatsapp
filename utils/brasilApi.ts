import axios from "axios";

class BrasilApi {
  async getCepInfo(cep: string){
    const url = `https://brasilapi.com.br/api/cep/v2/${cep}`;

    try {
      const response = await axios.get(url);
      return response;
    } catch (e){
      
    }
  }  

  async getBrasilHolidays(year: string) {
    const url = `https://brasilapi.com.br/api/feriados/v1/${year}`;
    
    try {
      const response = await axios.get(url);
      return response;
    } catch (e){
      console.log(e);
    }
  }
}

export default BrasilApi;