import "./app.css";
import SideBar from "./components/sidebar/SideBar";
import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <SideBar />
        <div className="others">otherpages</div>
      </div>
    </div>
  );
}

export default App;
