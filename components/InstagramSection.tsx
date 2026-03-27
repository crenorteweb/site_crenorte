'use client'
import { TitleBanc } from "./textBanc/TitleBanc";
import { InstagramEmbed } from 'react-social-media-embed';

export function InstagramSection() {
    return (
        <section className="px-4 py-8 md:py-28 pb-16 w-full flex justify-center">
        <div className="mx-auto w-full max-w-xl md:max-w-7xl flex flex-col items-center rounded-[3rem] bg-white p-8 md:p-12 text-brand-dark text-center">
          <TitleBanc as="h2" className="mb-8 text-xl md:text-3xl font-black uppercase tracking-tight">
            SIGA NOSSO INSTAGRAM! <br className="md:hidden" />
            <span className="text-brand-main">@CRENORTE</span>
          </TitleBanc>

          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center w-full">
            {/* Phone Mockup 1 */}
            <div className="relative rounded-[2.5rem] border-8 border-gray-900 bg-gray-50 overflow-hidden shadow-2xl shrink-0">
              <InstagramEmbed
                  url="https://www.instagram.com/reel/DQpIyLOEe3L/?igsh=eDlhMDNsMW81ZDF5"
                  width={326}
              />
            </div>

            <div className="relative rounded-[2.5rem] border-8 border-gray-900 bg-gray-50 overflow-hidden shadow-2xl shrink-0">
              <InstagramEmbed
                url="https://www.instagram.com/reel/DRUd3-JksDo/?igsh=aXYxZDQ3bGUxNzMy"
                width={326}
              />
            </div>

            <div className="relative rounded-[2.5rem] border-8 border-gray-900 bg-gray-50 overflow-hidden shadow-2xl shrink-0">
              <InstagramEmbed
                url="https://www.instagram.com/reel/DQZbvx6jp84/?igsh=MTl4NHp6Nm42MDBnZw=="
                width={326}
              />
            </div>
          </div>
        </div>
      </section>
    )
}