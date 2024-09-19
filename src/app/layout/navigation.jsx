import Link from "next/link"
import styles from "@/styles/layout/navigation.module.scss"
import { NavIcon, ServiceArrow, SubMenuIcon } from "@/src/app/app-constants"
import { Container } from "react-bootstrap"
import { useState } from "react"

const Navigation = ({ isWhiteLogo, scrolled }) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
        if (!isActive) {
            document.body.classList.add('active');
        } else {
            document.body.classList.remove('active');
        }
    };

    const HeaderWhite = isWhiteLogo ? `${styles.whiteNav}` : '';
    const HeaderScroll = scrolled ? `${styles.NavScroll}` : '';


    return (
        <>
            <div onClick={handleClick}
                className={`${isActive ? 'navIcon active' : 'navIcon'}`}>
                <NavIcon />
            </div>
            <ul className={`${styles.mainNavigation} ${HeaderWhite} ${HeaderScroll}`} >
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="#">About</Link>
                </li>
                <li className={styles.subMenu}>
                    <Link href="#">Services</Link>
                    <div className={styles.submenuContainer}>
                        <Container>
                            <div className={styles.submenuBox}>
                                <div className={styles.submenuItem}>
                                    <div className={styles.title}>Services</div>
                                    <ul>
                                        <li><Link href="/flutter-app-development">Flutter app development</Link></li>
                                        <li><Link href="/android-app-development-company">Android app development</Link></li>
                                        <li><Link href="/react-native-app-development">React Native app development</Link></li>
                                        <li><Link href="/ios-app-development-company">iOS app development</Link></li>
                                        <li><Link href="/cross-platform-app-development-services">Cross Platform app development</Link></li>
                                        <li><Link href="/nft-game-development-company ">NFT game development</Link></li>
                                        <li><Link href="/ai-development-company">AI Development Company</Link></li>
                                        <li><Link href="/blockchain-game-development-company">Blockchain game development</Link></li>
                                        <li><Link href="/mobile-game-development-company ">Mobile Game Development</Link></li>
                                        <li><Link href="/hybrid-app-development-company ">Hybrid app development</Link></li>
                                    </ul>
                                </div>
                                <div className={styles.submenuItem}>
                                    <div className={styles.title}>Industries</div>
                                    <ul>
                                        <li><Link href="/healthcare-app-development-services">Healthcare</Link></li>
                                        <li><Link href="/ecommerce-app-development">E-Commerce</Link></li>
                                        <li><Link href="/education-app-development">Education</Link></li>
                                        <li><Link href="/real-estate-app-development-company">Real Estate</Link></li>
                                        <li><Link href="/music-app-development-company">Music</Link></li>
                                        <li><Link href="/automotive-software-development">Automotive</Link></li>
                                        <li><Link href="/social-media-app-development-company">Social Media</Link></li>
                                        <li><Link href="#">Entertainment</Link></li>
                                        <li><Link href="#">Game</Link></li>
                                        <li><Link href="#">Travel</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.submenuItemLast}>
                                <ul>
                                    <li><Link href="#">Austin <ServiceArrow /></Link></li>
                                    <li><Link href="#">Chicago <ServiceArrow /></Link></li>
                                    <li><Link href="#">Dallas <ServiceArrow /></Link></li>
                                    <li><Link href="#">Denver <ServiceArrow /></Link></li>
                                    <li><Link href="#">Dubai <ServiceArrow /></Link></li>
                                    <li><Link href="#">Florida <ServiceArrow /></Link></li>
                                    <li><Link href="#">Miami <ServiceArrow /></Link></li>
                                    <li><Link href="#">New York <ServiceArrow /></Link></li>
                                    <li><Link href="#">Saudi Arabia <ServiceArrow /></Link></li>
                                    <li><Link href="#">Toronto <ServiceArrow /></Link></li>
                                    <li><Link href="#">Washington DC <ServiceArrow /></Link></li>
                                    <li><Link href="#">Houston <ServiceArrow /></Link></li>
                                </ul>
                            </div>
                        </Container>

                    </div>
                </li>
                <li>
                    <Link href="#">Blog</Link>
                </li>
                <li>
                    <Link href="#">Portfolio</Link>
                </li>
                <li className={styles.btnHeader}>
                    <Link href="#">Connect Now</Link>
                </li>
            </ul>
            <div className={`${styles.mainMobileNavigation}  ${isActive ? `${styles.active}` : ''}`} >
                <ul className={styles.mobileNavigation}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="#">About</Link></li>
                    <li className={styles.subMobileMenu}>
                        <Link href="#">Services <SubMenuIcon /></Link>
                        <ul className={styles.mobilesubMenu}>
                            <li><Link href="/flutter-app-development">Flutter app development</Link></li>
                            <li><Link href="/android-app-development-company">Android app development</Link></li>
                            <li><Link href="/react-native-app-development">React Native app development</Link></li>
                            <li><Link href="/ios-app-development-company">iOS app development</Link></li>
                            <li><Link href="/cross-platform-app-development-services">Cross Platform app development</Link></li>
                            <li><Link href="/nft-game-development-company ">NFT game development</Link></li>
                            <li><Link href="/ai-development-company">AI Development Company</Link></li>
                            <li><Link href="/blockchain-game-development-company">Blockchain game development</Link></li>
                            <li><Link href="/mobile-game-development-company ">Mobile Game Development</Link></li>
                            <li><Link href="/hybrid-app-development-company ">Hybrid app development</Link></li>

                        </ul>
                    </li>
                    <li className={styles.subMobileMenu}>
                        <Link href="#">Industries <SubMenuIcon /></Link>
                        <ul className={styles.mobilesubMenu}>
                            <li><Link href="/healthcare-app-development-services">Healthcare</Link></li>
                            <li><Link href="/ecommerce-app-development">E-Commerce</Link></li>
                            <li><Link href="/education-app-development">Education</Link></li>
                            <li><Link href="/real-estate-app-development-company">Real Estate</Link></li>
                            <li><Link href="/music-app-development-company">Music</Link></li>
                            <li><Link href="/automotive-software-development">Automotive</Link></li>
                            <li><Link href="/social-media-app-development-company">Social Media</Link></li>
                            <li><Link href="#">Entertainment</Link></li>
                            <li><Link href="#">Game</Link></li>
                            <li><Link href="#">Travel</Link></li>
                        </ul>
                    </li>
                    <li className={styles.subMobileMenu}>
                        <Link href="#">Locations <SubMenuIcon /></Link>
                        <ul className={styles.mobilesubMenu}>
                            <li><Link href="#">Austin</Link></li>
                            <li><Link href="#">Chicago</Link></li>
                            <li><Link href="#">Dallas</Link></li>
                            <li><Link href="#">Denver</Link></li>
                            <li><Link href="#">Dubai</Link></li>
                            <li><Link href="#">Florida</Link></li>
                            <li><Link href="#">Miami</Link></li>
                            <li><Link href="#">New York</Link></li>
                            <li><Link href="#">Saudi Arabia</Link></li>
                            <li><Link href="#">Toronto</Link></li>
                            <li><Link href="#">Washington DC</Link></li>
                            <li><Link href="#">Houston</Link></li>
                        </ul>
                    </li>
                    <li><Link href="#">Portfolio</Link></li>
                    <li><Link href="#">Connect Now</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Navigation