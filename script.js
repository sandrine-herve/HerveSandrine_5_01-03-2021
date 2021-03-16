
//Contenu dans mon object Product.
class Product{
  constructor(Id,Name, Price, Description, imageURL){
    this.id = Id;
    this.name = Name;
    this.price = Price;
    this.description = Description;
    this.imageUrl = imageUrl;
  }
 }


//exécute la fonction lorsque le document est chargé.
//Intégre les éléments dont j'ai besoin.



      
        
        fetch('http://localhost:3000/api/furniture').then(function(response){
            if(response.ok){
              response.json().then(function(data){
                
                
                showProducts(data);
                carousel(data);
                //choiceEvent(data);

              } 
              );
            }

          }
        );
      
 

    function carousel(data){

      let carouselInner = document.getElementById('carousel-inner');

      //Ajouter un div pour la premiere image qui lance le carousel avec la class carousel-item active.
      let carouselItemActive = document.createElement('div');
      carouselItemActive.setAttribute('class','carousel-item active');
      carouselInner.appendChild(carouselItemActive);

      let firstProduct = data[0];

      //Ajouter une image dans carousel.
      let imageCarousel = document.createElement('img');
      carouselItemActive.appendChild(imageCarousel);
      imageCarousel.src = firstProduct.imageUrl;
      imageCarousel.alt = firstProduct.name;

      
    for ( let i = 1; i < data.length; i++ ){
        let product = data[i];
        let carouselItem = document.createElement('div');
        carouselItem.setAttribute('class','carousel-item');
        carouselInner.appendChild(carouselItem);

        let imageCarousel1 = document.createElement('img');
        carouselItem.appendChild(imageCarousel1);
        imageCarousel1.src = product.imageUrl;
        imageCarousel1.alt = product.name;

    }
    };

    function showProducts(data){

        //ajouter une balise <main>.
        let main = document.createElement('main');
        document.body.appendChild(main);
 
        //Ajouter une <section> "fourniture" dans <main>.
        let section = document.createElement('section');
        section.setAttribute('class','fourniture row col-12');
        section.setAttribute('id','result');
        main.appendChild(section);
      

      for (let product of data){
        //englober a et ma div elt dans une div.
        let div1 = document.createElement('div');
        div1.setAttribute('class','card h-100 col-lg-3 col-md-6 mx-4 my-4 shadow');
        section.appendChild(div1);

        //Englober ma div dans un lien qui envoie vers product-1.html.
        let a = document.createElement('a');
        a.href = 'product-1.html?id='+ product._id;
        a.setAttribute('id',product._id);
        div1.appendChild(a);

        a.addEventListener('click', function(event){
          fetchProduct (product._id);
        });

        //Ajouter une <div> qui contient mes éléments.
        let div = document.createElement('div');
        div.setAttribute('class','elt card-body');
        a.appendChild(div);


        //Ajouter une <img> dans <section>.
        let image = document.createElement('img');
        image.setAttribute('class','card-img-top');
        div.appendChild(image);
        image.src = product.imageUrl;
        image.alt = product.name;

        //Ajouter une titre <h2> dans <section>.
        let heading_card = document.createElement('h2');
        let heading_card_text = document.createTextNode(product.name);
        heading_card.setAttribute('class','card-title');
        div.appendChild(heading_card_text);
        div.appendChild(heading_card);

        //Ajouter un paragraphe pour la description.
        let para = document.createElement('p');
        para.setAttribute('class','description card-text');
        let para_text = document.createTextNode(product.description);
        para.appendChild(para_text);
        div.appendChild(para);

        //Ajouter un paragraphe pour le prix.
        let price = document.createElement('p');
        price.setAttribute('class','price card-text');
        let price_text = document.createTextNode(product.price + "€");
        price.appendChild(price_text);
        div.appendChild(price);

        //Ajouter une div footer card pour ajouter des icône.
        let div10 = document.createElement('div');
        div10.setAttribute('class','card-footer text-center');
        div.appendChild(div10);
       
}
        
      }


  
      //response.json().then(function(data){
        //console.log(data);
        //showProducts(data);
        //var result = document.getElementById('result');
        //result.innerHTML = data.toString();
      //});
     //} )

//Ajouter un evenement au clic sur les différentes cartes.
//const choiceEventList = document.getElementById(product._id);


//for ( let choiceEvent of choiceEventList) {
  //choiceEvent.addEventListener('click', function(event){
    //console.log (event);
//});
//}


//choiceEvent.addEventListener('click', function(event){
  //console.log (event);
//});







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


//const cart = document.getElementById('add-cart-1');
//cart.addEventListener('click', addCart(cartEvent));



	//constructor(newTotalPrice, newCustomer, newPayement){
		//this.totalPrice = newTotalPrice;
		//this.customer = newCustomer;
		//this.payement = newPayement;
		//this.products = [];
	//}




 //page panier,En haut de page, l'informaton du produit et du prix + résumé + photo de celui ci apparait en haut de page=> faire une card avec
 // un objet JS qui montre l'objet choisit par l'utilisateur.
 




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

//document.getElementById('order-id').innerHTML = aléatoire();

//3) Un résumé qui change en fonction du produit choisit de sa commande est créé. Photo change en fonction du produit choisit 
//+ prix total commande en fonction du produit choisit.



 

//construire et envoyer une requete avec Fetch.







