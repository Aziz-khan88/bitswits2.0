import Achieved from "../services/achieved";
import Banner from "../services/banner";
import {BannerData, Awards, AwardContent} from "@/src/app/flutter-app-development/data/data";

export default function Page() {
  return (
    <>
      <Banner data={BannerData} />
      <Achieved slides={Awards} options={OPTIONS} />
      <Achieved slides={Awards} options={OPTIONS} data={AwardContent} />
    </>
  );
}
