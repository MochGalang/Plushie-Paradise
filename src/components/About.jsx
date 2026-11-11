import Image from "next/image";
import { Check } from "lucide-react";
import ButtonLink from "./ButtonLink";
import Reveal from "./Reveal";
import { Blob, HeartShape, SparkleShape } from "./Decor";

const values = [
  "Kelembutan ekstra di setiap boneka",
  "Karakter menggemaskan dengan kepribadian unik",
  "Siap dijadikan kado manis untuk setiap momen",
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 overflow-hidden py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* LEFT: photo */}
        <Reveal className="relative mx-auto w-full max-w-lg">
          <Blob className="-left-6 -top-6 size-48 bg-pink sm:-left-10 sm:-top-10 sm:size-64" />
          <div className="relative aspect-5/4 overflow-hidden rounded-[3rem] rounded-br-[7rem] border-8 border-white shadow-lift">
            <Image
              src="/images/pou-plush.jpg"
              alt="Boneka Pou yang lucu dan menggemaskan"
              fill
              sizes="(min-width: 1024px) 512px, 92vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 flex animate-float-slow items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-lift sm:-right-6">
            <span className="text-2xl" aria-hidden="true">
              🧸
            </span>
            <p className="font-heading text-sm font-semibold leading-tight text-cocoa">
              Pelukan membuat
              <br />
              semuanya lebih indah
            </p>
          </div>
          <HeartShape className="absolute -right-3 top-8 size-9 animate-float-rev text-rose" />
          <SparkleShape className="absolute -left-3 bottom-16 size-8 animate-twinkle text-[#FFC94D]" />
        </Reveal>

        {/* RIGHT: story */}
        <Reveal delay={150} className="text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-deep">
            Cerita Kami
          </p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight text-cocoa sm:text-5xl">
            Dunia Penuh Kehangatan & Pelukan
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-mauve">
            Plushie Paradise hadir untuk membagikan momen-momen kecil penuh kebahagiaan
            melalui boneka yang menggemaskan. Kami percaya bahwa pelukan sederhana dari
            boneka yang lembut mampu mengubah hari biasa menjadi luar biasa.
          </p>
          <p className="mt-4 leading-relaxed text-mauve">
            Mulai dari kelinci yang mengantuk hingga bebek yang ceria, setiap sahabat
            di koleksi kami dipilih dengan teliti karena wajahnya yang manis dan teksturnya
            yang nyaman, sehingga kamu bisa menemukan yang paling pas untukmu atau seseorang yang kamu sayangi.
          </p>

          <ul className="mx-auto mt-8 inline-flex max-w-md flex-col gap-3 text-left lg:mx-0">
            {values.map((v) => (
              <li key={v} className="flex items-start gap-3 font-medium text-cocoa">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-pink text-rose-deep">
                  <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                </span>
                {v}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <ButtonLink href="#collection">Temukan Bonekamu</ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
