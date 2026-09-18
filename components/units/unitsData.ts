import type { Unit } from "./UnitCard"

/**
 * ⚠️ DADOS DE EXEMPLO (placeholder)
 * -----------------------------------------------------------------------
 * Ainda não temos as unidades reais cadastradas. As entradas abaixo servem
 * apenas para demonstrar o layout dos cards — substitua nome, telefone e
 * localidades atendidas pelos dados reais de cada unidade assim que
 * estiverem disponíveis.
 *
 * Estrutura: um objeto por estado (chave = sigla do estado em minúsculo),
 * cada estado tem uma lista de unidades, e cada unidade tem sua própria
 * lista de localidades (cidades/municípios) atendidas. Para adicionar uma
 * nova unidade, basta incluir mais um objeto na lista do estado
 * correspondente; para adicionar um novo estado, crie uma nova chave aqui
 * e inclua a sigla na lista VISIBLE_STATE_IDS em components/NovasUnidades.tsx.
 */
export const unitsByState: Record<string, Unit[]> = {
    ac: [
        {
            name: "Unidade [Cidade] 1",
            phones: ["(XX) XXXXX-XXXX"],
            localities: ["[Localidade 1]", "[Localidade 2]"],
        },
    ],
    am: [
        {
            name: "Unidade [Cidade] 1",
            phones: ["(XX) XXXXX-XXXX"],
            localities: ["[Localidade 1]", "[Localidade 2]"],
        },
    ],
    ap: [
        {
            name: "Unidade [Cidade] 1",
            phones: ["(XX) XXXXX-XXXX"],
            localities: ["[Localidade 1]", "[Localidade 2]"],
        },
    ],
    ma: [
        {
            name: "Unidade [Cidade] 1",
            phones: ["(XX) XXXXX-XXXX"],
            localities: ["[Localidade 1]", "[Localidade 2]"],
        },
    ],
    mt: [
        {
            name: "Unidade [Cidade] 1",
            phones: ["(XX) XXXXX-XXXX"],
            localities: ["[Localidade 1]", "[Localidade 2]"],
        },
    ],
    pa: [
        {
            name: "Unidade [Cidade] 1",
            phones: ["(XX) XXXXX-XXXX"],
            localities: ["[Localidade 1]", "[Localidade 2]", "[Localidade 3]"],
        },
        {
            name: "Unidade [Cidade] 2",
            phones: ["(XX) XXXXX-XXXX"],
            localities: ["[Localidade 1]", "[Localidade 2]"],
        },
    ],
    ro: [
        {
            name: "Unidade [Cidade] 1",
            phones: ["(XX) XXXXX-XXXX"],
            localities: ["[Localidade 1]", "[Localidade 2]"],
        },
    ],
    rr: [
        {
            name: "Unidade [Cidade] 1",
            phones: ["(XX) XXXXX-XXXX"],
            localities: ["[Localidade 1]", "[Localidade 2]"],
        },
    ],
    to: [
        {
            name: "Unidade [Cidade] 1",
            phones: ["(XX) XXXXX-XXXX"],
            localities: ["[Localidade 1]", "[Localidade 2]"],
        },
    ],
}
