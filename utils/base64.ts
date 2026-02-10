import axios from 'axios';
import ytdl from 'yt-dlp-wrap';

let ytDlpWrapDefault = ytdl.default;
const ytDlpWrap = new ytDlpWrapDefault(`C:\\yt-dlp\\bin\\yt-dlp.exe`);

class Base64 {
  convertStringToBase64(string: string): string {
    const base64 = Buffer.from(string).toString('base64');
    return base64
  }

  convertBase64ToNormalString(base64: string): string {
    const original = Buffer.from(base64, 'base64').toString('utf-8');
    return original;
  }

  async convertContentUrlToBase64(imageUrl: string){
    try {
        const response = await fetch(imageUrl);

        // Verifica se a requisição foi bem-sucedida
        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }

        // Obtém o ArrayBuffer do corpo da resposta
        const arrayBuffer = await response.arrayBuffer();

        // Converte o ArrayBuffer para um Buffer do Node.js
        const buffer = Buffer.from(arrayBuffer);

        // Codifica o Buffer para Base64
        const base64String = buffer.toString('base64');
        
        // Opcional: Obtém o MIME type para o data URI
        const contentType = response.headers.get('content-type');

        return `${base64String}`;
        
    } catch (error) {
        console.error("Erro ao converter URL para Base64:", error);
        return null;
    }
  }

  async extractAudioBase64(videoUrl: string) {
    let videoData;

    const args = [
        videoUrl,
        '-f', 'bestaudio', // Seleciona a melhor faixa de áudio
        '--extract-audio', // Extrai apenas o áudio
        '--audio-format', 'mp3', // Converte para MP3
        '-o', '-', // Saída para stdout
    ];

    try {
      // 1. OBTÉM INFORMAÇÕES DO VÍDEO NO FORMATO JSON
        // Argumentos:
        // '--dump-json': Imprime os metadados completos do vídeo em JSON no stdout.
        // '--no-warnings': Evita que o stdout seja poluído por avisos.
        const jsonOutput = await ytDlpWrap.execPromise([
            '--dump-json',
            '--no-warnings',
            videoUrl
        ]);
        
        // Faz o parse da string JSON para um objeto
        videoData = JSON.parse(jsonOutput);
        } catch (error) {
            return false
        }

        const durationSeconds = videoData.duration;
        const videoTitle = videoData.title;

        console.log(`Verificando vídeo: "${videoTitle}"`);
        console.log(`Duração encontrada: ${durationSeconds} segundos.`);

        // 2. VERIFICA A DURAÇÃO
        if (durationSeconds > 6*60) {
            return false;
        }

        const audioStream = ytDlpWrap.execStream(args);
        // Array para armazenar os chunks de dados
        const chunks = [];

        // Retorna uma Promise para esperar que o stream termine
        const base64String = await new Promise((resolve, reject) => {
            
            // 2. Coleta os Chunks
            audioStream.on('data', (chunk) => {
              chunks.push(chunk);
            });

            // Lida com erros durante a execução do yt-dlp
            audioStream.on('error', (err) => {
                console.error("Erro no stream de yt-dlp:", err);
                reject(err);
            });

            // Quando o stream termina
            audioStream.on('close', () => {
                console.log('Stream encerrado. Concatenando e codificando...');
                
                // 3. Concatenar
                const audioBuffer = Buffer.concat(chunks);
                
                // 4. Codificar
                // A codificação Base64 transforma o Buffer binário em uma string de texto.
                const base64 = audioBuffer.toString('base64');
                
                console.log(`Áudio coletado e Base64 gerado. Tamanho: ${base64.length} caracteres.`);
                
                resolve(base64);
            });
        });
        
        return base64String;
  } 

  async extractVideoNAudioBase64(videoUrl: string) {
    console.log('extracting...');
    
    let videoData;

    const args = [
        videoUrl,
        // Seleciona o melhor vídeo e o melhor áudio, combinando em um contêiner MP4.
        '-f', 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]', 
        // Recodifica para MP4 (garantindo que o arquivo final seja .mp4)
        '--recode-video', 'mp4',
        // === CORREÇÃO CRUCIAL ===
        // '-o', '%(title)s.%(ext)s' <-- REMOVIDO para evitar salvar no disco.
        // '-o', '-' <-- ADICIONADO para forçar a saída binária para stdout/stream.
        '-o', '-',
    ];

    try {
      // 1. OBTÉM INFORMAÇÕES DO VÍDEO NO FORMATO JSON
        // Argumentos:
        // '--dump-json': Imprime os metadados completos do vídeo em JSON no stdout.
        // '--no-warnings': Evita que o stdout seja poluído por avisos.
        const jsonOutput = await ytDlpWrap.execPromise([
            '--dump-json',
            '--no-warnings',
            videoUrl
        ]);
        
        // Faz o parse da string JSON para um objeto
        videoData = JSON.parse(jsonOutput);
        } catch (error) {
            return 'error: ' + error
        }

        const durationSeconds = videoData.duration;
        const videoTitle = videoData.title;

        console.log(`Verificando vídeo: "${videoTitle}"`);
        console.log(`Duração encontrada: ${durationSeconds} segundos.`);

        // 2. VERIFICA A DURAÇÃO
        if (durationSeconds > 60*10) {
            return false;
        }

        const audioStream = ytDlpWrap.execStream(args);
        // Array para armazenar os chunks de dados
        const chunks = [];

        // Retorna uma Promise para esperar que o stream termine
        const base64String = await new Promise((resolve, reject) => {
            
            // 2. Coleta os Chunks
            audioStream.on('data', (chunk) => {
              chunks.push(chunk);
            });

            // Lida com erros durante a execução do yt-dlp
            audioStream.on('error', (err) => {
                console.error("Erro no stream de yt-dlp:", err);
                reject(err);
            });

            // Quando o stream termina
            audioStream.on('close', () => {
                console.log('Stream encerrado. Concatenando e codificando...');
                
                // 3. Concatenar
                const audioBuffer = Buffer.concat(chunks);
                
                // 4. Codificar
                // A codificação Base64 transforma o Buffer binário em uma string de texto.
                const base64 = audioBuffer.toString('base64');
                
                console.log(`Áudio coletado e Base64 gerado. Tamanho: ${base64.length} caracteres.`);
                
                resolve(base64);
            });
        });
        
        return base64String;
  } 

  async convertUrlToBase64(url: string) {

  try {
    const res = await axios.get(url, { responseType: 'arraybuffer' });
    const base64 = Buffer.from(res.data, 'binary').toString('base64');
    return base64;
  } catch (error) {
    console.error('Erro ao converter PNG:', error);
  }
  }

  async videoUrlToBase64(url: string){
  try {
    // 1. Buscamos o vídeo. 'arraybuffer' é o ideal para Node.js e Browser
    const res = await axios.get(url, { responseType: 'arraybuffer' });

    // 2. Convertemos o buffer diretamente para base64
    const base64Content = Buffer.from(res.data).toString('base64');

    // 3. Pegamos o tipo do conteúdo (ex: video/mp4) para montar a string completa
    const contentType = res.headers['content-type'] || 'video/mp4';
    
    return `${base64Content}`;
  } catch (error) {
    console.error('Erro ao converter o vídeo:', error);
    return null;
  }
}
}


export default Base64; 