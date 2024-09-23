import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/portfolio/projectbanenr.module.scss"

const Banner = () => {
    return (
        <section className={`${styles.projectSection}`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={7} md={7} className="mx-auto mt-auto">
                        <h1>Our Results-Driven Mobile Application Development <span className="txtColor">Portfolio!</span></h1>
                        <p>Drive business growth and enhance user engagement with our top-tier apps! As a trusted mobile application development company, our portfolio reflects our commitment to delivering high-impact solutions and showcases the success of our clients.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner