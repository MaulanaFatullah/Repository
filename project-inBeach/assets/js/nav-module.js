import * as libVar from "./varLib.js";

const styleEl = document.createElement('style');
document.head.appendChild(styleEl);
const styleSheet = styleEl.sheet;


window.addEventListener('load', function () {
    function isStorageExist() {
        if (typeof (Storage) === undefined) {
            alert('Browser yang kamu gunakan tidak mendukung Web Storage');
            return false;
        }
        return true;
    }
    if (isStorageExist()) {
        if (sessionStorage.getItem(libVar.dropdownKey) === null || sessionStorage.getItem(libVar.sublistKey) === null || sessionStorage.getItem(libVar.ulSubNavMobileKey) === null || sessionStorage.getItem(libVar.desktopContainerNumberKey) === null || sessionStorage.getItem(libVar.modalNumberKey) === null) {
            sessionStorage.setItem(libVar.dropdownKey, '');
            sessionStorage.setItem(libVar.sublistKey, '');
            sessionStorage.setItem(libVar.ulSubNavMobileKey, '');
            sessionStorage.setItem(libVar.desktopContainerNumberKey, '');
            sessionStorage.setItem(libVar.modalNumberKey, '');
        }
    }
});
function setIDofElement() {
    for (let a of libVar.dropdownList) {
        a.id = libVar.__dropdownNumber;
    }
    for (const b of libVar.dropdownSubList) {
        b.id = libVar.__sublistNumber;
    }
    for (const c of libVar.subNavAnchor) {
        c.id = libVar.__subNavNumber;
    }
    for (const d of libVar.ulSubNav) {
        d.id = libVar.__ulSubNavNumber;
    }
    for (const e of libVar.divSubNavAnc) {
        e.id = libVar.__divSubNavNumber;
    }
    for (const f of libVar.navDesktopContainer) {
        f.id = libVar.__containerNumber;
    }
    for (const g of libVar.navModalDesktopAnchor) {
        g.id = libVar.__navModalDesktopAncNumber;
    }
    for (const h of libVar.modalList) {
        h.id = libVar.__navModalNumber;
    }
    for (const e of libVar.divSubNav) {
        e.id = libVar.__divSubNavAncNumber;
    }
    for (const e of libVar.navModalMobileAnchor) {
        e.id = libVar.__navModalMobileAncNumber;
    }
    
    for (let index = 1; index <= libVar.divSubNavAnc.length; index++) {
        document.getElementById(libVar.__divSubNavNumber).id = libVar.__divSubNavNumber + index;
    }
    for (let index = 1; index <= libVar.divSubNav.length; index++) {
        document.getElementById(libVar.__divSubNavAncNumber).id = libVar.__divSubNavAncNumber + index;
    }
    for (let index = 1; index <= libVar.navDesktopContainer.length; index++) {
        document.getElementById(libVar.__containerNumber).id = libVar.__containerNumber + index;
    }
    for (let index = 1; index <= libVar.navModalDesktopAnchor.length; index++) {
        document.getElementById(libVar.__navModalNumber).id = libVar.__navModalNumber + index;
        document.getElementById(libVar.__navModalDesktopAncNumber).id = libVar.__navModalDesktopAncNumber + index;
    }
    for (let index = libVar.navModalMobileAnchor.length; index >= 1; index--) {
        document.getElementById(libVar.__navModalMobileAncNumber).id = libVar.__navModalMobileAncNumber + index;
    }
    for (let index = 1; index <= libVar.dropdownList.length; index++) {
        document.getElementById(libVar.__dropdownNumber).id = libVar.__dropdownNumber + index;
        document.getElementById(libVar.__sublistNumber).id = libVar.__sublistNumber + index;
    }
    for (let v = 1; v <= libVar.subNavAnchor.length; v++) {
        document.getElementById(libVar.__subNavNumber).id = libVar.__subNavNumber + v;
        document.getElementById(libVar.__ulSubNavNumber).id = libVar.__ulSubNavNumber + v;
    }
}setIDofElement();

