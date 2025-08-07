const passwordView = document.querySelectorAll(".password-view");

passwordView.forEach((btnView) => {
    btnView.addEventListener("click", (e) => {
        e.preventDefault();
        const itemBlock = e.target.closest(".password")
        const itemInpet = itemBlock.querySelector(".registration-input-item")
        const iconsItem = itemBlock.querySelector(".fa-solid")
        console.log(iconsItem)
        if (itemInpet.getAttribute('type') == 'password') {
            itemInpet.setAttribute('type', 'text');
            iconsItem.className += " fa-eye"
            iconsItem.classList.remove("fa-eye-slash")
        } else {
            itemInpet.setAttribute('type', 'password');
            iconsItem.className += " fa-eye-slash"
            iconsItem.classList.remove("fa-eye")
        }
    })
})