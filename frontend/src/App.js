import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Main from './pages/Main/Main'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Find from './pages/Find/Find';
import Disclaimer from './pages/Disclaimer/Disclaimer';
import Chat from './pages/Chat/Chat.jsx';
import About from './pages/About/About.jsx';
import Profile from './pages/Profile/Profile';
import { Chatbot } from './components/Chatbot/Chatbot';

import { ClientOnly, Skeleton } from "@chakra-ui/react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  return (
    <ClientOnly fallback={<Skeleton />}>
      <Router>

        <Navbar/>
        <Routes>

          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/disclaimer' element={<Disclaimer />} />
          <Route path='/register' element={<Register />} />
          <Route path='/find' element={<Find />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/profile' element={<Profile />} />

        </Routes>

        <Chatbot/>
        <Footer/>

      </Router>
      </ClientOnly>
  );
}

export default App;

// $raspberry - rose: #b8336aff;
// $black: #060506ff;
// $sunset: #f2d0a4ff;
// $tickle - me - pink: #E38DA6ff;
// $white: #FFFFFFff;