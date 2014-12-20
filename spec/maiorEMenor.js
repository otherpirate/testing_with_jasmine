describe("maiorEMenor", function(){

	it ("deve entender numeros em ordem não sequencial", function(){
		var algorimo = new MaiorEMenor();
		algorimo.encontra([5, 15, 7, 9])

		expect(algorimo.pegaMaior()).toEqual(15);
		expect(algorimo.pegaMenor()).toEqual(5);
	});

	it ("deve entender numeros em ordem cresente", function(){
		var algorimo = new MaiorEMenor();
		algorimo.encontra([5, 6, 7, 8])

		expect(algorimo.pegaMaior()).toEqual(8);
		expect(algorimo.pegaMenor()).toEqual(5);
	});

	it ("deve entender numeros em ordem decresente", function(){
		var algorimo = new MaiorEMenor();
		algorimo.encontra([8, 7, 6, 5])

		expect(algorimo.pegaMaior()).toEqual(8);
		expect(algorimo.pegaMenor()).toEqual(5);
	});

	it ("deve entender matriz com apenas 1 numero", function(){
		var algorimo = new MaiorEMenor();
		algorimo.encontra([8])

		expect(algorimo.pegaMaior()).toEqual(8);
		expect(algorimo.pegaMenor()).toEqual(8);
	});
});