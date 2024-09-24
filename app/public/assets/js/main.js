window.onload = () => {
    var loader = document.getElementById('loader');
    loader.classList.add('opacity-0');
    setTimeout(function () {
        loader.classList.add('hidden');
    }, 500);

    var lastScrollTop;
    var navbar = document.querySelector('header');
    window.addEventListener('scroll', function () {
        var scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            navbar.style.top = '-120px';
            if (scrollTop !== 0) {
                navbar.classList.remove('shadow-none');
            }
        } else {
            navbar.style.top = '0';
            if (scrollTop === 0) {
                navbar.classList.add('shadow-none');
            }
        }
        lastScrollTop = scrollTop;
    });

    var menuCheckbox = document.querySelector('input[type=checkbox]');

    var toggleMenu = function () {
        menuCheckbox.click();
    };

    var main = document.querySelector('main');
    menuCheckbox.addEventListener('change', function () {
        var classListAction = 'add';
        if (this.checked) {
            main.classList.add('blur-sm');
            main.addEventListener('click', toggleMenu);
        } else {
            classListAction = 'remove';
            main.classList.remove('blur-sm');
            main.removeEventListener('click', toggleMenu);
        }

        for (var element of [document.body, document.documentElement]) {
            element.classList[classListAction]('overflow-y-hidden');
        }
    });
};

function PageController() {
    this.goToItemContent = function (elementId) {
        var elementToGo = document.getElementById(elementId);
        elementToGo.scrollIntoView();

        var menuCheckbox = document.querySelector('input[type=checkbox]');
        menuCheckbox.checked = false;
        menuCheckbox.dispatchEvent(new Event('change'));
    };

    this.scrollTo = function (element, to, duration) {
        if (duration <= 0) return;
        var difference = to - element.scrollTop;
        var perTick = (difference / duration) * 10;

        setTimeout(() => {
            window.requestAnimationFrame(() => {
                element.scrollTop = element.scrollTop + perTick;
            });
            if (element.scrollTop === to) return;
            this.scrollTo(element, to, duration - 10);
        }, 10);
    };

    return this;
}

var pageController = new PageController();
window.pageController = pageController;
