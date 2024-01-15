/*
COMBINAR TECLAS 2.0 © 2023
Desenvolvido por Reynolds Costa, no Notepad++
O uso é permitido; a comercialização, proibida.
*/

// ARQUIVO DE EXEMPLO

const CT = new CombinarTeclas([ // Declaração do objeto
	// Ctrl+Enter chama a função ola();
	[[17, 13], ola],
	// Ctrl+Shift+Enter chama a função soma();
	[[17, 16, 13], function() {
		alert(soma([1, 2])); // Exibe o resultado de soma([1, 2]);
	}]
]);

// A função ola()
function ola() {
	alert("Olá, mundo!");
}

// A função soma(parcelas)
function soma(parcelas) {
	let produto = 0;
	parcelas.forEach((parcela) => {
		produto += parcela;
	});
	return produto;
}