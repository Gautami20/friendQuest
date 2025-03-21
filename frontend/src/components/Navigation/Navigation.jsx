import React from 'react';
import './Navigation.css';

function Navigation() {
  const getlocation = () =>{
    // alert("Getting location")
     if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(showPosition,showError); 
     }
     else{
      alert("")
     }
  };


  const showPosition = (position) =>{
        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        const des =document.querySelector(".navigation-p");
        des.innerHTML = `Latitude: ${lat} Longitude: ${long}`;
        console.log(lat,long);
      }

      const showError = (error) =>{
        // console.log(error);
        switch(error.code){
          case error.PERMISSON_DENIED:
            alert("User denied the request for geolacation");
            break;

            case error.POSITION_UNAVAILABLE:
              alert("Location information is unavailable,");
              break;
              case error.TIMEOUT:
                alert("The request to get user location time out.");
                break;
            case error.UNKNOWN_ERROR:
              alert("An unknow error occurred.")
              break;

            default:
              alert("An unknown error occurred.");
        }
      };

  return (
    <div className='map'>
      <h1>
        Get the user location/
      </h1>
      <p className='navigation-p'></p>
      <button className='navigation-button'
        onClick={getlocation}>Get location
      </button>
    </div>
  )
}

export default Navigation
