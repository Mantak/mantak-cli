import React from 'react';
import Hero from '../components/landing/hero';

// import Usecases from '../components/landing/usecases';
// import Features from '../components/landing/features';
// import Screenshots from '../components/landing/screenshots';
// import Reviews from '../components/landing/reviews';
// import FAQ from '../components/landing/faq';
// import Footer from '../components/landing/footer';

class LandingPage extends React.Component {
  render() {
    return (
      <div id="landing" className="up">
        <Hero/>
      </div>
    );
  }
}

export default LandingPage;
