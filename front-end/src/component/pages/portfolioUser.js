import React, { useState, useEffect } from "react";
import "./portfolioUser.css";
import aboutImg from "./images/about-img.jpg";
import im1 from "./images/EDUCATION2.jpg";
import im2 from "./images/education3.jpg";
import im3 from "./images/expierence2.jpg";
import im4 from "./images/expierence.jpg";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function PortfolioUser() {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("userId", userId);
        const userResponse = await axios.get(
          `http://localhost:5000/users/port/user/${userId}`
        );
        console.log("User Data:", userResponse);
        const portfolioResponse = await axios.get(
          `http://localhost:5000/portfolios/portfolios/${userId}`
        );
        console.log("Portfolio Data:", portfolioResponse.data);

        setUserData(userResponse.data);
        setPortfolioData(portfolioResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);

  if (!userData || !portfolioData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <body>
        <header class="header">
          <div class="nav-section">
            <div class="brand-and-navBtn">
              <span class="brand-name">{userData.firstName}LAB</span>
              <span class="navBtn flex">
                <i class="fas fa-bars"></i>
              </span>
            </div>

            <nav class="top-nav">
              <ul>
                <li>
                  <a href="/portfolio" class="active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/aboutPortfolio">Contact</a>
                </li>
              </ul>
            </nav>
            <span class="search-icon">
              <i class="fas fa-search"></i>
            </span>
          </div>

          <div class="container about">
            <div class="about-content">
              <div class="about-img flex">
                <img src="{image}" alt="photographer img" />
              </div>
              <h2>
                {userData.firstName} {userData.lastName}
              </h2>

              <h3>{portfolioData.job}</h3>
              <blockquote>
                <h2> Skills </h2>
                <h3> {portfolioData.skills}</h3>
              </blockquote>
            </div>

            <div class="social-icons">
              <ul>
                <li>
                  <a href={userData.facebook}>
                    <i class="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href={userData.linkedin}>
                    <i class="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>

        <section class="section-four">
          <div class="container">
            <div class="blogs">
              <div class="blog-wrapper-lg">
                <div class="blog">
                  <img className="im" src={im1} />
                  <div className="blog-content">
                    <span className="badge">EDUCATION</span>
                    <h3 className="blog-title">{portfolioData.education1}</h3>
                    <p className="blog-text">
                      {portfolioData.descriptioneducation1}
                    </p>
                  </div>
                </div>

                <div class="blog">
                  <img className="im" src={im2} />
                  <div className="blog-content">
                    <span className="badge">EDUCATION</span>
                    <h3 className="blog-title">{portfolioData.education2}</h3>
                    <p className="blog-text">
                      {portfolioData.descriptioneducation2}
                    </p>
                  </div>
                </div>

                <div class="blog">
                  <img className="im" src={im3} />
                  <div className="blog-content">
                    <span className="badge">EXPERIENCE</span>
                    <h3 className="blog-title">{portfolioData.experience1}</h3>
                    <p className="blog-text">
                      {portfolioData.experiencedescription1}
                    </p>
                  </div>
                </div>

                <div class="blog">
                  <img className="im" src={im4} />
                  <div className="blog-content">
                    <span className="badge">EXPERIENCE</span>
                    <h3 className="blog-title">{portfolioData.experience2}</h3>
                    <p className="blog-text">
                      {portfolioData.experiencedescription2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer class="footer">
          <div class="footer-container container">
            <div>
              <h2>
                {userData.firstName} {userData.lastName}
              </h2>

              <p>Let's work together</p>
            </div>
            <div>
              <h3>Free Subscription!</h3>
              <p></p>

              <div class="subs">
                <i class="fas fa-envelope"></i>
                <input type="email" id="email" placeholder="Email Address" />
                <button type="submit">SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <p>&copy; Copyright Portffolio-builder . My beautifull portfolio</p>
        </footer>

        <script src="script.js"></script>
      </body>
    </>
  );
}
