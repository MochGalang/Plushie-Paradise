const variants = {
  primary:
    "bg-rose text-white shadow-soft hover:bg-rose-deep hover:shadow-lift",
  secondary:
    "bg-white text-cocoa border-2 border-pink hover:border-rose hover:text-rose-deep",
  light: "bg-white text-rose-deep shadow-soft hover:bg-blush hover:shadow-lift",
};

/** Rounded pill anchor used for in-page CTAs (smooth scroll via #hash). */
export default function ButtonLink({
  href,
  variant = "primary",
  className = "",
  children,
  ...rest
}) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3 text-base font-semibold transition duration-300 hover:-translate-y-1 active:translate-y-0 ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
