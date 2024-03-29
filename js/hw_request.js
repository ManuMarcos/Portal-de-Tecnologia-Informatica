import {stock} from "./stock.js";

const shopItems = document.getElementById("shop_items")

function imprimirInventario(inventario){
    for (const hardware of inventario.equipos) {
        const card = document.createElement("div");
        card.classList.add("card", "shop_item");
        card.innerHTML = `
            <img class="shop_item-img" src="${hardware.img}" alt="Card image cap">
            <div class="shop_item-body">
                <h5 class="shop_item-title">${hardware.categoria}</h5>
                <h7>${hardware.marca}</h7>
                <span class="shop_item-span">${hardware.modelo}</span>
                <p class="shop_item-price">$${hardware.precio}</p>
                <a  id=${hardware.marca} class="btn shop_item-btn">Agregar</a>
            </div>`;
        shopItems.appendChild(card);
    }
    for (const licencia of inventario.licencias) {
        const card = document.createElement("div");
        card.classList.add("card","shop_item");
        card.innerHTML = `
            <img class="shop_item-img" src="${licencia.img}" alt="Card image cap">
            <div class="shop_item-body">
                <h5 class="shop_item-title">${licencia.softwareName}</h5>
                <h7>${licencia.type}</h7>
                <span class="shop_item-span">${licencia.renewal}</span>
                <p class="shop_item-price">$${licencia.price}</p>
                <a  id=${licencia.softwareName} class="btn shop_item-btn">Agregar</a>
            </div>`;
        shopItems.appendChild(card);
    }
    const btnsAddCart = document.querySelectorAll(".btn-add-cart");
    agregarEventListener(btnsAddCart);
}

function hardwareToDom(inventario){
    for (const hardware of inventario.equipos) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img class="card-img-top" src="${hardware.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${hardware.categoria}</h5>
                <h6>${hardware.marca}</h6>
                <span class="card-text">${hardware.modelo}</span>
                <p class="card-text">$${hardware.precio}</p>
                <a  id=${hardware.marca} class="btn btn-primary btn-add-cart">Agregar</a>
            </div>`;
        cardsBox.appendChild(card);
    }
    const btnsAddCart = document.querySelectorAll(".btn-add-cart");
    agregarEventListener(btnsAddCart)
}

function softwareToDom(inventario){
    for (const licencia of inventario.licencias) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img class="card-img-top" src="${licencia.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${licencia.softwareName}</h5>
                <h6>${licencia.type}</h6>
                <span class="card-text">${licencia.renewal}</span>
                <p class="card-text">$${licencia.price}</p>
                <a  id=${licencia.softwareName} class="btn btn-primary btn-add-cart">Agregar</a>
            </div>`;
        cardsBox.appendChild(card);
    }
    const btnsAddCart = document.querySelectorAll(".btn-add-cart");
    agregarEventListener(btnsAddCart)
}


imprimirInventario(stock);

const buttons = document.getElementsByClassName("btn-check");

for (const button of buttons) {
    button.addEventListener("click", (e) => {   
        let cardsBox = document.getElementById("cards-box");
        cardsBox.innerHTML = "";
        switch(e.target.value){
            case "all":
                imprimirInventario(stock);
                break;
            case "software":
                softwareToDom(stock);
                break;
            case "hardware":
                hardwareToDom(stock);
                break;
        }
    })
}



let cart = document.getElementById("cart");

function agregarEventListener(btnsAddCart){
    btnsAddCart.forEach(btn => {
        btn.addEventListener("click", (event) => {
            alert(`Agregaste el elemento ${event.target.id} al carrito `);
        })
    });
    
}






