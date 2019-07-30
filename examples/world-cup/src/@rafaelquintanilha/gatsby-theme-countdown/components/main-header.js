import React from 'react';
import QATAR_LOGO from './qatar-logo.png';

const MainHeader = ({ text }) => (
  <div style={{height: "100%"}}>
    <img src={QATAR_LOGO} alt={text} title={text} height="100%" />
  </div>
);

export default MainHeader;