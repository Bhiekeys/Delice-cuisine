import Footer from '../components/banner/Footer';
import Landingpage from '../components/banner/Landingpage';
import Customers from '../components/gallery/Customers';
import Gallerypage from '../components/gallery/Gallerypage';
import Header from '../components/header/Header';

const Gallery = () => {
  return (
    <>
      <Header />
      <Landingpage />
      <Gallerypage />
      {/* <Customers /> */}
      <Footer />
    </>
  );
};

export default Gallery;
