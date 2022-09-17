import React from 'react';
import classes from './infoIcon.module.css';

function InfoIcon({ info }) {
  return (
    <div className={classes.wrapper}>
      <div data-tooltip={info} className={classes.infoIcon}>
        <img alt="infoIcon" src="./pics/infoIcon.png" />
      </div>
    </div>
  );
}

export default InfoIcon;
