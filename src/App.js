import './App.css';
import PreNavbar from './components/PreNavbar';
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Slider from './components/Slider';
import Offers from './components/Offers';
import Headings from './components/Headings';
import StarProducts from './components/StarProducts.js';
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import ProductReviews from './components/ProductReviews';
import Footer from './components/Footer';
import FooterFinal from './components/FooterFinal';


function App() {
  return (
    <Router>
      <PreNavbar />
      <NavBar />
      <Slider />
      <Offers />
      <Headings text="STAR PRODUCTS" />
      <StarProducts />
      <Headings text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Headings text="PRODUCT REVIEWS" />
      <ProductReviews />
      <Footer />
      <FooterFinal />
    </Router>
  );
}


export default App;

