import { Feather, PartyPopper, Smile, ThumbsUp } from "lucide-react";
import Reveal from "./Reveal";
import { HeartShape, SparkleShape } from "./Decor";

const features = [
  {
    icon: Feather,
    title: "Kelembutan Premium",
    text: "Rasakan boneka empuk dan nyaman yang dirancang khusus untuk kenyamanan maksimal.",
    card: "bg-white",
    iconBg: "bg-pink",
  },
  {
    icon: Smile,
    title: "Desain Menggemaskan",
    text: "Setiap boneka memiliki pesona unik, ekspresi lucu, dan karakter tersendiri.",
    card: "bg-blush",
    iconBg: "bg-white",
  },
  {
    icon: PartyPopper,
    title: "Kado Sempurna",
    text: "Sahabat manis untuk hari ulang tahun, momen perayaan, dan orang terkasih.",
    card: "bg-white",
    iconBg: "bg-[#FFE9B8]",
  },
  {
    icon: ThumbsUp,
    title: "Kualitas Tepercaya",
    text: "Material pilihan berkualitas tinggi dengan jahitan rapi yang awet dan aman.",
    card: "bg-blush",
    iconBg: "bg-white",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative scroll-mt-20 overflow-hidden py-24 lg:py-32">
      <HeartShape className="absolute right-[7%] top-20 size-8 animate-float-rev text-pink" />
      <SparkleShape className="absolute left-[6%] top-32 size-7 animate-twinkle text-[#FFC94D]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-deep">
            Keunggulan Kami
          </p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight text-cocoa sm:text-5xl">
            Alasan Semua Orang Menyukai Boneka Kami
          </h2>
          <p className="mt-4 text-lg text-mauve">
            Sentuhan detail kecil yang membuat setiap pelukan terasa begitu istimewa.
          </p>
        </Reveal>

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text, card, iconBg }, i) => (
            <li key={title} className={i % 2 === 1 ? "lg:translate-y-8" : ""}>
              <Reveal delay={i * 100} className="h-full">
                <div
                  className={`group h-full rounded-[2.2rem] border-2 border-pink/60 p-7 shadow-soft transition duration-300 hover:-translate-y-2 hover:shadow-lift ${card}`}
                >
                  <span
                    className={`grid size-16 place-items-center rounded-[1.5rem] text-rose-deep transition duration-300 group-hover:rotate-6 group-hover:scale-110 ${iconBg}`}
                  >
                    <Icon className="size-8" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-2xl font-semibold leading-snug text-cocoa">
                    {title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-mauve">{text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
