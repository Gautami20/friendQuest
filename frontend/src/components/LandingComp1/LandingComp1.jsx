import React from 'react'
import './LandingComp1.css';
import landingImg from '../../assets/landing-frnd-img.jpg';


const LandingComp1 = () => {
  return (
    <>
        <div className="landing-mission-div">
            <p>
            At FriendQuest, we believe that life is better with the right people by your side. Our goal is to connect individuals seeking genuine friendships, meaningful conversations, and shared experiences. Whether you're looking for a shopping buddy, a movie partner, or just someone to talk to, FriendQuest makes finding companionship effortless and fun. We champion inclusivity, trust, and authentic connections—helping you build friendships that truly matter.
            </p>
        </div>
        <div className="landing-info-div">
            <div className="landing-info-text">
                <h1>There are friends for every era. <br></br> Even your messy ones.</h1>
                <p>FriendQuest is about exactly that—friendship. Whether you moved to a new city, found a new hobby, or just want someone to talk to, FriendQuest helps you find your kinda people.</p>
            </div>
            
            <div className="landing-info-img">
                <img src={landingImg} alt="" />
            </div>
        </div>
    </>
  )
}

export default LandingComp1;