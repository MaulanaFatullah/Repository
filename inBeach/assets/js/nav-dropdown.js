const desktopIslandDropdown = document.querySelector('.desktop-island-dropdown');
const desktopFnbDropdown = document.querySelector('.desktop-fnb-dropdown');
const subIsland = document.querySelector('.sub-island');
const subFnb = document.querySelector('.sub-fnb');
const main = document.querySelector('main');


main.addEventListener('click', function () {
    if (desktopFnbDropdown.style.display == 'flex') {
        desktopFnbDropdown.classList.add('close-dropdown');
        desktopFnbDropdown.addEventListener('webkitAnimationEnd', function () {
            desktopFnbDropdown.classList.remove('close-dropdown');
            desktopFnbDropdown.style.display = 'none';
            desktopFnbDropdown.removeEventListener('webkitAnimationEnd', arguments.callee, false);
        }, false);
    } else if(desktopIslandDropdown.style.display == 'flex') {
        desktopIslandDropdown.classList.add('close-dropdown');
    
        desktopIslandDropdown.addEventListener('webkitAnimationEnd', function () {
            desktopIslandDropdown.classList.remove('close-dropdown');
            desktopIslandDropdown.style.display = 'none';
            desktopIslandDropdown.removeEventListener('webkitAnimationEnd', arguments.callee, false);
        }, false);
    }
    
    
});

subFnb.addEventListener('click', function () {
    desktopFnbDropdown.style.display = 'flex';
        
        // desktopFnbDropdown.classList.add('close-dropdown');
        // desktopIslandDropdown.addEventListener('webkitAnimationEnd', function () {
        //     desktopIslandDropdown.style.display = 'none';
        //     desktopIslandDropdown.classList.remove('close-dropdown');
        //     desktopIslandDropdown.removeEventListener('webkitAnimationEnd', arguments.callee, false);
        // }, false);
});

subIsland.addEventListener('click', () => {
    desktopIslandDropdown.style.display = 'flex';
    
    // desktopIslandDropdown.classList.add('close-dropdown');
    // desktopFnbDropdown.addEventListener('webkitAnimationEnd', function () {
    //     desktopFnbDropdown.style.display = 'none';
    //     desktopFnbDropdown.classList.remove('close-dropdown');
    //     desktopFnbDropdown.removeEventListener('webkitAnimationEnd', arguments.callee, false);
    // }, false);
});