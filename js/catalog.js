function openCatalog(evt, tabname) {
    let i, tabcontent, tablinks, openTabs;

    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].className = tabcontent[i].className.replace(" active", "");
    }

    tablinks = document.getElementsByClassName("catalog-tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    openTabs = document.getElementById(tabname);
    openTabs.className += " active";
    evt.currentTarget.className += " active";
}

// START menu/ mobile-menu

const getButtonsElements = document.querySelectorAll('.hamburger');

const getMenuElement = document.getElementById('menu');

const getMenuItem = document.querySelector('.menu');

function setMenuActive(i) {
    getButtonsElements[i].classList.toggle('active');
    getMenuElement.classList.toggle('active');
    getMenuItem.classList.toggle('menu-active')
}

getMenuElement.addEventListener('click', (event) => {

    let getId = event.target.closest('.menu');

    if (!getId) {
        setMenuActive(0);
    }
})

// END menu/ mobile-menu

const getButtonsElemntsIcons = document.getElementById('buttonLog')

const getMenuUserLogElement = document.getElementById('menuUserLog');

const getMenuUserLog = document.querySelector('.menu-user');

getButtonsElemntsIcons.addEventListener('click', () => {
    getMenuUserLogElement.classList.toggle('active');
    getMenuUserLog.classList.toggle('active');
})

getMenuUserLogElement.addEventListener('click', (event) => {

    let getButtonId = event.target.closest('.hamburger');

    if (getButtonId) {
        getMenuUserLogElement.classList.toggle('active');
        getMenuUserLog.classList.toggle('active');
    }

    let getId = event.target.closest('.menu-user');

    if (!getId) {
        getMenuUserLogElement.classList.toggle('active');
        getMenuUserLog.classList.toggle('active');
    }

})


// START bag-shopping

const getButtonsElemntsIconsShop = document.getElementById('buttonBag')

console.log(getButtonsElemntsIconsShop);

const getElementShop = document.getElementById('bagShopping');

console.log(getElementShop);

const getBagShop= document.querySelector('.bag-shopping');

console.log(getBagShop);

getButtonsElemntsIconsShop.addEventListener('click', () => {
    getElementShop.classList.toggle('active');
    getBagShop.classList.toggle('active');
})

getElementShop.addEventListener('click', (event) => {

    let getButtonId = event.target.closest('.close-button-item');

    if (getButtonId) {
        getElementShop.classList.toggle('active');
        getBagShop.classList.toggle('active');
    }

    let getId = event.target.closest('.bag-shopping');

    if (!getId) {
        getElementShop.classList.toggle('active');
        getBagShop.classList.toggle('active');
    }

})

