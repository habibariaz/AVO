import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'
import '../Style/style.css'
import blog1 from '../Images/blog1.jpg'
import blog2 from '../Images/blog2.jpg'
import blog3 from '../Images/blog3.jpg'
import blog4 from '../Images/blog4.jpg'
import blog5 from '../Images/blog5.jpg'
import blog6 from '../Images/blog6.jpg'
import blog7 from '../Images/blog7.jpg'
import blog8 from '../Images/blog8.jpg'

const OurBlogs = () => {

    const ref1 = useRef(null);
    const isInView1 = useInView(ref1, { once: true, amount: 0.1 });

    const ref2 = useRef(null);
    const isInView2 = useInView(ref2, { once: true, amount: 0.1 });

    return (
        <>
            <section className='container grey_background_card border_none'>
                <div className='border_none grey_background_card '>
                    {/* First Row Of Cards */}
                    <motion.div ref={ref1}
                        initial={{ y: 100, opacity: 0 }}
                        animate={isInView1 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0 }} className="row grey_background_card">

                        {/* Card 1 */}
                        <div className="col-sm-3">
                            <div className="card border_none grey_background_card">
                                <div className="card-body">
                                    <h3 className="card-title">Amplify your blockchain team</h3><br />
                                    <img src={blog1} className="img-fluid blog_imgs blog_imgs" alt="Responsive image" />
                                    <h5 className='blog_text'><b>June 01, 2020 Admin <span><i className="fa fa-comment" aria-hidden="true"></i></span>  3</b></h5>
                                    <p className="card-text blog_para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="col-sm-3">
                            <div className="card border_none grey_background_card">
                                <div className="card-body">
                                    <h3 className="card-title">Amplify your blockchain team</h3><br />
                                    <img src={blog2} className="img-fluid blog_imgs" alt="Responsive image" />
                                    <h5 className='blog_text'><b>June 01, 2020 Admin <span><i className="fa fa-comment" aria-hidden="true"></i></span>  3</b></h5>
                                    <p className="card-text blog_para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="col-sm-3">
                            <div className="card border_none grey_background_card">
                                <div className="card-body">
                                    <h3 className="card-title">Amplify your blockchain team</h3><br />
                                    <img src={blog3} className="img-fluid blog_imgs" alt="Responsive image" />
                                    <h5 className='blog_text'><b>June 01, 2020 Admin <span><i className="fa fa-comment" aria-hidden="true"></i></span>  3</b></h5>
                                    <p className="card-text blog_para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="col-sm-3">
                            <div className="card border_none grey_background_card">
                                <div className="card-body">
                                    <h3 className="card-title">Amplify your blockchain team</h3><br />
                                    <img src={blog4} className="img-fluid blog_imgs" alt="Responsive image" />
                                    <h5 className='blog_text'><b>June 01, 2020 Admin <span><i className="fa fa-comment" aria-hidden="true"></i></span>  3</b></h5>
                                    <p className="card-text blog_para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div><br /><br />
                    {/* First Row Of Cards End */}

                    {/* Second Row Of Cards */}
                    <motion.div ref={ref2}
                        initial={{ y: 100, opacity: 0 }}
                        animate={isInView2 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0 }} className="row grey_background_card" >
                        {/* Card 1 */}
                        <div className="col-sm-3">
                            <div className="card border_none grey_background_card">
                                <div className="card-body">
                                    <h3 className="card-title">Amplify your blockchain team</h3><br />
                                    <img src={blog5} className="img-fluid blog_imgs blog_imgs" alt="Responsive image" />
                                    <h5 className='blog_text'><b>June 01, 2020 Admin <span><i className="fa fa-comment" aria-hidden="true"></i></span>  3</b></h5>
                                    <p className="card-text blog_para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="col-sm-3">
                            <div className="card border_none grey_background_card">
                                <div className="card-body">
                                    <h3 className="card-title">Amplify your blockchain team</h3><br />
                                    <img src={blog6} className="img-fluid blog_imgs" alt="Responsive image" />
                                    <h5 className='blog_text'><b>June 01, 2020 Admin <span><i className="fa fa-comment" aria-hidden="true"></i></span>  3</b></h5>
                                    <p className="card-text blog_para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="col-sm-3">
                            <div className="card border_none grey_background_card">
                                <div className="card-body">
                                    <h3 className="card-title">Amplify your blockchain team</h3><br />
                                    <img src={blog7} className="img-fluid blog_imgs" alt="Responsive image" />
                                    <h5 className='blog_text'><b>June 01, 2020 Admin <span><i className="fa fa-comment" aria-hidden="true"></i></span>  3</b></h5>
                                    <p className="card-text blog_para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="col-sm-3">
                            <div className="card border_none grey_background_card">
                                <div className="card-body">
                                    <h3 className="card-title">Amplify your blockchain team</h3><br />
                                    <img src={blog8} className="img-fluid blog_imgs" alt="Responsive image" />
                                    <h5 className='blog_text'><b>June 01, 2020 Admin <span><i className="fa fa-comment" aria-hidden="true"></i></span>  3</b></h5>
                                    <p className="card-text blog_para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    {/* Second Row of Cards End */}
                </div>

                {/* Page Numbers */}
                <div className='container border_none grey_background_card'>
                    <ul className='align-items-center justify-content-center d-flex list-type'>
                        <li className='blog-list'><a className='text-decoration-none a-blog' href="#">&lt;</a></li>
                        <li className="active blog-list" style={{ backgroundColor: "red", color: "white" }}><span>1</span></li>
                        <li className='blog-list'><a href="#">2</a></li>
                        <li className='blog-list'><a href="#" className='text-decoration-none a-blog'>3</a></li>
                        <li className='blog-list'><a href="#" className='text-decoration-none a-blog'>4</a></li>
                        <li className='blog-list'><a href="#" className='text-decoration-none a-blog'>5</a></li>
                        <li className='blog-list'><a href="#" className='text-decoration-none a-blog'>&gt;</a></li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default OurBlogs