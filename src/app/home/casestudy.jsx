"use client";
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/casestudy.module.scss"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Case01 from "media/home/casestudy/Vifty.webp"
import Case02 from "media/home/casestudy/SoulScribe.webp"
import Case03 from "media/home/casestudy/ReadyApp.webp"
import Logo01 from "media/home/casestudy/ViftyLogo.webp"
import Logo02 from "media/home/casestudy/SoulScribeLogo.webp"
import Logo03 from "media/home/casestudy/ReadyAppLogo.webp"
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
        <section className={`${styles.homeCaseStudy} commonSlider pt-100`}>
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
                                                        <Image src={Logo01.src} alt="Case Study Name" width={336} height={336} />
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
                                                        <Image src={Logo02.src} alt="Case Study Name" width={336} height={336} />
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
                                        <div className={styles.casestudyBox} style={{ backgroundImage: `url(${Case03.src})` }}>
                                            <div className={styles.casestudyContent} >
                                                <div className={styles.casestudyTxt}>
                                                    <div className={styles.logoSec}>
                                                        <Image src={Logo03.src} alt="Case Study Name" width={336} height={336} />
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
                            <div className="embla_container">
                                <div className="embla_prev" onClick={prevButtonHandler}>
                                    <ServiceArrow direction="prev" />
                                </div>
                                <div className="embla_next" onClick={nextButtonHandler}>
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