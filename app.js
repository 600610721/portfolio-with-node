const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        });

    } else if (req.url === '/index.html') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        });

    } else if (req.url === '/port.html') {
        fs.readFile(path.join(__dirname, 'public', 'port.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        });

    } else if (req.url === '/gallery.html') {
        fs.readFile(path.join(__dirname, 'public', 'gallery.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        });

    } else if (req.url === '/contact.html') {
        fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        });

    } else if (req.url === '/assets/css/gif/confused.gif') {
        fs.readFile(path.join(__dirname, 'public', '/assets/css/gif/confused.gif'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'image/gif' });
            res.end(content);
        });

    } else if (req.url === '/assets/css/gif/cool.gif') {
        fs.readFile(path.join(__dirname, 'public', '/assets/css/gif/cool.gif'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'image/gif' });
            res.end(content);
        });

    } else if (req.url === '/assets/css/gif/eye.gif') {
        fs.readFile(path.join(__dirname, 'public', '/assets/css/gif/eye.gif'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'image/gif' });
            res.end(content);
        });

    } else if (req.url === '/assets/css/gif/hahaha.gif') {
        fs.readFile(path.join(__dirname, 'public', '/assets/css/gif/hahaha.gif'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'image/gif' });
            res.end(content);
        });

    } else if (req.url === '/assets/css/gif/peekapoo.gif') {
        fs.readFile(path.join(__dirname, 'public', '/assets/css/gif/peekapoo.gif'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'image/gif' });
            res.end(content);
        });

    } else if (req.url === '/assets/css/gif/port.gif') {
        fs.readFile(path.join(__dirname, 'public', '/assets/css/gif/port.gif'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'image/gif' });
            res.end(content);
        });

    } else if (req.url === '/assets/css/gif/running.gif') {
        fs.readFile(path.join(__dirname, 'public', '/assets/css/gif/running.gif'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'image/gif' });
            res.end(content);
        });

    } else if (req.url === '/assets/css/gif/send.gif') {
        fs.readFile(path.join(__dirname, 'public', '/assets/css/gif/send.gif'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'image/gif' });
            res.end(content);
        });

    } else if (req.url === '/assets/css/gif/stump.gif') {
        fs.readFile(path.join(__dirname, 'public', '/assets/css/gif/stump.gif'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'image/gif' });
            res.end(content);
        });

    } else if (req.url === '/assets/css/gif/touch.gif') {
        fs.readFile(path.join(__dirname, 'public', '/assets/css/gif/touch.gif'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'image/gif' });
            res.end(content);
        });

    } else if (req.url === '/assets/css/images/ie/footer.png') {
        fs.readFile(path.join(__dirname, 'public', '/assets/css/images/ie/footer.png'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'image/png' });
            res.end(content);
        });

    } else if (req.url === '/assets/css/images/ie/footer.svg') {
        fs.readFile(path.join(__dirname, 'public', '/assets/css/images/ie/footer.svg'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'image/svg+xml' });
            res.end(content);
        });

    } else if (req.url === '/assets/css/images/bg.jpg') {
        fs.readFile(path.join(__dirname, 'public', '/assets/css/images/bg.jpg'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'image/jpg' });
            res.end(content);
        });

    } else if (req.url === '/assets/css/images/overlay-pattern.jpg') {
        fs.readFile(path.join(__dirname, 'public', '/assets/css/images/overlay-pattern.jpg'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/jpg' });
            res.end(content);
        });

    } else if (req.url === '/assets/css/images/over.svg') {
        fs.readFile(path.join(__dirname, 'public', '/assets/css/images/over.svg'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/svg' });
            res.end(content);
        });

    } else if (req.url === '/assets/css/font-awesome.min.css') {
        fs.readFile(path.join(__dirname, 'public', '/assets/css/font-awesome.min.css'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(content);
        });

    } else if (req.url === '/assets/css/main.css') {
        fs.readFile(path.join(__dirname, 'public', '/assets/css/main.css'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(content);
        });

    } else if (req.url === '/assets/css/noscript.css') {
        fs.readFile(path.join(__dirname, 'public', '/assets/css/noscript.css'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(content);
        });

    } else if (req.url === '/assets/fonts/fontawesome-webfont.eot') {
        fs.readFile(path.join(__dirname, 'public', '/assets/fonts/fontawesome-webfont.eot'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/eot' });
            res.end(content);
        });

    } else if (req.url === '/assets/fonts/fontawesome-webfont.svg') {
        fs.readFile(path.join(__dirname, 'public', '/assets/fonts/fontawesome-webfont.svg'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/svg' });
            res.end(content);
        });

    } else if (req.url === '/assets/fonts/fontawesome-webfont.ttt') {
        fs.readFile(path.join(__dirname, 'public', '/assets/fonts/fontawesome-webfont.ttt'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/ttt' });
            res.end(content);
        });

    } else if (req.url === '/assets/fonts/fontawesome-webfont.woff') {
        fs.readFile(path.join(__dirname, 'public', '/assets/fonts/fontawesome-webfont.woff'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/woff' });
            res.end(content);
        });

    } else if (req.url === '/assets/fonts/fontawesome-webfont.woff2') {
        fs.readFile(path.join(__dirname, 'public', '/assets/css/fonts/fontawesome-webfont.woff2'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/woff2' });
            res.end(content);
        });

    } else if (req.url === '/assets/fonts/FontAwesome.otf') {
        fs.readFile(path.join(__dirname, 'public', '/assets/fonts/FontAwesome.otf'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/otf' });
            res.end(content);
        });

    } else if (req.url === '/assets/js/main.js') {
        fs.readFile(path.join(__dirname, 'public', '/assets/js/main.js'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.end(content);
        });

    } else if (req.url === '/assets/sass/libs/_breakpoints.scss') {
        fs.readFile(path.join(__dirname, 'public', '/assets/sass/libs/_breakpoints.scss'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/scss' });
            res.end(content);
        });

    } else if (req.url === '/assets/sass/libs/_functions.scss') {
        fs.readFile(path.join(__dirname, 'public', '/assets/sass/libs/_functions.scss'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/scss' });
            res.end(content);
        });

    } else if (req.url === '/assets/sass/libs/_mixins.scss') {
        fs.readFile(path.join(__dirname, 'public', '/assets/sass/libs/_mixins.scss'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/scss' });
            res.end(content);
        });

    } else if (req.url === '/assets/sass/libs/_vars.scss') {
        fs.readFile(path.join(__dirname, 'public', '/assets/sass/libs/_vars.scss'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/scss' });
            res.end(content);
        });

    } else if (req.url === '/assets/sass/libs/_vendor.scss') {
        fs.readFile(path.join(__dirname, 'public', '/assets/sass/libs/_vendor.scss'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/scss' });
            res.end(content);
        });

    } else if (req.url === '/assets/sass/main.scss') {
        fs.readFile(path.join(__dirname, 'public', '/assets/sass/main.scss'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/scss' });
            res.end(content);
        });

    } else if (req.url === '/assets/sass/noscript.scss') {
        fs.readFile(path.join(__dirname, 'public', '/assets/sass/noscript.scss'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/scss' });
            res.end(content);
        });

    } else if (req.url === '/assets/sd/sound.mp3') {
        fs.readFile(path.join(__dirname, 'public', '/assets/sd/sound.mp3'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/mp3' });
            res.end(content);
        });

    } else {
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(content);
        });

    }
});

const PORT = process.env.PORT || 5500;
server.listen(PORT, () => {
    console.log('Server is running on port: ' + PORT);
});