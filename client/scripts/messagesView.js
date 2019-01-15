var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  renderMessage: function(message) {
   
    if (message.username !== undefined && message.text !== undefined) {
      Messages.messages.push(message);
      if (message.roomname === undefined) {
        message.roomname = '';
      }
      if (message.objectId === undefined && message.objectId !== '') {
        message.objectId = 'dummy' + (Messages.messages.length - 1);
      }
      var htmlMessage = MessageView.render(message);

      MessagesView.$chats.append(htmlMessage);

      $('.' + message.objectId).siblings('.username').on('click', function() { 
        Friends.toggleStatus(message.username); 
      });
    }
  }

};