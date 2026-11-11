/* Small decorative SVG shapes shared across sections. All are aria-hidden. */

export function HeartShape({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

export function SparkleShape({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 0c.6 5.8 2.2 9.4 4.4 11.6C18.6 13.8 22.2 15.4 24 12c-5.8.6-9.4 2.2-11.6 4.4C10.2 18.6 8.6 22.2 12 24c-.6-5.8-2.2-9.4-4.4-11.6C5.4 10.2 1.8 8.6 0 12c5.8-.6 9.4-2.2 11.6-4.4C13.8 5.4 15.4 1.8 12 0z" />
    </svg>
  );
}

export function StarShape({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 2.8l2.7 5.9 6.4.7-4.8 4.3 1.4 6.3L12 16.8l-5.7 3.2 1.4-6.3L2.9 9.4l6.4-.7L12 2.8z"
        strokeLinejoin="round"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

/* Cute teddy bear face used as the brand logo mark */
export function TeddyLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <circle cx="10.5" cy="12" r="7" fill="#C77C99" />
      <circle cx="37.5" cy="12" r="7" fill="#C77C99" />
      <circle cx="10.5" cy="12" r="3.6" fill="#F7C9D9" />
      <circle cx="37.5" cy="12" r="3.6" fill="#F7C9D9" />
      <circle cx="24" cy="26" r="18" fill="#E7B28E" />
      <ellipse cx="24" cy="31.5" rx="8.5" ry="6.5" fill="#FFF6E9" />
      <circle cx="17" cy="23" r="2.2" fill="#493A3A" />
      <circle cx="31" cy="23" r="2.2" fill="#493A3A" />
      <path d="M21.2 28.4c0-1.1 1.2-1.9 2.8-1.9s2.8.8 2.8 1.9c0 1.3-1.6 2.3-2.8 3.1-1.2-.8-2.8-1.8-2.8-3.1z" fill="#493A3A" />
      <path d="M24 31.5v1.4m-2.6.6c.7.7 1.6 1 2.6 1s1.9-.3 2.6-1" stroke="#493A3A" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="12.5" cy="29" r="2.6" fill="#F7C9D9" opacity=".85" />
      <circle cx="35.5" cy="29" r="2.6" fill="#F7C9D9" opacity=".85" />
    </svg>
  );
}

/* Soft organic blob background */
export function Blob({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute rounded-[58%_42%_47%_53%/52%_44%_56%_48%] ${className}`}
    />
  );
}
