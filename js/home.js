// START scroll view

const getStockButton = document.getElementById("stockBtn")

const getStockFooterButton = document.getElementById("stockFooterBtn");

const getStock = document.getElementById("stock")

getStockFooterButton.addEventListener("click", (e) => {
    e.preventDefault();
    getStock.scrollIntoView({ behavior: "smooth", block: "start" });
})

getStockButton.addEventListener("click", () => {
    getStock.scrollIntoView({ behavior: "smooth", block: "start" });
})

const getNewsButton = document.querySelectorAll(".news-link-btn");

const getNews = document.getElementById("news")

const getNewsFooterButton = document.getElementById("newsFooterBtn")

getNewsFooterButton.addEventListener("click", (e) => {
    e.preventDefault();
    getNews.scrollIntoView({ behavior: "smooth", block: "start" });
})

getNewsButton.forEach((buttons) => {
    buttons.addEventListener("click", () => {
        getNews.scrollIntoView({ behavior: "smooth", block: "start" });
    })
})

// getNewsButton.addEventListener("click", () => {
//     getNews.scrollIntoView({ behavior: "smooth", block: "start" });
// })

const getShopButton = document.getElementById("shopBtn")

const getShop = document.getElementById("shop")

getShopButton.addEventListener("click", () => {
    getShop.scrollIntoView({ behavior: "smooth", block: "start" });
})

const urlParams = new URLSearchParams(window.location.search);
const news = urlParams.get('news');

if (news) {
    getNews.scrollIntoView({ behavior: "smooth", block: "start" });
}

const stock = urlParams.get('stock');

if (stock) {
    getStock.scrollIntoView({ behavior: "smooth", block: "start" });
}

