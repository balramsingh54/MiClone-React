import './App.css';
import PreNavbar from './components/PreNavbar';
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        <Route path='music' element={<HotAccessories music={value.hotAccessoriesCover.music} cover={value.hotAccessories.music[0].image} />}></Route>
        <Route path='smartDevices' element={<HotAccessories data1={value.hotAccessoriesCover.smartDevice} />}></Route>
        <Route path='home' element={<HotAccessories data1={value.hotAccessoriesCover.home} />}></Route>
        <Route path='lifestyle' element={<HotAccessories data1={value.hotAccessoriesCover.lifeStyle} />}></Route>
        <Route path='mobileaccessories' element={<HotAccessories data1={value.hotAccessoriesCover.mobileAccessories} />}></Route>
      </Routes>

      <Headings text="PRODUCT REVIEWS" />
      <ProductReviews />
      <Footer />
      <FooterFinal />

    </Router>
  );
}


export default App;

