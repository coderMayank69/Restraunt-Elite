import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    info: "Food Blogger, Lucknow",
    rating: 5,
    review: "An absolutely breathtaking dining experience! The Dum Biryani was unlike anything I've had before — fragrant, perfectly spiced, and served with such elegance. The staff made us feel like royalty.",
    image: "/images/testimonials/priya.webp",
  },
  {
    id: 2,
    name: "Rohan Mehta",
    info: "Regular Guest",
    rating: 5,
    review: "We celebrated our anniversary here and it was perfect in every way. The ambiance, the food, the service — all impeccable. The Chef's Tasting Menu was a true journey through Indian flavors.",
    image: "/images/testimonials/rohan.webp",
    featured: true,
  },
  {
    id: 3,
    name: "Anjali Kapoor",
    info: "Corporate Events Director",
    rating: 4,
    review: "Hosted a business dinner for 15 guests and everything was flawless. The private dining room was tastefully arranged and the team accommodated our dietary requirements without any fuss. Highly recommend.",
    image: "/images/testimonials/anjali.webp",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4"
          fill={i < rating ? "#b45309" : "none"}
          stroke={i < rating ? "none" : "rgba(180,83,9,0.3)"}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 relative overflow-hidden bg-gradient-to-br from-red-950 via-red-900 to-orange-900 px-6 py-24 sm:px-10 lg:px-16"
    >
      <div
        className="pointer-events-none absolute top-16 left-1/2 -translate-x-1/2 select-none font-serif text-[20rem] leading-none text-white/[0.025]"
        aria-hidden
      >
        ❝
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full border border-orange-400/40 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-orange-50 sm:text-4xl">
            What Our Guests Say
          </h2>
          <p className="font-subheading mx-auto mt-3 max-w-xl text-base text-orange-100/60">
            Real experiences from guests who have dined with us.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className={`group relative overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 ${
                t.featured
                  ? "bg-white/15 ring-1 ring-orange-300/40 shadow-xl shadow-orange-900/20"
                  : "bg-white/8 ring-1 ring-white/10"
              }`}
              style={{
                background: t.featured
                  ? "linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06))"
                  : "linear-gradient(145deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03))",
              }}
            >
              {t.featured && (
                <div className="absolute top-0 left-8 right-8 h-[2px] rounded-full bg-gradient-to-r from-transparent via-orange-300 to-transparent" />
              )}

              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "linear-gradient(135deg, transparent 30%, rgba(255,200,100,0.04) 50%, transparent 70%)" }}
              />

              <Stars rating={t.rating} />

              <p className="mt-5 mb-7 text-sm italic leading-[1.9] text-orange-100/60">
                &ldquo;{t.review}&rdquo;
              </p>

              <hr className="mb-6 border-white/10" />

              <div className="flex items-center gap-4">
                <div className="relative flex-shrink-0">
                  <div className="h-12 w-12 overflow-hidden rounded-full ring-2 ring-orange-300/40">
                    <Image src={t.image} alt={t.name} width={48} height={48} className="h-full w-full object-cover" />
                  </div>
                  {t.featured && (
                    <div className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-orange-400 ring-2 ring-red-900">
                      <svg className="h-2 w-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                <div>
                  <p className="font-heading font-semibold text-orange-50">{t.name}</p>
                  <p className="mt-0.5 text-xs uppercase tracking-widest text-orange-300/80">{t.info}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-4">
          <p className="text-sm text-orange-100/50">Join thousands of satisfied guests</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-orange-400 px-7 py-3 text-sm font-semibold text-red-950 transition-colors hover:bg-orange-300"
          >
            Book Your Experience
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}