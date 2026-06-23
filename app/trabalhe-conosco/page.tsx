"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TitleBanc } from "@/components/textBanc/TitleBanc";
import { TextBanc } from "@/components/textBanc/TextBanc";
import { 
  ArrowLeft, 
  MapPin, 
  CheckCircle2, 
  ListTodo, 
  Mail, 
  Copy, 
  Check, 
  Building2
} from "lucide-react";

interface UnidadeInfo {
  id: string;
  name: string;
  uf: string;
  image: string;
  cities: string[];
}

const unidades: UnidadeInfo[] = [
  {
    id: "acre",
    name: "Acre",
    uf: "AC",
    image: "/recrutamento/acre.jpg",
    cities: ["Plácido de Castro", "Rio Branco", "Xapuri"],
  },
  {
    id: "amapa",
    name: "Amapá",
    uf: "AP",
    image: "/recrutamento/amapa.jpg",
    cities: ["Santana"],
  },
  {
    id: "maranhao",
    name: "Maranhão",
    uf: "MA",
    image: "/recrutamento/maranhao.jpg",
    cities: ["Alto Parnaíba", "Balsas", "Carolina", "Estreito"],
  },
  {
    id: "mato-grosso",
    name: "Mato Grosso",
    uf: "MT",
    image: "/recrutamento/matogrosso.jpg",
    cities: ["Lucas do Rio Verde", "Sinop", "Tangará da Serra"],
  },
  {
    id: "para",
    name: "Pará",
    uf: "PA",
    image: "/recrutamento/para.jpg",
    cities: ["Capanema", "Dom Eliseu", "Jacundá", "Novo Progresso", "Pacajá", "Placas", "Rurópolis", "Tucumã", "Uruará", "Xinguará"],
  },
  {
    id: "rondonia",
    name: "Rondônia",
    uf: "RO",
    image: "/recrutamento/rondonia.jpg",
    cities: ["Buritis", "Extrema", "Machadinho do Oeste", "São Miguel do Guaporé"],
  },
  {
    id: "roraima",
    name: "Roraima",
    uf: "RR",
    image: "/recrutamento/roraima.jpg",
    cities: ["Caracaraí", "Rorainópolis"],
  },
  {
    id: "tocantins",
    name: "Tocantins",
    uf: "TO",
    image: "/recrutamento/tocantins.jpg",
    cities: ["Araguatins", "Colinas do Tocantins", "Guaraí", "Pedro Afonso", "Tocantinópolis", "Xambioá"],
  },
];

const requisitos = [
  "Ensino Médio Completo",
  "Boa Comunicação",
  "Perfil Comercial",
  "Disponibilidade para atividades externas",
  "Informática Básica",
];

const atividades = [
  "Captação de clientes",
  "Atendimento e acompanhamento de carteira",
  "Operação do programa BASA Acredita",
  "Acompanhamento de contratos e pagamentos",
];

