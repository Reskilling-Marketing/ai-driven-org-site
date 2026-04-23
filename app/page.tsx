import AIOrg from "@/components/AIOrg";
import FinalCTA from "@/components/FinalCTA";
import Hero from "@/components/Hero";
import Outcomes from "@/components/Outcomes";
import Principles from "@/components/Principles";
import Problem from "@/components/Problem";
import Proof from "@/components/Proof";
import ProofClosing from "@/components/ProofClosing";
import Services from "@/components/Services";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Solution from "@/components/Solution";
import Target from "@/components/Target";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Target />
        <Problem />
        <Solution />
        <Proof />
        <AIOrg />
        <Services />
        <Outcomes />
        <Principles />
        <ProofClosing />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
