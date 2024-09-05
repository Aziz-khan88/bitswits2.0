
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/game/largesection.module.scss"
import ButtonCommon from '@/src/components/common/button'
import BGIMG from "media/mobile-game-development-company/largeContent.webp"
import Image from 'next/image'

const ContentSecLG = ({data}) => {
    return (
        <section className={`${styles.largecContentSec} p-50 bgBlack`}>
            <Container>
                <Row>

                    <Col lg={6} md={7} className='my-auto'>
                        <div className={styles.contentBox}>
                            <h2>{data?.title}</h2>
                            <div className={styles.contentscrollBox}>
                                {data?.text}
                            </div>
                            <ButtonCommon txt="Free Consultation" />
                        </div>
                    </Col>
                    <Col lg={5} md={5} className='my-auto text-center offset-lg-1' >
                        <Image src={BGIMG.src} alt="Bitswits Services" width={989} height={1100} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContentSecLG