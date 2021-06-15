
let DisplayMessagesComponent = {
  props: ['allMessages'],
  template: "#Display-Messages-Component-Template"
};

let SendMessageComponent = {
  template: "#Send-Message-Component-Template",
  components: {
    'display-messages': DisplayMessagesComponent
  },
  data (){
    return {
      counter: 0,
      messages: ['Interview!', 'it is time', 'we gotta move now!'],
      showMessages: false,
      newMessage: ""
    }
  },
  created() {
    this.counter = this.messages.length;
  },
  methods: {
    sendMessage: function(){
      if (this.newMessage!="") {
        this.counter++;
        this.messages.push(this.newMessage);
        this.newMessage = "";
      }
    }
  }
}

new Vue({
  el: '#app',
  components: {
    'send-message': SendMessageComponent
  },
  data: {

  }
});

