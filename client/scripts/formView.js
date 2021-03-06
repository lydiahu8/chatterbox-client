var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);

  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    
    var message = {
      username: App.username,
      roomname: RoomsView.getSelectedRoom() === '---DEFAULT---' ? '' : RoomsView.getSelectedRoom(),
      text: FormView.getMessage()
    };

    Parse.create(message);
    $('#message').val('');
    App.fetch(App.stopSpinner);

  },

  getMessage: function() {
    return $('#message').val();
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};