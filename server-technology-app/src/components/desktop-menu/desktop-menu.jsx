import TabletMenu from "../tablet-mobile-menu/tablet-mobile-menu";
import { useContext } from "react";
import { TabletMenuContext } from "../contexts/tablet-menu-context";
import serverIcon from "./4.png";

const DesktopMenu = () => {
  const {
    setTabletMenuPosition,
    tabletMenuPosition,
    backgroundCover,
    setHiddenExitIcon,
  } = useContext(TabletMenuContext);

  const openTabletMenu = () => {
    setTabletMenuPosition(!tabletMenuPosition);
    backgroundCover.active();
    setHiddenExitIcon(false);
  };

  return (
    <div className="nav-wrapper">
      <nav className="nav-desktop">
        <a className="nav-desktop-logo nav-desktop-link" href="./">
          <img src={serverIcon} alt="serverIcon" />
        </a>
        <div className="nav-desktop-info">
          <a className="nav-desktop-info-about nav-desktop-link" href="./">
            About
          </a>
          <a className="nav-desktop-info-gallery nav-desktop-link" href="./">
            Gallery
          </a>
          <a className="nav-desktop-info-contact nav-desktop-link" href="./">
            Contact
          </a>
        </div>
        <a className="nav-desktop-log-in nav-desktop-link" href="./">
          Log-In
        </a>

        <div
          className="nav-desktop-hamburger nav-desktop-hamburger-hidden"
          onClick={openTabletMenu}
        >
          <svg className="svg-hamburger-1" viewBox="0 0 140 140">
            <g className="svg-hamburger-1-components">
              <g className="svg-hamburger-1-path-1-and-circle-1-wrappper">
                <g className="svg-hamburger-1-path-1-and-circle-1">
                  <path
                    className="svg-hamburger-1-path-1"
                    d="M 50 54 l 40 0"
                    stroke="#d9ecff"
                    strokeWidth="3"
                  ></path>
                  <circle
                    className="svg-hamburger-1-circle-1"
                    cx="46"
                    cy="54"
                    r="4"
                    fill="transparent"
                    stroke="#d9ecff"
                    strokeWidth="0"
                  />
                  <circle
                    className="svg-hamburger-1-circle-1"
                    cx="94"
                    cy="54"
                    r="4"
                    fill="transparent"
                    stroke="#d9ecff"
                    strokeWidth="3"
                  />
                </g>
              </g>
              <g className="svg-hamburger-1-path-2-and-circle-2-wrappper">
                <g className="svg-hamburger-1-path-2-and-circle-2">
                  <path
                    className="svg-hamburger-1-path-2"
                    d="M 50 70 l 40 0"
                    stroke="#d9ecff"
                    strokeWidth="3"
                  ></path>
                  <circle
                    className="circle-2"
                    cx="46"
                    cy="70"
                    r="4"
                    fill="transparent"
                    stroke="#d9ecff"
                    strokeWidth="3"
                  />
                  {/* <circle
                   className="circle-2"
                   cx="94"
                   cy="70"
                   r="4"
                   fill="transparent"
                   stroke="#fff" /> */}
                </g>
              </g>
              <g className="svg-hamburger-1-path-3-and-circle-3-wrappper">
                <g className="svg-hamburger-1-path-3-and-circle-3">
                  <path
                    className="svg-hamburger-1-path-3"
                    d="M 50 86 l 40 0"
                    stroke="#d9ecff"
                    strokeWidth="3"
                  ></path>
                  <circle
                    className="svg-hamburger-1-circle-3"
                    cx="46"
                    cy="86"
                    r="4"
                    fill="transparent"
                    stroke="#d9ecff"
                    strokeWidth="0"
                  />
                  <circle
                    className="svg-hamburger-1-circle-1"
                    cx="94"
                    cy="86"
                    r="4"
                    fill="transparent"
                    stroke="#d9ecff"
                    strokeWidth="3"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
        <TabletMenu />
      </nav>
    </div>
  );
};

export default DesktopMenu;
