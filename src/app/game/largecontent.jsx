
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/game/largesection.module.scss"
import ButtonCommon from '@/src/components/common/button'
import BGIMG from "media/game/largeContent.webp"
import Image from 'next/image'

const ContentSecLG = () => {
    return (
        <section className={`${styles.largecContentSec} p-50 bgBlack`}>
            <Container>
                <Row>

                    <Col lg={6} md={7} className='my-auto'>
                        <div className={styles.contentBox}>
                            <h2>SEO-Based Section</h2>
                            <div className={styles.contentscrollBox}>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. </p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. </p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. </p>
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