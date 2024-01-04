import "./App.css";
import Search from "./components/icons/Search";
import Ellipses from "./components/icons/Ellipses";
import Popup from "./components/popup/Popup";
import Followers from "./constants/Users";
import Following from "./constants/Following";
import UserCard from "./components/usercard/UserCard";
import { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("");
  const [activeTab, setActiveTab] = useState("followers"); // Default to "followers"
  const [showPopup, setShowPopup] = useState(false);


  const filteredFollowers = Followers.filter((user) =>
    user.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const filteredFollowing = Following.filter((user) =>
    user.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      {showPopup && <Popup  setShowPopup={(x)=>setShowPopup(x)}/>}
      <div className="App-header">
      <div className="breadcrumb">
        <p>zuruck</p>
        <div className="pop-up" onClick={()=>setShowPopup(true)}>  <Ellipses/></div>
      </div>
        <div className="tabs">
          <p
            className={`tab-heading ${
              activeTab === "followers" ? "active" : ""
            }`}
            onClick={() => handleTabClick("followers")}
          >
            Followers
          </p>
          <p
            className={`tab-heading ${
              activeTab === "following" ? "active" : ""
            }`}
            onClick={() => handleTabClick("following")}
          >
            Following
          </p>
        </div>

        <div className="search">
          <Search />
          <input
            className="place-holder"
            placeholder="Search ..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        {activeTab === "followers" ? (
          <div className="card">
            {filteredFollowers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        ) : (
          <div className="card">
            {filteredFollowing.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
