import Banner from "../services/banner";
import BannerData from "@/src/app/mobile-application-development-services/data/data";

export default function Page() {
  console.log('BannerData:', BannerData);
  return (
    <>
      <Banner data={BannerData} />
    </>
  );
}
