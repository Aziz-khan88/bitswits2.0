"use client"
import { useState } from 'react';
import styles from '@/styles/services/faqs.module.scss';
import { Col, Container, Row } from "react-bootstrap";
import { FaqsArrows } from '../app-constants';

const faqs = [
    {
        title: "How do you ensure app quality during development?",
        txt: "We prioritize app quality through rigorous testing at every development stage. Our mobile app development agency utilizes automated and manual testing methods, ensuring your app performs seamlessly across all platforms. Quality assurance is a core aspect of our custom app services."
    },
    {
        title: "What makes your app development services stand out?",
        txt: "Our mobile app development services combine industry expertise with innovative technologies to create tailor-made solutions. As a leading application development company, we focus on delivering user-friendly, high-performing apps that meet your business objectives and enhance customer experiences."
    },
    {
        title: "How long does it take to develop a custom app?",
        txt: "The timeline for developing a custom app varies based on complexity and features. Generally, our mobile app developers can deliver a fully functional app within 4 to 6 months, ensuring that all project milestones are met efficiently"
    },
    {
        title: "What industries do you specialize in for app development?",
        txt: "We specialize in various industries, including healthcare, finance, e-commerce, and education. Our mobile app development agency has extensive experience crafting industry-specific solutions that meet regulatory requirements and business needs, ensuring top-quality app development services."
    }
    ,
    {
        title: "How do you protect my app idea during development?",
        txt: "We take intellectual property seriously. Our application development company implements strict confidentiality agreements and secure data handling practices, ensuring that your app idea remains protected throughout the development process. We also ensure you retain full ownership of your app."
    },
    {
        title: "Can I request changes during the development process?",
        txt: "Absolutely! Our mobile app development services include flexible, client-centric practices. We encourage client feedback at every stage, allowing you to request changes or updates as needed. Our goal is to ensure the final product aligns perfectly with your vision."
    }
];

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <section className={`${styles.faqsSection} p-100`}>
            <Container>
                <Row>
                    <Col lg={8} md={12} className='m-auto'>
                        <h2 className='text-center'>Frequently Asked Questions</h2>
                        {faqs.map((item, index) => (
                            <div
                                className={`${styles.faqsBox} ${openIndex === index ? styles.active : ''}`}
                                key={index}
                            >
                                <div
                                    className={styles.faqsItem}
                                    onClick={() => handleToggle(index)}
                                >
                                    <div className={styles.faqstitle}>
                                        <span> 0{index + 1}.</span>{item.title} <span className={styles.arrowStyle}><FaqsArrows /></span>
                                    </div>
                                    {openIndex === index && (
                                        <div className={styles.faqsContent}>
                                            {item.txt}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Faqs;
