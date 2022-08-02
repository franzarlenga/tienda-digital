function cardMaker() {
    cart.forEach((product) => {
        document.getElementById("cards-modal").innerHTML += `<div>
            <p>${product.id}
            - ${product.title}
            - <img src="${product.img}" style="width:30px">
            - ${product.price}
            - <button>Sacar del carrito</button>
            </div>`
    })
    
}


const products = [
    {
        id:1,
        title:"iPhone 13",
        img: "../imagenes/ip13.png",
        price: 1200
    },
    {
        id:2,
        title:"iPhone 12",
        img: "../imagenes/ip12.png",
        price: 1000
    },
    {
        id:3,
        title:"iPhone xr",
        img: "../imagenes/ipxr.png",
        price: 950
    },
];

products.forEach((products) => {
    const idButton = `add-cart${products.id}` 
    document.getElementById("seccion-card").innerHTML += `
    <div class="phones">
        <div class="phoneBox">
        <img src="${products.img}" alt="${products.id}">
        <ul class="actions">
            <li>
            <i class="fa-solid fa-cart-shopping"></i>
            <span>Agregar al carro</span>
            </li>
            <li>
            <i class="fa-solid fa-heart"></i>
            <span>Favoritos</span>
            </li>
            <li>
            <i class="fa-solid fa-eye"></i>
            <span>Ver detalles</span>
            </li>
        </ul>
        </div>
        <div class="content">
        <div class="phoneName">
            <h3>${products.title}</h3>
        </div>
        <div class="price">
            <h2>${products.price}</h2>
        </div>
        </div>
        </div>`;
})

products.forEach((products) => {
    const idButton = `add-cart${products.id}`
    document.getElementById(idButton).addEventListener('click', () => {
        alert(`${products.title} added successfully to cart`);
    });
})

/* products.forEach((product) => {
    const idButton = `add-cart${product.id}` 
    document.getElementById(idButton).addEventListener('click', () => {
        carrito.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        const total = cart.reduce((acumulador, producto) => acumulador + product.price, 0);
        document.getElementById("cart-total").innerHTML = `${cart.length} - $${total}`;
        document.getElementById("cart-elements").innerHTML = ""
        carrito.forEach((product) => {
            document.getElementById("cart-elements").innerHTML += `<tr>
                <th scope="row">${product.id}</th>
                <td>${product.title}</td>
                <td><img src="${product.img}" style="width:200px"></td>
                <td>${product.price}</td>
                <td><button>Sacar del carrito</button></td>
            </tr>`
        })
    })
}); */