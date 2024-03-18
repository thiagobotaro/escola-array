const array1 = ['Banana', 'Maçã', 'Pêra'];
const array2 = ['Limão', 'Laranja', 'Tangerina'];


const concatArrays = (array1, array2) => {
    const array3 = array1.concat(array2);
    console.log(array3);
}

concatArrays(array1,array2);

console.log('-----------------------------------')


const double = (numero) =>{
    console.log(numero * 2);
}

double(10);

console.log('-----------------------------------')


const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']

frutas.splice(2,2, 'Kiwi', 'Pessego');

console.log(frutas);

console.log('-----------------------------------')

const menuPrincipal = ['Filé Mignon', 'Risoto de Cogumelos', 'Salmão Grelhado', 'Penne à Carbonara', 'Frango à Parmegiana'];
const menuSobremesa = ['Petit Gateau', 'Mousse de Chocolate', 'Cheesecake de Morango', 'Sorvete de Baunilha com Calda de Caramelo', 'Pudim de Leite Condensado'];

const menuCompleto = menuPrincipal.concat(menuSobremesa);

console.log(menuCompleto);
console.log(menuCompleto.length);

console.log('-----------------------------------')

let matriz = [];
let valorInicial = 1;

for(let i = 0; i < 3; i++){
    let linha = [];
    for(let c = 0; c < 3; c++){
        linha.push(valorInicial++)
    }
    matriz.push(linha);
}

console.log(matriz);