import React ,{useEffect ,useState} from "react";
import { Link } from "react-router-dom";
import '../index.css';
import { auth , db } from "./Firebase";
import {  setDoc, doc, getDoc} from "firebase/firestore";
import { toast } from "react-toastify";

function NavBar() {
    useEffect(() => {
        const menuIcon = document.querySelector('.menu-icon');
        const menuContent = document.querySelector('nav');
    
        // Toggle class 'show' on click
        menuIcon.onclick = () => {
          menuContent.classList.toggle('show');
        };
      }, []);
    


    const [userDetails , setUserDetails] = useState(null);
    const fetchUserData = async() =>{
        auth.onAuthStateChanged(async(user) =>{
            console.log(user);
            const docRef =doc(db , "Users" , user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()){
                setUserDetails(docSnap.data());
                console.log(docSnap.data());
                
            }else{
                console.log('User is not logged in');
                
            }
        });
    };
    useEffect(() =>{
        fetchUserData()
    },[]);
    async function handleLogout() {
        try {
            await auth.signOut();
            console.log('User logged out!');
            window.location.href = "/";

            
        } catch (error) {
            console.log("Error loggin out:", error.message);
            
        }
    }
    return(
       
        <header className="sticky-top shadow-sm">
        <div className="logo mb-3  ">
        <h1 className="">gillion</h1>
        <i class="bi bi-list menu-icon"></i>
        </div>
        <nav>
           
            <div className=" ">
                <ul>
                    <li className="px-3">
                        <Link className="mynav-item" to="/">Home
                        </Link>
                    </li>

                    <li className="px-3">
                        <Link className="mynav-item" to="/blog">Blogs
                        </Link>
                     </li>
                     <li className="px-3">
                        <Link className="mynav-item" to="/wishlist">Wishlist
                        </Link>
                     </li>

                  
                </ul>
            </div>
            {userDetails ? (
            <div className="d-flex justify-content-center align-items-center login-profile ">
                <div className="user">
            <i class="bi bi-person-fill profile " ></i>
            <p className="me-4">{userDetails.username}</p>
            </div>

            <button onClick={handleLogout}className="nav-login login-link">Logout</button>
            </div>
               ) :(
                <button className="nav-login ">
                    <Link className="login-link" to="/login">Login</Link>
                </button>
                
                )
            }

        </nav>
     </header>
    )
}
 
export default NavBar;
