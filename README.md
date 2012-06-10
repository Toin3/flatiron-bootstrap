# flatiron-bootstrap
Serve bootstrap static file in flatiron

## Installation
```
npm install flatiron-bootstrap
```

## Usage
At its core `flatiron-bootstrap` is a broadway-compatible plugin which can be used by any [flatiron](https://flatironjs.org) http application with a static serving plugin

```js
var flatiron = require('flatiron'),
    path = require('path'),
    app = flatiron.app;

app.config.file({ file: path.join(__dirname, 'config', 'config.json') });

app.use(flatiron.plugins.http);
app.use(flatiron.plugins.ecstatic);

app.use(require('flatiron-bootstrap'));

app.router.get('/', function () {
  this.res.json({ 'hello': 'world' })
});

app.start(3000);
```

Now start the server with

```
node app.js
```

and the following url's will serve bootstrap v2.0.4

```
http://localhost:3000/js/bootstrap.min.js
http://localhost:3000/css/bootstrap.min.js
http://localhost:3000/css/bootstrap-responsive.min.js
http://localhost:3000/img/glyphicons-halflings.png
http://localhost:3000/img/glyphicons-halflings-white.png
```

### NOTE

The version of this package is equal to the version of bootstrap served.

If you like this project, please watch this and [follow](http://github.com/users/follow?target=pksunkara) me.

## Testing
```
npm test
```

## Contributors
Here is a list of [Contributors](http://github.com/pksunkara/flatiron-cli-ok/contributors)

### TODO

__I accept pull requests and guarantee a reply back within a day__

## License
MIT/X11

## Bug Reports
Report [here](http://github.com/pksunkara/flatiron-bootstrap/issues). __Guaranteed reply within a day__.

## Contact
Pavan Kumar Sunkara (pavan.sss1991@gmail.com)

Follow me on [github](http://github.com/pksunkara), [twitter](http://twitter.com/pksunkara)
