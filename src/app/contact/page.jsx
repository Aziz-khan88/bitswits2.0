import { Col, Container, Row } from "react-bootstrap";
import { CheckList } from "@/src/app/app-constants";
import styles from "@/styles/contact/contact.module.scss"
import ContactFrom from "@/src/components/common/contactfrom";

export default function Page() {
    return (
        <section className={styles.contactBanner}>
            <Container>
                <Row>
                    <Col lg={5} md={6}>
                        <div className="subTitle txtColor">We’re excited to hear from you!</div>
                        <h2>Please fill out the form below, and we’ll respond as soon as possible.</h2>
                        <ul className={styles.greenBullet}>
                            <li><CheckList />Scalable and Secure Apps</li>
                            <li><CheckList />User-Centric Design</li>
                            <li><CheckList />Customized Development</li>
                            <li><CheckList />Error-Free Delivery</li>
                            <li><CheckList />Transparent Communication</li>
                            <li><CheckList />Support and Maintenance</li>
                        </ul>
                    </Col>
                    <Col lg={5} md={6} className="offset-lg-2">
                        <div className={styles.contactForm}>
                            <div className={`${styles.contactHeading} subTitle txtColor`}>Let’s Discuss Your App Idea</div>
                            <ContactFrom contactpage={true} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    );
}

