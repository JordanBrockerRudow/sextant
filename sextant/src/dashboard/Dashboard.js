import React from 'react';
import Banner from './Banner';
import Exhibit from './Exhibit';


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
            <Exhibit/>

          </div>
        </div>
    );
  }
}

export default Dashboard;