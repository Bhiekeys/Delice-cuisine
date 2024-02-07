import Footer from "../components/banner/Footer"
import IntroductionPage from "../components/banner/IntroductionPage"
import Landingpage from "../components/banner/Landingpage"
import Testimonial from "../components/banner/Testimonial"
import Header from "../components/header/Header"


const Home = () => {
  return (
    <>
      <Header />
      <Landingpage />
      <IntroductionPage />
      <Testimonial />
      <Footer />
    </>
  );
}

export default Home