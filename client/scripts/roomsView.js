var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.handleAddRoom);
    RoomsView.$select.on('change', function() {
      $('#message').val('');
      App.fetch(App.stopSpinner); 
    });
    this.$select.append(new Option('---DEFAULT---', '---DEFAULT---'));
    $('.roomSelect option[value=---DEFAULT---]').attr('selected', 'selected');
  },

  renderRoom: function(roomname) {
    this.$select.append(new Option(roomname, roomname));
  },

  handleAddRoom: function() {
    Rooms.add(RoomsView.getRoomName());
    $('.roomSelect option[value= ' + RoomsView.getRoomName() + ']').attr('selected', 'selected');
    $('#addroom').val('');
  },

  getRoomName: function() {
    return $('#addroom').val();
  },

  getSelectedRoom: function() {
    return $('.roomSelect').find(':selected').text(); 
  }

};
