import Blogs from "@/src/app/services/blogs";
import Faqs from "@/src/app/services/faqs";
import Fueling from "@/src/app/services/fueling";
import IdeaCta from "@/src/app/services/ideacta";
import Location from "@/src/app/services/location";
import Offers from "@/src/app/services/offers";
import Process from "@/src/app/services/process";
import TechStack from "@/src/app/services/techstack";
import Testimonial from "@/src/app/services/testimonial";
import WhyChoose from "@/src/app/services/whychoose";
import Activity from "@/src/app/game/activity";
import Banner from "@/src/app/game/banner";
import ContentSec from "@/src/app/game/contentsec";
import GameCta from "@/src/app/game/gamecta";
import ContentSecLG from "@/src/app/game/largecontent";
import Projectdiscuss from "@/src/app/game/projectdiscuss";
import Services from "@/src/app/game/services";

import {
    BannerData, Awards, AwardContent,
    CuttingedgeContent, CuttingedgeList,
    AppIdeaContent, caseStudiesList,
    caseStudiesContent, ProcessContent,
    WhyChooseContent, WhyChooseList1,
    WhyChooseList2, ProcessTabs, TechnologiesContent,
    TechnologiesIcons, TestimonialContent,
    TestimonialSLIDES, RisksContent,
    OffersContent, OffersTabs, FuelingContent,
    CtaEstimatedContent, TechStackTabs,
    TechStackContent, IndustriesContent,
    IndustriesList, IdeaCtaContent,
    FaqsContent, FaqsList, BlogsContent,
    BlogsList
} from "@/src/app/game/data/data";

export default function Home() {
    return (
        <>
            <Banner />
            <Activity />
            <Projectdiscuss />
            <Services />
            <Testimonial data={TestimonialContent} list={TestimonialSLIDES} />
            <GameCta />
            <ContentSec />
            <Process data={ProcessContent} tabs={ProcessTabs} />
            <WhyChoose data={WhyChooseContent} list1={WhyChooseList1} list2={WhyChooseList2} />
            <Offers bg={true} data={OffersContent} tabs={OffersTabs} />
            <ContentSecLG />
            <IdeaCta data={IdeaCtaContent} />
            <TechStack data={TechStackContent} tabs={TechStackTabs} />
            <Fueling data={FuelingContent} />
            <Faqs data={FaqsContent} list={FaqsList} />
            <Blogs data={BlogsContent} list={BlogsList} />
            <Location />
        </>
    );
}
