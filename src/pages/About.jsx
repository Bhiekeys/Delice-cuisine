import AboutPage from '../components/about/AboutPage';
import History from '../components/about/History';
import Values from '../components/about/Values';
import Footer from '../components/banner/Footer';
import Header from '../components/header/Header';

const About = () => {
  return (
    <>
      <Header />
      <AboutPage />
      <History />
      <Values />
      <Footer />
    </>
  );
};

export default About;
