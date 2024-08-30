import styles from "@/styles/services/technologies.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import Image from "next/image"
import Icon01 from "media/services/tech/1.webp"
import Icon02 from "media/services/tech/2.webp"
import Icon03 from "media/services/tech/3.webp"
import Icon04 from "media/services/tech/4.webp"
import Icon05 from "media/services/tech/5.webp"
import Icon06 from "media/services/tech/6.webp"
import Icon07 from "media/services/tech/7.webp"
import Icon08 from "media/services/tech/8.webp"
import TechImg from "media/services/techImg.webp"
import ButtonCommon from "@/src/components/common/button"

const Icons = [
    {
        title: "iOS",
        icons: Icon01.src,
    },
    {
        title: "Android",
        icons: Icon02.src,
    },
    {
        title: "Flutter",
        icons: Icon03.src,
    },
    {
        title: "Kotlin",
        icons: Icon04.src,
    },
    {
        title: "Objective C",
        icons: Icon05.src,
    },
    {
        title: "ionic",
        icons: Icon06.src,
    },
    {
        title: "React Native",
        icons: Icon07.src,
    },
    {
        title: "Swift",
        icons: Icon08.src,
    },
]
const Technologies = () => {
    return (
        <section className={`${styles.technologiesSection} p-100`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={7} md={12} className="my-auto">
                        <h2>Hire Dedicated App Developers for Your Next Project</h2>
                        <p>When you’re ready to take your app idea from concept to reality, We’re here to help at BitsWits. As a dedicated mobile app development company, We specialize in crafting high-quality, user-friendly applications that align with your business goals. Whether you need an app for iOS, Android, or both, We focus on creating seamless, innovative, and scalable solutions tailored to your specific needs. Our expertise in the latest technologies ensures your app stands out in today’s competitive market. Let’s collaborate to turn your vision into a powerful mobile experience.</p>
                        <div className={styles.techSec}>

                            {Icons.map((item, index) => (
                                <div className={styles.techIcon} key={index}>
                                    <div className={styles.iconBox}>
                                        <Image src={item.icons} alt="Icon Box" width={50} height={50} />
                                    </div>
                                    <div className={styles.iconTitle}>
                                        {item.title}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <ButtonCommon txt="Free Consultation" />
                    </Col>
                    <Col lg={4} md={12} className="my-auto offset-lg-1">
                        <Image src={TechImg} alt="TechImg Box" width={500} height={743} className={styles.ImgPhone} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Technologies