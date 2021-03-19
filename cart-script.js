let panier = null;
//comment mettre des valeurs dans le tableau, le client choisit et les données du poduits vont dans la panier dans le tableau let init.
//mon panier est déja actif. getItem => on veut récuperer les valeurs des objets. 
if (localStorage.getItem('monPanier') !== null ){
console.log('panier OK');
//je crée une variable contenant un tableau qui se remplira des produits choisis.
panier = JSON.parse(localStorage.getItem('monPanier'));

}

/*let panier = JSON.parse(localStorage.getItem("monPanier"));*/
/*console.log(panier.name);*/

let buyContainer = document.getElementById('buy');

//Ajouter div class="card mt-4"
let cardBuy = document.createElement('div');
cardBuy.setAttribute('class','card jumbotron ');
cardBuy.setAttribute('id','card jumbotron ');
buyContainer.appendChild(cardBuy);

let headingBuy = document.createElement('h2');
headingBuy.setAttribute('class','display-4 mt-4');
let headingBuy_text = document.createTextNode('Mon Panier');
headingBuy.appendChild(headingBuy_text);
cardBuy.appendChild(headingBuy);


//Ajouter div qui contient élément de mon meuble.
let divBuyFourniture = document.createElement('div');
divBuyFourniture.setAttribute('class','fourniture_buy row jumbotron ');
divBuyFourniture.setAttribute('id','tableau');
cardBuy.appendChild(divBuyFourniture);

let somme = 0;

//Rajouter une boucle pour plusieurs produits for ...of
if (panier !== null){
	for ( let product of panier) {

//Ajouter la photo du produit.
let imgBuy = document.createElement('img');
imgBuy.setAttribute('class','rounded float-left img-fluid img-thumbnail');
divBuyFourniture.appendChild(imgBuy);
imgBuy.src = product.imageUrl;
imgBuy.alt = product.name;

//Ajouter le nom du meuble choisi.
let nameBuy = document.createElement('h3');
let nameBuy_text = document.createTextNode(product.name);
nameBuy.setAttribute('class','card-title mx-3 font-weight-normal text-right');
divBuyFourniture.appendChild(nameBuy);
nameBuy.appendChild(nameBuy_text);

let idBuy = document.createElement('p');
let idBuy_text = document.createTextNode("Ref :" + product._id);
idBuy.setAttribute('class','idBuy mx-3');
idBuy.appendChild(idBuy_text);
divBuyFourniture.appendChild(idBuy);


//Ajouter le prix du meuble choisi.
let priceBuy = document.createElement('p');
priceBuy.setAttribute('class','description card-text mx-3');
let priceBuy_text = document.createTextNode("Prix:" + product.price + "€");
priceBuy.appendChild(priceBuy_text);
divBuyFourniture.appendChild(priceBuy);

//je récupere le prix de mon article a chaque boucle.
somme += product.price;
}
//fin bouble for
//j'affiche le resultat de ma somme.
let TotalPrice = document.createElement('p');
TotalPrice.setAttribute('class','description font-weight-bold card-text mx-5 text-left ');
TotalPrice.setAttribute('id','TotalPrice');
let TotalPrice_text = document.createTextNode("Prix Total :" + somme + "€");
TotalPrice.appendChild(TotalPrice_text);
divBuyFourniture.appendChild(TotalPrice);
}
// Mettre les bouton dans une meme div aligner.
let btnDiv = document.createElement('div');
btnDiv.setAttribute('class','btnDiv row mx-5 ');
divBuyFourniture.appendChild(btnDiv);

//Ajouter un bouton ajouter a mon panier.
  let addCartAgain = document.createElement('a');
  addCartAgain.setAttribute('class','btn btn-primary mx-4 mt-5 my-5 px-4 py-2');
  addCartAgain.setAttribute('id','addCartAgain');
  addCartAgain.setAttribute('href','index.html');
  let addCartAgain_text = document.createTextNode('Retourner à mes achats');
  addCartAgain.appendChild(addCartAgain_text);
  btnDiv.appendChild(addCartAgain);
  

//Ajouter bouton pour vider mon pannier.
  let removeCart = document.createElement('a');
  removeCart.setAttribute('class','btn btn-danger mx-4 mt-5 my-5 px-4 py-2');
  removeCart.setAttribute('id','remove-to-cart');
  removeCart.setAttribute('href','index.html');
  let removeCart_text = document.createTextNode('Vider mon panier');
  removeCart.appendChild(removeCart_text);
  btnDiv.appendChild(removeCart);
//appeler la fonction qui videra le panier//
 removeCart.addEventListener('click',function(event){
 localStorage.clear()});

 //Ajouter un bouton pour valider ma commande, qui envoie vers la page gratitude.html.
  let validateOrder = document.createElement('a');
  validateOrder.setAttribute('class','btn btn-success col-12 my-5');
  validateOrder.setAttribute('id','validateOrder');
  validateOrder.setAttribute('type','submit');
  validateOrder.setAttribute('value','Ok');
  /*validateOrder.setAttribute('href','gratitude.html');*/
  let validateOrder_text = document.createTextNode('Valider ma commande');
  validateOrder.appendChild(validateOrder_text);
  btnDiv.appendChild(validateOrder);
  /*validateOrder.addEventListener('click',validateForm());
  */

/*
  function validateForm(){
  	let formulaire = document.forms['form'];
//vérifications du nom de l'utilisateur.
  	if (formulaire.elements'[name-customer]'.value){
  		return true;
  	} 

  	else {
        alert('Vérifier les champs!')
  		return false;
  	}
  	}
  


//Tenttive de valider le nom de l'utilisateur.
 let nameCustomer = document.getElementById("name-customer");

nameCustomer.addEventListener("keyup", function (event) {
  if(nameCustomer.validity.typeMismatch) {
    nameCustomer.setCustomValidity("J'attend un nom, mon cher !");
  } else {
    nameCustomer.setCustomValidity("");
  }
});

//Tenttive de valider le numéro de telephone  l'utilisateur.
 let telCustomer = document.getElementById("phone");

telCustomer.addEventListener("keyup", function (event) {
  if(telCustomer.validity.validationMessage) {
    telCustomer.setCustomValidity("J'attend un nom, mon cher !");
  } else {
    telCustomer.setCustomValidity("");
  }
});*/

//Validation de mail.
let email = document.getElementById('Email');


email.addEventListener("input", function (event) {
  // Chaque fois que l'utilisateur saisit quelque chose
  // on vérifie la validité du champ e-mail.
  if (email.validity.valid) {
    // S'il y a un message d'erreur affiché et que le champ
    // est valide, on retire l'erreur
    error.innerHTML = ""; // On réinitialise le contenu
    error.className = "error"; // On réinitialise l'état visuel du message
  }
}, false);
form.addEventListener("submit", function (event) {
  // Chaque fois que l'utilisateur tente d'envoyer les données
  // on vérifie que le champ email est valide.
  if (!email.validity.valid) {

    // S'il est invalide, on affiche un message d'erreur personnalisé
    error.innerHTML = "J'attends une adresse e-mail correcte, mon cher !";
    error.className = "error active";
    // Et on empêche l'envoi des données du formulaire
    event.preventDefault();
  }
}, false);