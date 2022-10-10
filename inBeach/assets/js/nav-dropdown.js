const desktopIslandDropdown = document.querySelector('.desktop-island-dropdown');
const desktopFnbDropdown = document.querySelector('.desktop-fnb-dropdown');
const subIsland = document.querySelector('.sub-island');
const subFnb = document.querySelector('.sub-fnb');
const main = document.querySelector('main');

const restaurant = document.querySelector('.restaurant');
const restaurantLocation = document.querySelector('.restaurant-location');
const cafe = document.querySelector('.cafe');
const cafeLocation = document.querySelector('.cafe-location');

const styleEl = document.createElement('style');
document.head.appendChild(styleEl);
const styleSheet = styleEl.sheet;
const dropdownKey = 'DROPDOWN_KEY';
const sublistKey = 'SUBLIST_KEY';

window.addEventListener('load', function () {
    if (sessionStorage.getItem(dropdownKey) === null && sessionStorage.getItem(sublistKey) === null) {
        sessionStorage.setItem(dropdownKey, '');
        sessionStorage.setItem(sublistKey, '');
    }
    const dropdownList = document.querySelectorAll('.dropdown-list>ul>li');
    const dropdownSubList = document.querySelectorAll('.dropdown-list>ul>li>div');

    for (let a of dropdownList) {
        a.id = 'dropdown-number-';
    }
    for (const b of dropdownSubList) {
        b.id = 'sublist-number-';
    }

    for (let index = 1; index < dropdownList.length + 1; index++) {
        document.getElementById('dropdown-number-').id = 'dropdown-number-' + index;
        document.getElementById('sublist-number-').id = 'sublist-number-' + index;
    }
    for (let index = 1; index < dropdownList.length + 1; index++) {
        const dropdownListSize = document.querySelector('.dropdown-list-size');
        // document.querySelector('.dropdown-list-size').style.height = '5em'
        const sublistLength = document.querySelectorAll('#sublist-number-' + index + '>ul>li').length

        const id = document.getElementById('dropdown-number-' + index);
        const x = document.getElementById('dropdown-number-' + (index + 1));
        id.addEventListener('click', function () {
            if (document.getElementById('dropdown-number-' + index).classList.contains('dropdown-list-size') || document.getElementById('sublist-number-' + index).classList.contains('dropdown-animation-list')) {
                document.querySelector('.dropdown-list>ul>li[class~="dropdown-list-size"]').classList.remove('dropdown-list-size');
                document.querySelector('.dropdown-list>ul>li>div[class~="dropdown-animation-list"]').classList.remove('dropdown-animation-list');
            } else {
                if (sessionStorage.getItem(dropdownKey) === '') {
                    sessionStorage.setItem(dropdownKey, 'dropdown-number-' + index);
                    sessionStorage.setItem(sublistKey, 'sublist-number-' + index);
                } else {
                    document.getElementById(sessionStorage.getItem(dropdownKey)).classList.remove('dropdown-list-size');
                    document.getElementById(sessionStorage.getItem(sublistKey)).classList.remove('dropdown-animation-list');
                    sessionStorage.setItem(dropdownKey, 'dropdown-number-' + index);
                    sessionStorage.setItem(sublistKey, 'sublist-number-' + index);
                }
                if (!document.getElementById('dropdown-number-' + index).classList.contains('dropdown-list-size') || !document.getElementById('sublist-number-' + index).classList.contains('dropdown-animation-list')) {
                    document.getElementById('dropdown-number-' + index).classList.add('dropdown-list-size');
                    document.getElementById('sublist-number-' + index).classList.add('dropdown-animation-list');
                    if (sublistLength == sublistLength) {
                        const b = (sublistLength * 2) + 0.5;
                        document.documentElement.style.setProperty('--dropdown-list-height', b + 'em');
                    }
                }
            }

        });
    }
});

