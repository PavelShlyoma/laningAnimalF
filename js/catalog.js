const cardAddArr = Array.from(document.querySelectorAll(".catalog-content-bottom-item-button"))

// cart shopping

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

