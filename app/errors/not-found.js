
const 
    {StatusCodes} = require('http-status-codes'), // import module http-status-codes
    CustomAPIError = require('./custom-api-error'); // import custom-api-error.js

class NotFound extends CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.NOT_FOUND; // Add message NOT_FOUND from http-status-codes
    }
}
module.exports = NotFound;