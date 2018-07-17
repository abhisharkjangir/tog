const compression = require('compression');
const express = require('express');
const morgan = require('morgan');

const morganFormat = '(STATUS~:status) ":method :url HTTP/:http-version" (REM_ADDR~:remote-addr) (RES_TIME~:response-time[3]) (REM_USER~:remote-user) (RES_CON_LENGTH~:res[content-length]) (REFERRER~:referrer) (USER_AGENT~:user-agent)';

//Start Express App
const app = express();

const port = process.env.PORT || 9000;

//Logging
app.use(morgan(morganFormat));

//Compression
app.use(compression({
  filter: function () { return true; }
}));

//Serve static assets
app.use(express.static(__dirname + '/build/'));


//Serve index for all other requests
function sendIndex(req, res, next) {
  res.sendFile('index.html', { root: __dirname + "/build/" });
}

app.all('*', sendIndex);

console.log(`mshankar running on port ${port}`);

app.listen(port);
