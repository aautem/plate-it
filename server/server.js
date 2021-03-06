const express = require('express');

const app = express();

app.set('port', (process.env.PORT || 3001));

app.get('/test', (req, res) => {
  res.send('hello world');
});

app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at localhost:${app.get('port')}`);
});
