import Image from "next/image"

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-brand-main/90 backdrop-blur-md">
            <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 md:px-12">
                {/* Logo placeholder - basa acredita */}
                <div className="flex items-center transition-transform duration-300 hover:scale-105">
                    <Image src="/banco_da_amazonia.png" alt="Basa Acredita" width={150} height={80} />
                </div>
                {/* Logo placeholder - crenorte */}
                <div className="flex items-center transition-transform duration-300 hover:scale-105">
                    <Image src="/crenorte.png" alt="crenorte" width={180} height={100} />
                </div>
            </div>
            {/* Linha de destaque sutil no rodapé do header */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent" />
        </header>
    )
}
