import React from 'react';
import { Link } from 'react-router-dom';
import postsData from "../posts.json";



function Home() {
     // Filter posts by specific IDs
    const filteredPosts = postsData.filter((post) => [1, 2, 3, 4, 5].includes(post.id));

    // Array of class names for different columns
    const columnClasses = ["column1", "column2", "column3", "column4", "column5"];
    
    function navigateBlog() {
        window.location.href = "/blog";
        
    }
    return(
     <>
     {/* Home Page */}

     <section className="latest shadow-sm">
     <div className="latest-grid">
        {filteredPosts.map((post, index) => (
       <div className={`${columnClasses[index % columnClasses.length]} bg-zoom `} key={post.id}>
            <div className="content mb-1 ms-2">
              <p className="content-title m-1">
                <Link className="content-title" to={`/blog/${post.id}`}>{post.title}</Link>
              </p>
              <p className="post-date m-0">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
      </section>


     {/* Trending  Section*/}
       <section className="trending-topics mt-4">
        <h5> Todays's Trending Topics</h5>
    <div className="trending "  >

        <div className="d-flex justify-content-center align-items-center ">
            <img  src="../images/iphone16.webp" alt="" />
            <div className="topic d-flex flex-column">
            <p className="category3">Gadgets</p>
                <p className="fs-7 ">Apple Debuts Iphone 16 Series</p>
                <p></p>
                <p>September 4 2024</p>
            </div>
        </div>

        <div className="d-flex justify-content-center align-items-center ">
            <img   src="../images/glasses.jpg" alt="" />
            <div className="topic d-flex flex-column">
            <p className="category2">Health</p>
                <p className="fs-7 ">Importance Of Anti-glare Glasses</p>
                <p></p>
                <p>September 4 2024</p>
            </div>
        </div>

        <div className="d-flex justify-content-center align-items-center ">
            <img src="../images/car.jpeg" alt="" />
            <div className="topic d-flex flex-column">
                <p className="category">Technology</p>
                <p className="fs-7 ">Autonomous Vehicles - the next big thing.</p>
                <p></p>
                <p>September 4 2024</p>
            </div>
        </div>

        <div className="d-flex justify-content-center align-items-center ">
            <img  src="../images/meta.jpeg" alt="" />
            <div className="topic d-flex flex-column">
            <p className="category">Technology</p>
                <p className="fs-7 ">From Facebook to Metaverse</p>
                <p></p>
                <p>September 4 2024</p>
            </div>
        </div>

        <div className="d-flex justify-content-center align-items-center ">
            <img src="../images/phone2.jpg" alt="" />
            <div className="topic d-flex flex-column">
            <p className="category2">Health</p>
                <p className="fs-7 ">
                Mobile phones and your health</p>
                <p></p>
                <p>September 4 2024</p>
            </div>
        </div>

        </div>
       <hr />

       </section>

       
{/*  Newest Blog Section  */}
       <section className="blog">
        <h5 className='mb-3' >What's New Today</h5>
        <div className="blog-grid">
        <div className=" container-fluid w-800px">
            <div className="row">
             <div onClick={navigateBlog} className=" bg-zoom first dull mb-3 col-12 col-md-4 ">
                <div className="content">
                    <p className='content-title'>SpaceX launches Polaris Dawn Drone</p>
                    <div className="d-flex">
                        <p className='post-date'>March 2, 2023</p>
                    </div>
                </div>
            </div>

         <div onClick={navigateBlog}  className="second mb-3  col-12 col-md-4 px-4">

         <div className="d-flex justify-content-center align-items-center ">
            <img   className="w-custom" src="../images/airpod.jpeg" alt="" />
            <div className="topic d-flex flex-column">
            <p className="category3">Gadgets</p>
                <p className="fs-7 ">Airpod pro- Pricing and Features</p>
                <p></p>
                <p >September 4 2020</p>
            </div>
        </div>

        <div className="d-flex justify-content-center  align-items-center ">
            <img  className="w-custom" src="../images/ios.jpg" alt="" />
            <div className="topic d-flex flex-column">
            <p className="category">Technology</p>
                <p className="fs-7 ">Andriod Vs IOS - which is the best?</p>
                <p></p>
                <p>September 4 2020</p>
            </div>
        </div>

        <div className="d-flex justify-content-center align-items-center ">
            <img  className="w-custom" src="../images/list.png" alt="" />
            <div className="topic d-flex flex-column">
            <p className="category">Technology</p>
                <p className="fs-7 ">AI Likely to Replaced Some Jobs.</p>
                <p></p>
                <p>September 4 2020</p>
            </div>
        </div>
             </div>

            <div onClick={navigateBlog}  className="last col-12 col-md-4">
                <div  className="bg-zoom custom-bg-1 dull">
                    <p className='content-title'>The Top 5 Best HP Laptops </p>
                </div>
                <div className="bg-zoom custom-bg-2 dull">
                    <p className='content-title'>The World's Cheapest Phone</p>
                </div>
            </div>

        </div>
        </div>
        </div>
       </section>

       {/* Authors Section  */}
       <section className="top-authors" id='authors'>
       <h5 className='mb-3 text-center' >Our Top Authors</h5>
        <div className='scroll-grid'>
            <div>
                <img className="author-img" src="/images/a1.jpg" alt="" />
                <p className='author-name'>Mattwe ron</p>
                <p className='author-bio'>Written over 60 blogs worked with gillion for 3 years</p>
            </div>
            <div>
                <img className="author-img" src="/images/a5.jpg" alt="" />
                <p className='author-name'>Tola Bello</p>
                <p className='author-bio'>I am a passionate writer contributed in 40 blogs  </p>
            </div>
            <div>
                <img className="author-img" src="/images/a3.jpg" alt="" />
                <p className='author-name'>Obaro Dennis</p>
                <p className='author-bio'>I am a skilled writer written 20 blogs and hope to continue to. </p>
            </div>
            <div>
                <img className="author-img" src="images/a4.jpg" alt="" />
                <p className='author-name'>Mattwe ron</p>
                <p className='author-bio'>Gillion is the best and i'll continue to post here .</p>
            </div>
            <div>
            <img className="author-img" src="images/a6.jpg" alt="" />
                <p className='author-name'>Cythinthia Morgan</p>
                <p className='author-bio'>I am a skilled writer written 20 blogs and hope to continue to. </p>
            </div>
            <div>
            <img className="author-img" src="images/a7.jpg" alt="" />
                <p className='author-name'>Lisa Brooks</p>
                <p className='author-bio'>I am a skilled writer written 20 blogs and hope to continue to. </p>
            </div>
        </div>
       </section>
    
     </>
    );
}


export default Home;