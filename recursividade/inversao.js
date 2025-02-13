// Invertendo uma string utilizado a recursividade

function inverterString(str) {
    if (str.length <= 1){
        
        return str; // Caso base
    } 
    return inverterString(str.slice(1)) + str[0]; // Chamada recursiva
}

console.log(inverterString("invertendo uma string")); 

