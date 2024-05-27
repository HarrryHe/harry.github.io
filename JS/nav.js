let lastScrollTop = 0;
const nav = document.getElementById('nav');

window.addEventListener('scroll', function(){
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        nav.style.top = '-60px';
    }
    else{
        nav.style.top = '0';
    }

    lastScrollTop = scrollTop;
})