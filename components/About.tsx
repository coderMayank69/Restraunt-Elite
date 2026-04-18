import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-linear-to-br from-red-950 via-red-900 to-orange-900 py-28 text-orange-50"
    >
      <div
        className="pointer-events-none absolute -top-32 right-0 h-125 w-125 rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(255,200,100,0.3) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-24">

          <div className="relative w-full shrink-0 lg:w-5/12">
            <div className="absolute -bottom-5 -right-5 h-full w-full rounded-3xl border border-orange-400/30" />
            <div className="absolute -top-5 -left-5 h-1/2 w-1/2 rounded-2xl border border-orange-200/20" />

            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/aboutUs/about.webp"
                alt="Restaurant Elite dining room interior"
                width={600}
                height={560}
                className="h-105 w-full object-cover sm:h-120 lg:h-135"
              />
              <div className="absolute inset-0 bg-linear-to-br from-red-900/20 to-transparent" />
            </div>

            <div className="absolute -bottom-4 -right-4 z-10 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 shadow-xl backdrop-blur-md">
              <p className="font-heading text-3xl font-bold leading-none text-orange-300">
                15+
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-widest text-orange-200/70">
                Years of Excellence
              </p>
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <span className="mb-6 inline-block rounded-full border border-orange-400/40 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
              Our Story
            </span>

            <h2 className="mb-6 font-heading text-3xl font-bold leading-tight tracking-tight text-orange-50 sm:text-4xl md:text-5xl">
              Where Flavor Meets{" "}
              <span className="italic text-orange-300">Excellence</span>
            </h2>

            <p className="mb-4 text-sm leading-[1.9] text-orange-200/70 md:text-base">
              Welcome to{" "}
              <span className="font-semibold text-orange-300">Restaurant Elite</span>{" "}
              — Lucknow&apos;s most beloved destination for fine dining. Since 2009,
              we have been crafting unforgettable culinary experiences rooted in
              family recipes and seasonal, locally-sourced ingredients.
            </p>

            <p className="mb-4 text-sm leading-[1.9] text-orange-200/70 md:text-base">
              Our team of award-winning chefs blends authentic Indian flavours
              with modern culinary techniques, creating dishes that speak to
              both tradition and innovation — presented with the elegance our
              guests expect.
            </p>

            <p className="mb-10 text-sm leading-[1.9] text-orange-200/70 md:text-base">
              Whether you&apos;re celebrating a milestone or enjoying a quiet evening,
              every table at Restaurant Elite is crafted as a stage for a
              memorable experience.
            </p>

            <a
              href="#menu"
              className="inline-flex items-center gap-2 rounded-xl bg-orange-400 px-6 py-3 text-sm font-semibold text-red-950 transition-colors hover:bg-orange-300"
            >
              Explore Our Menu
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}