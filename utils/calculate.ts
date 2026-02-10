class Calculate {
  factorial(n) {
    if (n < 0) return undefined;
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
  }

  convertToExpoent(numero: string) {
    const mapaExpoentes = {
        '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
        '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹'
    };
    return numero.toString().split('').map(digito => mapaExpoentes[digito] || digito).join('');
  }

  randomIntNumber(min: number, max: number){
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}

export default Calculate;