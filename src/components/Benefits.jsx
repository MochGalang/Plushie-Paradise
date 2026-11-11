import { Cloud, Gift, Heart } from "lucide-react";
import Reveal from "./Reveal";

const benefits = [
  {
    icon: Heart,
    title: "Dibuat dengan Cinta",
    text: "Setiap boneka punya pesona unik tersendiri.",
    bg: "bg-pink",
  },
  {
    icon: Cloud,
    title: "Super Lembut",
    text: "Teman setia yang empuk dan nyaman dipeluk.",
    bg: "bg-[#DCEBFA]",
  },
  {
    icon: Gift,
    title: "Kado Sempurna",
    text: "Kado manis penuh arti untuk orang tersayang.",
    bg: "bg-[#FFE9B8]",
  },
];

export default function Benefits() {
  return (
    <section aria-label="Keunggulan brand" className="relative z-10 -mt-10 px-4 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-6xl rounded-[2.5rem] bg-white p-4 shadow-lift sm:p-6">
        <ul className="grid gap-3 md:grid-cols-3 md:gap-0 md:divide-x-2 md:divide-dashed md:divide-pink">
          {benefits.map(({ icon: Icon, title, text, bg }) => (
            <li
              key={title}
              className="group flex items-center gap-4 rounded-3xl p-4 transition hover:bg-cream md:rounded-none md:px-8"
            >
              <span
                className={`grid size-16 shrink-0 place-items-center rounded-[1.4rem] text-cocoa transition duration-300 group-hover:-rotate-6 group-hover:scale-110 ${bg}`}
              >
                <Icon className="size-8" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-cocoa">{title}</h3>
                <p className="mt-0.5 text-sm leading-relaxed text-mauve">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
