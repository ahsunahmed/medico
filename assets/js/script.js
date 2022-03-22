// Responsive Navbar

var navBar = document.getElementById('navBar');
var menu = document.getElementById('menuNav');
menuNav.style.right = '-250px';
navBar.onclick = function(){
    if(menuNav.style.right == '-250px'){
        menuNav.style.right = '0px';
    }else{
        menuNav.style.right = '-250px';
    }
}
var nav1 = document.getElementById('nav1');
var nav2 = document.getElementById('nav2');
nav1.onclick = function(){
    nav1.style.display = 'none';
    nav2.style.display = 'block';
    10000;
}
nav2.onclick = function(){
    nav2.style.display = 'none';
    nav1.style.display = 'block';
}


//One Page Nav
$(document).ready(function(){
    $('#menuNav').onePageNav({
        currentClass: 'active'
    });
});


//Sticky NavBar
$(window).on('scroll', function(){
    if($(this).scrollTop() > 40){
        $('.header-bottom-menu').addClass('sticky');
    }else{
        $('.header-bottom-menu').removeClass('sticky');
    }
})

//Scroll Top
$(document).ready(function(){
    $(window).on("scroll", function(){
        if($(this).scrollTop() > 300){
            $('#return').addClass('scrollTop');
        }else{
            $('#return').removeClass('scrollTop');
        }
    })
    $("#return").click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, 800);
    })
})