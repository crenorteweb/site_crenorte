import {
  CheckCircle2,
  DollarSign,
  CalendarDays,
  Users,
  UserSquare2,
  Percent,
  Unlock,
  MessageCircle
} from "lucide-react";

import Header from "@/components/Header";
import Banner from "@/components/Banner";
import { WhatsappButton } from "@/components/WhatsappButton";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-dark font-sans text-white">
      {/* HEADER */}
      <Header />

      {/* TOP SECTION (WHITE BG) */}
      <section className="bg-white text-brand-dark w-full">
        <Banner />
      </section>

      {/* MID SECTION (DARK BG) */}
      <section className="px-4 py-12 md:py-20 w-full bg-brand-dark">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:items-start lg:gap-20">

          {/* Left Text & Image */}
          <div className="flex w-full flex-col gap-6 md:w-1/2">
            <div className="overflow-hidden rounded-3xl h-64 w-full bg-[url('https://images.unsplash.com/photo-1595874246835-ab3211568224?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center">
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-white">
                MICROCRÉDITO <br />
                <span className="text-2xl md:text-3xl font-bold">RÁPIDO, SEGURO E SEM BUROCRACIA!</span>
              </h2>
              <div className="mt-4 flex items-start gap-3 md:items-center font-medium text-brand-accent">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 md:mt-0" />
                <p className="text-sm uppercase tracking-wide leading-snug">
                  FEITO PARA TRABALHADORES AUTÔNOMOS E PEQUENOS NEGÓCIOS DA AMAZÔNIA
                </p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full md:w-1/2">
            <div className="rounded-[2.5rem] border border-white/20 p-6 md:p-8 backdrop-blur-sm">
              <h3 className="mb-6 text-center text-sm font-bold uppercase tracking-wider text-white">
                SOLICITE SEU CRÉDITO AGORA
              </h3>
              <form className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="NOME COMPLETO"
                  className="w-full rounded-full bg-white px-5 py-3 text-center text-xs font-bold text-brand-dark placeholder:text-brand-dark/50 focus:outline-none focus:ring-2 focus:ring-brand-accent"
                />
                <input
                  type="text"
                  placeholder="CPF"
                  className="w-full rounded-full bg-white px-5 py-3 text-center text-xs font-bold text-brand-dark placeholder:text-brand-dark/50 focus:outline-none focus:ring-2 focus:ring-brand-accent"
                />
                <input
                  type="text"
                  placeholder="TELEFONE"
                  className="w-full rounded-full bg-white px-5 py-3 text-center text-xs font-bold text-brand-dark placeholder:text-brand-dark/50 focus:outline-none focus:ring-2 focus:ring-brand-accent"
                />
                <input
                  type="text"
                  placeholder="MUNICÍPIO"
                  className="w-full rounded-full bg-white px-5 py-3 text-center text-xs font-bold text-brand-dark placeholder:text-brand-dark/50 focus:outline-none focus:ring-2 focus:ring-brand-accent"
                />
                <input
                  type="text"
                  placeholder="ESTADO"
                  className="w-full rounded-full bg-white px-5 py-3 text-center text-xs font-bold text-brand-dark placeholder:text-brand-dark/50 focus:outline-none focus:ring-2 focus:ring-brand-accent"
                />
                <button
                  type="button"
                  className="mt-2 w-full rounded-full bg-brand-accent px-5 py-3.5 text-center text-sm font-black uppercase tracking-wider text-brand-dark transition-transform hover:scale-[1.02] hover:bg-brand-accent-hover"
                >
                  SOLICITAR AGORA
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* CONDITIONS SECTION */}
      <section className="px-4 py-12 md:py-16 w-full bg-brand-dark">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl md:text-3xl font-bold tracking-tight text-white">
            Conheça as condições
          </h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="flex flex-col items-center justify-center rounded-3xl bg-brand-accent p-6 text-center text-brand-dark shadow-lg transition-transform hover:-translate-y-1">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-brand-dark text-brand-accent">
                <DollarSign className="h-8 w-8" strokeWidth={3} />
              </div>
              <h4 className="text-base md:text-lg font-black leading-tight uppercase">ATÉ R$ 10 MIL</h4>
              <p className="mt-1 text-xs font-medium md:text-sm">Capital de giro</p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center justify-center rounded-3xl bg-brand-accent p-6 text-center text-brand-dark shadow-lg transition-transform hover:-translate-y-1">
              <CalendarDays className="mb-3 h-14 w-14 text-brand-dark" strokeWidth={1.5} />
              <h4 className="text-base md:text-lg font-black leading-tight uppercase">PAGAMENTO</h4>
              <p className="mt-1 text-xs font-medium md:text-sm">De 03 a 12 vezes</p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center justify-center rounded-3xl bg-brand-accent p-6 text-center text-brand-dark shadow-lg transition-transform hover:-translate-y-1">
              <Users className="mb-3 h-14 w-14 text-brand-dark fill-brand-dark/20" strokeWidth={1.5} />
              <h4 className="text-base md:text-lg font-black leading-tight uppercase">GRUPO SOLIDÁRIO</h4>
              <p className="mt-1 text-xs font-medium md:text-sm">De 3 a 10 pessoas</p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-center justify-center rounded-3xl bg-brand-accent p-6 text-center text-brand-dark shadow-lg transition-transform hover:-translate-y-1">
              <UserSquare2 className="mb-3 h-14 w-14 text-brand-dark fill-brand-dark/20" strokeWidth={1.5} />
              <h4 className="text-base md:text-lg font-black leading-tight uppercase">PRA ELAS</h4>
              <p className="mt-1 text-xs font-medium md:text-sm">Mulheres inscritas<br />no cadúnico</p>
            </div>

            {/* Card 5 */}
            <div className="flex flex-col items-center justify-center rounded-3xl bg-brand-accent p-6 text-center text-brand-dark shadow-lg transition-transform hover:-translate-y-1">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-brand-dark text-brand-accent">
                <Percent className="h-8 w-8" strokeWidth={3} />
              </div>
              <h4 className="text-base md:text-lg font-black leading-tight uppercase">TAXA DE JUROS</h4>
              <p className="mt-1 text-xs font-medium md:text-sm">De 0.5 a 1% ao mês</p>
            </div>

            {/* Card 6 */}
            <div className="flex flex-col items-center justify-center rounded-3xl bg-brand-accent p-6 text-center text-brand-dark shadow-lg transition-transform hover:-translate-y-1">
              <Unlock className="mb-3 h-14 w-14 text-brand-dark fill-brand-dark text-black" strokeWidth={2} />
              <h4 className="text-base md:text-lg font-black leading-tight uppercase">SEM FIADOR</h4>
              <p className="mt-1 text-xs font-medium md:text-sm">Sem garantia</p>
            </div>
          </div>
        </div>
      </section>

      {/* INSTAGRAM SECTION */}
      <section className="px-4 py-8 pb-16 w-full flex justify-center">
        <div className="mx-auto w-full max-w-4xl flex flex-col items-center rounded-[3rem] bg-white p-8 md:p-12 text-brand-dark text-center">
          <h2 className="mb-8 text-xl md:text-2xl font-black uppercase tracking-tight">
            SIGA NOSSO INSTAGRAM! <br className="md:hidden" />
            <span className="text-brand-main">@CRENORTE</span>
          </h2>

          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center w-full">
            {/* Phone Mockup 1 */}
            <div className="relative h-[28rem] w-[13rem] rounded-[2.5rem] border-8 border-gray-900 bg-gray-50 overflow-hidden shadow-2xl shrink-0">
              {/* Header mock */}
              <div className="h-14 w-full border-b border-gray-200 bg-white flex items-center px-4 pt-4">
                <div className="h-6 w-full bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="p-2 flex gap-2">
                <div className="h-10 w-10 shrink-0 rounded-full bg-green-200"></div>
                <div className="h-10 w-full bg-gray-200 rounded"></div>
              </div>
              <div className="grid grid-cols-3 gap-1 p-1">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
                  <div key={i} className="aspect-square bg-brand-main/20 rounded-sm"></div>
                ))}
              </div>
            </div>

            {/* Posters */}
            <div className="flex flex-row justify-center gap-4">
              <div className="relative h-72 w-44 rounded-2xl bg-brand-main overflow-hidden text-white flex flex-col items-center justify-end p-4 pb-6 shadow-xl border-4 border-gray-100">
                <div className="absolute top-4 left-4 flex items-center gap-1 text-[10px] font-bold">
                  <span className="text-brand-accent">basa</span> acredita
                </div>
                <div className="absolute inset-0 top-12 bottom-24 bg-[url('https://images.unsplash.com/photo-1595874246835-ab3211568224?q=80&w=300&auto=format&fit=crop')] bg-cover bg-center brightness-75"></div>
                <h3 className="relative z-10 text-xl font-black leading-none uppercase text-brand-accent text-left w-full mt-auto">
                  HISTÓRIAS DE <span className="text-white">SUCESSO</span>
                </h3>
              </div>

              <div className="relative h-72 w-44 rounded-2xl bg-brand-main overflow-hidden text-white flex flex-col items-center justify-end p-4 pb-6 shadow-xl border-4 border-gray-100 hidden md:flex">
                <div className="absolute top-4 left-4 flex items-center gap-1 text-[10px] font-bold">
                  <span className="text-brand-accent">basa</span> acredita
                </div>
                <div className="absolute inset-0 top-12 bottom-24 bg-[url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop')] bg-cover bg-center brightness-75"></div>
                <h3 className="relative z-10 text-xl font-black leading-none uppercase text-brand-accent text-left w-full mt-auto">
                  HISTÓRIAS DE <span className="text-white">SUCESSO</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
      {/* FLOATING WHATSAPP BUTTON (AS REQUESTED) */}
      <WhatsappButton />
    </div>
  );
}
