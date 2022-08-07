import React from 'react';
import Banner from './Banner';
// eslint-disable-next-line
import APIUtil from '../common/APIUtil';
import Pylon from '../common/PylonClient';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
      return(
        <div className="exhibit">
          <div className="main">
            <Banner/>
            <APIUtil/>
            <Pylon />
          </div>
        </div>
    );
  }
}

export default Dashboard;