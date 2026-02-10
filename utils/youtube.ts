import axios from 'axios';

import * as dotenv from 'dotenv'
dotenv.config({quiet: true});

class Youtube {
  async getVideoInfo(videoName: string): Promise<object | undefined>{
    const query = videoName.replaceAll(' ', "+");

    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=1&key=${process.env.YOUTUBE_API_KEY}&videoDuration=short`;

    try {
      const response = await axios.get(url);
      return response;
    } catch(e){
      console.log(e);
    }
  }

  async getVideoId(videoName: string): Promise<string | undefined> {
    const videoInfo = await this.getVideoInfo(videoName);
    if (!videoInfo) { return; }
    return videoInfo['data']['items'][0]['id']['videoId']
  }

  async getChannelInfo(channelName: string) {
    const query = channelName.replaceAll(' ', "+");

    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=1&key=${process.env.YOUTUBE_API_KEY}&videoDuration=short`;

    try {
      const response = await axios.get(url);
      return response;
    } catch(e){
      console.log(e);
    }
  }
}

export default Youtube