
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/game/contentsection.module.scss"
import ButtonCommon from '@/src/components/common/button'
import BGIMG from "media/game/imgContent.webp"
import Image from 'next/image'

const ContentSec = () => {
    return (
        <section className={`${styles.contentSection} p-50`}>
            <Container>
                <Row>
                    <Col lg={6} md={5} className='my-auto order-2 order-md-1' >
                        <Image src={BGIMG.src} alt="Bitswits Services" width={1340} height={1006} />
                    </Col>
                    <Col lg={6} md={7} className='my-auto order-1 order-md-2'>
                        <div className={styles.contentBox}>
                            <h2>Lorem Ipsum Is Simply Dummy Text Of The Printing.</h2>
                            <p>We’re a software development company that ensures its expertise extends to offer a seamlessly productive and growth-oriented partnership</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <ButtonCommon txt="Free Consultation" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContentSec