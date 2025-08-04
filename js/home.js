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
