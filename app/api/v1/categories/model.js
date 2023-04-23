const mongoose = require('mongoose'),
{model,Schema} = mongoose;

let categorySchema = Schema(
    {
        name: {
            type: String,
            minLength: [3, 'Category name min 3 characters'],
            maxLength: [20, 'Category name max 20 characters'],
            required: [true, 'Category name can not be empty']
        } 
    },
    {
        timestamps: true
    }
);

module.exports = model('Category', categorySchema);
