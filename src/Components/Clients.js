import React, { useRef } from 'react'
import team1 from '../Images/team1.jpg'
import team2 from '../Images/team2.jpg'
import team3 from '../Images/team3.jpg'
import { motion, useInView } from 'framer-motion'


const Clients = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const ref2 = useRef(null);
    const isInView2 = useInView(ref2, { once: true, amount: 0.1 });

    return (
        <>

            <div className="container">
                <motion.div ref={ref}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0 }} style={{ height: "40px" }}>
                    <h1 className="text-center">
                        Clients Says About Us?
                    </h1>
                </motion.div>

                {/* Slider */}
                <motion.div ref={ref2}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView2 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0 }} style={{ marginTop: "100px" }}>
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                            <li className="slider-list" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                            <li className="slider-list" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                        </ol>

                        <div className="carousel-inner">
                            {/* <!-- First Slide --> */}
                            <div className="carousel-item active">
                                <div className="row home_clients">
                                    <div className="col-md-4">
                                        <div className="card card_clr border_none clients_card_text">
                                            <div className="card-body">
                                                <p>Far far away, behind the word  mountains, far from the countries Vokalia and Consonantia, there live <br /> the blind texts.</p>
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="icon d-flex align-items-center mb-4">
                                                            <div>
                                                                <img src={team1} className="img-fluid round_img_Work" alt=" " />
                                                            </div>
                                                            <div className="client-text">
                                                                <h4 className="mb-0" style={{ color: "black" }}>Roger Scott</h4>
                                                                <span style={{ color: "grey" }}>Marketing Manager</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="card card_clr border_none clients_card_text">
                                            <div className="card-body">
                                                <p>Far far away, behind the word  mountains, far from the countries Vokalia and Consonantia, there live <br /> the blind texts.</p>
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="icon d-flex align-items-center mb-4">
                                                            <div>
                                                                <img src={team2} className="img-fluid round_img_Work" alt=" " />
                                                            </div>
                                                            <div className="client-text">
                                                                <h4 className="mb-0" style={{ color: "black" }}>Roger Scott</h4>
                                                                <span style={{ color: "grey" }}>Marketing Manager</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="card card_clr border_none clients_card_text">
                                            <div className="card-body">
                                                <p>Far far away, behind the word  mountains, far from the countries Vokalia and Consonantia, there live <br /> the blind texts.</p>
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="icon d-flex align-items-center mb-4">
                                                            <div>
                                                                <img src={team3} className="img-fluid round_img_Work" alt=" " />
                                                            </div>
                                                            <div className="client-text">
                                                                <h4 className="mb-0" style={{ color: "black" }}>Roger Scott</h4>
                                                                <span style={{ color: "grey" }}>Marketing Manager</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Second Slide --> */}
                            <div className="carousel-item">
                                <div className="row home_clients">
                                    <div className="col-md-4">
                                        <div className="card card_clr border_none clients_card_text">
                                            <div className="card-body">
                                                <p>Far far away, behind the word  mountains, far from the countries Vokalia and Consonantia, there live <br /> the blind texts.</p>
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="icon d-flex align-items-center mb-4">
                                                            <div>
                                                                <img src={team1} className="img-fluid round_img_Work" alt=" " />
                                                            </div>
                                                            <div className="client-text">
                                                                <h4 className="mb-0" style={{ color: "black" }}>Roger Scott</h4>
                                                                <span style={{ color: "grey" }}>Marketing Manager</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="card card_clr border_none clients_card_text">
                                            <div className="card-body">
                                                <p>Far far away, behind the word  mountains, far from the countries Vokalia and Consonantia, there live <br /> the blind texts.</p>
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="icon d-flex align-items-center mb-4">
                                                            <div>
                                                                <img src={team2} className="img-fluid round_img_Work" alt=" " />
                                                            </div>
                                                            <div className="client-text">
                                                                <h4 className="mb-0" style={{ color: "black" }}>Roger Scott</h4>
                                                                <span style={{ color: "grey" }}>Marketing Manager</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="card card_clr border_none clients_card_text">
                                            <div className="card-body">
                                                <p>Far far away, behind the word  mountains, far from the countries Vokalia and Consonantia, there live <br /> the blind texts.</p>
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="icon d-flex align-items-center mb-4">
                                                            <div>
                                                                <img src={team3} className="img-fluid round_img_Work" alt=" " />
                                                            </div>
                                                            <div className="client-text">
                                                                <h4 className="mb-0" style={{ color: "black" }}>Roger Scott</h4>
                                                                <span style={{ color: "grey" }}>Marketing Manager</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Third Slide */}
                            <div className="carousel-item">
                                <div className="row home_clients" >
                                    <div className="col-md-4">
                                        <div className="card card_clr border_none clients_card_text" >
                                            <div className="card-body" >
                                                <p>Far far away, behind the word  mountains, far from the countries Vokalia and Consonantia, there live <br /> the blind texts.</p>
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="icon d-flex align-items-center mb-4">
                                                            <div>
                                                                <img src={team1} className="img-fluid round_img_Work" alt=" " />
                                                            </div>
                                                            <div className="client-text">
                                                                <h4 className="mb-0" style={{ color: "black" }}>Roger Scott</h4>
                                                                <span style={{ color: "grey" }}>Marketing Manager</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="card card_clr border_none clients_card_text">
                                            <div className="card-body">
                                                <p>Far far away, behind the word  mountains, far from the countries Vokalia and Consonantia, there live <br /> the blind texts.</p>
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="icon d-flex align-items-center mb-4">
                                                            <div>
                                                                <img src={team2} className="img-fluid round_img_Work" alt=" " />
                                                            </div>
                                                            <div className="client-text">
                                                                <h4 className="mb-0" style={{ color: "black" }}>Roger Scott</h4>
                                                                <span style={{ color: "grey" }}>Marketing Manager</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="card card_clr border_none clients_card_text">
                                            <div className="card-body">
                                                <p>Far far away, behind the word  mountains, far from the countries Vokalia and Consonantia, there live <br /> the blind texts.</p>
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="icon d-flex align-items-center mb-4">
                                                            <div>
                                                                <img src={team3} className="img-fluid round_img_Work" alt=" " />
                                                            </div>
                                                            <div className="client-text">
                                                                <h4 className="mb-0" style={{ color: "black" }}>Roger Scott</h4>
                                                                <span style={{ color: "grey" }}>Marketing Manager</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>

                    </div>
                </motion.div><br /><br /><br />
            </div>


        </>
    )
}

export default Clients