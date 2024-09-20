
"use client"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/testimonial.module.scss"
import { FiveStarIcon, ClutchLogo, GoogleLogo, TrustpilotLogo } from "@/src/app/app-constants"
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'

const Testimonial = () => {
    const options = { loop: false }
    const [emblaRef] = useEmblaCarousel(options, [
        AutoScroll({ playOnInit: false, topOnInteraction: false, delay: 2000, })
    ])
    return
    <section className={`${styles.testimonialSection} pt-100`}>
        <Container>
            <Row>
                <Col lg={7} md={7}>
                    <div className="subTitle txtColor">Testimonials</div>
                    <h2>We transform innovative ideas into powerful digital experiences.</h2>
                </Col>
                <Col lg={5} md={5} className="m-auto">
                    <p>Lorem ipsum dolor sit amet consectetur. Risus interdum sed turpis nunc nulla neque blandit. Sed donec neque blandit lorem non neque blandit. nulla neque blandit. Sed donec neque blandit lorem non neque.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className={styles.embla}>
                        <div className={styles.embla__viewport} ref={emblaRef}>
                            <div className={styles.embla__container}>
                                <div className={styles.embla__slide} >
                                    <div className={styles.testimonialItems}>
                                        <div className={styles.ratingBox}>
                                            <div className={styles.rating}>4.5</div>
                                            <FiveStarIcon />
                                            <div className={styles.reviews}>23 Reviews</div>
                                        </div>
                                        <div className={styles.imagesBox}>
                                            <div className={styles.imgShell}>
                                                <ClutchLogo />
                                            </div>
                                            <div className={styles.imgShell}>
                                                <GoogleLogo />
                                            </div>
                                            <div className={styles.imgShell}>
                                                <TrustpilotLogo />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.embla__slide} >
                                    <div className={styles.testimonialItems}>
                                        <div className={styles.testimonialImage}>
                                            <TrustpilotLogo />
                                        </div>
                                        <div className={styles.testimonialTxt}>
                                            <p><span>“</span>Bitswits excelled in developing our custom CRM system, perfectly aligning it with our SEO firms workflow. Their team delivered an efficient, user-friendly solution with impressive attention to detail. We highly recommend Bitswits for their professionalism and app development expertise.<span>”</span></p>
                                        </div>
                                        <div className={styles.testimonialInfo}>
                                            <div className={styles.nameInfo}>Daniel Gonzalez</div>
                                            <div className={styles.designationInfo}>CTO / Pronftdesign.com</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.embla__slide} >
                                    <div className={styles.testimonialItems}>
                                        <div className={styles.testimonialImage}>
                                            <ClutchLogo />
                                        </div>
                                        <div className={styles.testimonialTxt}>
                                            <p><span>“</span>Bitswits excelled in developing our custom CRM system, perfectly aligning it with our SEO firms workflow. Their team delivered an efficient, user-friendly solution with impressive attention to detail. We highly recommend Bitswits for their professionalism and app development expertise.<span>”</span></p>
                                        </div>
                                        <div className={styles.testimonialInfo}>
                                            <div className={styles.nameInfo}>Daniel Gonzalez</div>
                                            <div className={styles.designationInfo}>CTO / Pronftdesign.com</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.embla__slide} >
                                    <div className={styles.testimonialItems}>
                                        <div className={styles.testimonialImage}>
                                            <GoogleLogo />
                                        </div>
                                        <div className={styles.testimonialTxt}>
                                            <p><span>“</span>Bitswits excelled in developing our custom CRM system, perfectly aligning it with our SEO firms workflow. Their team delivered an efficient, user-friendly solution with impressive attention to detail. We highly recommend Bitswits for their professionalism and app development expertise.<span>”</span></p>
                                        </div>
                                        <div className={styles.testimonialInfo}>
                                            <div className={styles.nameInfo}>Daniel Gonzalez</div>
                                            <div className={styles.designationInfo}>CTO / Pronftdesign.com</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.embla__slide} >
                                    <div className={styles.testimonialItems}>
                                        <div className={styles.testimonialImage}>
                                            <ClutchLogo />
                                        </div>
                                        <div className={styles.testimonialTxt}>
                                            <p><span>“</span>Bitswits excelled in developing our custom CRM system, perfectly aligning it with our SEO firms workflow. Their team delivered an efficient, user-friendly solution with impressive attention to detail. We highly recommend Bitswits for their professionalism and app development expertise.<span>”</span></p>
                                        </div>
                                        <div className={styles.testimonialInfo}>
                                            <div className={styles.nameInfo}>Daniel Gonzalez</div>
                                            <div className={styles.designationInfo}>CTO / Pronftdesign.com</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.embla__slide} >
                                    <div className={styles.testimonialItems}>
                                        <div className={styles.testimonialImage}>
                                            <GoogleLogo />
                                        </div>
                                        <div className={styles.testimonialTxt}>
                                            <p><span>“</span>Bitswits excelled in developing our custom CRM system, perfectly aligning it with our SEO firms workflow. Their team delivered an efficient, user-friendly solution with impressive attention to detail. We highly recommend Bitswits for their professionalism and app development expertise.<span>”</span></p>
                                        </div>
                                        <div className={styles.testimonialInfo}>
                                            <div className={styles.nameInfo}>Daniel Gonzalez</div>
                                            <div className={styles.designationInfo}>CTO / Pronftdesign.com</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container >
    </section >

}

export default Testimonial