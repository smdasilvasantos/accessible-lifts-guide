import HomeHero from "@/components/home/HomeHero";
import HomeGuide from "@/components/home/HomeGuide";
import HomeSolutions from "@/components/home/HomeSolutions";
import HomeHowItWorks from "@/components/home/HomeHowItWorks";
import HomePartners from "@/components/home/HomePartners";
import HomeResources from "@/components/home/HomeResources";
import HomeProfessionals from "@/components/home/HomeProfessionals";
import SiteFooter from "@/components/SiteFooter";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <HomeHero />
      <HomeGuide />
      <HomeSolutions />
      <HomeHowItWorks />
      <HomePartners />
      <HomeResources />
      <HomeProfessionals />
      <SiteFooter />
    </div>
  );
};

export default Home;
