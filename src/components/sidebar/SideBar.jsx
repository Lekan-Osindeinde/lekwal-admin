import {
  Assessment,
  Category,
  Event,
  Forum,
  Group,
  LineStyle,
  Mail,
  Message,
  Receipt,
  Report,
  Timeline,
  TrendingUp,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./sideBar.css";

function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Dashboard</h3>
          <ul className="sideBarList">
            <Link to="/" className="link">
              <li className="sideBarItem active">
                <LineStyle className="sideBarIcon" />
                Home
              </li>
            </Link>
            <li className="sideBarItem">
              <Timeline className="sideBarIcon" />
              Analytics
            </li>
            <li className="sideBarItem">
              <TrendingUp className="sideBarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Quick Menu</h3>
          <ul className="sideBarList">
            <Link to="/users" className="link">
              <li className="sideBarItem">
                <Group className="sideBarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sideBarItem">
                <Category className="sideBarIcon" />
                Products
              </li>
            </Link>
            <li className="sideBarItem">
              <Receipt className="sideBarIcon" />
              Transactions
            </li>
            <li className="sideBarItem">
              <Assessment className="sideBarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Notifications</h3>
          <ul className="sideBarList">
            <li className="sideBarItem">
              <Mail className="sideBarIcon" />
              Mail
            </li>
            <li className="sideBarItem">
              <Forum className="sideBarIcon" />
              Feedback
            </li>
            <li className="sideBarItem">
              <Message className="sideBarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Staff</h3>
          <ul className="sideBarList">
            <li className="sideBarItem">
              <Event className="sideBarIcon" />
              Manage
            </li>
            <li className="sideBarItem">
              <Timeline className="sideBarIcon" />
              Analytics
            </li>
            <li className="sideBarItem">
              <Report className="sideBarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
