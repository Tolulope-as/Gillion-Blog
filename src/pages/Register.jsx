import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link} from "react-router-dom";
import React , {useState} from "react";
import { auth , db } from "../components/Firebase";
import {  setDoc, doc} from "firebase/firestore";
import { toast } from "react-toastify";
function Register() {
    const [fullname, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const handleRegister= async (e)=>{
      e.preventDefault();
      try {
       await createUserWithEmailAndPassword(auth,email,password);
       const user = auth.currentUser;
       console.log(user);
       if(user){
         await setDoc(doc(db , "Users", user.uid), {
            email : user.email,
            fullname : fullname,
            username : username,
         });
       }
       console.log('User Registered Sucessfully');
       toast.success("User Sucessfully Registered", {position: "top-center",});
       window.location.href = "/login";
      } catch (error) {
        console.log(error.message);
        toast.error(error.message, {position: "bottom-center",});
      }
    }

      //Function to View Password//
    function viewPassword() {
      const x = document.getElementById('password');
      const icon = document.getElementById('toggle-icon');
      if(x.type === "password"){
          x.type = "text";
          icon.classList.remove('bi-eye-slash-fill');
          icon.classList.add('bi-eye-fill');
      }else{
          x.type = "password";
          icon.classList.remove('bi-eye-fill');
          icon.classList.add('bi-eye-slash-fill');  
      }

  }
    return(
        <>
    <section className="register-section d-flex justify-content-center ">
    <div className="register-flex">
     <form className="register-form d-flex flex-column justify-content-center align-items-center " onSubmit={handleRegister}>
     <h1>Register</h1>
        <input 
        type="text" required 
        placeholder="Enter FullName" 
        id="fullname"
        onChange={(e) => setFullname(e.target.value)}/>

        <input 
        type="text" 
        placeholder="Enter Username:" 
        id="username"
        onChange={(e) => setUsername(e.target.value)}/>

        <input 
        type="email" required 
        placeholder="Enter Email"
         id="email"
         onChange={(e) => setEmail(e.target.value)}/>

         <div className="password-input">
        <input 
        type="password"
         id="password"
         placeholder="Password"
         onChange={(e) => setPassword(e.target.value)}
         />
      <i onClick={viewPassword} class="bi bi-eye-slash-fill password-toggle" id="toggle-icon"></i>

         </div>

       


     <button className="register-btn" type="submit">Register</button>
     <p className="redirect">
        Already Registered ?
     <Link className="redirect-link" to={'/login'}>Login</Link>
     </p>
     </form>
        <div className="welcome-div d-flex flex-column justify-content-center align-items-center">
            <h1>Hello Friend!</h1>
            <p>Create your user account and start your journey with us</p>
            <button className="signup-btn">Sign up</button>
            </div>
            </div>
        </section>
     </>

    )
}

export default Register;