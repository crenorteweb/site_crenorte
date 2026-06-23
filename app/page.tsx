import Header from "@/components/Header";
import Banner from "@/components/Banner";
import { WhatsappButton } from "@/components/WhatsappButton";
import { Footer } from "@/components/Footer";
import { FormSection } from "@/components/FormSection";
import { ConditionsSection } from "@/components/ConditionsSection";
import { InstagramSection } from "@/components/InstagramSection";
import { Questions } from "@/components/Questions";
import { RecrutamentoCTA } from "@/components/RecrutamentoCTA";
import { NovasUnidades } from "@/components/NovasUnidades";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-dark font-banco-amazonia-texto text-white">
      {/* HEADER */}
      <Header />

      {/* TOP SECTION (WHITE BG) */}
      <Banner />

      {/* MID SECTION (DARK BG) */}
      <FormSection />

      {/* CONDITIONS SECTION */}
      <ConditionsSection />

      {/* INSTAGRAM SECTION */}
      <InstagramSection />

      {/* NOVAS UNIDADES SECTION */}
      <NovasUnidades />

      {/* QUESTIONS SECTION */}
      <Questions />

      {/* RECRUITMENT CTA SECTION */}
      <RecrutamentoCTA />

      {/* FOOTER */}
      <Footer />
      
      {/* FLOATING WHATSAPP BUTTON (AS REQUESTED) */}
      <WhatsappButton />
    </div>
  );
}
