"use client";

import { useState, useEffect } from "react";
import { Building2, Check, ChevronDown, CreditCard, Home, Landmark, MapPin, Phone, ShieldCheck, User } from "lucide-react";
import { TextBanc } from "./textBanc/TextBanc";
import { TitleBanc } from "./textBanc/TitleBanc";
import { WHATSAPP_NUMBER } from "../lib/constants";

function onlyDigits(s: string) {
    return String(s || "").replace(/\D+/g, "");
}

function applyCpfMask(value: string) {
    const raw = onlyDigits(value).slice(0, 11);
    const len = raw.length;
    let masked = "";
    if (len > 0) masked = raw.slice(0, 3);
    if (len >= 4) masked += "." + raw.slice(3, 6);
    if (len >= 7) masked += "." + raw.slice(6, 9);
    if (len >= 10) masked += "-" + raw.slice(9, 11);
    return masked;
}

function applyPhoneMask(value: string) {
    const raw = onlyDigits(value).slice(0, 11);
    const len = raw.length;
    let masked = "";
    if (len > 0) masked = "(" + raw.slice(0, 2);
    if (len >= 3) masked += ") " + raw.slice(2, 7);
    if (len >= 8) masked += "-" + raw.slice(7, 11);
    return masked;
}

function validarTelefone(phone: string) {
    const digits = onlyDigits(phone);
    if (digits.length !== 11) return false;
    const numero = digits.slice(2);
    return numero[0] === "9";
}

function validarCPF(cpf: string) {
    cpf = (cpf || "").replace(/[^\d]+/g, "");
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
    let soma = 0, resto;
    for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;
    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    return resto === parseInt(cpf.substring(10, 11));
}

interface Estado {
    id: number;
    sigla: string;
}

interface Municipio {
    id: number;
    nome: string;
}

