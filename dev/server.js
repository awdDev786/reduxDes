const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack/dev.conf');
const port = 8000;

new WebpackDevServer(webpack(config), {
    hot: true,
    publicPath: config.output.publicPath,
    stats: { colors: true }
}).listen(port, 'localhost', function (err) {
    if (err) {
        return console.log(err);
    }

    console.log(`Listening at http://localhost:${ port }/`);
});