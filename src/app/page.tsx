"use client";
import GeniusLayoutContainer from "@/components/GeniusLayoutContainer";
import Footer from "@/components/Footer";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { TextPopUp } from "@/components/ui/text-popup";

export default function Home() {
  return (
    <AuroraBackground className={"bg-green-900"}>
      <div className={"flex flex-col justify-center items-center"}>
        <TextPopUp>
          <h1 className="text-xl md:text-2xl mt-[100px] text-center font-bold from-green-200 via-gray-100 to-green-200 bg-gradient-to-r bg-clip-text text-transparent  max-w-80 md:max-w-screen-md mx-auto">
            Unlock the Genius Within: Engage with Legendary Scientists
          </h1>
        </TextPopUp>
        <GeniusLayoutContainer />
        <Footer />
      </div>
    </AuroraBackground>
  );
}
