import ButtonCommon from "@/src/components/common/button"
import styles from "@/styles/industry/Industrycta.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import CTABG from "media/industry/ctaImage.webp"

const IndustryCta = () => {
    return (
        <section className={styles.industryCta} >
            <Container>
                <Row>
                    <Col lg={12} md={12}>
                        <div className={styles.industrySec} style={{ backgroundImage: `url(${CTABG.src})` }}>
                            <div className={styles.industryContent}>
                                <h2>Innovate Healthcare With
                                    Cutting-Edge Apps</h2>
                                <p>We’re a software development company that ensures its expertise extends to offer a seamlessly productive and growth-oriented partnership to its We’re a software development company</p>
                                <ButtonCommon txt="Free Consultation" color={true} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default IndustryCta