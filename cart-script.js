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

let buyContainer = document.getElementById('buyCard');

//Ajouter div class="card mt-4"
let cardBuy = document.createElement('div');
cardBuy.setAttribute('class','card jumbotron ');
cardBuy.setAttribute('id','card jumbotron ');
buyContainer.appendChild(cardBuy);

let headingBuy = document.createElement('h2');
headingBuy.setAttribute('class',' titreBuy display-4 mb-5');
let headingBuy_text = document.createTextNode('Mon Panier');
headingBuy.appendChild(headingBuy_text);
cardBuy.appendChild(headingBuy);


let somme = 0;

//Rajouter une boucle pour plusieurs produits for ...of
if (panier !== null){
	for ( let product of panier) {

//Ajouter div qui contient élément de mon meuble.
let divBuyFourniture = document.createElement('div');
divBuyFourniture.setAttribute('class','fourniture_buy row my-4 ');
divBuyFourniture.setAttribute('id','tableau');
cardBuy.appendChild(divBuyFourniture);


//Ajouter la photo du produit.
let imgBuy = document.createElement('img');
imgBuy.setAttribute('class','rounded float-left img-fluid img-thumbnail');
imgBuy.setAttribute('id','imgCart');
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
idBuy.setAttribute('class','idBuy mx-3 my-2');
idBuy.appendChild(idBuy_text);
divBuyFourniture.appendChild(idBuy);


//Ajouter le prix du meuble choisi.
let priceBuy = document.createElement('p');
priceBuy.setAttribute('class','description card-text mx-3 my-2 font-weight-bold');
let priceBuy_text = document.createTextNode("Prix:" + product.price + "€");
priceBuy.appendChild(priceBuy_text);
divBuyFourniture.appendChild(priceBuy);


//je récupere le prix de mon article a chaque boucle.
somme += product.price;
}
//fin bouble for

//j'affiche le resultat de ma somme.
let TotalPrice = document.createElement('p');
TotalPrice.setAttribute('class','description font-weight-bold text-uppercase card-text ml-2 my-5 col-12');
TotalPrice.setAttribute('id','TotalPrice');
let TotalPrice_text = document.createTextNode("Prix Total :" + somme + "€");
TotalPrice.appendChild(TotalPrice_text);
cardBuy.appendChild(TotalPrice);
}

// Mettre les bouton dans une meme div aligner.
let btnDiv = document.createElement('div');
btnDiv.setAttribute('class','btnDiv');
cardBuy.appendChild(btnDiv);

//Ajouter un bouton ajouter a mon panier.
  let addCartAgain = document.createElement('a');
  addCartAgain.setAttribute('class','btn btn-primary col-12 my-3');
  addCartAgain.setAttribute('id','addCartAgain');
  addCartAgain.setAttribute('href','index.html');
  let addCartAgain_text = document.createTextNode('Retourner à mes achats');
  addCartAgain.appendChild(addCartAgain_text);
  btnDiv.appendChild(addCartAgain);
  

//Ajouter bouton pour vider mon pannier.
  let removeCart = document.createElement('a');
  removeCart.setAttribute('class','btn btn-danger col-12 my-3');
  removeCart.setAttribute('id','remove-to-cart');
  removeCart.setAttribute('href','index.html');
  let removeCart_text = document.createTextNode('Vider mon panier');
  removeCart.appendChild(removeCart_text);
  btnDiv.appendChild(removeCart);
//appeler la fonction qui videra le panier//
 removeCart.addEventListener('click',function(event){
 localStorage.clear()});

  
let formValid = document.getElementById('buy');

//Les variables dont j'ai besoin pour le nom.
let formLastName = document.getElementById('lastName');
let missLastName = document.getElementById('missName');
//regex autorisant que les lettres, les apostrophes, les tirets et les espaces.
//1er partie : commencer soit par une lettre non accentuée en majuscule ou en minuscule, soit par l’un des caractères suivants : « éèîïÉÈÎÏ ».
//2eme partie :  au moins une autre lettre en minuscule ou par l’un des caractères suivants : « éèêàçîï »
let nameValid =  /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

