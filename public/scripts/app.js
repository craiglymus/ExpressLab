// $(document).ready(() => {

console.log("Sanity Check: JS is working!");


// const handleSuccess = json =>  console.log(json);


function handleSuccess(json) {
	console.log(json)

        for (let i = 0; i < json.length; i++) {
        	var element = json[i]
        	
            $('.container').append(`<h1> ${element.artist} ${element.title} </h1>`)
        }
    };

function handleError(err) {
	console.log(err);
}

// const handleError = (xhr, status, errorThrown) => console.log('uh oh');


$.ajax({
   method: 'GET',
   url: 'http://localhost:3000/api/albums',
   success: handleSuccess,
   error: handleError


 });
// });
