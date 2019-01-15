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
    App.fetch(App.stopSpinner);
   

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:

      for (var key of data.results) {
        Messages.messages.push(key);
        if (key.username !== undefined && key.text !== undefined && key.createdAt !== undefined) {
          key.username = this.escapeData(key.username);
          key.text = this.escapeData(key.text);
          key.createdAt = this.escapeData(key.createdAt);
        }
      }

      MessagesView.render();

      callback();
    });
  },

  escapeData: function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\\<\>]/g, '\\$&');
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
