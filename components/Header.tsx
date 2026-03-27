import Image from "next/image"

export default function Header() {
    return (
        <header className="flex h-20 w-full items-center justify-between bg-brand-main px-6 md:px-24">
            <div className="flex items-center">
                {/* Logo placeholder - basa acredita */}
                <div className="flex items-center">
                    <Image src="/banco_da_amazonia.png" alt="Basa Acredita" width={150} height={80}></Image>
                </div>
            </div>
            {/* Logo placeholder - crenorte */}
            <div className="flex items-center">
                <Image src="/crenorte.png" alt="crenorte" width={180} height={100}></Image>
            </div>
        </header>
    )
}