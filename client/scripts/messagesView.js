var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  renderMessage: function(message) {
   
    if (message.username !== undefined && message.text !== undefined && message.roomname !== undefined) {
      var htmlMessage = MessageView.render(message);

      // console.log($(htmlMessage));

      MessagesView.$chats.append(htmlMessage);

      if (message.objectId !== undefined) {
        $('.' + message.objectId).siblings('.username').on('click', function() { Friends.toggleStatus(message.username); });
      }

    }
    
  }

};