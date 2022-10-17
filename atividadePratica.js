//atividade 1
const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
    {
		nome: 'Migyel',
		nota: 3,
		turma: '2C',
	},
];
function alunosAprovados(arr, media){
    let aprovados = []
for(let i = 0; i < arr.length; i++){

  const {nota, nome } = arr[i];
if(nota >= media){
    aprovados.push(nome);
}
}
return aprovados;
}
console.log(alunosAprovados(alunos, 6));
//atividade 2
    const Pessoa = {
        idade: 12,
        nome: 'Aleijadinho',
    };
    const Pessoa2 = {
        idade: 38,
        nome: 'Fernandinho',
    };
function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(Pessoa, 4));
console.log(calculaIdade.apply(Pessoa2, [9]));