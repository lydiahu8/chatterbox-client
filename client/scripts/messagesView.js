var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  render: function() {
    for (var key of Messages.messages) {
      if (key.username !== undefined && key.text !== undefined && key.createdAt !== undefined) {
        MessagesView.$chats.append(MessageView.render(key));
      }
    }
  }

};