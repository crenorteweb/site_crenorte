import type { ReactNode } from "react";
import {
  DollarSign,
  CalendarDays,
  Users,
  UserSquare2,
  Percent,
  Unlock,
  Layers,
  ClipboardList,
  type LucideIcon,
} from "lucide-react";
import { TitleBanc } from "./textBanc/TitleBanc";
import { TextBanc } from "./textBanc/TextBanc";
import { Reveal } from "./ui/Reveal";
import { SectionBadge } from "./ui/SectionBadge";

type ConditionCard = {
  icon: LucideIcon;
  title: string;
  description: ReactNode;
};

const modalidades: ConditionCard[] = [
  { icon: Users, title: "GRUPO SOLIDÁRIO", description: "De 3 a 10 pessoas" },
  { icon: UserSquare2, title: "INDIVIDUAL", description: <>Inscritos<br />no cadúnico</> },
];

const condicoes: ConditionCard[] = [
  { icon: DollarSign, title: "ATÉ R$ 10 MIL", description: "Capital de giro" },
  { icon: CalendarDays, title: "PAGAMENTO", description: "De 03 a 12 vezes" },
  { icon: Percent, title: "TAXA DE JUROS", description: "De 0.5 a 1% ao mês" },
  { icon: Unlock, title: "SEM FIADOR", description: "Sem garantia" },
];

function ConditionCardItem({ icon: Icon, title, description }: ConditionCard) {
  return (
    <div className="group flex flex-col items-center justify-center rounded-3xl bg-brand-accent p-6 text-center text-brand-dark shadow-lg shadow-brand-accent/20 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-accent/30">
      <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-brand-dark text-brand-accent transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-7 w-7" strokeWidth={2} />
      </div>
      <TitleBanc as="h4" className="text-base md:text-lg font-black leading-tight uppercase">
        {title}
      </TitleBanc>
      <TextBanc className="mt-1 text-xs font-medium md:text-sm">{description}</TextBanc>
    </div>
  );
}

export function ConditionsSection() {
    return (
        <section className="relative w-full overflow-hidden bg-white px-4 py-16 md:py-24">
            <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-accent/5 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">
                <Reveal className="mb-10 flex flex-col items-center gap-3 text-center">
                    <SectionBadge icon={Layers} label="Como funciona" variant="light" />
                    <TitleBanc as="h2" className="text-2xl uppercase md:text-3xl font-bold tracking-tight text-brand-dark">
                        Modalidades
                    </TitleBanc>
                </Reveal>
                <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-2xl mx-auto mb-16">
                    {modalidades.map((card, index) => (
                        <Reveal key={card.title} delay={index * 100}>
                            <ConditionCardItem {...card} />
                        </Reveal>
                    ))}
                </div>
            </div>
            <div className="relative mx-auto max-w-7xl">
                <Reveal className="mb-10 flex flex-col items-center gap-3 text-center">
                    <SectionBadge icon={ClipboardList} label="Condições" variant="light" />
                    <TitleBanc as="h2" className="text-2xl uppercase md:text-3xl font-bold tracking-tight text-brand-dark">
                        Conheça as condições
                    </TitleBanc>
                </Reveal>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 lg:gap-8">
                    {condicoes.map((card, index) => (
                        <Reveal key={card.title} delay={index * 100}>
                            <ConditionCardItem {...card} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