export default function TrabalheConosco() {
  const [activeTab, setActiveTab] = useState<string>("acre");
  const [copied, setCopied] = useState(false);

  const activeUnidade = unidades.find((u) => u.id === activeTab) || unidades[0];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("recrutamento@crenorte.com.br");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex min-h-screen flex-col bg-brand-dark font-banco-amazonia-texto text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full bg-brand-main py-12 md:py-20 px-6 md:px-24 overflow-hidden border-b border-white/10">
        <div className="absolute -left-32 -top-32 w-96 h-96 rounded-full bg-brand-accent/5 blur-3xl pointer-events-none" />
        <div className="absolute -right-32 -bottom-32 w-96 h-96 rounded-full bg-brand-accent/5 blur-3xl pointer-events-none" />
        
        <div className="mx-auto max-w-6xl relative z-10">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-accent hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para o Início
          </Link>
          
          <TitleBanc as="h1" className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Trabalhe Conosco
          </TitleBanc>
          
          <TextBanc className="text-sm md:text-lg text-gray-300 max-w-2xl leading-relaxed">
            Venha fazer parte da equipe Crenorte que transforma vidas através do microcrédito. 
            Procuramos pessoas motivadas, comunicativas e com perfil comercial.
          </TextBanc>
        </div>
      </section>

      {/* Vagas Section */}
      <section className="w-full bg-white text-brand-dark py-16 px-6 md:px-24">
        <div className="mx-auto max-w-6xl">
          <TitleBanc as="h2" className="text-2xl md:text-3xl font-black uppercase text-center tracking-tight mb-4 text-brand-dark">
            Vagas Disponíveis
          </TitleBanc>
          <TextBanc className="text-sm md:text-base text-gray-600 text-center max-w-xl mx-auto mb-10">
            Selecione o estado abaixo para conferir as cidades atendidas e os requisitos da vaga de **Assessor(a) de Microfinanças**.
          </TextBanc>

          {/* Tabs Selector */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
            {unidades.map((uni) => (
              <button
                key={uni.id}
                onClick={() => setActiveTab(uni.id)}
                className={`px-5 py-3 rounded-full text-xs md:text-sm font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeTab === uni.id
                    ? "bg-brand-main text-white shadow-lg scale-105"
                    : "bg-gray-100 text-brand-dark hover:bg-gray-200"
                }`}
              >
                {uni.name} ({uni.uf})
              </button>
            ))}
          </div>

          {/* Job Details Card */}
          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Info Column */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-brand-accent/20 text-brand-dark mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-main animate-pulse" />
                    Vaga Aberta
                  </span>
                  <TitleBanc as="h3" className="text-2xl md:text-3xl font-black uppercase text-brand-dark mb-1">
                    Assessor(a) de Microfinanças
                  </TitleBanc>
                  <p className="text-sm font-semibold text-brand-main">
                    Unidade {activeUnidade.name}
                  </p>
                </div>

                {/* Cities List */}
                <div className="bg-white border border-gray-100 p-5 rounded-2xl">
                  <span className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-brand-dark mb-2.5">
                    <MapPin className="h-4 w-4 text-brand-main" />
                    Cidades Atendidas nesta Unidade:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeUnidade.cities.map((city, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-100 text-brand-dark border border-gray-200/50"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Requirements and Activities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Requisitos */}
                  <div>
                    <span className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-brand-dark mb-3">
                      <CheckCircle2 className="h-4 w-4 text-brand-main" />
                      Requisitos:
                    </span>
                    <ul className="flex flex-col gap-2">
                      {requisitos.map((req, idx) => (
                        <li key={idx} className="flex gap-2 text-xs md:text-sm text-gray-600 font-medium">
                          <span className="text-brand-main mt-0.5">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Atividades */}
                  <div>
                    <span className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-brand-dark mb-3">
                      <ListTodo className="h-4 w-4 text-brand-main" />
                      Atividades:
                    </span>
                    <ul className="flex flex-col gap-2">
                      {atividades.map((atv, idx) => (
                        <li key={idx} className="flex gap-2 text-xs md:text-sm text-gray-600 font-medium">
                          <span className="text-brand-main mt-0.5">•</span>
                          {atv}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Direct Action */}
                <div className="pt-6 border-t border-gray-200/60 flex flex-col gap-3">
                  <span className="text-xs font-black uppercase tracking-wider text-brand-dark">
                    Como se candidatar:
                  </span>
                  <p className="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">
                    Envie seu currículo atualizado em anexo para o e-mail abaixo indicando no assunto a vaga e a sua unidade (Ex: <span className="font-semibold text-brand-dark">Currículo - Assessor de Microfinanças - Unidade {activeUnidade.name}</span>):
                  </p>
                  <div className="mt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <div className="flex-1 flex items-center justify-between bg-white border border-gray-200 rounded-full px-5 py-3 text-xs md:text-sm font-bold text-brand-dark">
                      <span className="truncate select-all selection:bg-brand-accent">recrutamento@crenorte.com.br</span>
                      <Mail className="h-4 w-4 text-brand-main/60 shrink-0 ml-2" />
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="flex items-center justify-center gap-2 rounded-full bg-brand-main hover:bg-brand-dark text-white px-6 py-3.5 text-xs md:text-sm font-black uppercase tracking-widest transition-all duration-300 cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="h-4 w-4" />
                          Copiado!
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          Copiar E-mail
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Poster Column */}
              <div className="lg:col-span-5 relative w-full h-[450px] md:h-[550px] rounded-2xl overflow-hidden border border-gray-200 shadow-md group">
                <Image
                  src={activeUnidade.image}
                  alt={`Vaga Assessor de Microfinanças - Unidade ${activeUnidade.name}`}
                  fill
                  sizes="(max-w-768px) 100vw, 40vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                  priority
                />
              </div>

            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
