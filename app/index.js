const app = require('express')();
const server = require('http').createServer(app);
const cors = require('cors');
app.use(cors());

require('./socket')(server);

let port = process.env.PORT || 8080;
server.listen(port, () => {
    console.log('ready on', port);
});
