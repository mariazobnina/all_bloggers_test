import React from 'react';
import fourBloggers from '../../data/bloggersInfo';
import OneBloggerCard from '../OneBloggerCard/OneBloggerCard';
import classes from './Allbloggers.module.css';

function Allbloggers() {
  const bloggersInfo = fourBloggers;
  return (
    <div className={classes.allBloggers}>
      <div className={classes.allBloggersTop}>
        <div>
          <h1>Все блогеры</h1>
        </div>
        <div className={classes.search}> ПОИСК </div>
      </div>
      <div className={classes.cardContainer}>
        {bloggersInfo.map((el, i) => <OneBloggerCard key={i} data={el} />)}
      </div>
    </div>
  );
}

export default Allbloggers;
