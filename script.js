
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

        fetch('http://localhost:3000/api/furniture').then(function(response){
            if(response.ok){
              response.json().then(function(data){
                
                
                showProducts(data);
                /*carousel(data);*/
                //choiceEvent(data);

              } 
              );
            }

          }
        );

    function showProducts(data){

        //ajouter une balise <main>.
        let main = document.createElement('main');
        document.body.appendChild(main);
 
        //Ajouter une <section> "fourniture" dans <main>.
        let section = document.createElement('section');
        section.setAttribute('class','fourniture row col-12 mx-md-5 mx-1');
        section.setAttribute('id','result');
        main.appendChild(section);
      

      for (let product of data){
        //englober a et ma div elt dans une div.
        let div1 = document.createElement('div');
        div1.setAttribute('class','card h-100 col-lg-3 col-md-6 mx-4 my-2 shadow');
        section.appendChild(div1);

        //Englober ma div dans un lien qui envoie vers product-1.html.
        let a = document.createElement('a');
        a.href = 'product-1.html?id='+ product._id;
        a.setAttribute('id',product._id);
        div1.appendChild(a);


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
        para.setAttribute('class','description card-text text-secondary');
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

/*function aléatoire(){
  return' Votre identifiant de commande:' +Date.now()+ Math.round(Math.random()*1000000);
}*/

//document.getElementById('order-id').innerHTML = aléatoire();


  /*function carousel(data){

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
    };*/