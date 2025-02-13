//O Bubble Sort é um algoritmo de ordenação simples que compara elementos adjacentes
//  e os troca se estiverem fora de ordem. O processo é repetido até que a lista esteja ordenada.

function bubbleSort(arr) {
    let n = arr.length;
    let trocou;

    do {
        trocou = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Troca os elementos se estiverem fora de ordem
                [
                    arr[i],
                    arr[i + 1]
                ] = [
                    arr[i + 1],
                    arr[i]
                ];
                trocou = true;
            }
        }
        n--; // Otimização: Último elemento já está no lugar certo
    } while (trocou);

    return arr;
}

// Exemplo de uso:
console.log(bubbleSort([5, 2, 9, 1, 5, 6])); 



