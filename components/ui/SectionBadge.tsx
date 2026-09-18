import type { LucideIcon } from "lucide-react"

type SectionBadgeProps = {
    icon: LucideIcon
    label: string
    /** "dark" para seções com fundo escuro (bg-brand-dark/main), "light" para fundo claro (bg-white). */
    variant?: "dark" | "light"
    className?: string
}

/** Pill com ícone + rótulo usado no topo das seções, para dar consistência visual ao site. */
export function SectionBadge({ icon: Icon, label, variant = "dark", className = "" }: SectionBadgeProps) {
    const isDark = variant === "dark"

    return (
        <div
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 ${
                isDark ? "border-brand-accent/30 bg-brand-accent/15" : "border-brand-main/20 bg-brand-main/10"
            } ${className}`}
        >
            <Icon className={`h-4 w-4 ${isDark ? "text-brand-accent" : "text-brand-main"}`} />
            <span
                className={`text-xs font-semibold uppercase tracking-widest ${
                    isDark ? "text-brand-accent" : "text-brand-main"
                }`}
            >
                {label}
            </span>
        </div>
    )
}
