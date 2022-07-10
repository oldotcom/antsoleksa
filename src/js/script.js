const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      menuBlock = document.querySelector('.menu__block'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', e => {
    e.stopPropagation();
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

document.addEventListener('click', e => {
    if (menu.classList.contains('active')) {
        const withinBoundaries = e.composedPath().includes(menuBlock);

        if (!withinBoundaries) {
            menu.classList.remove('active');
        }   
    }
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

$(document).ready(function(){
    $(window).scroll(function(){  
        if ($(window).scrollTop() > 500 ){
            $(".sidepanel__link").css("color", "rgb(6, 35, 4)");
			$(".sidepanel__divider").css("background-color", "rgb(6, 35, 4)");
			$(".sidepanel__text").css("color", "rgb(6, 35, 4)");
		}  else {
			$(".sidepanel__link").css("color", "white");
			$(".sidepanel__divider").css("background-color", "white");
			$(".sidepanel__text").css("color", "white");
		} 
    });
    
    $(Window).scroll(function() {
        if ($(this).scrollTop() > 400) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
}); 