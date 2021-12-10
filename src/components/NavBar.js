import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DvrOutlinedIcon from "@mui/icons-material/DvrOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import "../assets/css/navbar.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav-items">
        <Router>
          <ul>



<li>
    
            <HomeOutlinedIcon style={{ fontSize: "30px" }} className="icons" />


</li>
<li>

        <NavLink activeClassName="active" active to="/alarms">
          <DvrOutlinedIcon style={{ fontSize: "30px" }} className="icons" />
        </NavLink>

</li>
<li>

     
          <AssessmentOutlinedIcon
            style={{ fontSize: "30px" }}
            className="icons"
            />
      
</li>

          </ul>
            </Router>
      </div>
      <div className="user">
        <span>A</span>
      </div>
    </div>
  );
};

export default NavBar;
