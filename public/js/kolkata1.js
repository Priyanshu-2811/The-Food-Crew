let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Margarita',
        image: '/image/kp1.jpeg',
        price: 100
    },
    {
        id: 2,
        name: 'Cheese Corn',
        image: '/image/kp2.jpeg',
        price: 60
    },
    {
        id: 3,
        name: 'All Veggie',
        image: '/image/kp3.jpeg',
        price: 200
    },
    {
        id: 4,
        name: 'All Cheese',
        image: '/image/kp4.jpeg',
        price: 120
    },
    {
        id: 5,
        name: 'Garlic Bread Sticks',
        image: '/image/mp5.jpeg',
        price: 100
    },
    {
        id: 6,
        name: 'Stuffed-Garlic Bread',
        image: '/image/mp6.jpeg',
        price: 30
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
function proceedToBooking() {
    window.location.href = "reservation";
}
let proceedShopping = document.querySelector('.proceedShopping'); // Select the "Proceed" button

proceedShopping.addEventListener('click', () => {
    let totalPrice = parseFloat(total.innerText.replace(/,/g, '')); // Extract the total price from the UI
    alert(`Total amount in cart: $${totalPrice.toFixed(2)}`); // Display the total amount in a popup
});

proceedShopping.addEventListener('click', () => {
    let totalPrice = parseFloat(total.innerText.replace(/,/g, '')); // Extract the total price from the UI
    
    if (totalPrice === 0) {
        alert("Your cart is empty. Please add items to proceed.");
    } else {
        // Create a popup with the total amount and a "Confirm Order" button
        if (confirm(`Total amount in cart: $${totalPrice.toFixed(2)}. Do you want to confirm your order?`)) {
            // If the user confirms the order, navigate to the "thank you" page
            window.location.href = "thankyou";
        }
    }
});