import React, { Component } from 'react';
import './App.css';

// eslint-disable-next-line
class Banner extends Component {
  render() {
    return (
      <div className="container-fluid p-3 text-center">
        <h1>Sextant</h1>
      </div>
    );
  }
}
// eslint-disable-next-line
class Exhibit extends Component {
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



function App() {
  return (
    <div className="container-fluid">
      <Banner />
      <Exhibit />
    
    
      <div className="footer">
        <footer>

        </footer>
      </div>
    </div>
  );
}

export default App;
