import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import gif from "../asset/logo/react.gif"
import logo from "../asset/logo/Logo.png";
import "../style/login.css"


export default function Login() {
  return (
    <div id="login">
      <div id="login-layout">
        <img id="logo" src={logo} alt="logo"/>
        <Intro />
        <Authentication />
      </div>
      <Footer /> 
    </div>
  )
}

function Intro(){
  return(
    <>
      <div id="intro">Welcome to Notie</div>
      <div id="intro-sub">A productivity app</div>
    </>
  );
}

function Authentication(){
  return(
    <div id="login-box">
      <LoginForm />
      <Divider />
      <LoginOption/>
    </div>
  );
}

function LoginForm(){
  return(
    <form>
      <input className="size input"
        maxLength={32} type="email" placeholder="Email"/>
      
      <input className="size input"
        maxLength={32} type="password" placeholder="Password" />
      
      <button className="size login-btn" >LOGIN</button>

      <div id="visible-psw">
        <IoEyeOffOutline color="#767676"/>
      </div>

    </form>
  );

}

function Divider(){
  return(
    <div id="divider">
      <div id="line"></div>
      <div id="title">| &nbsp; Or continue with &nbsp; |</div>
    </div>
  );
}

function LoginOption(){
  return(
    <div id="login-option">
      
        <div className="option-btn">
          <div>
          <FaFacebookF size={30} color={true? "#4267B2":"black"}/>
          </div>
          <div className="option-name">Facebook</div>
        </div>

        <div className="option-btn">
          <div>
          <FaGoogle size={30} color={true? "#DB4437":"black"}/>
          </div>
          <div className="option-name">Google</div>
        </div>

        <div className="option-btn">
          <div>
          <IoPersonAdd  size={30} color={false? "#00A82D":"black"}/>
          </div>
          <div className="option-name">Create<br/>Account</div>
        </div>

    </div>
  );
}

function Footer(){
  return(
    <footer>
      
      <div id="line1"> Powered by&nbsp;
        <img src={gif} alt="gif"/>  &nbsp;React
      </div>

      <div id="line2"> &copy; {new Date().getFullYear()}. 
        Made by  &#9755; &nbsp; <a href="?"> MachaCoder</a>
      </div>

  </footer>
  );
}