import Link from "next/link";
import logoSrc from "@/assets/images/Logos_Vegavat.png";
import headerLogoSrc from "@/assets/images/Final_Deepak.webp";

export default function Logo({
  light = false,
  header = false,
  className = "",
}: {
  light?: boolean;
  header?: boolean;
  className?: string;
}) {
  return (
    // shrink-0: as a flex child the logo would otherwise be squeezed narrower
    // than its aspect ratio when the nav needs room, distorting the wordmark.
    <Link href="/" className="group inline-flex shrink-0 items-center" aria-label="Vegavat home">
      {header ? (
        // Header-only brand lockup, src/assets/images/Final_Deepak.webp
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={headerLogoSrc.src}
          alt="Vegavat"
          width={headerLogoSrc.width}
          height={headerLogoSrc.height}
          className={`h-20 w-auto transition-transform duration-300 group-hover:scale-105 sm:h-24 ${className}`}
        />
      ) : (
        <LogoMark
          className={`h-16 w-auto transition-transform duration-300 group-hover:scale-105 ${
            light ? "brightness-0 invert" : ""
          } ${className}`}
        />
      )}
    </Link>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  // Full brand lockup (V mark + VEGAVAT wordmark), src/assets/images/Logos_Vegavat.png
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={logoSrc.src}
      alt="Vegavat"
      width={1632}
      height={656}
      className={className}
    />
  );
}
