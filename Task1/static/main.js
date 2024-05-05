//1. Document Manipulation with JavaScript

let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

function displayProducts() {
    let container = document.getElementById("container");

    products.forEach(product => {
        let productDiv = document.createElement("list");
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p><strong>Price:</strong> $${product.price}</p>
            <p><strong>Description:</strong> ${product.description}</p>
        `;
        container.appendChild(productDiv);
    });
}

displayProducts();

document.addEventListener("DOMContentLoaded", () => {
    alert("You will now see our available products")
})

// 2. Form Manipulation with JavaScript