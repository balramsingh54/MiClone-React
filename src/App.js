import './App.css';
import PreNavbar from './components/PreNavbar';
import NavBar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Slider from './components/Slider';
import Offers from './components/Offers';


function App() {
  return (
    <Router>
      <PreNavbar/>
      <NavBar/>
      <Slider/>
      <Offers/>
    </Router>
  );
}


export default App;

