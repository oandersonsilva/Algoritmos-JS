//Utilizando recursividade para calcular a fatorial de um número

function fatorial(n) {
    if (n === 0 || n === 1){
        return 1; // Caso base
    } 
    return n * fatorial(n - 1); // Chamada recursiva
}

console.log(fatorial(5)); // Saída: 120
console.log(fatorial(10)); // Saída: 3628800