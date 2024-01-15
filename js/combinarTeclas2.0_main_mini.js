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

function CombinarTeclas(_){let o=void 0===_?"Os comandos n\xe3o foram declarados":"";if(o||_.constructor===Array||(o="Os comandos foram declarados incorretamente"),o||_.forEach(_=>{o||_.constructor===Array||(o="Um comando foi declarado incorretamente"),o||void 0!==_[0]||(o="Um atalho n\xe3o foi declarado"),o||_[0].constructor===Array||(o="Um atalho foi declarado incorretamente"),o||_[0].forEach(_=>{o||"number"==typeof _||(o="Um c\xf3digo de tecla foi declarado incorretamente"),o||parseInt(_)===_||(o=_+" n\xe3o \xe9 um inteiro v\xe1lido"),o||-1!=[8,9,13,16,17,18,19,20,32,33,34,35,36,37,38,39,40,44,45,46,48,49,50,51,52,53,54,55,56,57,59,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,93,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,173,174,175,176,177,178,179].indexOf(_)||(o=_+" n\xe3o \xe9 um c\xf3digo de tecla v\xe1lido")}),o||"function"==typeof _[1]||(o="Uma fun\xe7\xe3o foi declarada incorretamente")}),!o){let e=[];_.forEach(_=>{-1==e.indexOf(_[0].join(","))?e.push(_[0].join(",")):o="H\xe1 atalhos repetidos"})}o&&console.error("A classe CombinarTeclas n\xe3o p\xf4de ser constru\xedda devido a uma falha no par\xe2metro.\n"+o+".");let a=[],n=function(o){_.forEach(_=>{_[0].forEach(_=>{_==o.keyCode&&o.preventDefault()})})};this.keyup=function(_){o||(n(_),a.splice(a.indexOf(_.keyCode),1))},this.keydown=function(e){return o||(n(e),-1==a.indexOf(e.keyCode)&&a.push(e.keyCode),_.forEach(_=>{_[0].join(",")==a.join(",")&&(_[1](),a=[])})),a.length}}

// Aqui termina o código PRINCIPAL