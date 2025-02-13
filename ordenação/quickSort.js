/*O algoritmo Quicksort é um método de ordenação que divide um conjunto de dados em subconjuntos menores, 
e os ordena recursivamente. 
*/

function quickSort(arr) {
    if (arr.length <= 1) return arr;

    let pivo = arr[arr.length - 1];
    let esquerda = [];
    let direita = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivo) {
            esquerda.push(arr[i]);
        } else {
            direita.push(arr[i]);
        }
    }

    return [...quickSort(esquerda), pivo, ...quickSort(direita)];
}

console.log(quickSort([10, 7, 8, 9, 1, 5])); // [1, 5, 7, 8, 9, 10]