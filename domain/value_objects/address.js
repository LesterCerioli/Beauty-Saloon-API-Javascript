class Address {
    /**
     * Constructor to initialize the Address object
     * @param {string} streetOrAvenue - The street or avenue of the address
     * @param {string} number - The number of the address
     * @param {string} district - The district of the address
     * @param {string} state - The state of the address
     * @param {string} city - The city of the address
     * @param {string} uf - The UF (State abbreviation) of the address
     */
    constructor(streetOrAvenue, number, district, state, city, uf) {
      if (!this._isValidUf(uf)) {
        throw new Error("Invalid UF (state abbreviation) provided.");
      }
  
      this.streetOrAvenue = streetOrAvenue;
      this.number = number;
      this.district = district;
      this.state = state;
      this.city = city;
      this.uf = uf;
    }
  
    /**
     * Validate if the UF (state abbreviation) is valid
     * @param {string} uf - The UF to validate
     * @returns {boolean} - True if valid, otherwise false
     */
    _isValidUf(uf) {
      const validUFs = [
        "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", 
        "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
      ];
      return validUFs.includes(uf.toUpperCase());
    }
  
    /**
     * Getter for the full address in a formatted string
     * @returns {string} - The full address as a formatted string
     */
    getFullAddress() {
      return `${this.streetOrAvenue}, ${this.number} - ${this.district}, ${this.city} - ${this.uf}, ${this.state}`;
    }
  
    // Individual getters for each field
  
    getStreetOrAvenue() {
      return this.streetOrAvenue;
    }
  
    getNumber() {
      return this.number;
    }
  
    getDistrict() {
      return this.district;
    }
  
    getState() {
      return this.state;
    }
  
    getCity() {
      return this.city;
    }
  
    getUf() {
      return this.uf;
    }
  
    // Setters for each field (optional depending on immutability preference)
  
    setStreetOrAvenue(streetOrAvenue) {
      this.streetOrAvenue = streetOrAvenue;
    }
  
    setNumber(number) {
      this.number = number;
    }
  
    setDistrict(district) {
      this.district = district;
    }
  
    setState(state) {
      this.state = state;
    }
  
    setCity(city) {
      this.city = city;
    }
  
    setUf(uf) {
      if (!this._isValidUf(uf)) {
        throw new Error("Invalid UF (state abbreviation) provided.");
      }
      this.uf = uf;
    }
  
    // Equality method
    equals(other) {
      return other instanceof Address &&
        this.streetOrAvenue === other.streetOrAvenue &&
        this.number === other.number &&
        this.district === other.district &&
        this.state === other.state &&
        this.city === other.city &&
        this.uf === other.uf;
    }
  }
  
  module.exports = Address;
  