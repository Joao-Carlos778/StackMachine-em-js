# 🖥️ Stack Machine em JavaScript

Implementação de uma **Stack Machine** simples em JavaScript, capaz de executar operações aritméticas básicas utilizando uma pilha (stack).

> Trabalho desenvolvido para a disciplina de Informática — IFRO Campus Vilhena.

---

## 📋 Sobre o Projeto

Uma Stack Machine (máquina de pilha) é um modelo de computação que utiliza uma estrutura de dados do tipo pilha para armazenar e manipular valores. As instruções operam diretamente sobre os elementos do topo da pilha.

---

## ⚙️ Instruções Suportadas

| Instrução | Descrição |
|-----------|-----------|
| `push N`  | Insere o número `N` no topo da pilha |
| `add`     | Remove os dois valores do topo e empilha a soma |
| `sub`     | Remove os dois valores do topo e empilha a subtração (segundo − primeiro) |
| `mul`     | Remove os dois valores do topo e empilha a multiplicação |
| `div`     | Remove os dois valores do topo e empilha a divisão (segundo ÷ primeiro) |

---

## 🚀 Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado

### Rodando o projeto

```bash
node app.js
```

---

## 📌 Exemplos

### Exemplo 1 — Soma simples: `1 + 2 = 3`

```js
let bytecode = [
  push, 1,
  push, 2,
  add,
];
// Resultado: 3
```

### Exemplo 2 — Operação composta: `(50 + 60) / 2 = 55`

```js
let bytecode = [
  push, 50,
  push, 60,
  add,
  push, 2,
  div,
];
// Resultado: 55
```

---

## 🧠 Como Funciona

O programa percorre um array de bytecode instrução por instrução:

- Ao encontrar `push`, lê o próximo valor do array e empilha na pilha.
- Ao encontrar uma operação (`add`, `sub`, `mul`, `div`), desempilha os dois valores do topo, realiza o cálculo e empilha o resultado.
- Ao final da execução, o resultado é o único valor restante na pilha.

---

## 🛠️ Tecnologias

- JavaScript (ES6+)
- Node.js

---

## 👤 Autor

Desenvolvido por **João Carlos** — Curso Técnico Integrado em Informática  
IFRO — Instituto Federal de Rondônia, Campus Vilhena
