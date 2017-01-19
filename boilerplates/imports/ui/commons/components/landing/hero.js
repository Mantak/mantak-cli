import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <img src="images/logo.png" className="logo"/>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h2>
        <span className="s-1 in">近</span>
        <span className="s-2 in">朱</span>
        <span className="s-3 in">者</span>
        <span className="s-4 in">赤</span>
        <span>&nbsp;</span>
        <span className="s-5 in">近</span>
        <span className="s-6 in">书</span>
        <span className="s-7 in">者</span>
        <span className="s-8 in">智</span>
      </h2>
      <br/>
      <h6>
        <div className="s-i in">
          好记性不如烂笔头，把你的知识整理出来，温故知新，
          <br/>
          使之真正成为自己的东西。
        </div>
      </h6>
      <br/>
      <br/>
      <div className="s-b in">
        <RaisedButton href="/login" label="开 始 使 用" primary={true}/>
      </div>

      <div className="mockups">
        <img src="images/home_mockups_3.png" className="mockups-3 up"/>
        <img src="images/home_mockups_2.png" className="mockups-2 up"/>
        <img src="images/home_mockups_1.png" className="mockups-1"/>
      </div>
    </section>
  );
}

export default Hero;
