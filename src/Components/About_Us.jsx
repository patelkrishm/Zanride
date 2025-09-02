import React from 'react'
import pexels2 from './Images/pexels2.png'
import Phone from './Images/Property 1=Phone.png'
import frame3 from './Images/Frame3.png'
import pexels3 from './Images/pexels3.png'
import pexels4 from './Images/pexels4.png'
import shield from './Images/shield.png'
import Footer from './Footer'
import {useNavigate} from 'react-router-dom'
const About_us = () => {
  return (
    <>
      <div className="about">
        <div className="about1">
          <div className="about-1">
            <div className="about-1-text">
              <h2>About Us</h2>
              <p>We value your feedback, questions, and concerns at Zanride. Our dedicated team is here to assist you and provide the support you need on your delivary. Please don't hesitate to reach out to us using any of the following contact methods</p>
            </div>
            <div className="about-1-img">
              <img src={pexels2} alt="" style={{ maxWidth: '100%', height: 'auto', width: '100%', display: 'block' }} />
            </div>
          </div>
          <div className="about-2">
            <div className="about-2-text">
              <div className="about-2-text-1">
                <img src={Phone} alt="" style={{maxWidth:'100%',height:'auto'}}/>
                <h2>Vision</h2>
                <p>Say goodbye to inconvenience. With Zanride, our couriers come to you, collecting parcels directly from your doorstep. From local retailers to bustling e-commerce businesses, we ensure On-Time Delivery Nationwide-because your business can't wait, and your customers shouldn’t.</p>
              </div><br /><br /><br />
              <div className="about-2-text-1">
                <img src={Phone} alt="" style={{maxWidth:'100%',height:'auto'}}/>
                <h2>Mission</h2>
                <p>Say goodbye to inconvenience. With Zanride, our couriers come to you, collecting parcels directly from your doorstep. From local retailers to bustling
                  e-commerce businesses, we ensure On-Time Delivery Nationwide-because your business can't wait, and your customers shouldn’t.</p>
              </div><br /><br /><br />
              <div className="about-2-text-1">
                <img src={Phone} alt="" style={{maxWidth:'100%',height:'auto'}}/>
                <h2>Values</h2>
                <p>Say goodbye to inconvenience. With Zanride, our couriers come to you, collecting parcels directly from your doorstep. From local retailers to bustling e-commerce businesses, we ensure On-Time Delivery Nationwide-because your business can't wait, and your customers shouldn’t.</p>
              </div>
            </div>
            <div className="about-2-img">
              <img src={frame3} alt="" style={{maxWidth:'100%',height:'auto'}}/>
            </div>
          </div>
          <div className="about-3">
            <div className="about-3-text">
              <h2>A letter from our CEO</h2>
              <p>Read about our team’s commitment to provide everyone on our global platform with the technology that can help them move ahead.</p>
              <button>Read  Aman’s Letter</button>
            </div>
            <div className="about-3-img">
              <img src={pexels3} alt="" style={{ maxWidth: '100%', height: 'auto', width: '100%', display: 'block' }} />
            </div>
          </div>
          <div className="about-4">
            <div className="about-4-img">
              <img src={pexels4} alt="" style={{maxWidth:'100%',height:'auto'}}/>
            </div>
            <div className="about-4-text">
              <h2>Sustainability</h2>
              <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
            </div>
          </div>
          <div className="about-5">
            <div className="about-5-text">
              <h2>Rides and beyond</h2>
              <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
            </div>
          </div>
          <div className="about-6">
            <div className="about-6-text">
              <h2>Your safety drives us</h2>
              <p>Whether you’re in the back seat or behind the wheel, your safety is essential. We are committed to doing our part, and technology is at the heart of our approach. We partner with safety advocates and develop new technologies and systems to help improve safety and help make it easier for everyone to get around.</p>
            </div>
            <div className="about-6-img">
              <img src={shield} alt="" style={{maxWidth:'100%',height:'auto'}}/>
            </div>
          </div>
          <span className='hr'><hr /></span>
          <div className="about-7">
            <Footer />
          </div>

        </div>
      </div>
    </>
  )
}

export default About_us