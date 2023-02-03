$('.quiz-item .quiz-item__link button, .quiz-item .quiz-item__link input, .quiz-item .quiz-item__describe input').on('click', function (e) {
    if($('.quiz-inner .quiz-item:last-of-type').hasClass('active')){}else{
        $('.quiz-step').slideDown();

        $('.quiz-step__title .total').html($('.quiz-inner .quiz-item').length - 2);

        var myStr = $('.quiz-inner .quiz-item.active').data('quiz').replace(/\D/g,'');

        $('.quiz-step__title .current').html(myStr);
        var ska = $('.quiz-inner .quiz-item').length - 2;
        var skaBliad = ( Number(myStr) / ska * 100);
        $('.quiz-step__line span').css('width',  skaBliad + '%').addClass('active');


        $('.quiz-item.active').removeClass('active').next().addClass('active');
        $('.reviews-item.active').removeClass('active').next().addClass('active');
        $('.quiz-media__item.active').removeClass('active').next().addClass('active');
    }
    if($('.quiz-inner .quiz-item:nth-last-of-type(1)').hasClass('active')){
        $('.quiz-step').slideUp().addClass('hidden');
    }
});