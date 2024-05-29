import ExpertsLayoutContainer from "@/components/ExpertsLayoutContainer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={"flex flex-col justify-center items-center"}>
      <h1 className="text-xl md:text-2xl mt-[100px] text-center font-bold from-green-200 via-gray-100 to-green-200 bg-gradient-to-r bg-clip-text text-transparent  max-w-80 md:max-w-screen-md mx-auto">
        Curiosity Unleashed: Ask, Explore, and Learn from the Giants of Science.
      </h1>
      <ExpertsLayoutContainer />
      <Footer />
    </div>
  );
}
