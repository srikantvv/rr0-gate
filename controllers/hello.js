'use strict';

module.exports.controller = function(app) {
  app.get('/hello', function(req, res) {  // When user requests hello page
    res.render('hello/hello', {           // Render hello page
    });
  });
};
