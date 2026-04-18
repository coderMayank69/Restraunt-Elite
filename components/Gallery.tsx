import Image from "next/image";

const galleryItems = [
  { src: "/images/gallery/gallery1.webp", alt: "Elegant dining room with candlelit tables", span: "col-span-2" },
  { src: "/images/gallery/gallery2.webp", alt: "Gourmet dessert presentation", span: "" },
  { src: "/images/gallery/gallery3.webp", alt: "Guests enjoying a romantic dinner", span: "" },
  { src: "/images/menu/menu1.webp", alt: "Dal Makhani signature dish", span: "" },
  { src: "/images/menu/menu5.webp", alt: "Lamb Rogan Josh served at table", span: "col-span-2" },
  { src: "/images/hero/hero.webp", alt: "Restaurant exterior view", span: "" },
];

export function Gallery() {
  return (
    <section
      id="gallery"
      className="scroll-mt-24 bg-orange-50 px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full border border-orange-300 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange-700">
            Gallery
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-red-950 sm:text-4xl">
            A Glimpse Into Our World
          </h2>
          <p className="font-subheading mx-auto mt-3 max-w-xl text-base text-orange-900/70">
            Dishes, interiors, and happy moments — captured to give you a taste of what awaits.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-900/15 ${item.span}`}
            >
              <div className="relative h-60 w-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <p className="absolute bottom-4 left-4 right-4 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {item.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
