/**import functions from firebase */
import {initializeApp} from  "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {getDatabase,ref,push,onValue,remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL:"https://portfoliomessages-8ea09-default-rtdb.firebaseio.com/"

}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const MessageList = ref(database,"MessagesList")


let changeThemeBtn = document.getElementById("changetheme-btn");
let aboutMeBtn = document.getElementById("aboutme-btn");
let sendBtn = document.getElementById("send-btn");
let nameTxt = document.getElementById("name-txt");
let emailTxt = document.getElementById("email-txt");
let messageTxt = document.getElementById("message-txt");


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




 function submitData(event){
    event.preventDefault();
    if(nameTxt.value != "" && emailTxt.value !="" && messageTxt.value != "")
    {
    let message = {
        Name : nameTxt.value,
        Email : emailTxt.value,
        Message : messageTxt.value
    }

    push(MessageList, message);
    clearFields();
   
}
}

function clearFields(){
    nameTxt.value = "";
    emailTxt.value = "";
    messageTxt.value = "";
}


