app.get('/:page', function(req, res){
    // Redirect if no slash at the end
    if (!req.url.endsWith('/')) {
      res.redirect(301, req.url + '/')
    }
  
    // Normal response goes here
  });