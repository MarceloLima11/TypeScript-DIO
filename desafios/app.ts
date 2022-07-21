// desafio01

// interface IEmployee{
//     code: number,
//     name: string;
// }


// let employee: IEmployee  = {
//     code: 10,
//     name: 'John'
// }

// const funcionarioObj = {} as IEmployee;
// funcionarioObj.code = 10;
// funcionarioObj.name = 'John';

// employee.code = 10;
// employee.name = 'John';

// desafio02

// type Humano = {
//     nome: string,
//     idade: number,
//     profissao: Profissao;
// }

// interface IPessoa{
//     nome: string,
//     idade: number,
//     profissao: Profissao;
// }

// enum Profissao{
//     Atriz,
//     Padeiro,
// }

// let pessoa1: IPessoa =  {
//     nome: "maria",
//     idade: 29,
//     profissao: Profissao.Atriz
// };

// let pessoa2: Humano = {
//     nome: "roberto",
//     idade: 19,
//     profissao: Profissao.Padeiro,
// }

// let pessoa3: IPessoa = {
//     nome: "laura",
//     idade: 32,
//     profissao: Profissao.Atriz
// };

// let pessoa4: Humano = {
//     nome: "carlos",
//     idade: 19,
//     profissao: Profissao.Padeiro
// }

// desafio03

/** 
    Em todos os casos abaixo de uso do getElementById(), o elemento é potencialmente nulo e ifs são necessários para garantir que seu código vai 
    funcionar da melhor forma.
    No entanto, vão existir situações em que o desenvolvedor vai ter certeza de que o campo está lá e ele pode escrever o código da seguinte maneira:
        document.getElementById('limpar-saldo')!;
    A exclamação no fim é um sinal de que aquele campo não é nulo e que essa função realmente vai trazer algo. Assim, os ifs não são necessários.
    Como exemplo, vou seguir essa metodologia no campo 'botaoLimpar'.
*/

// let botaoAtualizar = document.getElementById('atualizar-saldo');
// let botaoLimpar = document.getElementById('limpar-saldo')!;
// let soma = document.getElementById('soma')! as HTMLInputElement;
// let campoSaldo = document.getElementById('campo-saldo');

// let saldoTotal = 0;

// limparSaldo();

// function somarAoSaldo(soma: number) {
//     if (campoSaldo) {
//         saldoTotal += soma
//         campoSaldo.innerHTML = saldoTotal.toString();
//         limparCampoSoma();
//     }
// }

// function limparCampoSoma() {
//     soma.value = "";
// }

// function limparSaldo() {
//     if (campoSaldo) {
//         saldoTotal = 0;
//         campoSaldo.innerHTML = saldoTotal.toString();
//     }
// }

// if (botaoAtualizar) {
//     botaoAtualizar.addEventListener('click', () => {
//         somarAoSaldo(Number(soma.value)); 
//     });
// }
// botaoLimpar.addEventListener('click', () => { // Percebam que aqui o typescript não acusou o botao de ser nulo e não precisei do if. Caso queiram fazer o teste, retirem a exclamação.
//     limparSaldo();
// });

