import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { navLinks } from "@/data/site";
import { TeddyLogo } from "./Decor";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "./SocialIcons";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/", icon: InstagramIcon },
  { label: "TikTok", href: "https://www.tiktok.com/", icon: TikTokIcon },
  { label: "Facebook", href: "https://www.facebook.com/", icon: FacebookIcon },
];

const contacts = [
  { icon: Mail, text: "mochgalang67@gmail.com", href: "mailto:mochgalang67@gmail.com" },
  { icon: Phone, text: "+62 000 0000 0000" },
  { icon: MapPin, text: "Cianjur, Indonesia" },
];

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 rounded-t-[3rem] bg-cocoa text-cream">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.2fr]">
          {/* brand */}
          <div>
            <a href="#home" className="inline-flex items-center gap-3" aria-label="Plushie Paradise, kembali ke atas">
              <span className="grid size-12 place-items-center rounded-full bg-blush">
                <TeddyLogo className="size-9" />
              </span>
              <span className="font-heading text-2xl font-semibold text-white">
                Plushie Paradise
              </span>
            </a>
            <p className="mt-4 font-heading text-lg text-pink">
              Pelukan Kecil, Sejuta Kebahagiaan.
            </p>
            <p className="mt-3 max-w-sm leading-relaxed text-cream/80">
              Menghadirkan momen-momen manis penuh kebahagiaan lewat koleksi boneka yang menggemaskan.
            </p>
            <ul className="mt-6 flex gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} (terbuka di tab baru)`}
                    className="grid size-11 place-items-center rounded-full bg-white/10 text-pink transition duration-300 hover:-translate-y-1 hover:bg-pink hover:text-cocoa"
                  >
                    <Icon className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* navigation */}
          <nav aria-label="Navigasi footer">
            <h3 className="text-lg font-semibold text-white">Jelajahi</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 md:grid-cols-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="inline-block text-cream/80 transition hover:translate-x-1 hover:text-pink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">Hubungi Kami</h3>
            <ul className="mt-4 space-y-3">
              {contacts.map(({ icon: Icon, text, href }) => (
                <li key={text} className="flex items-start gap-3 text-cream/80">
                  <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-white/10 text-pink">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  {href ? (
                    <a
                      href={href}
                      className="break-words transition hover:text-pink hover:underline"
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="break-words">{text}</span>
                  )}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-cream/60">
              Informasi kontak untuk keperluan demonstrasi.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 text-sm text-cream/70 sm:flex-row">
          <p>© 2026 Plushie Paradise. Hak cipta dilindungi.</p>
          <a
            href="#home"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white/10 px-4 font-medium text-pink transition hover:bg-pink hover:text-cocoa"
          >
            <ArrowUp className="size-4" aria-hidden="true" />
            Kembali ke atas
          </a>
        </div>
      </div>
    </footer>
  );
}
