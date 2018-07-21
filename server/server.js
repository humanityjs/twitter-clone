const express = require('express')
const bodyParser = require('body-parser');
const routes = require('./routes')
const path = require('path')

const app = express();


const router = express.Router()

const PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

routes(router);
app.use('/api/v1', router)

app.use('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`)
});