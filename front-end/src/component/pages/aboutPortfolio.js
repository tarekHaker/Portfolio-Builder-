import React from 'react';
import './portfolioUser.css';
import im1 from "./images/about-img.jpg"

export default function AboutPortfolio() {
  return (
    <>
            <header class = "header">
            <div class = "nav-section">
                <div class = "brand-and-navBtn">
                    <span class = "brand-name">
                        USERHLAB
                    </span>
                    <span class = "navBtn flex">
                        <i class = "fas fa-bars"></i>
                    </span>
                </div>

               
                <nav class = "top-nav">
                    <ul>
                    <li><a href = "/"  class = "active">Home</a></li>
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
                        <img src ={im1}  alt = "photographer img"/>
                    </div>
                    <h2>I'm User</h2>
                    <h3>Web developer</h3>
                    <blockquote>
                        "Web development is a creative and technical endeavor that involves building and maintaining websites and web applications. It's a blend of art and science where developers craft user-friendly interfaces, ensure responsive designs, and employ programming languages to bring digital experiences to life. "
                       
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
                        <li>
                            <a href = "#"><i class = "fab fa-pinterest"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
       

     
        <section class = "section-five">
            <div class = "container">
                <div class = "contact-top">
                    <h3>CONTACT ME</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nobis.</p>
                </div>

                <div class = "contact-middle">
                    <div>
                        <span class = "contact-icon">
                            <i class = "fas fa-map-signs"></i>
                        </span>
                        <span>Address</span>
                        <p>Main Street - 3456, California 0000</p>
                    </div>

                    <div>
                        <span class = "contact-icon">
                            <i class = "fas fa-phone"></i>
                        </span>
                        <span>Contact Number</span>
                        <p>4567 3485 2902</p>
                    </div>

                    <div>
                        <span class = "contact-icon">
                            <i class = "fas fa-paper-plane"></i>
                        </span>
                        <span>Email Address</span>
                        <p>info@gmail.com</p>
                    </div>

                </div>

                <div class = "contact-bottom">
                    <form class = "form">
                        <input type = "text" placeholder="Your Name"/>
                        <input type = "email" placeholder="Your Email"/>
                        <input type = "text" placeholder="Subject"/>
                        <textarea rows = "9" placeholder="Message"></textarea>
                        <input type = "submit" class = "btn" value = "Send Message"/>
                    </form>

                 
  
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
            <p>&copy; Copyright USER . PORTFOLIO BUILDER</p>
        </footer>
    </>
  )
}
