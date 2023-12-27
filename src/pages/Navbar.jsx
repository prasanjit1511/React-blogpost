import React from 'react';
import { NavLink,Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
        <Link className="navbar-brand " to="/" > Partho </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  " id="navbarSupportedContent">

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item me-4">
       <NavLink className="nav-link"  to="/" > Home </NavLink>
      </li>
        <li className="nav-item me-4">
        <NavLink className="nav-link" to="/about" > About </NavLink>
      </li>
       <li className="nav-item me-3">
       <NavLink className="nav-link" to="/profile" > Profile </NavLink>
     </li>
     <li className="nav-item dropdown me-4">
     <NavLink className="nav-link dropdown-toggle" id="navbarDropdown" to="/blog" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Blog </NavLink>
    
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
      <li><a className="dropdown-item" href="/">Action</a></li>
      <li><a className="dropdown-item" href="/">Another action</a></li>
      <li><hr className="dropdown-divider" /></li>
      <li><a className="dropdown-item" href="/">Something else here</a></li>
    </ul>
    </li>
   <li className="nav-item me-4">
   <NavLink className="nav-link" href="/" tabIndex="-1" aria-disabled="true" to="/contact" > Contact </NavLink>
    </li>
      </ul>

            <form className="d-flex">
              <input className="form-control me-4" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
