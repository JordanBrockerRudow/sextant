import './App.css';
// eslint-disable-next-line
import Dashboard from './dashboard/Dashboard';
import APIUtil from './common/APIUtil';


function App() {
  return (
    <div className="container-fluid">
      <APIUtil />
      <div className="footer">
        <footer>

        </footer>
      </div>
    </div>
  );
}

export default App;
