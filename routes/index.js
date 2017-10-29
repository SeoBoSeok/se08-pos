var express = require('express');
var app = express();
var router = express.Router();

// get homepage
router.get('/', ensureAuthenticated, function (req, res) {
	res.render('index', {
		username: req.user.username
	});
});

// router.get('/productlist', function(req, res){
// 	res.statusCode = 200;
// 	// res.setHeader('');
// 	res.write(res.json());
// });

function ensureAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	} else {
		res.redirect('/users/login');
	}
}

module.exports = router;
