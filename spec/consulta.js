describe("consulta", function(){
	
	var pacienteJoao;
	beforeEach(function(){
	 	pacienteJoao = new pacienteBuilder().constroi;
	});

	describe("Tipo retorno", function(){
		it ("não deve cobrar nada se for retorno", function(){
			var consultaJoao = new consulta(pacienteJoao, [], true, true);
			expect(consultaJoao.preco()).toEqual(0);
		});
	});

	describe("Com procedimentos", function(){
		it ("deve cobrar 25 para cada procedimento comum", function(){
			var consultaJoao = new consulta(pacienteJoao, ["proc1", "proc2"], false, false);
			expect(consultaJoao.preco()).toEqual(50);
		});

		it ("deve cobrar preco especifico de cada procedimento", function(){
			var consultaJoao = new consulta(pacienteJoao, ["raio-x", "gesso", "proc3"], false, false);
			expect(consultaJoao.preco()).toEqual(112);
		});

		it ("deve dobrar o preco para particular", function(){
			var consultaJoao = new consulta(pacienteJoao, ["raio-x", "gesso", "proc3"], true, false);
			expect(consultaJoao.preco()).toEqual(224);
		});
	});
});