import styles from "@/styles/game/banner.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import BannerLogos from "media/game/bannerLogo.webp"
import BanngBg from "media/game/bannerIMG.webp"
import Image from "next/image"
import ButtonCommon from "@/src/components/common/button"


const Banner = () => {
    return (
        <section className={styles.gamebanenrSection} style={{ backgroundImage: `url(${BanngBg.src})` }}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={6} md={8} className="my-auto">
                        <div className={styles.subTitle}>Quickly – Efficiently – Effortlessly</div>
                        <h1>The Ultimate Mobile Game Development Company</h1>
                        <p>We’re a software development company that ensures its expertise extends to offer a seamlessly productive and growth-oriented partnership to its client’s goals, and internal teams.</p>
                        <div className={styles.bannerLogos}>
                            <Image src={BannerLogos.src} alt="Bitswits Services" width={757} height={82} />
                        </div>
                        <div className={styles.btnFlex}>
                            <ButtonCommon txt="Free Consultation" color="yes" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner 