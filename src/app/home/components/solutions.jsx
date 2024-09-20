import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/solutions.module.scss"
import Link from "next/link"
import { ServiceArrow } from "@/src/app/app-constants"


const data = [
    {
        title: (<>Enterprise<br />Applications</>)
    },
    {
        title: (<>Enterprise<br />Resource Planning</>)
    },
    {
        title: (<>Financial<br />Management</>)
    },
    {
        title: (<>Supply Chain<br />Management</>)
    },
    {
        title: (<>Asset<br />Management</>)
    },
    {
        title: (<>Fleet<br />Management</>)
    },
    {
        title: (<>HR<br />Software</>)
    },
    {
        title: (<>eLearning<br />Software</>)
    },
    {
        title: (<>eCommerce<br />Management</>)
    },
    {
        title: (<>Mobile<br />Apps</>)
    },
    {
        title: (<>Content <br />Management</>)
    },
    {
        title: (<>Web<br />Portals</>)
    },
]
const Solutions = () => {
    return (
        <section className={`${styles.solutionsSection} p-100`}>
            <Container>
                <Row>
                    <Col lg={7} md={7}>
                        <div className="subTitle txtColor">Solutions We Provide</div>
                        <h2>We transform innovative ideas into powerful digital experiences.</h2>
                    </Col>
                    <Col lg={5} md={5} className="m-auto">
                        <p>Lorem ipsum dolor sit amet consectetur. Risus interdum sed turpis nunc nulla neque blandit. Sed donec neque blandit lorem non neque blandit. nulla neque blandit. Sed donec neque blandit lorem non neque.</p>
                    </Col>
                </Row>
                <Row className={styles.solutoinmainBox}>
                    {data.map((item, index) => (
                        <Col lg={3} md={4} key={index}>
                            <div className={styles.solutoinBox}>
                                <div className={styles.title}>{item.title}</div>
                                <Link href="" className={styles.Link}>
                                    <span className={styles.btnBox}><ServiceArrow /></span>
                                </Link>
                            </div>
                        </Col>
                    ))}

                </Row>
            </Container>
        </section>
    )
}

export default Solutions