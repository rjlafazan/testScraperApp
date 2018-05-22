var request = require("request");
var cheerio = require("cheerio");

var target = "http://instagram.com";

request(target, function(err, response, body) {
  if (!err && response.statusCode === 200) {
    console.log(body);
  }
});
