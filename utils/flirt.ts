import Calculate from "./calculate.ts"

class Flirt {
  flirts = [
    'Você não é o Google, mas tem tudo o que eu procuro.',

    'Você acredita em amor à primeira vista ou eu vou ter que passar por aqui de novo?',

    'Você tem um mapa? Porque eu acabei de me perder no brilho dos seus olhos.',

    'Você é o "check-in" que eu quero fazer todos os dias da minha vida.',
    'Você não faz ideia do sorriso que eu dou quando vejo uma notificação sua no meu celular.',

    'Você deve ser uma conexão Wi-Fi, porque eu estou sentindo uma força incrível entre nós dois.',

    'Você não é cardiologista, mas está fazendo meu coração bater bem mais rápido hoje.',

    'Você é sempre assim ou hoje está se esforçando para ser a pessoa mais charmosa do lugar?',

    'Você por acaso tem um carregador? Porque minha bateria acaba toda vez que eu tento processar sua beleza.',

    'Você é a resposta para a pergunta: "O que falta para o meu dia ficar perfeito?"',

    'Você parece ser o tipo de pessoa que tem um gosto musical incrível. Acertei?',

    'Você tem um tempo para a gente conversar ou vou ter que guardar esse meu interesse só para mim?',

    'Você é a razão pela qual eu perdi o fio da meada do que eu estava fazendo agora pouco.',

    'Você já percebeu que a gente combina mais do que café com leite?',

    'Você deve ser feita de Berílio, Ouro e Titânio? Porque você é Be-Au-Tiful.',

    'Você deve ser cansativo(a)... porque você passou o dia inteiro correndo na minha cabeça!',

    'Você tem planos para o resto da sua vida ou eu posso me encaixar neles em algum momento?',

    'Você aceita um café? Ou prefere que eu te conquiste primeiro antes de marcarmos?',

    'Nenhuma entre todas as 157 mil palavras do dicionário são capazes de descrever a sua beleza '
  ]

  getRandomFlirt(): string{
    const rNum = new Calculate().randomIntNumber(0, this.flirts.length - 1);
    return this.flirts[rNum]!.trim();
  }
}

export default Flirt;