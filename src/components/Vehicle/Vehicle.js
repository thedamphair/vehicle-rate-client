import React, { Component } from 'react';

import './Vehicle.css';

class Vehicle extends Component {
  state = {
    maintenance: this.props.info.maintenance
  }
  setToMaintenance = () => {
    const maintenance = !this.state.maintenance
    this.setState({maintenance: maintenance})
  }

  render () {

    let vehicleClass = 'Vehicle'
    if (this.state.maintenance) {
      vehicleClass = 'Vehicle-maintenance'
    }
    return (
      <article className={vehicleClass}>
        <h1>{this.props.info.id}</h1>
        <div>
          <p className="Data">{this.props.info.description}</p>
          <p className="Data">{this.props.info.model}</p>
          <p className="Data">{this.props.info.make}</p>
          <p className="Data">{this.props.info.km}</p>
          <img src={this.props.info.image} /><br />
          <button className="Button" onClick={this.setToMaintenance}>Set Maintenance</button>
        </div>
      </article>
    )
  }
}

// const vehicle = (this.props) => (
//   <article className="Vehicle">
//     <h1>{this.props.info.id}</h1>
//     <div>
//       <p className="Data">{this.props.info.description}</p>
//       <p className="Data">{this.props.info.model}</p>
//       <p className="Data">{this.props.info.make}</p>
//       <p className="Data">{this.props.info.km}</p>
//       <img src={this.props.info.image} /><br />
//       <button className="Button" onClick={}>Set Maintenance</button>
//     </div>
//   </article>
// );

export default Vehicle;