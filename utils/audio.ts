import axios from "axios";

class RobotAudio {
  async createRobotAudio(prompt: string){
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${prompt.replaceAll(' ', '+')}&tl=pt-br&client=tw-ob`;

    try {
        // 1. Faz o download do áudio
        const response = await axios({
            method: 'get',
            url: url,
            responseType: 'arraybuffer', // Importante para lidar com dados binários
            headers: {
                'User-Agent': 'Mozilla/5.0' // O Google exige um User-Agent para não bloquear
            }
        });

        const buffer = Buffer.from(response.data);

        // --- OPÇÃO B: Converter para Base64 ---
        const base64Audio = buffer.toString('base64');
        console.log('✅ Áudio convertido para Base64:');
        console.log(base64Audio.substring(0, 100) + "...");
        return base64Audio;
    } catch (error) {
        console.error('Erro ao processar o áudio:', error);
    }
  }
}

export default RobotAudio;