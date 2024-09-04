import Blogs from "../services/blogs";
import Faqs from "../services/faqs";
import Fueling from "../services/fueling";
import IdeaCta from "../services/ideacta";
import Location from "../services/location";
import Offers from "../services/offers";
import Process from "../services/process";
import TechStack from "../services/techstack";
import Testimonial from "../services/testimonial";
import WhyChoose from "../services/whychoose";
import Activity from "./activity";
import Banner from "./banner";
import ContentSec from "./contentsec";
import GameCta from "./gamecta";
import ContentSecLG from "./largecontent";
import Projectdiscuss from "./projectdiscuss";
import Services from "./services";

export default function Home() {
    return (
        <>
            <Banner />
            <Activity />
            <Projectdiscuss />
            <Services />
            <Testimonial />
            <GameCta />
            <ContentSec />
            <Process />
            <WhyChoose />
            <Offers />
            <ContentSecLG />
            <IdeaCta />
            <TechStack />
            <Fueling />
            <Faqs />
            <Blogs />
            <Location />
        </>
    );
}
