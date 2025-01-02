$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".navbar").addClass("sticky");
        } else{
            $(".navbar").removeClass("sticky");
        }
        if(this.scrollY > 500){
            $(".scroll-up-btn").addClass("show");
        } else{
            $(".scroll-up-btn").removeClass("show");
        }
    });

    // slide-up 
    $(".scroll-up-btn").click(function(){
        $("html").animate({scrollTop : 0})
    });

    // toggle menu
    $(".menu-btn").click(function(){
      $(".navbar .menu").toggleClass("active"); 
      $(".menu-btn i").toggleClass("active"); 
    });

    // typing animation
    var typed = new Typed(".typing",{
        strings:["Developer","Designer","Teamworker","Autodidact"],
        typeSpeed:100,
        backSpeed:100,
        loop:true
    });

    var typed = new Typed(".typing-2",{
        strings:["Creative","Dynamic","Proactive"],
        typeSpeed:100,
        backSpeed:100,
        loop:true
    });

    // aparecer y desaparecer imagenes
    $(".btn-certificates1").click(function(){
        $(".img1").toggleClass("aparecer");
        $(".btn-certificates1").toggleClass("invert");
    })

    $(".btn-certificates2").click(function(){
        $(".img2").toggleClass("aparecer");
        $(".btn-certificates2").toggleClass("invert");
    })

    $(".btn-certificates3").click(function(){
        $(".img3").toggleClass("aparecer");
        $(".btn-certificates3").toggleClass("invert");
    })

    $(".btn-certificates4").click(function(){
        $(".img4").toggleClass("aparecer");
        $(".btn-certificates4").toggleClass("invert");
    })

    $(".btn-certificates5").click(function(){
        $(".img5").toggleClass("aparecer");
        $(".btn-certificates5").toggleClass("invert");
    })

    $(".btn-certificates6").click(function(){
        $(".img6").toggleClass("aparecer");
        $(".btn-certificates6").toggleClass("invert");
    })

    $(".btn-certificates7").click(function(){
        $(".img7").toggleClass("aparecer");
        $(".btn-certificates7").toggleClass("invert");
    })

    $(".btn-certificates8").click(function(){
        $(".img8").toggleClass("aparecer");
        $(".btn-certificates8").toggleClass("invert");
    })

    $(".btn-certificates9").click(function(){
        $(".img9").toggleClass("aparecer");
        $(".btn-certificates9").toggleClass("invert");
    })

    $(".btn-certificates10").click(function(){
        $(".img10").toggleClass("aparecer");
        $(".btn-certificates10").toggleClass("invert");
    })

    $(".btn-certificates11").click(function(){
        $(".img11").toggleClass("aparecer");
        $(".btn-certificates11").toggleClass("invert");
    })

    $(".btn-certificates12").click(function(){
        $(".img12").toggleClass("aparecer");
        $(".btn-certificates12").toggleClass("invert");
    })
    
    $(".btn-certificates13").click(function(){
        $(".img13").toggleClass("aparecer");
        $(".btn-certificates13").toggleClass("invert");
    })

    $(".btn-certificates14").click(function(){
        $(".img14").toggleClass("aparecer");
        $(".btn-certificates14").toggleClass("invert");
    })

    $(".btn-certificates15").click(function(){
        $(".img15").toggleClass("aparecer");
        $(".btn-certificates15").toggleClass("invert");
    })

    $(".btn-certificates16").click(function(){
        $(".img16").toggleClass("aparecer");
        $(".btn-certificates16").toggleClass("invert");
    })

    $(".btn-certificates17").click(function(){
        $(".img17").toggleClass("aparecer");
        $(".btn-certificates17").toggleClass("invert");
    })

    
    

})