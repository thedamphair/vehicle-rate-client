import axios from 'axios';

export class VehicleService {
  async getVehicles () {
    return axios.get('https://vehicle-rating-api.azurewebsites.net/api/vehicles')
  }
}
