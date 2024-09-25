import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/portfolio/projectbanenr.module.scss"
import ButtonCommon from "@/src/components/common/button"

const Banner = () => {
    return (
        <section className={`${styles.projectSection}`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={7} md={10} className="mx-auto mt-auto text-center">
                        <h1>About <span className="txtColor">BitsWits!</span></h1>
                        <p>For the past decades, BitsWits is creating smooth user experiences and app designs that drive profitability for the businesses nationwide. The top app developers in US provide the best web, mobile, and Web3 design and development solutions for better metrics and ROI.</p>
                        <ButtonCommon txt="Get an Idea!" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner