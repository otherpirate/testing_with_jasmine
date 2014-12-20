describe("paciente", function(){

	it ("deve calcular imc", function(){
		var pacienteJoao = new paciente("João", 28, 72, 1.82);
		expect(pacienteJoao.imc()).toEqual(72/(1.82 * 1.82));
	});

	it ("deve calcular batimentos", function(){
		var pacienteJoao = new paciente("João", 28, 72, 1.82);
		expect(pacienteJoao.batimentos()).toEqual(28 * 365 * 24 * 60 * 80);
	});
});