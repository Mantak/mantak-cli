import React from 'react';

import Hero from '../components/landing/hero';
import Usecases from '../components/landing/usecases';
import Features from '../components/landing/features';
import Screenshots from '../components/landing/screenshots';
import FAQ from '../components/landing/faq';
import Footer from '../components/landing/footer';


function _Page() {
  return (
    <div id="landing" className="up">
      <Hero/>
      <Features/>
      <Usecases/>
      <Screenshots/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default _Page;
