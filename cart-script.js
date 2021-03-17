  
/*
//récupération des données dans localStorage et les mettre dans ma <div class="col-lg-9" id="buy">//
//en suivant template:
//<div class="card mt-4">
    <img class="card-img-top img-fluid" src="http://placehold.it/900x400" alt="">
        <div class="card-body">
           <h3 class="card-title">Product Name</h3>
           <h4>$24.99</h4>
           <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis molestias iure, ducimus!</p>
        </div>
</div>//




function recoverCart(choiceProduct) {
let nameBuy = localStorage.getItem('name');
let descriptionBuy =  localStorage.getItem('description');
let priceBuy = localStorage.getItem('price' + "€");
let idBuy = localStorage.getItem('id');
let imageBuy = localStorage.getItem('image');
console.log('récupération panier')




let buyImage = document.createElement('img');
buyImage.setAttribute('class','card-img-top img-fluid');
buyCard.appendChild(buyImage);
imgChoice.src = choiceProduct.imageBuy;
imgChoice.alt = choiceProduct.nameBuy;
}*/


let buyContainer = document.getElementById('buy');



//Ajouter div class="card mt-4"
let cardBuy = document.createElement('div');
cardBuy.setAttribute('class','card mt-4');
buyContainer.appendChild(cardBuy);

let headingBuy = document.createElement('h2');
headingBuy.setAttribute('class','card-header my-5');
let headingBuy_text = document.createTextNode('Mon Panier');
headingBuy.appendChild(headingBuy_text);
cardBuy.appendChild(headingBuy);

//Rajouter une boucle pour plusieurs produits for ...of

//Ajouter div qui contient élément de mon meuble.
let divBuyFourniture = document.createElement('div');
divBuyFourniture.setAttribute('class','fourniture_buy');
cardBuy.appendChild(divBuyFourniture);

//Ajouter le nom du meuble choisi.
let nameBuy = document.createElement('h3');
let nameBuy_text = document.createTextNode(localStorage[name]);
nameBuy.setAttribute('class','card-title');
divBuyFourniture.appendChild(nameBuy);
nameBuy.appendChild(nameBuy_text);

//Ajouter la photo du produit.
let imgBuy = document.createElement('img');
imgBuy.setAttribute('class','card-img-top img-fluid');
divBuyFourniture.appendChild(imgBuy);
imgBuy.src = "";
imgBuy.alt = "";

//Ajouter le prix du meuble choisi.
let priceBuy = document.createElement('p');
priceBuy.setAttribute('class','description card-text');
let priceBuy_text = document.createTextNode('priceBuy');
priceBuy.appendChild(priceBuy_text);
divBuyFourniture.appendChild(priceBuy);

 let separate = document.createElement('hr');
 divBuyFourniture.appendChild(separate);


//Ajouter bouton pour vider mon pannier.
  let removeCart = document.createElement('a');
  removeCart.setAttribute('class','btn btn-danger mx-5 mt-5 my-5 px-4 py-2');
  removeCart.setAttribute('id','remove-to-cart');
  removeCart.setAttribute('href','index.html');
  let removeCart_text = document.createTextNode('Vider mon panier');
  removeCart.appendChild(removeCart_text);
  buyContainer.appendChild(removeCart);
//appeler la fonction qui videra le panier//
 removeCart.addEventListener('click',function(event){
 	localStorage.clear()});
