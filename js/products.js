fetch('./json/products.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    

    for(let i=0; i<data.length; i++) {
        const id = data[i].id;
        const img = data[i].img;
        const name = data[i].name;
        const description = data[i].description;
        const price = data[i].price;


        document.getElementById("infoContainer").innerHTML +=
            '<div class="info-items">' +
                    '<div class="info-image"><img src="'+ img +'" alt="'+ description +'"/></div>' +
                    '<div class="info-description">'+ name +'</div>' +
                    '<div class="info-price">PHP '+ price +'</div>' +
                    '<div class="add"><button class="btn-add-cart" onclick="addToCart('+id+', `'+name+'`, `'+price+'`)">'+
                    'Add to cart</button></div>'
            '</div>'                
    }

    
});

//SHOP ----------------------------
const cartLink = document.querySelector('.open-cart');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const checkOutBtn = document.querySelector('.btn-check-out');
const closeModalBtn = document.querySelector('.btn-close');

const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

cartLink.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
checkOutBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

let counter = 1;
function addToCart(id, name, price) {
    alert(name + " added to cart!");
    
    let cart = {
        "id" : id,
        "name" : name,
        "price" : price,
    }
    console.log(cart);

    document.getElementById("count-items").innerHTML = counter + " items";
    document.getElementById("order").innerHTML +=
            '<li class="item">' + name + '   -----------------------    PHP  ' + price +'</li>';
    counter= counter+1;   
};
