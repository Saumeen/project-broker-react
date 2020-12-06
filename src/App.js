
import './App.css';
import Builder from './Container/Builder';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Builder></Builder>
      </Router>
    </div>
  );
}

export default App;
