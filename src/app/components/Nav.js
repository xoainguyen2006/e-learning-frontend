"use client"
import './Nav.scss'
export default function Navbar() {
  return (
    <div className='nav-bar'>
      <div className="logo">
        <div>E</div>
        Learning
      </div>
      <ul className="socials">
        <li>
          <a href="#"><i className="ri-twitter-fill"></i></a>
        </li>
        <li>
          <a href="#"><i className="ri-facebook-circle-fill"></i></a>
        </li>
        <li>
          <a href="#"><i className="ri-pinterest-line"></i></a>
        </li>
        <li>
          <a href="#"><i className="ri-instagram-line"></i></a>
        </li>
      </ul>
      <div className="contact">
        <div className="card">
          <span><i className="ri-phone-line"></i></span>
          <div>
            <p>Call Us</p>
            <h4>+84 12345 6789</h4>
          </div>
        </div>
        <div className="card">
          <span><i className="ri-mail-line"></i></span>
          <div>
            <p>Email Us</p>
            <h4>info@example.com</h4>
          </div>
        </div>
      </div>
    </div>
  );
}