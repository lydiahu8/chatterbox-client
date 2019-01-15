var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  renderMessage: function(message) {
   
    if (message.username !== undefined && message.text !== undefined && message.roomname !== undefined) {
      MessagesView.$chats.append(MessageView.render(message));
    }
    
  }

};