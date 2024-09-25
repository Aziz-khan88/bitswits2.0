import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/portfolio/features.module.scss"
import Image from "next/image"


const Features = ({ data }) => {
    return (
        <section className={`${styles.featuresSection}`}>
            <Container className={styles.featuresBG}>
                <Row>
                    <Col lg={5} md={6} className="my-auto text-center order-2 order-md-1">
                        <div className={styles.gradientBox}
                            style={{
                                background: data?.background,
                                boxShadow: data?.boxShadow
                            }}>
                            <Image src={data?.image} alt="Social Networking App" width={325} height={250} />
                        </div>

                    </Col>
                    <Col lg={6} md={6} className="offset-lg-1 my-auto  order-1 order-md-2">
                        <div className="subTitle txtColor">Features</div>
                        <h2>Building Bonds and Memories</h2>
                        <p>Soul Scribe is a social networking app that works as a digital diary. Its unique feature is to invite friends and family to be part of your online journal. The app operates on a freemium subscription model, offering a complimentary family room option that allows users to invite peers to contribute to their memories.</p>
                        <ul className={styles.featureBullets}>
                            <li><span className="txtColor">01 </span>Personal Journaling</li>
                            <li><span className="txtColor">02 </span>In-App Purchases</li>
                            <li><span className="txtColor">03 </span>Inviting Pals</li>
                            <li><span className="txtColor">04 </span>Premium Membership</li>
                            <li><span className="txtColor">05 </span>Social Groups</li>
                            <li><span className="txtColor">06 </span>Sharing Status</li>
                            <li><span className="txtColor">07 </span>Memory Sharing</li>
                            <li><span className="txtColor">08 </span>Creating friendships</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Features