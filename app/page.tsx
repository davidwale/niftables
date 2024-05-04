import Navbar from "./components/navbar";
import TopContainer from "./pages/top-container";
import SecondContainer from "./pages/second-container";
import VisionContainer from "./pages/vision-container";
import TokenContainer from "./pages/token-container";
import MarketContainer from "./pages/market-container";

export default function Home() {
  return (
    // 
    <div className="bg-black">
      <Navbar />
      <div className="px-10 lg:px-40">
      <TopContainer />
      <SecondContainer />
      <VisionContainer />
      <TokenContainer />
      </div>
      <MarketContainer />
    </div>
  );
}
