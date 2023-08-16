import React from 'react'
import "./nav.css"

const Nav = () => {
  
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
    <div className="container-fluid">
      <a href="#" className="navbar-brand logo">Turing Sapiens</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navigation">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item"><a href="#" className="nav-link btn active">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link btn">Events</a></li>
          <li className="nav-item"><a href="#" className="nav-link btn">Projects</a></li>
          <li className="nav-item"><a href="#" className="nav-link btn">Membership</a></li>
          <li className="nav-item"><a href="#" className="nav-link btn">Blog</a></li>
        </ul>
      </div>
    </div>
  </nav>


  )
}

export default Nav
