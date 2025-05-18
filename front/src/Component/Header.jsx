import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
     <div className="site-mobile-menu site-navbar-target">
      <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-close">
          <span className="icofont-close js-menu-toggle"></span>
        </div>
      </div>
      <div className="site-mobile-menu-body"></div>
    </div>

    <nav className="site-nav">
      <div className="container">
        <div className="menu-bg-wrap">
          <div className="site-navigation">
            <NavLink to="index.html" className="logo m-0 float-start">Property</NavLink>

            <ul
              className="js-clone-nav d-none d-lg-inline-block text-start site-menu float-end"
            >
              <li className="active"><NavLink to="index.html">Home</NavLink></li>
              {/* <li className="has-children">
                <a to="properties.html">Properties</a>
                <ul className="dropdown">
                  <li><a to="#">Buy Property</a></li>
                  <li><a to="#">Sell Property</a></li>
                  <li className="has-children">
                    <a to="#">Dropdown</a>
                    <ul className="dropdown">
                      <li><a to="#">Sub Menu One</a></li>
                      <li><a to="#">Sub Menu Two</a></li>
                      <li><a to="#">Sub Menu Three</a></li>
                    </ul>
                  </li>
                </ul>
              </li> */}
              <li className="has-children">
                <NavLink to="properties.html">Property Seekers</NavLink>
                <ul className="dropdown">
                  <li><NavLink to="Seeker/login">Login</NavLink></li>
                  <li><NavLink to="Seeker/signup">Sign Up</NavLink></li>
                </ul>
              </li>
              <li className="has-children">
                <NavLink to="properties.html">Property Owners</NavLink>
                <ul className="dropdown">
                  <li><NavLink to="Owner/Login">Login</NavLink></li>
                  <li><NavLink to="Owner/Signup">Sign Up</NavLink></li>
                </ul>
              </li>
              
              <li><NavLink to="services.html">Services</NavLink></li>
              <li><NavLink to="about.html">About</NavLink></li>
              <li><NavLink to="contact.html">Contact Us</NavLink></li>
            </ul>

            <a
              to="#"
              className="burger light me-auto float-end mt-1 site-menu-toggle js-menu-toggle d-inline-block d-lg-none"
              data-toggle="collapse"
              data-target="#main-navbar"
            >
              <span></span>
            </a>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Header
