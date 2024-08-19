class Appointment {
    constructor(date = new Date(), appointmentHour = new Date()) {
      this._attendants = [];
      this._customers = [];
      this.date = date;
      this.appointmentHour = appointmentHour;
      this.attendant = null;
      this.customer = null;
    }
  
    // Getter for attendants
    get attendants() {
      return this._attendants.slice();  // Returning a copy to make it read-only
    }
  
    // Getter for customers
    get customers() {
      return this._customers.slice();  // Returning a copy to make it read-only
    }
  
    // Add attendant
    addAttendant(attendant) {
      this._attendants.push(attendant);
    }
  
    // Add customer
    addCustomer(customer) {
      this._customers.push(customer);
    }
  
    // Setter for attendant
    setAttendant(attendant) {
      this.attendant = attendant;
    }
  
    // Setter for customer
    setCustomer(customer) {
      this.customer = customer;
    }
  }