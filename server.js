var express = require('express');
var login = require('./login');

express()
  .set('view engine', 'ejs')
  .use(express.static('./public'))
  .use(login.routes)
  .use(require('./chirps'))
  .get('*', login.required, function(req, res) {
    res.render('index', {
      user: login.safe(req.user)
    });
  })
  .listen(process.env.PORT || 3000);