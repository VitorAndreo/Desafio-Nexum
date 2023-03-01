$(document).ready(function () {
    $("#inserirCEP").blur(function(){
        $(this).mask("99999-999");
    });

    $("#inserirCPF").blur(function(){
        $(this).mask("999.999.999-99");
    });

    $("#inserirCNPJ").blur(function(){
        $(this).mask("99.999.999/9999-99");
    });
});