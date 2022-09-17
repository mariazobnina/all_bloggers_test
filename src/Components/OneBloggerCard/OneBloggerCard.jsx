import React, { useState } from 'react';
import { numbersStyle, ratingColor } from '../../helpers/helpers';
import classes from './OneBloggerCard.module.css';

function OneBloggerCard({ data }) {
  const [flag, setFlag] = useState(false);

  const clickHandler = (e) => {
    e.preventDefault();
    setFlag(!flag);
  };

  const name = data.account.length > 13 ? `${data.account.substring(0, 12)}...` : data.account;
  const title = data.account.length > 13 ? data.account : null;
  return (
    <div className={classes.card}>
      <div className={classes.cardTop}>
        <div className={classes.photoContainer}>
          <img alt="bloggerPhoto" src={data.photo} height="64" />
        </div>
        <div className={classes.generalInfo}>
          <h3 title={title}>
            @
            {name}
          </h3>
          <span className={classes.pageType}>
            {data.pageType}
          </span>
          <img alt="rating" src="./pics/allStars.png" />
        </div>
      </div>
      <div className={classes.cardIcons}>
        <img alt="statsCardIcon" src="./pics/cardBtnStats.png" width="22" height="20" />
        <img alt="checkedCardIcon" src="./pics/cardBtnCheck.png" width="22" height="20" />
        <img alt="gropuCardIcon" src="./pics/cardBtnGroup.png" width="22" height="20" />
      </div>
      <div className={classes.details}>
        <div className={classes.oneLine}>
          <span className={classes.detailsName}>Подписчиков</span>
          <span className={classes.detailsNumbers}>{numbersStyle(data.subscribersNumber)}</span>
        </div>
        <div className={classes.oneLine}>
          <span className={classes.detailsName}>
            Просм. сторис
            {' '}
            <img alt="infoIcon" src="./pics/infoIcon.png" className={classes.infoIcon} />
          </span>
          <span className={classes.detailsNumbers}>{(data.storiesWatched)}</span>
        </div>
        <div className={classes.oneLine}>
          <span className={classes.detailsName}>
            Качество аккаунта
            {' '}
            <img alt="infoIcon" src="./pics/infoIcon.png" className={classes.infoIcon} />
          </span>
          <span className={classes.detailsNumbers}>
            <span style={{ color: `${ratingColor(data.rating)}` }}>{data.rating}</span>
            /10
          </span>
        </div>
        <div className={classes.oneLine}>
          <span className={classes.detailsName}>Сторис в день</span>
          <span className={classes.detailsNumbers}>{data.storiesPerDay}</span>
        </div>
        <div className={classes.oneLine}>
          <span className={classes.detailsName}>Цена за 1к просм.</span>
          <span className={classes.detailsNumbers}>{numbersStyle(data.pricePer1K)}</span>
        </div>
        <div className={classes.oneLine}>
          <span className={classes.detailsName}>
            Рекомендов. цена
            {' '}
            <img alt="infoIcon" src="./pics/infoIcon.png" className={classes.infoIcon} />
          </span>
          <span className={classes.detailsNumbers}>{numbersStyle(data.priceRecomended)}</span>
        </div>
      </div>
      <div className={classes.cardBtm}>
        {flag
          ? (
            <button onClick={clickHandler} type="button" className={classes.likeBtnClicked}>
              В избранном
            </button>
          )
          : (
            <button onClick={clickHandler} type="button" className={classes.likeBtn}>
              В избранные
            </button>
          )}
        <div className={classes.price}>
          123 599 P
        </div>
      </div>
    </div>
  );
}

export default OneBloggerCard;
