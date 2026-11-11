import { Star } from "lucide-react";

/** Five-star visual rating. `value` can be fractional (rounded for display). */
export default function StarRating({ value = 5, size = "size-4", label }) {
  const rounded = Math.round(value);
  return (
    <span
      className="inline-flex items-center gap-0.5"
      role="img"
      aria-label={label ?? `Dinilai ${value} dari 5 bintang`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={`${size} ${i < rounded ? "fill-[#FFC94D] text-[#FFC94D]" : "fill-transparent text-pink"
            }`}
        />
      ))}
    </span>
  );
}
