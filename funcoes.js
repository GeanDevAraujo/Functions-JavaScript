const pessoa = {
    nome: 'Miguel',
};
const animal = {
    nome: 'Murphy',
};
function getSomething(){
    console.log(this.nome);
}
getSomething.call(animal);
//Call serve para chamar uma função no qual é possível passar parâmetros 
//Para tal função

const myObj = {
num1: 2,
num2: 4,

};
function soma(a, b, c, d, e){
    console.log(this.num1 + this.num2 + a + b + c + d + e);
}
soma.call(myObj, 10, 5, 3, 5, 3);
// "this" faz referência a um atributo do objeto, que pode ser igual dependendo do programa
// mas com nomes diferentes

//Função Apply (mesma função do Call)
const pessoah = {
    nome: 'Miguel',
};
const animau = {
    nome: 'Godi',
};
function getSomething(){
    console.log(this.nome);
}
getSomething.apply(animau);

//diferença entre Call e Apply é que apply necessita de passar um array na hora de setar os parâmetros
//EX.:
    const myObjeto = {
        num1: 2,
        num2: 4,
    };
    function soma(a, b){
        console.log(this.num1 +this.num2 + a + b);
    }
    soma.apply(myObjeto,[1,5]);

    //Método Bind
//clona a estrutura dda função onde é chamada e 
//aplica o valor do objeto passado como parâmetro
const retornaNomes = function (){
    return this.nome;
};
let bruno = retornaNome.bind({ nome: 'Bruno'});
bruno();