import { useEffect, useRef, useState } from "react";

const SidebarHeader = ({
  toggleSidebar,
  mode,
}: {
  toggleSidebar: () => void;
  mode: string;
}) => {
  const imgSrcRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (mode === "dark" && imgSrcRef.current) {
      imgSrcRef.current.src = "src/assets/Logo_Darkmode.svg";
    } else if (imgSrcRef.current) {
      imgSrcRef.current.src = "src/assets/Logo.svg";
    }
  }, [mode]);
  return (
    <header>
      <div className="image-text">
        <span className="image">
          <img ref={imgSrcRef} alt="IMsG" />
        </span>
        <div className="text header-text">
          <span className="name">Hyper Ninja</span>
          <span className="profession">Taufiq Zayyad</span>
        </div>
      </div>
      <i className="bx bx-chevron-right toggle" onClick={toggleSidebar}></i>
    </header>
  );
};

export default SidebarHeader;
