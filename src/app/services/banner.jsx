import styles from "@/styles/services/banner.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import Image from "next/image"
import ButtonCommon from "@/src/components/common/button"
import ContactFrom from "@/src/components/common/contactfrom"


const Banner = ({ data }) => {
    return (
        <section className={styles.bannerSection} style={{ backgroundImage: `url(${data?.BanngBg})` }}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={6} md={6} className="my-auto">
                        <div className={styles.subTitle}>{data?.subtitle}</div>
                        <h1>{data?.title}</h1>
                        <p>{data?.content}</p>
                        <div className={styles.bannerLogos}>
                            {data ?
                                <Image src={data?.BannerLogos} alt="Bitswits Services" width={528} height={50} />
                                :
                                null
                            }
                        </div>
                        <div className={styles.btnFlex}>
                            <ButtonCommon txt="Free Consultation" color="yes" />
                        </div>
                    </Col>
                    <Col lg={6} md={6} className="my-auto">
                        <div className={styles.bannerFrom}>
                            <h4>Let’s Discuss Your App Idea</h4>
                            <p>Share your app business objectives with our experts and create your custom app.</p>
                            <ContactFrom />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner