exports.errorforus = (req, res, next) => {
  res.render('error', {
    pageTitle: 'Page not found!',
    path: '/',
  });
};
