class Cnpj {
    /**
     * Constructor to initialize the CNPJ object
     * @param {string} cnpjNumber - The CNPJ number to be validated and set
     */
    constructor(cnpjNumber) {
      this.setCnpjNumber(cnpjNumber);
    }
  
    /**
     * Getter to access the CNPJ number
     * @returns {string} - The CNPJ number
     */
    getCnpjNumber() {
      return this._cnpjNumber;
    }
  
    /**
     * Private method to set the CNPJ number and validate it
     * @param {string} cnpjNumber - The CNPJ number to set and validate
     * @throws {Error} - Throws an error if the CNPJ number is invalid
     */
    setCnpjNumber(cnpjNumber) {
      if (!this.isValid(cnpjNumber)) {
        throw new Error('Invalid CNPJ Number');
      }
  
      this._cnpjNumber = cnpjNumber;
    }
  
    /**
     * Validates the CNPJ number
     * @param {string} cnpjNumber - The CNPJ number to validate
     * @returns {boolean} - Returns true if the CNPJ is valid, false otherwise
     */
    isValid(cnpjNumber) {
      if (!cnpjNumber || typeof cnpjNumber !== 'string') return false;
  
      // Remove non-digit characters
      const cleanCnpj = cnpjNumber.replace(/\D/g, '');
  
      // CNPJ must have 14 digits
      if (cleanCnpj.length !== 14) return false;
  
      // Check for repeated digits or invalid checksum
      return !this.isRepeatedDigits(cleanCnpj) && this.isValidChecksum(cleanCnpj);
    }
  
    /**
     * Check for repeated digits in the CNPJ number
     * @param {string} cnpjNumber - The CNPJ number to check
     * @returns {boolean} - Returns true if all digits are the same
     */
    isRepeatedDigits(cnpjNumber) {
      return cnpjNumber.split('').every((char) => char === cnpjNumber[0]);
    }
  
    /**
     * Validates the checksum of the CNPJ number
     * @param {string} cnpjNumber - The CNPJ number to validate
     * @returns {boolean} - Returns true if the checksum is valid, false otherwise
     */
    isValidChecksum(cnpjNumber) {
      let sum = 0;
      let multiplier = 5;
  
      // Calculate first checksum digit
      for (let i = 0; i < 12; i++) {
        sum += parseInt(cnpjNumber[i], 10) * multiplier;
        multiplier = multiplier === 2 ? 9 : multiplier - 1;
      }
  
      let remainder = sum % 11;
      const digit1 = remainder < 2 ? 0 : 11 - remainder;
  
      sum = 0;
      multiplier = 6;
  
      // Calculate second checksum digit
      for (let i = 0; i < 13; i++) {
        sum += parseInt(cnpjNumber[i], 10) * multiplier;
        multiplier = multiplier === 2 ? 9 : multiplier - 1;
      }
  
      remainder = sum % 11;
      const digit2 = remainder < 2 ? 0 : 11 - remainder;
  
      return (
        parseInt(cnpjNumber[12], 10) === digit1 &&
        parseInt(cnpjNumber[13], 10) === digit2
      );
    }
  
    /**
     * Method to check equality based on CNPJ number
     * @returns {Iterable} - Returns the CNPJ number as the equality component
     */
    *getEqualityComponents() {
      yield this.getCnpjNumber();
    }
  
    /**
     * Implicit conversion from string to CNPJ
     * @param {string} value - The CNPJ string to convert
     * @returns {Cnpj} - The CNPJ object
     */
    static fromString(value) {
      return new Cnpj(value);
    }
  
    /**
     * Explicit conversion from CNPJ to string
     * @returns {string} - The CNPJ number
     */
    toString() {
      return this.getCnpjNumber();
    }
  }
  
  module.exports = Cnpj;
  