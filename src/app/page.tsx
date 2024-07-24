import Courses from "@/components/Courses";
import HeroSection from "@/components/HeroSection";
import ReviewCards from "@/components/ReviewCards";
import UpcomingClasses from "@/components/UpcomingClasses";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home(){
  return(
    <div className="min-h-screen bg-black/[0.89] antialiased bg-grid-white/[0.3]">
    <HeroSection/>
    <Courses/>
    <WhyChooseUs/>
    <ReviewCards/>
    {/* <UpcomingClasses/> */}
    </div>

  )
}