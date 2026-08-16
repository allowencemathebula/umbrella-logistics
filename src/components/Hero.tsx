import { ArrowRight, MapPin, Truck } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#17243a] pt-24">

      {/* Background decoration */}
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#a6193c]/20 blur-3xl" />

      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#a6193c]/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Label */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">

            <span className="h-2 w-2 rounded-full bg-[#d62855]" />

            <span className="text-sm font-medium text-gray-300">
              Logistics & Transportation
            </span>

          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">

            Moving Business.
            <br />

            <span className="text-[#d62855]">
              Moving Borders.
            </span>

          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">

            Reliable logistics solutions connecting businesses
            across Southern Africa through transportation,
            freight forwarding, customs and distribution.

          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <a
              href="/quote"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#a6193c] px-7 py-4 font-semibold text-white transition hover:bg-[#7f102f]"
            >

              Request a Quote

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />

            </a>

            <a
              href="/tracking"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Track Shipment
            </a>

          </div>

          {/* Route information */}
          <div className="mt-10 flex flex-wrap gap-6 border-t border-white/10 pt-6">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <MapPin size={19} className="text-[#d62855]" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Regional Reach
                </p>

                <p className="text-sm font-medium text-white">
                  Southern Africa
                </p>
              </div>

            </div>

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <Truck size={19} className="text-[#d62855]" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Transportation
                </p>

                <p className="text-sm font-medium text-white">
                  Long-Distance Freight
                </p>
              </div>

            </div>

          </div>

        </motion.div>


        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >

          {/* Main visual */}
          <div className="relative mx-auto max-w-xl">

            {/* Glow */}
            <div className="absolute inset-10 rounded-full bg-[#a6193c]/20 blur-3xl" />

            {/* Truck card */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-sm">

              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#29364d] to-[#101827]">

                {/* Road */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#0d1420]" />

                {/* Road markings */}
                <div className="absolute bottom-10 left-0 right-0 flex gap-8 px-8 opacity-40">
                  <div className="h-1 w-16 rounded-full bg-white" />
                  <div className="h-1 w-16 rounded-full bg-white" />
                  <div className="h-1 w-16 rounded-full bg-white" />
                  <div className="h-1 w-16 rounded-full bg-white" />
                </div>

                {/* Truck illustration */}
                <div className="absolute bottom-20 left-1/2 w-[85%] -translate-x-1/2">

                  {/* Trailer */}
                  <div className="relative h-28 rounded-lg bg-gray-200 shadow-xl">

                    <div className="absolute left-4 top-4 text-xs font-bold tracking-widest text-[#17243a]">
                      UMBRELLA
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-3 bg-[#a6193c]" />

                  </div>

                  {/* Cab */}
                  <div className="absolute -right-2 bottom-0 h-24 w-28 rounded-r-xl rounded-t-xl bg-[#a6193c]">

                    <div className="absolute left-4 top-4 h-8 w-14 rounded-md bg-[#17243a]" />

                    <div className="absolute bottom-0 right-0 h-10 w-4 rounded-br-xl bg-[#7f102f]" />

                  </div>

                  {/* Wheels */}
                  <div className="absolute -bottom-5 left-12 h-10 w-10 rounded-full border-4 border-[#17243a] bg-gray-700" />

                  <div className="absolute -bottom-5 right-8 h-10 w-10 rounded-full border-4 border-[#17243a] bg-gray-700" />

                </div>

                {/* Location badge */}
                <div className="absolute left-5 top-5 rounded-xl border border-white/10 bg-[#17243a]/90 px-4 py-3 backdrop-blur-md">

                  <div className="flex items-center gap-2">

                    <MapPin size={15} className="text-[#d62855]" />

                    <span className="text-xs font-medium text-white">
                      Southern Africa
                    </span>

                  </div>

                </div>

              </div>

            </div>

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -left-4 rounded-2xl border border-white/10 bg-[#17243a] p-4 shadow-xl sm:-left-8"
            >

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#a6193c]">
                  <Truck size={21} className="text-white" />
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    Freight
                  </p>

                  <p className="font-semibold text-white">
                    On the move
                  </p>
                </div>

              </div>

            </motion.div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}