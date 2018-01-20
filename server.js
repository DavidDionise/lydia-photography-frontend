let express = require('express')
let app = express()
let { resolve } = require('path')
let dist_path = `${__dirname}/dist`

app.use(express.static(dist_path))

app.get('*', (req, res) => {
  res.sendFile(resolve(`${dist_path}/index.html`))
});

app.listen(80, () => {
  console.log('Front end server listening on port 80');
});
