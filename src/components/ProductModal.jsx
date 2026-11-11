"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Check, Heart, Sparkles, X } from "lucide-react";
import { formatRupiah } from "@/data/products";
import StarRating from "./StarRating";

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function ProductModal({ product, isFavorite, onToggleFavorite, onClose }) {
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const [interested, setInterested] = useState(false);

  // Focus management, scroll lock, Escape key, focus trap
  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const nodes = panelRef.current.querySelectorAll(FOCUSABLE);
      if (!nodes.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-cocoa/50 backdrop-blur-sm" />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        className="relative grid max-h-[92vh] w-full max-w-3xl animate-modal-in overflow-y-auto rounded-t-[2rem] bg-cream shadow-lift sm:rounded-[2.5rem] md:grid-cols-2"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Tutup detail produk"
          className="absolute right-4 top-4 z-10 grid size-11 place-items-center rounded-full bg-white text-cocoa shadow-soft transition hover:bg-blush hover:text-rose-deep"
        >
          <X className="size-5" aria-hidden="true" />
        </button>

        <div className="relative aspect-4/3 bg-blush md:aspect-auto md:min-h-[26rem]">
          <Image
            src={product.image}
            alt={product.alt}
            fill
            sizes="(min-width: 768px) 384px, 100vw"
            style={{ objectPosition: product.imagePosition }}
            className="object-cover"
          />
          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-rose-deep shadow-soft">
            {product.tag}
          </span>
        </div>

        <div className="flex flex-col p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-rose-deep">
            {product.category}
          </p>
          <h3 id="product-modal-title" className="mt-1 text-3xl font-semibold text-cocoa">
            {product.name}
          </h3>
          <div className="mt-2 flex items-center gap-2">
            <StarRating value={product.rating} />
            <span className="text-sm text-mauve">
              {product.rating.toFixed(1)} ({product.reviews} ulasan)
            </span>
          </div>
          <p className="mt-4 font-heading text-3xl font-semibold text-rose-deep">
            {formatRupiah(product.price)}
          </p>
          <p className="mt-4 leading-relaxed text-mauve">{product.description}</p>

          <ul className="mt-5 space-y-2">
            {product.perks.map((perk) => (
              <li key={perk} className="flex items-center gap-2.5 text-sm font-medium text-cocoa">
                <span className="grid size-5 place-items-center rounded-full bg-pink text-rose-deep">
                  <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                </span>
                {perk}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setInterested(true)}
              disabled={interested}
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-rose px-6 text-base font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-rose-deep disabled:translate-y-0 disabled:bg-rose-deep"
            >
              {interested ? (
                <>
                  <Check className="size-4" aria-hidden="true" /> Tersimpan!
                </>
              ) : (
                <>
                  <Sparkles className="size-4" aria-hidden="true" /> Saya Tertarik
                </>
              )}
            </button>
            <button
              type="button"
              onClick={() => onToggleFavorite(product.id)}
              aria-pressed={isFavorite}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-pink bg-white px-5 text-base font-semibold text-cocoa transition hover:border-rose"
            >
              <Heart
                key={String(isFavorite)}
                aria-hidden="true"
                className={`size-4 ${isFavorite ? "animate-pop fill-rose text-rose" : "text-rose-deep"}`}
              />
              {isFavorite ? "Tersimpan" : "Simpan"}
            </button>
          </div>

          <p role="status" className="mt-4 min-h-10 text-xs leading-relaxed text-mauve">
            {interested
              ? `Terima kasih! ${product.name} telah masuk ke daftar keinginanmu. (Versi demo: sistem checkout belum terhubung.)`
              : "Fitur pemesanan ini adalah demonstrasi. Sistem checkout belum terhubung."}
          </p>
        </div>
      </div>
    </div>
  );
}
