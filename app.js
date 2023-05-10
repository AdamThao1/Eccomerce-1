//home slider page

const productContainers = document.querySelectorAll('.product-container');
const nxtBtn = document.querySelectorAll('.nxt-btn');
const preBtn = document.querySelectorAll('.pre-btn');
//line 2 selects all the elements in the product container and stores them in the variable
//line 3-4 selects the elements in the nxt/pre button and stores them in their own vairable
productContainers.forEach(function(item, i) { //loops through each product container with this function
    let containerDimensions = item.getBoundingClientRect(); //this would get the dimensions
    let containerWidth = containerDimensions.width; //this would get the width

    nxtBtn[i].addEventListener('click', function() { //event listeners for the click on the button
        item.scrollLeft += containerWidth; //when button is clicked it would scroll button to the right
    });

    preBtn[i].addEventListener('click', function() { //event listners for the click on the button
        item.scrollLeft -= containerWidth; //when button is click it would scroll button to the left
    });
});

//responsives to home page
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

//adding JSON

let http = new XMLHttpRequest();

http.open('get', 'image.json', true);

http.send();

http.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let products = JSON.parse(this.responseText);
        let output = "";
        for(let item of products){
            output += `
                <div class="product">
                    <img src="${item.image}" alt="${item.image}">
                    <p class="title">${item.title}</p>
                    <p class="description">${item.description}</p>
                    <p class="price">
                        <span>${item.price}</span>
                    </p>
                    <p href="#" class="Shop">Add to cart</p>
                </div>
            `;
        }
        document.querySelector(".products").innerHTML = output;
    }
}