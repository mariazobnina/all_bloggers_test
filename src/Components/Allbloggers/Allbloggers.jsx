import React, { useState } from 'react';
import fourBloggers from '../../data/bloggersInfo';
import OneBloggerCard from '../OneBloggerCard/OneBloggerCard';
import classes from './Allbloggers.module.css';

function Allbloggers() {
  const bloggersInfo = fourBloggers;
  const [bloggersInfoFiltered, setBloggersInfoFiltered] = useState(fourBloggers);

  const [searchQuery, setSearchQuery] = useState('');

  const searchBlogger = (e) => {
    setSearchQuery(e.target.value);
    setBloggersInfoFiltered(bloggersInfo.filter((elem) => (elem.account).toLowerCase()
      .includes((e.target.value).toLowerCase())));
  };

  return (
    <div className={classes.allBloggers}>
      <div className={classes.allBloggersTop}>
        <div>
          <h1>Все блогеры</h1>
        </div>
        <div className={classes.search}>
          <img alt="searchIcon" src="./pics/searchIcon.png" className="search-icon" />
          <input
            placeholder="Найти блогеров"
            value={searchQuery}
            onChange={searchBlogger}
            className="search-field"
          />
        </div>
      </div>
      <div className={classes.cardContainer}>
        {bloggersInfoFiltered.map((el, i) => <OneBloggerCard key={i} data={el} />)}
      </div>
    </div>
  );
}

export default Allbloggers;
