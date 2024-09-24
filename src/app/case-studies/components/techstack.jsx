"use client"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/portfolio/techstack.module.scss"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import Icon01 from "media/casestudies/techIcon/01.webp"
import Icon02 from "media/casestudies/techIcon/02.webp"
import Icon03 from "media/casestudies/techIcon/03.webp"
import Icon04 from "media/casestudies/techIcon/04.webp"
import Icon05 from "media/casestudies/techIcon/05.webp"
import Icon06 from "media/casestudies/techIcon/06.webp"
import Image from "next/image"


const data = [
    {
        title: "Android",
        icon: Icon01.src
    },
    {
        title: "Python",
        icon: Icon02.src
    },
    {
        title: "Android",
        icon: Icon03.src
    },
    {
        title: "Node JS",
        icon: Icon04.src
    },
    {
        title: "Abode Photoshop",
        icon: Icon05.src
    },
    {
        title: "Figma",
        icon: Icon06.src
    },


]

const TechStack = () => {
    const [emblaRef] = useEmblaCarousel({ loop: 'true', align: 'start' }, [Autoplay()])
    return (
        <section className={`${styles.techstackSection} p-100`}>
            <Container>
                <Row>
                    <Col lg={5} md={6} className={styles.bgBox}>
                        <div className="subTitle txtColor">Features</div>
                        <h2>Social Networking App</h2>
                        <p>Soul Scribe is a social networking app that works as a digital diary. Its unique feature is to invite friends and family to be part.</p>
                    </Col>
                    <Col lg={7} md={6}>
                        <div className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {data.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            < div className={styles.techstackBox} >
                                                <div className={styles.techstackIcon}>
                                                    <Image src={item.icon} alt={item.title} width={63} height={63} />
                                                </div>
                                                <h6>{item.title}</h6>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container >
        </section >
    )
}

export default TechStack