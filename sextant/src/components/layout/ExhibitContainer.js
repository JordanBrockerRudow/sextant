import React from 'react';
import Exhibit from './Exhibit';

// eslint-disable-next-line
function ExhibitContainer(card) {
      return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <Exhibit />

          </div>
        </div>
      );
}

export default ExhibitContainer;
