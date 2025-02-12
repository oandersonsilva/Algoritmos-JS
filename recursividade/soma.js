function somaArray(arr, index = 0) {
    if (index === arr.length) return 0; // Caso base
    return arr[index] + somaArray(arr, index + 1); // Chamada recursiva
}

console.log(somaArray([1, 2, 3, 4, 5])); // Saída: 15