console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
// add on click
$('#addJokeButton').on('click',sendToServer); 

getJokeList(); 
}



function sendToServer(event){
    event.preventDefault;

    let jokeObject = { // put together the jokes in the format

    whoseJoke: $("whoseJokeIn").val(),
    jokeQuestion:$("questionIn").val() ,
    punchLine:$("punchlineIn").val()
    }; // end inputing object
    //ajax post

    $.ajax({
        method: 'POST',
        url:'/jokeObject',
    }).then(
            function(response){
            getJokeList() // put in the jokes
    }
    ).catch(
        function(error){
            console.log('POST /jokeObject call failed');
            console.log('error',error)
        }
    )

} // end function send to server    

function getJokeList(){ 
    $.ajax({
        method: 'GET',
        url: '/jokeObject'
    }).then(
        function(response){
                



        }

        //
//ajax GET 
// in the array and the append

)



} // end of getJokeList
console.log('Jokes',jokeObject);




// function sendJokeList(event){
//     event.preventDefault();

