"use client";

import { Col, Container, Row } from "react-bootstrap";
import useEmblaCarousel from 'embla-carousel-react';
import ClassNames from "embla-carousel-class-names";
import { useEffect, useState } from "react";

const options = {
    loop: true,
    align: 'center',
    containScroll: 'keepSnaps',
    slidesToScroll: 1,
    draggable: true,
};

const Slider = () => {
    const [emblaRef, embla] = useEmblaCarousel(options, [ClassNames()]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [slides] = useState(6); // Total number of slides

    useEffect(() => {
        if (!embla) return;

        const updateIndex = () => {
            setSelectedIndex(embla.selectedScrollSnap());
        };

        embla.on("select", updateIndex);

        return () => embla.off("select", updateIndex);
    }, [embla]);

    const getSlideClass = (index) => {
        const prevIndex = (selectedIndex - 1 + slides) % slides;
        const nextIndex = (selectedIndex + 1) % slides;

        let classes = '';
        if (index === selectedIndex) {
            classes += 'is-in-view slide-2 '; // Current slide
        } else if (index === prevIndex) {
            classes += 'is-in-view slide-1 '; // Previous slide
        } else if (index === nextIndex) {
            classes += 'is-in-view slide-3 '; // Next slide
        }
        return classes.trim();
    };

    return (
        <section className="MurtazaSlider pt-100">
            <Container>
                <Row>
                    <Col>
                        <h1>Why Choose Us</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <section className="embla">
                            <div className="embla__viewport" ref={emblaRef}>
                                <div className="embla__container">
                                    {Array.from({ length: slides }, (_, index) => (
                                        <div
                                            className={`embla__slide ${getSlideClass(index)}`}
                                            key={index}
                                        >
                                            <div className="box"><h2>Slide {index + 1}</h2></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="embla__dots">
                                {Array.from({ length: slides }, (_, index) => (
                                    <button
                                        key={index}
                                        className={`embla__dot ${selectedIndex === index ? 'is-active' : ''}`}
                                        onClick={() => embla.scrollTo(index)}
                                    ></button>
                                ))}
                            </div>
                        </section>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Tailored Animation Solution</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Fringilla orci vitae vel cursus. Quis dolor lectus mauris ut velit sit Quis dolor lectus.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Slider;
