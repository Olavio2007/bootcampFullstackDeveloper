function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Amelia',
	idade: 23,
};

const pessoa2 = {
	nome: 'Márcia',
	idade: 20,
};

const animal= {
	nome: 'Jauli',
	idade: 5,
    reca: 'Vira'
};

console.log(calculaIdade.call(animal, 4));
console.log(calculaIdade.apply(pessoa2, [24]));