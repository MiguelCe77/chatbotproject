var now = new Date(Date.now());

var responses = {
	"what is your name?": "Hello my name is Eliza",
	"how old are you?": "2 weeks old",
  "whats your favorite color?" : "raibow",
  "ayyy" : "ayyyy",
  "what time is it?" : now
}


var fallBack = ["Que?", "Can't hear you!"];
function speak() {

  var userInput = $("#input").val();
  userInput = userInput.toLowerCase();

  var response = responses[userInput];

  if (response === undefined){
      $('#chat-area').prepend(fallBack[1] + "..." + "</br>");
  }

  else {
      $('#chat-area').prepend(response + "</br>");
  }
  $('#chat-area').prepend(userInput + "</br>");
}

  $(document).keyup(function(event){
     if(event.keyCode == 13){
         speak();
     }
});
