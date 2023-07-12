const SidebarHeader = ({toggleSidebar}:{toggleSidebar:()=>void}) => {
  return (
    <header>
      <div className="image-text">
        <span className="image">
          <img src="" alt="IMG" />
        </span>
        <div className="text header-text">
          <span className="name">Coding Lab</span>
          <span className="profession">Web developer</span>
        </div>
      </div>
      <i className="bx bx-chevron-right toggle" onClick={toggleSidebar}></i>
    </header>
  );
};

export default SidebarHeader;
