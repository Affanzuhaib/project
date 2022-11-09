import {
  faBed,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/hotels", { state: { destination } });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        
        {type !== "list" && (
          <>

            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>

              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
        <div className="navContainer">
        <h1 className="headerTitle">
             HAVEN: A SAFE PLACE TO LIVE
            </h1>
        <div className="navItems">
          <button className="navButton">Login</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
