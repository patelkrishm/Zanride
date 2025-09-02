import React from 'react'
import hand from './Images/hand.png'
import illustration from './Images/illustration.png'
import message from './Images/Property 1=Mail.png'
import call from './Images/Property 1=Call.png'
import location from './Images/Property 1=Locationn.png'
import Footer from './Footer'
const Contect_Us = () => {
  return (
    <>
      <div className="contect-us">
        <div className="contect-us-1">
          <div className="us-1">
            <div className="us-1-text">
              <h2>Contact Us</h2>
              <p>We value your feedback, questions, and concerns at Zanride. Our dedicated team is here to assist you and provide the support you need on your delivary. Please don't hesitate to reach out to us using any of the following contact methods</p>
            </div>
            <div className="us-1-img">
              <img src={hand} alt=""style={{ maxWidth: '100%', height: 'auto', width: '100%', display: 'block' }}/>
            </div>
          </div>
          <div className="us-2">
            <div className="us-2-input">
              <input type="text" placeholder='Last Name' className='name' />&nbsp;&nbsp;
              <input type="text" placeholder='First Name' className='name' />
              <input type="text" placeholder='Email' className='number' />
              <input type="number" placeholder='Phone Number' className='number' min="10" max="10"/>
              <textarea placeholder='Message'></textarea>
              <button>Submit</button>
            </div>
            <div className="us-2-img">
              <img src={illustration} alt="" style={{maxWidth:'100%',height:'auto'}}/>
            </div>
          </div>
          <div className="us-3">
            <div className="us-3-box-1">
              <div className="us-3-box-img">
                <img src={message} alt="" style={{maxWidth:'100%',height:'auto'}}/>
              </div>
              <div className="us-3-box-text">
                <h2>Email us your query</h2>
                <p>hello@Zanride247.com</p>
              </div>
            </div>
            <div className="us-3-box-2">
              <div className="us-3-box-img">
                <img src={call} alt="" style={{maxWidth:'100%',height:'auto'}}/>
              </div>
              <div className="us-3-box-text">
                <h2>24/7 Helpline</h2>
                <p>+234 904 636 3333</p>
              </div>
            </div>
            <div className="us-3-box-3">
              <div className="us-3-box-img">
                <img src={location} alt="" style={{maxWidth:'100%',height:'auto'}}/>
              </div>
              <div className="us-3-box-text">
                <h2>Address</h2>
                <p>GUAke Road, Eliozu New Airport Road, Opp White Jade Event Center Aligbolu Port Harcourt, River State. , Eliozu, Nigeria, 500102.</p>
              </div>
            </div>
          </div>


          <div className="us-4">
            <Footer />
          </div>

        </div>
      </div>
    </>
  )
}

export default Contect_Us