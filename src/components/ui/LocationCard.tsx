export function LocationCard({
  heading,
  lines,
  phones,
  email,
  linkLabel,
  linkHref,
}: {
  heading: string;
  lines: string[];
  phones?: string[];
  email?: string;
  linkLabel?: string;
  linkHref?: string;
}) {
  return (
    <div className="rounded-2xl border border-charcoal/10 bg-white p-8">
      <h3 className="font-display text-lg font-bold text-charcoal">
        {heading}
      </h3>
      <div className="mt-4 space-y-1 text-sm text-charcoal/65">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      {(phones || email) && (
        <div className="mt-4 space-y-1 text-sm text-charcoal/65">
          {phones?.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="block transition-colors hover:text-tech-blue"
            >
              {phone}
            </a>
          ))}
          {email && (
            <a
              href={`mailto:${email}`}
              className="block transition-colors hover:text-tech-blue"
            >
              {email}
            </a>
          )}
        </div>
      )}
      {linkLabel && linkHref && (
        <a
          href={linkHref}
          target={linkHref.startsWith("http") ? "_blank" : undefined}
          rel={linkHref.startsWith("http") ? "noopener noreferrer" : undefined}
          className="mt-4 inline-block text-sm font-semibold text-tech-blue"
        >
          {linkLabel} →
        </a>
      )}
    </div>
  );
}
