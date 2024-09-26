import {
    BannerData, 
    OverviewData, 
    FeaturesData,
    ProblemData, 
    SolutionData,
    ResultData
  } from "@/src/app/case-studies/singles-up/data/data";
  
import Banner from "@/src/app/case-studies/components/banner"
import Problem from "@/src/app/case-studies/components/problem"
import Overview from "@/src/app/case-studies/components/overview"
import Features from "@/src/app/case-studies/components/features"
import Solution from "@/src/app/case-studies/components/solution"
import CaseStudycta from "@/src/app/case-studies/components/casestudycta"
import ScrollingSection from "@/src/app/case-studies/components/scrollingsection"
import TechStack from "@/src/app/case-studies/components/techstack"
import Results from "@/src/app/case-studies/components/results"
import CatLast from "@/src/app/case-studies/components/catlast"



const Page = () => {
    return (
        <>
            <Banner data={BannerData} />
            <Overview data={OverviewData}/>
            <Features data={FeaturesData}/>
            <Problem data={ProblemData}/>
            <CaseStudycta />
            <Solution data={SolutionData}/>
            <ScrollingSection />
            <TechStack />
            <Results data={ResultData}/>
            <CatLast />
        </>
    )
}

export default Page