
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Home', brand: 'Kockout.js Tutorials' });
};

exports.about = function(req, res){
  res.render('about', { title: 'About', brand: 'Kockout.js Tutorials' });
};
