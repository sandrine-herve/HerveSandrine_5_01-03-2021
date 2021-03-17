
//récupération des données dans localStorage//
function recoverCart(choiceProduct) {
let nameBuy = localStorage.getItem('name');
let descriptionBuy =  localStorage.getItem('description');
let priceBuy = localStorage.getItem('price' + "€");
let idBuy = localStorage.getItem('id');
let imageBuy = localStorage.getItem('image');
console.log('récupération panier')


let buyCard = getElementById('buyCard');

let buyImage = document.createElement('img');
buyImage.setAttribute('class','card-img-top img-fluid');
buyCard.appendChild(buyImage);
imgChoice.src = choiceProduct.imageBuy;
imgChoice.alt = choiceProduct.nameBuy;


/*<div class="col-lg-9">

        <div class="card mt-4">
          <img class="card-img-top img-fluid" src="http://placehold.it/900x400" alt="">
          <div class="card-body">
            <h3 class="card-title">Product Name</h3>
            <h4>$24.99</h4>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis molestias iure, ducimus!</p>
            
          </div>
        </div>*/

}
