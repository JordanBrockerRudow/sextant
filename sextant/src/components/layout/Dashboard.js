import React from 'react';
import Banner from './layout/Banner';
import ExhibitContainer from './layout/ExhibitContainer';



function Dashboard(props) {
    return(
        <div className="exhibit">
          <div className="main">
            <Banner/>
            <ExhibitContainer/>

          </div>
        </div>
    );
}

export default Dashboard;