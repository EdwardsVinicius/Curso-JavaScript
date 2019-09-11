// 3.1

// arr.map(function(item) {  
//     return item + 10;
// });
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map(item => item + 10);
console.log(newArr);


// 3.2
// Dica: Utilize uma constante pra function

// function mostraIdade(usuario) {  
//     return usuario.idade;
// }
// mostraIdade(usuario);
const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = () => usuario.idade;
console.log(mostraIdade());


// 3.3
// Dica: Utilize uma constante pra function

// function mostraUsuario(nome = 'Diego', idade = 18) {  
//     return { nome, idade };
// }
// mostraUsuario(nome, idade);
// mostraUsuario(nome);
const nome = "Diego";
const idade = 23;
const mostraUsuario = () => ({ nome, idade });
console.log(mostraUsuario());


// 3.4
// const promise = function() {  
//     return new Promise(function(resolve, reject) {
//         return resolve();  
//     })
// }
const promise = () => new Promise((resolve, reject) => resolve());

promise()
.then(() => {console.log("response")})
.catch(() => {console.warn("error")});