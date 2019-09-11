const usuarios = [  
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },  
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },  
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map(item => item.idade);

console.log(idades);


const maior18 = usuarios.filter(item => item.idade >= 18);

console.log(maior18);


const workGoogle = usuarios.find(item => item.empresa === 'Google');

console.log(workGoogle);

const idadesDouble = usuarios.map(function(item){
    item.idade *= 2;
    return item;
});

const menor50 = idadesDouble.filter(item => item.idade <= 50);

console.log(menor50);