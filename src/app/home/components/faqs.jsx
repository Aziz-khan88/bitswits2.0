"use client"
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/home/faqs.module.scss";
import { PlusFaqIcon, MinusFaqIcon } from "@/src/app/app-constants";

const faqs = [
    {
        title: "Lorem ipsum dolor sit amet consectetur. Condimentum elementum vulputate?",
        txt: (<p>Lorem ipsum dolor sit amet consectetur. Sit nulla egestas turpis at. Ultrices pellentesque quam tempor imperdiet elit. At commodo ut volutpat pulvinar at morbi. At tortor tortor etiam quisque aliquam nisl nascetur mi justo. Mauris enim scelerisque eu at nisl. Penatibus egestas lectus pellentesque posuere cras fringilla.</p>)
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur. Condimentum elementum vulputate?",
        txt: (<p>Lorem ipsum dolor sit amet consectetur. Sit nulla egestas turpis at. Ultrices pellentesque quam tempor imperdiet elit. At commodo ut volutpat pulvinar at morbi. At tortor tortor etiam quisque aliquam nisl nascetur mi justo. Mauris enim scelerisque eu at nisl. Penatibus egestas lectus pellentesque posuere cras fringilla.</p>)
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur. Condimentum elementum vulputate?",
        txt: (<p>Lorem ipsum dolor sit amet consectetur. Sit nulla egestas turpis at. Ultrices pellentesque quam tempor imperdiet elit. At commodo ut volutpat pulvinar at morbi. At tortor tortor etiam quisque aliquam nisl nascetur mi justo. Mauris enim scelerisque eu at nisl. Penatibus egestas lectus pellentesque posuere cras fringilla.</p>)
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur?",
        txt: (<p>Lorem ipsum dolor sit amet consectetur. Sit nulla egestas turpis at. Ultrices pellentesque quam tempor imperdiet elit. At commodo ut volutpat pulvinar at morbi. At tortor tortor etiam quisque aliquam nisl nascetur mi justo. Mauris enim scelerisque eu at nisl. Penatibus egestas lectus pellentesque posuere cras fringilla.</p>)
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur. Condimentum elementum vulputate?",
        txt: (<p>Lorem ipsum dolor sit amet consectetur. Sit nulla egestas turpis at. Ultrices pellentesque quam tempor imperdiet elit. At commodo ut volutpat pulvinar at morbi. At tortor tortor etiam quisque aliquam nisl nascetur mi justo. Mauris enim scelerisque eu at nisl. Penatibus egestas lectus pellentesque posuere cras fringilla.</p>)
    }
];

const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={`${styles.faqsSection} p-100`}>
            <Container>
                <Row>
                    <Col xl={5} lg={5} md={5}>
                        <div className="subTitle txtColor">FAQ’s</div>
                        <h2>We transform innovative ideas into powerful digital experiences.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Risus interdum sed turpis nunc nulla neque sed turpis blandit. Lorem ipsum dolor sit amet consectetur. Risus interdum sed turpis sed turpis nunc nulla.</p>
                    </Col>
                    <Col xl={6} lg={7} md={7} className="offset-xl-1">
                        {faqs.map((items, index) => (
                            <div className={`${styles.faqsBox} ${activeIndex === index ? styles.active : ""}`} key={index}>
                                <div
                                    className={`${styles.faqsTitle} ${activeIndex === index ? styles.active : ""}`}
                                    onClick={() => toggleFaq(index)}
                                >
                                    {items.title} {activeIndex === index ? <MinusFaqIcon /> : <PlusFaqIcon />}
                                </div>
                                <div className={`${styles.faqscontent} ${activeIndex === index ? styles.active : ""}`}>
                                    {items.txt}
                                </div>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section >
    );
};

export default Faqs;
