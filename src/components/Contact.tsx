import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Truck,
} from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { submitQuoteRequest, ApiError } from "../lib/api";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      await submitQuoteRequest(formData);
      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof ApiError
          ? err.message
          : "Something went wrong sending your request. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#17243a] px-6 py-24 md:py-32"
    >
      {/* Decorative background */}
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full border border-white/10" />

      <div className="absolute -bottom-48 -left-40 h-[30rem] w-[30rem] rounded-full border border-white/10" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#d62855]" />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d62855]">
              Get in touch
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            Let's move your
            <span className="text-[#d62855]"> cargo.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Tell us what you need to transport and our team can
            assist with your logistics requirement.
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

          {/* LEFT — Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10"
          >

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#a6193c]">
              <Truck
                size={26}
                className="text-white"
              />
            </div>

            <h3 className="mt-7 text-2xl font-bold text-white">
              Umbrella Logistics
            </h3>

            <p className="mt-3 leading-7 text-gray-400">
              Logistics & Transportation solutions for
              long-distance and cross-border freight movement.
            </p>

            {/* Contact details */}
            <div className="mt-10 space-y-6">

              {/* Phone */}
              <a
                href="tel:+27715228690"
                className="group flex gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 transition group-hover:bg-[#a6193c]">
                  <Phone
                    size={19}
                    className="text-white"
                  />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-medium text-white">
                    +27 (71) 522-8690
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:umbrella.ult@gmail.com"
                className="group flex gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 transition group-hover:bg-[#a6193c]">
                  <Mail
                    size={19}
                    className="text-white"
                  />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm font-medium text-white">
                    umbrella.ult@gmail.com
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <MapPin
                    size={19}
                    className="text-white"
                  />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Office
                  </p>

                  <p className="mt-1 text-sm font-medium leading-6 text-white">
                    Stand No.1275/33 B
                    <br />
                    Kamaqhekeza
                    <br />
                    Nkomazi
                  </p>
                </div>
              </div>

            </div>

            {/* Response message */}
            <div className="mt-10 border-t border-white/10 pt-8">

              <p className="text-sm leading-6 text-gray-500">
                Have a transportation requirement?
              </p>

              <p className="mt-2 font-semibold text-white">
                Send us your requirements and we'll take it from there.
              </p>

            </div>

          </motion.div>


          {/* RIGHT — Quote form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] bg-white p-6 shadow-2xl md:p-10"
          >

            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* Name + Company */}
                <div className="grid gap-6 md:grid-cols-2">

                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-[#17243a]"
                    >
                      Full Name *
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm text-[#17243a] outline-none transition placeholder:text-gray-400 focus:border-[#a6193c] focus:ring-4 focus:ring-[#a6193c]/10"
                    />
                  </div>


                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm font-semibold text-[#17243a]"
                    >
                      Company
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm text-[#17243a] outline-none transition placeholder:text-gray-400 focus:border-[#a6193c] focus:ring-4 focus:ring-[#a6193c]/10"
                    />
                  </div>

                </div>


                {/* Email + Phone */}
                <div className="grid gap-6 md:grid-cols-2">

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-[#17243a]"
                    >
                      Email *
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm text-[#17243a] outline-none transition placeholder:text-gray-400 focus:border-[#a6193c] focus:ring-4 focus:ring-[#a6193c]/10"
                    />
                  </div>


                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-[#17243a]"
                    >
                      Phone *
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+27 ..."
                      className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm text-[#17243a] outline-none transition placeholder:text-gray-400 focus:border-[#a6193c] focus:ring-4 focus:ring-[#a6193c]/10"
                    />
                  </div>

                </div>


                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-semibold text-[#17243a]"
                  >
                    Service Required *
                  </label>

                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-[#17243a] outline-none transition focus:border-[#a6193c] focus:ring-4 focus:ring-[#a6193c]/10"
                  >
                    <option value="">
                      Select a service
                    </option>

                    <option value="Long-Distance Transportation">
                      Long-Distance Transportation
                    </option>

                    <option value="Import & Export">
                      Import & Export of Goods
                    </option>

                    <option value="Customs Clearing">
                      Customs Clearing & Documentation
                    </option>

                    <option value="Cross-Border Freight">
                      Cross-Border Freight Forwarding
                    </option>

                    <option value="Multimodal Transport">
                      Multimodal Transport Management
                    </option>

                    <option value="Warehousing">
                      Transit Warehousing & Distribution
                    </option>

                    <option value="Trade Advisory">
                      Trade Advisory & Compliance Support
                    </option>
                  </select>
                </div>


                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-[#17243a]"
                  >
                    Tell us about your shipment *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your cargo, origin, destination and transportation requirements..."
                    className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3.5 text-sm text-[#17243a] outline-none transition placeholder:text-gray-400 focus:border-[#a6193c] focus:ring-4 focus:ring-[#a6193c]/10"
                  />
                </div>


                {/* Error message */}
                {error && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {error}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#a6193c] px-6 py-4 font-semibold text-white transition hover:bg-[#7f102f] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Request a Quote"}

                  <ArrowRight
                    size={19}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <p className="text-center text-xs leading-5 text-gray-400">
                  By submitting this form, you are requesting
                  assistance regarding your transportation or
                  logistics requirement.
                </p>

              </form>
            ) : (

              /* SUCCESS MESSAGE */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[500px] flex-col items-center justify-center text-center"
              >

                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
                  <CheckCircle2
                    size={42}
                    className="text-green-600"
                  />
                </div>

                <h3 className="mt-7 text-3xl font-bold text-[#17243a]">
                  Request received
                </h3>

                <p className="mt-4 max-w-md leading-7 text-gray-500">
                  Thank you for contacting Umbrella Logistics.
                  Your request has been captured successfully.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);

                    setFormData({
                      name: "",
                      company: "",
                      email: "",
                      phone: "",
                      service: "",
                      message: "",
                    });
                  }}
                  className="mt-8 rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-[#17243a] transition hover:border-[#a6193c] hover:text-[#a6193c]"
                >
                  Send another request
                </button>

              </motion.div>
            )}

          </motion.div>

        </div>

      </div>
    </section>
  );
}