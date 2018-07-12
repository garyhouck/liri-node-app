let request = require("dotenv").config();
let keys = require("./keys.js");
let spotify = new Spotify(keys.spotify);
let twitter = require("twitter");
let client = new Twitter(keys.twitter);
let input1 = process.argv[2];
let song = process.argv[3];




// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);

// console.log("your id is " + spotify);
// console.log("key is " + client);

// twitter function========================================================================================

var command = "my-tweets";
var params = {screen_name: 'nodejs'};
client.get(command, 'statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
    console.log(response);
  }
  else {
      console.log("error");
  }
}); 


// spotify function==============================================================================================
  var command2 = process.argv[2];
  spotify.search(command2, { type:"track", query: song}, function(err, data) {
  if (command2 === 'spotify-this-song') {
  console.log(data);
    
  }


})


