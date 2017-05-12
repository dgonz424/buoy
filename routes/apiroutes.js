 // Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

 // GET route for getting all of the posts
  app.get("/api/poolguys", function(req, res) {
    console.log("hit");
    console.log(req.originalUrl);
    var query = {};
    if (req.query.bal == "1") {
              query.water_balance = true;
            }
    if (req.query.san == "1") {
              query.pool_sanitizing = true;
              }
    if (req.query.shock == "1") {
              query.shocking_treatment = true;
            }
    if (req.query.clar == "1") {
              query.clarification = true;
            }
    if (req.query.per == "1") {
              query.periodic_cleaning = true;
            }
    if (req.query.fil == "1") {
              query.filterbackwashingandrepair = true;
            }
      //TODO more if statements that match query.property to client in services.html line 79
      console.log(query);
    db.PoolGuy.findAll({
      where: query
    }).then(function(dbpoolguys) {
      console.log(dbpoolguys);
      res.json(dbpoolguys);
    });
  });

  };