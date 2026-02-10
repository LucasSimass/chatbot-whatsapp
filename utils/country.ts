import axios from "axios";

const regionNames = new Intl.DisplayNames(['pt-BR'], { type: 'region' });


class Country {
  getCountryFullNameByAcronym(acronym: string){
    return regionNames.of(acronym.toUpperCase());
  }

  async getCountryInfo(countryName: string){
    const url = `https://restcountries.com/v3.1/name/${countryName}`;

    try { 
      return (await axios.get(url))['data']; 
    } catch(e){ 
      console.log('error: ' + e); 
    }
  }
}

export default Country;