"use client"
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/about/story.module.scss";

const data = [
    {
        title: "Years of Experience",
        points: "10+",
    },
    {
        title: "Successful Projects",
        points: "1,200+",
    },
    {
        title: "Experts",
        points: "60+",
    },
    {
        title: "Global Clients",
        points: "100+",
    }
];

const Story = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={`${styles.storySection} pb-100`}>
            <Container>
                <Row>
                    <Col lg={5} md={6}>
                        <div className="subTitle txtColor">Our Story</div>
                        <h2>Driving Growth in the Digital Ecosystem with Elite Product Teams</h2>
                        <p>Soul Scribe is a social networking app that works as a digital diary. Its unique feature is to invite friends and family to be part of your online journal. The app operates on a freemium subscription model, offering a complimentary family room option that allows users to invite peers to contribute to their memories.</p>
                    </Col>
                    <Col lg={6} md={6} className="my-auto offset-lg-1">
                        <div className={styles.storyPoints}>
                            {data.map((item, index) => (
                                <div
                                    className={`${styles.storyItem} ${index === activeIndex ? styles.active : ""
                                        }`}
                                    key={index}
                                >
                                    {item.points}
                                    <div className={styles.storyTxt}>{item.title}</div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    );
};

export default Story;
