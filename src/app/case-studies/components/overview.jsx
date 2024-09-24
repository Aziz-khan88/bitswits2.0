
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/portfolio/overview.module.scss"
import OverviewImg from "media/casestudies/soul-scribe/OverviewImg.webp"
import AppleStore from "media/casestudies/AppleStore.webp"
import GoogleStore from "media/casestudies/GoogleStore.webp"
import Image from "next/image"

const Overview = ({data}) => {
    return (
        <section className={`${styles.singleProjectContent} p-100`}>
            <Container>
                <Row>
                    <Col lg={5} md={6} className="my-auto">
                        <div className="subTitle txtColor">Overview</div>
                        <h2>Social Networking App</h2>
                        <p>Soul Scribe is a social networking app that works as a digital diary. Its unique feature is to invite friends and family to be part of your online journal. The app operates on a freemium subscription model, offering a complimentary family room option that allows users to invite peers to contribute to their memories.</p>
                        <div className={styles.storeImg}>
                            <div className={styles.storeItem}>
                                <a href="#" target="_blank">
                                    <Image src={AppleStore.src} alt="Bitswits Apple Store" width={190} height={57} />
                                </a>
                            </div>
                            <div className={styles.storeItem}>
                                <a href="#" target="_blank">
                                    <Image src={GoogleStore.src} alt="Bitswits Google Store" width={190} height={57} />
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6} className={`offset-lg-1 ${styles.mockupImg}`}>
                        <Image src={data?.image} alt="Social Networking App" width={1353} height={1486} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Overview