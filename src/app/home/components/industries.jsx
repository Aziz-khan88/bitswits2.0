"use client"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/industries.module.scss"
import { ServiceArrow } from "../../app-constants"
import useEmblaCarousel from 'embla-carousel-react'
import Link from "next/link"
import { useState } from "react"

const Industries = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const [activeSlide, setActiveSlide] = useState(null);
    const [hoverTimeout, setHoverTimeout] = useState(null);

    const handleMouseEnter = (index) => {
        if (hoverTimeout) clearTimeout(hoverTimeout);
        setHoverTimeout(setTimeout(() => {
            setActiveSlide(index);
        }, 100));
    };

    const handleMouseLeave = () => {
        if (hoverTimeout) clearTimeout(hoverTimeout);
        setActiveSlide(null);
    };
    const prevButtonHandler = () => {
        if (emblaApi) emblaApi.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (emblaApi) emblaApi.scrollNext();
    };
    return (
        <section className={`${styles.industriesSection} p-100`}>
            <Container>
                <Row>
                    <Col lg={7} md={7}>
                        <div className="subTitle txtColor">Industries</div>
                        <h2>We transform innovative ideas into powerful digital experiences.</h2>
                    </Col>
                    <Col lg={5} md={5} className="mt-auto">
                        <p>Lorem ipsum dolor sit amet consectetur. Risus interdum sed turpis nunc nulla neque blandit. Sed donec neque blandit lorem non neque blandit. nulla neque blandit. Sed donec neque blandit lorem non neque.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {slides.map((item, index) => (
                                        <div
                                            className={`${styles.embla__slide} ${activeSlide === index ? styles.active : ''}`}
                                            key={index}
                                            onMouseEnter={() => handleMouseEnter(index)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <div className={styles.industriesItem}>
                                                <div className={styles.industriesIcon}>
                                                    {item.icon}
                                                </div>
                                                <div className={styles.industriesTxt}>
                                                    <h5>{item.title}</h5>
                                                    <p>{item.txt}</p>
                                                    <div className={styles.viewLinks}>
                                                        <Link href=""><span className={styles.btnBox}><ServiceArrow /></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
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
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Industries