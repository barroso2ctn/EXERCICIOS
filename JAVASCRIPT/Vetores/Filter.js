const produtos = [
    {nome: 'Notebook', preco: 3000, fragil: true},
    {nome: 'Tablet', preco: 2500, fragil: true},
    {nome: 'Copo de vidro', preco: 20.50, fragil: true},
    {nome: 'Caneca de plastico', preco: 15.60, fragil: false},
]

console.log(produtos.filter(function(p){
    return p.fragil
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))