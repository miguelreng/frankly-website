
function navToggle() {
    var btn = document.getElementById('menuBtn');
    var btn1 = document.getElementById('menuBtn1');
    var btn2 = document.getElementById('menuBtn2');
    var nav = document.getElementById('menu-mb');

    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
}

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {    
}else {
    window.onscroll = function() {myFunction()};

    var header = document.getElementById("header");
    var cta = document.getElementById("cta-header");
    var containerHeader = document.getElementById("container-header");
    var sticky = header.offsetTop;
    var logo = document.getElementById("logo-red");
    var logoMb = document.getElementById("logo-mb");
    var menu = document.getElementById("menu");
    var btn1 = document.getElementById('menuBtn1');
    var btn2 = document.getElementById('menuBtn2');
    var link = document.getElementById('link-active');
    function myFunction() {
        if (window.pageYOffset > sticky) {
            document.getElementById("logo-red").src="img/logo.svg";
            document.getElementById("logo-mb").src="img/logo.svg";
            header.classList.add("fixed");
            header.classList.add("-webkit-sticky");
            header.classList.add("bg-white");
            header.classList.add("shadow");
            cta.classList.add("bg-green-1");
            cta.classList.add("text-green-1");
            cta.classList.remove("border");
            cta.classList.remove("text-shadow-lg");
            logo.classList.add("lg:w-8");
            logo.classList.remove("lg:w-16"); 
            logoMb.classList.add("w-8");
            logoMb.classList.remove("w-16");          
            menu.classList.remove("text-shadow-lg");
            menu.classList.add("text-gray-800");
            menu.classList.remove("text-white");
            menu.classList.add("text-gray-800");
            btn1.classList.add("hamburger_red-top");
            btn1.classList.remove("hamburger__top-bun");
            btn2.classList.remove("hamburger__bottom-bun");
            btn2.classList.add("hamburger_red-bottom");
            link.classList.add("text-current");
        } else {
            document.getElementById("logo-red").src="img/lastfood-white.svg";
            document.getElementById("logo-mb").src="img/lastfood-white.svg";
            header.classList.remove("fixed");
            header.classList.remove("-webkit-sticky");
            header.classList.remove("bg-white");
            header.classList.remove("shadow");
            cta.classList.remove("bg-green-1");
            cta.classList.remove("text-green-1");
            cta.classList.add("border");
            //cta.classList.add("text-shadow-lg");
            logo.classList.add("lg:w-16");
            logo.classList.remove("lg:w-8");   
            logoMb.classList.remove("w-8");
            logoMb.classList.add("w-16");            
            //menu.classList.add("text-shadow-lg");
            menu.classList.remove("text-gray-800");            
            menu.classList.add("text-white");
            link.classList.remove("text-current");

            btn1.classList.add("hamburger__top-bun");
            btn2.classList.add("hamburger__bottom-bun");  
            btn1.classList.remove("hamburger_red-top");
            btn2.classList.remove("hamburger_red-bottom");
                      
        }
    }    
}
