console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
}

let jokes = {


    whoseJoke: $("whoseJokeIn").val(),
    jokeQuestion:$("questionIn").val() ,
    punchLine:$("punchlineIn").val()
}


console.log('Jokes',jokes)