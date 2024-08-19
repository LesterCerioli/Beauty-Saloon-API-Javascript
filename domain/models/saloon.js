const Address = require('../value_objects/address');
const Cnpj = require('../value_objects/cnpj');
const Telephone = require('../value_objects/telephone');

class Saloon {
  /**
   * Constructor to initialize the Saloon entity
   * @param {Address} address - The address of the saloon (value object)
   * @param {string} fantasyName - The fantasy name of the saloon
   * @param {Cnpj} cnpj - The CNPJ of the saloon (value object)
   * @param {string} ownerName - The owner name of the saloon
   * @param {Telephone} telephone - The telephone of the saloon (value object)
   */
  constructor(address, fantasyName, cnpj, ownerName, telephone) {
    if (!(address instanceof Address)) {
      throw new Error('Invalid Address object');
    }

    if (!(cnpj instanceof Cnpj)) {
      throw new Error('Invalid CNPJ object');
    }

    if (!(telephone instanceof Telephone)) {
      throw new Error('Invalid Telephone object');
    }

    this.address = address;
    this.fantasyName = fantasyName;
    this.cnpj = cnpj;
    this.ownerName = ownerName;
    this.telephone = telephone;
  }

  // Getters for each field

  getAddress() {
    return this.address;
  }

  getFantasyName() {
    return this.fantasyName;
  }

  getCnpj() {
    return this.cnpj;
  }

  getOwnerName() {
    return this.ownerName;
  }

  getTelephone() {
    return this.telephone;
  }

  // Setters for each field (optional depending on immutability preference)

  setAddress(address) {
    if (!(address instanceof Address)) {
      throw new Error('Invalid Address object');
    }
    this.address = address;
  }

  setFantasyName(fantasyName) {
    this.fantasyName = fantasyName;
  }

  setCnpj(cnpj) {
    if (!(cnpj instanceof Cnpj)) {
      throw new Error('Invalid CNPJ object');
    }
    this.cnpj = cnpj;
  }

  setOwnerName(ownerName) {
    this.ownerName = ownerName;
  }

  setTelephone(telephone) {
    if (!(telephone instanceof Telephone)) {
      throw new Error('Invalid Telephone object');
    }
    this.telephone = telephone;
  }

  // Equality check between two Saloon objects
  equals(other) {
    return other instanceof Saloon &&
      this.address.equals(other.address) &&
      this.fantasyName === other.fantasyName &&
      this.cnpj.equals(other.cnpj) &&
      this.ownerName === other.ownerName &&
      this.telephone.equals(other.telephone);
  }
}

module.exports = Saloon;
