# Documentation Front-App

Dans ce dossier, vous trouverez le project front réaliser avec React-App. Il a été initialisé avec Vite.js. Après avoir cloner le projet, vous pouvez l'initialiser avec la commande `npm i` et le lancer avec `npm run dev`.

## Arborescence du projet

A la racine de ce projet, on retrouve deux dossiers et des fichiers de configuration de l'application.
Le premier dossier "public" stock notamment les images utilsées dans le projet.
Le deuxième "src" contient l'ensemble du code du projet. 


## Composants de l'application

On trouve dans cette application deux composants principaux : 

<strong>App.js :</strong>

C'est le composant principal et parent de l'application. 

Il utilise les hooks propre à useState et useEffect. useState permet d'initialiser un état local data avec un tableau vide. On utilisera la fonction setData pour mettre à jour cet état. useEffect est utilisé pour effectuer des effets de bord durant le cycle de vie du composant. Dans notre cas, lorsque le composant est monté, il appelle la fonction fetchData().

fetchData est une fonction asynchrone qui utilise la librairie axios pour effectuer une requête GET à l'URL. Important : pour sécuriser les appels d'URL et ne pas rendre visible du code sensible, il est essentiel d'enregistrer les URLs dans des variables d'environnement. Dans mon cas, j'ai essayé de le faire mais sans succès. Je n'ai pas réussi à trouver la bonne synthaxe avec Vite.js. 

Lorsque la réponse est reçue avec succès, les données extraites de la réponse sont mises à jour dans l'état data à l'aide de setData(data). Si la requête échoue, une alerte indiquant "No search results" est affichée. 

Enfin, il retourne le composant enfant Table avec les propriétés data et setData passées en props. Le composant Table aura donc accès aux données (data) et à la fonction pour les mettre à jour (setData). Ainsi, les données seront donc affichées et mise à jour dans le composant Table. 

<strong>Table.js :</strong>

On retrouve ici le composant enfant qui permet de structurer et styliser l'application. On utilise notamment style-component pour styliser l'application. Cela permet de construire des composants de style lié à une balise html et qu'on peut appeler autant de fois que l'on souhaite dans l'application. La librairie react-icons est aussi utilisée pour importer les icons de suppression (GoTrash). 


Le composant table est divisé en deux parties, une première pour la partie visualisation et une seconde pour la partie édition. Ces deux parties sont visibles grâce aux composants Visualisation & Edition. Pour afficher les données récupérées en props, on utilise la méthode ".map" qui permet de boucler et afficher tous les objets du tableau data. 

Dans la partie Edition, on utilise des balise <input> qui permet de saisir des données. 

Pour la modification des données, on utilise trois fonctions : 

- handleInputChange : Cette fonction est appelée lorsqu'une valeur est modifiée dans l'input texte ou dans l'input nombre. Elle met à jour la valeur correspondante dans le tableau "data" en utilisant la fonction "setData".
- handleCheckboxChange : Cette fonction est appelée lorsqu'un changement se produit dans la checkbox. Elle met à jour l'état "isActive" à true ou false dans le tableau "data" en utilisant la fonction "setData".
- handleDeleteRow : Cette fonction est appelée lorsqu'un utilisateur clique sur l'icône de corbeille. Elle supprime la ligne correspondante du tableau "data" en utilisant la fonction "setData" où elle utilise la méthode splice pour supprimer l'objet en fonction de l'index.
- handleAddRow : Cette fonction est appelée lorsqu'un utilisateur clique sur le bouton "Ajouter". Elle ajoute une nouvelle ligne vide au tableau "data" en utilisant la fonction "setData" où elle pousse un nouvel objet vide dans le tableau.





