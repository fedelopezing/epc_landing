import CtaComponents from "@/components/Cta.tsx";
import ContactComponents from "@/components/Contact.tsx";
import HeroComponents from "@/components/Hero.tsx";
import ServiceComponents from "@/components/Service.tsx";
import TeamComponents from "@/components/Teams.tsx";
import WorksComponents from "@/components/Works.tsx";
import '@/styles/app.css'

const LandingWrapper = () => {
  return (
    <div className="fade-in">
      <HeroComponents />
      <ServiceComponents />
      <WorksComponents />
      <CtaComponents />
      <TeamComponents />
      <ContactComponents />
    </div>
  );
};

export default LandingWrapper;