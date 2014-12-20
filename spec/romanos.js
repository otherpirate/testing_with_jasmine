describe("Romanos", function(){

	var romano
	beforeEach(function(){
		romano = new romanos();
	});

	it ("deve converter I", function(){
		expect(romano.converter("I")).toEqual(1);
	});

	it ("deve converter V", function(){
		expect(romano.converter("V")).toEqual(5);
	});

	it ("deve converter X", function(){
		expect(romano.converter("X")).toEqual(10);
	});

	it ("deve converter IV", function(){
		expect(romano.converter("IV")).toEqual(4);
	});

	it ("deve converter XVI", function(){
		expect(romano.converter("XVI")).toEqual(16);
	});
});