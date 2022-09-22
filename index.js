const http = require("http");
const port = 3000;

http.createServer((req, res) => {
    res.write("<h1>Hello World</h1>");
    res.write("<h3>My NodeJS wed page has been deployed to Heroku successfully !</h3>");
    res.end();
});

app.listen(port);