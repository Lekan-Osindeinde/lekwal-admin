import { NotificationsNone } from "@material-ui/icons";
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
        </div>
      </div>
    </div>
  );
}
export default Topbar;
