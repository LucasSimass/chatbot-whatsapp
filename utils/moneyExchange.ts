import axios from 'axios';
import * as dotenv from 'dotenv'
dotenv.config({quiet: true});

class MoneyExchange {
  async getExchangeInfo(currency: string){
    const url = `https://v6.exchangerate-api.com/v6/${process.env.EXCHANGE_API_KEY}/latest/${currency.toUpperCase()}`;

    try {
      const response = await axios.get(url);
      return response;
    } catch (e) {
      console.log(e);
    }
  }
}

export default MoneyExchange;