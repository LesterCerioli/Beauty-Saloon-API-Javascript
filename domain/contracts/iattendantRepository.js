class IAttendantRepository {
    // Simulating an interface by throwing errors for unimplemented methods
  
    /**
     * Method to get an attendant by name
     * @param {string} attendantName
     * @returns {Promise<Attendant>}
     */
    async getByAttendantName(attendantName) {
      throw new Error("getByAttendantName method not implemented");
    }
  
    /**
     * Method to get a list of attendants
     * @returns {Promise<Attendant[]>}
     */
    async getList() {
      throw new Error("getList method not implemented");
    }
  
    /**
     * Method to add a new attendant
     * @param {Attendant} attendant
     * @returns {Promise<void>}
     */
    async add(attendant) {
      throw new Error("add method not implemented");
    }
  
    /**
     * Method to update an attendant
     * @param {Attendant} attendant
     * @returns {void}
     */
    update(attendant) {
      throw new Error("update method not implemented");
    }
  
    /**
     * Method to remove an attendant
     * @param {Attendant} attendant
     * @returns {void}
     */
    remove(attendant) {
      throw new Error("remove method not implemented");
    }
  }
  
  module.exports = IAttendantRepository;
  