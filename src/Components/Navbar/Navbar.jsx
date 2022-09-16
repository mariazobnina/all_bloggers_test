import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import classes from './Navbar.module.css';

function Navbar() {
  const { openLink } = useParams();
  return (
    <div className={classes.navbar}>
      <div className={classes.burgerMenu}>
        smth
        <div className={classes.logo}>
          <img alt="logo" height="25" width="140" src="../../../public/pics/Logo.png" />
        </div>
      </div>
      <nav className={classes.navBtns}>
        <div className={classes.navItem}>
          <img alt="advertIcon" src="../../../public/pics/AdvertNavIcon.png" width="20" height="20" />
          <NavLink activeClassName={classes.activeNavItem} to="/notYet">Купить рекламу</NavLink>
        </div>
        <div className={classes.navItem}>
          <img alt="groupIcon" src="../../../public/pics/GroupNavIcon.png" width="20" height="20" />
          <NavLink activeClassName={classes.activeNavItem} to="/">Список блогеров </NavLink>
        </div>
        <div className={classes.navItem}>
          <img alt="campaignIcon" src="../../../public/pics/CampaignNavIcon.png" width="20" height="20" />
          <NavLink activeClassName={classes.activeNavItem} to="/notYet">Мои кампании</NavLink>
        </div>
        <div className={classes.navItem}>
          <img alt="statsIcon" src="../../../public/pics/StatsNavIcon.png" width="20" height="20" />
          <NavLink activeClassName={classes.activeNavItem} to="/notYet">Статистика</NavLink>
        </div>
        <div className={classes.navItem}>
          <img alt="walletIcon" src="../../../public/pics/WalletNavIcon.png" width="20" height="20" />
          <NavLink activeClassName={classes.activeNavItem} to="/notYet">Финансы</NavLink>
        </div>
        <div className={classes.navItem}>
          <img alt="blogIcon" src="../../../public/pics/BlogNavIcon.png" width="20" height="20" />
          <NavLink activeClassName={classes.activeNavItem} to="/notYet">Блог</NavLink>
        </div>
        <div className={classes.navItem}>
          <img alt="newsIcon" src="../../../public/pics/NewsNavIcon.png" width="20" height="20" />
          <NavLink activeClassName={classes.activeNavItem} to="/notYet">Новости</NavLink>
        </div>
        <div className={classes.navItem}>
          <img alt="helpIcon" src="../../../public/pics/HelpNavIcon.png" width="20" height="20" />
          <NavLink activeClassName={classes.activeNavItem} to="/notYet">Помощь</NavLink>
        </div>
        <div className={classes.navItem}>
          <img alt="pertnerIcon" src="../../../public/pics/PartnerNavIcon.png" width="20" height="20" />
          <NavLink>Стать партнером</NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
