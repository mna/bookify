$(function() {
    // Define the header object, to manipulate the topmost header element
    var header = {
        updateTitle: function(newTitle) {
            document.title = newTitle;
            $('header h1').text(newTitle);
        }
    };
    
    // Define the browser object, to manipulate the left-side book browser
    var browser = {
      refreshBooks: function() {
      },
      init: function() {
        var createButton;
        
        this.refreshBooks();
        //createButton = document.createElement('div');
        //$(createButton).addClass('browserItem');
        //$(createButton).text('Create Book');
        //$('#browserBody').append(createButton);
        
        $('.browserItem').button({
            icons: {
              primary: 'ui-icon-circle-plus'
					  }
				});
      }
    };
    
    //header.updateTitle('Test de titre');
    browser.init();
});

