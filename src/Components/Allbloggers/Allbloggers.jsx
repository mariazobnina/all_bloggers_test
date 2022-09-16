import React from 'react';
import fourBloggers from '../../data/bloggersInfo';
import OneBloggerCard from '../OneBloggerCard/OneBloggerCard';

function Allbloggers() {
  const bloggersInfo = fourBloggers;
  return (
    <div>
      {bloggersInfo.map((el) => <OneBloggerCard key={el.id} data={el} />)}
    </div>
  );
}

export default Allbloggers;
