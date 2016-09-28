var responses = {
	"Hi": "Hello my name is Eliza",
	"How old are you": "2 weeks old",
  "Whats your favorite color" : "raibow",
  "ayyy" : "ayyyy"
}

var fallBack = ["Que?", "Can't hear you!", ""];
function speak() {

  var userInput = $("#input").val();
  var response = responses[userInput];

  if (response === undefined){
      $('#chat-area').prepend(fallBack[0] + "...");
  }

  else {
      $('#chat-area').prepend(response + "</br>");
  }
  $('#chat-area').prepend(userInput + "</br>");

}
