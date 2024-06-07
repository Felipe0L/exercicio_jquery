$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })
    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })
    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaAtividade = $('#nova-atividade').val();
        const novoItem = $('<li></li>');
        $(`<p>${novaAtividade}</p>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#nova-atividade').val('');
    })
    $("ul").on('click','li',function(){
        $(this).toggleClass("riscado");
        
    })

})