import { useContext } from "react";
import { TabletMenuContext } from "../contexts/tablet-menu-context";

const TabletMenu = () => {
  const {
    backgroundCover,
    marginLeft,
    background,
    tabletMenuPosition,
    setTabletMenuPosition,
    hiddenExitIcon,
    setHiddenExitIcon,
  } = useContext(TabletMenuContext);

  const closeTabletMenu = () => {
    setTabletMenuPosition(!tabletMenuPosition);
    backgroundCover.disactive();
    setHiddenExitIcon(true);
    return;
  };

  return (
    <div>
      <div className={background}></div>
      <div style={{ ...marginLeft }} className="tablet-mobile-menu-wrapper">
        <div className="tablet-mobile-menu-background">
          <div
            className="tablet-mobile-menu-exit-wrapper"
            onClick={closeTabletMenu}
          >
            <div hidden={hiddenExitIcon} className="tablet-mobile-menu-exit">
              <svg className="exit-icon display-none" viewBox="0 0 60 61">
                <g className="exit-icon-components">
                  <g className="exit-icon-path-1-and-circle-1-wrappper">
                    <g className="exit-icon-path-1-and-circle-1">
                      <path
                        className="exit-icon-path-1"
                        d="M 10 15 l 40 0"
                        stroke="#fff"
                        strokeWidth="3"
                      ></path>
                      <circle
                        className="exit-icon-circle-1"
                        cx="53"
                        cy="15"
                        r="4"
                        fill="transparent"
                        stroke="#fff"
                        strokeWidth="3"
                      />
                      <circle
                        className="exit-icon-circle-1"
                        cx="7"
                        cy="15"
                        r="4"
                        fill="transparent"
                        stroke="#fff"
                        strokeWidth="0"
                      />
                    </g>
                  </g>
                  <g className="exit-icon-path-2-and-circle-2-wrappper">
                    <g className="exit-icon-path-2-and-circle-2">
                      <path
                        className="exit-icon-path-2"
                        d="M 10 31 l 40 0"
                        stroke="#fff"
                        strokeWidth="3"
                      ></path>
                      <circle
                        className="circle-2"
                        cx="7"
                        cy="31"
                        r="4"
                        fill="transparent"
                        stroke="#fff"
                        strokeWidth="3"
                      />
                      <circle
                        className="circle-2"
                        cx="7"
                        cy="31"
                        r="4"
                        fill="transparent"
                        stroke="#fff"
                        strokeWidth="3"
                      />
                    </g>
                  </g>
                  <g className="exit-icon-path-3-and-circle-3-wrappper">
                    <g className="exit-icon-path-3-and-circle-3">
                      <path
                        className="exit-icon-path-3"
                        d="M 10 47 l 40 0"
                        stroke="#fff"
                        strokeWidth="3"
                      ></path>
                      <circle
                        className="exit-icon-circle-3"
                        cx="53"
                        cy="47"
                        r="4"
                        fill="transparent"
                        stroke="#fff"
                        strokeWidth="3"
                      />
                      <circle
                        className="exit-icon-circle-3"
                        cx="7"
                        cy="47"
                        r="4"
                        fill="transparent"
                        stroke="#fff"
                        strokeWidth="0"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <hr
            className="tablet-mobile-menu-lines tablet-mobile-menu-line-1 "
            size="1"
          ></hr>
          <div className="tablet-mobile-menu">
            <div className="tablet-mobile-menu-about-contact-gallery">
              <a href="./" className="tablet-mobile-menu-about link">
                About
              </a>
              <a href="./" className="tablet-mobile-menu-contact link">
                Contact
              </a>
              <a href="./" className="tablet-mobile-menu-gallery link">
                Gallery
              </a>
            </div>
            <hr className="tablet-mobile-menu-lines" size="1"></hr>
            <a href="./" className="tablet-mobile-menu-log-in link">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabletMenu;
