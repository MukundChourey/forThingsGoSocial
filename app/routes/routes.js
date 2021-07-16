module.exports = (app) => {
    
    
    const student = require('../controller/controller.js');

    app.post('/add', student.add);
    

}