import axios from "axios";

class Wikipedia {
  getWikiInfo(query: string){
    const url = `https://pt.wikipedia.org/w/api.php?action=query&titles=${query}&prop=extracts|pageimages|info&explaintext=1&exintro=1&format=json&&inprop=url&redirects&pithumbsize=300`;
    
    const header = {
      'User-Agent': `bot/1.0 (simaslucas1m@gmail.com)`
    }
    
    try {
      return axios.get(url, {headers: header});
    } catch(e) {
      
    }
  }

  async getWikiImageOnly(query: string): Promise<string | undefined>{
    const response = await this.getWikiInfo(query);
  
    if (!response){ return; }

    const wikiPages: object = response['data']['query']['pages']
    const pageId: string = Object.keys(wikiPages)[0]!;
    const wikiPage = wikiPages[pageId];

    return wikiPage['thumbnail']['source'];
  }
}

export default Wikipedia;