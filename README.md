# L'accordéon
Je voulais écrire la FAQ pour le site de mon club d'amateurs de fromage de chèvre, mais comme je suis une... chèvre en JS, je voudrais que quelqu'un s'en occupe pour moi.

Alors voilà ce que je veux : 
- Quand on clique sur un titre, toutes les autres questions se ferment et celle sur laquelle j'ai cliqué s'ouvre
- Je veux aussi que la flèche de la question ouverte soit tournée vers le bas !

## Vous aurez besoin de :
- CSS pour la flèche
- des eventListeners
- de modifier des classes en JS

## Un peu d'aide pour commencer ?
<details>
  <summary>spoiler</summary>
  Voilà quelques étapes pour bien commencer : 
  - Faire un objet JS
  - Dans la méthode init, trouver tous les titres et écouter leurs clics
  - On vérifie que la cible du clic est bien le h2 (la fleche étant dans le h2, le clic se déclenche quand même). Si non, on recible le h2 avec parentNode
  - On modifie les classes en conséquence
  - Pour la flèche => CSS !
</details>

La correction se trouve sur la branche du même nom.
