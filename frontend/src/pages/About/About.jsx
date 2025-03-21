import React from 'react';
import './About.css';
import about_img from '../../assets/friendquest_about_img.png';
import about_img2 from '../../assets/friend_about.png';
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <>
		<div className='about-head-div'>
			<h1 className='about-head-text'>About Us</h1>
			
		</div>
		<div className='about-main-div'>
				<div className='about-main-contain'>
						<div className="about-main-text">
							<p className='about-text'><em><span style={{fontSize:"30px", fontWeight:"bold", color:"#b8346a"}}>FriendQuest</span> <br></br> Where Interests become Friendships!</em>
							<br></br>
							<br></br>
							Whatever your interest, from hiking and reading to networking and skill sharing, there are thousands of people who share it on FriendQuest. Make friends every day—sign up to join the fun.
							</p>
							
							<button className='about-signup-btn' ><Link to='/register'>Sign Up</Link></button>
						</div>
						<div className="about-main-img">
							<img src={about_img2} alt='img' />
						</div>
				</div>
				<div className="about-info-div">
							<div className="about-info-card">
								<img src={about_img} alt="Heart Balloon"/>
								<h2>Why FriendQuest Matters</h2>
								<p>Making meaningful connections isn’t always easy. FriendQuest helps you find like-minded companions for activities like shopping, movies, or just hanging out, making friendships easier to form and nurture.</p>
							</div>
							<div className="about-info-card">
								<img src={about_img2} alt="Steps Image"/>
								<h2>How FriendQuest Works</h2>
								<p>Our smart matching algorithm connects you with people based on shared interests and location. With real-time GPS, user profiles, and interactive maps, finding and planning meetups is simple and safe.</p>
							</div>
							<div className="about-info-card">
								<img src={about_img} alt="Message Icon"/>
								<h2>What FriendQuest Values</h2>
								<p>We prioritize inclusivity, authenticity, and respect. FriendQuest is a welcoming space where friendships grow naturally, built on trust, kindness, and shared experiences.</p>
							</div>
				</div>
		</div>
	</>
        
  )
}

export default About