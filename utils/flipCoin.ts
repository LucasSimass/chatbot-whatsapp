class FlipCoin {
  flipCoin(): 'Cara' | 'Coroa' {
    return Math.random() <= 0.5 ? 'Cara' : 'Coroa'
  }
}

export default FlipCoin;