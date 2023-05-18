console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {

// add on click
$('#addJokeButton').on('click', sendToServer); 

getJokeList(); 
}



function renderToDom(array){ // need to put something in the ()
console.log('Render to dom is working');
$('#outputDiv').empty(); // wipe what is currently on the dom to replace it with current info
for(let object of array){
    // match the name of what in the function
$('#outputDiv').append(` 
${object.whoseJoke}'s joke. 
${object.jokeQuestion} is the question.
${object.punchLine} is the punchline
ahahaha so funny

`)}
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
        data: jokeObject // data so I can send it out

    }).then(
            function(response){
            getJokeList() // display the updated array
            console.log('Post joke is working');
            $("whoseJokeIn").val(''); // cleared data
            $("questionIn").val('');
            $("punchlineIn").val('');

    }
    ).catch(
        function(error){
            console.log('POST /jokeObject call failed', error);
       
        }
    )

} // end function send to server    

function getJokeList(){ 
    $.ajax({
        method: 'GET',
        url: '/jokeObject',

    }).then(
        function(response){
            console.log('getJokesList is working');
            renderToDom(response);

        }).catch(function(error){
            console.log('Errors in getJokesList');
        })

} // end of getJokeList





// function sendJokeList(event){
//     event.preventDefault();

