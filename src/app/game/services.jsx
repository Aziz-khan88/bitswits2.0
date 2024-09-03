"use client"
import { useState } from 'react';
import styles from "@/styles/game/services.module.scss";
import Link from "next/link";
import { Col, Container, Row } from 'react-bootstrap'
import { ReadArrow } from "@/src/app/app-constants"
import Image from "next/image";
import GameBg from "media/game/gameBg.webp"

const data = [
    {
        title: "Mobile App Game Development",
        txt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.  sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
        links: "",
        Img: GameBg.src
    },
    {
        title: "3D Game Development",
        txt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.  sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
        links: "",
        Img: GameBg.src
    },
    {
        title: "NFT Game Development",
        txt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.  sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
        links: "",
        Img: GameBg.src
    },
    {
        title: "Mobile App Game Development",
        txt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.  sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
        links: "",
        Img: GameBg.src
    },
    {
        title: "3D Game Development",
        txt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.  sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
        links: "",
        Img: GameBg.src
    },
    {
        title: "NFT Game Development",
        txt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.  sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
        links: "",
        Img: GameBg.src
    },
]

const Services = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleServiceClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <section className={`${styles.servicesSection} p-100`}>
            <Container>
                <Row className={styles.serviceMargin}>
                    <Col lg={6} md={6}>
                        <h2>Our Services</h2>
                        <p>We’re a software development company that ensures its expertise extends to offer a seamlessly productive and growth-oriented partnership</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={7}>
                        <div className={styles.servicesBox}>
                            {data.map((item, index) => (
                                <div
                                    className={`${styles.servicesItem} ${activeIndex === index ? styles.active : ''}`}
                                    key={index}
                                    onClick={() => handleServiceClick(index)}
                                >
                                    <h5>{item.title}</h5>
                                    <p>{item.txt}</p>
                                    <div className={styles.arrowBtn}>
                                        <Link href={item.links}>
                                            <ReadArrow />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                    <Col lg={6} md={5}>
                        <div className={`${styles.gameBG} ${styles.active}`}>
                            <Image src={data[activeIndex].Img} alt={data[activeIndex].title} fill />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Services