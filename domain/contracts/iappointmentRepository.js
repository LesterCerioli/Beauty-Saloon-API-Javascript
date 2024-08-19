class IAppointmentRepository {
    // Simulating an interface by throwing errors for unimplemented methods
  
    /**
     * Method to get an appointment by date
     * @param {Date|null} date
     * @returns {Promise<Appointment>}
     */
    async getByDate(date) {
      throw new Error("getByDate method not implemented");
    }
  
    /**
     * Method to get an appointment by appointment hour
     * @param {Date|null} appointmentHour
     * @returns {Promise<Appointment>}
     */
    async getByAppointmentHour(appointmentHour) {
      throw new Error("getByAppointmentHour method not implemented");
    }
  
    /**
     * Method to get a list of appointments
     * @returns {Promise<Appointment[]>}
     */
    async getList() {
      throw new Error("getList method not implemented");
    }
  
    /**
     * Method to add a new appointment
     * @param {Appointment} appointment
     * @returns {Promise<void>}
     */
    async add(appointment) {
      throw new Error("add method not implemented");
    }
  
    /**
     * Method to update an appointment
     * @param {Appointment} appointment
     * @returns {void}
     */
    update(appointment) {
      throw new Error("update method not implemented");
    }
  
    /**
     * Method to remove an appointment
     * @param {Appointment} appointment
     * @returns {void}
     */
    remove(appointment) {
      throw new Error("remove method not implemented");
    }
  }
  
  module.exports = IAppointmentRepository;
  