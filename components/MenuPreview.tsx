import Image from "next/image";

const menuItems = [
  { id: 1, title: "Dal Makhani", price: "₹320", tag: "Chef's Special", img: "/images/menu/menu1.webp", desc: "Slow-cooked black lentils in a rich, buttery tomato sauce." },
  { id: 2, title: "Murgh Tikka Masala", price: "₹480", tag: "Most Popular", img: "/images/menu/menu2.webp", desc: "Tender grilled chicken in creamy spiced tomato gravy." },
  { id: 3, title: "Dum Biryani", price: "₹550", tag: null, img: "/images/menu/menu3.webp", desc: "Slow-dum cooked fragrant basmati rice with saffron and spices." },
  { id: 4, title: "Paneer Makhani", price: "₹380", tag: "Vegetarian", img: "/images/menu/menu4.webp", desc: "Cottage cheese in a velvety makhani sauce with fenugreek." },
  { id: 5, title: "Lamb Rogan Josh", price: "₹620", tag: "Seasonal", img: "/images/menu/menu5.webp", desc: "Kashmiri-style slow-braised lamb with aromatics." },
  { id: 6, title: "Gulab Jamun Soufflé", price: "₹280", tag: "New", img: "/images/menu/menu6.webp", desc: "Classic Indian sweet reimagined as a warm soufflé." },
];

const tagClasses: Record<string, string> = {
  "Chef's Special": "bg-red-700 text-white",
  "Most Popular": "bg-orange-500 text-white",
  Vegetarian: "bg-green-600 text-white",
  Seasonal: "bg-amber-500 text-white",
  New: "bg-blue-600 text-white",
};

export function MenuPreview() {
  return (
    <section
      id="menu"
      className="scroll-mt-24 bg-orange-50 px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-14 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-4 inline-block rounded-full border border-orange-300 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange-700">
              Signature Dishes
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-red-950 sm:text-4xl">
              A Taste of Restaurant Elite
            </h2>
            <p className="font-subheading mt-3 max-w-xl text-base text-orange-900/70">
              Handcrafted with passion using the finest seasonal produce and time-honoured recipes.
            </p>
          </div>
          <a
            href="#"
            className="shrink-0 rounded-xl border border-orange-300 bg-white px-6 py-3 text-sm font-semibold text-orange-900 shadow-sm transition-colors hover:bg-orange-100"
          >
            View Full Menu →
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <article
              key={item.id}
              className="group relative overflow-hidden rounded-2xl border border-orange-200/60 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-900/10"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                {item.tag && (
                  <span className={`absolute top-3 left-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide ${tagClasses[item.tag] ?? "bg-gray-700 text-white"}`}>
                    {item.tag}
                  </span>
                )}
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-heading text-base font-semibold text-red-950 transition-colors group-hover:text-red-700">
                    {item.title}
                  </h3>
                  <span className="shrink-0 font-heading text-base font-bold text-orange-700">
                    {item.price}
                  </span>
                </div>
                <p className="font-subheading mt-2 text-sm leading-6 text-orange-900/65">
                  {item.desc}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-red-700 to-orange-400 transition-transform duration-500 group-hover:scale-x-100" />
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-gradient-to-r from-red-800 to-orange-700 px-8 py-10 text-white shadow-lg">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-200">
                Today&apos;s Special
              </p>
              <h3 className="font-heading text-xl font-bold sm:text-2xl">
                Weekend Tasting Menu — 7 Courses for ₹1,499
              </h3>
              <p className="mt-1 text-sm text-orange-100/80">
                Available Fri–Sun, 7 PM onwards. Advance booking required.
              </p>
            </div>
            <a
              href="#contact"
              className="shrink-0 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-red-800 transition-colors hover:bg-orange-100"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}