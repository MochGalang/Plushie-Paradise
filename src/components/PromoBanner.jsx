import Image from "next/image";
import ButtonLink from "./ButtonLink";
import Reveal from "./Reveal";
import { Blob, HeartShape, SparkleShape, StarShape } from "./Decor";

export default function PromoBanner() {
  return (
    <section aria-labelledby="promo-title" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <Reveal className="relative mx-auto grid max-w-7xl items-center gap-8 overflow-hidden rounded-[3rem] bg-pink px-6 py-14 sm:px-12 md:grid-cols-[1.1fr_0.9fr] lg:px-16 lg:py-0">
        <Blob className="-left-16 -top-20 size-64 bg-blush/70" />
        <Blob className="-bottom-24 right-1/3 size-72 bg-white/30" />
        <HeartShape className="absolute left-[44%] top-10 hidden size-8 animate-float-rev text-rose md:block" />
        <StarShape className="absolute bottom-10 left-8 size-9 animate-twinkle text-[#FFD66B]" />
        <SparkleShape className="absolute right-8 top-8 size-8 animate-twinkle text-white" />

        <div className="relative text-center md:text-left lg:py-20">
          <span className="inline-block rounded-full bg-white/80 px-4 py-1.5 text-sm font-semibold text-rose-deep">
            ✨ Momen Berpelukan
          </span>
          <h2
            id="promo-title"
            className="mt-5 text-4xl font-semibold leading-tight text-cocoa sm:text-5xl"
          >
            Bagikan Lebih Banyak Pelukan, Tebarkan Lebih Banyak Senyuman!
          </h2>
          <p className="mt-4 text-lg text-cocoa/80">
            Temukan boneka manis yang membuat setiap harimu terasa lebih istimewa.
          </p>
          <div className="mt-8">
            <ButtonLink href="#collection" variant="light">
              Jelajahi Koleksi Kami
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:max-w-none lg:py-10">
          <div className="relative mx-auto aspect-square w-full max-w-md animate-float-slow">
            <div className="absolute inset-3 rotate-6 rounded-[45%_55%_50%_50%/55%_45%_55%_45%] bg-white/50" />
            <div className="relative size-full overflow-hidden rounded-[42%_58%_50%_50%/50%_44%_56%_50%] border-8 border-white shadow-lift">
              <Image
                src="/images/promo-plush-new.jpg"
                alt="Boneka karakter lucu yang menggemaskan"
                fill
                sizes="(min-width: 768px) 420px, 90vw"
                className="object-cover"
              />
            </div>
            <HeartShape className="absolute -left-2 top-10 size-9 animate-float-rev text-rose" />
            <HeartShape className="absolute -right-1 bottom-12 size-6 animate-float text-white" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
