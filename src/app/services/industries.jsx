"use client"
import Link from "next/link";
import { ArrowIcon, Icon01, Icon02, Icon03, Icon04, Icon05, Icon06, Icon07, Icon08 } from "@/src/app/app-constants";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/services/industries.module.scss";
import Ecommerce from "media/services/industry/Ecommerce.webp";
import Fintech from "media/services/industry/Fintech.webp";
import Healthcare from "media/services/industry/Healthcare.webp";
import Education from "media/services/industry/Education.webp";
import SocialMarketing from "media/services/industry/SocialMarketing.webp";
import RealEstate from "media/services/industry/RealEstate.webp";
import RideHailing from "media/services/industry/RideHailing.webp";
import Travel from "media/services/industry/Travel.webp";

const data = [
    {
        icon: <Icon01 />,
        title: "Ecommerce",
        txt: "We at BitsWits create powerful e-commerce apps, transforming your business with seamless shopping experiences and robust sales platforms.",
        url: "#",
        img: Ecommerce.src,
    },
    {
        icon: <Icon02 />,
        title: "Fintech",
        txt: "We develop innovative mobile apps tailored to revolutionize financial transactions and personal finance management.",
        url: "#",
        img: Fintech.src,
    },
    {
        icon: <Icon03 />,
        title: "Healthcare",
        txt: "We create custom mobile apps designed to enhance healthcare delivery, patient care, and medical management efficiency",
        url: "#",
        img: Healthcare.src,
    },
    {
        icon: <Icon04 />,
        title: "Education",
        txt: "At our company, we specialize in creating customized mobile apps that enhance learning and educational engagement.",
        url: "#",
        img: Education.src,
    },
    {
        icon: <Icon05 />,
        title: "Social Networking",
        txt: "We craft custom social media apps, tailored to enhance user engagement and drive community growth effectively.",
        url: "#",
        img: SocialMarketing.src,
    },
    {
        icon: <Icon06 />,
        title: "Real Estate",
        txt: "We design cutting-edge mobile apps that streamline property searches, transactions, and real estate management processes.",
        url: "#",
        img: RealEstate.src,
    },
    {
        icon: <Icon07 />,
        title: "Ride-hailing",
        txt: "We create intuitive, secure ride-hailing apps tailored to your unique business needs, enhancing user experiences.",
        url: "#",
        img: RideHailing.src,
    },
    {
        icon: <Icon08 />,
        title: "Travel",
        txt: "We design user-friendly travel apps tailored to enhance booking experiences, navigation, and personalized travel itineraries.",
        url: "#",
        img: Travel.src,
    },
];

const Industries = () => {
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    return (
        <section className={`${styles.industrySection} pb-100`}>
            <Container>
                <Row>
                    <Col lg={7} md={8} className="text-center m-auto">
                        <h2>Industries We Power</h2>
                        <p>At BitsWits, we specialize in crafting mobile apps that make a difference. Our solutions are designed to tackle the unique challenges and opportunities in various industries, driving innovation and efficiency.</p>
                    </Col>
                </Row>
                <Row>
                    {data.map((item, index) => (
                        <Col lg={3} md={6} key={index}>
                            <div
                                className={styles.industryBox}
                                style={{ backgroundImage: `url(${item.img})` }}>
                                <div className={styles.industryIcon}>{item.icon}</div>
                                <div className={styles.industryTitle}>{item.title}</div>
                                <p>{item.txt}</p>
                                <Link href={item.url} onClick={handleChatOpen}>
                                    Read More <ArrowIcon />
                                </Link>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Industries;
