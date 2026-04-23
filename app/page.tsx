import LuxArchitecture from "@/components/LuxArchitecture";
import LuxClientFit from "@/components/LuxClientFit";
import LuxDialogue from "@/components/LuxDialogue";
import LuxEvidence from "@/components/LuxEvidence";
import LuxFooter from "@/components/LuxFooter";
import LuxHeader from "@/components/LuxHeader";
import LuxHero from "@/components/LuxHero";
import LuxPhilosophy from "@/components/LuxPhilosophy";
import LuxStatement from "@/components/LuxStatement";
import LuxStickyCTA from "@/components/LuxStickyCTA";
import LuxWhyChosen from "@/components/LuxWhyChosen";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <LuxHeader />
      <main className="flex-1 pb-[calc(5.5rem+env(safe-area-inset-bottom))] md:pb-0">
        <LuxHero />
        <LuxStatement />
        <LuxWhyChosen />
        <LuxArchitecture />
        <LuxEvidence />
        <LuxPhilosophy />
        <LuxClientFit />
        <LuxDialogue />
      </main>
      <LuxStickyCTA />
      <LuxFooter />
    </div>
  );
}
