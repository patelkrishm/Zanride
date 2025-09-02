import React from 'react'
import pexels5 from './Images/pexels5.png'
import pexels6 from './Images/pexels6.png'
import Footer from './Footer'
const Blog = () => {
    return (
        <>
            <div className="blog">
                <div className="blog1">
                    <div className="blog-1">
                        <div className="blog-1-text">
                            <h2>Blogs</h2>
                            <p>Our Blog: Tips, Trends, and Insights.</p>
                        </div>
                        <div className="blog-1-img">
                            <img src={pexels5} alt=""style={{maxWidth:'100%',height:'auto'}} />
                        </div>
                    </div>
                    <div className="blog2">
                        <div className="blog-2">
                            <div className="blog-2-img">
                                <img src={pexels6} alt="" style={{maxWidth:'100%',height:'auto'}}/>
                            </div>
                            <div className="blog-2-text">
                                <ul>
                                    <li>Travel</li>
                                    <li>Oct 1,2023</li>
                                </ul>
                                <hr />
                                <p>Lorem Ipsum dolore sit amet ipsum dolore Lorem Ipsum dolore.</p>
                            </div>
                        </div>
                        <div className="blog-2">
                            <div className="blog-2-img">
                                <img src={pexels6} alt="" style={{maxWidth:'100%',height:'auto'}}/>
                            </div>
                            <div className="blog-2-text">
                                <ul>
                                    <li>Travel</li>
                                    <li>Oct 1,2023</li>
                                </ul>
                                <hr />
                                <p>Lorem Ipsum dolore sit amet ipsum dolore Lorem Ipsum dolore.</p>
                            </div>
                        </div> <div className="blog-2">
                            <div className="blog-2-img">
                                <img src={pexels6} alt=""style={{maxWidth:'100%',height:'auto'}} />
                            </div>
                            <div className="blog-2-text">
                                <ul>
                                    <li>Travel</li>
                                    <li>Oct 1,2023</li>
                                </ul>
                                <hr />
                                <p>Lorem Ipsum dolore sit amet ipsum dolore Lorem Ipsum dolore.</p>
                            </div>
                        </div>
                    </div>
                    <div className="blog2">
                        <div className="blog-2">
                            <div className="blog-2-img">
                                <img src={pexels6} alt="" style={{maxWidth:'100%',height:'auto'}}/>
                            </div>
                            <div className="blog-2-text">
                                <ul>
                                    <li>Travel</li>
                                    <li>Oct 1,2023</li>
                                </ul>
                                <hr />
                                <p>Lorem Ipsum dolore sit amet ipsum dolore Lorem Ipsum dolore.</p>
                            </div>
                        </div> <div className="blog-2">
                            <div className="blog-2-img">
                                <img src={pexels6} alt="" style={{maxWidth:'100%',height:'auto'}}/>
                            </div>
                            <div className="blog-2-text">
                                <ul>
                                    <li>Travel</li>
                                    <li>Oct 1,2023</li>
                                </ul>
                                <hr />
                                <p>Lorem Ipsum dolore sit amet ipsum dolore Lorem Ipsum dolore.</p>
                            </div>
                        </div> <div className="blog-2">
                            <div className="blog-2-img">
                                <img src={pexels6} alt="" style={{maxWidth:'100%',height:'auto'}}/>
                            </div>
                            <div className="blog-2-text">
                                <ul>
                                    <li>Travel</li>
                                    <li>Oct 1,2023</li>
                                </ul>
                                <hr />
                                <p>Lorem Ipsum dolore sit amet ipsum dolore Lorem Ipsum dolore.</p>
                            </div>
                        </div>
                    </div>
                    <div className="blog2">
                        <div className="blog-2">
                            <div className="blog-2-img">
                                <img src={pexels6} alt=""style={{maxWidth:'100%',height:'auto'}} />
                            </div>
                            <div className="blog-2-text">
                                <ul>
                                    <li>Travel</li>
                                    <li>Oct 1,2023</li>
                                </ul>
                                <hr />
                                <p>Lorem Ipsum dolore sit amet ipsum dolore Lorem Ipsum dolore.</p>
                            </div>
                        </div>
                        <div className="blog-2">
                            <div className="blog-2-img">
                                <img src={pexels6} alt=""style={{maxWidth:'100%',height:'auto'}} />
                            </div>
                            <div className="blog-2-text">
                                <ul>
                                    <li>Travel</li>
                                    <li>Oct 1,2023</li>
                                </ul>
                                <hr />
                                <p>Lorem Ipsum dolore sit amet ipsum dolore Lorem Ipsum dolore.</p>
                            </div>
                        </div>
                        <div className="blog-2">
                            <div className="blog-2-img">
                                <img src={pexels6} alt=""style={{maxWidth:'100%',height:'auto'}} />
                            </div>
                            <div className="blog-2-text">
                                <ul>
                                    <li>Travel</li>
                                    <li>Oct 1,2023</li>
                                </ul>
                                <hr />
                                <p>Lorem Ipsum dolore sit amet ipsum dolore Lorem Ipsum dolore.</p>
                            </div>
                        </div>
                    </div>
                    <div className="blog-btn">
                        <button>View More</button>
                    </div>
                    <span className='hr'><hr /></span>
                    <div className="footer">
                        <Footer />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Blog