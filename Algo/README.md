# Documentation Algo

Dans ce dossier, vous trouverez un fichier index.js contenant l'intégralité du code pour répondre au problème. 

## Récupérer les données de l'API

La première fonction permet de récupérer les données de l'api en utilisant la méthode fetch. Cette fonction asynchrone prend en paramètre l'url de l'API. Nous avons choisi de stocker cet URL dans une variable pour pouvoir la réutiliser si besoin.

La partie try de la fonction propose une suite d'instruction. Dans la première variable "promise", nous utilisons la fonction fetch pour effectuer une requête HTTP à l'URL spécifiée. La fonction fetch renvoie une promesse qui représente la réponse HTTP. En utilisant l'opérateur await, la fonction fetchData attend que la promesse soit résolue avant de continuer.

Une fois que la promesse de la requête est résolue, la ligne "reponseData" utilise la méthode json() pour extraire les données JSON de la réponse HTTP. La méthode json() renvoie également une promesse, donc encore une fois, on utilise await pour attendre que la promesse soit résolue.

Après avoir obtenu les données JSON, "selectData" extrait la propriété data de l'objet responseData.

Enfin, la fonction fetchData retourne les données extraites de la propriété data.

Si une erreur se produit à n'importe quelle étape du processus, le code capture l'erreur à l'aide du deuxième de la fonction "catch" et affiche un message d'erreur dans la console.

Cette fonction sera appelé dans la deuxième fonction


## Filtrer et ordonner les données



La fonction filterData est une fonction effectue plusieurs opérations sur les données récupérées à partir d'une URL donnée. Elle est asynchrone et prend en paramètre l'url de l'API. 

En premier argument, elle récupère les données en faisant appel à une fonction asynchrone "fetchData" qui prend l'URL en paramètre. La fonction fetchData retourne une promesse qui se résout avec les données récupérées.

Ensuite, elle définit deux méthodes permettant de manipuler les données en filtrant et ordonnant les données. La première est une fonction interne appelée filterByType qui prend en paramètre un tableau "array" et un type de données "type". Cette fonction filtre le tableau en ne gardant que les éléments dont le type est égal au type spécifié. Cette fonction renvoie un tableau avec les élements du type spécifié, par exemple que des nombres, ou que des chaînes de caractères.

La seconde fonction appelée sortByLocale prend aussi un tableau "array" en paramètre. Cette fonction trie le tableau en utilisant la méthode localeCompare pour comparer les éléments du tableau. Cela permet de trier les éléments du tableau en ordre alphabétique en tenant compte des caractères spécifiques à la langue française et en étant insensible à la casse.

On définit trois instructions qui permettront de filtrer, ordonner et renvoyer un tableau dans 3 variables distinctes.
- on filtre d'abord les données récupérées en ne gardant que les caractères individuels qui ont un type de données 'string'. Ces caractères sont ensuite triés dans l'ordre alphabétique en utilisant la méthode sortByLocale. Le résultat est stocké dans la variable caractersInOrder.

- on ne garde que les chaines de caractères (supérieur à 1 caractère). Ces mots sont ensuite triés dans l'ordre alphabétique en utilisant la fonction sortByLocale. Le tableau est stocké dans la variable wordsInOrder.

- on ne récupère que les nombres qui ont un type de données 'number'. Ces nombres sont ensuite triés en ordre croissant en utilisant une fonction de tri par défaut (elle compare deux éléments a et b en les soustrayant (a - b). Si le résultat de la soustraction est négatif, cela signifie que a est inférieur à b, donc a est placé avant b dans le tableau trié. Si le résultat est positif, a est considéré comme supérieur à b, donc b est placé avant a dans le tableau trié. Si le résultat est zéro, l'ordre relatif des éléments est maintenu). Le résultat est stocké dans la variable numberInOrder.

- filtre des données = qui ont un type de données 'object' (incluant donc aussi les tableaux). Le résultat est stocké dans la variable objects.

Enfin, on combine les résultats des étapes précédentes pour concaténer tous les résultats dans un tableau unique. Le résultat final est stocké dans la variable result.

On affiche le résultat dans la console.



## Appel de la fonction

Pour voir le résultat, on appelle la fonction et on passe en paramètre la variable url stocké en début de code. 
