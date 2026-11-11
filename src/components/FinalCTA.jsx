import { ArrowRight } from "lucide-react";
import ButtonLink from "./ButtonLink";
import Reveal from "./Reveal";
import { Blob, HeartShape, SparkleShape, StarShape } from "./Decor";

export default function FinalCTA() {
  return (
    <section aria-labelledby="cta-title" className="px-4 pb-24 pt-8 sm:px-6 lg:px-8 lg:pb-32">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[3rem] bg-rose-deep px-6 py-16 text-center sm:px-12 lg:py-24">
        <Blob className="-left-20 -top-24 size-72 bg-rose/50" />
        <Blob className="-bottom-28 -right-16 size-80 bg-rose/40" />
        <HeartShape className="absolute left-[8%] top-[18%] size-10 animate-float text-pink/80" />
        <HeartShape className="absolute bottom-[16%] right-[9%] size-14 animate-float-rev text-pink/60" />
        <HeartShape className="absolute bottom-[12%] left-[16%] hidden size-6 animate-float-rev text-white/60 sm:block" />
        <StarShape className="absolute right-[14%] top-[14%] size-9 animate-twinkle text-[#FFD66B]" />
        <SparkleShape className="absolute left-[24%] top-[10%] hidden size-6 animate-twinkle text-white sm:block" />

        <div className="relative mx-auto max-w-2xl">
          <div className="text-6xl" aria-hidden="true">
            🧸
          </div>
          <h2
            id="cta-title"
            className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Siap Menemukan Sahabat Barumu?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/95">
            Boneka impianmu sudah menunggu. Yuk, buat hari-harimu jadi lebih manis dan penuh kehangatan!
          </p>
          <div className="mt-9">
            <ButtonLink href="#collection" variant="light" className="px-9 py-4 text-lg">
              Yuk, Peluk Sekarang!
              <ArrowRight className="size-5" aria-hidden="true" />
            </ButtonLink>
          </div>
          <p className="mt-5 text-sm font-medium text-pink">
            Jelajahi koleksi boneka menggemaskan kami hari ini.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
