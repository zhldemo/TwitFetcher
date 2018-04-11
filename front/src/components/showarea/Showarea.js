//Showarea component is responsible for render the list of tweets

import PropTypes from 'prop-types';
import React  from 'react';
import Showbox from "./Showbox.js";
import "./Showarea.css";

const Showarea = (props) => {
  // Map out all the inputed tweets
  let boxs = props.inputtwts.map((twt)=>{
      return <Showbox key={twt.id} {...props} {...twt}/>
      })
  return (
    <div className={props.col}>{boxs}</div>
  )
}

Showarea.propTypes = {
      target: PropTypes.string,
      origintwts:PropTypes.array,
      inputtwts:PropTypes.array,
      col:PropTypes.string.isRequired,
      row:PropTypes.string.isRequired,
      style:PropTypes.string,
      dropshow:PropTypes.bool
};

export default Showarea
