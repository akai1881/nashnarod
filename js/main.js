const nav = document.querySelector('.page__navigation');

let pageSlider = new Swiper('.page', {
    wrapperClass: 'page__wrapper',

    slideClass: 'page__screen',

    direction: 'vertical',

    slidesPerView: 'auto',

    parallax: true,

    keyboard: {
        enabled: true,

        onlyInViewport: true,

        pageUpDown: true,
    },

    mousewheel: {
        sensitivity: 1,
    },

    watchOverflow: true,

    speed: 800,

    observer: true,

    observeParents: true,

    observeSlideChildren: true,

    pagination: {
        el: '.page__pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: 'page__bullet',
        bulletActiveClass: 'page__bullet_active',
    },

    scrollbar: {
        el: '.page__scroll',
        dragClass: 'page__drag-scroll',
        draggable: true,
    },

    init: false,

    on: {
        init: function () {
            menuSlider();
        },

        slideChange: function () {
            if (pageSlider.realIndex === 3) {
                pageLinks.forEach((page) => page.classList.add('_white'));
                nav.classList.add('_white');
            } else {
                pageLinks.forEach((page) => {
                    if (page.classList.contains('_white')) {
                        page.classList.remove('_white');
                        nav.classList.remove('_white');
                    }
                });
            }
            pageSliderRemove();
            pageLinks[pageSlider.realIndex].classList.add('_active');
        },
    },
});

let pageLinks = document.querySelectorAll('.page__link');

function menuSlider() {
    if (pageLinks.length > 0) {
        pageLinks[pageSlider.realIndex].classList.add('_active');
        for (let i = 0; i < pageLinks.length; i++) {
            const pageLink = pageLinks[i];
            pageLink.addEventListener('click', function (e) {
                pageSliderRemove();
                pageSlider.slideTo(i, 800);
                pageLink.classList.add('_active');
                e.preventDefault();
            });
        }
    }
}


function pageSliderRemove() {
    let pageLinkActive = document.querySelector('.page__link._active');
    if (pageLinkActive) {
        pageLinkActive.classList.remove('_active');
    }
}

pageSlider.init();
