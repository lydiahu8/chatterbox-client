var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    MessagesView.initialize();
    FormView.initialize();
    RoomsView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
   
    var refresh = function () {
      App.fetch(App.stopSpinner);
      setTimeout(function() { refresh(); }, 5000);
    };

    refresh();
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:

      Messages.messages = [];
      MessagesView.$chats.html('');
      for (var key of data.results) {
        Messages.messages.push(key);
        MessagesView.renderMessage(key);
      }

      RoomsView.renderRoom();


      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
