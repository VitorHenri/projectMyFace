$(function(){
    $('.btn').click(function(){
        $('.contato').show();
        
    })
    $('.fechar').click(function(){
        $('.contato').hide();
    })

    $('#copiar').click(()=>{ 
    let valor = document.querySelector('#email').innerHTML;
    navigator.clipboard.writeText(valor);
    alert('Email copiado')
    })

    $('#zap').click(function(){
        let redireciona = "https://wa.me/5519994931847";
        let msg = document.querySelector('#mensagem').value;
        let final_url = `${redireciona}?text=${msg}`;
        window.open(final_url);
    })
})