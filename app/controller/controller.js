const student = require("../model/model.js");
const creds = require('../../config/credentials.js');
var escapeHtml = require("escape-html");

exports.add = (req, res) => {
  let header = req.get("Authkey");
  if (header == creds.Authkey) {
    if (!req.body.name) {
      return res.send({ status: 201, message: "Name Field empty!" });
    } else if (!req.body.contact) {
      return res.send({ status: 201, message: "Contact Field empty!" });
    } else if (!req.body.year) {
      return res.send({ status: 201, message: "Year Field empty!" });
    } else if (!req.body.class) {
      return res.send({ status: 201, message: "Class Field empty!" });
    } else if (!req.body.subjects || req.body.subjects.length == 0) {
      return res.send({ status: 201, message: "No subjects data given!" });
    } else {
      let name = escapeHtml(req.body.name);
      let stud_class = escapeHtml(req.body.class);
      let year = escapeHtml(req.body.year);
      let contact = escapeHtml(req.body.contact);
      let subjects = req.body.subjects;

      
      if (req.body.society != null) {
        let society = req.body.society;
        var students = new student({
          name: name,
          class: stud_class,
          year: year,
          contact: contact,
          subjects: subjects,
          society: society,
        });

        
      } else {
        var students = new student({
          name: name,
          class: stud_class,
          year: year,
          contact: contact,
          subjects: subjects,
        });

        
      }

      students
          .save()
          .then((data) => {
            res.send({
              status: 200,
              message: "Successfully added",
            });
          })
          .catch((err) => {
            res.send({
              status: 201,
              message: err.message || "Some error occured",
            });
          });
    }
  } else {
    res.send({ status: 201, message: "Your aren't authorized" });
  }
};
