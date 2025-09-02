import React, { useState } from 'react'
import driver from './Images/driver.png'
import frame1 from './Images/Frame1.png'
import frame2 from './Images/Frame2.png'
import Footer from './Footer'
const Become_a_Driver = () => {
  const [data, setData] = useState(false)
  return (
    <><div className="become-a-driver">
      <div className="become-a-driver-1">
        <div className="part-1">
          <div className="part-1-text">
          <p>Become a Driver</p>
          </div>
          <img src={driver} alt="" style={{ maxWidth: '100%', height: 'auto', width: '100%', display: 'block' }} />
        </div>
        <div className="part-2">
          <div className="part-2-text">
            <span>Why Driver With us</span>
            <h2>Take control of your hours, pocket the earnings you crave!</h2>
            <p>Drive whenever suits you best, with our app's flexible schedule. Get paid instantly, on your terms, for the miles you cover. Your time, your road, your paycheck - all in one place.</p>
          </div>
          <div className="part-2-img">
            <img src={frame1} alt="" style={{ maxWidth: '100%', height: 'auto', width: '100%', display: 'block' }}/>
          </div>
        </div>
        <div className="part-3">
          <div className="part-3-text">
            <span>Safety on Road</span>
            <h2>Instant Assistance at Your Fingertips!</h2>
            <p>Stay secure on the road with our built-in safety feature. With just one tap, drivers can access immediate assistance for any issue they encounter, ensuring peace of mind and prompt resolution while they focus on delivering their passengers safely to their destination.</p>
            <ul>
              <li>Get Help from Drivers around</li>
              <li>Get Rewards for Helping other drivers</li>
            </ul>
          </div>
          <div className="part-3-img">
            <img src={frame2} alt="" style={{ maxWidth: '100%', height: 'auto', width: '100%', display: 'block' }}/>
          </div>
        </div>
        <div className="part-4">
          <div className="part-4-text">
            <span>Become a Driver, Join the Family</span>
            <p>Join our family of drivers and start earning on your own terms today. Take the wheel of your income and join our community of drivers making a difference, one ride at a time.</p>
          </div>
          <div className="part-4-btn">
            <button>Become a Driver</button>
          </div>
        </div>
        <div className="part-5">
          <div className="section-11-text-1">
            <h2>Frequently asked Questions</h2>
          </div>
          <div className="section-11-text-2">
            <span>
              <h3>Where can i watch?</h3><button onClick={()=>{setData(!data)}}>+</button><hr />
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
        <div className="part-6">
          <Footer />
        </div>
      </div>
    </div>
    </>
  )
}

export default Become_a_Driver