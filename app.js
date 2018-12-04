var app = {
  init : function() {
    app.question = document.querySelectorAll('.titre');
    // Boucle forEach pour lancer le listener sur chaque élément sélectionné par querySelectorALl
    app.question.forEach(element => {
      element.addEventListener('click', app.openAnswer);
    });
    
    
    
  },

  openAnswer: function(evt) {
    // je referme toute les questions
    app.question.forEach(element => {
      element.className = 'titre';
    });
    // j'ouvre la question cliquée
    var classArea = evt.path[0];
    classArea.className = 'titre open';
    
  }
};

app.init();