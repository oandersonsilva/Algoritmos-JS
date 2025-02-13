// Percorrendo e imprimindo elementos de uma árvore

const arvore = {
    valor: 1,
    filhos: [
        {
            valor: 2,
            filhos: []
        }, {
            valor: 3,
            filhos: [
                {
                    valor: 4,
                    filhos: []
                }, {
                    valor: 5,
                    filhos: []
                }
            ]

        }, {
            valor: 6,
            filhos: []
        }
    ]
};

function percorrerArvore(no) {
    console.log(no.valor); // Processa o nó atual
    no
        .filhos
        .forEach(filho => percorrerArvore(filho)); // Chamada recursiva
}

percorrerArvore(arvore);
// Saída: 1, 2, 3, 4, 5