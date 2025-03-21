import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import logo1 from '../../assets/logo1.png';

import { Button } from "@chakra-ui/react"

// import {
//   MenuContent,
//   MenuItem,
//   MenuRoot,
//   MenuTrigger,
// } from "../ui/menu"

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect( () => {

  const checkAuth = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      handleLogout(); // ✅ Logout if token is missing
      return;
    }

    // ✅ Decode token & check expiration before making API request
    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    const expiry = decodedToken.exp * 1000;

    if (Date.now() >= expiry) {
      console.log("Token expired! Logging out...");
      handleLogout();
      return;
    }

    try {
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Session expired or invalid token:", error);
      handleLogout(); // ✅ Force logout if API request fails
    }

  };
  checkAuth();  
  
   
  const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      console.log("User Data from localStorage:", parsedUser); // ✅ Debugging
      setIsLoggedIn(true);
      setUser(parsedUser);
      console.log("Navbar User Data:", parsedUser); // 🔥 Debugging

    } else {
      setIsLoggedIn(false);
      setUser({});
    }

    
    const updateUserData = () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    };
    updateUserData(); // Load user on mount
    // ✅ Listen for storage changes across tabs
   window.addEventListener("storage", updateUserData);
   return () => {
    window.removeEventListener("storage", updateUserData);
  };

}, []);


  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser({});
    navigate('/');
  };

  return (
    <nav className='main-nav'>
      <img className='logo1' src={logo1} alt='logo' />

      <div className='nav-links'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>

          {!isLoggedIn && (
            <>
            <li><Link to='/register'>Sign Up</Link></li>
              <li>
                <Link to='/login'>
                  <FontAwesomeIcon icon={faArrowRightToBracket} style={{ color: "#b8336aff" }}/>
                  <span style={{ padding: '5px' }}>Login</span>
                </Link>
              </li>
              
            </>
          )}

          {isLoggedIn && (
            <>
        <li><Link to='/Find'>Explore</Link></li>
      <div>

        
            {/* <MenuRoot  >
              <MenuTrigger  asChild>
                <Button _hover={{ bg: "gray.100" }} variant="unstyled" size="sm">
                  <img 
                  src={user.profilePicture || 'https://via.placeholder.com/40'} // Fallback to placeholder if no profilePicture
                  alt="Profile" 
                  // className="profile-pic"
                  style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%", // Make it round
              objectFit: "cover",
              backgroundColor: "transparent" // Ensure no black background
            }}
                  />
                </Button>
              </MenuTrigger>
            <MenuContent bg="white" 
        border="1px solid #E2E8F0" // Light gray border for visibility
        boxShadow="lg" borderRadius="md"
        padding="10px">

        <MenuItem value="rename" color="black" _hover={{ bg: "gray.100" }}>{user.name || 'User'}</MenuItem>

        <MenuItem value="export" _hover={{ bg: "gray.100" }}>
        <Link
            to="/profile"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none", // Remove underline
              color: "black" // Force black text instead of blue
            }}
          >
                    <FontAwesomeIcon icon={faUser} />
                    <span style={{ marginLeft: '5px' }}>Profile</span>
                  </Link></MenuItem>
        <MenuItem
          value="delete"
          color="fg.error"
          // _hover={{ bg: "bg.error", color: "fg.error" }}
          _hover={{ bg: "gray.100",color: "fg.error"  }}
          onClick={handleLogout}>
                  <FontAwesomeIcon icon={faSignOutAlt} />
                  <span style={{ marginLeft: '5px' }}>Logout</span>
        </MenuItem>
      </MenuContent>
            </MenuRoot> */}



            <li className='dropdown'>
              <div className='dropdown-trigger'>
                <a href="javascript:void(0)" class="profilePicture dropbtn"><img
                  src={user.profilePicture ||  "/default-profile.png"} // Fallback to placeholder if no profilePicture
                  alt="Profile"
                  className="profile-pic"
                />
                </a>
              </div>
                  <ul className='dropdown-menu'>
                    <li>{user.name || 'User'}</li>
                    <li> 
                      <Link to='/profile'>
                        <FontAwesomeIcon icon={faUser} size="xs" /><span style={{ marginLeft: '5px', fontSize:'1.5rem' }}>Profile</span>
                      </Link>
                    </li>
                    <li onClick={handleLogout} className='dropdown-li'> 
                      <FontAwesomeIcon icon={faSignOutAlt} size="xs" />
                      <span style={{ marginLeft: '5px', fontSize:'1.5rem'}}>Logout</span> 
                    </li>
                  </ul>
            </li>
            
            </div>

            </>
          )}


        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
