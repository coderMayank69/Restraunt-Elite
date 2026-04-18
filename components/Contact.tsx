const contactDetails = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="#b45309" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Visit Us",
    value: "12 Hazratganj, Lucknow, UP 226001",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="#b45309" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Call Us",
    value: "+91 98765 43210",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="#b45309" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "hello@restaurant-elite.com",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="#b45309" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Hours",
    value: "Mon–Sun: 12 PM – 3 PM  |  7 PM – 11 PM",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-orange-50 px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full border border-orange-300 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange-700">
            Contact & Location
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-red-950 sm:text-4xl">
            Find Us
          </h2>
          <p className="font-subheading mx-auto mt-3 max-w-xl text-base text-orange-900/70">
            Come visit us in the heart of Lucknow or get in touch to plan your perfect dining experience.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="flex flex-col gap-4 lg:col-span-2">
            {contactDetails.map((item, i) => (
              <div
                key={i}
                className="group flex items-center gap-4 rounded-2xl border border-orange-200/60 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <div>
                  <p className="mb-0.5 text-[11px] font-semibold uppercase tracking-widest text-orange-600">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-red-950">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="flex items-center justify-between rounded-2xl border border-orange-200/60 bg-white px-5 py-4 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
                <span className="text-sm font-semibold text-red-950">Open Now</span>
              </div>
              <span className="text-xs text-orange-700/60">Closes at 11:00 PM</span>
            </div>

            <a
              href="https://maps.google.com/?q=Hazratganj,Lucknow"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl bg-red-700 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-800"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Get Directions
            </a>
          </div>

          <div className="relative lg:col-span-3">
            <div className="absolute -inset-1 z-0 rounded-3xl bg-linear-to-br from-orange-300 to-red-400 opacity-20 blur-xl" />
            <div className="relative z-10 overflow-hidden rounded-3xl border border-orange-200 shadow-2xl shadow-orange-900/10">
              <iframe
                className="block h-95 w-full lg:h-115"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14245.368620511295!2d80.88758534215995!3d26.797231959821282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfb002bef7e39%3A0x1d4201aba668199f!2sAwadhi%20Bites%2C%20The%20Taste%20of%20Legacy!5e0!3m2!1sen!2sin!4v1776493450904!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant Elite location map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}