import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/portfolio/projectlist.module.scss"
import Case01 from "media/projects/case01.webp"
import Logo01 from "media/projects/Icon01.webp"
import Logo02 from "media/projects/Icon02.webp"
import Logo03 from "media/projects/Icon03.webp"
import Logo04 from "media/projects/Icon04.webp"
import Logo05 from "media/projects/Icon05.webp"
import Logo06 from "media/projects/Icon06.webp"
import Logo07 from "media/projects/Icon07.webp"
import Logo08 from "media/projects/Icon08.webp"
import Image from "next/image"
import ButtonCommon from "@/src/components/common/button"

const data = [
    {
        name: "Single’s Up",
        logo: Logo01.src,
        BgImg: Case01.src,

    },
    {
        name: "Vifty",
        logo: Logo02.src,
        BgImg: Case01.src,

    },
    {
        name: "Soul Scribe",
        logo: Logo03.src,
        BgImg: Case01.src,

    },
    {
        name: "Prcatice Pen",
        logo: Logo04.src,
        BgImg: Case01.src,

    },
    {
        name: "Nutrisnap",
        logo: Logo05.src,
        BgImg: Case01.src,

    },
    {
        name: "HomePro",
        logo: Logo06.src,
        BgImg: Case01.src,

    },
    {
        name: "Combat",
        logo: Logo07.src,
        BgImg: Case01.src,

    }
    ,
    {
        name: "Route Rover",
        logo: Logo08.src,
        BgImg: Case01.src,

    }
]
const ProjectList = () => {
    return (
        <section className={`${styles.projectList} pt-50`}>
            <Container>
                <Row>
                    {data.map((item, index) => (
                        <Col lg={6} md={6} key={index}>
                            <div className={styles.casestudyBox} style={{ backgroundImage: `url(${item.BgImg})` }} >
                                <div className={styles.casestudyContent} >
                                    <div className={styles.casestudyTxt}>
                                        <div className={styles.logoSec}>
                                            <Image src={item.logo} alt={item.name} width={85} height={85} />
                                            <span>{item.name}</span>
                                        </div>

                                    </div>
                                    <div className={styles.btnSec}>
                                        <ButtonCommon txt="View Case Study" color="white" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}

                </Row>
            </Container>
        </section>
    )
}

export default ProjectList