import React, { useState } from 'react'
import pexels from './Images/pexels.png'
import pexels1 from './Images/pexels1.png'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownward from '@mui/icons-material/ArrowDownward'
import Footer from './Footer'
const Careers = () => {
  const [show, setShow] = useState(true)
  return (
    <>
      <div className="career">
        <div className="career1">
          <div className="career-1">
            <div className="career-1-text">
              <h2>Careers</h2>
              <p>Join our dynamic team and embark on a journey of innovation and growth.</p>
            </div>
            <div className="career-1-img">
              <img src={pexels} alt=""style={{ maxWidth: '100%', height: 'auto', width: '100%', display: 'block' }} />
            </div>
          </div>
          <div className="career-2">
            <div className="career-2-text">
              <span>Why Drive with us</span>
              <h2>Going fast, far, together</h2>
              <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
            </div>
            <div className="career-2-img">
              <img src={pexels1} alt=""/>
            </div>
          </div>
          <div className="career-3">
            <div className="career-3-text1">
              <div className="career-3-text1-1">
                <div className="career-3-text1-1-a">
                  <h2>SEO Specialist</h2>
                  <span>Fulltime | Remote</span><ArrowUpwardIcon className='arrow' onClick={() => { setShow(!show) }}/>
                </div>
                {show && <div className="career-3-text1-1-b">
                  <p>Join our team to craft compelling visual experiences across various digital and print mediums. Bring creativity and innovation to our brand identity projects.</p>
                  <h3>Responsibilities:</h3>
                  <ul>
                    <li>Designing engaging graphics for web, social media, and marketing materials.</li>
                    <li>Collaborating with the team to conceptualize and execute design solutions.</li>
                    <li>Ensuring brand consistency across all visual assets.</li>
                  </ul>
                  <h3>Requirements:</h3>
                  <ul>
                    <li>Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign).</li>
                    <li>Strong portfolio showcasing creative design projects.</li>
                    <li>Ability to work efficiently in a fast-paced environment.</li>
                  </ul>
                </div>}
              </div>
              <div className="career-3-text1-2">
                <h2>SEO Specialist</h2>
                <span>Fulltime | Remote</span><ArrowDownward className='arrow' />
              </div>
              <div className="career-3-text1-2">
                <h2>SEO Specialist</h2>
                <span>Fulltime | Remote</span><ArrowDownward className='arrow' />
              </div>
              <div className="career-3-text1-2">
                <h2>SEO Specialist</h2>
                <span>Fulltime | Remote</span><ArrowDownward className='arrow' />
              </div>
              <div className="career-3-text1-2">
                <h2>SEO Specialist</h2>
                <span>Fulltime | Remote</span><ArrowDownward className='arrow' />
              </div>
            </div>
            <div className="career-text-2">
              <h2>Join our team today!</h2>
              <p>"Explore exciting career opportunities with us and take the next step towards building your future in digital innovation."</p>
              <button>Apply Now</button>
            </div>
          </div>
          <div className="career-4">
          <span className='hr'><hr /></span>
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Careers