import {
  BannerData, CompanyInfoContent, ProcessContent, ProcessList,
  TestimonialContent, TestimonialSLIDES,  FaqsContent,
  FaqsList, IdeaCtaContent, DigitalCtaContent
} from "@/src/app/new-ecommerce-development/data/data";
import dynamic from "next/dynamic";

const Process = dynamic(() => import("@/src/app/home/process"));
const Banner = dynamic(() => import("@/src/app/home/banner"));
const CompanyInfo = dynamic(() => import("@/src/app/home/companyinfo"));
const DigitalCta = dynamic(() => import("@/src/app/home/digitalcta"));
const Testimonial = dynamic(() => import("@/src/app/home/testimonial"));
const Faqs = dynamic(() => import("@/src/app/home/faqs"));
const IdeaCta = dynamic(() => import("@/src/app/services/ideacta"));


const OPTIONS = { loop: true, align: 'center' }

export default function Page() {
  return (
    <>
      <Banner data={BannerData} />
      <CompanyInfo data={CompanyInfoContent} />
      <Process data={ProcessContent} list={ProcessList} />
      <DigitalCta data={DigitalCtaContent} />
      <Testimonial data={TestimonialContent} list={TestimonialSLIDES} />
      <Faqs data={FaqsContent} list={FaqsList} />
      <IdeaCta data={IdeaCtaContent} />

    </>
  );
}

