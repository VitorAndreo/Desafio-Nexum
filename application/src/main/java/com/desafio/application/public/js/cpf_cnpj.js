$(document).ready(function(){

    $('#inserirTipoPessoa').on('change', function(){
        var opcao = '#'+$(this).val();
        
        $('#pai').children('div').hide();
        $('#pai').children(opcao).show();
    })
})