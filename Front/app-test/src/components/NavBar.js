import React from 'react';


export default function NavBar() {


  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#5F04B4' }}>
      <div className="container-fluid">
        <a className="navbar-brand" style={{ color: 'white', fontSize: '25px' }}>Navbar</a>

        <div className="collapse navbar-collapse" style={{ marginLeft: '80%' }}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" style={{ color: 'white' }} href="#">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}




