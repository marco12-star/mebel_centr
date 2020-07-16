//SLIDER
$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        speed: 1000,
        centerMode: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});


$(document).ready(function () {
    $('#one').on('click', function () {
        $('.dot:nth-child(1)').toggleClass('open');
    });
});
$(document).ready(function () {
    $('#two').on('click', function () {
        $('.dot:nth-child(2)').toggleClass('open');
    });
});

$(document).ready(function () {
    $('#three').on('click', function () {
        $('.dot:nth-child(3)').toggleClass('open');
    });
});

$(document).ready(function () {
    $('#four').on('click', function () {
        $('.dot:nth-child(4)').toggleClass('open');
    });
});

$(document).ready(function () {
    $('#five').on('click', function () {
        $('.dot:nth-child(5)').toggleClass('open');
    });
});

$(document).ready(function () {
  let current = 0;
  const els = $('.dot');
    $('#btn').on('click', function () {
      current++;
      if(current>els.length) current <= 1;
        $('.dot:nth-child('+current+')').addClass('open');
    });
});

//filter
$(document).ready(function () {
   $('.button[filter]').click(function () {
      if ($(this).attr('val') == 'off') {
         $('.button[filter]').attr('val', 'off').removeClass('focused');
         $(this).attr('val', 'on').addClass('focused');
         $('.filter > div').hide(200);
         $('.filter > div[filter=' + $(this).attr('filter') + ']').show(200);
         if ($(this).attr('filter') == 'all') {
            $('.button[filter]').attr('val', 'off').removeClass('focused');
            $(this).attr('val', 'on').addClass('focused');
            $('.filter > div').show(200);
         }
      }
   });
});







