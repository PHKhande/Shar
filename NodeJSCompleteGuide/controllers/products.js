const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/shop');
};

exports.getProducts = (req, res, next) => {
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/shop',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
};

exports.contact = (req, res, next) => {
  res.render('contactus', {
    pageTitle: 'Contact Us',
    path: '/contactus',
    formsCSS: true,
  });
};

exports.success = (req, res, next) => {
  res.render('success', {
    pageTitle: 'Contacted!',
    path: '/successful',
  });
};