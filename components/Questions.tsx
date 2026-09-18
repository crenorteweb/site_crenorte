"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { TitleBanc } from "./textBanc/TitleBanc";
import { TextBanc } from "./textBanc/TextBanc";
import { Reveal } from "./ui/Reveal";
import { SectionBadge } from "./ui/SectionBadge";

const faqs = [
    {
        question: "Tenho CadÚnico. Vou perder meus benefícios se contratar o microcrédito?",
        answer: "Não! O microcrédito da Crenorte não interfere em nenhum benefício social vinculado ao CadÚnico, como Bolsa Família ou BPC. O crédito é contratado de forma independente e não é descontado automaticamente da sua renda nem dos seus benefícios. Você continua recebendo normalmente.",
    },
    {
        question: "Minha atividade se enquadra no programa?",
        answer: "Se você trabalha por conta própria, muito provavelmente sim! O microcrédito da Crenorte é voltado para pequenos empreendedores em geral — motoristas de aplicativo, vendedores ambulantes, feirantes, cozinheiros, costureiros, manicures, mototaxistas, artesãos e muitos outros. Se você tem uma atividade que gera renda, fale com um de nossos agentes e veja como podemos te ajudar.",
    },
    {
        question: "Preciso ter CNPJ para solicitar o microcrédito?",
        answer: "Não é necessário ter CNPJ. O microcrédito produtivo orientado da Crenorte é acessível também para trabalhadores informais. O que avaliamos é a sua atividade e a sua necessidade de crédito, não a formalização do negócio.",
    },
    {
        question: "Quais documentos preciso para solicitar o crédito?",
        answer: "O processo é simples e descomplicado. Em geral, são solicitados documentos básicos como RG, CPF e comprovante de residência. Um agente de crédito vai até você para entender sua situação e orientar sobre o que é necessário no seu caso.",
    },
    {
        question: "Como funciona o pagamento das parcelas?",
        answer: "As parcelas são combinadas de acordo com o seu fluxo de renda, para que o pagamento caiba no seu bolso sem comprometer o funcionamento do seu negócio. Nossos agentes de crédito acompanham você durante todo o processo.",
    },
    {
        question: "O agente de crédito precisa ir até mim ou tenho que ir a uma agência?",
        answer: "A Crenorte trabalha com atendimento orientado, ou seja, nossos agentes vão até onde você está — seja no seu negócio, na sua casa ou no seu ponto de trabalho. Nosso objetivo é facilitar o acesso ao crédito para quem mais precisa.",
    },
];

export function Questions() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="px-4 py-16 md:py-20 pb-16 w-full flex flex-col items-center bg-brand-bg">
            <Reveal className="mb-10 flex flex-col items-center gap-3">
                <SectionBadge icon={HelpCircle} label="Tire suas dúvidas" variant="light" />
                <TitleBanc as="h2" className="text-xl md:text-3xl font-black uppercase tracking-tight text-center text-brand-dark">
                    Perguntas Frequentes
                </TitleBanc>
            </Reveal>
            <div className="w-full max-w-3xl flex flex-col gap-3">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <Reveal key={faq.question} delay={Math.min(index, 4) * 60}>
                            <div
                                className={`rounded-2xl border bg-white overflow-hidden transition-shadow duration-300 ${
                                    isOpen ? "border-brand-accent/40 shadow-lg shadow-brand-accent/10" : "border-gray-200 hover:border-gray-300"
                                }`}
                            >
                                <button
                                    className="w-full text-left px-5 md:px-6 py-4 flex justify-between items-center gap-4 cursor-pointer"
                                    onClick={() => toggle(index)}
                                    aria-expanded={isOpen}
                                >
                                    <span className="font-semibold text-sm md:text-base text-brand-dark">
                                        {faq.question}
                                    </span>
                                    <span
                                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                                            isOpen ? "rotate-180 bg-brand-accent text-brand-dark" : "bg-gray-100 text-gray-500"
                                        }`}
                                    >
                                        <ChevronDown className="h-4 w-4" />
                                    </span>
                                </button>
                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${
                                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <TextBanc className="px-5 md:px-6 pb-5 text-sm md:text-base text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                                            {faq.answer}
                                        </TextBanc>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    );
                })}
            </div>
        </section>
    );
}