// Nav Dropdown
for (let index = 1; index <= libVar.divSubNavAnc.length; index++) {
    const idDivSubNav = document.getElementById(libVar.__divSubNavNumber + index);
    const divSubNav = document.getElementById(libVar.__divSubNavAncNumber + index);
    const d = document.getElementById(libVar.__containerNumber + index);

    idDivSubNav.addEventListener('click', function () {
        if (sessionStorage.getItem(libVar.desktopContainerNumberKey) === '' || sessionStorage.getItem(libVar.desktopContainerNumberKey) === d.id) {
            d.classList.toggle('active-nav');
            if (styleEl.sheet.cssRules.length == 0) {
                styleSheet.insertRule('#nav-desktop > #' + divSubNav.id + '> a > span::before { transition: .4s;transform: translateY(17px) translateX(-7px) rotate(135deg); }', 0);
                styleSheet.insertRule('#nav-desktop > #' + divSubNav.id + '> a > span::after { transform: translateX(-23px) translateY(2px) rotate(45deg); }', 0);
            } else {
                styleSheet.deleteRule(0);
                styleSheet.deleteRule(0);
            }
            sessionStorage.setItem(libVar.desktopContainerNumberKey, libVar.__containerNumber + index);
        }
        if (sessionStorage.getItem(libVar.desktopContainerNumberKey) != d.id) {
            d.classList.toggle('active-nav');
            if (styleEl.sheet.cssRules.length == 0) {
                styleSheet.insertRule('#nav-desktop > #' + divSubNav.id + '> a > span::before { transition: .4s;transform: translateY(17px) translateX(-7px) rotate(135deg); }', 0);
                styleSheet.insertRule('#nav-desktop > #' + divSubNav.id + '> a > span::after { transform: translateX(-23px) translateY(2px) rotate(45deg); }', 0);
            } else {
                styleSheet.deleteRule(0);
                styleSheet.deleteRule(0);
            }
            if (sessionStorage.getItem(libVar.desktopContainerNumberKey) != '') {
                if (styleEl.sheet.cssRules.length == 0) {
                    styleSheet.insertRule('#nav-desktop > #' + divSubNav.id + '> a > span::before { transition: .4s;transform: translateY(17px) translateX(-7px) rotate(135deg); }', 0);
                    styleSheet.insertRule('#nav-desktop > #' + divSubNav.id + '> a > span::after { transform: translateX(-23px) translateY(2px) rotate(45deg); }', 0);
                } else {
                    styleSheet.deleteRule(0);
                    styleSheet.deleteRule(0);
                }
                document.getElementById(sessionStorage.getItem(libVar.desktopContainerNumberKey)).classList.remove('active-nav');
                sessionStorage.setItem(libVar.desktopContainerNumberKey, libVar.__containerNumber + index);
            }
        }
        // Modal
        if (sessionStorage.getItem(libVar.modalNumberKey) != '' && document.getElementById(sessionStorage.getItem(libVar.modalNumberKey)).classList.contains('active')) {
            document.getElementById(sessionStorage.getItem(libVar.modalNumberKey)).classList.remove('active');
        }
    });
}
// Dropdown Sublist
for (let index = 1; index <= libVar.dropdownList.length; index++) {
    const sublistLength = document.querySelectorAll('#sublist-number-' + index + '>ul>li').length
    const id = document.getElementById(libVar.__dropdownNumber + index);

    id.addEventListener('click', function () {
        if (document.getElementById(libVar.__dropdownNumber + index).classList.contains('dropdown-list-size') || document.getElementById(libVar.__sublistNumber + index).classList.contains('dropdown-animation-list')) {
            document.querySelector('.dropdown-list>ul>li[class~="dropdown-list-size"]').classList.remove('dropdown-list-size');
            document.querySelector('.dropdown-list>ul>li>div[class~="dropdown-animation-list"]').classList.remove('dropdown-animation-list');
        } else {
            if (sessionStorage.getItem(libVar.dropdownKey) === '' && sessionStorage.getItem(libVar.sublistKey) === '') {
                sessionStorage.setItem(libVar.dropdownKey, libVar.__dropdownNumber + index);
                sessionStorage.setItem(libVar.sublistKey, libVar.__sublistNumber + index);
            } else {
                document.getElementById(sessionStorage.getItem(libVar.dropdownKey)).classList.remove('dropdown-list-size');
                document.getElementById(sessionStorage.getItem(libVar.sublistKey)).classList.remove('dropdown-animation-list');
                sessionStorage.setItem(libVar.dropdownKey, libVar.__dropdownNumber + index);
                sessionStorage.setItem(libVar.sublistKey, libVar.__sublistNumber + index);
            }
            if (!document.getElementById(libVar.__dropdownNumber + index).classList.contains('dropdown-list-size') || !document.getElementById(libVar.__sublistNumber + index).classList.contains('dropdown-animation-list')) {
                document.getElementById(libVar.__dropdownNumber + index).classList.add('dropdown-list-size');
                document.getElementById(libVar.__sublistNumber + index).classList.add('dropdown-animation-list');
                if (sublistLength == sublistLength) {
                    const b = (sublistLength * 1.5) + 2.5;
                    document.documentElement.style.setProperty('--dropdown-list-height', b + 'em');
                }
            }
        }
    });
}
// Modal
for (let index = 1; index <= libVar.modalList.length; index++) {
    const d = document.getElementById(libVar.__navModalDesktopAncNumber + index);
    const navModal = document.getElementById(libVar.__navModalNumber + index);
    // Desktop
    d.addEventListener('click', function () {
        if (sessionStorage.getItem(libVar.modalNumberKey) === '' || sessionStorage.getItem(libVar.modalNumberKey) === navModal.id) {
            navModal.classList.toggle('active');
            sessionStorage.setItem(libVar.modalNumberKey, libVar.__navModalNumber + index);
        }
        if (sessionStorage.getItem(libVar.modalNumberKey) != navModal.id) {
            navModal.classList.toggle('active');
            if (sessionStorage.getItem(libVar.modalNumberKey) != '') {
                document.getElementById(sessionStorage.getItem(libVar.modalNumberKey)).classList.remove('active');
                sessionStorage.setItem(libVar.modalNumberKey, libVar.__navModalNumber + index);
            }
        }

        if (styleEl.sheet.cssRules.length > 1) {
            styleSheet.deleteRule(0);
            styleSheet.deleteRule(0);
        }
        if (sessionStorage.getItem(libVar.desktopContainerNumberKey) != '') {
            document.getElementById(sessionStorage.getItem(libVar.desktopContainerNumberKey)).classList.remove('active-nav');
            sessionStorage.setItem(libVar.desktopContainerNumberKey, '');
        }
    });
    // Mobile
    const m = document.getElementById(libVar.__navModalMobileAncNumber + index);
    m.addEventListener('click', function () {
        if (sessionStorage.getItem(libVar.modalNumberKey) === '' || sessionStorage.getItem(libVar.modalNumberKey) === navModal.id) {
            navModal.classList.toggle('active');
            sessionStorage.setItem(libVar.modalNumberKey, libVar.__navModalNumber + index);
        }
        if (sessionStorage.getItem(libVar.modalNumberKey) != navModal.id) {
            navModal.classList.toggle('active');
            if (sessionStorage.getItem(libVar.modalNumberKey) != '') {
                document.getElementById(sessionStorage.getItem(libVar.modalNumberKey)).classList.remove('active');
                sessionStorage.setItem(libVar.modalNumberKey, libVar.__navModalNumber + index);
            }
        }

        if (styleEl.sheet.cssRules.length > 1) {
            styleSheet.deleteRule(0);
            styleSheet.deleteRule(0);
        }
        if (sessionStorage.getItem(libVar.desktopContainerNumberKey) != '') {
            document.getElementById(sessionStorage.getItem(libVar.desktopContainerNumberKey)).classList.remove('active-nav');
            sessionStorage.setItem(libVar.desktopContainerNumberKey, '');
        }
        libVar.navMobile.classList.remove('active');

    });
}

