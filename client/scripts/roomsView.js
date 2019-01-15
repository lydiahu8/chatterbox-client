var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function(roomname) {
    this.$select.append(new Option(roomname, roomname));
  }

};
