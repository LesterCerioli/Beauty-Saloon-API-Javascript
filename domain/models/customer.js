const Telephone = require('../value_objects/telephone'); // Import the Telephone value object
const Cnpj = require('../value_objects/cnpj'); // Import the Cnpj value object

class Customer {
  /**
   * Constructor to initialize the Customer object
   * @param {string} customerName - The name of the customer
   * @param {string} email - The email of the customer
   * @param {Telephone} telephone - The telephone value object for the customer
   * @param {Cnpj} cnpj - The CNPJ value object for the customer
   */
  constructor(customerName, email, telephone, cnpj) {
    this.customerName = customerName;
    this.email = email;
    this.telephone = telephone instanceof Telephone ? telephone : new Telephone(telephone.number, telephone.region);
    this.cnpj = cnpj instanceof Cnpj ? cnpj : new Cnpj(cnpj); // Validate and assign Cnpj value object
  }

  /**
   * Getter for customerName
   * @returns {string} - The name of the customer
   */
  getCustomerName() {
    return this.customerName;
  }

  /**
   * Getter for email
   * @returns {string} - The email of the customer
   */
  getEmail() {
    return this.email;
  }

  /**
   * Getter for telephone
   * @returns {Telephone} - The telephone value object for the customer
   */
  getTelephone() {
    return this.telephone;
  }

  /**
   * Getter for Cnpj
   * @returns {Cnpj} - The CNPJ value object for the customer
   */
  getCnpj() {
    return this.cnpj;
  }

  /**
   * Setter for customerName
   * @param {string} name - The new name for the customer
   */
  setCustomerName(name) {
    this.customerName = name;
  }

  /**
   * Setter for email
   * @param {string} email - The new email for the customer
   */
  setEmail(email) {
    this.email = email;
  }

  /**
   * Setter for telephone
   * @param {Telephone} telephone - The new telephone value object for the customer
   */
  setTelephone(telephone) {
    this.telephone = telephone instanceof Telephone ? telephone : new Telephone(telephone.number, telephone.region);
  }

  /**
   * Setter for Cnpj
   * @param {Cnpj} cnpj - The new CNPJ value object for the customer
   */
  setCnpj(cnpj) {
    this.cnpj = cnpj instanceof Cnpj ? cnpj : new Cnpj(cnpj);
  }
}

module.exports = Customer;
