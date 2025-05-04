import BlurSection from "./section/blur-section";
import ConceptSection from "./section/concept-section";
import ExampleSection from "./section/example-section";
import FeatureSection from "./section/feature-section";
import FooterSection from "./section/footer-section";
import ProfileSection from "./section/profile-section";
import TitleSection from "./section/title-section";

export function LandingPage() {
  return (
    <main className="min-h-screen">
      <TitleSection />
      <ConceptSection />
      <BlurSection />
      <FeatureSection />
      <ExampleSection />
      <img src="landing/preview-section.webp" />
      <ProfileSection />
      <FooterSection />
    </main>
  );
}
