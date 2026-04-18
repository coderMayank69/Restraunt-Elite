import Image from "next/image";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-linear-to-br from-orange-100 via-amber-50 to-red-100 px-6 pt-28 pb-16 sm:px-10 lg:px-16"
    >
      <div
        className="pointer-events-none absolute -top-32 -right-32 h-150 w-150 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(220,80,60,0.18) 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 -left-20 h-100 w-100 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(251,191,36,0.25) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1fr]">
        <div className="flex flex-col justify-center gap-7">
          <div className="inline-flex w-fit items-center gap-3 rounded-full border border-orange-300/70 bg-white/75 px-4 py-2 shadow-sm shadow-orange-200/60">
            <Image src="/logo.svg" alt="Restaurant Elite logo" width={28} height={28} priority />
            <p className="font-subheading text-xs font-semibold uppercase tracking-[0.2em] text-orange-800">
              Restaurant Elite
            </p>
          </div>

          <h1 className="font-heading max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight text-red-950 sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem]">
            Fine Dining,{" "}
            <span className="italic text-red-700">Crafted</span>{" "}
            with Passion.
          </h1>

          <p className="font-subheading max-w-xl text-base leading-7 text-orange-950/75 sm:text-lg">
            Experience the art of culinary excellence at Restaurant Elite —
            where every dish tells a story and every moment becomes a cherished
            memory.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-red-700 px-7 text-base font-semibold text-white shadow-md shadow-red-900/20 transition-colors hover:bg-red-800"
            >
              Reserve a Table
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#menu"
              className="inline-flex h-12 items-center rounded-xl border border-orange-300 bg-white px-7 text-base font-semibold text-orange-900 transition-colors hover:bg-orange-100"
            >
              Explore Menu
            </a>
          </div>
        </div>

        <div className="relative h-72 w-full overflow-hidden rounded-3xl border border-orange-300/70 bg-white/40 p-2 shadow-2xl shadow-red-900/15 sm:h-96 lg:h-130">
          <Image
            src="/images/hero/hero.webp"
            alt="Elegant fine dining interior at Restaurant Elite"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="rounded-2xl object-cover"
          />
          <div className="absolute bottom-5 left-5 rounded-2xl bg-white/85 px-5 py-3 shadow-lg backdrop-blur-sm">
            <p className="font-heading text-sm font-semibold text-red-900">★ Award-Winning Cuisine</p>
            <p className="font-subheading mt-0.5 text-xs text-orange-700">Lucknow&apos;s finest since 2009</p>
          </div>
        </div>
      </div>
    </section>
  );
}
