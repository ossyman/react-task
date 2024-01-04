import React from 'react';
import "./UserCard.css"

const UserCard = ({ user }) => (
  <div key={user.id} className="card-container">
    <div className="single-card">
      <div className="avatar_text">
        <img src={user.avatarUrl} alt={`${user.name}'s avatar`} className="avatar" />
        <div className="text-column">
        <div className="user-name">{user.name}</div>
        <div className="user-followers">Followers: {user.followers}</div>
        </div>
        
      </div>
      <div className="button">
          Follow
      </div>
    </div>
  </div>
);

export default UserCard;
