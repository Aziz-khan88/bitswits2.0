import styles from "@/styles/services/banner.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import BannerLogos from "media/services/bannerLogo.webp"
import BanngBg from "media/services/bgBanner.webp"
import Image from "next/image"
import ButtonCommon from "@/src/components/common/button"
import ContactFrom from "@/src/components/common/contactfrom"

const Banner = () => {
    return (
        <section className={styles.bannerSection} style={{ backgroundImage: `url(${BanngBg.src})` }}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={6} md={6} className="my-auto">
                        <div className={styles.subTitle}>Quickly – Efficiently – Effortlessly</div>
                        <h1>Mobile App Development Services</h1>
                        <p>As a leading provider of mobile app development services in the USA, we help entrepreneurs and SMBs achieve their growth aspirations by developing high-performance, feature-rich apps. Our expert mobile app developers use Swift, Kotlin, React Native, and Flutter to build cost-effective native and cross-platform applications, delivering UX-driven solutions from ideation to launch!</p>
                        <div className={styles.bannerLogos}>
                            <Image src={BannerLogos.src} alt="Bitswits Services" width={477} height={72} />
                        </div>
                        <div className={styles.btnFlex}>
                            <ButtonCommon txt="Free Consultation" color="yes" />
                        </div>
                    </Col>
                    <Col lg={6} md={6} className="my-auto">
                        <div className={styles.bannerFrom}>
                            <h4>Let’s Discuss Your App Idea</h4>
                            <p>Share your app business objectives with our experts and create your custom app.</p>
                            <ContactFrom />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner