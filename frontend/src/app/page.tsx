import styles from "./page.module.css";
import Hero from "@/components/sections/Hero/Hero";
import Features from "@/components/sections/Features/Features";
import Services from "@/components/sections/Services/Services";
import Pricing from "@/components/sections/Pricing/Pricing";
import Workflow from "@/components/sections/Workflow/Workflow";
import GetStarted from "@/components/sections/GetStarted/GetStarted";

export default function Home() {
  return (
    <main className={styles.mainContent}>
      {/* HeroSection */}
      <Hero />

      {/* FeaturesSection */}
      <Features />

      {/* ServicesSection */}
      <Services />

      {/* PricingSection */}
      <Pricing />

      {/* WorkflowSection */}
      <Workflow />

      {/* GetStartedSection */}
      <GetStarted />
    </main>
  );
}
