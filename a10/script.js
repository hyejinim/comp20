document.addEventListener('DOMContentLoaded', function () {
	q = "hi"; // search query
    
    // Make instance of request object
    request = new XMLHttpRequest;
    console.log("1 - request object created");

    // Set the URL for the AJAX request to be the JSON file 
	request.open('GET', 'http://api.giphy.com/v1/gifs/search?q=hi&api_key=58dWSY5lEy9JKgKljhW0OEFCdhdS8SyQ&limit=2'+q, true);
    console.log("2 - opened request file");
    
    // set up event handler/callback
    request.onload = function() {
        console.log("3 - readystatechange event fired");

        if (request.readyState == 4 && request.status == 200) {
            // wait for done + success
            data = JSON.parse(request.responseText).data.image_url;
			console.log(data);
            document.getElementById("giphyme").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';
            // document.getElementById("data").innerHTML ="current temp in boston: " + weather["main"]["temp"];
        }
        else if (request.readyState == 4 && request.status != 200) {
            document.getElementById("data").innerHTML = "Something is wrong!  Check the logs to see where this went off the rails"; // change error msg
        }

        else if (request.readyState == 3) {
            document.getElementById("data").innerHTML = "Too soon!  Try again"; // change error msg
        }
    }


	// request.onload = function() {
	// 	if (request.status >= 200 && request.status < 400){
	// 		data = JSON.parse(request.responseText).data.image_url;
	// 		console.log(data);
	// 		document.getElementById("giphyme").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';
	// 	} else {
	// 		console.log('reached giphy, but API returned an error');
	// 	 }
	// };

	request.onerror = function() {
		console.log("connection error");
	};

    request.send();
    console.log("4 - Request sent");
});