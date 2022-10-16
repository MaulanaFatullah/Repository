const btnNavMobile = document.querySelector('.hamburger-menu');
const btnCloseNavMobile = document.querySelector('.close-btn');
const navMobile = document.querySelector('#nav-mobile');
const divSubNav = document.querySelectorAll('#nav-desktop div.sub-nav');
const navDesktopContainer = document.querySelectorAll('#nav-desktop > div > div');
const main = document.querySelector('main');

const styleEl = document.createElement('style');
document.head.appendChild(styleEl);
const styleSheet = styleEl.sheet;

const dropdownKey = 'DROPDOWN_KEY';
const sublistKey = 'SUBLIST_KEY';
const ulSubNavMobileKey = 'UL_SUBNAV_MOBILE_KEY';
const desktopContainerNumber = 'DESKTOP_CONTAINER_KEY';

const dropdownList = document.querySelectorAll('.dropdown-list>ul>li');
const dropdownSubList = document.querySelectorAll('.dropdown-list>ul>li>div');
const subNavAnchor = document.querySelectorAll('#nav-mobile div.sub-nav > a');
const ulSubNav = document.querySelectorAll('#nav-mobile ul.sub-nav');

window.addEventListener('load', function () {
    const __containerNumber = 'nav-desktop-container-number-';
    const __dropdownNumber = 'dropdown-number-';
    const __sublistNumber = 'sublist-number-';
    const __subNavNumber = 'sub-nav-number-';
    const __ulSubNavNumber = 'ul-sub-nav-number-';
    const __divSubNavNumber = 'div-sub-nav-number-';

    if (sessionStorage.getItem(dropdownKey) === null || sessionStorage.getItem(sublistKey) === null || sessionStorage.getItem(ulSubNavMobileKey) === null || sessionStorage.getItem(desktopContainerNumber) === null) {
        sessionStorage.setItem(dropdownKey, '');
        sessionStorage.setItem(sublistKey, '');
        sessionStorage.setItem(ulSubNavMobileKey, '');
        sessionStorage.setItem(desktopContainerNumber, '');
    }
    for (let a of dropdownList) {
        a.id = __dropdownNumber;
    }
    for (const b of dropdownSubList) {
        b.id = __sublistNumber;
    }
    for (const c of subNavAnchor) {
        c.id = __subNavNumber;
    }
    for (const d of ulSubNav) {
        d.id = __ulSubNavNumber;
    }
    for (const e of divSubNav) {
        e.id = __divSubNavNumber;
    }
    for (const f of navDesktopContainer) {
        f.id = __containerNumber;
    }

    for (let index = 1; index <= divSubNav.length; index++) {
        document.getElementById(__divSubNavNumber).id = __divSubNavNumber + index;
    }
    for (let index = 1; index <= navDesktopContainer.length; index++) {
        document.getElementById(__containerNumber).id = __containerNumber + index;
    }

    for (let index = 1; index <= divSubNav.length; index++) {

        const idDivSubNav = document.getElementById(__divSubNavNumber + index);
        const d = document.getElementById(__containerNumber + index);

        idDivSubNav.addEventListener('click', function () {
            if (styleEl.sheet.cssRules.length > 1) {
                styleSheet.deleteRule(0);
                styleSheet.deleteRule(0);
            }
            if (styleEl.sheet.cssRules.length == 0) {
                styleSheet.insertRule('#nav-desktop > #' + idDivSubNav.id + '> a > span::before { transition: .4s;transform: translateY(17px) translateX(-7px) rotate(135deg); }', 0);
                styleSheet.insertRule('#nav-desktop > #' + idDivSubNav.id + '> a > span::after { transform: translateX(-23px) translateY(2px) rotate(45deg); }', 0);
            }
            if (sessionStorage.getItem(desktopContainerNumber) === '') {
                sessionStorage.setItem(desktopContainerNumber, __containerNumber + index);
                d.style.display = 'flex';
            } else {
                if (sessionStorage.getItem(desktopContainerNumber) == d.id) {
                    d.style.display = 'flex';
                } else {
                    const x = document.getElementById(sessionStorage.getItem(desktopContainerNumber));
                    x.classList.add('close-dropdown');
                    d.style.display = 'flex';
                    x.addEventListener('webkitAnimationEnd', function () {
                        x.style.display = 'none';
                        x.classList.remove('close-dropdown');
                        sessionStorage.setItem(desktopContainerNumber, __containerNumber + index);
                        x.removeEventListener('webkitAnimationEnd', arguments.callee, false);
                    }, false);
                }
            }
        });
    }

    for (let index = 1; index <= dropdownList.length; index++) {
        document.getElementById(__dropdownNumber).id = __dropdownNumber + index;
        document.getElementById(__sublistNumber).id = __sublistNumber + index;
    }
    for (let v = 1; v <= subNavAnchor.length; v++) {
        document.getElementById(__subNavNumber).id = __subNavNumber + v;
        document.getElementById(__ulSubNavNumber).id = __ulSubNavNumber + v;
    }
    for (let v = 1; v <= subNavAnchor.length; v++) {
        const subNumber = document.getElementById(__subNavNumber + v);

        subNumber.addEventListener('click', function () {
            if (sessionStorage.getItem(ulSubNavMobileKey) === '') {
                sessionStorage.setItem(ulSubNavMobileKey, __ulSubNavNumber + v);
            } else {
                sessionStorage.setItem(ulSubNavMobileKey, __ulSubNavNumber + v);
                document.getElementById(__ulSubNavNumber + v).classList.toggle('active');
            }
        });
    }


    for (let index = 1; index <= dropdownList.length; index++) {
        const sublistLength = document.querySelectorAll('#sublist-number-' + index + '>ul>li').length

        const id = document.getElementById(__dropdownNumber + index);

        id.addEventListener('click', function () {
            if (document.getElementById(__dropdownNumber + index).classList.contains('dropdown-list-size') || document.getElementById(__sublistNumber + index).classList.contains('dropdown-animation-list')) {
                document.querySelector('.dropdown-list>ul>li[class~="dropdown-list-size"]').classList.remove('dropdown-list-size');
                document.querySelector('.dropdown-list>ul>li>div[class~="dropdown-animation-list"]').classList.remove('dropdown-animation-list');
            } else {
                if (sessionStorage.getItem(dropdownKey) === '' && sessionStorage.getItem(sublistKey) === '') {
                    sessionStorage.setItem(dropdownKey, __dropdownNumber + index);
                    sessionStorage.setItem(sublistKey, __sublistNumber + index);
                } else {
                    document.getElementById(sessionStorage.getItem(dropdownKey)).classList.remove('dropdown-list-size');
                    document.getElementById(sessionStorage.getItem(sublistKey)).classList.remove('dropdown-animation-list');
                    sessionStorage.setItem(dropdownKey, __dropdownNumber + index);
                    sessionStorage.setItem(sublistKey, __sublistNumber + index);
                }
                if (!document.getElementById(__dropdownNumber + index).classList.contains('dropdown-list-size') || !document.getElementById(__sublistNumber + index).classList.contains('dropdown-animation-list')) {
                    document.getElementById(__dropdownNumber + index).classList.add('dropdown-list-size');
                    document.getElementById(__sublistNumber + index).classList.add('dropdown-animation-list');
                    if (sublistLength == sublistLength) {
                        const b = (sublistLength * 1.5) + 2.5;
                        document.documentElement.style.setProperty('--dropdown-list-height', b + 'em');
                    }
                }
            }

        });
    }
});

main.addEventListener('click', function () {
    const d = document.getElementById(sessionStorage.getItem(desktopContainerNumber));
    sessionStorage.setItem(desktopContainerNumber, '');
    if (d.style.display == 'flex') {
        d.classList.add('close-dropdown');
        d.addEventListener('webkitAnimationEnd', function () {
            d.classList.remove('close-dropdown');
            d.style.display = 'none';
            d.removeEventListener('webkitAnimationEnd', arguments.callee, false);
        }, false);
    }
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
