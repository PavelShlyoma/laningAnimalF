// quare param

const urlParams = new URLSearchParams(window.location.search);
const data = urlParams.get('data');
const tabs = urlParams.get('tabs')
if (data) {
    const openTabsReady = (data, tabs) => {
        let i, tabcontent, tablinks, openTabs, openButtons;

        openButtons = document.getElementById(`${data}`);

        tabcontent = document.getElementsByClassName("tab-content");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].className = tabcontent[i].className.replace(" active", "");
        }

        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        openTabs = document.getElementById(`${tabs}`);
        openTabs.className += " active";
        openButtons.className += " active";
    }

    openTabsReady(data, tabs);
}

// cart shopping

const cardAddArr = Array.from(document.querySelectorAll(".catalog-content-bottom-item-button"))

myCart.products = cardAddArr.forEach((cardAdd) => {
    cardAdd.addEventListener("click", (e) => {
        e.preventDefault();
        const card = e.target.closest(".catalog-content-list");
        const product = new Product(card);
        const savedCart = JSON.parse(localStorage.getItem("cart"));
        myCart.products = savedCart.products;
        let check = false;
        for (const arr of myCart.products) {
            if (arr.id == product.id) {
                arr.num = arr.num + 1;
                check = true;
            }
        }
        if (check == false) {
            myCart.addProduct(product);
        }
        localStorage.setItem("cart", JSON.stringify(myCart));
        cartNum.textContent = myCart.count;
        popupContainerFill()
        const addCartButton = card.querySelector(".catalog-content-bottom-button");
        const removeCartButton = card.querySelector(".catalog-content-bottom-item");
        addCartButton.classList.add("active");
        removeCartButton.classList.add("active");
        addCartButton.addEventListener("click", (e) => {
            e.preventDefault();
            getElementShop.classList.add('active');
            getBagShop.classList.add('active');
            popupContainerFill()
        })
    })
})

// likes product

const cartLikesAddArr = Array.from(document.querySelectorAll(".catalog-my-icons"));

myCartLikes.products = cartLikesAddArr.forEach((cardAdd) => {
    cardAdd.addEventListener("click", (e) => {
        e.preventDefault();
        const card = e.target.closest(".catalog-content-list");
        const product = new Product(card);
        const savedLikesCart = JSON.parse(localStorage.getItem("cartLikes"));
        myCartLikes.products = savedLikesCart.products;
        let check = false;
        for (const arr of myCartLikes.products) {
            if (arr.id == product.id) {
                let index = myCartLikes.products.findIndex(el => el.id === product.id);
                myCartLikes.removeProduct(index);
                check = true;
            }
        }
        if (check == false) {
            myCartLikes.addProduct(product);
        }
        localStorage.setItem("cartLikes", JSON.stringify(myCartLikes));
        cartLikes.textContent = myCartLikes.count;
        const cartIcons = card.querySelector(".catalog-my-icons");
        cartIcons.classList.toggle("active")
    })
})

