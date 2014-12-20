describe("agendamento", function(){

	var pacienteJoao;
	var agenda;

	beforeEach(function(){
	 	pacienteJoao = new pacienteBuilder().constroi;
		agenda = new agendamento();
	});

	it ("deve agendar 20 dias depois", function(){
		var consultaJoao = new consulta(pacienteJoao, [], true, true, new Date(2014, 7, 1));
		var novaConsulta = new agenda.para(consultaJoao);

		expect(novaConsulta.getData()).toEqual(new Date(2014, 7, 21));
	});

	it ("deve pular fim de semanas", function(){
		var consultaJoao = new consulta(pacienteJoao, [], true, true, new Date(2014, 5, 30));
		var novaConsulta = new agenda.para(consultaJoao);

		expect(novaConsulta.getData()).toEqual(new Date(2014, 6, 21));
	});
});