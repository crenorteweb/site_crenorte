"use client";

import { useState } from "react";
import { TitleBanc } from "./textBanc/TitleBanc";

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
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="px-4 py-8 md:py-10 pb-16 w-full flex flex-col items-center">
            <TitleBanc as="h2" className="mb-8 text-xl md:text-3xl font-black uppercase tracking-tight text-center">
                Perguntas Frequentes
            </TitleBanc>
            <div className="w-full max-w-3xl flex flex-col gap-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                        <button
                            className="w-full text-left px-6 py-4 flex justify-between items-center gap-4 bg-white hover:bg-gray-50 transition-colors"
                            onClick={() => toggle(index)}
                            aria-expanded={openIndex === index}
                        >
                            <span className="font-semibold text-sm md:text-base text-gray-800">
                                {faq.question}
                            </span>
                            <span className="text-xl text-gray-500 shrink-0">
                                {openIndex === index ? "−" : "+"}
                            </span>
                        </button>
                        {openIndex === index && (
                            <div className="px-6 py-4 text-sm md:text-base text-gray-600 bg-gray-50 border-t border-gray-200">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
