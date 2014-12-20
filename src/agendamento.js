function agendamento(nome, idade, peso, altura){
	var classe = {
		para: function(consultaOrigem){
			var umDiaEmMillisegundos = 1000 * 60 * 60 * 24;
			var vinteDiasEmMillisegundos = umDiaEmMillisegundos * 20;

			var novaData = new Date(consultaOrigem.getData().getTime() + vinteDiasEmMillisegundos);
			
			while (novaData.getDay() == 0 || novaData.getDay() == 6){
				novaData = new Date(novaData.getTime() + umDiaEmMillisegundos);
			}

			var novaConsulta = new consulta(consultaOrigem.getNome(), consultaOrigem.getProcedimentos(), consultaOrigem.isParticular(), true, novaData);
			return novaConsulta;
		}
	};

    return classe;
}