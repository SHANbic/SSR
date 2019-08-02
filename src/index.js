import express from 'express';
import renderer from './helpers/renderer';

const app = express();
const port = 4000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(renderer());
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
