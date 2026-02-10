import ffmpeg from "fluent-ffmpeg";
import { PassThrough, Readable, Writable } from "stream";
import fs from 'fs'
import os from 'os'
import path from "path";

class Sticker {
  async getVideoWebp(base64Input): Promise<string> {
    const tempInput = path.join(os.tmpdir(), `input_${Date.now()}.mp4`);
    const tempOutput = path.join(os.tmpdir(), `output_${Date.now()}.webp`);

    try {
        // 1. Salva o vídeo original no disco temporário
        const videoBuffer = Buffer.from(base64Input.split(",")[1] || base64Input, "base64");
        fs.writeFileSync(tempInput, videoBuffer);

        return await new Promise((resolve, reject) => {
            ffmpeg(tempInput)
                .inputOptions(['-t 3']) // Lê apenas os primeiros 3 segundos da entrada
                .outputOptions([
                    '-vcodec libwebp',
        // Filtro unificado: FPS + Escala + Corte + Sincronia de tempo
        '-vf fps=15,scale=512:512:force_original_aspect_ratio=increase,crop=512:512,setpts=PTS-STARTPTS',
        '-lossless 0',
        '-compression_level 4',
        '-q:v 40',
        '-loop 0',      // Loop infinito para figurinha
        '-preset default',
        '-an',          // Remove áudio
        '-vsync 0',     // Impede que o FFmpeg descarte frames por sincronia
        '-f webp'       // Força o formato de saída
                ])
                .toFormat('webp')
                .on('end', () => {
                    const finalBuffer = fs.readFileSync(tempOutput);
        
        // DICA: Verifique o tamanho do arquivo no console
        console.log(`Tamanho da figurinha: ${(finalBuffer.length / 1024).toFixed(2)} KB`);
        
        fs.unlinkSync(tempInput);
        fs.unlinkSync(tempOutput);
        resolve(finalBuffer.toString("base64"));
                })
                .on('error', (err) => {
                    if (fs.existsSync(tempInput)) fs.unlinkSync(tempInput);
                    if (fs.existsSync(tempOutput)) fs.unlinkSync(tempOutput);
                    reject(err);
                })
                .save(tempOutput);
        });
    } catch (err) {
        if (fs.existsSync(tempInput)) fs.unlinkSync(tempInput);
        throw err;
    }
  }
  async isLongerThan5Min(base64String) {
    return new Promise((resolve, reject) => {
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
    }
}

export default Sticker;