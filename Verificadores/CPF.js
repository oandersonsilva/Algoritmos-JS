function validarCPF(cpf) {
    // Removendo caracteres não numéricos
    cpf = cpf.replace(/\D/g, ''); 
    
    // Verificando se o CPF tem 11 dígitos e não é uma sequência repetida
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false; 
    }

    // Cálculo do primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf[i]) * (10 - i);
    }
    let digito1 = (soma * 10 % 11) % 10;
    
    // Cálculo do segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf[i]) * (11 - i);
    }
    let digito2 = (soma * 10 % 11) % 10;
    
    return cpf.slice(-2) === `${digito1}${digito2}`;
}

// Exemplo de uso
const cpfTeste = "413.369.048-10";
console.log(validarCPF(cpfTeste));
