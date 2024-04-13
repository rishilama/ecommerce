import React, { useState } from 'react';
import "./ProfilePage.css";
import MyProfileContent from "../../components/MyProfileContent/MyProfileContent";
import MyOrdersContent from "../../components/MyOrdersContent/MyOrdersContent";
import LogoutContent from "../../components/LogoutContent/LogoutContent";

const ProfilePage = ({ username,setUsername }) => {
  const [activeContent, setActiveContent] = useState('profile');
  if (!username) {
    // Handle the case where username is null
    return <div>Loading...</div>;
  }


  const renderContent = () => {
    switch (activeContent) {
      case 'profile':
        return <MyProfileContent user={username} />;
      case 'orders':
        return <MyOrdersContent />;
      case 'logout':
        return <LogoutContent username={username}setUsername={setUsername} />;
      default:
        return null;
    }
  };

  console.log("username", username.displayName)
 

  return (
    <div className="parent-container">
      <div className="profileSection">
        <div className="profileSection_leftSide">
          <div className="profileSection_leftSide__Heading">
            <h1>Hi, {username.displayName}</h1>
          </div>
          <div className="profileSection_leftSide__Content">
            <div className="profileSection_leftSide__Content__profileSection">
              <button onClick={() => setActiveContent('profile')}>My Profile</button>
            </div>

            <div className="profileSection_leftSide__Content__profileSection__orders">
              <button onClick={() => setActiveContent('orders')}>My Orders</button>
            </div>
            
            <div className="profileSection_leftSide__Content__profileSection__Logout">
              <button onClick={() => setActiveContent('logout')}>Logout</button>
            </div>

          </div>
        </div>

        <div className="profileSection_rightSide">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
