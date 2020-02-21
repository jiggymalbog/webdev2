const http = require('http');
const bl = require('bl');
const url = process.argv[2];

http.get(url, function (response) {
    response.pipe(bl(function(err, data) {
        try{
        console.log(data.toString().length);
        console.log(data.toString());
        }
        catch (err) {
            return console.error(err);
        }
    }));
});