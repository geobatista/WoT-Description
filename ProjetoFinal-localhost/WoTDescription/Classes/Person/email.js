//inserir mailto:, antes de salvar
function prepareEmail(){
    str = $('#email').val();
    if (!str.startsWith('mailto:'))
    {
        $('#email').val('mailto:'+str);
    }
}

//remover mailto:, ao carregar
$(document).ready(function(){
    $('#email').val(function(){
        return $(this).val().replace(/^mailto:/,'');
    });
    
});
   