import React, { Component } from 'react';

import { VehicleService } from '../../providers/vehicles';

import Vehicle from '../Vehicle/Vehicle';

class VehicleList extends Component {
  vehicleService = new VehicleService()
  state = {
    vehicles: []
  }

  async componentDidMount () {
    const response = await this.vehicleService.getVehicles()
    this.setState({vehicles: response.data})
  }

  render () {
    const vehicles = this.state.vehicles.map(vehicle => {
      vehicle.maintenance = false;
      return <Vehicle key={vehicle.id} info={vehicle} />
    });
    return (
      <div>
        <h1>Vehicles</h1>
        <section>
          { vehicles }
        </section>
      </div>
    );
  }
}

export default VehicleList;
