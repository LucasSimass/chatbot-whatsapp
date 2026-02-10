const numberFormator = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  maximumFractionDigits: 2 
});

const dateFormator = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});

class NumberFormat {
  formatNumber(number: string): string{
    console.log("formatado: " + numberFormator.format(Number(number)));
    
    return numberFormator.format(Number(number));
  }

  formatDate(date: string, addTime: boolean = false){
    const dateTimes = new Date(date + `${addTime ? "T00:00:00": ''}`);
    return dateFormator.format(dateTimes);
  }
}

export default NumberFormat;