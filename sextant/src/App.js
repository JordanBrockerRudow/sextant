import './App.css';
import Banner from './components/layout/Banner';
import ExhibitContainer from './components/layout/ExhibitContainer';
// eslint-disable-next-line
import Exhibit from './components/layout/Exhibit';
// eslint-disable-next-line
import IPAddress from './components/IP';


function App() {
  return (
    <div className="container-fluid">
      <Banner />
      <ExhibitContainer />
    
    
      <div className="footer">
        <footer>

        </footer>
      </div>
    </div>
  );
}

export default App;
