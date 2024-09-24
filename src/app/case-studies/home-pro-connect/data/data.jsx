// Overview Images
import OverviewImg from "media/casestudies/home-pro-connect/OverviewImg.webp"

// Features Images
import FeaturesImg from "media/casestudies/home-pro-connect/FeaturesLogo.webp"

// Problem Images
import ProblemImg from "media/casestudies/home-pro-connect/ProblemImg.webp"

// Solution Images
import SolutionImg from "media/casestudies/home-pro-connect/SolutionImg.webp"

// Result Images
import ResultImg from "media/casestudies/home-pro-connect/ResultImg.webp"



export const BannerData = {
    subtitle: "HomeProConnect",
    title: "Connect, share, and discover",
}

export const OverviewData = {
    image: OverviewImg.src,
}

export const FeaturesData = {
    image: FeaturesImg.src,
    background: 'linear-gradient(180deg, #6F7F98 -14.33%, #233040 86.95%, #233040 131.4%)',
    boxShadow: '15px 20px 40px rgba(43, 83, 142, 0.3)'
}

export const ProblemData = {
    image: ProblemImg.src,
}

export const SolutionData = {
    image: SolutionImg.src,
}

export const ResultData = {
    background: `linear-gradient(270deg, rgba(93, 109, 132, 0.25) -18.54%, #233040 65.63%), url(${ResultImg.src})`,
}
