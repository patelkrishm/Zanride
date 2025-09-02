import React, { useState } from 'react'
import img1 from './Images/close-up-hands-holding-smartphone 1.png'
import Z from './Images/Z.png'
import Section1 from './Images/Section 01.png'
import Phone from './Images/Property 1=Phone.png'
import Navigate from './Images/Property 1=Navigate.png'
import Arrows from './Images/Property 1=Arrows.png'
import Group3 from './Images/Group 3.png'
import Frame from './Images/Frame.png'
import Mask from './Images/mask group.png'
import Image from './Images/Image.png'
import img2 from './Images/Img.png'
import car from './Images/car.png'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import profile1 from './Images/profile1.png'
import profile2 from './Images/profile2.png'
import profile3 from './Images/profile3.png'
import Footer from './Footer'
const Home = () => {
  const [data, setData] = useState(false)
  return (
    <>
      <div className="Home" style={{ width: '100%' }}>
        <div className="Home-1">
          <div className="Hero-section" style={{ backgroundColor: "black" }}>
            <div className="Hero-image" style={{ width: '100%', position: 'relative' }}>
              <img src={img1} alt="image" className='img1' style={{ maxWidth: '100%', height: 'auto', width: '100%', display: 'block' }} />
              {/* <div className="z">
                <img src={Z} alt="" style={{ maxWidth: '100%', height: 'auto', width: '100%' }} />
              </div> */}
            </div>
            <div className="Hero-text">
              <ul>
                <li><h1>Your Hassle-Free Journey starts here</h1></li>
                <li>An effortless ride plateform,Tailoed for your comfort and safety</li>
                <li><button>Register</button></li>
              </ul>
            </div>
          </div>
          <div className="section-1" style={{ backgroundColor: "black" }}>
            <img src={Section1} alt="" style={{ maxWidth: '100%', height: 'auto', width: '100%' }} />
          </div>
          <div className="section-2" style={{ maxWidth: '100%', width: '100%', height: 'auto' }}>
            <div className="box">
              <div className="box-1">
                <div className="img">
                  <img src={Phone} alt="" style={{ maxWidth: '100%', height: 'auto', width: 'auto' }} />
                </div>
                <div className="text">
                  <h2>Enhanced App Functionalities</h2>
                  <p>Experience ride tracking,easy payments,and user rating.</p>
                </div>
              </div>
              <div className="box-2">
                <div className="img">
                  <img src={Navigate} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
                <div className="text">
                  <h2>Seamless Ride <br></br>Tracking</h2>
                  <p>Track your ride in real-time for added convenience.</p>
                </div>
              </div>
              <div className="box-3">
                <div className="img">
                  <img src={Arrows} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
                <div className="text">
                  <h2>Effortless<br></br> Payments</h2>
                  <p>Make secure and hassle-free payments with our app.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="section-3">
            <div className="section-3-img">
              <img src={Group3} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <div className="section-3-text">
              <h2>Easy Sign-Up Process,Seamless Experience</h2>
              <p>With our streamlined 2-step registration process,becoming a driver has never been easier.Say goodbye to lengthy forms and unnecessary paperwork.Get started in minutes and unlock the potential to earn on your terms.</p>
              <ul>
                <li>Effortless Onboarding</li>
                <li>Quick Approval</li>
                <li>User-Friendly Interface</li>
                <li>Personalized Support</li>
              </ul>
            </div>
          </div>
          <div className="section-4">
            <div className="section-4-text">
              <h2>Help is just a tap away,anytime,anywhere</h2>
              <p>Whether it's question about navigation,a technical issue,or simply needing assistance on the road,our dedicated support team is here round the clock to ensure your peace of mind.</p>
              <div className="section-4-img">
                <img src={Frame} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
              </div>
            </div>
          </div>
          <div className="section-5">
            <div className="section-5-img">
              <img src={Mask} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <div className="section-5-text">
              <h2>Get Direct Cash to your Account Weekly</h2>
              <p>We understand the importance of steady income.That's why we ensure that your-earned money is deposited directly into your account every week,like clockwork.No more waiting anxiously for payouts or dealing with delays.With our reliable payment system,you can focus on what you do best.</p>
              <ul>
                <li>Weekly Payments</li>
                <li>No Hassle</li>
                <li>Financial Stability</li>
              </ul>
            </div>
          </div>
          <div className="section-6">
            <div className="section-6-text">
              <h2>Get Matched With Rides in Seconds</h2>
              <p>Step into our driver community and experience the fulfillment of connecting passengers with reliable transformation.With flexible scheduling tailored to your lifestyle,you can drive on your terms and make a real difference in pepole's lives,one ride at a time.</p>
              <button>Download</button>
              <div className="section-6-img">
                <img src={Image} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
              </div>
            </div>
          </div>
          <div className="section-7">
            <div className="section-7-text-1">
              <h2>48%</h2>
              <p>Fast and Reliable Service</p>
              <h2>61%</h2>
              <p>Affordable and Transport Pricing</p>
            </div>
            <div className="section-7-text-2">
              <span>Service</span>
              <h2>Book a Ride with Ease Using Our App</h2>
              <p>Our app makes booking a ride quick and hassie-free.With just a few taps,you can easily find and book a ride to your destination.</p>
              <button>Download</button>
            </div>
          </div>
          <div className="section-8">
            <div className="section-8-img">
              <img src={img2} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <div className="section-8-text">
              <span>Driver</span>
              <h2>Earn Money on Your Schedule</h2>
              <p>Join our community of drivers and enjoy the benefits of flexible work hours and unlimited earning potential.Whether you're looking to make some extra cash or turn driving into a full-time gig,our app makes it easy to connect with riders and start earning.</p>
              <div className="section-8-btn">
                <button className='btn1'>Join</button>&nbsp;&nbsp;
                <button className='btn2'>Learn more</button>
              </div>
            </div>
          </div>
          <div className="section-9">
            <div className="section-9-text">
              <h2>Our Fleet</h2>
              <div className="section-9-text1">

                <h2>XL car</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt vero eligendi voluptatem, inventore consectetur omnis blanditiis tempore veniam adipisci quos delectus corporis assumenda quibusdam error? Temporibus, sunt iste sed accusamus consequatur quas ea ad.
                <span><ArrowBackIcon className='arrow' /><ArrowForwardIcon className='arrow' /></span>
              </div>

            </div>
            <div className="section-9-img">
              <img src={car} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
          </div>
          <div className="section-10">
            <h2>See what our users say about us</h2>
            <br></br><br /><br /><br />
            <div className="section-10-text">
              <div className="section-10-text-1">
                <img src={profile1} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
                <div className="section-10-text-1-a">
                  <p>The service was absolutely impeccable.I see myself and my family using this much more frequently.</p>
                  <h3>John Doe</h3>
                </div>
              </div>
              <div className="section-10-text-2">
                <img src={profile2} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
                <div className="section-10-text-2-a">
                  <p>I was so surprised.I didn't expect it to be this good for how affordable it was.Awersome!</p>
                  <h3>John Doe</h3>
                </div>
              </div>
              <div className="section-10-text-3">
                <img src={profile3} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
                <div className="section-10-text-3-a">
                  <p>I've never had that type of smooth experience before.
                    Unreal!</p>
                  <h3>John Doe</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="section-11">
            <div className="section-11-text-1">
              <h2>Frequently asked Questions</h2>
            </div>
            <div className="section-11-text-2">
              <span>
                <h3>Where can i watch?</h3><button onClick={() => { setData(!data) }}>+</button><hr />
                {data && <p>Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla. Elit adipiscing proin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio. Potentiмnibh natoque amet amet, tincidunt ultricies et. Et nam rhoncus sit nullam diam tincidunt condimentum nullam.</p>}
              </span>
              <span>
                <h3>Where can i watch?</h3><button>+</button><hr />
              </span>
              <span>
                <h3>Where can i watch?</h3><button>+</button><hr />
              </span>
              <span>
                <h3>Where can i watch?</h3><button>+</button><hr />
              </span>
              <span>
                <h3>Where can i watch?</h3><button>+</button><hr />
              </span>
            </div>

          </div>
          <span className='hr' style={{ maxWidth: 'auto' }}><hr /></span>
          <div className="section-12">
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;