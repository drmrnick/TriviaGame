$('#start').on('click', function () {
    game.start
})


var questions = [{
    questions: "What was the first computer that Apple made?",
    answers: ["iMac", "1-Apple", "Apple-1", "Macintosh"],
    correctAnswers: "Apple-1"
}]

var answers = {
    correct: 0,
    incorrect: 0,
    timeCount: 60,
    timer: function () {
        game.timeCount--;
        $('#timer').html(game.timeCount);
        if (game.timeCount <= 0) {
            console.log("Game over loser");
         game.over();
        }
    }
    start:function(){
        timer = setInterval(game.timeCount,1000);
        $('#start').remove();
        for (var i = 0; i < questions.length; i++) {
            $('#subwrapper').append('<h2>' + questions[i].questions + '</h2');
            for (var j = 0; j < questions[i].answers.length; j++) {
                $('#subwrapper').append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }
        }
    }
}