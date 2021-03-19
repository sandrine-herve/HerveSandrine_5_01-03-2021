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
  let validateOrder_text = document.createTextNode('Valider mon panier');
  //mettre une ancre qui envoie vers le formulaire.
  validateOrder.appendChild(validateOrder_text);
  btnDiv.appendChild(validateOrder);
  

let formValid = document.getElementById('buy');

//Les variables dont j'ai besoin pour le nom.
let formName = document.getElementById('name');
let missName = document.getElementById('missName');
//regex autorisant que les lettres, les apostrophes, les tirets et les espaces.
//1er partie : commencer soit par une lettre non accentuée en majuscule ou en minuscule, soit par l’un des caractères suivants : « éèîïÉÈÎÏ ».
//2eme partie :  au moins une autre lettre en minuscule ou par l’un des caractères suivants : « éèêàçîï »
let nameValid =  /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

//Les variables dont j'ai besoin pour le prenom.
let formSurname = document.getElementById('surname');
let missSurname = document.getElementById('missSurname');
let surnameValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

//Les variables dont j'ai besoin pour l'adresse.
let formAddress = document.getElementById('address');
let missAddress = document.getElementById('missAddress');

//Les variables dont j'ai besoin pour le code postal.
let formPostal = document.getElementById('postal');
let missPostal = document.getElementById('missPostal');
//let postalValid = /^[0-9] $/;
//Les variables dont j'ai besoin pour la ville.
let formCity = document.getElementById('city');
let missCity = document.getElementById('missCity');
let cityValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

//Les variables dont j'ai besoin pour le pays.
let formCountry = document.getElementById('country');
let missCountry = document.getElementById('missCountry');

//Les variables dont j'ai besoin pour le numero de tel.
let formPhone = document.getElementById('tel');
let missPhone = document.getElementById('missPhone');
let phoneValid = /^[0-9] $/;

//Les variables dont j'ai besoin pour la date.
let formDate = document.getElementById('date');
let missDate = document.getElementById('missDate');

//Les variables dont j'ai besoin pour l'email.
let formMail = document.getElementById('email');
let missMail = document.getElementById('missMail');
let mailValid = /^[\w\-]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)*\.[\w\-]{2,4}$/;

//Les variables dont j'ai besoin pour le mot de passe.
let formPassword = document.getElementById('password');
let missPassword = document.getElementById('missPassword');
let passwordValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/;


formValid.addEventListener('click', function(){
//si control event true.

//appelé ma fonction d'envoie POST.
let products = [];
let contact = {
	firstName: surname.value,
	lastName: name.value,
	
};
const postData = {contact, products};
console.log(postData);



	//envoyer avec la methode fetch post.

});




/*function control(event){

	let resultControl = true;


	//si le champ est vide
	if(formName.validity.valueMissing){
		event.preventDefault();//on bloque le déclenchement de l'évènement.
		missName.textContent = 'Nom manquant !';
		missName.style.color = 'red';
		resultControl = false;
	//si le champ est mal rempli
	} else if (nameValid.test(formName.value) == false) {
		event.preventDefault();
		missName.textContent = 'Format incorrect';
		missName.style.color = 'orange';
		resultControl = false;
	} else {
		missName.textContent = '';
	};
	

    //si le champ est vide
	if (formSurname.validity.valueMissing) {
		event.preventDefault();//on bloque le déclenchement de l'évènement.
		missSurname.textContent = 'Prénom manquant !';
		missSurname.style.color = 'red';
		resultControl = false;
	} else if (surnameValid.test(formName.value) == false) {
		event.preventDefault();
		missSurname.textContent = 'Format incorrect';
		missSurname.style.color = 'orange';
		resultControl = false;
	}else {
		missSurname.textContent = '';
	};

    //si le champ est vide
	if (formAddress.validity.valueMissing) {
		event.preventDefault();//on bloque le déclenchement de l'évènement.
		missAddress.textContent = 'Adresse manquante !';
		missAddress.style.color = 'red';
		resultControl = false;
	} else {
		missAddress.textContent = '';
	};

    //si le champ est vide
	if (formPostal.validity.valueMissing) {
		event.preventDefault();
		missPostal.textContent = ' Code Postal manquant !';
		missPostal.style.color = 'red';
		resultControl = false;
	} else if (postalValid.test(formName.value) == false) {
		event.preventDefault();
		missPostal.textContent = 'Format incorrect';
		missPostal.style.color = 'orange';
		resultControl = false;
	} else {
		missPostal.textContent = '';
	};

    //si le champ est vide
	if (formCity.validity.valueMissing) {
		event.preventDefault();
		missCity.textContent = ' Ville manquante !';
		missCity.style.color = 'red';
		resultControl = false;
	} else if (cityValid.test(formName.value) == false) {
		event.preventDefault();
		missCity.textContent = 'Format incorrect';
		missCity.style.color = 'orange';
		resultControl = false;
	} else {
		missCity.textContent = '';
	};
	
    //si le champ est vide
    if (formPhone.validity.valueMissing) {
		event.preventDefault();
		missPhone.textContent = ' Numéro de téléphone manquant !';
		missPhone.style.color = 'red';
		resultControl = false;
	} else if (phoneValid.test(formName.value) == false) {
		event.preventDefault();
		missPhone.textContent = 'Format incorrect';
		missPhone.style.color = 'orange';
		resultControl = false;
	} else {
		missPhone.textContent = '';
	};

    //si le champ est vide
	if (formDate.validity.valueMissing) {
		event.preventDefault();
		missDate.textContent = ' Date manquante !';
		missDate.style.color = 'red';
		resultControl = false;
	} else {
		missDate.textContent = '';
	};

    //si le champ est vide
	if (formMail.validity.valueMissing) {
		event.preventDefault();
		missMail.textContent = ' Email manquant !';
		missMail.style.color = 'red';
		resultControl = false;
	} else if (mailValid.test(formName.value) == false) {
		event.preventDefault();
		missMail.textContent = 'Format incorrect';
		missMail.style.color = 'orange';
		resultControl = false;
	} else {
		missMail.textContent = '';
	};

    //si le champ est vide
	if (formPassword.validity.valueMissing) {
		event.preventDefault();
		missPassword.textContent = ' Mot de passe manquant !';
		missPassword.style.color = 'red';
		resultControl = false;
	} else if (mailValid.test(formName.value) == false) {
		event.preventDefault();
		missPassword.textContent = 'Le mot de passe doit avoir 8 à 15 caractères, au moins une lettre minuscule, au moins une lettre majuscule, au moins un chiffre, au moins un de ces caractères spéciaux: $ @ % * + - _ !, aucun autre caractère possible: pas de & ni de { par exemple)';
		missPassword.style.color = 'orange';
		resultControl = false;
	} else {
		missPassword.textContent = '';
	};

	return resultControl;
}*/

