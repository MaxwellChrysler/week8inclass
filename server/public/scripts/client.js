console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
// add on click
$('#addJokeButton').on('click',sendToServer); 

getJokeList(); 
}

function renderToDom(jokeObject){
  $('#outputDiv').empty();

  for(let joke of jokeObject){
    $('#outputDiv').append(`
    ${joke.whoseJoke} <br>
    ${joke.jokeQuestion}<br>
    ${joke.punchLine}<br>
    
    `)


  }

}


  

function getJokeList(){ 
 
  console.log('GET jokes list does this work?')
  // changed format to have get first, makes more sense because thats the first thing we want to have happen
    $.ajax({
        method: 'GET',
        url: '/jokeObject'

    }).then(function(response){
      console.log('Get worked',response);
      renderToDom(response);

    }).catch(function(error){
      console.log('failed to GET')
      console.log('failed to GET', error)
    })

        //
//ajax GET 
// in the array and the append
} // end of getJokeList



function sendToServer(event){
  console.log('POST does this work')
  event.preventDefault;

  // put together the jokes in the format

  let whoseJoke = $("#whoseJokeIn").val();
  let jokeQuestion = $("#questionIn").val();
  let punchLine = $("#punchlineIn").val();
  // end inputing object
  //ajax post


  $.ajax({
      method: 'POST',
      url:'/jokeObject',
      data: {

        whoseJoke,
        jokeQuestion,
        punchLine,
      }
  }).then(
          function(response){
        $("#whoseJokeIn").val(''); // clear after use
        $("#questionIn").val('');
        $("#punchlineIn").val('');
          
          getJokeList() // put in the jokes
  }
  ).catch(
      function(error){
          console.log('POST /jokeObject call failed');
          console.log('error',error)
      }
  )

} // end function send to server  

// function sendJokeList(event){
//     event.preventDefault();

