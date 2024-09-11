"use client"
import { Col, Container, Row } from 'react-bootstrap'
import useEmblaCarousel from 'embla-carousel-react'
import styles from "@/styles/industry/industryslider.module.scss"
import { ArrowIcon, EmailIcon, PhoneIcon } from '@/src/app/app-constants'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

// Location Images
import IMG01 from "media/industry/imgBox.webp"



const OPTIONS = { align: 'start', loop: "true" }

const IndustryList = [
    {
        img: IMG01.src,
        title: "Customized Medical Solutions",
        txt: "We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized MedTech systems, healthcare organizations can streamline their operations, improve patient."
    },
    {
        img: IMG01.src,
        title: "Customized Medical Solutions",
        txt: "We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized MedTech systems, healthcare organizations can streamline their operations, improve patient."
    },
    {
        img: IMG01.src,
        title: "Customized Medical Solutions",
        txt: "We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized MedTech systems, healthcare organizations can streamline their operations, improve patient."
    },
    {
        img: IMG01.src,
        title: "Customized Medical Solutions",
        txt: "We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized MedTech systems, healthcare organizations can streamline their operations, improve patient."
    },
    {
        img: IMG01.src,
        title: "Customized Medical Solutions",
        txt: "We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized MedTech systems, healthcare organizations can streamline their operations, improve patient."
    },

]

const IndustrySlider = () => {
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
                        <h2>Software/Apps We Develop For Industries</h2>
                        <p>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX  app design. We bring your iOS app ideas to life by using our comprehensive</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={12}>
                        <section className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {IndustryList.map((item, index) => (
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
