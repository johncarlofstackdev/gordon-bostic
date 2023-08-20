import React from "react";

interface OverlayProps {
  isNavigationVisible: boolean;
  hideNavigation: () => void;
  Overlay: string;
}

const Overlay: React.FC<OverlayProps> = ({ isNavigationVisible, hideNavigation, Overlay }) => {
  return (
    isNavigationVisible && (
      <div className={Overlay} onClick={hideNavigation}>
      </div>
    )
  );
};

export default Overlay;
