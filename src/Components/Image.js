import React, { useRef } from 'react'
import '../Style/style.css'
import { motion, useInView } from 'framer-motion'

const Image = () => {

    const ref1 = useRef(null);
    const isInView1 = useInView(ref1, { once: true, amount: 0.1 });

    return (
        <>
            <div className="container" id="image-h">
                <div>
                    <div className="row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <div className="card cards-background" >
                                <div className="card-body" style={{ marginTop: "90px" }}>
                                    <motion.div ref={ref1}
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={isInView1 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                        transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
                                        style={{ textAlign: "left" }}>
                                        <h3
                                        >Fill in the brief and get the <br /> project estimate</h3>
                                        <br />
                                        <p>Far far away, behind the word mountains, far from <br /> the countries Vokalia and Consonantia, there live the blind <br /> texts.</p>
                                        <p className="mb-0"><a href="#" className="btn btn-danger py-md-3 py-2 px-2 px-md-4">Get Started</a></p>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Image