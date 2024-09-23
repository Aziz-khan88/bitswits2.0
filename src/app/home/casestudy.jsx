"use client";
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/casestudy.module.scss"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Case01 from "media/home/casestudy/case01.webp"
import Case02 from "media/home/casestudy/case02.webp"
import Logo01 from "media/home/casestudy/logo01.webp"
import Image from "next/image"
import ButtonCommon from "@/src/components/common/button"
import { ServiceArrow } from "@/src/app/app-constants";

const options = { align: 'start', loop: "true" }


const CaseStudy = ({ data }) => {
    const [emblaRef, embla] = useEmblaCarousel(options, [Autoplay()]);

    const prevButtonHandler = () => {
        if (embla) embla.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (embla) embla.scrollNext();
    };
    return (
        <section className={`${styles.homeCaseStudy} pt-100`}>
            <Container>
                <Row>
                    <Col lg={7} md={7}>
                        <div className="subTitle txtColor">{data?.subtitle}</div>
                        <h2>{data?.title}</h2>
                    </Col>
                    <Col lg={5} md={5} className="mt-auto">
                        <p>{data?.content}</p>
                    </Col>
                </Row>
                {/* <Row>
                    <Col lg={7} md={7}>
                        <div className="subTitle txtColor">Case Studies</div>
                        <h2>We transform innovative ideas into powerful digital experiences.</h2>
                    </Col>
                    <Col lg={5} md={5} className="mt-auto">
                        <p>Lorem ipsum dolor sit amet consectetur. Risus interdum sed turpis nunc nulla neque blandit. Sed donec neque blandit lorem non neque blandit. nulla neque blandit. Sed donec neque blandit lorem non neque.</p>
                    </Col>
                </Row> */}
                <Row>
                    <Col>
                        <section className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    <div className={styles.embla__slide} >
                                        <div className={styles.casestudyBox} style={{ backgroundImage: `url(${Case01.src})` }}>
                                            <div className={styles.casestudyContent} >
                                                <div className={styles.casestudyTxt}>
                                                    <div className={styles.logoSec}>
                                                        <Image src={Logo01.src} alt="Case Study Name" width={110} height={110} />
                                                        <span>Vifty</span>
                                                    </div>
                                                    <div className={styles.casestudyPara}>
                                                        <p>Lorem ipsum dolor sit amet consectetur. Risus interdum sed turpis nunc nulla neque blandit. Sed donec lorem non ac. Lorem ipsum dolor sit amet consectetur. Risus interdum sed turpis nunc nulla neque blandit. Sed donec lorem non ac. Lorem ipsum dolor sit amet consectetur.Sed donec lorem non ac. Lorem ipsum dolor sit amet consectetur.</p>
                                                        <ul>
                                                            <li>ServiceBooking</li>
                                                            <li>ServiceBooking</li>
                                                            <li>ServiceBooking</li>
                                                            <li>ServiceBooking</li>
                                                            <li>ServiceBooking</li>
                                                            <li>ServiceBooking</li>
                                                            <li>ServiceBooking</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className={styles.btnSec}>
                                                    <ButtonCommon txt="View Case Study" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.embla__slide} >
                                        <div className={styles.casestudyBox} style={{ backgroundImage: `url(${Case02.src})` }}>
                                            <div className={styles.casestudyContent} >
                                                <div className={styles.casestudyTxt}>
                                                    <div className={styles.logoSec}>
                                                        <Image src={Logo01.src} alt="Case Study Name" width={110} height={110} />
                                                        <span>Vifty</span>
                                                    </div>
                                                    <div className={styles.casestudyPara}>
                                                        <p>Lorem ipsum dolor sit amet consectetur. Risus interdum sed turpis nunc nulla neque blandit. Sed donec lorem non ac. Lorem ipsum dolor sit amet consectetur. Risus interdum sed turpis nunc nulla neque blandit. Sed donec lorem non ac. Lorem ipsum dolor sit amet consectetur.Sed donec lorem non ac. Lorem ipsum dolor sit amet consectetur.</p>
                                                        <ul>
                                                            <li>ServiceBooking</li>
                                                            <li>ServiceBooking</li>
                                                            <li>ServiceBooking</li>
                                                            <li>ServiceBooking</li>
                                                            <li>ServiceBooking</li>
                                                            <li>ServiceBooking</li>
                                                            <li>ServiceBooking</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className={styles.btnSec}>
                                                    <ButtonCommon txt="View Case Study" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.embla_container}>
                                <div className={styles.embla_prev} onClick={prevButtonHandler}>
                                    <ServiceArrow direction="prev" />
                                </div>
                                <div className={styles.embla_next} onClick={nextButtonHandler}>
                                    <ServiceArrow direction="next" />
                                </div>
                            </div>
                        </section>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CaseStudy