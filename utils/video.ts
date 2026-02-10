import ffmpeg from 'fluent-ffmpeg'
import { PassThrough } from 'stream';

class Video {
  async changeVideoSpeed(inputBase64: string, speed: number){
    try {
      return await new Promise((resolve, reject) => {
        // Se a entrada for Base64, converte para Buffer
        const buffer = Buffer.isBuffer(inputBase64) ? inputBase64 : Buffer.from(inputBase64, 'base64');
        
        const inputStream = new PassThrough();
        const outputStream = new PassThrough();
        const chunks = [];

        inputStream.end(buffer);

        // ... resto do código do FFmpeg ...
        ffmpeg(inputStream)
                    .format('mp4')
                    .videoFilters(`setpts=${1/speed}*PTS`)
                    .audioFilters(`atempo=${speed}`)
                    .outputOptions([
                        '-movflags frag_keyframe+empty_moov',
                        '-preset superfast'
                    ])
                    .on('error', (err) => reject(err))
                    .pipe(outputStream);

                outputStream.on('data', (chunk) => chunks.push(chunk));
                outputStream.on('end', () => {
            // 1. Junta todos os pedaços (chunks) em um único Buffer
            const fullBuffer = Buffer.concat(chunks);
            
            // 2. Converte o Buffer final para string Base64
            const base64String = fullBuffer.toString('base64');
            
            // 3. Resolve a Promise com a string Base64 (com o prefixo opcional)
            resolve(`${base64String}`);
        });
    });
    } catch(e) {
      console.log(e);
    }
  }

  //eq=brightness=0.01
  async turnVideoNotDetectableByRobot(inputBase64){
  try {
  return await new Promise((resolve, reject) => {
    const buffer = Buffer.isBuffer(inputBase64) ? inputBase64 : Buffer.from(inputBase64, 'base64');
    
    const inputStream = new PassThrough();
    const outputStream = new PassThrough();
    const chunks = [];

    // IMPORTANTE: Envie o buffer e feche a entrada
    inputStream.end(buffer);

    ffmpeg(inputStream)
    .format('mp4')
    .videoCodec('libx264')
    .audioCodec('aac')
    .videoFilters([
        'hflip',
        'unsharp=5:5:1.0:5:5:0.0',
        'eq=contrast=1.2:brightness=0.05:saturation=1.3',
        `setpts=${1/1.01}*PTS`,
        'scale=8000:-1,zoompan=z=\'min(zoom+0.001,1.1)\':d=1:x=iw/2-(iw/zoom/2):y=ih/2-(ih/zoom/2):s=1080x1920',
        // Simplificamos o zoompan para não usar aspas internas que quebram o drawtext

    // Corrigimos o drawtext separando claramente cada parâmetro com dois pontos (:)
    {
        filter: 'drawtext',
        options: {
            text: 'Follow Me For More',
            x: 'mod(t*100,w)',
            y: 'h-50',
            fontsize: 30,
            fontcolor: 'white@0.5',
            // Remova o fontfile por enquanto para testar se ele aceita a fonte padrão
        }
    }
    ])
    .audioFilters([
        'atempo=1.01',
        'aresample=async=1' // O segredo para o erro de sincronia não derrubar a conversão
    ])
    .outputOptions([
        '-pix_fmt yuv420p',
        '-preset superfast',
        '-crf 22',
        '-max_muxing_queue_size 1024', // Aumenta a fila para não dar erro de Buffer no pipe
        '-movflags frag_keyframe+empty_moov+faststart'
    ])
    .on('error', (err, stdout, stderr) => {
        // ESSENCIAL: Isso vai imprimir o erro exato que o FFmpeg cuspiu antes de morrer
        console.error('LOG DE ERRO DO FFMPEG:', stderr);
        reject(err);
    })
      .pipe(outputStream);

    outputStream.on('data', (chunk) => chunks.push(chunk));
    outputStream.on('end', () => {
      const fullBuffer = Buffer.concat(chunks);
      resolve(fullBuffer.toString('base64'));
    });

    // Captura erro no próprio pipe de saída
    outputStream.on('error', (err) => {
      console.error('Erro no Output Stream:', err);
      reject(err);
    });
  });
} catch (e) {
  console.log('Erro na função principal:', e);
}
  }
}

export default Video;