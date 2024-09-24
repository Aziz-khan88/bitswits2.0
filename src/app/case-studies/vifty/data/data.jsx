// Overview Images
import overview from "media/casestudies/vifty/overviewimage.webp"

// Features Images
import features from "media/casestudies/vifty/featuresimage.webp"

// Problem Images
import problem from "media/casestudies/vifty/problemimage.webp"

// Solution Images
import solution from "media/casestudies/vifty/solutionimage.webp"

// Result Images
import result from "media/casestudies/vifty/resultimage.webp"

export const BannerData = {
    subtitle: "Vifty",
    title: "Connect, share, and discover",
}

export const OverviewData = {
    image: overview.src,
}

export const FeaturesData = {
    image: features.src,
    background: 'linear-gradient(180deg, #7268DB -14.33%, #1B1464 86.95%, #1B1464 131.4%)',
    boxShadow: '15px 20px 40px rgba(43, 83, 142, 0.3)'
}

export const ProblemData = {
    image: problem.src,
}

export const SolutionData = {
    image: solution.src,
}

export const ResultData = {
    background: `linear-gradient(270deg, rgba(246, 136, 37, 0) -7.2%, rgba(246, 136, 37, 0.55) 25.99%, #EB3171 76.61%), url(${result.src})`,
}