"use client"
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/about/keypoints.module.scss";
import BgImg from "@/public/about/abtBG.webp"

const keyPointsData = [
    {
        title: "Mission", content: (<>
            <p><strong>Our mobile app developers and designers goal is to achieve productive outcomes to help our clients succeed in the highly competitive digital world.</strong></p>
            <p>We at, BitsWits, the top mobile application development agency have established ourselves as a reliable partner for leading start-ups around the world. Our team dedicated to enabling growth by providing multiple range of design and development services.</p>
            <p>We at, BitsWits, the top mobile application development agency have established ourselves as a reliable partner for leading start - ups around the world.Our team dedicated to enabling growth by providing multiple range of design and development services.</p>
        </>)
    },
    {
        title: "Vision", content: (<>
            <p><strong>Our mobile app developers and designers goal is to achieve productive outcomes to help our clients succeed in the highly competitive digital world.</strong></p>
            <p>We at, BitsWits, the top mobile application development agency have established ourselves as a reliable partner for leading start-ups around the world. Our team dedicated to enabling growth by providing multiple range of design and development services.</p>
            <p>We at, BitsWits, the top mobile application development agency have established ourselves as a reliable partner for leading start - ups around the world.Our team dedicated to enabling growth by providing multiple range of design and development services.</p>
        </>)
    },
    {
        title: "Values", content: (<>
            <p><strong>Our mobile app developers and designers goal is to achieve productive outcomes to help our clients succeed in the highly competitive digital world.</strong></p>
            <p>We at, BitsWits, the top mobile application development agency have established ourselves as a reliable partner for leading start-ups around the world. Our team dedicated to enabling growth by providing multiple range of design and development services.</p>
            <p>We at, BitsWits, the top mobile application development agency have established ourselves as a reliable partner for leading start - ups around the world.Our team dedicated to enabling growth by providing multiple range of design and development services.</p>
        </>)
    }
];

const KeyPoints = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className={`${styles.aboutSection} pb-100`} style={{ backgroundImage: `url(${BgImg.src})` }}>
            <Container>
                <Row>
                    <Col lg={12} md={12}>
                        <div className={styles.keypointsContainer}>
                            <div className={styles.keypointsTitle}>
                                <ul className={styles.keypointsListing}>
                                    {keyPointsData.map((item, index) => (
                                        <li
                                            key={index}
                                            className={`${styles.listingItem} ${activeIndex === index ? styles.active : ""}`}
                                            onClick={() => setActiveIndex(index)}
                                        >
                                            {item.title}
                                        </li>
                                    ))}
                                    {keyPointsData.map((item, index) => (
                                        <div className={`${styles.bgTxt} ${activeIndex === index ? styles.active : ""}`} key={index}>
                                            {item.title}
                                        </div>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.keypointsContent}>
                                {keyPointsData[activeIndex].content}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    );
};

export default KeyPoints;
