"use client"

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
import { useEffect, useState } from "react"



const Page = ({ params }) => {
    const [dataset, setDataset] = useState("");

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await import(`./data/${params.casestudy}`);
                setDataset(data);
            } catch (error) {
                console.error("Error loading data:", error);
            }
        };

        loadData();
    }, [params.casestudy]);

    // Check if dataset is still null
    if (!dataset) return <div></div>; // Ensure data is loaded

    return (
        <>
            <Banner data={dataset.BannerData} />
            <Overview data={dataset.OverviewData} />
            <Features data={dataset.FeaturesData} />
            <Problem data={dataset.ProblemData} />
            <CaseStudycta />
            <Solution data={dataset.SolutionData} />
            <ScrollingSection />
            <TechStack />
            <Results data={dataset.ResultData} />
            <CatLast />
        </>
    )
}

export default Page