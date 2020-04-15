console.log("The bot works")

var Twit = require('twit')
var config =require('./config')
 console.log(config);
var T = new Twit(config)

//get tweets

// var params ={ q: 'rainbow', count: 2 }

// T.get('search/tweets',params, gotData)


// function gotData(err, data, response) {
//     console.log(data)
//     var tweets = data.statuses;
//     for (var i=0;i<tweets.length;i++){
//     console.log(tweets[i].text);
//     }
// }

  // post 

  var tweet = { status: '#codingrainbow from node.js' };
  
  T.post('statuses/update', tweet, tweeted)

  function tweeted (err, data, response) {
    if(err){
        console.log("Something went wrong")
    }
    else{
        console.log("It worked")
    }
  //  console.log(data)
  }