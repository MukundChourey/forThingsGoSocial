const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name: {type: String, trim: true, required: true},
    contact: {type: Number, trim: true, required: true},
    subjects: {type: Array, required: true},
    class: {type: String, trim: true, required: true},
    year: {type: Number, trim: true, required: true},
    society: {type: Array, required: false},        
    }, {
        timestamps: true
    },
    { useUnifiedTopology: true }
);

module.exports = mongoose.model('student', studentSchema);