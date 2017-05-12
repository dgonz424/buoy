var db = require("../models/");

var express = require("express");

var router = express.Router();

var path = require("path");


//homepage redirects to user login page
router.get("/", function (req, res) {
  res.redirect("/login");
});

// Create all our routes and set up logic within those routes where required.
// routes need to be set up with correct database/table etc 5/6/17

//customer login page
router.get("/login", function(req, res) {
res.sendFile(path.join(__dirname, '../public', 'login.html'));
});

router.get("/services", function(req, res) {
res.sendFile(path.join(__dirname, '../public', 'services.html'));
});

// //saves customer info/redirects to services
// router.post("/login", function(req, res) {
// poolguys.findAll().then(function(dbpoolguys) {
   
//     res.redirect("/services");
//     });
// });

// //services available 
// router.get("/services", function(req, res) {
// .findAll().then(function(dbpoolguys) {
      
//       return res.render();
//     });
// });

// //saves services user chooses, redirects to providers
// router.post("/services", function(req, res) {
// .findAll().then(function(dbpoolguys) {
   
//     res.redirect("/providers");
//     });
// });

// //provider availability 
// router.get("/providers", function(req, res) {
// .findAll().then(function(dbpoolguys) {
      
//       return res.render();
//     });
// });

// //user selects provider
// router.post("/providers", function(req, res) {
// .findAll().then(function(dbpoolguys) {
   
//     res.redirect("/confirmation");
//     });
// });

// //confirmation page/ js sends confirmation email to user with booking info
// router.get("/confirmation", function(req, res) {
// .findAll().then(function(dbpoolguys) {
      
//       return res.render();
//     });
// });

// Export routes for server.js to use.
module.exports = router;
