import { createCanvas, loadImage } from "canvas";

class Meme {
  async createMeme(
    image64: string | undefined,
    topText: string | undefined,
    bottomText: string | undefined
  ): Promise<string | undefined> {
    if (!image64){
      return;
    }

    if (!topText){
      topText = '';
    }
    if (!bottomText){
      bottomText = '';
    }

    try {
      const base64Data = image64.replace(/^data:image\/\w+;base64,/, "");
      const buffer = Buffer.from(base64Data, "base64");
      const img = await loadImage(buffer);

      const canvas = createCanvas(img.width, img.height);
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      // --- CONFIGURAÇÕES INICIAIS ---
      const maxWidth = img.width * 0.9; // Texto ocupa no máximo 90% da largura
      let fontSize = Math.floor(img.height / 10); // Tamanho inicial

      // Função auxiliar para desenhar o texto com contorno e quebra de linha
      const drawSmartText = (text, y, position) => {
        text = text.toUpperCase();
        let currentFontSize = fontSize;
        let lines: string[] = [];

        // 1. Loop para diminuir a fonte se necessário
        while (currentFontSize > 10) {
          ctx.font = `bold ${currentFontSize}px Impact`;
          lines = this.getLines(ctx, text, maxWidth);

          // Se com essa fonte o texto ocupa muita altura da imagem, diminui mais
          const totalHeight = lines.length * currentFontSize;
          if (totalHeight < img.height / 5) break;

          currentFontSize -= 2;
        }

        ctx.fillStyle = "white";
        ctx.strokeStyle = "black";
        ctx.lineWidth = currentFontSize / 8;
        ctx.textAlign = "center";

        // 2. Desenhar cada linha
        lines.forEach((line, index) => {
          let lineY;
          if (position === "top") {
            lineY = y + index * currentFontSize;
          } else {
            // No rodapé, desenha de baixo para cima
            lineY = y - (lines.length - 1 - index) * currentFontSize;
          }
          ctx.strokeText(line, canvas.width / 2, lineY);
          ctx.fillText(line, canvas.width / 2, lineY);
        });
      };

      // --- DESENHO ---
      if (topText) {
        ctx.textBaseline = "top";
        drawSmartText(topText, 100, "top");
      }

      if (bottomText) {
        ctx.textBaseline = "bottom";
        drawSmartText(bottomText, canvas.height - 100, "bottom");
      }

      return canvas
        .toDataURL("image/jpeg")
        .replace(/^data:image\/\w+;base64,/, "");
    } catch (error) {
      console.error("Erro ao processar imagem:", error);
    }
  }

  getLines(ctx, text, maxWidth) {
    const words = text.split(" ");
    const lines: string[] = [];
    let currentLine: string = words[0];

    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const width = ctx.measureText(currentLine + " " + word).width;
      if (width < maxWidth) {
        currentLine += " " + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);
    return lines;
}
}

export default Meme;
