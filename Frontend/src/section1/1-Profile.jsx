import React from "react";

function Profile(props){
  return(
    <div id="profile">

      <img id="profile-img" 
        src={props.user.img} 
        alt="profile-img"  
      />
      
      <div id="profile-name">
        {props.user.name}
      </div>
      
    </div>
  );
}

export default Profile;