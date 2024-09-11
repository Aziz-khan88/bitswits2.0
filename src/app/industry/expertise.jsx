"use client"
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/industry/expertise.module.scss"
import { useState } from 'react';
import Link from 'next/link';
import { ReadArrow } from '@/src/app/app-constants';
import ButtonCommon from '@/src/components/common/button';

const data = [
    {
        title: "IOT Services",
        txt: "We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized systems, healthcare organizations can streamline their operations, improve patient outcomes, and achieve"
    },
    {
        title: "Data Science Services",
        txt: "We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized systems, healthcare organizations can streamline their operations, improve patient outcomes, and achieve"
    }, {
        title: "Cloud And dEVOPS Services",
        txt: "We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized systems, healthcare organizations can streamline their operations, improve patient outcomes, and achieve"
    }, {
        title: "Business-Specific RPA Services",
        txt: "We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized systems, healthcare organizations can streamline their operations, improve patient outcomes, and achieve"
    }
    , {
        title: "Cybersecurity Services",
        txt: "We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized systems, healthcare organizations can streamline their operations, improve patient outcomes, and achieve"
    }
    , {
        title: "Data Analytics Services",
        txt: "We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized systems, healthcare organizations can streamline their operations, improve patient outcomes, and achieve"
    }
]
const data1 = [
    {
        title: "IOT Services",
        txt: "We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized systems, healthcare organizations can streamline their operations, improve patient outcomes, and achieve"
    },
    {
        title: "Data Science Services",
        txt: "We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized systems, healthcare organizations can streamline their operations, improve patient outcomes, and achieve"
    }, {
        title: "Cloud And dEVOPS Services",
        txt: "We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized systems, healthcare organizations can streamline their operations, improve patient outcomes, and achieve"
    }, {
        title: "Business-Specific RPA Services",
        txt: "We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized systems, healthcare organizations can streamline their operations, improve patient outcomes, and achieve"
    }
    , {
        title: "Cybersecurity Services",
        txt: "We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized systems, healthcare organizations can streamline their operations, improve patient outcomes, and achieve"
    }
    , {
        title: "Data Analytics Services",
        txt: "We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized systems, healthcare organizations can streamline their operations, improve patient outcomes, and achieve"
    }
]
const Expertise = () => {
    const [activeIndex1, setActiveIndex1] = useState(0);
    const [activeIndex2, setActiveIndex2] = useState(null);

    const handleClick1 = (index1) => {
        setActiveIndex1(index1);
    };

    const handleClick2 = (index2) => {
        setActiveIndex2(index2);
    };
    return (
        <section className={`${styles.expertiseSection} bgBlack p-100 `}>
            <Container>
                <Row>
                    <Col lg={12} md={12} >
                        <h2>Expertise And Competencies</h2>
                    </Col>
                    <Col lg={4} md={12}>
                        <div className={styles.titSec}>
                            <h4>Technology Excellence</h4>
                            <p>We tailor custom medical software solutions to address specific challenges healthcare providers face. With customized MedTech systems, healthcare organizations can streamline their operations, improve patient outcomes, and achieve greater.</p>
                            <ButtonCommon txt="Free Consultation" />
                        </div>
                    </Col>
                    <Col lg={4} md={6}>
                        {data.map((item, index1) => (
                            <div
                                key={index1}
                                className={`${styles.expertisBox} ${activeIndex1 === index1 ? styles.active : ''}`}
                                onClick={() => handleClick1(index1)}
                            >
                                <div className={styles.titleBox}>{item.title}
                                    <Link href="#"><ReadArrow /></Link>
                                </div>
                                <p className={styles.txtBox}>{item.txt}</p>
                            </div>
                        ))}

                    </Col>
                    <Col lg={4} md={6} >
                        {data1.map((item, index2) => (
                            <div
                                key={index2}
                                className={`${styles.expertisBox} ${activeIndex2 === index2 ? styles.active : ''}`}
                                onClick={() => handleClick2(index2)}
                            >
                                <div className={styles.titleBox}>{item.title}
                                    <Link href="#"><ReadArrow /></Link>
                                </div>
                                <div className={styles.txtBox}>{item.txt}</div>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Expertise