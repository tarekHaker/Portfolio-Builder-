import React from 'react';
import './portfolioUser.css';
import aboutImg from './images/about-img.jpg';
import im1 from "./images/EDUCATION2.jpg";
import im2 from './images/education3.jpg';
import im3 from './images/expierence2.jpg';
import im4 from "./images/expierence.jpg"




export default function PortfolioUser() {
  return (
  <>
     <body>
        
       
        <header class = "header">
            <div class = "nav-section">
                <div class = "brand-and-navBtn">
                    <span class = "brand-name">
                        USERLAB
                    </span>
                    <span class = "navBtn flex">
                        <i class = "fas fa-bars"></i>
                    </span>
                </div>

              
                <nav class = "top-nav">
                    <ul>
                       
                        <li><a href = "/portfolio"  class = "active">Home</a></li>
                        <li><a href = "/aboutPortfolio">Contact</a></li>
                    </ul>
                </nav>
                <span class = "search-icon">
                    <i class = "fas fa-search"></i>
                </span>
            </div>

            <div class = "container about">
                <div class = "about-content">
                    <div class = "about-img flex">
                        <img src = {aboutImg} alt = "photographer img" />
                    </div>
                    <h2>I'm User </h2>
                    <h3>Web developer</h3>
                    <blockquote>
                        "Web development is a creative and technical endeavor that involves building and maintaining websites and web applications. It's a blend of art and science where developers craft user-friendly interfaces, ensure responsive designs, and employ programming languages to bring digital experiences to life. ."
                       
                    </blockquote>
                </div>

                <div class = "social-icons">
                    <ul>
                        <li>
                            <a href = "#"><i class = "fab fa-facebook"></i></a>
                        </li>
                        <li>
                            <a href = "#"><i class = "fab fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href = "#"><i class = "fab fa-instagram"></i></a>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </header>
       

      
        <section class = "section-four">
            <div class = "container">
                <div class = "blogs">
                    <div class = "blog-wrapper-lg">
                     
                        <div class = "blog">
                            <img className='im' src = {im1}/>
                            <div class = "blog-content">
                                <span class = "badge">EDUCATION</span>
                               
                                <h3 class = "blog-title">
                                    DESCRIPTION
                                </h3>
                                <p class = "blog-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eligendi!
                                </p>
                               
                            </div>
                        </div>
                      
                           <div class = "blog">
                            <img className='im' src = {im2} />
                            <div class = "blog-content">
                                <span class = "badge">EDUCATION</span>
                               
                                <h3 class = "blog-title">
                                    DESCRIPTION
                                </h3>
                                <p class = "blog-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eligendi!
                                </p>
                               
                            </div>
                        </div>
                       
                           <div class = "blog">
                            <img className='im' src ={im3} />
                            <div class = "blog-content">
                                <span class = "badge">EXPERIENCE</span>
                               
                                <h3 class = "blog-title">
                                    DESCRIPTION
                                </h3>
                                <p class = "blog-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eligendi!
                                </p>
                               
                            </div>
                        </div>
                      
                           <div class = "blog">
                            <img className='im' src={im4} />
                            <div class = "blog-content">
                                <span class = "badge"> EXPERIENCES</span>
                               
                                <h3 class = "blog-title">
                                    DESCRIPTION
                                </h3>
                                <p class = "blog-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                </p>
                               
                            </div>
                        </div>
                        

                     
                        
                       
                    </div>
                </div>
            </div>
        </section>
     


       
        <footer class = "footer">
            <div class = "footer-container container">
                <div>
                    <h2>User</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel obcaecati sapiente minima itaque nam modi libero optio vitae animi, praesentium quis commodi fugit quasi nostrum nihil veniam nisi suscipit cumque ducimus error doloribus est voluptatum at? Et aut mollitia quia.</p>
                </div>
                <div>
                    <h3>Free Subscription!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, facere eius! Ipsam laborum modi, cumque dolor incidunt animi nam magni.</p>

                    <div class = "subs">
                        <i class = "fas fa-envelope"></i>
                        <input type = "email" id = "email" placeholder="Email Address"/>
                        <button type = "submit">SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <p>&copy; Copyright Portffolio-builder . My beautifull portfolio</p>
        </footer>
        

        <script src="script.js"></script>
    </body>
  </>
  )
}
