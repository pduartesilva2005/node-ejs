const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (request, response) => {
  const items = [
    {
      title: 'D',
      message: 'esenvolver aplicações/serviços de forma fácil'
    },
    {
      title: 'E',
      message: 'JS usa JavaScript para renderizar HTML'
    },
    {
      title: 'M',
      message: 'uito fácil de usar'
    },
    {
      title: 'A',
      message: 'plica de JavaScript dentro HTML'
    },
    {
      title: 'I',
      message: 'nstall EJS'
    },
    {
      title: 'S',
      message: 'intaxe simples'
    }
  ];

  response.render('pages/index', { items });
});

app.get('/about', (request, response) => {
  response.render('pages/about');
});

app.listen(3333, () => {
  console.log('Server started at http://localhost:3333');
});
