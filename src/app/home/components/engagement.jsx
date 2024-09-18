import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/engagement.module.scss"
import Link from "next/link"
import { DedicatedTeamModel, FixedPriceModel, HourlyPriceModel, OnsiteTeamModel } from "@/src/app/app-constants"

const Engagement = () => {
    return (
        <section className={`${styles.engagementSolution} p-100`}>
            <Container>
                <Row>
                    <Col lg={7} md={7}>
                        <div className="subTitle txtColor">Engagement Models</div>
                        <h2>We transform innovative ideas into powerful digital experiences.</h2>
                    </Col>
                    <Col lg={5} md={5} className="mt-auto">
                        <p>Lorem ipsum dolor sit amet consectetur. Risus interdum sed turpis nunc nulla neque blandit. Sed donec neque blandit lorem non neque blandit. nulla neque blandit. Sed donec neque blandit lorem non neque.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.engagementBox}>
                            <div className={styles.engagementItem}>
                                <div className={styles.mainTitle}>

                                </div>
                                <div className={styles.mainItemList}>
                                    <div>Suited For</div>
                                    <div>Size of Project</div>
                                    <div>Requirement Type</div>
                                    <div>Client’s Involvement</div>
                                    <div>Time Frame</div>
                                    <div>Budget</div>
                                </div>
                                <div className={styles.mainButtton}>

                                </div>
                            </div>
                            <div className={styles.engagementItem}>
                                <div className={styles.mainTitle}>
                                    <DedicatedTeamModel />
                                    <h6>Dedicated Team Model</h6>
                                </div>
                                <div className={styles.mainItemList}>
                                    <div>Entrepreneurs and Large enterprises.</div>
                                    <div>Ideally suited for large projects.</div>
                                    <div>Evolving project requirements.</div>
                                    <div>Low client involvement, as the team is dedicated.</div>
                                    <div>Estimated project timelines, with flexibility.</div>
                                    <div>Flexible budget arrangements.</div>
                                </div>
                                <div className={styles.mainButtton}>
                                    <Link href="">Read More</Link>
                                </div>
                            </div>
                            <div className={styles.engagementItem}>
                                <div className={styles.mainTitle}>
                                    <HourlyPriceModel />
                                    <h6>Hourly Price Model</h6>
                                </div>
                                <div className={styles.mainItemList}>
                                    <div>Entrepreneurs and Large enterprises.</div>
                                    <div>Ideally suited for large projects.</div>
                                    <div>Evolving project requirements.</div>
                                    <div>Low client involvement, as the team is dedicated.</div>
                                    <div>Estimated project timelines, with flexibility.</div>
                                    <div>Flexible budget arrangements.</div>
                                </div>
                                <div className={styles.mainButtton}>
                                    <Link href="">Read More</Link>
                                </div>
                            </div>
                            <div className={styles.engagementItem}>
                                <div className={styles.mainTitle}>
                                    <FixedPriceModel />
                                    <h6>Fixed Price Model</h6>
                                </div>
                                <div className={styles.mainItemList}>
                                    <div>Entrepreneurs and Large enterprises.</div>
                                    <div>Ideally suited for large projects.</div>
                                    <div>Evolving project requirements.</div>
                                    <div>Low client involvement, as the team is dedicated.</div>
                                    <div>Estimated project timelines, with flexibility.</div>
                                    <div>Flexible budget arrangements.</div>
                                </div>
                                <div className={styles.mainButtton}>
                                    <Link href="">Read More</Link>
                                </div>
                            </div>
                            <div className={styles.engagementItem}>
                                <div className={styles.mainTitle}>
                                    <OnsiteTeamModel />
                                    <h6>On-site Team Model</h6>
                                </div>
                                <div className={styles.mainItemList}>
                                    <div>Entrepreneurs and Large enterprises.</div>
                                    <div>Ideally suited for large projects.</div>
                                    <div>Evolving project requirements.</div>
                                    <div>Low client involvement, as the team is dedicated.</div>
                                    <div>Estimated project timelines, with flexibility.</div>
                                    <div>Flexible budget arrangements.</div>
                                </div>
                                <div className={styles.mainButtton}>
                                    <Link href="">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Engagement