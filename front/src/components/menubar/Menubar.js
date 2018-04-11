// Top menubar container

import React from 'react';
import './Menubar.css';
import Menubtns from './Menubtns.js';
import Minimu from './Minimu.js';
import PropTypes from 'prop-types';

const Menubar = props => {
  return (
    <div
      className={ // Checking general style
        !props.changeStyle ? (
          'mbwraper'
        ) : (
          `mbwraper mbwraper${props.changeStyle}`
        )
      }
    >
      <a href="http://www.zhldev.com" target="blank"><div className="toplogo" /></a>
      <div className="squarebar" onClick={()=>{props.MiniMenuContr_open()}}>
        <i className="fas fa-bars" />
      </div>

      {props.dropshow ? <Minimu {...props} /> : null}

      <div className="longmnct"><Menubtns {...props} /></div>
    </div>
  );
};

Menubar.propTypes = {
      changeStyle: PropTypes.string,
      dropshow: PropTypes.bool,
};


export default Menubar;
