console.log(typeof Array, typeof new Array, typeof [])

const alunos = ['Noe', 'Khalel', 'Jucelia', 'Nilma']
alunos.pop()
console.log(alunos)

alunos.push('Nilma')
console.log(alunos)

alunos.shift()
console.log(alunos)

alunos.unshift('Noe')
console.log(alunos)

alunos.splice(2, 0, 'Pedro', 'Nandson')
console.log(alunos)

alunos.splice(0, 1)
console.log(alunos)

const alunos2 = alunos.slice(2)
console.log(alunos2)

const alunos3 = alunos.slice(1, 4)
console.log(alunos3)


