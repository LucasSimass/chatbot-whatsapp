import axios from "axios";
import * as dotenv from 'dotenv'
import Calculate from "./calculate.ts";
dotenv.config({quiet: true});

class Music {
  async getArtistInfoByMusic(musicName: string){
    const url = `https://api.lyrics.ovh/suggest/${musicName}`;

    try {
      return await axios.get(url);
    } catch(e) {
      console.log(e);
    }
  }

  async getArtistNameByMusic(musicName: string){
    const url = `https://api.lyrics.ovh/suggest/${musicName}`;

    try {
      const response = await axios.get(url);
      const data = response['data']['data'][0];
      if (!data){ return; }
      
      return data['artist']['name'].replaceAll(' ', "+")
    } catch(e) {
      console.log(e);
    }
  }

  async getLyricByMusic(artistName: string, musicName: String){
    const url = `https://api.lyrics.ovh/v1/${artistName}/${musicName}`;

    try {
      const response = await axios.get(url)

      console.log('jcasicsa');
      console.log(response['data'])
      
      if (!response['data']){ return; }

      return response['data']['lyrics']
    } catch(e) {
      console.log(e);
    }
  }

  async getTop10ViralMusics() {
    const url = `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${process.env.AUDIOSCROBBLER_API_KEY}&format=json`;

    try {
      return (await axios.get(url))['data'];
    } catch(e) {
      console.log(e);
    }
  }

  async getRandomMusicInfoOnTop10ViralMusicName(): Promise<{musicName: string, artistName: string} | undefined> {
    const musics = await this.getTop10ViralMusics();
    if (!musics){ return; }

    const tracks: object[] = musics['tracks']['track'];

    const rNum = new Calculate().randomIntNumber(0, tracks.length - 1);

    return {musicName: tracks[rNum]!['name'], artistName: tracks[rNum]!['artist']['name']}
  }
}

export default Music;