import Banner from "../services/banner";
import BannerData from "@/src/app/flutter-app-development/data/data";

export default function Page() {
  return (
    <>
      <Banner data={BannerData} />
    </>
  );
}