export function Form() {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [cpfTouched, setCpfTouched] = useState(false);
    const [phone, setPhone] = useState("");
    const [phoneTouched, setPhoneTouched] = useState(false);
    const [municipio, setMunicipio] = useState("");
    const [bairro, setBairro] = useState("");
    const [endereco, setEndereco] = useState("");
    const [estado, setEstado] = useState("");
    const [cadunico, setCadunico] = useState<string | null>(null);
    const [autorizo, setAutorizo] = useState(false);
    const [estados, setEstados] = useState<Estado[]>([]);
    const [municipioId, setMunicipioId] = useState<number | null>(null);
    const [municipios, setMunicipios] = useState<Municipio[]>([]);
    const [loadingMunicipios, setLoadingMunicipios] = useState(false);
    const [enviando, setEnviando] = useState(false);
    const [enviado, setEnviado] = useState(false);
    const [erroEnvio, setErroEnvio] = useState(false);

    const ESTADOS_ATENDIDOS = ["AC", "AM", "AP", "MA", "MT", "PA", "RO", "RR", "TO"];

    useEffect(() => {
        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?fields=id,sigla")
            .then((res) => res.json())
            .then((data: Estado[]) => {
                const filtrados = data
                    .filter((e) => ESTADOS_ATENDIDOS.includes(e.sigla))
                    .sort((a, b) => a.sigla.localeCompare(b.sigla));
                setEstados(filtrados);
            })
            .catch(() => {});
    }, []);

    useEffect(() => {
        if (!estado) {
            setMunicipios([]);
            setMunicipio("");
            return;
        }
        setLoadingMunicipios(true);
        setMunicipio("");
        setMunicipioId(null);
        setBairro("");
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios?fields=id,nome`)
            .then((res) => res.json())
            .then((data: Municipio[]) => {
                const sorted = data.sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
                setMunicipios(sorted);
            })
            .catch(() => {})
            .finally(() => setLoadingMunicipios(false));
    }, [estado]);

    useEffect(() => {
        if (!municipioId) {
            setBairro("");
        }
    }, [municipioId]);

    const cpfDigits = onlyDigits(cpf);
    const cpfComplete = cpfDigits.length === 11;
    const cpfValid = cpfComplete && validarCPF(cpf);
    const showCpfError = cpfTouched && cpfComplete && !cpfValid;

    const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCpf(applyCpfMask(e.target.value));
    };

    const phoneDigits = onlyDigits(phone);
    const phoneComplete = phoneDigits.length === 11;
    const phoneValid = phoneComplete && validarTelefone(phone);
    const showPhoneError = phoneTouched && phoneDigits.length >= 2 && !phoneValid;

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(applyPhoneMask(e.target.value));
    };

    const formValido =
        nome.trim().length > 0 &&
        cpfValid &&
        phoneValid &&
        municipio.trim().length > 0 &&
        bairro.trim().length > 0 &&
        endereco.trim().length > 0 &&
        estado !== "" &&
        cadunico !== null &&
        autorizo;

    const handleSubmit = async () => {
        if (!formValido) return;
        setEnviando(true);
        setErroEnvio(false);

        // Pixel dispara aqui, no momento em que o usuário completa o formulário
        // válido — não pode depender do sucesso da API de leads (terceiro),
        // senão uma falha/lentidão no backend zera o CompleteRegistration.
        try {
            if (typeof (window as any).fbq === 'function') {
                (window as any).fbq('track', 'CompleteRegistration', { value: 1.00, currency: 'BRL' });
            }
        } catch {}

        try {
            // Método primário: API na Vercel → Firebase (coleção pre_cadastros)
            const apiPromise = fetch("https://crenorte-leads-api-v5hu.vercel.app/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    nomeCompleto: nome.trim(),
                    cpf: onlyDigits(cpf),
                    telefone: onlyDigits(phone),
                    bairro: bairro.trim(),
                    endereco: endereco.trim(),
                    municipio: municipio.trim(),
                    uf: estado,
                    modalidade: cadunico === "Sim" ? "cadunico" : "grupo_solidario",
                    origem: "Site / portal",
                }),
            });

            // Método secundário (segurança): Google Sheets — fire and forget
            const sheetsParams = new URLSearchParams({
                nome: nome.trim(),
                cpf,
                telefone: phone,
                municipio: municipio.trim(),
                bairro: bairro.trim(),
                endereco: endereco.trim(),
                uf: estado,
                cadunico: cadunico!,
            });
            fetch(
                `https://script.google.com/macros/s/AKfycbzyirwIiIIIpo_ia5ZCeqOyel6wJ3096bZ_j-oNKflo9bLyEX07M4D1IYgwZVLb1sII/exec?${sheetsParams}`,
                { method: "GET", mode: "no-cors" }
            ).catch(() => {});

            const response = await apiPromise;
            if (!response.ok) {
                const errorBody = await response.text();
                console.error("Erro da API:", response.status, errorBody);
                throw new Error("Erro na resposta da API");
            }
            setEnviado(true);
            setTimeout(() => {
                window.open(
                    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Acabei de realizar meu pré-cadastro no site e gostaria de mais informações sobre o crédito.")}`,
                    "_blank"
                );
            }, 2000);
        } catch {
            setErroEnvio(true);
        } finally {
            setEnviando(false);
        }
    };

    const inputBaseClass =
        "font-banco-amazonia-texto w-full rounded-full bg-white pl-11 pr-5 py-3.5 text-sm font-semibold text-brand-dark placeholder:font-medium placeholder:text-brand-dark/40 transition-shadow focus:outline-none focus:ring-2 focus:ring-brand-accent";
    const selectBaseClass =
        "font-banco-amazonia-texto w-full appearance-none cursor-pointer rounded-full bg-white pl-11 pr-9 py-3.5 text-sm font-semibold text-brand-dark transition-shadow focus:outline-none focus:ring-2 focus:ring-brand-accent disabled:cursor-not-allowed disabled:opacity-50";

    return (
        <div className="w-full">
            <div className="relative rounded-[2rem] bg-gradient-to-br from-white/15 via-white/5 to-transparent p-px shadow-2xl shadow-black/30">
              <div className="rounded-[calc(2rem-1px)] bg-brand-dark/60 p-6 backdrop-blur-xl md:p-8">
                <TitleBanc as="h2" className="text-center text-2xl font-bold uppercase tracking-wider text-white">
                  SOLICITE SEU CRÉDITO AGORA
                </TitleBanc>
                <TextBanc className="mb-6 text-center text-sm font-slim text-gray-400">
                  *Sujeito a análise de crédito.
                </TextBanc>
                <form className="flex flex-col gap-3">
                  <div className="relative">
                    <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-dark/40" />
                    <input
                      type="text"
                      placeholder="Nome completo"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      className={inputBaseClass}
                    />
                  </div>

                  <div className="flex flex-col md:flex-row gap-3 items-start justify-center">
                      <div className="w-full flex flex-col gap-1">
                          <div className="relative">
                              <CreditCard className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-dark/40" />
                              <input
                                  type="text"
                                  placeholder="CPF"
                                  value={cpf}
                                  onChange={handleCpfChange}
                                  onBlur={() => setCpfTouched(true)}
                                  inputMode="numeric"
                                  className={`${inputBaseClass} ${showCpfError ? "ring-2 ring-red-500 focus:ring-red-500" : ""}`}
                              />
                          </div>
                          {showCpfError && (
                              <span className="pl-4 text-xs text-red-400 font-semibold">
                                  CPF inválido
                              </span>
                          )}
                      </div>
                      <div className="w-full flex flex-col gap-1">
                          <div className="relative">
                              <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-dark/40" />
                              <input
                                  type="text"
                                  placeholder="Telefone"
                                  value={phone}
                                  onChange={handlePhoneChange}
                                  onBlur={() => setPhoneTouched(true)}
                                  inputMode="numeric"
                                  className={`${inputBaseClass} ${showPhoneError ? "ring-2 ring-red-500 focus:ring-red-500" : ""}`}
                              />
                          </div>
                          {showPhoneError && (
                              <span className="pl-4 text-xs text-red-400 font-semibold">
                                  Telefone inválido
                              </span>
                          )}
                      </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-3">
                      <div className="relative w-full">
                          <MapPin className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-dark/40" />
                          <select
                              value={estado}
                              onChange={(e) => setEstado(e.target.value)}
                              className={selectBaseClass}
                          >
                              <option value="" disabled className="text-brand-dark/50">Estado</option>
                              {estados.map((estado) => (
                                  <option key={estado.id} value={estado.sigla}>
                                      {estado.sigla}
                                  </option>
                              ))}
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-dark/40" />
                      </div>
                      <div className="relative w-full">
                          <Landmark className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-dark/40" />
                          <select
                              value={municipio}
                              onChange={(e) => {
                                  const selected = municipios.find((m) => m.nome === e.target.value);
                                  setMunicipio(e.target.value);
                                  setMunicipioId(selected?.id ?? null);
                              }}
                              disabled={!estado || loadingMunicipios}
                              className={selectBaseClass}
                          >
                              <option value="" disabled>
                                  {loadingMunicipios ? "Carregando..." : !estado ? "Selecione o estado" : "Município"}
                              </option>
                              {municipios.map((m) => (
                                  <option key={m.id} value={m.nome} data-id={m.id}>
                                      {m.nome}
                                  </option>
                              ))}
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-dark/40" />
                      </div>
                      <div className="relative w-full">
                          <Home className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-dark/40" />
                          <input
                              type="text"
                              placeholder="Bairro"
                              value={bairro}
                              onChange={(e) => setBairro(e.target.value)}
                              className={inputBaseClass}
                          />
                      </div>
                  </div>

                  <div className="relative">
                      <Building2 className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-dark/40" />
                      <input
                          type="text"
                          placeholder="Endereço do comércio"
                          value={endereco}
                          onChange={(e) => setEndereco(e.target.value)}
                          className={inputBaseClass}
                      />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center rounded-2xl bg-white/5 border border-white/10 px-4 py-3">
                      <TextBanc as="label" className="text-sm font-bold text-white uppercase tracking-wide">
                          Possui CadÚnico ativo?
                      </TextBanc>
                      <div className="flex flex-row gap-2">
                          {(["Sim", "Não"] as const).map((opcao) => (
                              <button
                                  key={opcao}
                                  type="button"
                                  onClick={() => setCadunico(opcao)}
                                  aria-pressed={cadunico === opcao}
                                  className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide transition-colors duration-200 ${
                                      cadunico === opcao
                                          ? "bg-brand-accent text-brand-dark"
                                          : "bg-white/10 text-white hover:bg-white/20"
                                  }`}
                              >
                                  {opcao}
                              </button>
                          ))}
                      </div>
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer rounded-2xl bg-white/5 border border-white/10 px-4 py-3 mt-1">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                      <div className="flex items-start gap-3">
                          <input
                              type="checkbox"
                              checked={autorizo}
                              onChange={(e) => setAutorizo(e.target.checked)}
                              className="mt-0.5 h-4 w-4 shrink-0 accent-brand-accent cursor-pointer"
                          />
                          <TextBanc as="span" className="text-xs text-gray-300 leading-relaxed">
                              Autorizo a consulta de informações em meu nome (CPF/CNPJ) nos sistemas de crédito (SCR, CADIN e
                              SERASA) para fins de análise cadastral e de crédito, em conformidade com a LGPD.
                          </TextBanc>
                      </div>
                  </label>

                  {enviado ? (
                      <p className="mt-2 flex items-center justify-center gap-2 text-center text-sm font-bold text-green-400 uppercase tracking-wide">
                          <Check className="h-4 w-4 shrink-0" />
                          Cadastro realizado com sucesso! Você será direcionado para o WhatsApp da nossa equipe.
                      </p>
                  ) : (
                      <>
                          {erroEnvio && (
                              <p className="text-center text-xs text-red-400 font-semibold">
                                  Erro ao enviar. Tente novamente.
                              </p>
                          )}
                          <button
                            type="button"
                            disabled={!formValido || enviando}
                            onClick={handleSubmit}
                            className={`font-banco-amazonia-texto mt-2 w-full rounded-full px-5 py-3.5 text-center text-sm font-black uppercase tracking-wider text-brand-dark transition-all focus:outline-none focus:ring-2 focus:ring-brand-accent ${
                              formValido && !enviando
                                ? "bg-brand-accent hover:scale-[1.02] hover:bg-brand-accent-hover cursor-pointer shadow-[0_0_20px_rgba(0,225,45,0.25)] hover:shadow-[0_0_28px_rgba(0,225,45,0.4)]"
                                : "bg-brand-accent/40 cursor-not-allowed"
                            }`}
                          >
                            {enviando ? "ENVIANDO..." : "SOLICITAR AGORA"}
                          </button>
                      </>
                  )}
                </form>
              </div>
            </div>
        </div>
    )
}
