import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/portfolio/singleprojectbanner.module.scss"
import ButtonCommon from "@/src/components/common/button"

const Banner = () => {
    return (
        <section className={`${styles.singleProject}`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xxl={5} lg={5} md={7} className="m-auto text-center">
                        <div className={styles.smallTxt}>Soul Scribe</div>
                        <h1>Connect, share, and discover</h1>
                        <ButtonCommon txt="Book a Call" />
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