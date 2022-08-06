import React, { Component } from 'react';

// eslint-disable-next-line
class Exhibit extends Component {
    render() {
      return (
        <div className="card text-white bg-dark">
            <div className="card-body">
              {this.props.name}
            </div>
        </div>
      );
    }
}

export default Exhibit;