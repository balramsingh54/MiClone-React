import './App.css';
import PreNavbar from './components/PreNavbar';
import NavBar from './components/Navbar';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Slider from './components/Slider';
import Offers from './components/Offers';
import Headings from './components/Headings';
import StarProducts from './components/StarProducts.js';
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import ProductReviews from './components/ProductReviews';
import Footer from './components/Footer';
import FooterFinal from './components/FooterFinal';
import HotAccessories from './components/HotAccessories';
import value from './data/data.json';

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

      <Routes>
        <Route path='music' element={<HotAccessories data ={"balram1"} />}></Route>
        <Route path='smartDevices' element={<HotAccessories data ={"balram2"} />}></Route>
        <Route path='home' element={<HotAccessories data ={"balram3"} />}></Route>
        <Route path='lifestyle' element={<HotAccessories data ={"balram4"} />}></Route>
        <Route path='mobileaccessories' element={<HotAccessories data ={"balram5"} />}></Route>
      </Routes>

      <Headings text="PRODUCT REVIEWS" />
      <ProductReviews />
      <Footer />
      <FooterFinal />

    </Router>
  );
}


export default App;

