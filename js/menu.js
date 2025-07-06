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

// START scroll view

const getStockButton = document.getElementById("stockBtn")

const getStock = document.getElementById("stock")

getStockButton.addEventListener("click", () => {
    getStock.scrollIntoView({ behavior: "smooth", block: "start" });
})

const getNewsButton = document.getElementById("newsBtn")

const getNews = document.getElementById("news")

getNewsButton.addEventListener("click", () => {
    getNews.scrollIntoView({ behavior: "smooth", block: "start" });
})

const getShopButton = document.getElementById("shopBtn")

const getShop = document.getElementById("shop")

getShopButton.addEventListener("click", () => {
    getShop.scrollIntoView({ behavior: "smooth", block: "start" });
})