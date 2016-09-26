var responses = {
	"Hi": "Hello my name is Eliza",
	"How old are you": "2 weeks old",
}

function speak() {

  var userInput = $("#input").val();
  var answer = responses[userInput];

  $('#chat-area').html(answer + "." + "</br>");
}
