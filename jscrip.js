let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')
}

menu.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}
// SEARCH
let search = document.getElementById('search');
let boxsearch = document.querySelector('.search');
let card = document.querySelectorAll('.box .card');

search.onclick = () => {
    boxsearch.classList.toggle('open');
    boxsearch.value = '';
    option.style.top = '-1000px';
    card.forEach(item => item.style.display = 'block'); // Khoi phuc lai sp
};
boxsearch.oninput = () => {
    let value = boxsearch.value;
    for (var i = 0; i <= card.length; i++) {
        card[i].style = "display: none";
        let name = card[i].getAttribute('data-title');
        if (name == value.toUpperCase()) {
            card[i].style = "display: block";
        }
        if (value == '') {
            card[i].style = "display: block";
        }
    }

};


//=================== NUMBER ===============
const plus = document.querySelector('.plus'),
    num = document.querySelector('.num'),
    minus = document.querySelector('.minus');

let a = 1;
let b = 1;

plus.addEventListener("click", () => {
    a++;
    a = (a < 10) ? "0" + a : a;
    num.innerHTML = a;
    price.innerHTML = '$' + eval(b + '*' + a) + '.00';
});

minus.addEventListener("click", () => {
    if (a > 1) {
        a--;
        a = (a < 10) ? "0" + a : a;
        num.innerHTML = a;
        price.innerHTML = '$' + eval(b + '*' + a) + '.00';
    }
});

// SIZE
function size(n) {
    document.querySelector('.s_size span').innerHTML = n;
}

// ========OPTION==========

const img = document.querySelector('.option-img img'),
    nameshoe = document.querySelector('.options-text h2'),
    price = document.querySelector('.options-text h3'),
    option = document.querySelector('.options'),
    close = document.querySelector('.options-text .close');

close.onclick = () => {
    option.style.top = '-1000px';
    a = '01';
    num.innerHTML = a;
};

function show(n) {
    switch (n) {
        case 1: {
            img.src = ('./image/shoes1.png');
            nameshoe.innerHTML = 'JORDAN SERIES SE';
            price.innerHTML = '$100.00';
            b = 100;
            break;
        }
        case 2: {
            img.src = ('./image/shoes2.png');
            nameshoe.innerHTML = 'AIR FORCE 1';
            price.innerHTML = '$200.00';
            b = 200;
            break;
        }
        case 3: {
            img.src = ('./image/shoes3.png');
            nameshoe.innerHTML = 'ADIDAS ULTRA 4DFWD';
            price.innerHTML = '$175.00';
            b = 170;
            break;
        }
        case 4: {
            img.src = ('./image/shoes4.png');
            nameshoe.innerHTML = 'NIKE PEGASUS 39';
            price.innerHTML = '$120.00';
            b = 120;
            break;
        }
        case 5: {
            img.src = ('./image/shoes5.png');
            nameshoe.innerHTML = 'AIR MAX EXCEE';
            price.innerHTML = '$150.00';
            b = 150;
            break;
        }
        case 6: {
            img.src = ('./image/shoes6.png');
            nameshoe.innerHTML = 'YEEZY BOOST 350';
            price.innerHTML = '$220.00';
            b = 220;
            break;
        }
        case 7: {
            img.src = ('./image/shoes7.png');
            nameshoe.innerHTML = 'NIKE WAFFLE DEBUT';
            price.innerHTML = '$110.00';
            b = 110;
            break;
        }
        case 8: {
            img.src = ('./image/shoes8.png');
            nameshoe.innerHTML = 'NIKE COURT ROYALE';
            price.innerHTML = '$180.00';
            b = 180;
            break;
        }
        case 9: {
            img.src = ('./image/shoes9.png');
            nameshoe.innerHTML = 'JORDAN MAX BLACK';
            price.innerHTML = '$300.00';
            b = 300;
            break;
        }
        case 10: {
            img.src = ('./image/shoe10.png');
            nameshoe.innerHTML = 'NIKE DUNK HIGH II';
            price.innerHTML = '$250.00';
            b = 250;
            break;
        }
        case 11: {
            img.src = ('./image/shoe11.png');
            nameshoe.innerHTML = 'NIKE REVOLUTION I';
            price.innerHTML = '$125.00';
            b = 125;
            break;
        }
        case 12: {
            img.src = ('./image/shoe12.png');
            nameshoe.innerHTML = 'NIKE WIDE FIT';
            price.innerHTML = '$210.00';
            b = 210;
            break;
        }
    }
    option.style.top = '50%';
    boxcart.classList.remove('active');
    boxsearch.classList.remove('open');
};

// ========== CHAT ==============
const boxchat = document.querySelector('.box-chat');
screen = document.querySelector('.screen');

document.querySelector('.box-chat .close').onclick = () => {
    boxchat.style.right = '-500px';
};

