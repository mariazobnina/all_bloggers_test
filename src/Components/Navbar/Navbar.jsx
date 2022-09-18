import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

function Navbar({ flag, setFlag, burgerMenuHandler }) {
  // const [flag, setFlag] = useState(false);
  // const burgerMenuHandler = (e) => {
  //   setFlag(!flag);
  // };
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <div className={classes.burgerMenu}>
          <span onClick={() => burgerMenuHandler()} />
        </div>
        <img alt="logo" height="25" width="140" src="./pics/Logo.png" />
      </div>
      <nav className={classes.navBtns} id={flag ? classes.active : ''}>

        <NavLink to="/advert" activeclassname="active" className={classes.navItem}>
          <img alt="advertIcon" src="./pics/AdvertNavIcon.png" width="20" height="20" />
          <span>Купить рекламу</span>
        </NavLink>

        <NavLink to="/" end exact="true" activeclassname="active" className={classes.navItem}>
          <img alt="groupIcon" src="./pics/GroupNavIcon.png" width="20" height="20" />
          <span>Главная</span>
        </NavLink>

        <NavLink to="/campaigns" className={classes.navItem} activeclassname="active">
          <img alt="campaignIcon" src="./pics/CampaignNavIcon.png" width="20" height="20" />
          <span>Мои кампании</span>
        </NavLink>

        <NavLink to="/stats" className={classes.navItem} activeclassname="active">
          <img alt="statsIcon" src="./pics/StatsNavIcon.png" width="20" height="20" />
          <span>Статистика</span>
        </NavLink>

        <NavLink to="/wallet" className={classes.navItem} activeclassname="active">
          <img alt="walletIcon" src="./pics/WalletNavIcon.png" width="20" height="20" />
          <span>Финансы</span>
        </NavLink>

        <NavLink to="/blog" className={classes.navItem} activeclassname="active">
          <img alt="blogIcon" src="./pics/BlogNavIcon.png" width="20" height="20" />
          <span>Блог</span>
        </NavLink>

        <NavLink to="/news" className={classes.navItem} activeclassname="active">
          <img alt="newsIcon" src="./pics/NewsNavIcon.png" width="20" height="20" />
          <span>Новости</span>
        </NavLink>

        <NavLink to="/help" className={classes.navItem} activeclassname="active">
          <img alt="helpIcon" src="./pics/HelpNavIcon.png" width="20" height="20" />
          <span>Помощь</span>
        </NavLink>

        <NavLink to="/partnership" className={classes.navItem} activeclassname="active">
          <img alt="pertnerIcon" src="./pics/PartnerNavIcon.png" width="20" height="20" />
          <span>Стать партнером</span>
        </NavLink>

      </nav>
    </div>
  );
}

export default Navbar;
