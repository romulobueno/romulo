const numeroSenha=document.querySelector('.parametro-senha-texto');
let tamanhoSenha=10;
numeroSenha.textContent=tamanhoSenha;
const botoes=document.querySelector('.parametro-senha-botao');

botoes[0].onclick=diminuirTamanho;
