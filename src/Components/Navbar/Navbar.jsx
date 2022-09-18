import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

function Navbar() {
  const [flag, setFlag] = useState(false);
  const burgerMenuHandler = (e) => {
    // e.preventDefault();
    setFlag(!flag);
  };
  const hideScroll = flag ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <div className={classes.burgerMenu} onClick={burgerMenuHandler}>
          <span />
        </div>
        <img alt="logo" height="25" width="140" src="./pics/Logo.png" />
      </div>
      <nav className={classes.navBtns} id={flag ? classes.active : ''}>

        <NavLink to="/advert" activeclassname="active" className={classes.navItem} onClick={() => setFlag(false)}>
          <img alt="advertIcon" src="./pics/AdvertNavIcon.png" width="20" height="20" />
          <span>Купить рекламу</span>
        </NavLink>

        <NavLink to="/" end exact="true" activeclassname="active" className={classes.navItem} onClick={() => setFlag(false)}>
          <img alt="groupIcon" src="./pics/GroupNavIcon.png" width="20" height="20" />
          <span>Главная</span>
        </NavLink>

        <NavLink to="/campaigns" className={classes.navItem} activeclassname="active" onClick={() => setFlag(false)}>
          <img alt="campaignIcon" src="./pics/CampaignNavIcon.png" width="20" height="20" />
          <span>Мои кампании</span>
        </NavLink>

        <NavLink to="/stats" className={classes.navItem} activeclassname="active" onClick={() => setFlag(false)}>
          <img alt="statsIcon" src="./pics/StatsNavIcon.png" width="20" height="20" />
          <span>Статистика</span>
        </NavLink>

        <NavLink to="/wallet" className={classes.navItem} activeclassname="active" onClick={() => setFlag(false)}>
          <img alt="walletIcon" src="./pics/WalletNavIcon.png" width="20" height="20" />
          <span>Финансы</span>
        </NavLink>

        <NavLink to="/blog" className={classes.navItem} activeclassname="active" onClick={() => setFlag(false)}>
          <img alt="blogIcon" src="./pics/BlogNavIcon.png" width="20" height="20" />
          <span>Блог</span>
        </NavLink>

        <NavLink to="/news" className={classes.navItem} activeclassname="active" onClick={() => setFlag(false)}>
          <img alt="newsIcon" src="./pics/NewsNavIcon.png" width="20" height="20" />
          <span>Новости</span>
        </NavLink>

        <NavLink to="/help" className={classes.navItem} activeclassname="active" onClick={() => setFlag(false)}>
          <img alt="helpIcon" src="./pics/HelpNavIcon.png" width="20" height="20" />
          <span>Помощь</span>
        </NavLink>

        <NavLink to="/partnership" className={classes.navItem} activeclassname="active" onClick={() => setFlag(false)}>
          <img alt="pertnerIcon" src="./pics/PartnerNavIcon.png" width="20" height="20" />
          <span>Стать партнером</span>
        </NavLink>

      </nav>
    </div>
  );
}

export default Navbar;
