import Image from "next/image";
import { Form } from "./Form";

export function FormSection() {
    return (
      <section className="px-4 py-12 md:py-20 w-full bg-brand-dark">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 md:flex-row md:items-center lg:gap-16">

          {/* Left Text & Image */}
          <div className="w-full md:w-1/2">
            <Image 
              src={"/prancheta-8.png"}
              alt="Form Image"
              className="rounded-3xl"
              width={600}
              height={400}
            />
          </div>

          {/* Right Form */}
          <Form />

        </div>
      </section>
    )
}