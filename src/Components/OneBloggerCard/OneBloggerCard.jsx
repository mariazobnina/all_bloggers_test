import React, { useState } from 'react';
import classes from './OneBloggerCard.module.css';

function OneBloggerCard({ data }) {
  const [flag, setFlag] = useState(false);
  const [btnStyle, setBtnStyle] = useState(`${classes.likeBtn}`);

  const clickHandler = (e) => {
    e.preventDefault();
    setFlag(!flag);
    setBtnStyle(flag ? `${classes.likeBtnClicked}` : `${classes.likeBtn}`);
  };

  const numbersStyle = (str) => str.split('').reverse()
    .map((el, i) => ((i + 1) % 3 === 0 ? `${` ${el}`}` : el))
    .reverse()
    .join('');

  const ratingColor = data.rating > 3 ? 'yellow' : (data.rating > 8 ? 'green' : 'grey');

  const name = data.account.length > 12 ? `${data.account.substring(0, 12)}...` : data.account;
  const title = data.account.length > 12 ? data.account : null;
  return (
    <div className={classes.card}>
      <div className={classes.cardTop}>
        <div className={classes.photoContainer}>
          <img alt="bloggerPhoto" src={data.photo} />
        </div>
        <div className={classes.generalInfo}>
          <h3 title={title}>
            @
            {name}
          </h3>
          <span className={classes.pageType}>
            {data.pageType}
          </span>
          <img alt="rating" src="../../../public/pics/allStars.png" />
        </div>
        <div className={classes.cardIcons}>
          <img alt="statsCardIcon" src="../../../public/pics/cardBtnStats.png" />
          <img alt="checkedCardIcon" src="../../../public/pics/cardBtnCheck.png" />
          <img alt="gropuCardIcon" src="../../../public/pics/cardBtnGroup.png" />
        </div>
        <div className={classes.details}>
          <div className={classes.detailsLine}>
            <span className={classes.detailsName}>Подписчиков</span>
            <span className={classes.detailsNumbers}>{numbersStyle(data.subscribersNumber)}</span>
          </div>
          <div className={classes.detailsLine}>
            <span className={classes.detailsName}>
              Просм. сторис
              {' '}
              <img alt="infoIcon" src="../../../public/pics/infoIcon.png" className={classes.infoIcon} />
            </span>
            <span className={classes.detailsNumbers}>{numbersStyle(data.storiesWatched)}</span>
          </div>
          <div className={classes.detailsLine}>
            <span className={classes.detailsName}>
              Качество аккаунта
              {' '}
              <img alt="infoIcon" src="../../../public/pics/infoIcon.png" className={classes.infoIcon} />
            </span>
            <span className={classes.detailsNumbers}>
              <span style={ratingColor}>{data.rating}</span>
              /10
            </span>
          </div>
          <div className={classes.detailsLine}>
            <span className={classes.detailsName}>Сторис в день</span>
            <span className={classes.detailsNumbers}>{data.storiesPerDay}</span>
          </div>
          <div className={classes.detailsLine}>
            <span className={classes.detailsName}>Цена за 1к просм.</span>
            <span className={classes.detailsNumbers}>{numbersStyle(data.pricePer1K)}</span>
          </div>
          <div className={classes.detailsLine}>
            <span className={classes.detailsName}>
              Рекомендов. цена
              {' '}
              <img alt="infoIcon" src="../../../public/pics/infoIcon.png" className={classes.infoIcon} />
            </span>
            <span className={classes.detailsNumbers}>{numbersStyle(data.priceRecomended)}</span>
          </div>
        </div>
        <div className={classes.cardBtm}>
          <button onClick={clickHandler} type="button" className={btnStyle}>
            {flag ? 'В избранном' : 'В избранные'}
          </button>
          <div className={classes.price}>
            123 599 P
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneBloggerCard;
