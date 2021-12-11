app.use(function(req, res, next) {
    if (req.path.length > 1 && //$/.test(req.path)) {
      var query = req.url.slice(req.path.length)
      res.redirect(301, req.path.slice(0, -1) + query)
    } else {
      next()
    }
});