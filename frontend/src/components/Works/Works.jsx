import React from 'react'
import './Works.css'

function Works() {
  return (
  <>
    {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"> */}
    <div className="works container px-5 padi" id="hanging-icons">
        <h2 className="works pb-1 " style={{fontSize:"35px", fontWeight:"bold"}}>How it Works!</h2>
        <div className="works row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="works col d-flex align-items-start">
            <div className="works icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-door-open" viewBox="0 0 16 16">
                    <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1"/>
                    <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117M11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5M4 1.934V15h6V1.077z"/>
                </svg>
            </div>
            <div>
              <h3 className="works-editext">Step1: Sign Up or Log In</h3>
              <p className="works-para">If you're a new user, look for a "Sign Up" or "Register" button. Fill in the required information such as name, email, password, and sometimes additional details like interests or a profile picture.</p>
            </div>
          </div>
          <div className="works col d-flex align-items-start">
            <div className="works icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                </svg>
            </div>
            <div>
              <h3 className="works-editext">Step2: Complete Profile Setup</h3>
              <p className="works-para"> Add or update your profile with a picture, bio, interests, and other relevant details. Adjust settings to control who can see your information and how you are contacted.</p>
            </div>
          </div>
          <div className="works col d-flex align-items-start">
            <div className="works icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cursor-fill" viewBox="0 0 16 16">
                    <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
                </svg>
            </div>
            <div>
              <h3 className="works-editext">Step3: Explore Features</h3>
              <p className="works-para">Familiarize yourself with the main dashboard where key features are often highlighted.Use the navigation menu to access different sections like Friends, Chat, Explore, Trips, and Settings.</p>
            </div>
          </div>
          <div className="works col d-flex align-items-start">
            <div className="works icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-heart" viewBox="0 0 16 16">
                    <path d="M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4m13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276Z"/>
                </svg>
            </div>
            <div>
              <h3 className="works-editext">Step4: Connect with Friends</h3>
              <p className="works-para">Send friend requests to people you know. Once accepted, they will be added to your friends list.</p>
            </div>
          </div>
          <div className="works col d-flex align-items-start">
            <div className="works icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-arms-up" viewBox="0 0 16 16">
                    <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                    <path d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z"/>
                </svg>
            </div>
            <div>
              <h3 className="works-editext">Step5: Explore New People</h3>
              <p className="works-para"> Check out suggested friends or profiles based on your interests and connections.Participate in events or activities hosted by the platform or other users.
            </p> 
            </div>
          </div>
          <div className="works col d-flex align-items-start">
            <div className="works icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
                    <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                </svg>
            </div>
            <div>
              <h3 className="works-editext">Step6: Chat</h3>
              <p className="works-para">Start a chat with friends or new connections. Look for a chat or messaging icon.
            </p>
            </div>
          </div>
          <div className="works col d-flex align-items-start">
            <div className="works icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-calendar-range-fill" viewBox="0 0 16 16">
                    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 7V5H0v5h5a1 1 0 1 1 0 2H0v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9h-6a1 1 0 1 1 0-2z"/>
                </svg>
            </div>
            <div>
              <h3 className="works-editext">Step7: Plan and Go on Trips</h3>
              <p className="works-para">Use dedicated chat or forum sections for discussing trip details with participants.Access the trip planning feature. This might include creating trip itineraries, inviting friends, and setting dates.</p>
            </div>
          </div>
          <div className="works col d-flex align-items-start">
            <div className="works icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"/>
                </svg>
            </div>
            <div>
              <h3 className="works-editext">Step8: Notifications</h3>
              <p className="works-para">Keep an eye on notifications for friend requests, messages, event invitations, and trip updates.Adjust notification settings to control what types of alerts you receive and how you’re notified.</p>
            </div>
          </div>
          <div className="works col d-flex align-items-start">
            <div className="works icon-square works text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                </svg>
            </div>
            <div>
              <h3 className="works-editext">Step9: Feedback and Community</h3>
              <p className="works-para">Participate in surveys or feedback options to help improve the platform.
                Community Guidelines: Familiarize yourself with the community guidelines and terms of service.</p>
            </div>
          </div>
        </div>
      </div>
      </>
 
  )
}

export default Works