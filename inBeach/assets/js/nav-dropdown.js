const btnNavMobile = document.querySelector('.hamburger-menu');
const btnCloseNavMobile = document.querySelector('.close-btn');
const navMobile = document.querySelector('#nav-mobile');
const desktopIslandDropdown = document.querySelector('.desktop-island-dropdown');
const desktopFnbDropdown = document.querySelector('.desktop-fnb-dropdown');
const ulSubIsland = document.querySelector('ul.sub-island');
const subIsland = document.querySelector('.sub-island');
const subFnb = document.querySelector('.sub-fnb');
const divSubNav = document.querySelectorAll('#nav-desktop div.sub-nav');
const navDesktopContainer = document.querySelectorAll('#nav-desktop > div > div');
const main = document.querySelector('main');

const styleEl = document.createElement('style');
document.head.appendChild(styleEl);
const styleSheet = styleEl.sheet;

const dropdownKey = 'DROPDOWN_KEY';
const sublistKey = 'SUBLIST_KEY';
const subNavMobileKey = 'SUBNAV_MOBILE_KEY';
const ulSubNavMobileKey = 'UL_SUBNAV_MOBILE_KEY';
const divSubNavDesktopKey = 'DIV_SUBNAV_DESKTOP_KEY';
const desktopContainerNumber = 'DESKTOP_CONTAINER_KEY';

const divDropdownList = document.querySelectorAll('#nav-desktop .dropdown-list');
const dropdownList = document.querySelectorAll('.dropdown-list>ul>li');
const dropdownSubList = document.querySelectorAll('.dropdown-list>ul>li>div');
const subNavAnchor = document.querySelectorAll('#nav-mobile div.sub-nav > a');
const ulSubNav = document.querySelectorAll('#nav-mobile ul.sub-nav');

