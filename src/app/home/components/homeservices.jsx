import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/homeservices.module.scss"
import { ServiceArrow } from "@/src/app/app-constants"
import Link from "next/link"

const data = [
    {
        title: "Mobile App Development",
        txt: "Lorem ipsum dolor sit amet consectetur. Risus interdum sed turpis nunc nulla neque blandit. Sed donec neque blandit lorem non neque blandit Risus interdum sed turpis nunc nulla neque blandit."
    },
    {
        title: "Game Development",
        txt: "Lorem ipsum dolor sit amet consectetur. Risus interdum sed turpis nunc nulla neque blandit. Sed donec neque blandit lorem non neque blandit Risus interdum sed turpis nunc nulla neque blandit."
    },
    {
        title: "Web Development",
        txt: "Lorem ipsum dolor sit amet consectetur. Risus interdum sed turpis nunc nulla neque blandit. Sed donec neque blandit lorem non neque blandit Risus interdum sed turpis nunc nulla neque blandit."
    },
    {
        title: "Software Development",
        txt: "Lorem ipsum dolor sit amet consectetur. Risus interdum sed turpis nunc nulla neque blandit. Sed donec neque blandit lorem non neque blandit Risus interdum sed turpis nunc nulla neque blandit."
    },
    {
        title: "IT Staff Augmentation",
        txt: "Lorem ipsum dolor sit amet consectetur. Risus interdum sed turpis nunc nulla neque blandit. Sed donec neque blandit lorem non neque blandit Risus interdum sed turpis nunc nulla neque blandit."
    },
    {
        title: "Cloud Consulting",
        txt: "Lorem ipsum dolor sit amet consectetur. Risus interdum sed turpis nunc nulla neque blandit. Sed donec neque blandit lorem non neque blandit Risus interdum sed turpis nunc nulla neque blandit."
    }
]

const HomeServices = () => {
    return (
        <section className={`${styles.homeServices} p-100`}>
            <Container>
                <Row>
                    <Col lg={7} md={7}>
                        <div className="subTitle txtColor">Services</div>
                        <h2>We transform innovative ideas into powerful digital experiences.</h2>
                    </Col>
                    <Col lg={5} md={5} className="mt-auto">
                        <p>Lorem ipsum dolor sit amet consectetur. Risus interdum sed turpis nunc nulla neque blandit. Sed donec neque blandit lorem non neque blandit. nulla neque blandit. Sed donec neque blandit lorem non neque.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.serviceBox}>
                            {data.map((item, index) => (
                                <div className={styles.serviceItem} key={index}>
                                    <div className={styles.leftTxt}>
                                        <h4>{item.title}</h4>
                                        <p>{item.txt}</p>
                                    </div>
                                    <div className={styles.rightTxt}>
                                        <div className={styles.viewNumber}>
                                            0{index + 1}
                                        </div>
                                        <div className={styles.viewLinks}>
                                            <Link href="">View Service <span className={styles.btnBox}><ServiceArrow /></span></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HomeServices