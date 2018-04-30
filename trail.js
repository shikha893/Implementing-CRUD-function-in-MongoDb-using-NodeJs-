var url = "https://blog.rankmeonline.com/wp-json/wp/v2/posts" 
var request = require('request');
request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log(body) // Print the json response
    }
	else{
		console.log("pass")
	}
})