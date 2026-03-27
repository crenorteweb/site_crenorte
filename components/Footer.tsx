import Image from "next/image"

export function Footer() {
    return (
        <footer className="w-full bg-brand-dark px-6 py-8 text-xs text-brand-dark md:px-12 border-t border-white/10">
            <div className="mx-auto flex max-w-6xl flex-col justify-between md:gap-8 md:flex-row">
        
                <div className="flex flex-col items-center justify-center md:items-start md:justify-start text-center md:text-left gap-4 text-white/70">
                    <Image src="/crenorte.png" alt="crenorte" width={230} height={100}></Image>
                    <p className="uppercase tracking-wide">
                      INSTITUTO CULTURAL, SOCIAL E EDUCACIONAL DA AMAZÔNIA - ICSEIA
                    </p>
                    <p>CNPJ: 50.570.7600001-02</p>
                    <p>E-MAIL: CONTATO@CRENORTE.COM.BR</p>
                    <div className="flex flex-col gap-2 pt-2">
                      <a href="#" className="hover:text-white transition-colors">POLÍTICA DE PRIVACIDADE</a>
                      <a href="#" className="hover:text-white transition-colors">TERMOS DE USO</a>
                    </div>
                </div>
        
                <div className="flex flex-wrap items-center justify-center md:justify-between pb-20 md:gap-8 md:pt-6 md:pt-0">
                    {/* Logos */}
                    <div className="">
                      <Image src="/basa_acredita.png" alt="basa acrdita" width={280} height={100}></Image>
                    </div>
        
                    <div className="">
                      <Image src="/banco_da_amazonia.png" alt="banco da amazonia" width={180} height={100}></Image>
                    </div>
                </div>
            </div>
        </footer>
        
    )
}