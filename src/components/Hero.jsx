import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ButtonLink from "./ButtonLink";
import { Blob, HeartShape, SparkleShape, StarShape } from "./Decor";

const friends = [
  { emoji: "🧸", bg: "bg-[#F2D3B8]" },
  { emoji: "🐰", bg: "bg-pink" },
  { emoji: "🐱", bg: "bg-white" },
  { emoji: "🐥", bg: "bg-[#FFE9B8]" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-20 overflow-hidden pb-24 pt-8 sm:pt-12 lg:pb-32 lg:pt-16"
    >
      {/* background decoration */}
      <Blob className="-left-24 top-10 size-72 bg-blush" />
      <Blob className="-right-32 bottom-0 size-96 bg-pink/40" />
      <HeartShape className="absolute left-[46%] top-16 hidden size-6 animate-float-rev text-pink lg:block" />
      <SparkleShape className="absolute bottom-24 left-6 size-6 animate-twinkle text-rose/60" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        {/* LEFT */}
        <div className="text-center lg:text-left">
          <p className="inline-flex animate-fade-up items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-rose-deep shadow-soft">
            ✨ Kebahagiaanmu dimulai di sini!
          </p>

          <h1 className="mt-6 animate-fade-up text-5xl font-semibold leading-[1.05] tracking-tight text-cocoa [animation-delay:120ms] sm:text-6xl xl:text-7xl">
            Pelukan Kecil,
            <br />
            <span className="relative inline-block text-rose">
              Sejuta Kebahagiaan!
              <svg
                viewBox="0 0 300 14"
                aria-hidden="true"
                className="absolute -bottom-2 left-0 h-3 w-full text-pink"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M3 9c40-8 80 6 120-1s80-6 110 0 50 2 64-3"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl animate-fade-up text-lg leading-relaxed text-mauve [animation-delay:240ms] lg:mx-0">
            Temukan sahabat barumu yang menggemaskan! Jelajahi koleksi boneka
            lembut kami yang siap menghadirkan senyuman dan kehangatan di setiap harimu.
          </p>

          <div className="mt-9 flex animate-fade-up flex-col items-stretch justify-center gap-3 [animation-delay:360ms] sm:flex-row lg:justify-start">
            <ButtonLink href="#collection">
              Lihat Koleksi
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="#about" variant="secondary">
              Pelajari Lebih Lanjut
            </ButtonLink>
          </div>

          <div className="mt-10 flex animate-fade-up items-center justify-center gap-4 [animation-delay:480ms] lg:justify-start">
            <ul className="flex -space-x-3" aria-hidden="true">
              {friends.map((f) => (
                <li
                  key={f.emoji}
                  className={`grid size-12 place-items-center rounded-full border-4 border-cream text-xl shadow-soft ${f.bg}`}
                >
                  {f.emoji}
                </li>
              ))}
            </ul>
            <p className="text-sm font-medium text-cocoa">
              Dibuat dengan cinta untuk semua orang{" "}
              <span className="text-rose" aria-hidden="true">
                ♡
              </span>
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative mx-auto w-full max-w-md animate-fade-up [animation-delay:200ms] lg:max-w-lg">
          <div className="relative animate-float">
            {/* pink organic shape behind the photo */}
            <div
              aria-hidden="true"
              className="absolute -inset-4 rotate-6 rounded-[46%_54%_42%_58%/55%_42%_58%_45%] bg-pink sm:-inset-6"
            />
            <div className="relative aspect-4/5 overflow-hidden rounded-[42%_58%_46%_54%/44%_46%_54%_56%] border-8 border-white bg-blush shadow-lift">
              <Image
                src="/images/makka-pakka.jpg"
                alt="Karakter boneka Makka Pakka yang lucu dan menggemaskan siap dipeluk"
                fill
                priority
                sizes="(min-width: 1024px) 512px, (min-width: 448px) 448px, 92vw"
                className="object-cover"
              />
            </div>

            {/* floating info cards */}
            <div className="absolute -left-2 top-10 flex animate-float-rev items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-lift sm:-left-8">
              <span className="grid size-9 place-items-center rounded-full bg-blush text-rose">
                <HeartShape className="size-5" />
              </span>
              <span className="font-heading text-base font-semibold text-cocoa">
                Super Lembut! ♡
              </span>
            </div>
            <div className="absolute -right-2 bottom-10 animate-float-slow rounded-2xl bg-white px-4 py-3 shadow-lift sm:-right-8">
              <p className="font-heading text-base font-semibold text-cocoa">
                Sahabat barumu!
              </p>
              <p className="text-xs text-mauve">Pelukan hangat sudah termasuk 🧸</p>
            </div>

            <StarShape className="absolute -right-3 -top-4 size-10 animate-twinkle text-[#FFD66B] sm:-right-6" />
            <SparkleShape className="absolute -left-4 bottom-24 size-7 animate-twinkle text-rose [animation-delay:1s] sm:-left-10" />
            <HeartShape className="absolute right-6 top-1/2 size-7 animate-float-rev text-rose/80" />
          </div>
        </div>
      </div>
    </section>
  );
}
