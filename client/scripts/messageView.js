var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"><%- username %></div>
        <div class="text"><%- text %></div>
        <div class="createdAt"><% if(createdAt !== undefined) { %><%- MessageView.timeAgo(Date.now() - Date.parse(createdAt)) %> ago<% } %></div>
        <div style="display: none" class="<%- objectId %>"></div>
      </div>
    `),

  timeAgo: function (date) {
    var seconds = Math.floor(date / 1000);
    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return `${interval} years`;
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return `${interval} months`;
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return `${interval} days`;
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return `${interval} hours`;
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return `${interval} minutes`;
    }
    return `${Math.floor(seconds)} seconds`;
  }

};