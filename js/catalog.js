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

const getButtonsElemntsIconsShop = document.getElementById('buttonBag');

const getElementShop = document.getElementById('bagShopping');

const getBagShop = document.querySelector('.bag-shopping');

const bagShoppingClose = document.querySelector(".close-button-item");

const closePopup = document.getElementById("closeShop")

closePopup.addEventListener("click", () => {
    getElementShop.classList.toggle('active');
    getBagShop.classList.toggle('active');
})

getButtonsElemntsIconsShop.addEventListener('click', () => {
    getElementShop.classList.toggle('active');
    getBagShop.classList.toggle('active');
    popupContainerFill()
})
bagShoppingClose.addEventListener("click", () => {
    getElementShop.classList.toggle('active');
    getBagShop.classList.toggle('active');
})



function toNum(str) {
    const num = parseFloat(str);
    return num;
}

function toCurrency(num) {
    const format = new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB",
        minimumFractionDigits: 0,
    }).format(num);
    return format;
}

class Product {
    imageSrc;
    name;
    price;
    group;
    weight;
    id;
    num = 1;
    constructor(card) {
        this.imageSrc = card.querySelector(".catalog-content-list-center").children[0].src;
        this.name = card.querySelector(".catalog-content-top-item-title").innerText;
        this.price = card.querySelector(".catalog-content-bottom-item-price").innerText;
        this.group = card.querySelector(".catalog-content-group").innerText;
        this.weight = card.querySelector(".catalog-content-product-weight").innerText;
        this.id = card.getAttribute("id");
    }
}

const cartNum = document.querySelector(".header-user-items-coop-counter");
const cardAddArr = Array.from(document.querySelectorAll(".catalog-content-bottom-item-button"))
const popupCartBlock = document.querySelector(".cart-block");

class Cart {
    products;
    constructor() {
        this.products = [];
    }
    get count() {
        return this.products.length;
    }
    addProduct(product) {
        this.products.push(product);
    }
    removeProduct(index) {
        this.products.splice(index, 1);
    }
    get cost() {
        const prices = this.products.map((product) => {
            return (toNum(product.price) * toNum(product.num));
        })
        const sum = prices.reduce((acc, num) => {
            return acc + num;
        }, 0);
        return sum;
    }
}

const myCart = new Cart();

if (localStorage.getItem("cart") == null) {
    localStorage.setItem("cart", JSON.stringify(myCart))
}

const savedCart = JSON.parse(localStorage.getItem("cart"));
myCart.products = savedCart.products;
cartNum.textContent = myCart.count;

myCart.products = cardAddArr.forEach((cardAdd) => {
    cardAdd.addEventListener("click", (e) => {
        e.preventDefault();
        const card = e.target.closest(".catalog-content-list");
        const product = new Product(card);
        const savedCart = JSON.parse(localStorage.getItem("cart"));
        myCart.products = savedCart.products;
        const productId = product.id;
        if ((myCart.products.length == 0)) {
            myCart.addProduct(product);
        } else {
            let check = false;
            for (const arr of myCart.products) {
                if (arr.id == productId) {
                    arr.num = arr.num + 1;
                    check = true;
                }
            }
            if (check == false) {
                myCart.addProduct(product);
            }
        }
        localStorage.setItem("cart", JSON.stringify(myCart));
        cartNum.textContent = myCart.count;
        popupContainerFill()
        const addCartButton = card.querySelector(".catalog-content-bottom-button");
        const removeCartButton = card.querySelector(".catalog-content-bottom-item");
        addCartButton.setAttribute("data-add-cart-button", product.id);
        removeCartButton.setAttribute("data-remove-cart-button", product.id)
        addCartButton.classList.add("active");
        removeCartButton.classList.add("active");
        addCartButton.addEventListener("click", () => {
            getElementShop.classList.toggle('active');
            getBagShop.classList.toggle('active');
            popupContainerFill()
        })
        console.log(myCart);
    })
})