//Les variables dont j'ai besoin pour le prenom.
let formFirstName = document.getElementById('firstName');
let missFirstName = document.getElementById('missSurname');
let surnameValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

//Les variables dont j'ai besoin pour l'adresse.
let formAddress = document.getElementById('address');
let missAddress = document.getElementById('missAddress');

//Les variables dont j'ai besoin pour le code postal.
let formPostal = document.getElementById('postal');
let missPostal = document.getElementById('missPostal');
let postalValid = /^[0-9]{5}$/;
//Les variables dont j'ai besoin pour la ville.
let formCity = document.getElementById('city');
let missCity = document.getElementById('missCity');
let cityValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;


//Les variables dont j'ai besoin pour la date.
let formDate = document.getElementById('date');
let missDate = document.getElementById('missDate');

//Les variables dont j'ai besoin pour l'email.
let formMail = document.getElementById('email');
let missMail = document.getElementById('missMail');
let mailValid = /^[\w\-]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)*\.[\w\-]{2,4}$/;


formValid.addEventListener('click', function(event){
//si control event true.
if (control(event)){
	console.log("Controles OK");
	//appelé ma fonction d'envoie POST.
	let products = [];//attend tous les id.

	for ( let product of panier){
		products.push(product._id)
	};

	let contact = {
		firstName: firstName.value,
		lastName: lastName.value,
	    address: address.value,
	    city: city.value,
	    email: email.value,
	};

	const postData = {contact, products};

	console.log(postData);
	// stockage du contenu du formulaire dans local storage
	localStorage.setItem('postData', JSON.stringify(postData));
// 	//envoyer postData avec la methode fetch post.
// 	//http://localhost:3000/api/furniture/order.
// 	fetch('http://localhost:3000/api/furniture/order',{
// 		method: "POST",
// 		body: JSON.stringify(postData),
// 		headers: {"Content-type": "application/json"}
// 	})
// //.then(response => alert(JSON.stringify(response)))
// 	.then((res)=>res.json())
// 	.then((data)=>{
// 		if(data.orderId){
// 			console.log(data); 
// 			localStorage.setItem('postData', JSON.stringify(postData));
// 		} else {
// 			console.log("erreur") + console.log(data);
// 		} 	
// 	})
// 	.catch(function(res){ console.log("erreur") + console.log(res) })
}


});


function control(event){

	let resultControl = true;

	//si le champ est vide
	if(formLastName.validity.valueMissing){
		event.preventDefault();//on bloque le déclenchement de l'évènement.
		missLastName.textContent = 'Nom manquant !';
		missLastName.style.color = 'red';
		resultControl = false;
	//si le champ est mal rempli
	} else if (nameValid.test(formLastName.value) == false) {
		event.preventDefault();
		missLastName.textContent = 'Format incorrect';
		missLastName.style.color = 'orange';
		resultControl = false;
	} else {
		missLastName.textContent = '';
	};

    //si le champ est vide
	if (formFirstName.validity.valueMissing) {
		event.preventDefault();//on bloque le déclenchement de l'évènement.
		missFirstName.textContent = 'Prénom manquant !';
		missFirstName.style.color = 'red';
		resultControl = false;
	} else if (surnameValid.test(formFirstName.value) == false) {
		event.preventDefault();
		missFirstName.textContent = 'Format incorrect';
		missFirstName.style.color = 'orange';
		resultControl = false;
	}else {
		missFirstName.textContent = '';
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
	} else if (postalValid.test(formPostal.value) == false) {
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
	} else if (cityValid.test(formCity.value) == false) {
		event.preventDefault();
		missCity.textContent = 'Format incorrect';
		missCity.style.color = 'orange';
		resultControl = false;
	} else {
		missCity.textContent = '';
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
	} else if (mailValid.test(formMail.value) == false) {
		event.preventDefault();
		missMail.textContent = 'Format incorrect';
		missMail.style.color = 'orange';
		resultControl = false;
	} else {
		missMail.textContent = '';
	};

    

	return resultControl;
}

