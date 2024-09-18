import Process from "@/src/app/home/components/process";
import Banner from "@/src/app/home/components/banner";
import CaseStudy from "@/src/app/home/components/casestudy";
import CompanyInfo from "@/src/app/home/components/companyinfo";
import DigitalCta from "@/src/app/home/components/digitalcta";
import ExtendedServices from "@/src/app/home/components/extendedservices";
import HomeServices from "@/src/app/home/components/homeservices";
import Testimonial from "@/src/app/home/components/testimonial";
import Solutions from "@/src/app/home/components/solutions";
import Engagement from "@/src/app/home/components/engagement";
import Faqs from "@/src/app/home/components/faqs";
import IdeaCta from "@/src/app/services/ideacta";
import Industries from "@/src/app/home/components/industries";
import { Automotive, ECommerce, Education, Food, Healthcare, Insurance, Music, RealEstate, SocialMedia } from "@/src/app/app-constants"

const IdeaCtaContent = {
  title: (<>Let’s Change<br /> The World With Your</>),
  text: (<> App <span>Idea!</span></>),
  formtitle: (<>Let’s Create An Amazing<br /> Mobile App Together!</>)
}

const OPTIONS = { loop: true, align: 'center' }
const SLIDES = [
  {
    title: "Healthcare",
    icon: <Healthcare />,
    txt: "Lorem ipsum dolor sit amet consectetur Risus interdum sed turpis nunc nulla neque blandit Risus interdum sed turpis interdum sed turpis nuncsed turpis nunc nulla sed turpis nuncsed turpis nunc nulla."
  },
  {
    title: "Food",
    icon: <Food />,
    txt: "Lorem ipsum dolor sit amet consectetur Risus interdum sed turpis nunc nulla neque blandit Risus interdum sed turpis interdum sed turpis nuncsed turpis nunc nulla sed turpis nuncsed turpis nunc nulla."
  },
  {
    title: "Education",
    icon: <Education />,
    txt: "Lorem ipsum dolor sit amet consectetur Risus interdum sed turpis nunc nulla neque blandit Risus interdum sed turpis interdum sed turpis nuncsed turpis nunc nulla sed turpis nuncsed turpis nunc nulla."
  },
  {
    title: "Real Estate",
    icon: <RealEstate />,
    txt: "Lorem ipsum dolor sit amet consectetur Risus interdum sed turpis nunc nulla neque blandit Risus interdum sed turpis interdum sed turpis nuncsed turpis nunc nulla sed turpis nuncsed turpis nunc nulla."
  },
  {
    title: "Automotive",
    icon: <Automotive />,
    txt: "Lorem ipsum dolor sit amet consectetur Risus interdum sed turpis nunc nulla neque blandit Risus interdum sed turpis interdum sed turpis nuncsed turpis nunc nulla sed turpis nuncsed turpis nunc nulla."
  },
  {
    title: "Music",
    icon: <Music />,
    txt: "Lorem ipsum dolor sit amet consectetur Risus interdum sed turpis nunc nulla neque blandit Risus interdum sed turpis interdum sed turpis nuncsed turpis nunc nulla sed turpis nuncsed turpis nunc nulla."
  },
  {
    title: "Social Media",
    icon: <SocialMedia />,
    txt: "Lorem ipsum dolor sit amet consectetur Risus interdum sed turpis nunc nulla neque blandit Risus interdum sed turpis interdum sed turpis nuncsed turpis nunc nulla sed turpis nuncsed turpis nunc nulla."
  },
  {
    title: "Insurance",
    icon: <Insurance />,
    txt: "Lorem ipsum dolor sit amet consectetur Risus interdum sed turpis nunc nulla neque blandit Risus interdum sed turpis interdum sed turpis nuncsed turpis nunc nulla sed turpis nuncsed turpis nunc nulla."
  },
  {
    title: "eCommerce",
    icon: <ECommerce />,
    txt: "Lorem ipsum dolor sit amet consectetur Risus interdum sed turpis nunc nulla neque blandit Risus interdum sed turpis interdum sed turpis nuncsed turpis nunc nulla sed turpis nuncsed turpis nunc nulla."
  }
]
export default function Page() {
  return (
    <>
      <Banner />
      <CompanyInfo />
      <HomeServices />
      <CaseStudy />
      <ExtendedServices />
      <DigitalCta />
      <Process />
      <Testimonial />
      <Solutions />
      <Engagement />
      <Industries slides={SLIDES} options={OPTIONS} />
      <Faqs />
      <IdeaCta data={IdeaCtaContent} />
    </>
  );
}

