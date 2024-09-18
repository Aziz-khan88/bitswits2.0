import ButtonCommon from "@/src/components/common/button"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/banner.module.scss"

const Banner = () => {
    return (
        <section className={styles.bannerSection}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={8} md={9} className="my-auto">
                        <div className={styles.bannerContent}>
                            <h1>Crafting Innovative Apps for Tomorrow’s Digital World</h1>
                            <p>Lorem ipsum dolor sit amet consectetur. Risus interdum sed turpis nunc nulla neque blandit. Sed donec lorem non ac.</p>
                            <ButtonCommon txt="Lets Discuss!" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <video autoPlay muted loop preload="auto" aria-label="Background video" className={styles.bannerVideo}>
                <source src='/videos/bannerVideo.mp4' type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>
    )
}

export default Banner