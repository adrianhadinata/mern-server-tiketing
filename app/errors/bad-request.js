
const 
    {StatusCodes} = require('http-status-codes'), // import module http-status-codes
    CustomAPIError = require('./custom-api-error'); // import custom-api-error.js

class BadRequest extends CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.BAD_REQUEST; // Add message BAD_REQUEST from http-status-codes
    }
}
module.exports = BadRequest;