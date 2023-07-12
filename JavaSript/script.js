let changeThemeBtn = document.getElementById("changetheme-btn");

$(document).ready(function(){
$('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
});

$(window).on('scroll load', function(){
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop()>0)
    {
        $('#top').show();
    }
    else{
        $('#top').hide();
    }
})

//smooth Scrolling

$('a[href*="#"]').on('click',function(e){
e.preventDefault();
$('html, body').animate({

    scrollTop : $($(this).attr('href')).offset().top,
},
500,
'linear'
);
});

});


changeThemeBtn.addEventListener("click", function(){
    var theme = document.getElementsByTagName('link')[0];
    console.log(theme.getAttribute('href') )
  
            // Change the value of href attribute 
            // to change the css sheet.
            if (theme.getAttribute('href') == 'StyleSheet/funky.css') {
                theme.setAttribute('href', 'StyleSheet/professional.css');
            } else {
                theme.setAttribute('href', 'StyleSheet/funky.css');
            }
})
