import axios from "axios";
import { Chess } from 'chess.js';

export class ChessFull {
  matchs: {[userJID: string]: string} = {};

  getRandomPuzzle(){
    const url = `https://api.chess.com/pub/puzzle/random`;

    try {
      return axios.get(url);
    } catch(e) {
      console.log(e);
    }
  }

  getPlayerInfoOnChessCom(playerName: string) {
    const url = `https://api.chess.com/pub/player/${playerName}`;

    try {
      return axios.get(url);
    } catch (e) {
      console.log(e);
    }
  }

  getBestMovieByPGN(pgn: string){
    // 1. Remove os metadados entre [ ]
    const apenasJogadas = pgn.replace(/\[.*?\]/g, '').trim();
    
    // 2. Remove números de lances e pontos (ex: 1... ou 2.)
    const lancesLimpos = apenasJogadas.replace(/\d+\.+/g, '').trim();
    
    // 3. Divide por espaços e pega o primeiro item
    const listaDeLances = lancesLimpos.split(/\s+/);

    return listaDeLances[0];
  }
}


type movePlayerReturns = {
  success: boolean,
  msg: string,
  imageUrl: string
}

type chessMatchRetuns = {
  chess: Chess,
  msg: string,
  imageUrl: string,
}

const matchs: Map<string, Chess> = new Map();

export class ChessMatch {
  async createChessMatch(userJID: string): Promise<chessMatchRetuns | undefined> {
    // if not created create one match
    if (!matchs.has(userJID)){
      console.log('Match: ' + matchs);
      
      matchs.set(userJID, new Chess());
    
      const chess = matchs.get(userJID);
      return  {
        chess: chess!,
        msg: "Jogo criado, que vença o melhor!",
        imageUrl: this.getImageUrl(chess!.fen())
      };
    }
  }

  getChessGameByUserJid(userJID: string): Chess | undefined{
    if (!matchs.has(userJID)){ return; }

    return matchs.get(userJID);
  }

  async movePlayer(move: string, chess: Chess, userJID: string): Promise<movePlayerReturns> {
    move = this.notationToEN(move);

    try {
      const userMove = chess.move(move);
      if (!userMove){
        return {
          success: false,
          msg: 'Movimento invalido',
          imageUrl: this.getImageUrl(chess.fen())
        }
      }

      // movimento do bot
      const botMove = this.computerMove(chess);
      if (!botMove){
        matchs.delete(userJID);
        return {
          success: true,
          msg: `O jogo acabou! Vitoria das ${chess.turn() == 'w' ? "*Brancas*" : "*Pretas*"} \n\nPara jogar de novo use o comando *!jogar_xadrez*`,
          imageUrl: this.getImageUrl(chess.fen())
        };
      }
      return {
        success: true,
        msg: `*Movimento do player:* _${this.translateToPT(move)}_ \n\n*Movimento do bot:* _${this.translateToPT(botMove)}_`,
        imageUrl: this.getImageUrl(chess.fen())
      }
    } catch(e) {
      console.log('aaaaaaaa: ' +  e);
      
      return {
        success: false,
        msg: "*Movimento inválido, tente outro!*",
        imageUrl: this.getImageUrl(chess.fen())
      }
    }
    
  }

  notationToEN(movimento: string): string {
    // Tabela de tradução: De PT para EN
    const traducao = {
        'R': 'K', // Rei -> King
        'D': 'Q', // Dama -> Queen
        'T': 'R', // Torre -> Rook
        'B': 'B', // Bispo (igual)
        'C': 'N'  // Cavalo -> Knight
    };

    // Se o movimento começa com uma das letras da tabela, substitui
    let moveEN = movimento;
    if (traducao[movimento[0]!]) {
        moveEN = traducao[movimento[0]!] + movimento.slice(1);
    }

   return moveEN;
  }

  translateToPT(san) {
    const mapaPecas = {
        'K': 'R', // King -> Rei
        'Q': 'D', // Queen -> Dama
        'R': 'T', // Rook -> Torre
        'B': 'B', // Bishop -> Bispo (mesma letra)
        'N': 'C'  // Knight -> Cavalo
    };

    // Se a jogada começa com uma peça (letra maiúscula)
    if (san[0] === san[0].toUpperCase() && mapaPecas[san[0]]) {
        return mapaPecas[san[0]] + san.slice(1);
    }
    
    return san; // Se for peão (ex: e4), retorna igual
  }

  playerGiveUp(userJid: string){
    return matchs.delete(userJid);
  }

  getResult(game: Chess) {
    if (!game.isGameOver()) return "O jogo ainda está rolando.";

    if (game.isCheckmate()) {
      // Se é xeque-mate, quem deveria jogar agora perdeu.
      const winner = game.turn() === 'w' ? 'Brancas' : 'Pretas';
      return `Xeque-mate! Vitória das ${winner}.`;
    }

    if (game.isDraw()) {
      let reason = "Empate";
      if (game.isStalemate()) reason = "Empate por Afogamento (Stalemate)";
      if (game.isThreefoldRepetition()) reason = "Empate por Repetição";
      if (game.isInsufficientMaterial()) reason = "Empate por Material Insuficiente";
      
      return reason;
    }

    return "Fim de jogo por outro motivo.";
  }

  getImageUrl(fen: string): string {
    return `https://www.chess.com/dynboard?fen=${encodeURIComponent(fen)}&size=3&coordinates=true`;
  }

  computerMove(game: Chess): string | undefined {
    const movimentosPossiveis = game.moves();

    // Se o jogo acabou, não faz nada
    if (game.isGameOver() || movimentosPossiveis.length === 0) {
      return;
    }

    // Estratégia Simples: Tentar capturar peças primeiro
    // Se não houver capturas, faz um movimento aleatório
    const capturas = game.moves({ verbose: true }).filter(m => m.flags.includes('c'));
    
    if (capturas.length > 0) {
      // Ordena para pegar a captura que resulta na peça de maior valor (ex: capturar Rainha > capturar Peão)
      const melhorCaptura = capturas.sort((a, b) => b.captured!.length - a.captured!.length)[0];
    
      game.move(melhorCaptura!.san);
      return melhorCaptura!.san;
    }

    // Movimento aleatório como fallback
    const movimentoAleatorio = movimentosPossiveis[Math.floor(Math.random() * movimentosPossiveis.length)];
    game.move(movimentoAleatorio!);
    return movimentoAleatorio;
  }
}

