import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link} from "react-router-dom";
import { auth } from "../components/Firebase";
import { toast } from "react-toastify";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth,email,password);
            console.log('User Logged in Sucessfully');
            toast.success("User Sucessfully Logged In", {position: "top-center",});
            window.location.href = "/";
            
        } catch (error) {
            console.log(error.message);
            toast.error(error.message,{ position:"bottom-center"});
        }
    }
    return(
        <>
    <section className="login-section  ">
        <div className="irregular1"></div>
        <div className="irregular2"></div>
     <div className="login-flex ">
        <form className="login-form d-flex flex-column justify-content-center align-items-center " onSubmit={handleSubmit}>
        <h1>Login</h1>
            <input
            className="mb-4"
             type="text"
             placeholder="Email:"
             value={email}
             onChange={(e) => setEmail(e.target.value)}/>

            <input
            className="mb-3"
            type="password" 
            placeholder="Password:"  
            value={password} 
            onChange={(e) => setPassword(e.target.value)}/>

            <button className="login-btn" type="submit">Login</button>
      <p className="redirect">
        Don't Have a account?
     <Link className="redirect-link" to={'/register'}> Register</Link>
     </p>
        </form>
        <div className="d-flex flex-column justify-content-center align-items-center">
                <img className="w-contain" src="/images/group.jpg" alt="" />
            </div>
            </div>
        </section>
        </>
    )
}

export default Login;