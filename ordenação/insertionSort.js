/*O Insertion Sort é um algoritmo de ordenação que constrói a sequência ordenada gradualmente,  
 percorrendo um vetor de elementos da esquerda para a direita, inserindo os elementos na ordem correta.
*/
function insertionSort(arr) {
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        let chave = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > chave) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = chave;
    }

    return arr;
}

console.log(insertionSort([
    5,
    2,
    9,
    1,
    5,
    6
])); // [1, 2, 5, 5, 6, 9]