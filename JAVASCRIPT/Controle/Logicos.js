/* 
Operadores Lógicos
&& -> AND
|| -> OR
! -> NOT
*/

const expressaoAND = false && true && true && true
const expressaoOR = false || true || false

const usuario = 'Luiz'
const senha = '123456'

const vaiLogar = usuario === 'Luiz' && senha === '12345'
console.log(!vaiLogar)