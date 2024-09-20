import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/services/achieved.module.scss"

const Banner = () => {
    return (
        <section className={`${styles.achievedSection} pt-100`}>
            <Container>
                <Row>
                    <Row>
                        <Col lg={6} md={7}>
                            <div className="subTitle txtColor">Our Portfolio</div>
                            <h2>Our Results-Driven Mobile Application Development Portfolio!</h2>
                        </Col>
                        <Col lg={5} md={5} className="m-auto offset-lg-1">
                            <p>Lorem ipsum dolor sit amet consectetur. Risus interdum sed turpis nunc nulla neque blandit. Sed donec neque blandit lorem non neque blandit. nulla neque blandit. Sed donec neque blandit lorem non neque.</p>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </section>
    )
}

export default Banner