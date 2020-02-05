
    $(document).ready(function() {
        $('#nav, #arrow, #navig, .section').click(function () {
            elementClick = $(this).attr("href");
            destination = $(elementClick).offset().top;
            $("body,html").animate({scrollTop: destination }, 1000);
        })
    })

    $('#hamburger').click(function(e) {
        e.stopPropagation();
          $('.menu__mobile').slideToggle('fast', function(){
              
          });
        });

        $('#hamburger').click(function(){
          $(this).toggleClass('open');
          
        });