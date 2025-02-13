//O Merge Sort é um algoritmo de ordenação ordenação por divisão e conquista que consiste em dividir 
// uma estrutura em subconjuntos e ir ordenando os elementos que foram extraídos.
// Após a ordenação destes subconjuntos, é feita a mistura destes em um conjunto final ordenado.

function mergeSort(arr) {
    if (arr.length <= 1) 
        return arr;
    
    let meio = Math.floor(arr.length / 2);
    let esquerda = mergeSort(arr.slice(0, meio));
    let direita = mergeSort(arr.slice(meio));

    return merge(esquerda, direita);
}

function merge(esquerda, direita) {
    let resultado = [];
    let i = 0,
        j = 0;

    while (i < esquerda.length && j < direita.length) {
        if (esquerda[i] < direita[j]) {
            resultado.push(esquerda[i]);
            i++;
        } else {
            resultado.push(direita[j]);
            j++;
        }
    }

    return resultado
        .concat(esquerda.slice(i))
        .concat(direita.slice(j));
}

console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));