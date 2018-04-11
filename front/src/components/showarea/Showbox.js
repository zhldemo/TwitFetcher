//Showbox component is responsible for rendering each tweet snapshot

import PropTypes from 'prop-types';
import React from 'react';
import "./Showarea.css";

const Showbox = props => {

  // Initial the content of tweet snapshot
  const twitinfo = {};

  if (!props.entities) {

    // Checking twitter screen name validation,geting error code from backend
    if (!props.origintwts) {
      return <div key="error">Sorry,the page you are looking for is not existed ! Maybe the screen name is wrong...</div>;
    } else {
      return <div key="system error">{props.origintwts[0].message}</div>;
    }
  } else {

    // Checking the tweet is original or retweet
    if (props.entities.user_mentions.length === 0) {
      twitinfo.imgurl = props.user.profile_image_url;
      twitinfo.twiterhome = props.user.screen_name;
      twitinfo.twitername = props.user.name;
      twitinfo.idstr = props.id_str;
    } else {

      /* if the retweet from another account
      then get the image and id of that account*/
      if (props.retweeted_status) {
        twitinfo.imgurl = props.retweeted_status.user.profile_image_url;
        twitinfo.idstr = props.retweeted_status.id_str;
      } else {

        // else get the original account image and id
        twitinfo.imgurl = props.user.profile_image_url;
        twitinfo.idstr = props.id_str;
      }

      twitinfo.twiterhome = props.entities.user_mentions[0].screen_name;
      twitinfo.twitername = props.entities.user_mentions[0].name;
    }

    // Generating and formate tweet content
    if (props.entities.urls[0]) {
      twitinfo.source = props.entities.urls[0].display_url;
      twitinfo.sourceurl = props.entities.urls[0].url;
    } else {
      twitinfo.source = null;
    }

    if (props.entities.urls[0]) {
      let temptext = props.text.split(' '),
        target = temptext.length - 1;
      temptext.splice(target, 1);
      twitinfo.twittext = temptext.join(' ');
    } else {
      twitinfo.twittext = props.text;
    }

    twitinfo.twitdate = props.created_at;
    twitinfo.twiterurl = `https://twitter.com/${twitinfo.twiterhome}`;
    twitinfo.twitfav = props.favorite_count;
    twitinfo.link = `https://twitter.com/${twitinfo.twiterhome}/status/${twitinfo.idstr}`;

    return (
      <div

        className={
          !props.changeStyle ? ( //Checking general style
            props.row
          ) : (
            `${props.row} showboxct${props.changeStyle}`
          )
        }
      >
        <div className="tweetct">
          <div className="tweethead">
            <div className="tweetlogo">
              <img className="tlogo" src={twitinfo.imgurl} alt="" />
            </div>
            <div className="twitername">{twitinfo.twitername}</div>
            <div className="twiterhome">
              <a href={twitinfo.twiterurl} target="blank">
                @{twitinfo.twiterhome}
              </a>
            </div>
          </div>
          <div className="twittext">
            <p>
              {twitinfo.twittext}{' '}
              <a
                href={twitinfo.sourceurl}
                target="blank"
                rel="noopener noreferrer"
              >
                {twitinfo.source}
              </a>{' '}
            </p>
          </div>

          <div className="twitdate">
            <i className="far fa-clock" /> {props.dateTrans(twitinfo.twitdate)}
          </div>
          <div className="twitfav">
            <i className="far fa-heart" /> {twitinfo.twitfav}
          </div>
          <div className="twitgo">
            <a href={twitinfo.link} target="blank">
              <div className="goarrow">
                REVIEW ON TWITTER <i className="fas fa-long-arrow-alt-right" />
                <i className="fab fa-twitter" />
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
};

Showbox.propTypes = {
      origintwts: PropTypes.array,
      entities:PropTypes.object,
      user:PropTypes.object,
      id_str:PropTypes.string,
      retweeted_status:PropTypes.object,
      text:PropTypes.string,
      created_at:PropTypes.string,
      favorite_count:PropTypes.number,
};

export default Showbox;
