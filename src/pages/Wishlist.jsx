import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



function Wishlist() {
    const [favouritePosts, setFavouritePosts] = useState([]);
    useEffect(() => {
        const storedFavouritePosts = JSON.parse(localStorage.getItem('favouritePosts')) || [];
        setFavouritePosts(storedFavouritePosts);
    }, []); 
  

    const handleDelete = (indexToDelete) => {
        // Filter out the item that matches the index
        const updatedFavouritePosts = favouritePosts.filter((_, index) => index !== indexToDelete);

        // Update the state and local storage
        setFavouritePosts(updatedFavouritePosts);
        localStorage.setItem('favouritePosts', JSON.stringify(updatedFavouritePosts));
    };
    return(
        <>
        <section className='wishlist-section d-flex justify-content-center '>
             <div className="favourite ">
                {favouritePosts.length === 0 ? (
                    <p>Your Posts is empty</p>
                ) : (
                    favouritePosts.map((item, index) => (
                        <div className=" mb-1  " key={index}>
                            
                            <div className="post-item d-flex flex-column justify-content-center align-items-center shadow-sm">
                           
                               <img className='close-icon' src="images/close.png" alt="" onClick={() => handleDelete(index)} />
                                <Link className="post-link" to={`/blog/${item.id}`}> 
                                <img className="fave-img" src={item.image} alt={item.title} />
                                </Link>
                                <div className="m-2">
                                    <p className="m-0 fw-bold">{item.title}</p>
                                    <p className="m-0 fs-9"> By {item.author}</p>
                                    

                                </div>
                            </div>
                           

                        </div>
                    ))
                )}

            </div>

        </section>
        </>
    )
}

export default Wishlist;