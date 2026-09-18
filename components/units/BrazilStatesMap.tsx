"use client"

import type { CSSProperties } from "react"
import { brazilStatePaths, BRAZIL_MAP_VIEWBOX } from "./brazilStatesPaths"

// Mesmas cores definidas em app/globals.css (tema Tailwind: brand-accent, etc.)
const COLOR_ACCENT = "#00E12D"
const COLOR_ACCENT_SOFT = "rgba(0, 225, 45, 0.25)"
const COLOR_ACCENT_HOVER = "rgba(0, 225, 45, 0.45)"
const COLOR_STROKE = "rgba(255, 255, 255, 0.15)"

type StateStyle = CSSProperties & {
    "--fill-base"?: string
    "--fill-hover"?: string
}

type BrazilStatesMapProps = {
    /** Siglas (UF) em minúsculo dos estados que devem aparecer no mapa. */
    stateIds: string[]
    selectedState: string
    onSelect: (stateId: string) => void
    /** viewBox customizado (para dar zoom na região exibida). Padrão: mapa do Brasil inteiro. */
    viewBox?: string
    className?: string
}

export function BrazilStatesMap({
    stateIds,
    selectedState,
    onSelect,
    viewBox = BRAZIL_MAP_VIEWBOX,
    className = "",
}: BrazilStatesMapProps) {
    const states = brazilStatePaths.filter((state) => stateIds.includes(state.id))

    return (
        <svg
            viewBox={viewBox}
            className={`h-auto w-full ${className}`}
            role="img"
            aria-label="Mapa dos estados onde a Crenorte atua"
        >
            {states.map((state) => {
                const isSelected = state.id === selectedState

                const style: StateStyle = {
                    "--fill-base": isSelected ? COLOR_ACCENT : COLOR_ACCENT_SOFT,
                    "--fill-hover": isSelected ? COLOR_ACCENT : COLOR_ACCENT_HOVER,
                    fill: "var(--fill-base)",
                }

                return (
                    <path
                        key={state.id}
                        d={state.path}
                        tabIndex={0}
                        role="button"
                        aria-label={state.name}
                        aria-pressed={isSelected}
                        onClick={() => onSelect(state.id)}
                        onKeyDown={(event) => {
                            if (event.key === "Enter" || event.key === " ") {
                                event.preventDefault()
                                onSelect(state.id)
                            }
                        }}
                        stroke={COLOR_STROKE}
                        strokeWidth={0.75}
                        vectorEffect="non-scaling-stroke"
                        style={style}
                        className={`brazil-map-state cursor-pointer outline-none transition-colors duration-300 ease-out focus-visible:stroke-white focus-visible:stroke-2 ${
                            isSelected ? "drop-shadow-[0_0_10px_rgba(0,225,45,0.55)]" : ""
                        }`}
                    >
                        <title>{state.name}</title>
                    </path>
                )
            })}
            <style>{`.brazil-map-state:hover { fill: var(--fill-hover); }`}</style>
        </svg>
    )
}
