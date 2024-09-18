
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

    // const pathname = usePathname();
    // const isWhiteLogo = pathname === '/';


    return (
        <section className={`${styles.headerSection} ${scrolled ? styles.active : ''}`} >
            < Container className="h-100" >
                <Row className="h-100">
                    <Col md={2} xs={6} sm={6} className="m-auto">
                        <Link href="/">
                            {/* {isWhiteLogo && !scrolled ? (
                                <WhiteLogo />

                            ) : isWhiteLogo && scrolled ? (
                                <MainLogo />
                            ) : (
                                <MainLogo />
                            )
                            } */}
                            <WhiteLogo />
                        </Link>
                    </Col>
                    <Col md={10} xs={6} sm={6} className="m-auto">
                        {/* <Navigation isWhiteLogo={isWhiteLogo} scrolled={scrolled} /> */}
                        <Navigation scrolled={scrolled} />
                    </Col>
                </Row>
            </Container >
        </section >
    )
}

export default Header