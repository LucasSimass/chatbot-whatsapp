import translate from '@vitalets/google-translate-api'
import { Certificate } from 'crypto';

class Translate {
  async getTranslate(input: string, languageTranslate: string = 'pt') : Promise<string | undefined> {
    try{
      const res = await translate.translate(input, {to: languageTranslate});
      return res.text;
    } catch(err){
      console.log(err);
    }
  }
}

export default Translate;