document.querySelector('.chat-text i').onclick = () => {
    let mess = document.createElement("p");
    screen.appendChild(mess);
    mess.innerHTML = document.querySelector('.chat-text input').value;
    document.querySelector('.chat-text input').value = '';
    mess.style = "color: #fff; background: #ff9f0d;float: right";
}
function chat() {
    boxchat.style.right = '5px';
}

// ============== HEART TO PRODUCT ==============
let heart = document.querySelectorAll('.small_card i');
const addHeart =
    heart.forEach(add => {
        add.onclick = () => {
            add.style.color = "#ff0000";
        }
    });

//========== CART ============
let cartIcon = document.getElementById('cart');
let boxcart = document.querySelector('.cart');

cartIcon.onclick = () => {
    boxcart.classList.toggle('active');
    boxsearch.classList.remove('open');
    option.style.top = '-1000px';
};

document.querySelector('#close-Cart').onclick = () => {
    boxcart.classList.remove('active');
};

// Cart Working JS
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', Ready);
}
else {
    Ready();
}

function Ready() {
    // Remove to cart
    // var removeCartBtn = document.querySelectorAll('.remove-cart');
    // for (var i = 0; i<= removeCartBtn.length;i++){
    //     removeCartBtn[i].addEventListener('click', removeCartItem);
    // }

    // Change Quantity
    var quantityInput = document.querySelectorAll('.cart-quantity');
    for (var i = 0; i < quantityInput.length; i++) {
        var input = quantityInput[i];
        input.addEventListener("change", quantityChanged);
    }

    // ADD Cart
    var addCart = document.querySelectorAll('.add-cart');
    for (var i = 0; i <= addCart.length; i++) {
        addCart[i].addEventListener("click", addCartClick);
    }
}

// Buy Button
function buyButton() {
    var cartContent = document.querySelector('.cart-content');
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }
    document.querySelector('.miniBox').style.display = "block";
    updateTotal();
}
// Remove Cart Item
function removeCartItem(event) {
    var btnClick = event.target;
    btnClick.parentElement.remove();
    updateTotal();
}
// // Change Quantity
function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
}
// Add to cart
function addCartClick(event) {
    var btn = event.target;
    var Products = btn.parentElement;
    var title = Products.getElementsByClassName('card-title')[0].innerText;
    var priceCart = Products.getElementsByClassName('card-price')[0].innerText;
    var cartImg = Products.getElementsByClassName('image')[0].src;
    AddProductToCart(title, priceCart, cartImg);
    updateTotal();
}

function AddProductToCart(title, priceCart, cartImg) {
    var CartShopBox = document.createElement('div');
    CartShopBox.classList.add('box-cart');
    var CartItems = document.querySelector('.cart-content');
    var CartItemName = CartItems.getElementsByClassName('cart-title');
    for (var i = 0; i < CartItemName.length; i++) {
        if (CartItemName[i].innerText == title) {
            alert("The product already exists in the cart")
            return;
        }
    }

    var cartBoxContent = `
                        <img src="${cartImg}">
                        <div class="cart-text">
                            <h3 class="cart-title">${title}</h3>
                            <h4 class="cart-price">${priceCart}</h4>
                            <input type="number" value="1" class="cart-quantity">
                        </div>
                        <i class="fas fa-trash remove-cart"></i>`
    CartShopBox.innerHTML = cartBoxContent;
    CartItems.appendChild(CartShopBox);
    CartShopBox.getElementsByClassName('remove-cart')[0].addEventListener('click', removeCartItem);
    CartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);
    updateTotal();
}
// Update Total
function updateTotal() {
    var cartContent = document.querySelector('.cart-content');
    var cartBoxs = cartContent.getElementsByClassName('box-cart');
    var total = 0;
    for (var i = 0; i < cartBoxs.length; i++) {
        var cartBox = cartBoxs[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantity = cartBox.getElementsByClassName('cart-quantity')[0].value;
        var price = parseFloat(priceElement.innerHTML.replace("$", ""));
        total = total + price * quantity;
        document.querySelector('.miniBox h4 span').innerHTML = " Paid $" + total; // Price in miniBox
    }
    document.getElementsByClassName('total')[0].innerHTML = "Total:  $" + total;
}
// ==========================================
// mini box
function buynow(){
    close.onclick();
    document.querySelector('.miniBox').style.display = "block";
}
document.querySelector('.miniBox button').onclick = () =>{
    document.querySelector('.miniBox').style.display = "none";
    document.querySelector('.miniBox h4 span').innerHTML = ''; // Price in miniBox
    boxcart.classList.remove('active'); // Auto Close Cart 
}
// Open navlist in Mobile
document.getElementById('menu-icon').onclick = () =>{
    document.querySelector('.navlist').classList.toggle('open');
}
document.body.onscroll = () =>{
    document.querySelector('.navlist').classList.remove('open');
}