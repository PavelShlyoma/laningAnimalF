const getCharity = document.querySelector(".charity");

const getCharityButton = document.querySelectorAll(".charity-button");

getCharityButton.forEach((buttons) => {
    buttons.addEventListener("click", (e) => {
        e.preventDefault();
        getCharity.scrollIntoView({ behavior: "smooth", block: "start" });
    })
})

const urlParams = new URLSearchParams(window.location.search);

const charity = urlParams.get('charity');

if (charity) {
    getCharity.scrollIntoView({ behavior: "smooth", block: "start" });
}
