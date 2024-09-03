import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/game/gamecat.module.scss"
import ButtonCommon from '@/src/components/common/button'
import BGIMG from "media/game/gamecta.webp"

const GameCta = () => {
    return (
        <section className={`${styles.ctaSection} pb-100`}>
            <Container>
                <Row>
                    <Col lg={12} className='m-auto text-center'>
                        <div className={styles.ctaBG} style={{ backgroundImage: `url(${BGIMG.src})` }}>
                            <div className={styles.catConntent}>
                                <h6>Ready To Launch Your Next
                                    <span>Big Game?</span>
                                </h6>
                                <ButtonCommon txt="Free Consultation" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default GameCta