// Landing page
libVar.landingPage.addEventListener('click', function () {
    if (sessionStorage.getItem(libVar.desktopContainerNumberKey) != '') {
        document.getElementById(sessionStorage.getItem(libVar.desktopContainerNumberKey)).classList.remove('active-nav');
        sessionStorage.setItem(libVar.desktopContainerNumberKey, '');
    }
    //actually don't need this code
    // if (document.getElementById(sessionStorage.getItem(libVar.dropdownKey)).classList.contains('dropdown-list-size') || document.getElementById(sessionStorage.getItem(libVar.sublistKey)).classList.contains('dropdown-animation-list')) {
    //     document.getElementById(sessionStorage.getItem(libVar.dropdownKey)).classList.remove('dropdown-list-size');
    //     document.getElementById(sessionStorage.getItem(libVar.sublistKey)).classList.remove('dropdown-animation-list');
    // }
    if (styleSheet.cssRules.length > 1) {
        styleSheet.deleteRule(0);
        styleSheet.deleteRule(0);
    }
    if (sessionStorage.getItem(libVar.modalNumberKey) != '') {
        document.getElementById(sessionStorage.getItem(libVar.modalNumberKey)).classList.remove('active');
        sessionStorage.setItem(libVar.modalNumberKey, '');
    }
});

// Nav Mobile
libVar.btnNavMobile.addEventListener('click', function () {
    libVar.navMobile.classList.add('active');
});
libVar.btnCloseNavMobile.addEventListener('click', function () {
    libVar.navMobile.classList.remove('active');
});

// Dropdown list
for (let v = 1; v <= libVar.subNavAnchor.length; v++) {
    const subNumber = document.getElementById(libVar.__subNavNumber + v);

    subNumber.addEventListener('click', function () {
        if (sessionStorage.getItem(libVar.ulSubNavMobileKey) === '') {
            sessionStorage.setItem(libVar.ulSubNavMobileKey, libVar.__ulSubNavNumber + v);
        } else {
            sessionStorage.setItem(libVar.ulSubNavMobileKey, libVar.__ulSubNavNumber + v);
            document.getElementById(libVar.__ulSubNavNumber + v).classList.toggle('active');
        }
    });
}
