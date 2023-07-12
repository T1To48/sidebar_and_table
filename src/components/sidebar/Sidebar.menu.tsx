const SideBarMenu = ({openSideBar}:{openSideBar:()=>void}) => {
  return (
      <div className="menu">
        <li className="search-box" onClick={openSideBar}>
          <a href="#">
            <i className="bx bx-search-alt icon" />
            <input type="text" placeholder=" Search..." />
          </a>
        </li>
        <ul className="menu-links">
          <li className="nav-links">
            <a href="#">
              <i className="bx bx-home-alt icon" />
              <span className="text nav-text">Dashboard</span>
            </a>
          </li>
          <li className="nav-links">
            <a href="#">
              <i className="bx bx-bar-chart-alt-2 icon" />
              <span className="text nav-text">Revenue</span>
            </a>
          </li>
          <li className="nav-links">
            <a href="#">
              <i className="bx bx-bell icon" />
              <span className="text nav-text">Notifications</span>
            </a>
          </li>
          <li className="nav-links">
            <a href="#">
              <i className="bx bx-pie-chart-alt icon" />
              <span className="text nav-text">Analytics</span>
            </a>
          </li>
          <li className="nav-links">
            <a href="#">
              <i className="bx bx-heart icon" />
              <span className="text nav-text">Likes</span>
            </a>
          </li>
          <li className="nav-links">
            <a href="#">
              <i className="bx bx-wallet icon" />
              <span className="text nav-text">Wallets</span>
            </a>
          </li>
        </ul>
      </div>
  );
};

export default SideBarMenu;
