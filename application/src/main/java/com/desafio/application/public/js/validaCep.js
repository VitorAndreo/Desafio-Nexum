$(document).ready(function() {

    function limpa_formulário_cep() {
        // Limpa valores do formulário de cep.
        $("#inserirEndereco").val("");
        $("#inserirComplemento").val("");
        $("#inserirBairro").val("");
        $("#inserirCidade").val("");
        $("#inserirUf").val("");
    }
    
    //Quando o campo cep perde o foco.
    $("#inserirCEP").blur(function() {

        //Nova variável "cep" somente com dígitos.
        var cep = $(this).val().replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                $("#inserirEndereco").val("...");
                $("#inserirComplemento").val("...");
                $("#inserirBairro").val("...");
                $("#inserirCidade").val("...");
                $("#inserirUf").val("...");
                
                //Consulta o webservice viacep.com.br/
                $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta.
                        $("#inserirEndereco").val(dados.logradouro);
                        $("#inserirComplemento").val(dados.complemento);
                        $("#inserirBairro").val(dados.bairro);
                        $("#inserirCidade").val(dados.localidade);
                        $("#inserirUf").val(dados.uf);
                        
                        //Desabilita a edição dos campos
                        $("#inserirEndereco").attr('disabled', 'disabled')
                        //$("#inserirComplemento").val(dados.complemento);
                        $("#inserirBairro").attr('disabled', 'disabled')
                        $("#inserirCidade").attr('disabled', 'disabled')
                        $("#inserirUf").attr('disabled', 'disabled');
                        
                    } //end if.
                    else {
                        //CEP pesquisado não foi encontrado.
                        limpa_formulário_cep();
                        alert("CEP não encontrado.");

                        //Reabilita a edição de campos
                        $("#inserirEndereco").removeAttr('disabled');
                        //$("#inserirComplemento").removeAttr('disabled');
                        $("#inserirBairro").removeAttr('disabled');
                        $("#inserirCidade").removeAttr('disabled');
                        $("#inserirUf").removeAttr('disabled');
                    }
                });
            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
                
                //Reabilita a edição de campos
                $("#inserirEndereco").removeAttr('disabled');
                //$("#inserirComplemento").removeAttr('disabled');
                $("#inserirBairro").removeAttr('disabled');
                $("#inserirCidade").removeAttr('disabled');
                $("#inserirUf").removeAttr('disabled');
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();

            //Reabilita a edição de campos
            $("#inserirEndereco").removeAttr('disabled');
            //$("#inserirComplemento").removeAttr('disabled');
            $("#inserirBairro").removeAttr('disabled');
            $("#inserirCidade").removeAttr('disabled');
            $("#inserirUf").removeAttr('disabled');
        }
    });
});