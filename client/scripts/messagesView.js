var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  renderMessage: function(message) {
    if (RoomsView.getSelectedRoom() === '---DEFAULT---' || (message.roomname !== undefined && message.roomname === RoomsView.getSelectedRoom())) {
      if (message.username !== undefined && message.text !== undefined) {
        Messages.messages.push(message);

        if (message.roomname === undefined) {
          message.roomname = '';
        }

        if (message.objectId === undefined && message.objectId !== '') {
          message.objectId = 'dummy' + (Messages.messages.length - 1);
        }

        if (message.createdAt === undefined) {
          message.createdAt = '';
        }

        
        var htmlMessage = MessageView.render(message);

        MessagesView.$chats.append(htmlMessage);

        if (Friends.storage[message.username] !== undefined) {
          $('.' + message.objectId)[0].parentElement.className = 'friend';
        }

        $('.' + message.objectId).siblings('.username').on('click', function() { 
          Friends.toggleStatus(message.username); 
          $('#message').val('');
          App.fetch(App.stopSpinner);
        });
      }
    }
  }

};