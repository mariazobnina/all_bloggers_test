import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

function Navbar() {
  const setActive = ({ isActive }) => (isActive ? classes.smth : classes.navItem);
  return (
    <div className={classes.navbar}>
      <div className={classes.burgerMenu}>
        smth
        <div className={classes.logo}>
          <img alt="logo" height="25" width="140" src="./pics/Logo.png" />
        </div>
      </div>
      <nav className={classes.navBtns}>

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

        <NavLink to="/help" className={classes.navItem} activeclassname="active">
          <img alt="pertnerIcon" src="./pics/PartnerNavIcon.png" width="20" height="20" />
          <span>Стать партнером</span>
        </NavLink>

        {/* <NavLink
          to="/"
          className={setActive}
        >
          <img alt="advertIcon" src="./pics/AdvertNavIcon.png" width="20" height="20" />
          Купить рекламу
        </NavLink>
        <div className={classes.navItem}>
          <img alt="groupIcon" src="./pics/GroupNavIcon.png" width="20" height="20" />
          <NavLink activeclassname={classes.activeNavItem} to="/notYet">Список блогеров </NavLink>
        </div>
        <div className={classes.navItem}>
          <img alt="campaignIcon" src="./pics/CampaignNavIcon.png" width="20" height="20" />
          <NavLink activeclassname={classes.activeNavItem} to="/notYet">Мои кампании</NavLink>
        </div>
        <div className={classes.navItem}>
          <img alt="statsIcon" src="./pics/StatsNavIcon.png" width="20" height="20" />
          <NavLink activeclassname={classes.activeNavItem} to="/notYet">Статистика</NavLink>
        </div>
        <div className={classes.navItem}>
          <img alt="walletIcon" src="./pics/WalletNavIcon.png" width="20" height="20" />
          <NavLink activeclassname={classes.activeNavItem} to="/notYet">Финансы</NavLink>
        </div>
        <div className={classes.navItem}>
          <img alt="blogIcon" src="./pics/BlogNavIcon.png" width="20" height="20" />
          <NavLink activeclassname={classes.activeNavItem} to="/notYet">Блог</NavLink>
        </div>
        <div className={classes.navItem}>
          <img alt="newsIcon" src="./pics/NewsNavIcon.png" width="20" height="20" />
          <NavLink activeclassname={classes.activeNavItem} to="/notYet">Новости</NavLink>
        </div>
        <div className={classes.navItem}>
          <img alt="helpIcon" src="./pics/HelpNavIcon.png" width="20" height="20" />
          <NavLink activeclassname={classes.activeNavItem} to="/notYet">Помощь</NavLink>
        </div>
        <div className={classes.navItem}>
          <img alt="pertnerIcon" src="./pics/PartnerNavIcon.png" width="20" height="20" />
          <NavLink>Стать партнером</NavLink>
        </div> */}
      </nav>
    </div>
  );
}

export default Navbar;
