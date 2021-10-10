// Jquery
$(document).ready(function(){
    // Modal
    // fechar
    $('.dialog-close').click(function(){
        $('.dialog-body').fadeOut('200', function(){
            $('.dialog').fadeOut('200');
        });
    });
    // abrir
    $('.dialog-open').click(function(e){
        e.preventDefault();
        var target = $(this).attr('href');
        $('.dialog').fadeIn('200', function(){
            $(target).fadeIn('200');
        });
    });
    // Menu
    $('#nav-toggle').click(function(e){
        //Evitar # no Endereço link
        e.preventDefault();
        $(this).toggleClass('active');
        $('.header-collapse').toggleClass('active');
    });
    // Scrool
    // Variaveis
    var nav = $('.header-nav'),
    navHeight = nav.outerHeight(),
    sections = $('.section');
    // scrooll
    $(window).on('scroll',function(){
        var sTop = $(this).scrollTop();
        // Fixando Header
        if(sTop > navHeight){
            $('.header').addClass('fixed');
        }else{
            $('.header').removeClass('fixed');
        }
        // marcando o menu no scrool
        if(sTop == 0){
            nav.find('a').removeClass('active');
            nav.find('a[href="#home"]').addClass('active')
        }else{
            sections.each(function(){
                var top = $(this).offset().top - navHeight;
                if(sTop >= top){
                    nav.find('a').removeClass('active');
                    nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
                }
            });
        }
    });
    // Navegação
    nav.find('a').on('click',function(e){
        e.preventDefault();
        $('.header-collapse').removeClass('active');
        $('#nav-toggle').removeClass('active');

        var target = $(this).attr('href');
        if(target == "#home"){
            $('html,body').animate({scrollTop: 0}, 700);
        }else{
            $('html,body').stop().animate({
                scrollTop: $(target).offset().top
            }, 700);
        }
    });
    // back Top - Rolagem
    $('.back-top').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop: 0},700);
    });
    

    

    //Carrousel Sobre
    $('.carousel_sobre').owlCarousel({
        items:1,
        lazyLoad:true,
        loop:true,
        margin:0,
        nav:true,
        navSpeed:1000,
        navText:  ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        dots:false,
        dotsSpeed:1000,
        autoplay:true,
        autoplaySpeed:1000,
        responsiveRefreshRate:10
    });


});

// efeito
var  s  =  skrollr . init () ;