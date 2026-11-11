"use client";

import Image from "next/image";
import { Eye, Heart } from "lucide-react";
import { formatRupiah } from "@/data/products";
import StarRating from "./StarRating";

export default function ProductCard({ product, isFavorite, onToggleFavorite, onView }) {
  return (
    <article className="group flex h-full flex-col rounded-[2rem] bg-white p-3 shadow-soft transition duration-300 hover:-translate-y-2 hover:shadow-lift">
      <div className="relative aspect-square overflow-hidden rounded-[1.6rem] bg-blush">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 92vw"
          style={{ objectPosition: product.imagePosition }}
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-rose-deep shadow-soft">
          {product.tag}
        </span>

        <button
          type="button"
          onClick={() => onToggleFavorite(product.id)}
          aria-pressed={isFavorite}
          aria-label={
            isFavorite
              ? `Hapus ${product.name} dari favorit`
              : `Tambahkan ${product.name} ke favorit`
          }
          className="absolute right-3 top-3 grid size-11 place-items-center rounded-full bg-white/95 shadow-soft transition hover:scale-110 active:scale-95"
        >
          <Heart
            key={String(isFavorite)}
            aria-hidden="true"
            className={`size-5 transition-colors ${
              isFavorite
                ? "animate-pop fill-rose text-rose"
                : "text-rose-deep"
            }`}
          />
        </button>
      </div>

      <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-rose-deep">
          {product.category}
        </p>
        <h3 className="mt-1 text-2xl font-semibold text-cocoa">{product.name}</h3>

        <div className="mt-2 flex items-center gap-2">
          <StarRating value={product.rating} />
          <span className="text-sm text-mauve">
            {product.rating.toFixed(1)} ({product.reviews})
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <p className="font-heading text-2xl font-semibold text-cocoa">
            {formatRupiah(product.price)}
          </p>
          <button
            type="button"
            onClick={() => onView(product)}
            aria-label={`Lihat detail ${product.name}`}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-rose px-5 text-sm font-semibold text-white transition duration-300 hover:bg-rose-deep active:scale-95"
          >
            <Eye className="size-4" aria-hidden="true" />
            Lihat Detail
          </button>
        </div>
      </div>
    </article>
  );
}
