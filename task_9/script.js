// Product Array
let products = []
let cart = []

// Fetch Products
async function getProducts() {
    let response = await fetch("https://fakestoreapi.com/products")
    let data = await response.json()

    products = data;
    showProducts(products)
}

getProducts()


// Display Products
function showProducts(productList) {

    let container = document.getElementById("products")
    container.innerHTML = ""

    if (productList.length == 0) {
        container.innerHTML = "<h2>No Products Found</h2>"
        return
    }

    productList.forEach(function (product) {

        let card = document.createElement("div")
        card.className = "card"

        card.innerHTML = `
            <img src="${product.image}" class="image" width="150">
            <h3>${product.title}</h3>
            <p>$${product.price}</p>

            <button class="details">View Details</button>
            <button class="cart">Add To Cart</button>
        `

        card.querySelector(".image").onclick = function () {
            openModal(product)
        }

        card.querySelector(".details").onclick = function () {
            openModal(product)
        }

        card.querySelector(".cart").onclick = function () {
            addToCart(product.id)
        }

        container.appendChild(card)

    })

}


// Search Products

let search = document.getElementById("search")

search.addEventListener("keyup", function () {

    let value = search.value.toLowerCase();

    let result = products.filter(function (item) {
        return item.title.toLowerCase().includes(value)
    })

    showProducts(result)

})


// Category Filter

function filterCategory(category) {

    if (category == "all") {
        showProducts(products);
        return
    }

    let result = products.filter(function (item) {
        return item.category == category;
    })

    showProducts(result)

}


// Price Sorting

document.getElementById("low").onclick = function () {

    let sorted = [...products]

    sorted.sort(function (a, b) {
        return a.price - b.price;
    })

    showProducts(sorted)

};

document.getElementById("high").onclick = function () {

    let sorted = [...products]

    sorted.sort(function (a, b) {
        return b.price - a.price;
    })

    showProducts(sorted)

};


// Product Details

function openModal(product) {

    document.getElementById("modal").style.display = "block"

    document.getElementById("img").src = product.image
    document.getElementById("title").innerText = product.title
    document.getElementById("description").innerText = product.description
    document.getElementById("price").innerText = "Price : $" + product.price
    document.getElementById("rating").innerText = "Rating : " + product.rating.rate
    document.getElementById("category").innerText = "Category : " + product.category

}

document.getElementById("close").onclick = function () {
    document.getElementById("modal").style.display = "none"
}


// Shopping Cart

function addToCart(id) {

    let product = products.find(function (item) {
        return item.id == id;
    });

    let alreadyPresent = cart.find(function (item) {
        return item.id == id;
    });

    if (alreadyPresent) {

        alreadyPresent.quantity++;

    } else {

        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: 1
        })

    }

    updateCart()

}


// Update Cart

function updateCart() {

    let count = 0;
    let total = 0

    let output = ""

    cart.forEach(function (item) {

        count += item.quantity

        let itemTotal = item.price * item.quantity

        total += itemTotal

        output += `
            <div>
                <h4>${item.title}</h4>
                <p>Quantity : ${item.quantity}</p>
                <p>Total : $${itemTotal.toFixed(2)}</p>
            </div>
        `

    })

    output += `<h2>Grand Total : $${total.toFixed(2)}</h2>`

    document.getElementById("cart").innerHTML = output
    document.getElementById("count").innerText = count

}
