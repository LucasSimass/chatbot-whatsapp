class RandomNumber {
  getRandomIntValue(min: number, max: number){
    // Math.ceil garante que o mínimo seja arredondado para cima
    min = Math.ceil(min);
    // Math.floor garante que o máximo seja arredondado para baixo
    max = Math.floor(max);
    
    // O valor retornado será inclusivo no mínimo e no máximo
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export default RandomNumber;