// require models
var db = require("../models");
// export function
module.exports = function (app) {

  // find all burgers
  app.get("/", function (req, res) {
    db.Burger.findAll({}).then(function (data) {
      var hbsObject = {
        burgers: data
      };
     // console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  // create burger
 app.post("/", function (req, res) {
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: false
   }).then(function (data) {
      res.redirect("/");
    });

  });
  // update burger devoured
  app.post("/:id", function (req, res) {

    var status = req.body.devoured;
    console.log("Status = " + status);

    db.Burger.update(
    { devoured: status },

      {
        where: {
          id: req.params.id
        }

       });

        res.redirect("/");

  });

    // delete burder
   app.post("/delete/:id", function (req, res) {


    db.Burger.destroy({
      
        where: {
          id: req.params.id
        }

       });

        res.redirect("/");

  });
}