main.addEventListener('click', function () {
    if (desktopFnbDropdown.style.display == 'flex') {
        desktopFnbDropdown.classList.add('close-dropdown');
        desktopFnbDropdown.addEventListener('webkitAnimationEnd', function () {
            desktopFnbDropdown.classList.remove('close-dropdown');
            desktopFnbDropdown.style.display = 'none';
            desktopFnbDropdown.removeEventListener('webkitAnimationEnd', arguments.callee, false);
        }, false);
    } else if (desktopIslandDropdown.style.display == 'flex') {
        desktopIslandDropdown.classList.add('close-dropdown');

        desktopIslandDropdown.addEventListener('webkitAnimationEnd', function () {
            desktopIslandDropdown.classList.remove('close-dropdown');
            desktopIslandDropdown.style.display = 'none';
            desktopIslandDropdown.removeEventListener('webkitAnimationEnd', arguments.callee, false);
        }, false);
    }
    restaurantLocation.classList.remove('restaurant-location-dropdown');
    restaurant.classList.remove('restaurant-dropdown');
    cafeLocation.classList.remove('cafe-location-dropdown');
    cafe.classList.remove('cafe-dropdown');
    document.querySelector('.dropdown-list>ul>li[class~="dropdown-list-size"]').classList.remove('dropdown-list-size');
    document.querySelector('.dropdown-list>ul>li>div[class~="dropdown-animation-list"]').classList.remove('dropdown-animation-list');

    styleSheet.deleteRule(0);
    styleSheet.deleteRule(0);
});

subFnb.addEventListener('click', function () {
    desktopFnbDropdown.style.display = 'flex';
    if (desktopIslandDropdown.style.display == 'flex') {
        if (styleEl.sheet.cssRules.length > 1) {
            styleSheet.deleteRule(0);
            styleSheet.deleteRule(0);
        }
        desktopIslandDropdown.classList.add('close-dropdown');
        desktopIslandDropdown.addEventListener('webkitAnimationEnd', function () {
            desktopIslandDropdown.style.display = 'none';
            desktopIslandDropdown.classList.remove('close-dropdown');
            desktopIslandDropdown.removeEventListener('webkitAnimationEnd', arguments.callee, false);
        }, false);
    }

    if (styleEl.sheet.cssRules.length == 0) {
        styleSheet.insertRule('#nav-desktop a[href="#fnb"] > span::before { transition: .4s;transform: translateY(17px) translateX(-7px) rotate(135deg); }', 0);
        styleSheet.insertRule('#nav-desktop a[href="#fnb"] > span::after { transform: translateX(-23px) translateY(2px) rotate(45deg); }', 0);
    }
});

subIsland.addEventListener('click', () => {
    desktopIslandDropdown.style.display = 'flex';
    if (desktopFnbDropdown.style.display == 'flex') {
        if (styleEl.sheet.cssRules.length > 1) {
            styleSheet.deleteRule(0);
            styleSheet.deleteRule(0);
        }
        desktopFnbDropdown.classList.add('close-dropdown');
        desktopFnbDropdown.addEventListener('webkitAnimationEnd', function () {
            desktopFnbDropdown.style.display = 'none';
            desktopFnbDropdown.classList.remove('close-dropdown');
            desktopFnbDropdown.removeEventListener('webkitAnimationEnd', arguments.callee, false);
        }, false);
    }
    restaurantLocation.classList.remove('restaurant-location-dropdown');
    restaurant.classList.remove('restaurant-dropdown');

    if (styleEl.sheet.cssRules.length == 0) {
        styleSheet.insertRule('#nav-desktop a[href="#islands"] > span::before { transition: .4s;transform: translateY(17px) translateX(-7px) rotate(135deg); }', 0);
        styleSheet.insertRule('#nav-desktop a[href="#islands"] > span::after { transform: translateX(-23px) translateY(2px) rotate(45deg); }', 0);
    }
});

// restaurant.addEventListener('click', function () {
//     restaurantLocation.classList.add('restaurant-location-dropdown');
//     restaurant.classList.add('restaurant-dropdown');

//     cafeLocation.classList.remove('cafe-location-dropdown');
//     cafe.classList.remove('cafe-dropdown');
// });
// cafe.addEventListener('click', function () {
//     cafeLocation.classList.add('cafe-location-dropdown');
//     cafe.classList.add('cafe-dropdown');

//     restaurantLocation.classList.remove('restaurant-location-dropdown');
//     restaurant.classList.remove('restaurant-dropdown');
// });
