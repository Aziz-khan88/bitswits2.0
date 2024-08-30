import IMG from "media/services/cuttingEdge.webp"
import styles from "@/styles/services/fueling.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import Image from "next/image"
import ButtonCommon from "@/src/components/common/button"

const Fueling = () => {
    return (
        <section className={`${styles.fuelingSection} p-100 bgBlack`}>
            <Container>
                <Row>
                    <Col lg={6} md={6}>
                        <div className={styles.fuelingSickty}>
                            <h2>Mobile App Development Agency in the US for Innovative Solutions</h2>
                            <p>Our mobile app development company offers comprehensive services across the USA, delivering cutting-edge solutions with a dedicated team. We specialize in custom application development, ensuring your business stays ahead in the digital landscape.</p>
                            <div className={styles.fuelingBox}>
                                <div className={styles.boxContent}>
                                    <h5>Take No Risks with an MVP! Launch Your Idea and See the Response!</h5>
                                    <p>At BitsWits, we embrace a creative, hands-on approach to mobile app development because we understand it’s more than just an app.</p>
                                </div>
                                <div className={styles.boxImg}>
                                    <Image src={IMG.src} alt="Bitswits Services" width={350} height={290} />
                                </div>
                            </div>
                            <ButtonCommon txt="Free Consultation" />
                        </div>
                    </Col>
                    <Col lg={5} md={6} className="offset-lg-1">
                        <div className={styles.fuelingSidebar}>
                            <div className={styles.sicktyItem}>
                                <h5>Geolocation Management</h5>
                                <p>Enhance user experience with precise geolocation services, delivering real-time location tracking and navigation across multiple applications, ensuring accuracy and efficiency. Ideal for businesses aiming to provide seamless user journeys, personalized content, and improved decision-making through advanced geolocation capabilities.</p>
                            </div>
                            <div className={styles.sicktyItem}>
                                <h5>Payments</h5>
                                <p>Seamlessly integrate secure payments into your mobile app, supporting various payment gateways to enhance user experience and trust. Enjoy streamlined transactions with top-notch security, ensuring your users’ confidence in every payment interaction.</p>
                            </div>
                            <div className={styles.sicktyItem}>
                                <h5>Messaging and Calling</h5>
                                <p>Facilitate seamless communication within your app by incorporating messaging and voice/video calling features. These tools enhance connectivity and engagement, allowing users to interact effortlessly and stay connected, fostering a dynamic and interactive user experience in real-time.</p>
                            </div>
                            <div className={styles.sicktyItem}>
                                <h5>Multi-device Synchronization</h5>
                                <p>Ensure seamless app performance across multiple devices with advanced multi-device synchronization features, enabling consistent user experiences. This cutting-edge technology synchronizes data, settings, and preferences in real-time, providing uninterrupted functionality regardless of the device used by the end-user.</p>
                            </div>
                            <div className={styles.sicktyItem}>
                                <h5>Chatbots</h5>
                                <p>Implement AI-driven chatbots to provide personalized customer support, boosting user interaction, satisfaction, and overall experience. These intelligent systems can efficiently handle inquiries, reduce response times, and offer tailored solutions, enhancing customer engagement and loyalty across digital platforms.</p>
                            </div>
                            <div className={styles.sicktyItem}>
                                <h5>Immersive Experience</h5>
                                <p>Offer users an immersive experience with AR/VR integrations, transforming applications into dynamic, interactive environments. Enhance engagement and retention by seamlessly merging the digital and physical worlds, creating unique, lifelike experiences that captivate and immerse users in a new dimension.</p>
                            </div>
                            <div className={styles.sicktyItem}>
                                <h5>Push Notifications</h5>
                                <p>Keep users engaged by sending timely push notifications that are tailored to their individual preferences and behaviors. This personalized approach enhances user experience, ensuring they receive relevant updates that resonate with their interests, driving higher engagement and retention.</p>
                            </div>
                            <div className={styles.sicktyItem}>
                                <h5>Scheduling and Booking</h5>
                                <p>Simplify user tasks with integrated scheduling and booking systems designed for maximum convenience and efficiency. Enhance user experiences by streamlining appointments, reservations, and bookings, all within one seamless platform that saves time and reduces manual efforts, boosting overall satisfaction.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Fueling