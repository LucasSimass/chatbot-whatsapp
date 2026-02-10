import axios from "axios";

class Code {
  async getNpmPackageInfo(packageName: string) {
    const url = `https://registry.npmjs.org/-/v1/search?text=${packageName}`;

    const header = {
      'User-Agent': "bot/1.0 (simaslucas1m@gmail.com)"
    }

    try {
      const response = await axios.get(url, {headers: header});
      return response;
    } catch(e) {
      console.log(e);
    }
  }

  async GetPipPackageInfo(packageName: string) {
    const url = `https://pypi.org/pypi/${packageName}/json`;

    try {
      const response = await axios.get(url);
      return response;
    } catch(e) {
      console.log(e);
    }
  }
}

export default Code;