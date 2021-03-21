let postData = null;
//On récupère les valeurs du formulaire à envoyer dans local storage
if (localStorage.getItem('postData') !== null ){
	console.log('postData OK');
	//je crée une variable contenant un tableau qui se remplira des produits choisis.
	postData = JSON.parse(localStorage.getItem('postData'));
}

if(postData !== null){
	//envoyer postData avec la methode fetch post.
	// 	//http://localhost:3000/api/furniture/order.
	fetch('http://localhost:3000/api/furniture/order',{
		method: "POST",
		body: JSON.stringify(postData),
		headers: {"Content-type": "application/json"}
	})
	//.then(response => alert(JSON.stringify(response)))
	.then((response)=>response.json())
	.then((data)=>{ 
		if(data.orderId){
			console.log("FETCH OK"); 
			console.log(JSON.stringify(data)); 

			showRef(data);
			
			localStorage.clear();
		} else {
			console.log("erreur") + console.log(data);
		} 	
	})
	.catch(function(res){ console.log("erreur") + console.log(res) })
}








function showRef(postData){

	let orderId = postData.orderId;
	let products = postData.products;
	let contact = postData.contact;
	let messageRefOrder = document.getElementById('nameRefOrder');

	let  firstNameRefOrder = document.createElement('p');
	let firstNameRefOrder_text = document.createTextNode(contact.firstName +', ONIROCO VOUS REMERCIE POUR VOTRE COMMANDE!')	
	firstNameRefOrder.appendChild(firstNameRefOrder_text);

	let refCustomer = document.createElement('p');
	let refOrderCustomer_text = document.createTextNode("Reference de votre commande :" + orderId );
	refCustomer.setAttribute('class','idBuy mx-3 my-2');
	refCustomer.appendChild(refOrderCustomer_text);
	messageRefOrder.appendChild(refCustomer);
	messageRefOrder.appendChild(firstNameRefOrder);

	let refOrder = document.getElementById('ref-order');
	for (let ref of products){

		let imgRef = document.createElement('img');
		imgRef.setAttribute('class', 'card-img-top');
		imgRef.src = ref.imageUrl;
		imgRef.alt = ref.name;
		refOrder.appendChild(imgRef);

		let cardRef = document.createElement('div');
		cardRef.setAttribute('class', 'card-body');
		refOrder.appendChild(cardRef);

		let cardTitle = document.createElement('h5');
		cardTitle.setAttribute('class','card-title');
		let cardTitle_text = document.createTextNode(ref.name);
		cardTitle.appendChild(cardTitle_text);
		cardRef.appendChild(cardTitle);


		

	}
}
