"use client";

import { useCallback, useMemo, useState } from "react";
import { Heart } from "lucide-react";
import { categories, products } from "@/data/products";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import Reveal from "./Reveal";
import { Blob, HeartShape, SparkleShape } from "./Decor";

export default function Collection() {
  const [filter, setFilter] = useState("Semua");
  const [favorites, setFavorites] = useState([]);
  const [selected, setSelected] = useState(null);

  const visible = useMemo(
    () => (filter === "Semua" ? products : products.filter((p) => p.category === filter)),
    [filter],
  );

  const toggleFavorite = useCallback((id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id],
    );
  }, []);

  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <section
      id="collection"
      className="relative scroll-mt-20 overflow-hidden bg-blush/70 py-24 lg:py-32"
    >
      <div aria-hidden="true" className="dots absolute inset-0 opacity-60" />
      <Blob className="-right-20 top-20 size-64 bg-pink/50" />
      <HeartShape className="absolute left-[8%] top-24 size-7 animate-float-rev text-pink" />
      <SparkleShape className="absolute right-[10%] top-40 size-6 animate-twinkle text-rose/70" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-deep">
            Koleksi Kami ♡
          </p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight text-cocoa sm:text-5xl">
            Temukan Sahabat Barumu!
          </h2>
          <p className="mt-4 text-lg text-mauve">
            Temukan teman mungil terbaik untuk menemani setiap momen keseharianmu.
          </p>
        </Reveal>

        {/* filters + favorites counter */}
        <Reveal
          delay={100}
          className="mt-10 flex flex-col items-center gap-4 lg:flex-row lg:justify-between"
        >
          <div role="group" aria-label="Filter boneka berdasarkan kategori" className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                aria-pressed={filter === cat}
                className={`min-h-11 rounded-full px-5 text-sm font-semibold transition duration-200 ${
                  filter === cat
                    ? "bg-rose-deep text-white shadow-soft"
                    : "bg-white text-cocoa hover:bg-pink/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <p
            role="status"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-cocoa shadow-soft"
          >
            <Heart className="size-4 fill-rose text-rose" aria-hidden="true" />
            {favorites.length === 0
              ? "Ketuk tanda hati untuk simpan favoritmu"
              : `${favorites.length} favorit tersimpan`}
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {visible.map((product, i) => (
            <li key={product.id}>
              <Reveal delay={(i % 3) * 100} className="h-full">
                <ProductCard
                  product={product}
                  isFavorite={favorites.includes(product.id)}
                  onToggleFavorite={toggleFavorite}
                  onView={setSelected}
                />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      {selected && (
        <ProductModal
          key={selected.id}
          product={selected}
          isFavorite={favorites.includes(selected.id)}
          onToggleFavorite={toggleFavorite}
          onClose={closeModal}
        />
      )}
    </section>
  );
}
