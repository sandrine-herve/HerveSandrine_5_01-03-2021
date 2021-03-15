class Product{
  constructor(Id,Name, Price, Description, imageURL,varnish){
    this.id = Id;
    this.name = Name;
    this.price = Price;
    this.description = Description;
    this.imageUrl = imageUrl;
    this.varvnish = varvnish;
  }
 }

fetch('http://localhost:3000/api/furniture').then(function(response){
            if(response.ok){
              response.json().then(function(data){
                
                showChoice(data);

              } 
              );
            }

          }
        );

function showChoice (data){

   let cardChoice = document.getElementById('choice');

   let cardBodyChoice = document.createElement('div');
   cardBodyChoice.setAttribute('class','card-body');
   cardChoice.appendChild(cardBodyChoice);

   let choiceProduct = data[0];

   let imgChoice = document.createElement('img');
   imgChoice.setAttribute('class','card-img-top img-fluid');
   cardBodyChoice.appendChild(imgChoice);
      imgChoice.src = choiceProduct.imageUrl;
      imgChoice.alt = choiceProduct.name;

  let headingChoice = document.createElement('h2');
  let headingChoice_text = document.createTextNode(choiceProduct.name);
  headingChoice.setAttribute('class','card-title');
  cardBodyChoice.appendChild(headingChoice);
  headingChoice.appendChild(headingChoice_text);

  let paraChoice = document.createElement('p');
  paraChoice.setAttribute('class','description card-text');
  let paraChoice_text = document.createTextNode(choiceProduct.description);
  paraChoice.appendChild(paraChoice_text);
  cardBodyChoice.appendChild(paraChoice);

  let priceChoice = document.createElement('p');
  priceChoice.setAttribute('class','price card-text');
  let priceChoice_text = document.createTextNode(choiceProduct.price + "€");
  priceChoice.appendChild(priceChoice_text);
  cardBodyChoice.appendChild(priceChoice);

  let separate = document.createElement('hr');
  cardBodyChoice.appendChild(separate);

  let cardPersonalizing = document.createElement('div');
  cardPersonalizing.setAttribute('class','');
  cardChoice.appendChild(cardPersonalizing);

  let headingPersonalizing = document.createElement('h2');
  headingPersonalizing.setAttribute('class','card-header my-5');
  let headingPersonalizing_text = document.createTextNode('Personnalisation');
  headingPersonalizing.appendChild(headingPersonalizing_text);
  cardPersonalizing.appendChild(headingPersonalizing);

  let personalizingCardBody = document.createElement('div');
  personalizingCardBody.setAttribute('class','card-body');
  cardPersonalizing.appendChild(personalizingCardBody);

  let inputVarnish = document.createElement('div');
  inputVarnish.setAttribute('class','input-group mb-5');
  personalizingCardBody.appendChild(inputVarnish);

  let inputVarnishPrepend = document.createElement('div');
  inputVarnishPrepend.setAttribute('class','input-group-prepend');
  inputVarnish.appendChild(inputVarnishPrepend);

  let inputVarnichChoice = document.createElement('span');
  inputVarnichChoice.setAttribute('class','input-group-text');
  inputVarnichChoice.setAttribute('id','basic-addon3');
  let inputVarnichChoice_text = document.createTextNode('Choisissez votre vernis:');
  inputVarnichChoice.appendChild(inputVarnichChoice_text);
  inputVarnishPrepend.appendChild(inputVarnichChoice);

  let selectVarnich = document.createElement('select');
  selectVarnich.setAttribute('id','varnish-name');
  inputVarnishPrepend.appendChild(selectVarnich);
  
  let varnishDropDown = document. createElement('div');
  varnishDropDown.setAttribute('id','varnishDropDown');
  varnishDropDown.setAttribute('class','dropdown-content');
  inputVarnishPrepend.appendChild(varnishDropDown);


  //function DropDown(data){
    //let elt = document.getElementById('varnishDropDown');
    //let opt = data.varnish;

    //for (i=0; i<data.length; i++) {
      //opt[i] = "";
    //}
  //}

  let optionVarnish = document.createElement('option');
  let optionVarnish_text = document.createTextNode(choiceProduct.varnish[0]);
  optionVarnish.appendChild(optionVarnish_text);
  selectVarnich.appendChild(optionVarnish);

  let linkBasket = document.createElement('a');
  linkBasket.setAttribute('class','btn btn-success mt-5 my-5 px-4 py-2');
  linkBasket.setAttribute('id','add-cart-1');
  linkBasket.setAttribute('href','panier-1.html');
  let linkBasket_text = document.createTextNode('Ajouter à mon panier');
  linkBasket.appendChild(linkBasket_text);
  cardPersonalizing.appendChild(linkBasket);




  
  
              
              //<a href="panier-1.html" class="btn btn-success mt-5" id="add-cart-1">Ajouter à mon panier</a>
            //</div>
            
          //</div>
        //</div>
   

}