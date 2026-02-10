class Link {
  isLink(message: string){
    const pattern = new RegExp(
        '^(https?:\\/\\/)?' + // protocolo
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domínio
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // IP (v4)
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // porta e caminho
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i' // fragmento
    );
    
    // Se quiser apenas detectar se EXISTE um link no meio do texto, use:
    const simplesRegex = /https?:\/\/[^\s]+/;
    return simplesRegex.test(message); 
  }
}

export default Link;