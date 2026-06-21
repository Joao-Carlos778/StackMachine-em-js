/* Alunos: João Carlos da Silva & João Vitor Castaman */

const push = 1;
const add = 2;
const sub = 3;
const mul = 4;
const div = 5;

let bytecode = [
    push, 1,
    push, 2,
    add,
];

let pilha = [];

for (let i = 0; i < bytecode.length; i++) {
    let instrucao = bytecode[i];

    switch (instrucao) {
        case push: 
            i++;
            pilha.push(bytecode[i]);
            break;

        case add:
            pilha.push(pilha.pop() + pilha.pop());
            break;

        case sub:
            let aSub = pilha.pop();
            let bSub = pilha.pop();
            pilha.push(bSub - aSub);
            break;

        case mul:
            pilha.push(pilha.pop() * pilha.pop());
            break;

        case div:
            let aDiv = pilha.pop();
            let bDiv = pilha.pop();
            pilha.push(bDiv / aDiv);
            break;

        default: throw Error("Instrução desconhecida");
        break;
    };
};

console.log("Resultado:", pilha.pop());