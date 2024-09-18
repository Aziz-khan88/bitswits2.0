import Link from "next/link"
import styles from "@/styles/layout/navigation.module.scss"
import { ArrowIcon, NavIcon, PhoneIcon, ServiceArrow, SubMenuIcon } from "@/src/app/app-constants"
import { Col, Container, Row } from "react-bootstrap"
import { useEffect, useState } from "react"

const Navigation = ({ isWhiteLogo, scrolled }) => {
    const [isActive, setIsActive] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        // Check screen size on mount
        const checkScreenSize = () => {
            if (typeof window !== 'undefined') {
                const isMobile = window.innerWidth <= 800;
                setIsMobileView(isMobile);
                if (!isMobile && isActive) {
                    handleClosed();
                }
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, [isActive]);

    const handleClick = () => {
        setIsActive(!isActive);
        if (!isActive) {
            document.body.classList.add('active');
        } else {
            document.body.classList.remove('active');
        }
    };

    const handleClosed = () => {
        setIsActive(false);
        document.body.classList.remove('active');
    };



    // const HeaderChanges = isWhiteLogo
    //     ? scrolled
    //         ? `${styles.whiteNav} ${styles.NavScroll}`
    //         : styles.whiteNav
    //     : "";
    return (
        // <ul className={`${styles.mainNavigation} ${HeaderChanges}`}>
        <>
            <div onClick={handleClick}
                className={`${isActive ? 'navIcon active' : 'navIcon'}`}>
                <NavIcon />
            </div>
            <ul className={`${styles.mainNavigation} ${scrolled ? styles.NavScroll : ''}`} >
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
                                        <li><Link href="#">Flutter app development</Link></li>
                                        <li><Link href="#">Android app development</Link></li>
                                        <li><Link href="#">React Native app development</Link></li>
                                        <li><Link href="#">iOS app development</Link></li>
                                        <li><Link href="#">Cross Platform app development</Link></li>
                                        <li><Link href="#">NFT game development</Link></li>
                                        <li><Link href="#">3D game development</Link></li>
                                        <li><Link href="#">Blockchain game development</Link></li>
                                        <li><Link href="#">2D game development</Link></li>
                                        <li><Link href="#">Hybrid app development</Link></li>
                                    </ul>
                                </div>
                                <div className={styles.submenuItem}>
                                    <div className={styles.title}>Industries</div>
                                    <ul>
                                        <li><Link href="#">Healthcare</Link></li>
                                        <li><Link href="#">E-Commerce</Link></li>
                                        <li><Link href="#">Education</Link></li>
                                        <li><Link href="#">Banking</Link></li>
                                        <li><Link href="#">Lifestyle</Link></li>
                                        <li><Link href="#">Restaurants</Link></li>
                                        <li><Link href="#">Travel</Link></li>
                                        <li><Link href="#">Social</Link></li>
                                        <li><Link href="#">Entertainment</Link></li>
                                        <li><Link href="#">Game</Link></li>
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
                            <li><Link href="#">Flutter app development</Link></li>
                            <li><Link href="#">Android app development</Link></li>
                            <li><Link href="#">React Native app development</Link></li>
                            <li><Link href="#">iOS app development</Link></li>
                            <li><Link href="#">Cross Platform app development</Link></li>
                            <li><Link href="#">NFT game development</Link></li>
                            <li><Link href="#">3D game development</Link></li>
                            <li><Link href="#">Blockchain game development</Link></li>
                            <li><Link href="#">2D game development</Link></li>
                            <li><Link href="#">Hybrid app development</Link></li>
                        </ul>
                    </li>
                    <li className={styles.subMobileMenu}>
                        <Link href="#">Industries <SubMenuIcon /></Link>
                        <ul className={styles.mobilesubMenu}>
                            <li><Link href="#">Healthcare</Link></li>
                            <li><Link href="#">E-Commerce</Link></li>
                            <li><Link href="#">Education</Link></li>
                            <li><Link href="#">Banking</Link></li>
                            <li><Link href="#">Lifestyle</Link></li>
                            <li><Link href="#">Restaurants</Link></li>
                            <li><Link href="#">Travel</Link></li>
                            <li><Link href="#">Social</Link></li>
                            <li><Link href="#">Entertainment</Link></li>
                            <li><Link href="#">Game</Link></li>
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