// Menubtns is responsible for rendering Top menubar buttons

import React from 'react';
import './Menubar.css';

const Menubtns = (props) => {
  return (
    <div>

    <div className='mbarea'>

      <div className='selects'>
        <div className="mbbtn">
          <select
            className="twtfilter"
            name="twitfilter"
            ref={ref => (this.twitfilter = ref)}
            onChange={() => {
              props.menuBarContr_fliter(this.twitfilter.value);
              this.twitfilter.value = 'ini';
            }}
          >
            <option value="ini">Filter------</option>
            <option value="default">Default</option>
            <option value="asc">ASC</option>
            <option value="desc">DESC</option>
            <option value="today">Tweets in this 24 hours</option>
            <option value="7days">Tweets in 7 days</option>
            <option value="30days">Tweets in 30 days</option>
          </select>
        </div>

        <div className="mbbtn">
          <select
            className="twtfilter"
            name="twitLayout"
            ref={ref => (this.twitLayout = ref)}
            onChange={() => {
              props.menuBarContr_Layout(this.twitLayout.value);
              this.twitLayout.value = 'ini';
            }}
          >
            <option value="ini">ChangeLayout------</option>
            <option value="three">Default</option>
            <option value="four">FourColumns</option>
            <option value="two">TwoColumns</option>
            <option value="one">OneColumns</option>
            <option value="clear">ClearStyle</option>
            <option value="fancy">FancyStyle</option>
          </select>
        </div>
      </div>
      <div className='btns'>
        <div className="mbbtn">
          <div
            className="btnline"
            onClick={() => props.menuBarContr_cat('TrizicCo')}
          >
            TRIZIC
          </div>
        </div>
        <div className="mbbtn">
          <div
            className="btnline"
            onClick={() => props.menuBarContr_cat('LaughingSquid')}
          >
            LAUGHINGSQUID
          </div>
        </div>
        <div className="mbbtn">
          <div
            className="btnline"
            onClick={() => props.menuBarContr_cat('TechCrunch')}
          >
            TECHCRUNCH
          </div>
        </div>
        <div className="mbbtn">
          <div className="btnline" onClick={()=>{props.saveStyle()}}>SAVE LAYOUT</div>
        </div>
        <div className="mbbtn">
          <div className="btnline" onClick={()=>{props.originStyle()}}>RESET</div>
        </div>
      </div>
      </div>
    </div>

  )
}

export default Menubtns
