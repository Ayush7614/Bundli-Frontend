const express = require('express');

// express app
const app = express();

// Static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

//listen for requests
app.listen(process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/data.json', (req, res) => {
    //const file = req.params.file;
    res.sendFile('./data.json', { root: __dirname });
});

app.get('/views/:file', (req, res) => {
    const file = req.params.file;
    res.sendFile(`./views/${file}.html`, { root: __dirname });
});

app.get('/fonts/Barlow/:file', (req, res) => {
    const file = req.params.file;
    res.sendFile(`./fonts/Barlow/${file}`, { root: __dirname });
});

app.get('/fonts/Barlow_Condensed/:file', (req, res) => {
    const file = req.params.file;
    res.sendFile(`./fonts/Barlow_Condensed/${file}`, { root: __dirname });
});

app.get('/fonts/Bellefair/:file', (req, res) => {
    const file = req.params.file;
    res.sendFile(`./fonts/Bellefair/${file}`, { root: __dirname });
});

app.get('/css/main.css', (req, res) => {
    res.sendFile('./css/main.css', { root: __dirname });
});

app.get('/assets/home/:file', (req, res) => {
    const file = req.params.file;
    res.sendFile(`./assets/home/${file}`, { root: __dirname });
});

app.get('/assets/shared/:file', (req, res) => {
    const file = req.params.file;
    res.sendFile(`./assets/shared/${file}`, { root: __dirname });
});

app.get('/assets/destination/:file', (req, res) => {
    const file = req.params.file;
    res.sendFile(`./assets/destination/${file}`, { root: __dirname });
});

app.get('/assets/crew/:file', (req, res) => {
    const file = req.params.file;
    res.sendFile(`./assets/crew/${file}`, { root: __dirname });
});

app.get('/assets/technology/:file', (req, res) => {
    const file = req.params.file;
    res.sendFile(`./assets/technology/${file}`, { root: __dirname });
});

app.get('/assets/:file', (req, res) => {
    const file = req.params.file;
    res.sendFile(`./assets/${file}`, { root: __dirname });
});

app.get('/js/:file', (req, res) => {
    const file = req.params.file;
    res.sendFile(`./js/${file}`, { root: __dirname });
});



// redirects
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });

// 404 page
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});