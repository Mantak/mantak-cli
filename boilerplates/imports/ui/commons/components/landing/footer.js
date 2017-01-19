import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Footer = () => {
  return (
    <section id="footer">
      <img src="images/logo.png" alt="logo"/>
      <p>© Copyright 2015</p>
      <p>Call us <strong>1.800.439.7656</strong></p>
        <RaisedButton label="开 始 使 用" primary/>
    </section>
  );
};

export default Footer;
