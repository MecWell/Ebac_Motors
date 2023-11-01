$(document).ready(function(){
    //animação para slide se mover 
    $("#carousel-imagens").slick({
        autoplay: true,
    });  
    /*Colocar animação no menu*/
    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })
    /*Para criar area da data de nascimento
    $('#data').mask('(00)00000-0000, {
        placeholder '__/__/___'
    }')*/ 

     /*Para criar area da placa do carro
    $('#placa').mask('SSS-0000', {
        placeholder 'ABC-1234'
    }')*/ 
    
    //Validar usando jQuery/Aplicar mascara
    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true,
            },
            veículoDeInteresse: {
                required: false,
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert (`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
    //Clicar no botão e ser direcionado para preencher formulário
    $('.lista-veículos button').click(function(){
        const destino = $('#contato');
        const nomeVeículo = $(this).parent().find('h3').text();

        $('#veículo-interesse').val(nomeVeículo)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
});