import React from'react';

function Footer () {
    return(
        <>
        <footer>
            <div className='max-400 '>
                <p className='brand-name m-0'>gillion</p>
                <p className=' pg-5'>Subscribe to Our Newsletter</p>
                <div className='position-relative'>
                <input type="text" name="" className="news-input" placeholder='Enter Your Email Address' />
                <i class="bi bi-arrow-up subscribe"></i>
                </div>
            </div>
          
            <div className='text-center mt-4'>
                <p className='pg-1'>Socials</p>
                <p className='pg-3'>Stay in touch for the latest News in the Tech Industry</p>
                <div className="socials">
                <i class="bi bi-envelope-fill mx-2 s-25px footer-icon"></i>
                <i class="bi bi-instagram mx-1 s-25px footer-icon "></i>
                <i class="bi bi-twitter-x mx-2 s-25px footer-icon"></i>
            </div>
            </div>

        </footer>
        </>
    )
}

export default Footer;