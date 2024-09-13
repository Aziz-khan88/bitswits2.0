
"use client"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"
import { MainLogo, WhiteLogo } from "@/src/app/app-constants"
import Navigation from "@/src/app/layout/navigation"
import styles from "@/styles/layout/header.module.scss"
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const pathname = usePathname();
    const isWhiteLogo = pathname === '/mobile-game-development-company' || pathname === '/real-estate-app-development-company' || pathname === '/social-media-app-development-company' || pathname === '/music-app-development-company' || pathname === '/ecommerce-app-development' || pathname === '/education-app-development' || pathname === '/automotive-software-development' || pathname === '/healthcare-app-development-services' ;


    return (
        <section className={`${styles.headerSection} ${scrolled ? styles.active : ''}`} >
            < Container className="h-100" >
                <Row className="h-100">
                    <Col md={2} xs={6} sm={6} className="m-auto">
                        <Link href="/">
                            {isWhiteLogo && !scrolled ? (
                                <WhiteLogo />

                            ) : isWhiteLogo && scrolled ? (
                                <MainLogo />
                            ) : (
                                <MainLogo />
                            )
                            }
                        </Link>
                    </Col>
                    <Col md={10} xs={6} sm={6} className="m-auto">
                        <Navigation isWhiteLogo={isWhiteLogo} scrolled={scrolled} />
                    </Col>
                </Row>
            </Container >
        </section >
    )
}

export default Header