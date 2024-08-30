import styles from "@/styles/services/testimonial.module.scss"
import { Col, Container, Row } from "react-bootstrap";

import IMG01 from "media/services/reviwes/trustpilot.webp"
import IMG02 from "media/services/reviwes/clutch.webp"
import IMG03 from "media/services/reviwes/google.webp"
import KayleeSlone from "media/services/reviwes/KayleeSlone.webp"
import RyanJaden from "media/services/reviwes/RyanJaden.webp"
import Joseph from "media/services/reviwes/Joseph.webp"
import MauryoJones from "media/services/reviwes/MauryoJones.webp"
import KateBullock from "media/services/reviwes/KateBullock.webp"
import Image from "next/image";
import TestimonialSlider from "@/src/components/services/testimonialslider";

const OPTIONS = { loop: true, duration: 30 }
const SLIDES = [
    {
        txt: "The team's deep understanding of our business's nature was impressive. Their technical knowledge was evident in ensuring the app functioned smoothly.",
        name: "Joseph D'Amora",
        position: "Director of Inside Sales",
        img: Joseph,
    },
    {
        txt: "What truly set Bitswits apart was their unwavering commitment to satisfying our needs.",
        name: "Ryan Jaden",
        position: "Technical Team Lead",
        img: RyanJaden,
    },
    {
        txt: "I am thoroughly satisfied with the project management provided by them.",
        name: "Kaylee Slone",
        position: "Digital Marketing Manager",
        img: KayleeSlone,
    }
    ,
    {
        txt: "Their tireless efforts in making the app not only responsive but also visually stunning were truly remarkable.",
        name: "Mauryo Jones",
        position: "VP Safety, Health & Security",
        img: MauryoJones,
    },
    {
        txt: "They not only listened attentively to our needs but also provided valuable insights and suggestions.",
        name: "James Moss",
        position: "EVP Business Development",
        img: KateBullock,
    }
]

const Testimonial = () => {
    return (
        <section className={`${styles.reviewsSection} p-100`} id="Testimonials">
            <Container>
                <Row>
                    <Col lg={5} md={6}>
                        <h2>Client Testimonial</h2>
                    </Col>
                    <Col lg={7} md={6}>
                        <div className={styles.reviewsBox}>
                            <Image src={IMG01} alt="Bitswits Reviews" width={145} height={65} />
                            <Image src={IMG02} alt="Bitswits Reviews" width={145} height={65} />
                            <Image src={IMG03} alt="Bitswits Reviews" width={145} height={65} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={9} md={10} className="m-auto">
                        <TestimonialSlider slides={SLIDES} options={OPTIONS} />
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Testimonial