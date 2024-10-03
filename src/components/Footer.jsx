import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <>

<footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Cartify</h5>
            <p>
            Cartify is a modern e-commerce platform designed to make online shopping effortless and enjoyable. With a user-friendly interface and seamless checkout experience, Cartify allows customers to explore a wide range of products, add them to their cart, and shop with ease. 
            </p>
          </div>

          
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Products</h5>
            <p><a href="/" className="text-white" style={{ textDecoration: 'none' }}>Men's Fashion</a></p>
            <p><a href="/" className="text-white" style={{ textDecoration: 'none' }}>Women's Fashion</a></p>
            <p><a href="/" className="text-white" style={{ textDecoration: 'none' }}>Electronics</a></p>
            <p><a href="/" className="text-white" style={{ textDecoration: 'none' }}>Home Appliances</a></p>
          </div>

         
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Useful Links</h5>
            <p><a href="/" className="text-white" style={{ textDecoration: 'none' }}>Your Account</a></p>
            <p><a href="/" className="text-white" style={{ textDecoration: 'none' }}>Orders</a></p>
            <p><a href="/" className="text-white" style={{ textDecoration: 'none' }}>Wishlist</a></p>
            <p><a href="/" className="text-white" style={{ textDecoration: 'none' }}>Help</a></p>
          </div>

        
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Contact</h5>
            <p><i className="fas fa-home mr-3"></i> Crossing repiblik, Ghaziabad</p>
            <p><i className="fas fa-envelope mr-3"></i> mukulrajput7820@gmail.com</p>
            <p><i className="fas fa-phone mr-3"></i> +91 1234 567 890</p>
            <p><i className="fas fa-print mr-3"></i> +91 1234 567 890</p>
            <a href="https://www.linkedin.com/in/mukul-rajput-9b5470250/">
            <i className="fab fa-github mr-3"> Linkedin</i> 
            </a>
            <a href="https://github.com/lucifer8476">
            <i className="fab fa-github mr-3"> Github</i> 
            </a>
          </div>
        </div>

        
         <div className="row align-items-center">

          <div className="col-md-12">
            <p className="mb-3 mb-md-0">Made with ❤️ by {" "}
              <a  href="https://github.com/lucifer8476" className="text-decoration-underline text-light fs-6" target="_blank" rel="noreferrer">Mukul Rajput</a>
            </p>
          </div>

          <div className="col-md-12 col-lg-12">
            <p className="text-center text-md-left">
              &copy; { new Date().getFullYear()} All Rights Reserved by <a href="/" className="text-white" style={{ textDecoration: 'none' }}>Cartify</a>
            </p>
          </div>   
      </div>
      
      </div>
    </footer>




     
    </>
  );
};

export default Footer;
