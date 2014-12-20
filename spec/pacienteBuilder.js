function pacienteBuilder(){
	var nome = "João";
	var idade = 28;
	var peso = 72;
	var altura = 1.72

	var classe = {
		constroi: function(){
			return paciente(nome, idade, peso, altura);
		},

		comIdade: function(valor){
			idade = valor;
			return this;
		},

		comPeso: function(valor){
			peso = valor;
			return this;
		},

		comAltura: function(valor){
			altura = valor;
			return this;
		}
	};
	return classe;
}