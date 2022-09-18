import React, { useState } from 'react';
import classes from './PaginationPages.module.css';

function PaginationPages({
  bloggersPerPage, totalBloggers, paginate, prevPage, nextPage, currentPage,
}) {
  const pageNumber = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= Math.ceil(totalBloggers / bloggersPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div className={classes.pagination}>
      <a onClick={prevPage}>❮</a>
      <ul>
        {pageNumber.map((el) => (
          <span className={classes.pageItem} key={el}>
            <a onClick={() => paginate(el)} className={classes.pageLink}>
              {el}

            </a>
          </span>
        ))}
      </ul>
      <a onClick={nextPage}>❯</a>
    </div>
  );
}

export default PaginationPages;
