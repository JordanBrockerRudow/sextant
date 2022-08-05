import React, { Component } from 'react';

// eslint-disable-next-line
class ExhibitContainer extends Component {
    render() {
      return (
        <div className="exhibit">
          <div className="main">
            <div className="card">
              <div className="card-body">{this.props.name}</div>
            </div>
          </div>
        </div>
      );
    }
}

export default ExhibitContainer;
