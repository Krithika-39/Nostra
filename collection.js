function closeMessage() {
    document.getElementById("messageBox").style.display = "none";
}


let checkboxes = document.querySelectorAll(".types")
let products = document.querySelectorAll(".dressshow")

checkboxes.forEach(function (box) {

    box.addEventListener("change", filterProducts)

})

function filterProducts() {

    let selected = []

    checkboxes.forEach(function (box) {

        if (box.checked) {
            selected.push(box.value)
        }

    })

    products.forEach(function (product) {

        let category = product.dataset.type

        let show = selected.every(function (value) {

            return category.includes(value)

        })

        if (selected.length === 0) {
            product.style.display = "block"
        }
        else {
            product.style.display = show ? "block" : "none"
        }

    })

}

let searchInput = document.getElementById("search")
let dresses = document.querySelectorAll(".dressshow")

searchInput.addEventListener("keyup", function () {

    let enteredValue = searchInput.value.toLowerCase()

    dresses.forEach(function (product) {

        let productName = product.querySelector("h1").textContent.toLowerCase()

        if (productName.includes(enteredValue)) {
            product.style.display = "block"
        }
        else {
            product.style.display = "none"
        }

    })

})

function openMenu() {
    document.getElementById("popupMenu").style.right = "0"
}

function closeMenu() {
    document.getElementById("popupMenu").style.right = "-60%"
}

