import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/process.module.scss"
import { Process01, Process02, Process03, Process04, Process05, Process06, Process07, Process08, ServiceArrow } from "@/src/app/app-constants"
import Link from "next/link"


const data = [
    {
        title: "Discovery & Analysis",
        txt: "Lorem ipsum dolor sit amet consectetur Risus interdum sed turpis nunc nulla neque blandit Risus interdum sed turpis nuncRisus interdum sed turpis nuncsed turpis nunc nulla sed turpis nuncsed turpis nunc nulla.",
        icon: <Process01 />,

    },
    {
        title: "Feasibility & Impact Assessment",
        txt: "Lorem ipsum dolor sit amet consectetur Risus interdum sed turpis nunc nulla neque blandit Risus interdum sed turpis nuncRisus interdum sed turpis nuncsed turpis nunc nulla sed turpis nuncsed turpis nunc nulla.",
        icon: <Process02 />,

    },
    {
        title: "Solution Architecture Design",
        txt: "Lorem ipsum dolor sit amet consectetur Risus interdum sed turpis nunc nulla neque blandit Risus interdum sed turpis nuncRisus interdum sed turpis nuncsed turpis nunc nulla sed turpis nuncsed turpis nunc nulla.",
        icon: <Process03 />,

    },
    {
        title: "Technology Selection & Prototyping",
        txt: "Lorem ipsum dolor sit amet consectetur Risus interdum sed turpis nunc nulla neque blandit Risus interdum sed turpis nuncRisus interdum sed turpis nuncsed turpis nunc nulla sed turpis nuncsed turpis nunc nulla.",
        icon: <Process04 />,

    },
    {
        title: "Agile Development Process",
        txt: "Lorem ipsum dolor sit amet consectetur Risus interdum sed turpis nunc nulla neque blandit Risus interdum sed turpis nuncRisus interdum sed turpis nuncsed turpis nunc nulla sed turpis nuncsed turpis nunc nulla.",
        icon: <Process05 />,

    },
    {
        title: "System Integration & Testing",
        txt: "Lorem ipsum dolor sit amet consectetur Risus interdum sed turpis nunc nulla neque blandit Risus interdum sed turpis nuncRisus interdum sed turpis nuncsed turpis nunc nulla sed turpis nuncsed turpis nunc nulla.",
        icon: <Process06 />,

    },
    {
        title: "Deployment & User Training",
        txt: "Lorem ipsum dolor sit amet consectetur Risus interdum sed turpis nunc nulla neque blandit Risus interdum sed turpis nuncRisus interdum sed turpis nuncsed turpis nunc nulla sed turpis nuncsed turpis nunc nulla.",
        icon: <Process07 />,

    },
    {
        title: "Continuous Support & Optimization",
        txt: "Lorem ipsum dolor sit amet consectetur Risus interdum sed turpis nunc nulla neque blandit Risus interdum sed turpis nuncRisus interdum sed turpis nuncsed turpis nunc nulla sed turpis nuncsed turpis nunc nulla.",
        icon: <Process08 />,

    },

]

const Process = () => {
    return (
        <section className={`${styles.processSec} p-100`}>
            <Container>
                <Row>
                    <Col lg={7} md={7}>
                        <div className="subTitle txtColor">Our Process</div>
                        <h2>We transform innovative ideas into powerful digital experiences.</h2>
                    </Col>
                    <Col lg={5} md={5} className="m-auto">
                        <p>Lorem ipsum dolor sit amet consectetur. Risus interdum sed turpis nunc nulla neque blandit. Sed donec neque blandit lorem non neque blandit. nulla neque blandit. Sed donec neque blandit lorem non neque.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.processBox}>
                            {data.map((item, index) => (
                                <div className={styles.processList} key={index}>
                                    <div className={styles.processIcon}>
                                        {item.icon}
                                    </div>
                                    <div className={styles.processContent}>
                                        <h5>{item.title}</h5>
                                        <p>{item.txt}</p>
                                    </div>
                                    <div className={styles.viewLinks}>
                                        <Link href="">View More <span className={styles.btnBox}><ServiceArrow /></span></Link>
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

export default Process