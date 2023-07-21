// Passar um função como parametro para outra função
// Quando um determinado evento acontecer a função que foi passada
// como parametro será disparada novamente

const fabricantes = ['Mercedes', 'Fiat', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
