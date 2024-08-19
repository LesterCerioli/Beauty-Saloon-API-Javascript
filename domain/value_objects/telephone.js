class Telephone {
    /**
     * Constructor for the Telephone class
     * @param {string} telephoneNumber - The phone number
     * @param {string} telephoneRegion - The phone region
     */
    constructor(telephoneNumber, telephoneRegion) {
      if (this.validateTelephone(telephoneNumber)) {
        this.telephoneNumber = telephoneNumber;
        this.telephoneRegion = telephoneRegion;
      } else {
        throw new Error('Invalid telephone number');
      }
    }
  
    /**
     * Get the telephone number
     * @returns {string}
     */
    getTelephoneNumber() {
      return this.telephoneNumber;
    }
  
    /**
     * Get the telephone region
     * @returns {string}
     */
    getTelephoneRegion() {
      return this.telephoneRegion;
    }
  
    /**
     * Validate a telephone number using a regular expression to strip non-alphanumeric characters.
     * @param {string} telephone - The telephone number to validate
     * @returns {boolean}
     */
    validateTelephone(telephone) {
      const cleanedTelephone = telephone.replace(/[^0-9a-zA-Z]+/g, '');
  
      if (cleanedTelephone.length === 13) {
        console.log('The phone number is valid');
        return true;
      } else {
        console.error('The phone number is invalid');
        return false;
      }
    }
  
    /**
     * Equality comparison for value objects (Not implemented in this example).
     */
    getEqualityComponents() {
      throw new Error('Method not implemented.');
    }
  }
  
  module.exports = Telephone;
  