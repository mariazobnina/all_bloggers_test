import React, { useState } from 'react';
import OneBloggerCard from '../OneBloggerCard/OneBloggerCard';
import fourBloggers from '../../data/bloggersInfo';
import classes from './Allbloggers.module.css';
import PaginationPages from '../Pagination/PaginationPages';

function Allbloggers() {
  const [bloggersInfoFiltered, setBloggersInfoFiltered] = useState(fourBloggers);
  const [currentPage, setCurrentPage] = useState(1);
  const [bloggersPerPage, setBloggersPerPage] = useState(5);

  const [searchQuery, setSearchQuery] = useState('');

  const searchBlogger = (e) => {
    setSearchQuery(e.target.value);
    setBloggersInfoFiltered(fourBloggers.filter((elem) => (elem.account).toLowerCase()
      .includes((e.target.value).toLowerCase())));
  };

  const lastBloggerIndex = currentPage * bloggersPerPage;
  const firstBloggerIndex = lastBloggerIndex - bloggersPerPage;
  const currentBloggers = bloggersInfoFiltered.slice(firstBloggerIndex, lastBloggerIndex);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
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
        {currentBloggers.map((el, i) => <OneBloggerCard key={i} data={el} />)}
      </div>
      <PaginationPages
        bloggersPerPage={bloggersPerPage}
        totalBloggers={bloggersInfoFiltered.length}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default Allbloggers;
