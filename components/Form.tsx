"use client";

import { useState, useEffect } from "react";
import { TextBanc } from "./textBanc/TextBanc";
import { TitleBanc } from "./textBanc/TitleBanc";

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

export function Form() {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [cpfTouched, setCpfTouched] = useState(false);
    const [phone, setPhone] = useState("");
    const [phoneTouched, setPhoneTouched] = useState(false);
    const [municipio, setMunicipio] = useState("");
    const [estado, setEstado] = useState("");
    const [cadunico, setCadunico] = useState<string | null>(null);
    const [autorizo, setAutorizo] = useState(false);
    const [estados, setEstados] = useState<Estado[]>([]);
    const [enviando, setEnviando] = useState(false);
    const [enviado, setEnviado] = useState(false);
    const [erroEnvio, setErroEnvio] = useState(false);

    useEffect(() => {
        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?fields=id,sigla")
            .then((res) => res.json())
            .then((data: Estado[]) => {
                const sorted = data.sort((a, b) => a.sigla.localeCompare(b.sigla));
                setEstados(sorted);
            })
            .catch(() => {});
    }, []);

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
        estado !== "" &&
        cadunico !== null &&
        autorizo;

    const handleSubmit = async () => {
        if (!formValido) return;
        setEnviando(true);
        setErroEnvio(false);
        try {
            const params = new URLSearchParams({
                nome: nome.trim(),
                cpf,
                telefone: phone,
                uf: estado,
                municipio: municipio.trim(),
                cadunico: cadunico!,
            });
            await fetch(
                `https://script.google.com/macros/s/AKfycbzyirwIiIIIpo_ia5ZCeqOyel6wJ3096bZ_j-oNKflo9bLyEX07M4D1IYgwZVLb1sII/exec?${params}`,
                { method: "GET", mode: "no-cors" }
            );
            setEnviado(true);
        } catch {
            setErroEnvio(true);
        } finally {
            setEnviando(false);
        }
    };

    return (
        <div className="w-full md:w-1/2">
            <div className="rounded-3xl border border-white/20 p-6 md:p-8 backdrop-blur-sm">
              <TitleBanc as="h2" className="text-center text-2xl font-bold uppercase tracking-wider text-white">
                SOLICITE SEU CRÉDITO AGORA
              </TitleBanc>
              <TextBanc className="mb-6 text-center text-sm font-slim text-gray-400">
                *Sujeito a análise de crédito.
              </TextBanc>
              <form className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="NOME COMPLETO"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="font-banco-amazonia-texto w-full rounded-full bg-white px-5 py-3 text-center text-xs font-bold text-brand-dark placeholder:text-brand-dark/50 focus:outline-none focus:ring-2 focus:ring-brand-accent"
                />
                <div className="flex flex-row gap-3 items-center justify-center">
                    <div className="w-full flex flex-col">
                        <input
                            type="text"
                            placeholder="CPF"
                            value={cpf}
                            onChange={handleCpfChange}
                            onBlur={() => setCpfTouched(true)}
                            inputMode="numeric"
                            className={`font-banco-amazonia-texto w-full rounded-full bg-white px-5 py-3 text-center text-xs font-bold text-brand-dark placeholder:text-brand-dark/50 focus:outline-none focus:ring-2 ${showCpfError ? "ring-2 ring-red-500 focus:ring-red-500" : "focus:ring-brand-accent"}`}
                        />
                        {showCpfError && (
                            <span className="text-center text-xs text-red-400 font-semibold">
                                CPF inválido
                            </span>
                        )}
                    </div>
                    <div className="w-full flex flex-col">
                        <input
                            type="text"
                            placeholder="TELEFONE"
                            value={phone}
                            onChange={handlePhoneChange}
                            onBlur={() => setPhoneTouched(true)}
                            inputMode="numeric"
                            className={`font-banco-amazonia-texto w-full rounded-full bg-white px-5 py-3 text-center text-xs font-bold text-brand-dark placeholder:text-brand-dark/50 focus:outline-none focus:ring-2 ${showPhoneError ? "ring-2 ring-red-500 focus:ring-red-500" : "focus:ring-brand-accent"}`}
                        />
                        {showPhoneError && (
                            <span className="text-center text-xs text-red-400 font-semibold">
                                Telefone inválido
                            </span>
                        )}
                    </div>
                </div>

                <div className="flex flex-row gap-3">
                    <input
                        type="text"
                        placeholder="MUNICÍPIO"
                        value={municipio}
                        onChange={(e) => setMunicipio(e.target.value)}
                        className="font-banco-amazonia-texto w-full rounded-full bg-white px-5 py-3 text-center text-xs font-bold text-brand-dark placeholder:text-brand-dark/50 focus:outline-none focus:ring-2 focus:ring-brand-accent"
                    />
                    <select
                        value={estado}
                        onChange={(e) => setEstado(e.target.value)}
                        className="font-banco-amazonia-texto w-full rounded-full bg-white px-5 py-3 text-center text-xs font-bold text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-accent appearance-none cursor-pointer"
                    >
                        <option value="" disabled className="text-brand-dark/50">ESTADO</option>
                        {estados.map((estado) => (
                            <option key={estado.id} value={estado.sigla}>
                                {estado.sigla}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-row gap-3 items-center ml-2">
                    <TextBanc as="label" className="block mb-2 text-sm font-bold text-white uppercase tracking-wide">
                        Possui CadÚnico ativo?
                    </TextBanc>
                    <div className="flex flex-row gap-3">
                        <div className="flex items-center justify-center gap-1 mb-2">
                            <input type="radio" name="cadunico" value="Sim" onChange={() => setCadunico("Sim")} />
                            <TextBanc as="label" className="text-white font-bold tracking-wide uppercase">Sim</TextBanc>
                        </div>
                        <div className="flex items-center justify-center gap-1 mb-2">
                            <input type="radio" name="cadunico" value="Não" onChange={() => setCadunico("Não")} />
                            <TextBanc as="label" className="text-white font-bold tracking-wide uppercase">Não</TextBanc>
                        </div>
                    </div>
                </div>

                <label className="flex items-start gap-3 cursor-pointer mt-1">
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
                </label>

                {enviado ? (
                    <p className="mt-2 text-center text-sm font-bold text-green-400 uppercase tracking-wide">
                        Solicitação enviada com sucesso!
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
                          className={`font-banco-amazonia-texto mt-2 w-full rounded-full px-5 py-3.5 text-center text-sm font-black uppercase tracking-wider text-brand-dark transition-transform focus:outline-none focus:ring-2 focus:ring-brand-accent ${
                            formValido && !enviando
                              ? "bg-brand-accent hover:scale-[1.02] hover:bg-brand-accent-hover cursor-pointer"
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
    )
}
