var http = require('http'),
    fs = require('fs');


http.createServer(function (request, response) {
    console.log('hit');

    fs.readFile('./' + request.url, function (err, html) {
        if (err) {
            //console.log(err);
        }
        try {
            response.writeHeader(200, {
                "Content-Type": "text/html"
            });
            response.write(html);
        } catch (error) {
            //console.log(error);
        }

        response.end();
    });

}).listen(8080);