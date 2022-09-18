import React from 'react';
import classes from './infoIcon.module.css';

function InfoIcon({ info }) {
  return (
    <div className={classes.infoIcon}>
      <img alt="infoIcon" src="./pics/infoIcon.png" />
      <span>{info}</span>
    </div>
  );
}

export default InfoIcon;
