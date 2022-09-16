import React from 'react';
import fourBloggers from '../../data/bloggersInfo';
import OneBloggerCard from '../OneBloggerCard/OneBloggerCard';
import classes from './Allbloggers.module.css';

function Allbloggers() {
  const bloggersInfo = fourBloggers;
  return (
    <div className={classes.allBloggers}>
      {bloggersInfo.map((el, i) => <OneBloggerCard key={i} data={el} />)}
    </div>
  );
}

export default Allbloggers;
