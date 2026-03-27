import { FaWhatsapp } from "react-icons/fa";
import { TitleBanc } from "./textBanc/TitleBanc";

export function WhatsappButton() {
    return (
        <a
        href="https://wa.me/559191834527"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 flex items-center transition-transform hover:scale-110 active:scale-95"
        aria-label="Entre em contato via WhatsApp"
        >
        <div className="absolute inset-0 rounded-full bg-brand-light opacity-10 animate-ping"></div>
        <TitleBanc as="h2" className="flex items-center rounded-l-full bg-brand-light px-5 pr-8 py-2 text-md font-bold tracking-widerext-white whitespace-nowrap -mr-6 z-0">
          ENTRE EM CONTATO
        </TitleBanc>

        <div className="relative flex items-center justify-center rounded-full bg-brand-light h-18 w-18 shrink-0 z-10">
          <FaWhatsapp className="h-12 w-12 text-white relative z-10" size={32} />
        </div>
      </a>
    )
}
