import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import React from "react";
import "./topbar.css";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">lekwal-admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconConatiner">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconConatiner">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconConatiner">
            <Settings />
          </div>
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQGFY3PDZFyOAQ/profile-displayphoto-shrink_800_800/0/1643410903425?e=1653523200&v=beta&t=VSm9xghFEThT2hxVy4COLt0JxN6IHtx9fCXbVjgmpq0"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
export default Topbar;
