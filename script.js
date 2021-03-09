 $('.input-group.date').datepicker({format: "dd.mm.yyyy"});



class Order{
	constructor(newTotalPrice, newCustomer, newPayement){
		this.totalPrice = newTotalPrice;
		this.customer = newCustomer;
		this.payement = newPayement;
		this.products = [];
	}
}

class Customer{
	constructor(newFamilyName, newSurname, newAdress){
		this.familyName = newFamilyName; 
		this.surname = newSurname;
		this.adress= newAdress;
	}
}

 //Fonctions://
//L'utilisateur sur la page d'accueil, peut "aimer" le produit=> vers wishlist en haut de page.
//L'utilisateur sur la page d'acceuil peut ajouter a son panier en cliquant sur l'icone le produit s'ajoute au panier en haut 
//de la page d'accueil un nombre s'affiche devant le panier. 
//L'utilisateur sur la page d'accueil peut partager le produit en cliquant sur l'icone, une fenêtre s'ouvre et il peut choisir 
// quel moyen de diffusion. 

//l'utilisateur a selectioné un produit, il aarive sr la fiche produit, au clic du bouton ajouter a mon panier, 
//il est renvoyé a la page panier, unresume du produit et doit remplir un formulaire. 

function addCart(cartEvent){//je veux que cette fonction ajoute le produit choisit par l'utilisateur.
  let tableHaute;
  let myOrder = new Order(tableHaute);
}


const cart = document.getElementById('add-cart-1');
cart.addEventListener('click', addCart(cartEvent){

};


class Order{
	constructor(product){
		this.totalPrice = 0;
		this.customer = null;
		this.payement = null;
		this.products = [];
	}
	//constructor(newTotalPrice, newCustomer, newPayement){
		//this.totalPrice = newTotalPrice;
		//this.customer = newCustomer;
		//this.payement = newPayement;
		//this.products = [];
	//}
}



 //page panier,En haut de page, l'informaton du produit et du prix + résumé + photo de celui ci apparait en haut de page=> faire une card avec
 // un objet JS qui montre l'objet choisit par l'utilisateur.
 class Product{
 	constructor(newId,newName, newPrice, newDescription, newimageURL){
 		this.id = newId;
        this.name = newName;
 		this.price = newPrice;
        this.description = newDescription;
        this.imageURL = newimageURL;
 	}
 }

let tableHaute = new Product(
  'Table haute en bois', 
  125,
  'la table haute lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!')

let table = new Product(
	'Table',
	250,
	'Table en chêne lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.')

let tableRonde = new Product(
	'Table ronde',
	100,
	'Table ronde lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!')

let etagere = new Product(
	'Etagère',
	120,
	'Etagère en bois lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!')

let chaiseVintage = new Product(
	'Chaise vinage'
	140,
	'Chaise vintage lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.')



 //1) Quand l'utilisateur clique sur le bouton "acheter ma commande!"
 //2) Vérification des champs obligatoires du formulaire.
 function verification(){}
 // si champs mal remplis, l'utilisateur reste sur la page avec des messages d'erreurs sur les champs concernés.
 // si champs bien remplis, l'utilisateur est renvoyé vers la page remerciement.






//1) Quand l'utilisateur est envoyé sur le page remerciement.
//2) Un identifiant de comande est créé. 
//(Pour id: System.Guid  guid = System.Guid.NewGuid ();
// String id = guid.ToString();)
function aléatoire(){
	return' Votre identifiant de commande:' +Date.now()+ Math.round(Math.random()*1000000);
}

document.getElementById('order-id').innerHTML = aléatoire();

//3) Un résumé qui change en fonction du produit choisit de sa commande est créé. Photo change en fonction du produit choisit 
//+ prix total commande en fonction du produit choisit.


//Construire et envoyer un requête HTTP avec AJAX.

var request = new XMLHttpRequest();
request.onreadystatechange = function(){
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        console.log(response.current_condition.condition);
    }
};
 request.open("GET", "http://localhost:3000/api/furniture");
 request.send();


//const btn = document.getElementById('ask-weather');
// btn.addEventListener('click', askweather);

//function askweather (){
  
  //var request = new XMLHttpRequest();
//request.onreadystatechange = function() {
    //if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        //var response = JSON.parse(this.responseText);
        //// console.log(response.current_condition.condition);
      //var result = document.getElementById('weather-result');
      //result.innerHTML = (response.current_condition.condition);
    //}
//};
  //request.open('GET','https://www.prevision-meteo.ch/services/json/paris');
    //request.send();
//};







