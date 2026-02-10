import { response } from 'express';
import ffmpeg from 'fluent-ffmpeg'
import {Readable, Writable} from 'stream'

class VoiceMod {
  async getVoiceChangeBase64(base64Input, pitch: string) {
    if(await this.isLongerThan5Min(base64Input)){return;} 

    return new Promise((resolve, reject) => {
        // 1. Converter Base64 para Buffer e depois para Stream
        const audioBuffer = Buffer.from(base64Input.split(',')[1] || base64Input, 'base64');
        const inputStream = new Readable();
        inputStream.push(audioBuffer);
        inputStream.push(null);

        const chunks = [];
        const outputStream = new Writable({
            write(chunk, encoding, callback) {
                chunks.push(chunk);
                callback();
            }
        });

        // 2. Processar com FFmpeg
        ffmpeg(inputStream)
            .toFormat('wav')
            // O filtro 'rubberband' ou 'asetrate' altera o pitch
            // pitch=0.7 engrossa a voz.
            .audioFilters(`rubberband=pitch=${pitch}`) 
            .on('error', (err) => reject(err))
            .on('end', () => {
                // 3. Juntar os pedaços e converter de volta para Base64
                const finalBuffer = Buffer.concat(chunks);
                const base64Output = `data:audio/wav;base64,${finalBuffer.toString('base64')}`;
                resolve(base64Output);
            })
            .pipe(outputStream);
    });
  }

  async inverterAudioBase64(base64Input) {
    if(await this.isLongerThan5Min(base64Input)){return;} 

    return new Promise((resolve, reject) => {
        // 1. Converter Base64 para Buffer e depois para Stream
        const audioBuffer = Buffer.from(base64Input.split(',')[1] || base64Input, 'base64');
        const inputStream = new Readable();
        inputStream.push(audioBuffer);
        inputStream.push(null);

        const chunks = [];
        const outputStream = new Writable({
            write(chunk, encoding, callback) {
                chunks.push(chunk);
                callback();
            }
        });

        // 2. Processa com FFmpeg usando o filtro de reversão
        ffmpeg(inputStream)
            .toFormat('mp3') // ou o formato original do seu áudio (ogg, wav)
            .audioFilters('areverse')
            .on('error', (err) => reject(err))
            .on('end', () => {
                const finalBuffer = Buffer.concat(chunks);
                resolve(finalBuffer.toString('base64'));
            })
            .pipe(outputStream);
    });
  }

  async slowAudioBase64(base64Input, speed=0.7){
    if(await this.isLongerThan5Min(base64Input)){return;} 

    return new Promise((resolve, reject) => {
        // 1. Converter Base64 para Buffer e depois para Stream
        const audioBuffer = Buffer.from(base64Input.split(',')[1] || base64Input, 'base64');
        const inputStream = new Readable();
        inputStream.push(audioBuffer);
        inputStream.push(null);

        const chunks = [];
        const outputStream = new Writable({
            write(chunk, encoding, callback) {
                chunks.push(chunk);
                callback();
            }
        });

        ffmpeg(inputStream)
            .toFormat('mp3') 
            // O filtro 'atempo' muda a velocidade sem mudar o tom da voz
            .audioFilters(`atempo=${speed}`)
            .on('error', (err) => reject(err))
            .on('end', () => {
                const finalBuffer = Buffer.concat(chunks);
                resolve(finalBuffer.toString('base64'));
            })
            .pipe(outputStream);
    });
  }

  async echoVoiceBase65(base64Input){
    if(await this.isLongerThan5Min(base64Input)){return;} 

    return new Promise((resolve, reject) => {
        // 1. Converter Base64 para Buffer e depois para Stream
        const audioBuffer = Buffer.from(base64Input.split(',')[1] || base64Input, 'base64');
        const inputStream = new Readable();
        inputStream.push(audioBuffer);
        inputStream.push(null);

        const chunks = [];
        const outputStream = new Writable({
            write(chunk, encoding, callback) {
                chunks.push(chunk);
                callback();
            }
        });

        ffmpeg(inputStream)
            .toFormat('mp3') 
            /* Parâmetros do filtro aecho:
               in_gain (0.8): Volume da voz original
               out_gain (0.9): Volume final
               delays (1000): Tempo do eco em ms (1 segundo)
               decays (0.3): Volume do eco (30% do original)
            */
            .audioFilters('aecho=0.8:0.8:40|60:0.4|0.3')
            .on('error', (err) => reject(err))
            .on('end', () => {
                const finalBuffer = Buffer.concat(chunks);
                resolve(finalBuffer.toString('base64'));
            })
            .pipe(outputStream);
    });
  }

  async isLongerThan5Min(base64String) {
  const promise = new Promise((resolve, reject) => {
    // Se a fonte for uma URL, passamos direto
    // Se for Base64, convertemos para Stream primeiro
    let input = base64String;
    if (base64String.startsWith('data:') || !base64String.includes('http')) {
      const buffer = Buffer.from(base64String.replace(/^data:.*;base64,/, ""), 'base64');
      input = Readable.from(buffer);
    }

    ffmpeg.ffprobe(input, (err, metadata) => {
      if (err) return reject(false);
      
      // A duração vem em segundos
      const durationSeconds = metadata.format.duration;
      const isLongerThan5Min = durationSeconds > (5 * 60);
      
      resolve(isLongerThan5Min);
    });
  });

    try {
      return await promise
    } catch(e){
      console.log(e);
      return false
    }
  }
}

export default VoiceMod;
