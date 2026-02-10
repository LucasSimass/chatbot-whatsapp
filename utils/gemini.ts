import { GoogleGenAI } from "@google/genai";
import * as dotenv from 'dotenv'
dotenv.config({quiet: true});

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY!});

class Gemini {
  async ask(prompt: string | undefined): Promise<Object | "Digite algo para o Gemine!" | "Algo deu errado, tente de novo mais tarde!"> {
    if (!prompt){ return "Digite algo para o Gemine!"; }
    
    const prefixPrompt = "(tente resumir sempre que puder e adicione emojis)"
    
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prefixPrompt + prompt,
      });
       return response;
    } catch(e){
      console.log(e);
      
      return "Algo deu errado, tente de novo mais tarde!"
    }
  }
}

export default Gemini;