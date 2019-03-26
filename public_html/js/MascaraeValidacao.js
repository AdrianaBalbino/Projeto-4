/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

//mascara para cnpj
function MascaraCNPJ(cnpj, event){
    if(mascaraInteiro(cnpj) == false){
        event.returnValue = false;
    }
    return formataCampos(cnpj,'00.000.000/0000-00',event);
}

//mascara para cep
function MascaraCep(cep, event){
    if(mascaraInteiro(cep) == false){
        event.returnValue = false;
    }
    return formataCampo(cep, '00.000-000',event);
}

//mascara para data
function MascaraData(data, event){
    if(mascaraInteiro(data) == false){
        event.returnValue = false;
    }
    return formataCampo(data, '00/00/0000', event);
}

//mascara para telefone
function MascaraTelefone(tel, event){
    if(mascaraInteiro(tel) == false){
        event.returnValue = false;
    }
    return formataCampo(tel, '(00) 0000-0000', event);
}

function MascaraCPF(cpf, event){
    if(mascaraInteiro(cpf) == false){
        event.returnValue = false;
    }
    return formataCampo(cpf, '000.000.000-00', event);
}

function mascaraInteiro(event){
    if(event.keyCode < 48 || event.keyCode > 57){
        event.returnValue = false;
    }
    return true;
}

function formataCampo(campo, Mascara, evento){

    var boleanoMascara;
    var Digitado       = evento.KeyCode;
    exp                = /\-|\.|\/|\(|\)| /g;
    campoSoNumeros     = campo.value.toString().replace(exp, "");

    var posicaoCampo   = 0;
    var NovoValorCampo = "";
    var TamanhoMascara = campoSoNumeros.length;

    if(Digitado != 8){//backspace
        for(i = 0; i <= TamanhoMascara; i++){
            boleanoMascara = ((Mascara.charAt(i) == "-") || (Mascara.charAt(i) == "."))
            || (Mascara.charAt(i) == "/");
            boleanoMascara = boleanoMascara || ((Mascara.charAt(i) == "(") || (Mascara.charAt(i) == ")"))
            || (Mascara.charAt(i) == " ");

            if(boleanoMascara){
                NovoValorCampo += Mascara.charAt(i);
                TamanhoMascara++;
            }else{
                NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                posicaoCampo++;
            }
        }
        campo.value = NovoValorCampo;
        return true;
    }else{
        return true;
    }

}

function ValidaTelefone(tel){
    exp = /\(\d{2}\)\ \d{4}\-d{4}/;
    if(!exp.text(tel.value)){
        alert("Numero de telefone invalido");
    }
}

//valida CEP
function ValidaCep(cep){
        exp = /\d{2}\.\d{3}\-\d{3}/;
        if(!exp.test(cep.value))
                alert('Numero de Cep Invalido!');               
}

function ValidaData(datap){
    exp = /\d{2}\/\d{2}\/\d{4}/;
    if(!exp.test(datap.value)){
        alert("Data invalida!");
    }
}

function ValidaEmail(email){
	var campo_email = email.value;
	//Checando se o endere�o e-mail n�o esta vazio
	if(campo_email=="") {
		alert("� necess�rio o preenchimento deste campo.");
		document.id_form.campo_email.focus();
		return false;
	}
	//Checando se o endere�o de e-mail � v�lido
	if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
		alert("� necess�rio o preenchimento de um endere�o de e-mail v�lido.");
		email.focus();
		return false;
	}
}	