
import Slider from './component/Slider.jsx'

import image1 from "media/awards/1.webp";
import image2 from "media/awards/2.webp";
import image3 from "media/awards/3.webp";

import styles from "@/styles/murtaza/slider.module.scss";

const slidesData = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
    // Add more slides as needed
];

export default function Page() {
    return (
        <Slider slides={slidesData} />
    )
}