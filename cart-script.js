let panier = JSON.parse(localStorage.getItem("monPanier"));
/*console.log(panier.name);*/

let buyContainer = document.getElementById('buy');

//Ajouter div class="card mt-4"
let cardBuy = document.createElement('div');
cardBuy.setAttribute('class','card mt-4');
buyContainer.appendChild(cardBuy);

let headingBuy = document.createElement('h2');

headingBuy.setAttribute('class','card-header');
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
let nameBuy_text = document.createTextNode(panier.name);

nameBuy.setAttribute('class','card-title');
divBuyFourniture.appendChild(nameBuy);
nameBuy.appendChild(nameBuy_text);

//Ajouter la photo du produit.
let imgBuy = document.createElement('img');
imgBuy.setAttribute('class','card-img-top img-fluid');
divBuyFourniture.appendChild(imgBuy);
imgBuy.src = panier.imageUrl;
imgBuy.alt = panier.name;

//Ajouter le prix du meuble choisi.
let priceBuy = document.createElement('p');
priceBuy.setAttribute('class','description card-text');
let priceBuy_text = document.createTextNode(panier.price + "€");
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
