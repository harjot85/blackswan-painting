interface StarsProps {
  size?: number;
  /** Extra classes for the row — e.g. to left-align instead of centre. */
  className?: string;
}

export default function Stars({ size = 20, className = 'justify-center' }: StarsProps) {
  return (
    <div className={`flex items-center gap-[5px] ${className}`} aria-label="Five stars">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-gold star-pop"
          style={{ animationDelay: `${0.35 + i * 0.09}s` }}
          aria-hidden="true"
        >
          <path d="M12 2.5l2.9 5.88 6.49.95-4.7 4.58 1.11 6.46L12 17.33l-5.8 3.04 1.11-6.46-4.7-4.58 6.49-.95z" />
        </svg>
      ))}
    </div>
  );
}
