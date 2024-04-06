const home = require('../views/home');
const student = require('../views/student');

exports.handleHome = (req, res) => {
 res.send(home.renderPage());
};

exports.handleStudent = (req, res) => {
 res.send(student.renderPage());
};