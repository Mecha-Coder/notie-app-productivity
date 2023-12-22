import React from "react";

function Profile(props){
  return(
    <div id="profile">

      <img id="profile-img" 
        src={"./img/test1.jpg"} 
        alt="profile-img"  
      />
      
      <div id="proflie-name">
        {props.name}
      </div>
      
    </div>
  );
}

export default Profile;