import React, { useState, useEffect } from "react";
import "./aboutPage.css";

const AboutPage = () => {
  const [profile, setProfile] = useState({
    name: "Anis Jemail",
    imageUrl: "/images/about.jpg",
  });

  useEffect(() => {
    // Fetch the profile data from the backend
    // Uncomment and modify the following code when your backend is ready
    /*
    fetch("/api/profile") // This should be the endpoint where your profile data is located
      .then((response) => response.json())
      .then((data) => {
        setProfile({
          name: data.name,
          imageUrl: data.imageUrl,
        });
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
      });
    */
  }, []);

  return (
    <div className="about-page">
      <div className="profile-header">
        <h1>
          Hello, <br />
          I'm <span>{profile.name}</span>
        </h1>
      </div>
      <div className="profile-row">
        <div className="profile-image">
          <img src={profile.imageUrl} alt="Profile" />
        </div>
        <div className="profile-content">
          <h2 className="profile-about-title">About me</h2>
          <p className="profile-about-content">Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
