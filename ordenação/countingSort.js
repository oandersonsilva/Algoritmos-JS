//O Counting Sort é um algoritmo de ordenação que conta 
// quantas vezes cada número aparece e reorganiza o array.

function countingSort(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let count = Array(max - min + 1).fill(0);
    let resultado = [];

    for (let num of arr) {
        count[num - min]++; // contando quantas vezes aparece cada numero

    }

    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            resultado.push(i + min); // add o numero correspondente a quantidade de vezes que ele aparece
            count[i]--;
        }
    }

    return resultado;
}

console.log(countingSort([4,2,,2,8,3,3,1]));