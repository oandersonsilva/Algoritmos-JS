// O Selection Sort é um algoritmo de ordenação por comparação que seleciona o menor elemento
//  de um array e o coloca na primeira posição. Esse processo é repetido até que o array esteja ordenado. 

function selectionSort(arr) {
    let n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Troca os elementos
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    
    return arr;
}

console.log(selectionSort([64, 25, 12, 22, 11]));