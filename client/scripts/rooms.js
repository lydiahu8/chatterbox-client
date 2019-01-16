var Rooms = {
  storage: {},

  add: function (room) {
    if (this.storage[room] === undefined) {
      RoomsView.renderRoom(room);
      this.storage[room] = 1;
    }
  },

  insert: function (messages) {
    for (var value of messages) {
      this.add(value.roomname);
    }
  }
  
};