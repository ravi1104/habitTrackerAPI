const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    date: {
        type: String,
        default: () => new Date().toISOString().split('T')[0]
    },
    habit: [
        {
            status: {
                type: String,
                enum: ['None', 'Done', 'Pending'],
                default: 'None'
            },
            name: {
                type: String,
                required: true
            }
        }
    ]
});

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;
