const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
let media = 0;
let soma = 0;

for(let i = 0; i < numeros.length; i++){
    let elemento = numeros[i];
    soma += elemento;
}

media = soma/numeros.length;
console.log(media);