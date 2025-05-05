import ConceptSection from "./section/concept-section";
import ExampleSection from "./section/example-section";
import FeatureSection from "./section/feature-section";
import FooterSection from "./section/footer-section";
import PreviewSection from "./section/preview-section";
import ProfileSection from "./section/profile-section";
import TitleSection from "./section/title-section";
import BlurSection from "./section/blur-section";
import { useIsMobile } from "@/hooks/use-mobile";

export function LandingPage() {
  const isMobile = useIsMobile();

  return (
    <main
      className={`${
        !isMobile ? "snap-y snap-mandatory overflow-y-scroll h-screen" : ""
      }`}
    >
      <div className={!isMobile ? "snap-start h-screen" : ""}>
        <TitleSection />
      </div>

      <div className={!isMobile ? "snap-start" : ""}>
        <ConceptSection />
      </div>
      <BlurSection />

      <div className={!isMobile ? "snap-start" : ""}>
        <FeatureSection />
      </div>

      <div className={!isMobile ? "snap-start" : ""}>
        <ExampleSection />
      </div>

      <div className={!isMobile ? "snap-start" : ""}>
        <PreviewSection />
      </div>

      <div className={!isMobile ? "snap-start" : ""}>
        <ProfileSection />
      </div>

      <div className={!isMobile ? "snap-start" : ""}>
        <FooterSection />
      </div>
    </main>
  );
}
