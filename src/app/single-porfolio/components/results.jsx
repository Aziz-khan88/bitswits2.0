import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/portfolio/result.module.scss"
import BgImg from "media/casestudies/Vifty/ResultImg.webp"


const Results = () => {
    return (
        <section className={`${styles.resultSection}`} style={{ backgroundImage: `linear-gradient(270deg, rgba(93, 109, 132, 0.25) -18.54%, #233040 65.63%), url(${BgImg.src})` }}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xxl={7} xl={7} lg={7} md={12} className="my-auto">
                        <div className="subTitle txtColor">The Result</div>
                        <h2>Social Networking App</h2>
                        <p>Soul Scribe is a social networking app that works as a digital diary. Its unique feature is to invite friends and family to be part of your online journal. The app operates on a freemium subscription model, offering a complimentary family room option that allows users to invite peers to contribute to their memories.</p>
                        <div className={styles.resultBox}>
                            <div className={styles.resultTitle}>10+ <span>Years of Experience</span></div>
                            <div className={styles.resultTitle}>1,200+ <span>Successful Projects</span></div>
                            <div className={styles.resultTitle}>60+ <span>Experts</span></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Results