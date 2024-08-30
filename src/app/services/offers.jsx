"use client"
import { useState } from "react";
import styles from "@/styles/services/offers.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import ButtonCommon from "@/src/components/common/button";

const tabs = [

    {
        title: "MVP and Prototyping",
        content: {
            heading: "MVP and Prototyping",
            description:
                "We develop Minimum Viable Products (MVPs) and prototypes to validate your app concept and gather early user feedback. This approach helps in refining essential features and aligning the app with user expectations. By testing core functionalities, we identify potential improvements early, ensuring your app’s development is focused, efficient, and driven by real user insights.",

        },
    },

    {
        title: "Mobile App Consulting",
        content: {
            heading: "Mobile App Consulting",
            description:
                "Our mobile app consulting services offer expert guidance from concept through launch. We provide strategic advice on market trends, technical requirements, and user experience. Our consultants work closely with you to refine your app’s vision, address technical challenges, and implement best practices, ensuring your app is innovative, user-friendly, and primed for success in the competitive market.",

        },
    },

    {
        title: "Mobile UI/UX Design",
        content: {
            heading: "Mobile UI/UX Design",
            description:
                "We specialize in designing mobile interfaces that are both visually appealing and user-friendly. Our UI/UX design process focuses on creating intuitive navigation and engaging layouts that enhance the user experience. By balancing aesthetics with functionality, we ensure that your app not only looks great but also provides a seamless and satisfying interaction for users.",

        },
    }, {
        title: "Mobile App Integration",
        content: {
            heading: "Mobile App Integration",
            description:
                "We provide expert mobile app integration services, connecting your app with third-party services, APIs, and existing systems. This includes integrating payment gateways, social media, and other essential functionalities. Our goal is to ensure that all integrated components work harmoniously, enhancing your app’s capabilities and delivering a cohesive user experience.",

        },
    },
    {
        title: "Testing and QA",
        content: {
            heading: "Testing and QA",
            description:
                "Our testing and quality assurance services ensure that your app functions flawlessly across all scenarios. We perform rigorous testing to identify and resolve issues related to performance, usability, and security. By focusing on comprehensive QA, we ensure that your app is reliable, performs well, and meets the highest standards before launch.",

        },
    },


];

const Offers = () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <section className={`${styles.offerSection} pt-100 bgBlack`}>
            <Container>
                <Row>
                    <Col xxl={8} xl={7} lg={10} md={12}>
                        <h2>Discover the Mobile App Development Services We Offer</h2>
                        <p>We excel in crafting custom mobile apps that shine across a variety of devices, ensuring seamless integration and stellar user experiences. Our expertise spans a wide range of mobile app platforms, delivering tailored solutions that cater to your unique business needs.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className={styles.tabVertical}>
                            <div className={styles.tabTitle}>
                                <ul>
                                    {tabs.map((tab, index) => (
                                        <li
                                            key={index}
                                            className={index === activeTab ? styles.active : ""}
                                            onClick={() => setActiveTab(index)}
                                        >
                                            <span className={styles.count}>0{index + 1}</span><span className={styles.title}>{tab.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.tabContent}>
                                <h4>{tabs[activeTab].content.heading}</h4>
                                <p>{tabs[activeTab].content.description}</p>
                                <ButtonCommon txt="Free Consultation" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Offers