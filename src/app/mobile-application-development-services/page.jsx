import Achieved from "../services/achieved";
import Banner from "../services/banner";
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
} from "@/src/app/mobile-application-development-services/data/data";
import Cuttingedge from "../services/cuttingedge";
import CaseStudySection from "../services/casestudy";
import AppIdea from "../services/appidea";
import Process from "../services/process";
import Technologies from "../services/technologies";
import Testimonial from "../services/testimonial";
import WhyChoose from "../services/whychoose";
import Risks from "../services/risks";
import Offers from "../services/offers";
import Fueling from "../services/fueling";
import CtaEstimated from "../services/cat";
import TechStack from "../services/techstack";
import Industries from "../services/industries";
import IdeaCta from "../services/ideacta";
import Faqs from "../services/faqs";
import Blogs from "../services/blogs";
import Location from "../services/location";

const OPTIONS = { align: 'start', loop: "true" }

export default function Page() {

  return (
    <>
      <Banner data={BannerData} />
      <Achieved slides={Awards} options={OPTIONS} data={AwardContent} />
      <Cuttingedge data={CuttingedgeContent} list={CuttingedgeList} />
      <CaseStudySection data={caseStudiesContent} caseStudies={caseStudiesList} />
      <AppIdea data={AppIdeaContent} />
      <WhyChoose data={WhyChooseContent} list1={WhyChooseList1} list2={WhyChooseList2} />
      <Process data={ProcessContent} tabs={ProcessTabs} />
      <Technologies data={TechnologiesContent} list={TechnologiesIcons} />
      <Testimonial data={TestimonialContent} list={TestimonialSLIDES} />
      <Risks data={RisksContent} />
      <Offers bg={true} data={OffersContent} tabs={OffersTabs} />
      <Fueling data={FuelingContent} />
      <CtaEstimated data={CtaEstimatedContent} />
      <TechStack data={TechStackContent} tabs={TechStackTabs}/>
      <Industries data={IndustriesContent} list={IndustriesList}/>
      <IdeaCta data={IdeaCtaContent}/>
      <Faqs data={FaqsContent} list={FaqsList}/>
      <Blogs data={BlogsContent} list={BlogsList}/>
      <Location />
    </>
  );
}