window.addEventListener('load', function () {
    if (sessionStorage.getItem(dropdownKey) === null || sessionStorage.getItem(sublistKey) === null || sessionStorage.getItem(subNavMobileKey) === null || sessionStorage.getItem(ulSubNavMobileKey) === null || sessionStorage.getItem(divSubNavDesktopKey) === null || sessionStorage.getItem(desktopContainerNumber) === null) {
        sessionStorage.setItem(dropdownKey, '');
        sessionStorage.setItem(sublistKey, '');
        sessionStorage.setItem(subNavMobileKey, '');
        sessionStorage.setItem(ulSubNavMobileKey, '');
        sessionStorage.setItem(divSubNavDesktopKey, '');
        sessionStorage.setItem(desktopContainerNumber, '');
    }
    for (let a of dropdownList) {
        a.id = 'dropdown-number-';
    }
    for (const b of dropdownSubList) {
        b.id = 'sublist-number-';
    }
    for (const c of subNavAnchor) {
        c.id = 'sub-nav-number-';
    }
    for (const d of ulSubNav) {
        d.id = 'ul-sub-nav-number-';
    }
    for (const e of divSubNav) {
        e.id = 'div-sub-nav-number-';
    }
    for (const f of navDesktopContainer) {
        f.id = 'nav-desktop-container-number-';
    }

    for (let index = 1; index <= divSubNav.length; index++) {
        document.getElementById('div-sub-nav-number-').id = 'div-sub-nav-number-' + index;
    }
    for (let index = 1; index <= navDesktopContainer.length; index++) {
        document.getElementById('nav-desktop-container-number-').id = 'nav-desktop-container-number-' + index;
    }

    for (let index = 1; index <= divSubNav.length; index++) {

        const idDivSubNav = document.getElementById('div-sub-nav-number-' + index);

        idDivSubNav.addEventListener('click', function () {

            if (sessionStorage.getItem(divSubNavDesktopKey) === '') {
                sessionStorage.setItem(divSubNavDesktopKey, 'div-sub-nav-number-' + index);
                sessionStorage.setItem(desktopContainerNumber, 'nav-desktop-container-number-' + index);
            } else {
                if (styleEl.sheet.cssRules.length > 1) {
                    styleSheet.deleteRule(0);
                    styleSheet.deleteRule(0);
                }
                if (styleEl.sheet.cssRules.length == 0) { // should be else
                    styleSheet.insertRule('#nav-desktop > #' + idDivSubNav.id + '> a > span::before { transition: .4s;transform: translateY(17px) translateX(-7px) rotate(135deg); }', 0);
                    styleSheet.insertRule('#nav-desktop > #' + idDivSubNav.id + '> a > span::after { transform: translateX(-23px) translateY(2px) rotate(45deg); }', 0);
                }
                const d = document.getElementById('nav-desktop-container-number-' + index);

                if (sessionStorage.getItem(desktopContainerNumber) == d.id) {
                    d.style.display = 'flex';
                } else if (sessionStorage.getItem(desktopContainerNumber) != d.id) {
                    const x = document.getElementById(sessionStorage.getItem(desktopContainerNumber));
                    x.classList.add('close-dropdown');
                    d.style.display = 'flex';
                    x.addEventListener('webkitAnimationEnd', function () {
                        x.style.display = 'none';
                        x.classList.remove('close-dropdown');
                        x.removeEventListener('webkitAnimationEnd', arguments.callee, false);
                        sessionStorage.setItem(divSubNavDesktopKey, 'div-sub-nav-number-' + index);
                        sessionStorage.setItem(desktopContainerNumber, 'nav-desktop-container-number-' + index);
                    }, false);
                }
            }
        });
    }

    for (let index = 1; index <= dropdownList.length; index++) {
        document.getElementById('dropdown-number-').id = 'dropdown-number-' + index;
        document.getElementById('sublist-number-').id = 'sublist-number-' + index;
    }
    for (let v = 1; v <= subNavAnchor.length; v++) {
        document.getElementById('sub-nav-number-').id = 'sub-nav-number-' + v;
        document.getElementById('ul-sub-nav-number-').id = 'ul-sub-nav-number-' + v;
    }
    for (let v = 1; v <= subNavAnchor.length; v++) {
        const subNumber = document.getElementById('sub-nav-number-' + v);

        subNumber.addEventListener('click', function () {
            // document.querySelector('#nav-mobile ul.sub-island').classList.toggle('active');
            if (sessionStorage.getItem(subNavMobileKey) === '') {
                sessionStorage.setItem(subNavMobileKey, 'sub-nav-number-' + v);
                sessionStorage.setItem(ulSubNavMobileKey, 'ul-sub-nav-number-' + v);
            } else {
                sessionStorage.setItem(subNavMobileKey, 'sub-nav-number-' + v);
                sessionStorage.setItem(ulSubNavMobileKey, 'ul-sub-nav-number-' + v);
                document.getElementById('ul-sub-nav-number-' + v).classList.toggle('active');
            }
        });
    }


    for (let index = 1; index <= dropdownList.length; index++) {
        // const dropdownListSize = document.querySelector('.dropdown-list-size');
        // document.querySelector('.dropdown-list-size').style.height = '5em'
        const sublistLength = document.querySelectorAll('#sublist-number-' + index + '>ul>li').length

        const id = document.getElementById('dropdown-number-' + index);

        id.addEventListener('click', function () {
            if (document.getElementById('dropdown-number-' + index).classList.contains('dropdown-list-size') || document.getElementById('sublist-number-' + index).classList.contains('dropdown-animation-list')) {
                document.querySelector('.dropdown-list>ul>li[class~="dropdown-list-size"]').classList.remove('dropdown-list-size');
                document.querySelector('.dropdown-list>ul>li>div[class~="dropdown-animation-list"]').classList.remove('dropdown-animation-list');
            } else {
                if (sessionStorage.getItem(dropdownKey) === '' && sessionStorage.getItem(sublistKey) === '') {
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
    // for (let index = 1; index <= divSubNav.length; index++) {
        const d = document.getElementById(sessionStorage.getItem(desktopContainerNumber));
        if (d.style.display == 'flex') {
            d.classList.add('close-dropdown');
            d.addEventListener('webkitAnimationEnd', function () {
                d.classList.remove('close-dropdown');
                d.style.display = 'none';
                d.removeEventListener('webkitAnimationEnd', arguments.callee, false);
            }, false);
        } 
    // }
    if (!document.getElementById(sessionStorage.getItem(dropdownKey)).classList.contains('dropdown-list-size') || !document.getElementById(sessionStorage.getItem(sublistKey)).classList.contains('dropdown-animation-list')) {
        document.getElementById(sessionStorage.getItem(dropdownKey)).classList.remove('dropdown-list-size');
        document.getElementById(sessionStorage.getItem(sublistKey)).classList.remove('dropdown-animation-list');
    }
    if (styleSheet.cssRules.length > 1) {
        styleSheet.deleteRule(0);
        styleSheet.deleteRule(0);
    }
    navMobile.classList.remove('active');

});

// Nav Mobile
btnNavMobile.addEventListener('click', function () {
    navMobile.classList.add('active');
});
btnCloseNavMobile.addEventListener('click', function () {
    navMobile.classList.remove('active');
});
