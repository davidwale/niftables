import Navbar from "./components/navbar";
import TopContainer from "./pages/top-container";
import SecondContainer from "./pages/second-container";
import VisionContainer from "./pages/vision-container";

export default function Home() {
  return (
    // 
    <div className="bg-black">
      <Navbar />
      <TopContainer />
      <SecondContainer />
      <VisionContainer />
    </div>
  );
}
