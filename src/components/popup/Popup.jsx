import React from "react";
import "./Popup.css"
import Following from "../../constants/Following";
import UserCard from "../usercard/UserCard";

const Popup = ({setShowPopup}) => (
  <div className="overlay">
    <div className="popup">
        <div class="popup-header">
            <p>Pop up</p>
            <p onClick={()=>setShowPopup(false)} className="close"> X </p>
        </div>
        <div className="card">
            {Following.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
    </div>
  </div>
);

export default Popup;