import axios from "axios";

type stateInfo = {
    "id": string,
    "sigla": string,
    "nome": string,
    "regiao": {
        "id": number,
        "sigla": string,
        "nome": string
    }
};

type dddInfo = {
    "state": "RJ",
    "cities": string[]
};

class IBGE {
  async getStateInfoByAcronym(acronym: string): Promise<stateInfo | undefined>{
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${acronym}`;

    try {
      const response = await axios.get(url);
      return response['data'];
    } catch(e) {
      console.log(e);
    }
  }

  async getDDDinfo(ddd: string): Promise<dddInfo | undefined> {
    const url = `https://brasilapi.com.br/api/ddd/v1/${ddd}`
    try {
      const response = await axios.get(url);
      return response['data'];
    } catch (e){
      console.log(e);
    }
  }
}

export default IBGE