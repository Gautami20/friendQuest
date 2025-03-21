import React, { useState, useEffect,useRef} from "react";
import axios from "axios";
import './Profile.css';

const Profile=()=>{
  const [user, setUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  // Fetch user profile data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        // It sends an Authorization header with the token (Bearer token is typically used for JWT).
        const response = await axios.get("http://localhost:9002/profile", {
          headers: { Authorization: token },
        });

        setUser(response.data);

      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  // Handle input change
  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };


const handleFileChange = (event) => {
  const file = event.target.files[0]; // Get the selected file
  if (file) {
    setSelectedFile(file); // ✅ Save file for later upload

    const reader = new FileReader();
    reader.onload = (e) => {
      setUser({ ...user, profilePicture: e.target.result }); // ✅ Store full Base64 string with prefix
    };
    reader.readAsDataURL(file); // ✅ Convert file to Base64 for preview
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const token = localStorage.getItem("token");
    let base64Image = user.profilePicture; // Keep the preview

    if (selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      // base64Image = await new Promise((resolve) => {
      //   reader.onload = () => resolve(reader.result.split(",")[1]); // ✅ Remove "data:image/png;base64,"
      // });
    }

    const updatedUser = {
      name: user.name,
      email: user.email,
      phone: user.phone,
      dob: user.dob,
      address: user.address,
      gender: user.gender,
      image: base64Image, // ✅ Only send Base64 data
    };

    const response = await axios.put("http://localhost:9002/profile", updatedUser, {
      headers: { 
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    console.log("Profile updated:", response.data);
    const newUpdatedUser= {
      email: response.data.user.email,
      name: response.data.user.name,
      profilePicture: response.data.user.profilePicture,  // Make sure this is included in the response
    };
    localStorage.setItem("user", JSON.stringify(newUpdatedUser));

    setUser(response.data.user);

    setIsEditing(false);
    setTimeout(() => alert("Profile updated successfully!"), 0);
  } catch (error) {
    console.error("Error updating profile:", error);
    alert("Failed to update profile.");
  }
};



return(
<div class="bg-gray-100 profile-page">
  
<div class="container mx-auto p-6">
   <div class="flex flex-col lg:flex-row gap-6">
    <div class="bg-white p-6 rounded-lg shadow-md w-full lg:w-1/3">
     <h2 class="text-lg font-semibold mb-4">
      Profile Picture
     </h2>
     <div class="flex flex-col items-center">
      {/* <img alt="Profile picture of a person with glasses and a suit" class="rounded-full mb-4" height="150" src="https://storage.googleapis.com/a1aa/image/ki--ySDGust3S7jkdJCcHyXrmde-lyaeBw90swnW3HY.jpg" width="150"/> */}

      <img alt="Profile" className="profilePicture rounded-full mb-4" height="150"
      src={user.profilePicture || "/default-profile.png"} // Show default if no picture
      width="150"/>
      <p class="text-gray-600 mb-4">
       JPG or PNG no larger than 5 MB
      </p>

      {/* <button class="bg-blue-600 text-white px-4 py-2 rounded">
       Upload new image
       <input className="form-control" type='file' name='photo' accept="image/*"/>
       </button> */}

    <div>
      
       {/* Flow of Execution
        1️⃣ User clicks the "Upload File" button → handleButtonClick is called.
        2️⃣ handleButtonClick triggers the hidden file input → .click() on the input field.
        3️⃣ File selection dialog opens → User picks an image file.
        4️⃣ onChange event fires (onFileChange function is called) → Selected file is processed (e.g., previewed, uploaded, etc.). */}
      
      <input
        type="file"
        name="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }} // Hidden File Input
        onChange={handleFileChange}
      />
      {/* Custom Upload Button */}
      <button type="button" className="btn btn-primary" onClick={() => fileInputRef.current.click()}>
        Upload Photo
      </button>
    </div>

     </div>
    </div>
    <div class="bg-white p-6 rounded-lg shadow-md w-full lg:w-2/3">
     <h2 class="text-lg font-semibold mb-4">  
      USER INFORMATION
     </h2>

     <form onSubmit={handleSubmit}>

      <div class="profile-form grid grid-cols-1 md:grid-cols-2 gap-4">
       <div>
        <label class="block text-gray-700">
         Username (how your name will appear to other users on the site)
        </label>
        <input class="w-full mt-1 p-2 border rounded " type="text" placeholder='Enter your Name' 
        name="name"
        value={user.name || ""}
        onChange={handleInputChange}
        disabled={!isEditing}/>
       </div>
       <div>
        <label class="block text-gray-700 p-2">
         EMAIL
        </label>
        <input class="w-full mt-1 p-2 border rounded" type="email" placeholder='Enter your Email' 
        value={user.email || ""} 
        name='email'
        onChange={handleInputChange}
        disabled={!isEditing}/>
       </div>
       <div>
        <label class="block text-gray-700">
         ADDRESS
        </label>
        <input class="w-full mt-1 p-2 border rounded" type="text" maxlength="30" placeholder='Enter your Address' 
        value={user.address || ""} 
        name='address'
        onChange={handleInputChange}
        disabled={!isEditing}/>
       </div>
       <div>
        <label class="block text-gray-700">
         PHONE NUMBER
        </label>
        <input class="w-full mt-1 p-2 border rounded" type="tel" maxlength="10" placeholder='Enter your Phone Number' 
        value={user.phone || ""} 
        name='phone'
        onChange={handleInputChange}
        disabled={!isEditing}/>
       </div>
       <div>
        <label class="block text-gray-700">
         DATE OF BIRTH
        </label>
        <input class="w-full mt-1 p-2 border rounded" type="date" 
        value={user.dob || ""} 
        name='dob'
        onChange={handleInputChange}
        disabled={!isEditing}/>
       </div>
       <div>
        <label class="block text-gray-700">
         GENDER(M/F)
        </label>
        <input class="w-full mt-1 p-2 border rounded" type="text" placeholder='Enter your Gender' 
        value={user.gender || ""}  
        name='gender'
        onChange={handleInputChange}
        disabled={!isEditing}
        />
       </div>
       
      </div>
      {/* <div class="mt-4">
       <button class="bg-blue-600 text-white px-4 py-2 rounded">
        Save changes
       </button>
      </div> */}

      <div className="mt-4">
  {isEditing ? (
    <>
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Save Changes
      </button>
      <button type="button" className="ml-2 bg-red-600 text-white px-4 py-2 rounded" onClick={() => setIsEditing(false)}>
        Cancel
      </button>
    </>
  ) : (
    
    // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
    // For example, this can be useful when:Clicking on a "Submit" button, prevent it from submitting a form
    //In the case of submit event. event.preventDefault() will prevent your form to submit. As auto submit was happening after clicking edit button and 
    // save and cancel buton were also disappeared as soon as we click OK on the alert and goes back to edit button
    <button type="button" className="bg-blue-600 text-white px-4 py-2 rounded" onClick={(e) => { e.preventDefault(); setIsEditing(true); }}>
      Edit Profile
    </button>
  )}
</div>


     </form>
    </div>
   </div>
  </div>

</div>);
}
export default Profile;
