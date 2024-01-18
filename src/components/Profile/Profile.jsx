import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="banner"></div>
      <div className="profileDetail">
        <img
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--KqeEFf7W--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/407623/c2f3e3d1-d1d8-4c68-8fd6-58275a106900.jpg"
          alt="profile-img"
        />

        <div>
          <span className="name">Rita Correia</span>
          <span className="age">32</span>
        </div>
        <div className="place">London</div>

        <div className="socialDetails">
          <div>
            <p>80K</p>
            <p>Followers</p>
          </div>
          <div>
            <p>803K</p>
            <p>Likes</p>
          </div>
          <div>
            <p>1.4K</p>
            <p>Photos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
