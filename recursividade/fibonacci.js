function fibonacci(n) {
    if (n <= 1) return n; // Casos base
    return fibonacci(n - 1) + fibonacci(n - 2); // Chamada recursiva
}

console.log(fibonacci(6)); // Saída: 8