function popupContainerFill() {
    popupCartBlock.innerHTML = null;
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    myCart.products = savedCart.products;
    if (myCart.products.length == 0) {
        const cartEmpty = document.querySelector(".bag-shopping-empty");
        cartEmpty.classList.add("active")
    } else {
        const cartEmpty = document.querySelector(".bag-shopping-empty");
        cartEmpty.classList.remove("active")
        const productsHTML = myCart.products.map((product) => {
        const productItem = document.createElement("li");
        productItem.classList.add("cart-list");

        const productWrap1 = document.createElement("div");
        productWrap1.classList.add("cart-list-image-center");

        const productImage = document.createElement("img");
        productImage.classList.add("img-fluid", "cart-list-image");
        productImage.setAttribute("src", product.imageSrc);

        const productWrap2 = document.createElement("div");
        productWrap2.classList.add("cart-list-info");

        const productGroup = document.createElement("h3");
        productGroup.classList.add("cart-list-info-groop");
        productGroup.innerHTML = product.group;

        const productName = document.createElement("h2");
        productName.classList.add("cart-list-info-name");
        productName.innerHTML = product.name;

        const productWeight = document.createElement("p");
        productWeight.classList.add("cart-list-info-weight");
        productWeight.innerHTML = product.weight;

        const productWrap3 = document.createElement("div");
        productWrap3.classList.add("cart-list-item");

        const productWrap3Item = document.createElement("div");
        productWrap3Item.classList.add("cart-list-item-top");
        productWrap3Item.setAttribute("id", `${product.id}-cart`);

        const productMinus = document.createElement("div");
        productMinus.classList.add("cart-list-item-minus");
        productMinus.innerHTML = "-";
        productMinus.setAttribute("data-minus-id", product.id);

        productMinus.addEventListener("click", (e) => {
            e.preventDefault();
            let minusItem = e.target.closest(".cart-list-item-minus");
            let minusItemId = minusItem.getAttribute("data-minus-id");
            let index = myCart.products.findIndex(el => el.id === minusItemId);
            myCart.products[index].num = toNum(myCart.products[index].num) - 1;
            if (myCart.products[index].num == 0) {
                myCart.removeProduct(index);
                let addCartButton = document.querySelector(`[data-add-cart-button="${minusItemId}"]`);
                let removeCartButton = document.querySelector(`[data-remove-cart-button="${minusItemId}"]`);
                addCartButton.classList.remove("active");
                removeCartButton.classList.remove("active");
            }
            localStorage.setItem("cart", JSON.stringify(myCart));
            cartNum.textContent = myCart.count;
            popupContainerFill()
        })

        const productPlus = document.createElement("div");
        productPlus.classList.add("cart-list-item-plus");
        productPlus.innerHTML = "+";
        productPlus.setAttribute("data-plus-id", product.id);

        productPlus.addEventListener("click", (e) => {
            e.preventDefault();
            let plusItem = e.target.closest(".cart-list-item-plus");
            let plusItemId = plusItem.getAttribute("data-plus-id");
            let index = myCart.products.findIndex(el => el.id === plusItemId);
            myCart.products[index].num = toNum(myCart.products[index].num) + 1;
            localStorage.setItem("cart", JSON.stringify(myCart));
            cartNum.textContent = myCart.count;
            popupContainerFill()
        })

        const productCounter = document.createElement("div");
        productCounter.classList.add("cart-list-item-counter");
        productCounter.innerHTML = product.num;

        const productDelete = document.createElement("div");
        productDelete.classList.add("cart-list-item-remove");
        productDelete.setAttribute("data-delete-id", product.id);

        productDelete.addEventListener("click", (e) => {
            e.preventDefault();
            let deleteItem = e.target.closest(".cart-list-item-remove");
            let deleteItemId = deleteItem.getAttribute("data-delete-id");
            let index = myCart.products.findIndex(el => el.id === deleteItemId);
            myCart.removeProduct(index);
            let addCartButton = document.querySelector(`[data-add-cart-button="${deleteItemId}"]`);
            let removeCartButton = document.querySelector(`[data-remove-cart-button="${deleteItemId}"]`);
            addCartButton.classList.remove("active");
            removeCartButton.classList.remove("active");
            localStorage.setItem("cart", JSON.stringify(myCart));
            cartNum.textContent = myCart.count;
            popupContainerFill()
        })

        const productDeleteWrap1 = document.createElement("button");
        productDeleteWrap1.classList.add("hamburger", "active");

        const productDeleteWrap2 = document.createElement("span");
        productDeleteWrap2.classList.add("hamburger-box", "hamburger-close-box");

        const productDeleteWrap3 = document.createElement("span");
        productDeleteWrap3.classList.add("hamburger-inner", "hamburger-close-reg-inner");

        const productPrice = document.createElement("div");
        productPrice.classList.add("cart-list-item-price")
        productPrice.innerHTML = toCurrency((toNum(product.price) * product.num));

        productItem.appendChild(productWrap1);
        productItem.appendChild(productWrap2);
        productItem.appendChild(productWrap3);
        productWrap1.appendChild(productImage);
        productWrap2.appendChild(productGroup);
        productWrap2.appendChild(productName);
        productWrap2.appendChild(productWeight);
        productWrap3.appendChild(productWrap3Item);
        productWrap3.appendChild(productPrice);
        productWrap3Item.appendChild(productMinus);
        productWrap3Item.appendChild(productCounter);
        productWrap3Item.appendChild(productPlus);
        productWrap3Item.appendChild(productDelete);
        productDelete.appendChild(productDeleteWrap1);
        productDeleteWrap1.appendChild(productDeleteWrap2);
        productDeleteWrap2.appendChild(productDeleteWrap3);

        return productItem;
    })

    const cartTitle = document.createElement("h2");
    cartTitle.classList.add("cart-block-title");
    cartTitle.innerText = "Корзина";

    const popupProductList = document.createElement("ul");
    popupProductList.classList.add("cart-block-content");

    popupCartBlock.appendChild(cartTitle);
    popupCartBlock.appendChild(popupProductList);

    productsHTML.forEach((productHTML) => {
        popupProductList.appendChild(productHTML);
    });

    const cartBlockItem1 = document.createElement("div");
    cartBlockItem1.classList.add("cart-block-item");

    const cartBlockItem1Text = document.createElement("div");
    cartBlockItem1Text.classList.add("cart-block-item-text");
    cartBlockItem1Text.innerText = "Сумма продуктов";

    const cartBlockItem1Line = document.createElement("div");
    cartBlockItem1Line.classList.add("cart-block-item-line");

    const cartBlockItemPrice = document.createElement("div");
    cartBlockItemPrice.classList.add("cart-block-item-price");
    cartBlockItemPrice.innerHTML = toCurrency(myCart.cost);

    const cartBlockTotal = document.createElement("div");
    cartBlockTotal.classList.add("cart-block-total");

    const cartBlockTotalText = document.createElement("div");
    cartBlockTotalText.classList.add("cart-block-total-text");
    cartBlockTotalText.innerText = "Итого";

    const cartBlockTotalPrice = document.createElement("div");
    cartBlockTotalPrice.classList.add("cart-block-total-price");
    cartBlockTotalPrice.innerHTML = toCurrency(myCart.cost);

    const cartBlockButton = document.createElement("button")
    cartBlockButton.classList.add("cart-block-button");
    cartBlockButton.innerText = "Оформить заказ";

    popupCartBlock.appendChild(cartBlockItem1);
    popupCartBlock.appendChild(cartBlockTotal);
    popupCartBlock.appendChild(cartBlockButton);
    cartBlockItem1.appendChild(cartBlockItem1Text);
    cartBlockItem1.appendChild(cartBlockItem1Line);
    cartBlockItem1.appendChild(cartBlockItemPrice);
    cartBlockTotal.appendChild(cartBlockTotalText);
    cartBlockTotal.appendChild(cartBlockTotalPrice);
    }
}
