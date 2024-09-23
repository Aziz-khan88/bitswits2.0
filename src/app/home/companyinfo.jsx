"use client"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/companyinfo.module.scss"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import IMG01 from "media/home/awards/award01.webp"
import IMG02 from "media/home/awards/award02.webp"
import IMG03 from "media/home/awards/award03.webp"
import IMG04 from "media/home/awards/award04.webp"
import IMG05 from "media/home/awards/award05.webp"
import IMG06 from "media/home/awards/award06.webp"
import IMG07 from "media/home/awards/award07.webp"
import Image from "next/image"

const options = { align: 'start', loop: "true" }

export const Awards = [
    {
        AwardsIMG: IMG01.src
    },
    {
        AwardsIMG: IMG02.src
    },
    {
        AwardsIMG: IMG03.src
    },
    {
        AwardsIMG: IMG04.src
    },
    {
        AwardsIMG: IMG05.src
    },
    {
        AwardsIMG: IMG06.src
    },
    {
        AwardsIMG: IMG07.src
    },
]
const CompanyInfo = ({ data }) => {
    const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);
    return (
        <section className={`${styles.companyInfoSection} p-100`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={8} md={12} className="my-auto">
                        <div className="subTitle txtColor">Who We Are</div>
                        <h2>{data?.title}</h2>
                        <p>{data?.content}</p>
                        <div className={styles.companyStats}>
                            <div className={styles.statsItem}>
                                <div className="txtColor">10+</div>
                                <span>Years of Experience</span>
                            </div>
                            <div className={styles.statsItem}>
                                <div className="txtColor">1,200+</div>
                                <span>Successful Projects</span>
                            </div>
                            <div className={styles.statsItem}>
                                <div className="txtColor">60+</div>
                                <span>Experts</span>
                            </div>
                            <div className={styles.statsItem}>
                                <div className="txtColor">100+</div>
                                <span>Global Clients</span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <section className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {Awards.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.awardsImg}>
                                                <Image src={item.AwardsIMG} alt="Achieved Logo" width={250} height={250} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </Col>
                </Row>
            </Container>
            <video autoPlay muted loop preload="auto" aria-label="Background video" className={styles.companyVideo}>
                <source src='/videos/companyVideo.mp4' type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>
    )
}

export default CompanyInfo