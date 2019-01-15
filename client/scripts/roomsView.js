var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.handleAddRoom);
    
  },

  renderRoom: function(roomname) {
    this.$select.append(new Option(roomname, roomname));
  },

  handleAddRoom: function() {
    Rooms.add(RoomsView.getRoomName);
    RoomsView.renderRoom(RoomsView.getRoomName);
    $('#addroom').val('');
  },

  getRoomName: function() {
    return $('#addroom').val();
  }

};
