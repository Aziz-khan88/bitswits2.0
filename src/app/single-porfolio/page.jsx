import Banner from "./components/banner"
import Problem from "./components/problem"
import Overview from "./components/overview"
import Features from "./components/features"
import Solution from "./components/solution"
import CaseStudycta from "./components/casestudycta"
import ScrollingSection from "./components/scrollingsection"
import TechStack from "./components/techstack"
import Results from "./components/results"
import CatLast from "./components/catlast"



const Page = () => {
    return (
        <>
            <Banner />
            <Overview />
            <Features />
            <Problem />
            <CaseStudycta />
            <Solution />
            <ScrollingSection />
            <TechStack />
            <Results />
            <CatLast />
        </>
    )
}

export default Page