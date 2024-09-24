const express = require('express'),
    compression = require('compression'),
    data = require('./data');

const app = express();

const port = process.env.PORT || 8080;

app.set('view engine', 'pug');
app.use(express.static('./app/public', { index: false }));
app.use(compression());

app.get('/', (_, response) => {
    response.render(__dirname + '/app/index.pug', data);
});

app.listen(port, () => {
    console.log('Successfully listening on port ' + port);
});
