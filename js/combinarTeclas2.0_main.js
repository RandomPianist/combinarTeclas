/*
COMBINAR TECLAS 2.0 © 2023
Desenvolvido por Reynolds Costa, no Notepad++
O uso é permitido; a comercialização, proibida.
*/

/*
         ---------------
Esse é o |==PRINCIPAL==| arquivo dessa biblioteca.
         ---------------
AVISO:
Não altere se não souber o que está fazendo.
*/

function CombinarTeclas(comandos) {
	let erro = comandos === undefined ? "Os comandos não foram declarados" : "";	
	if (!erro) {
		if (comandos.constructor !== Array) erro = "Os comandos foram declarados incorretamente";
	}
	if (!erro) {
		comandos.forEach((comando) => {
			if (!erro) {
				if (comando.constructor !== Array) erro = "Um comando foi declarado incorretamente";
			}
			if (!erro) {
				if (comando[0] === undefined) erro = "Um atalho não foi declarado";
			}
			if (!erro) {
				if (comando[0].constructor !== Array) erro = "Um atalho foi declarado incorretamente";
			}
			if (!erro) {
				comando[0].forEach((tecla) => {
					if (!erro) {
						if (typeof tecla != "number") erro = "Um código de tecla foi declarado incorretamente";
					}
					if (!erro) {
						if (parseInt(tecla) !== tecla) erro = tecla + " não é um inteiro válido";
					}
					if (!erro) {
						const poss = [8, 9, 13, 16, 17, 18, 19, 20, 32, 33, 34, 35, 36, 37, 38, 39, 40, 44, 45, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 59, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 93, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 173, 174, 175, 176, 177, 178, 179];
						if (poss.indexOf(tecla) == -1) erro = tecla + " não é um código de tecla válido";
					}
				});
			}
			if (!erro) {
				if (typeof comando[1] != "function") erro = "Uma função foi declarada incorretamente";
			}
		});
	}
	if (!erro) {
		let atal = new Array();
		comandos.forEach((comando) => {
			if (atal.indexOf(comando[0].join(",")) == -1) atal.push(comando[0].join(","));
			else erro = "Há atalhos repetidos";
		});
	}
	if (erro) console.error(
		"A classe CombinarTeclas não pôde ser construída devido a uma falha no parâmetro.\n" +
		erro + "."
	);
	
	let pressionados = new Array();
	
	const prevent = function(e) {
		comandos.forEach((comando) => {
			comando[0].forEach((tecla) => {
				if (tecla == e.keyCode) e.preventDefault();
			});
		});
	}

	this.keyup = function(e) {
		if (!erro) {
			prevent(e);
			pressionados.splice(pressionados.indexOf(e.keyCode), 1);
		}
	}
	
	this.keydown = function(e) {
		if (!erro) {
			prevent(e);
			if (pressionados.indexOf(e.keyCode) == -1) pressionados.push(e.keyCode);
			comandos.forEach((comando) => {
				if (comando[0].join(",") == pressionados.join(",")) {
					comando[1]();
					pressionados = new Array();
				}
			});
		}
		return pressionados.length;
	}
}

// Aqui termina o código PRINCIPAL