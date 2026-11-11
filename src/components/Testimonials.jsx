import { Quote } from "lucide-react";
import { testimonials } from "@/data/site";
import Reveal from "./Reveal";
import StarRating from "./StarRating";
import { Blob, HeartShape } from "./Decor";

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="relative scroll-mt-20 overflow-hidden bg-blush/70 py-24 lg:py-32"
    >
      <div aria-hidden="true" className="dots absolute inset-0 opacity-50" />
      <Blob className="-left-24 bottom-10 size-72 bg-pink/50" />
      <HeartShape className="absolute right-[9%] top-24 size-8 animate-float-rev text-pink" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-deep">
            Pelukan Bahagia
          </p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight text-cocoa sm:text-5xl">
            Cerita Manis, Senyuman Hangat!
          </h2>
          <p className="mt-4 text-lg text-mauve">
            Lihat apa kata mereka yang telah menemukan sahabat boneka barunya.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <li key={t.name}>
              <Reveal delay={i * 120} className="h-full">
                <figure
                  className={`relative flex h-full flex-col rounded-[2.2rem] bg-white p-7 pt-9 shadow-soft transition duration-300 hover:-translate-y-2 hover:rotate-0 hover:shadow-lift ${i === 0 ? "md:-rotate-1" : i === 2 ? "md:rotate-1" : ""
                    }`}
                >
                  <span className="absolute -top-5 right-7 grid size-12 place-items-center rounded-full bg-rose text-white shadow-soft">
                    <Quote className="size-5 fill-white" aria-hidden="true" />
                  </span>
                  <StarRating value={5} size="size-5" label="Dinilai 5 dari 5 bintang" />
                  <blockquote className="mt-4 flex-1 leading-relaxed text-cocoa">
                    “{t.text}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t-2 border-dashed border-pink pt-5">
                    <span
                      aria-hidden="true"
                      className={`grid size-12 place-items-center rounded-full text-2xl ${t.tone}`}
                    >
                      {t.emoji}
                    </span>
                    <span>
                      <span className="block font-heading text-lg font-semibold text-cocoa">
                        {t.name}
                      </span>
                      <span className="block text-xs text-mauve">Pencinta boneka</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
