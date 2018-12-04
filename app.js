var app = {
  init : function() {
    app.question = document.querySelectorAll('.titre');
    console.log(app.question);
    app.question.addEventListener('click', app.openAnswer);
  },

  openAnswer: function(evt) {
    console.log(evt);
    // var classArea = evt.path;
    // classArea.Array[0] = 'h2.titre.open';
    
  }
};

app.init();