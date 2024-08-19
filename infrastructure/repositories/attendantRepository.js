const IAttendantRepository = require('../../domain/contracts/iattendantRepository');

class AttendantRepositoryImpl extends IAttendantRepository {
    constructor() {
      super();
      this.attendants = [];
    }
  
    async getByAttendantName(attendantName) {
      return this.attendants.find(attendant => attendant.name === attendantName);
    }
  
    async getList() {
      return this.attendants;
    }
  
    async add(attendant) {
      this.attendants.push(attendant);
    }
  
    update(attendant) {
      const index = this.attendants.findIndex(att => att.id === attendant.id);
      if (index !== -1) {
        this.attendants[index] = attendant;
      }
    }
  
    remove(attendant) {
      this.attendants = this.attendants.filter(att => att.id !== attendant.id);
    }
  }
  
  module.exports = AttendantRepositoryImpl;