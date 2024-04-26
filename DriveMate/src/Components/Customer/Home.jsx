import React from 'react'
import './Customer.css'
import { Link } from 'react-router-dom';
import Navbar from './NavBar';
import ImageSlider from './ImageSlider';
const Home = () => {
  return (
    <>
   <Navbar/>
    <ImageSlider/>
    <footer id="footer">
  <div class="container" style={{ backgroundColor: "black" }}>
    <div class="row">
      <div class="col-md-3">
        <a href="index.html"><img src="src/Images/driveMate.png" alt="logo" class="img-fluid logo-footer" /></a>
        <div class="footer-about">
          <p><b>Experience the difference with DriveMate - your trusted travel companion on the road to wherever life takes you.</b></p>
        </div>
      </div>

      <div class="col-md-3">
        <div class="useful-link">
          <h2>Useful Links</h2>
          <div class="use-links">
            <li><a href="index.html"><i class="fa-solid fa-angles-right"></i> Home</a></li>
            <li><a href="about.html"><i class="fa-solid fa-angles-right"></i> About Us</a></li>
            <li><a href="contact.html"><i class="fa-solid fa-angles-right"></i> Contact</a></li>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="social-links">
          <h2>Follow Us</h2>
          <div class="social-icons">
            <li><a href=""><i class="fa-brands fa-facebook-f"></i> Facebook</a></li>
            <li><a href=""><i class="fa-brands fa-instagram"></i> Instagram</a></li>
            <li><a href=""><i class="fa-brands fa-linkedin-in"></i> Linkedin</a></li>
          </div>
        </div>
      </div>
      
      <div class="col-md-3">
        <div class="address">
          <h2>Address</h2>
          <div class="address-links">
            <li class="address1">
              <i class="fa-solid fa-location-dot"></i> DriveMate Technologies Pvt Ltd.<br />
              ABC Street, Gandhipuram<br />
              Coimbatore, Tamil Nadu, India
            </li>
          </div>
        </div>
        </div>
    </div>
  </div>
</footer>

    
    <section id="copy-right">
      <div class="copy-right-sec"><i class="fa-solid fa-copyright"></i>
      <img src="src/Images/copyright.png" alt="copyright"/>
      &nbsp; 2024 DriveMate Inc. All rights reserved. 


      </div>

    </section>
    
    </>
  )
}

export default Home
