class Attendant {
    /**
     * Constructor for the Attendant class
     * @param {string} [attendantName] - The name of the attendant
     */
    constructor(attendantName = null) {
      this.attendantName = attendantName;
    }
  
    /**
     * Get the name of the attendant
     * @returns {string|null}
     */
    getAttendantName() {
      return this.attendantName;
    }
  
    /**
     * Set the name of the attendant
     * @param {string|null} attendantName - The new name for the attendant
     */
    setAttendantName(attendantName) {
      this.attendantName = attendantName;
    }
  }
  
  module.exports = Attendant;
  