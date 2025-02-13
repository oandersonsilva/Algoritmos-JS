// Encontrando numero[indice] na sequência fibonacci utilizando-se da recursividade
function fibonacci(n) {
    if (n <= 1) {
        return n; // Casos base
    }

    return fibonacci(n - 1) + fibonacci(n - 2); // Chamada recursiva
}

console.log(fibonacci(3)); // Saída: 8
console.log(fibonacci(15)); // Saída: 610