var Friends = {
  storage: {},

  toggleStatus: function(friend) {
    if (this.storage[friend] === undefined) {
      this.storage[friend] = 1;
    } else {
      delete this.storage[friend];
    }
  }
  
};