import Image from "next/image"

export default function Header() {
    return (
        <header className="flex h-20 w-full items-center justify-between bg-brand-main px-6 md:px-12">
            <div className="flex items-center gap-2">
                {/* Logo placeholder - basa acredita */}
                <div className="flex items-center font-bold text-white text-xl tracking-tighter">
                    <Image src="/basa_acredita.png" alt="Basa Acredita" width={300} height={100}></Image>
                </div>
            </div>
            {/* Logo placeholder - crenorte */}
            <div className="flex items-center text-xl font-bold italic tracking-tight text-brand-accent">
                <Image src="/crenorte.png" alt="crenorte" width={250} height={100}></Image>
            </div>
        </header>
    )
}