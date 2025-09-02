import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import pexels7 from './Images/pexels7.png'
import image31 from './Images/image 31.png'
import image32 from './Images/image 32.png'
import Footer from './Footer'
const Blog_Details = () => {
    return (
        <>
            <div className="detail">
                <div className="detail-1">
                    <ArrowBackIcon className='arrow' />
                    <p>Back</p>
                </div>
                <div className="detail-2">
                    <ul>
                        <li>Travel</li>
                        <li>Oct 1,2023</li>
                    </ul>
                    <h2>Lorem ipsum dolore sit amet</h2>
                    <div className="detail-2-1">
                        <p>By</p>
                        <span></span>
                        <h2>John Smith</h2>
                    </div>
                </div>
                <div className="detail-3">
                    <div className="detail-3-1">
                        <div className="detail-3-1-img1">
                            <img src={pexels7} alt="" style={{maxWidth:'100%',height:'auto'}}/>
                        </div>
                        <div className="detail-3-1-texte1">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.</p>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui rati</p>
                            <p>nima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.</p>
                        </div>
                        <div className="detail-3-1-img2">
                            <img src={image31} alt="" style={{maxWidth:'100%',height:'auto'}}/>
                        </div>
                        <div className="detail-3-1-text2">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui rati</p>
                            <p>nima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                            <h2>Lorem ipsum dolor sit amet</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui rati</p>
                            <h2>Lorem ipsum dolor</h2>
                            <ol>
                                <li>nima veniam, quis nostrum exercitationem ullam corporis suscip</li>
                                <li>nima veniam, quis nostrum exercitationem ullam corporis suscipi</li>
                                <li>nima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</li>
                                <li>nima veniam, quis nostrum exercitationem ullam corporis suscipi</li>
                            </ol>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui rati</p>
                        </div>
                    </div>
                    <div className="detail-3-2">
                        <div className="detail-3-2-text1">
                            <span></span>
                            <h2>Related Blogs</h2>
                        </div>
                        <div className="detail-3-2-text2">
                            <div className="detail-3-2-text2-1">
                                <img src={image32} alt="" style={{maxWidth:'100%',height:'auto'}}/>
                                <p>Lorem ipsum dolore sit am Lorem ipsum dolore sit amet</p>
                            </div>

                        </div>
                        <div className="detail-3-2-text3">
                            <div className="detail-3-2-text2-1">
                                <img src={image32} alt="" style={{maxWidth:'100%',height:'auto'}}/>
                                <p>Lorem ipsum dolore sit am Lorem ipsum dolore sit amet</p>
                            </div>

                        </div>
                    </div>
                </div>
                <span className='hr'><hr /></span>
                <div className="footer">
                    <Footer />
                </div>

            </div>
        </>
    )
}

export default Blog_Details