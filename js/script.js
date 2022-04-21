let burger = document.querySelector('.header__burger-ico');
let menu = document.querySelector('.header__drop-down-menu ');
let menuLinks = menu.querySelectorAll('.header__list');
let search  = document.querySelectorAll('.search');
let searchBlock  = document.querySelector('.header__search-block ');







// let tabBtn = document.querySelectorAll('.tabs__btn');
// let tabsItem = document.querySelectorAll('.tabs-content');
// tabsBtn.forEach(function(element) {
//     element.addEventListener('click', function(e) {
//         const path = e.currentTarget.dataset.path;

//         tabsBtn.forEach(function(btn) { btn.classList.remove('tabs__btn--active') });
//         e.currentTarget.classList.add('tabs__btn--active');
//         tabsItem.forEach(function(element) {
//             element.classList.remove('tabs-content--active')
//         });
//         document.querySelector(`[data-target="${path}"]`).classList.add('tabs-content--active');

//     });
// });
document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;
        document.querySelectorAll('.tabs__btn').forEach(function(btn) {
            btn.classList.remove('tabs__btn--active')
        });
        e.currentTarget.classList.add('tabs__btn--active');


        document.querySelectorAll('.tabs-content').forEach(function(tabsBtn) {
            tabsBtn.classList.remove('tabs-content--active')
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('tabs-content--active');
    });


});






// -------------------------------------------------
//
//
//

burger.addEventListener('click',
    function() {
        burger.classList.toggle('header__burger-ico--cross');
        menu.classList.toggle('header__drop-down-menu--active');

        document.body.classList.toggle('stop-scroll');
    }
);

menuLinks.forEach(function(el) {
    el.addEventListener('click', function() {
        burger.classList.remove('header__burger-ico--cross');
        menu.classList.toggle('header__drop-down-menu--active');
        document.body.classList.remove('stop-scroll');


    })
});
search.forEach(function(s){
  s.addEventListener('click',
    function() {
        searchBlock.classList.toggle('search-hidden');
    }

);
});





const swiper = new Swiper('.swiper', {
    // Optional parameters

    loop: true,




    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
});


//аккардион\


$(".accordion").accordion({
    heightStyle: "content",
    collapsible: "true",
    active: 1,

});
// поиск

