"use client";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/about/team.module.scss";
import { ServiceArrow } from "@/src/app/app-constants";
import Image from "next/image";
import IMG from "media/about/team/team1.png"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const data = [
    {
        namee: "Justin Botosh",
        designation: "Product Designer",
        img: IMG.src,
    },
    {
        namee: "Justin Botosh",
        designation: "Product Designer",
        img: IMG.src,
    },
    {
        namee: "Justin Botosh",
        designation: "Product Designer",
        img: IMG.src,
    },
    {
        namee: "Justin Botosh",
        designation: "Product Designer",
        img: IMG.src,
    },
    {
        namee: "Justin Botosh",
        designation: "Product Designer",
        img: IMG.src,
    }
]

const options = { align: 'start', loop: "true" }

const Team = () => {
    const [emblaRef, embla] = useEmblaCarousel(options, [Autoplay()]);

    const prevButtonHandler = () => {
        if (embla) embla.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (embla) embla.scrollNext();
    };
    return (
        <section className={`${styles.teamSection} commonSlider pt-100`}>
            <Container>
                <Row>
                    <Col lg={7} md={7}>
                        <div className="subTitle txtColor">Our Experts</div>
                        <h2>Some work we are proud of</h2>
                    </Col>
                    <Col lg={5} md={5} className="mt-auto">
                        <p>Lorem ipsum dolor sit amet consectetur. Risus interdum sed turpis nunc nulla neque blandit. Sed donec neque blandit lorem non neque blandit.</p>
                    </Col>

                </Row>
                <Row>
                    <Col lg={12} md={12}>
                        <section className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>

                                    {data.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.teamBox}>
                                                <div className={styles.teamImage}>
                                                    <Image src={item.img} alt={item.namee} fill />
                                                </div>
                                                <div className={styles.teamContent}>
                                                    <div className={styles.teamname}>{item.namee}</div>
                                                    <div className={styles.teamdesg}>{item.designation}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
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

export default Team