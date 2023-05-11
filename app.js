//home slider page

const productContainers = document.querySelectorAll('.product-container');
const nxtBtn = document.querySelectorAll('.nxt-btn');
const preBtn = document.querySelectorAll('.pre-btn');
//line 2 selects all the elements in the product container and stores them in the variable
//line 3-4 selects the elements in the nxt/pre button and stores them in their own vairable
productContainers.forEach(function(item, i) { //loops through each product container with this function
  const containerDimensions = item.getBoundingClientRect(); //this would get the dimensions
  const containerWidth = containerDimensions.width; //this would get the width

  nxtBtn[i].addEventListener('click', function() { //event listeners for the click on the button
    item.scrollLeft += containerWidth; //when button is clicked it would scroll button to the right
  });  
  preBtn[i].addEventListener('click', function() { //event listners for the click on the button
    item.scrollLeft -= containerWidth; //when button is click it would scroll button to the left
  });
});

//responsives to home page
const bar = document.getElementById('bar'); //get 3 constants that gets the html file with ID's
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar) { //if bar is click then it would add the slider
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
} //this can only look visualized with css
if(close) { //if close is clicked then it would remove the slider
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
}

//adding JSON

const http = new XMLHttpRequest(); //this would created a new instance of the XMLHttpRequest

http.open('get', 'image.json', true); //this would send a GET request to retireve the JSON data

http.send(); 

http.onload = function(){ //sets a Callback function when response is complete
  if(this.readyState == 4 && this.status == 200){ //onload gets called when state is 4 and status is 200
    const products = JSON.parse(this.responseText); //then JSON data is parsed into the javascript objects
    let output = "";
    for(const item of products){
      output += `
      <div class="product">
                    <img src="${item.image}" alt="${item.image}">
                    <p class="title">${item.title}</p>
                    <p class="description">${item.description}</p>
                    <p class="price">
                        <span>${item.price}</span>
                    </p>
                    <p href="#" class="shop">Add to cart</p>
                </div>
            `;
    }
    document.querySelector(".products").innerHTML = output; //this would display html in javascript
  } //it grabs the class ".products" and output it in there
} //this code creates html elements that gets the JSON file then displays on page.