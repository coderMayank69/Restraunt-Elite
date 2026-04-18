"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface FormState {
  name: string;
  email: string;
  date: string;
  time: string;
  guests: string;
  notes: string;
}

const timeSlots = [
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
  "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM",
];

export function Reservation() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  // Keep validation in one place so field-level error messages stay consistent.
  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      e.email = "Valid email required.";
    if (!form.date) e.date = "Please select a date.";
    if (!form.time) e.time = "Please select a time.";
    if (!form.guests) e.guests = "Number of guests required.";
    return e;
  };

  // This demo form confirms in-place; replace with an API call when backend is ready.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section
      id="reservation"
      className="scroll-mt-24 bg-linear-to-br from-red-950 via-red-900 to-orange-900 px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left — Copy */}
          <div className="flex flex-col justify-center text-orange-50">
            <span className="mb-5 inline-block w-fit rounded-full border border-orange-400/40 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
              Reservations
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
              Reserve Your{" "}
              <span className="italic text-orange-300">Perfect Evening</span>
            </h2>
            <p className="font-subheading text-base leading-7 text-orange-100/70 mb-10 max-w-md">
              Whether it&apos;s an intimate dinner or a grand celebration, our team
              is ready to make every detail perfect. Fill in the form and we&apos;ll
              confirm your booking shortly.
            </p>

            {/* Info bullets */}
            <ul className="space-y-4">
              {[
                "Open Mon–Sun: 12 PM – 3 PM & 7 PM – 11 PM",
                "Private dining rooms available for groups of 10+",
                "Special menus for birthdays, anniversaries & events",
                "Dress code: Smart casual",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-orange-100/75">
                  <span className="mt-0.5 shrink-0 rounded-full bg-orange-400/20 p-1">
                    <svg className="h-3 w-3 text-orange-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Form */}
          <div className="rounded-3xl bg-white/95 p-8 shadow-2xl shadow-red-900/30 backdrop-blur-sm">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center gap-5 py-16 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl font-bold text-red-950">
                  Reservation Confirmed!
                </h3>
                <p className="text-sm text-orange-900/70">
                  Thank you, <strong>{form.name}</strong>! We&apos;ve received your
                  booking for <strong>{form.guests} guest{Number(form.guests) !== 1 ? "s" : ""}</strong> on{" "}
                  <strong>{form.date}</strong> at <strong>{form.time}</strong>.
                  A confirmation will be sent to <strong>{form.email}</strong>.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", date: "", time: "", guests: "", notes: "" }); }}
                  className="mt-2 text-sm font-medium text-red-700 underline"
                >
                  Make another reservation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <h3 className="font-heading text-xl font-bold text-red-950 mb-1">
                  Book Your Table
                </h3>
                <p className="text-sm text-orange-900/60 mb-2">
                  All fields marked * are required.
                </p>

                {/* Name + Email */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-red-900">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Rahul Sharma"
                      className="w-full rounded-xl border border-orange-200 bg-orange-50/50 px-4 py-3 text-sm text-red-950 placeholder:text-orange-300 focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-200"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-red-900">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="rahul@email.com"
                      className="w-full rounded-xl border border-orange-200 bg-orange-50/50 px-4 py-3 text-sm text-red-950 placeholder:text-orange-300 focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-200"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                  </div>
                </div>

                {/* Date + Time */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-red-900">
                      Date *
                    </label>
                    <input
                      type="date"
                      min={today}
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full rounded-xl border border-orange-200 bg-orange-50/50 px-4 py-3 text-sm text-red-950 focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-200"
                    />
                    {errors.date && <p className="mt-1 text-xs text-red-600">{errors.date}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-red-900">
                      Time *
                    </label>
                    <select
                      value={form.time}
                      onChange={(e) => setForm({ ...form, time: e.target.value })}
                      className="w-full rounded-xl border border-orange-200 bg-orange-50/50 px-4 py-3 text-sm text-red-950 focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-200"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    {errors.time && <p className="mt-1 text-xs text-red-600">{errors.time}</p>}
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-red-900">
                    Number of Guests *
                  </label>
                  <select
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: e.target.value })}
                    className="w-full rounded-xl border border-orange-200 bg-orange-50/50 px-4 py-3 text-sm text-red-950 focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-200"
                  >
                    <option value="">Select guests</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>
                    ))}
                    <option value="9+">9+ guests (contact us)</option>
                  </select>
                  {errors.guests && <p className="mt-1 text-xs text-red-600">{errors.guests}</p>}
                </div>

                {/* Notes */}
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-red-900">
                    Special Requests
                  </label>
                  <textarea
                    rows={3}
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    placeholder="Dietary restrictions, occasion, seating preference..."
                    className="w-full resize-none rounded-xl border border-orange-200 bg-orange-50/50 px-4 py-3 text-sm text-red-950 placeholder:text-orange-300 focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-200"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="h-12 w-full rounded-xl bg-red-700 text-base font-semibold text-white hover:bg-red-800"
                >
                  Confirm Reservation
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
