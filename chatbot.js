var responses = {
	"Hi": "Hello my name is Eliza",
	"How old are you": "2 weeks old",
}

function speak() {

  var userInput = $("#input").val();
  var response = responses[userInput];

  $('#chat-area').prepend(response + "</br>");
  $('#chat-area').prepend(userInput + "</br>");
}
