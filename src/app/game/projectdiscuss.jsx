import ContactFrom from "@/src/components/common/contactfrom";
import styles from "@/styles/game/projectdiscuss.module.scss";
import { Col, Container, Row } from 'react-bootstrap'

const Projectdiscuss = () => {
    return (
        <section className={`${styles.discussionSection} pb-100`}>
            <Container>
                <Row>
                    <Col lg={8} className="m-auto text-center">
                        <h2>Have A Game Project To Discuss?</h2>
                        <p>We’re a software development company that ensures its expertise extends to offer a seamlessly productive and growth-oriented partnership</p>
                    </Col>
                    <Col lg={12}>
                        <div className={styles.fromSection}>
                            <ContactFrom discussion={true} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projectdiscuss