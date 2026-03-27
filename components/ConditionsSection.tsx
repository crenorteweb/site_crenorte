import {
  DollarSign,
  CalendarDays,
  Users,
  UserSquare2,
  Percent,
  Unlock
} from "lucide-react";
import { TitleBanc } from "./textBanc/TitleBanc";
import { TextBanc } from "./textBanc/TextBanc";

export function ConditionsSection() {
    return (
        <section className="px-4 py-12 md:py-16 w-full bg-white">
            <div className="mx-auto max-w-7xl">
                <TitleBanc as="h2" className="mb-10 text-center text-2xl uppercase md:text-3xl font-bold tracking-tight text-brand-dark">
                    Modalidades
                </TitleBanc>
                <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-2xl mx-auto mb-12">
                    {/* Card 1 */}
                    <div className="flex flex-col items-center justify-center rounded-3xl bg-brand-accent p-6 text-center text-brand-dark shadow-lg transition-transform hover:-translate-y-1">
                    <Users className="mb-3 h-14 w-14 text-brand-dark fill-brand-dark/20" strokeWidth={1.5} />
                    <TitleBanc as="h4" className="text-base md:text-lg font-black leading-tight uppercase">GRUPO SOLIDÁRIO</TitleBanc>
                    <p className="mt-1 text-xs font-medium md:text-sm">De 3 a 10 pessoas</p>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col items-center justify-center rounded-3xl bg-brand-accent p-6 text-center text-brand-dark shadow-lg transition-transform hover:-translate-y-1">
                    <UserSquare2 className="mb-3 h-14 w-14 text-brand-dark fill-brand-dark/20" strokeWidth={1.5} />
                    <TitleBanc as="h4" className="text-base md:text-lg font-black leading-tight uppercase">INDIVIDUAL</TitleBanc>
                    <p className="mt-1 text-xs font-medium md:text-sm">Inscritos<br />no cadúnico</p>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-7xl">
                <TitleBanc as="h2" className="mb-10 text-center text-2xl uppercase md:text-3xl font-bold tracking-tight text-brand-dark">
                    Conheça as condições
                </TitleBanc>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 lg:gap-8">
                    {/* Card 1 */}
                    <div className="flex flex-col items-center justify-center rounded-3xl bg-brand-accent p-6 text-center text-brand-dark shadow-lg transition-transform hover:-translate-y-1">
                    <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-brand-dark text-brand-accent">
                        <DollarSign className="h-8 w-8" strokeWidth={3} />
                    </div>
                    <TitleBanc as="h4" className="text-base md:text-lg font-black leading-tight uppercase">ATÉ R$ 10 MIL</TitleBanc>
                    <TextBanc className="mt-1 text-xs font-medium md:text-sm">Capital de giro</TextBanc>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col items-center justify-center rounded-3xl bg-brand-accent p-6 text-center text-brand-dark shadow-lg transition-transform hover:-translate-y-1">
                    <CalendarDays className="mb-3 h-14 w-14 text-brand-dark" strokeWidth={1.5} />
                    <TitleBanc as="h4" className="text-base md:text-lg font-black leading-tight uppercase">PAGAMENTO</TitleBanc>
                    <TextBanc className="mt-1 text-xs font-medium md:text-sm">De 03 a 12 vezes</TextBanc>
                    </div>

                    {/* Card 5 */}
                    <div className="flex flex-col items-center justify-center rounded-3xl bg-brand-accent p-6 text-center text-brand-dark shadow-lg transition-transform hover:-translate-y-1">
                    <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-brand-dark text-brand-accent">
                        <Percent className="h-8 w-8" strokeWidth={3} />
                    </div>
                    <TitleBanc as="h4" className="text-base md:text-lg font-black leading-tight uppercase">TAXA DE JUROS</TitleBanc>
                    <TextBanc className="mt-1 text-xs font-medium md:text-sm">De 0.5 a 1% ao mês</TextBanc>
                    </div>

                    {/* Card 6 */}
                    <div className="flex flex-col items-center justify-center rounded-3xl bg-brand-accent p-6 text-center text-brand-dark shadow-lg transition-transform hover:-translate-y-1">
                    <Unlock className="mb-3 h-14 w-14 text-brand-dark fill-brand-dark" strokeWidth={2} />
                    <TitleBanc as="h4" className="text-base md:text-lg font-black leading-tight uppercase">SEM FIADOR</TitleBanc>
                    <TextBanc className="mt-1 text-xs font-medium md:text-sm">Sem garantia</TextBanc>
                    </div>
                </div>
            </div>
        </section>
    )
}