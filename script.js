 $('.input-group.date').datepicker({format: "dd.mm.yyyy"});

 //Fonctions://
//L'utilisateur sur la page d'accueil, peut "aimer" le produit=> vers wishlist en haut de page.
//L'utilisateur sur la page d'acceuil peut ajouter a son panier en cliquant sur l'icone le produit s'ajoute au panier en haut 
//de la page d'accueil un nombre s'affiche devant le panier. 
//L'utilisateur sur la page d'accueil peut partager le produit en cliquant sur l'icone, une fenêtre s'ouvre et il peut choisir 
// quel moyen de diffusion. 



 //1) Lorsque l'utilisateur clic sur le bouton "Ajouter a mon panier", il est envoyé a la page panier, il doit remplir un formulaire.
 //2) En haut de page, l'informaton du produit et du prix + résumé + photo de celui ci apparait en haut de page.
 



 //1) Quand l'utilisateur clique sur le bouton "acheter ma commande!"
 //2) Vérification des champs obligatoires du formulaire.
 function verification(){}
 // si champs mal remplis, l'utilisateur reste sur la page avec des messages d'erreurs sur les champs concernés.
 // si champs bien remplis, l'utilisateur est renvoyé vers la page remerciement.












//1) Quand l'utilisateur est envoyé sur le page remerciement.
//2) Un identifiant de comande est créé. 
function aléatoire(){
	return' Votre identifiant de commande:' Math.random()*100 * 10000;
}

document.getElementById('order-id').innerHTML = aléatoire();

//3) Un résumé de sa commande est créé. Photo + prix total commande.


//System.Guid  guid = System.Guid.NewGuid ();
// String id = guid.ToString();