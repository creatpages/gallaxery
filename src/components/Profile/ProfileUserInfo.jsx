import React from 'react';

const ProfileUserInfo = ({ userInfo, cardsCount }) => {
  return (
    <div className="p-info">
      <div className="p-info-photo">
        <img src={userInfo.photoURL} alt={userInfo.photoURLAlt} />
      </div>
      <div className="p-info-username">
        <p>{userInfo.displayName}</p>
      </div>
      <div className="p-info-cards">
        <p>Cards: {cardsCount}</p>
        <p>Albums: 0</p>
      </div>
    </div>
  );
};

export default ProfileUserInfo;
