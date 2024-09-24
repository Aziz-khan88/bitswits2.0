// Overview Images
import overviewImage from "media/casestudies/vifty/overviewImage.webp"

// Features Images
import featuresImage from "media/casestudies/vifty/featuresImage.webp"

// Problem Images
import problemImage from "media/casestudies/vifty/problemImage.webp"

// Solution Images
import solutionImage from "media/casestudies/vifty/solutionImage.webp"

// Result Images
import resultImage from "media/casestudies/vifty/resultImage.webp"

export const BannerData = {
    subtitle: "Vifty",
    title: "Connect, share, and discover",
}

export const OverviewData = {
    image: overviewImage.src,
}

export const FeaturesData = {
    image: featuresImage.src,
    background: 'linear-gradient(180deg, #7268DB -14.33%, #1B1464 86.95%, #1B1464 131.4%)',
    boxShadow: '15px 20px 40px rgba(43, 83, 142, 0.3)'
}

export const ProblemData = {
    image: problemImage.src,
}

export const SolutionData = {
    image: solutionImage.src,
}

export const ResultData = {
    background: `linear-gradient(270deg, rgba(246, 136, 37, 0) -7.2%, rgba(246, 136, 37, 0.55) 25.99%, #EB3171 76.61%), url(${resultImage.src})`,
}