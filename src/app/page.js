import Herosection from "@/components/Herosection";
import OurMenu from "@/components/OurMenu";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <main className="bg-white">
     <Herosection/>
     <StatsSection/>
     <OurMenu/>
    </main>
  );
}
