import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/industry/industryservices.module.scss"


const IndustryService = () => {
    return (
        <section className={`p-100 ${styles.industryServices}`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={10} md={10} className="m-auto text-center">
                        <h2>Healthcare App Development Services We Offer</h2>
                        <p>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX  app design. We bring your iOS app ideas to life by using our comprehensive</p>
                    </Col>
                    <Col lg={12} md={12}>
                        <div className={styles.servicesBox}>
                            <div className={styles.servicesItem}>
                                <h4>Native<br />
                                    Mobile App Development</h4>
                                <p>We’re a software development company that ensures its expertise extends to offer a seamlessly productive and growth-oriented partnership to its</p>
                                <div className={styles.normalButton}>
                                    <div className={styles.linksBtn}>Let’s Do This!</div>
                                </div>
                            </div>
                            <div className={styles.servicesItem}>
                                <h4>Native<br />
                                    Mobile App Development</h4>
                                <p>We’re a software development company that ensures its expertise extends to offer a seamlessly productive and growth-oriented partnership to its</p>
                                <div className={styles.normalButton}>
                                    <div className={styles.linksBtn}>Let’s Do This!</div>
                                </div>
                            </div>
                            <div className={styles.servicesItem}>
                                <h4>Native<br />
                                    Mobile App Development</h4>
                                <p>We’re a software development company that ensures its expertise extends to offer a seamlessly productive and growth-oriented partnership to its</p>
                                <div className={styles.normalButton}>
                                    <div className={styles.linksBtn}>Let’s Do This!</div>
                                </div>
                            </div>
                            <div className={styles.servicesItem}>
                                <h4>Native<br />
                                    Mobile App Development</h4>
                                <p>We’re a software development company that ensures its expertise extends to offer a seamlessly productive and growth-oriented partnership to its</p>
                                <div className={styles.normalButton}>
                                    <div className={styles.linksBtn}>Let’s Do This!</div>
                                </div>
                            </div>
                            <div className={styles.servicesItem}>
                                <h4>Native<br />
                                    Mobile App Development</h4>
                                <p>We’re a software development company that ensures its expertise extends to offer a seamlessly productive and growth-oriented partnership to its</p>
                                <div className={styles.normalButton}>
                                    <div className={styles.linksBtn}>Let’s Do This!</div>
                                </div>
                            </div>
                            <div className={styles.servicesItem}>
                                <h4>Native<br />
                                    Mobile App Development</h4>
                                <p>We’re a software development company that ensures its expertise extends to offer a seamlessly productive and growth-oriented partnership to its</p>
                                <div className={styles.normalButton}>
                                    <div className={styles.linksBtn}>Let’s Do This!</div>
                                </div>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default IndustryService