import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Order from './pages/Order';
import Gallery from './pages/Gallery';
import VideoCall from './components/telephone/VideoCall';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<Order />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/call" element={<VideoCall />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
//f30dcf3aa1524bca80e0356cbbb2b302