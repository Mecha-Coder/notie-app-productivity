import React from 'react';
import "../style/configure.css";

export default function Configure() {
  return (
    <div id="configure">
      <Info />
      <div className="another">
        <Setting/>
        <button id="save-conf">Save Changes</button>
      </div>
    </div>
  );
}

function Info(){
  return(
    <div id="info" className="section">
      <p>Personal Infomation</p>

      <div className="info-row">
        <label>Name</label>
        <input type="text"/>
        <div>Edit</div>
      </div>

      <div className="info-row">
        <label>Email</label>
        <input type="text"/>
        <div>Edit</div>
      </div>

      <div className="info-row">
        <label>Password</label>
        <input type="text"/>
        <div>Edit</div>
      </div>

      <div className="info-avatar">
        <label>Avatar</label>

        <div className="profile-img">
          <img src="test.jpg" alt="avatar" />
          <div>Edit</div>
        </div>
      </div>

    </div>
  );  
}

function Setting(){
  return(
    <div id="setting" className="section">
      <p>Account Setting</p>

  
      <div className="divider-line"></div>
      <div>Background Color</div>
   

      <div id="drawer">
        <div className="color" style={{backgroundColor:"#EAC4C4"}}></div>
        <div className="color" style={{backgroundColor:"#E2C4EA"}}></div>
        <div className="color" style={{backgroundColor:"#C4CCEA"}}></div>
        <div className="color" style={{backgroundColor:"#C4E8EA"}}></div>
        <div className="color" style={{backgroundColor:"#C9EAC4"}}></div>
        <div className="color" style={{backgroundColor:"#EADEC4"}}></div>
        <div className="color" style={{backgroundColor:"#D9D9D9"}}></div>
      </div>

      
      <div className="divider-line"></div>
      <div>Background Pattern</div>
  
      
      <div id="drawer">
        <div className="pattern _0"> None</div>
        <div className="pattern _1"></div>
        <div className="pattern _2"></div>
        <div className="pattern _3"></div>
        <div className="pattern _4"></div>
      </div>

    </div>
  );  
}