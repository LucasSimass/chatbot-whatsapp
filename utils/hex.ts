class Hex {
  convertStringToHex(string: string){
    if (!string) return "";

    return Buffer.from(string.replaceAll(' ', ''), 'utf-8').toString('hex');
  }

  convertHexToText(hex: string){
    return Buffer.from(hex, 'hex').toString('utf-8');
  }
}

export default Hex;