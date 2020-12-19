import axios from 'axios';

export class VehicleService {
  async getVehicles () {
    return axios.get('http://localhost:3000/api/vehicles')
  }
}
