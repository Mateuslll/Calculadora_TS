let numero1 = document.getElementById('numero1') as HTMLInputElement;
let numero2 = document.getElementById('numero2') as HTMLInputElement;
let botao = document.getElementById('calcular')!;
let res = document.getElementById('resultado')!;

function calcular(n1: number , n2: number) { // os 3 pontinhos e um aviso que pode ocorrer um erro/ colocando o number diz que sempre vai receber um numero
  return n1 + n2;
}

botao.addEventListener('click', function() {
  res.innerHTML = calcular(+numero1.value, +numero2.value).toString(); // colocando um + converte string para number/ e o toString sana o erro do res.InnerHTML ele espera uma string
});