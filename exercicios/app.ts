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

interface IPessoa{
    nome: string,
    idade: number,
    profissao: Profissao;
}

enum Profissao{
    Atriz,
    Padeiro,
}

let pessoa1: IPessoa =  {
    nome: "maria",
    idade: 29,
    Profissao: Profissao.Atriz
};

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}