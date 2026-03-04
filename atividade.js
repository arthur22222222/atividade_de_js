/*
Imagine que você abriu uma loja:
1) Crie o nome de 8 produtos e armazene em uma lista; ok
2) Crie outra lista para armazenar o preço de cada produto. ok
3) Crie uma função para mostrar o estoque, mostrando o nome da cada produto e o seu preço. ok
4) Crie uma função que adiciona um novo produto (e consequentemente um novo preço) ok
5) Crie uma função que remove um produto da lista recebendo seu índice. ok
6) EXECUTE AS FUNÇÕES CRIADAS NA SEGUINTE ORDEM:
    - mostra estoque
    - adiciona produto
    - mostra estoque
    - remove um elemento pelo índice
    - mostra estoque
*/
const produtos = ["Leie", "X-largaticha", "Arroz", "Bolacha", "Coca-zero", "Pão", "Doce-leite", "Café"]
const valores = [    5    ,     20   ,      10    ,     3     ,   6      ,    11    ,  12    ,   15   ]
function mostrarProdutos(){
    informacao = 0
    while(informacao < produtos.length){
        console.log(produtos[informacao ] + " - R$ " + valores[informacao ])
        informacao++
    }
} 
console.log("-------------")
mostrarProdutos()

function addProduto(nome, valor){
    produtos.push(nome)
    valores.push(valor)
}
console.log("-------------")
addProduto("Macarrão", 7)
mostrarProdutos()

function removeProduto(indice){
    produtos.splice(indice, 1)
    valores.splice(indice, 1)
}
console.log("-------------")
removeProduto(2)
mostrarProdutos()
