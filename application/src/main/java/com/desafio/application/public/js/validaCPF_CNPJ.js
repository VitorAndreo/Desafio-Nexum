$(function validaCPF() {
    //Executa a requisição quando o campo username perder o foco
    $('#inserirCPF').blur(function () {
        var cpf = $('#inserirCPF').val().replace(/[^0-9]/g, '').toString();

        if (cpf.length == 11) {
            var v = [];

            //Calcula o primeiro dígito de verificação.
            v[0] = 1 * cpf[0] + 2 * cpf[1] + 3 * cpf[2];
            v[0] += 4 * cpf[3] + 5 * cpf[4] + 6 * cpf[5];
            v[0] += 7 * cpf[6] + 8 * cpf[7] + 9 * cpf[8];
            v[0] = v[0] % 11;
            v[0] = v[0] % 10;

            //Calcula o segundo dígito de verificação.
            v[1] = 1 * cpf[1] + 2 * cpf[2] + 3 * cpf[3];
            v[1] += 4 * cpf[4] + 5 * cpf[5] + 6 * cpf[6];
            v[1] += 7 * cpf[7] + 8 * cpf[8] + 9 * v[0];
            v[1] = v[1] % 11;
            v[1] = v[1] % 10;

            //Retorna Verdadeiro se os dígitos de verificação são os esperados.
            if ((v[0] != cpf[9]) || (v[1] != cpf[10])) {
                alert('CPF inválido: ' + cpf);

                $('#inserirCPF').val('');
                $('#inserirCPF').focus();
            }
        }
        else {
            alert('CPF inválido:' + cpf);

            $('#inserirCPF').val('');
            $('#inserirCPF').focus();
        }
    });
});

/*$(function validaCNPJ() {
    //Executa a requisição quando o campo username perder o foco
    $('#inserirCNPJ').blur(function () {
        var cnpj = $('#inserirCNPJ').val().replace(/[^0-13]/g, '').toString();

        if (cnpj.length == 14) {
            var v = [];

            //Calcula o primeiro dígito de verificação.
            v[0] = 5 * cnpj[0] + 4 * cnpj[1] + 3 * cnpj[2];
            v[0] += 2 * cnpj[3] + 9 * cnpj[4] + 8 * cnpj[5];
            v[0] += 7 * cnpj[6] + 6 * cnpj[7] + 5 * cnpj[8];
            v[0] += 4 * cnpj[9] + 3 * cnpj[10] + 2 * cnpj[11];
            v[0] = v[0] % 11;
            v[0] = v[0] % 10;

            //Calcula o segundo dígito de verificação.
            v[1] = 6 * cnpj[1] + 5 * cnpj[2] + 4 * cnpj[3];
            v[1] += 3 * cnpj[4] + 2 * cnpj[5] + 9 * cnpj[6];
            v[1] += 8 * cnpj[7] + 7 * cnpj[8] + 6 * v[9];
            v[1] += 5 * cnpj[10] + 4 * cnpj[11] + 3 * cnpj[12] + 2 * v[0];
            v[1] = v[1] % 11;
            v[1] = v[1] % 10;

            //Retorna Verdadeiro se os dígitos de verificação são os esperados.
            if ((v[0] != cnpj[11]) || (v[1] != cnpj[12])) {
                alert('CNPJ inválido: ' + cnpj);

                $('#inserirCNPJ').val('');
                $('#inserirCNPJ').focus();
            }
        }
        else {
            alert('CNPJ inválido:' + cnpj);

            $('#inserirCNPJ').val('');
            $('#inserirCNPJ').focus();
        }
    });
});*/