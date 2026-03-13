import Image from "next/image"

export function Footer() {
    return (
        <footer className="w-full bg-brand-dark px-6 py-8 text-xs text-brand-dark md:px-12 border-t border-white/10">
            <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 md:flex-row">
        
                <div className="flex flex-col gap-4 text-white/70">
                    <Image src="/crenorte.png" alt="crenorte" width={250} height={100}></Image>
                    <p className="uppercase tracking-wide">
                      INSTITUTO CULTURAL, SOCIAL E EDUCACIONAL DA AMAZÔNIA - ICSEIA
                    </p>
                    <p>CNPJ: 00.000.000/0001-00</p>
                    <p>E-MAIL: CONTATO@CRENORTE.COM.BR</p>
                    <div className="flex flex-col gap-2 pt-2">
                      <a href="#" className="hover:text-white transition-colors">POLÍTICA DE PRIVACIDADE</a>
                      <a href="#" className="hover:text-white transition-colors">TERMOS DE USO</a>
                    </div>
                </div>
        
                <div className="flex flex-wrap items-center justify-between gap-8 pt-6 md:pt-0">
                    {/* Logos */}
                    <div className="flex items-center font-bold text-white text-xl tracking-tighter">
                      <Image src="/basa_acredita.png" alt="crenorte" width={280} height={180}></Image>
                    </div>
        
                    <div className="flex items-center">
                      <Image src="/banco_da_amazonia.png" alt="crenorte" width={180} height={100}></Image>
                    </div>
                </div>
            </div>
        </footer>
        
    )
}