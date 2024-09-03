import Banner from "@/src/app/services/banner";
import Achieved from "@/src/app/services/achieved";
import Cuttingedge from "@/src/app/services/cuttingedge";
import AppIdea from "@/src/app/services/appidea";
import WhyChoose from "@/src/app/services/whychoose";
import Technologies from "@/src/app/services/technologies";
import Risks from "@/src/app/services/risks";
import Process from "@/src/app/services/process";
import Testimonial from "@/src/app/services/testimonial";
import Offers from "@/src/app/services/offers";
import Fueling from "@/src/app/services/fueling";
import CtaEstimated from "@/src/app/services/cat";
import TechStack from "@/src/app/services/techstack";
import Industries from "@/src/app/services/industries";
import IdeaCta from "@/src/app/services/ideacta";
import Faqs from "@/src/app/services/faqs";
import Blogs from "@/src/app/services/blogs";
import Location from "@/src/app/services/location";
import CaseStudySection from "@/src/app/services/casestudy";

// Awards
import IMG01 from "media/awards/1.webp"
import IMG02 from "media/awards/2.webp"
import IMG03 from "media/awards/3.webp"
import IMG04 from "media/awards/4.webp"
import IMG05 from "media/awards/5.webp"
import IMG06 from "media/awards/6.webp"
import IMG07 from "media/awards/7.webp"


const OPTIONS = { align: 'start', loop: "true" }

const Awards = [
  {
    title: "Horizon Interactive Gold Award",
    year: "2024",
    img: IMG01.src
  }, {
    title: "Top Rated App Development Companies in US",
    year: "2024",
    img: IMG02.src
  },
  {
    title: "Top App Performers Award",
    year: "2023",
    img: IMG05.src
  },
  {
    title: "Top Mobile App Development Company",
    year: "2023",
    img: IMG06.src
  },
  {
    title: "Dot COMM Platinum Award",
    year: "2023",
    img: IMG07.src
  },
  {
    title: "Clutch Global Company Award",
    year: "2022",
    img: IMG03.src
  },
  {
    title: "High User Satisfaction Award",
    year: "2022",
    img: IMG04.src
  }

]


export default function Home() {
  return (
    <>
      <Banner />
      <Achieved slides={Awards} options={OPTIONS} />
      <Cuttingedge />
      <CaseStudySection />
      <AppIdea />
      <WhyChoose />
      <Process />
      <Technologies />
      <Testimonial />
      <Risks />
      <Offers bg={true} />
      <Fueling />
      <CtaEstimated />
      <TechStack />
      <Industries />
      <IdeaCta />
      <Faqs />
      <Blogs />
      <Location />
    </>
  );
}
