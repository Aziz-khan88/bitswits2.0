
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/portfolio/overview.module.scss"
import ProblemImg from "media/casestudies/Vifty/ProblemImg.webp"
import Image from "next/image"
import { CheckList } from "@/src/app/app-constants"

const Problem = () => {
    return (
        <section className={`${styles.singleProjectContent} p-100`}>
            <Container>
                <Row>
                    <Col lg={6} md={6} className={`${styles.mockupImg} my-auto order-2 order-md-1`}>
                        <Image src={ProblemImg.src} alt="Social Networking App" width={1353} height={1486} />
                    </Col>
                    <Col lg={5} md={6} className="my-auto offset-lg-1 order-1 order-md-2">
                        <div className="subTitle txtColor">The Problem</div>
                        <h2>Social Networking App</h2>
                        <p>Soul Scribe is a social networking app that works as a digital diary. Its unique feature is to invite friends and family to be part of your online journal. The app operates on a freemium subscription model, offering a complimentary family room option that allows users to invite peers to contribute to their memories.</p>
                        <ul className={styles.greenBullet}>
                            <li><CheckList />In-App Purchases and Subscription</li>
                            <li><CheckList />Balancing Social and Personal Use</li>
                            <li><CheckList />Organizing Memories</li>
                            <li><CheckList />Engaging Invited Contributors</li>
                            <li><CheckList />Effective Content Curation</li>
                        </ul>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default Problem