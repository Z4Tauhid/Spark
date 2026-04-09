import Image from "next/image";
import HeroCarousel from "./HomeComponents/HeroCarousel";
import Programs from "./HomeComponents/Programs";
import ImpactSection from "./HomeComponents/ImpactSection";
import CTASection from "./HomeComponents/CTASection";

export default function Home() {
  return (
    <div >
      <HeroCarousel></HeroCarousel>
      <Programs></Programs>
      <ImpactSection></ImpactSection>
      <CTASection></CTASection>
    </div>
  );
}
