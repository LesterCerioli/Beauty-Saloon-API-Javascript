class ApplicationException extends Error {
    /**
     * Constructor for ApplicationException
     * @param {string} message - The error message
     * @param {string} [title] - An optional title for the exception
     */
    constructor(message, title = '') {
      super(message); // Call the base class constructor with the message
      this.name = this.constructor.name; // Set the error name to the class name
      this.title = title; // Set the title property
      Error.captureStackTrace(this, this.constructor); // Ensure the stack trace is accurate
    }
  }
  
  module.exports = ApplicationException;
  