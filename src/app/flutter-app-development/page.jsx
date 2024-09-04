import Banner from "../services/banner";
import data from "@/src/app/flutter-app-development/data/data"

export default function Page() {
  return (
    <>
      <Banner data={data}/>
    </>
  );
}
