"use client"
import { Col, Container, Row } from 'react-bootstrap'
import useEmblaCarousel from 'embla-carousel-react'
import styles from "@/styles/industry/industryslider.module.scss"
import { ArrowIcon, EmailIcon, PhoneIcon } from '@/src/app/app-constants'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'




const OPTIONS = { align: 'start', loop: "true" }



const IndustrySlider = ({ data, list }) => {
    const [emblaRef, embla] = useEmblaCarousel(OPTIONS, [Autoplay()]);
    const prevButtonHandler = () => {
        if (embla) embla.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (embla) embla.scrollNext();
    };
    return (
        <section className={`${styles.industrySlider} p-100 `}>
            <Container>
                <Row>
                    <Col lg={6} md={6} className="my-auto">
                    <h2>{data?.title}</h2>
                    <p>{data?.text}</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={12}>
                        <section className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {list.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.sliderBox}>
                                                <div className={styles.sliderImg}>
                                                    <Image src={item.img} alt={item.title} fill />
                                                </div>
                                                <div className={styles.sliderTxt}>
                                                    <h5>{item.title}</h5>
                                                    <p>{item.txt}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.embla_container}>
                                <div className={styles.embla_prev} onClick={prevButtonHandler}>
                                    <ArrowIcon direction="prev" />
                                </div>
                                <div className={styles.embla_next} onClick={nextButtonHandler}>
                                    <ArrowIcon direction="next" />
                                </div>
                            </div>
                        </section>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default IndustrySlider
