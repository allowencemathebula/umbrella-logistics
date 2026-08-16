import {
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Truck,
  Globe2,
} from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  "Long-distance transportation",
  "Cross-border freight forwarding",
  "Customs clearing & documentation",
  "Trade compliance support",
];

const stats = [
  {
    value: "06",
    label: "Core logistics services",
  },
  {
    value: "06",
    label: "Cross-border destinations",
  },
  {
    value: "SADC",
    label: "Regional trade focus",
  },
  {
    value: "24/7",
    label: "Digital access to information",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-white px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-[#a6193c]" />

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a6193c]">
                About Umbrella
              </span>

            </div>

            <h2 className="text-4xl font-bold leading-tight text-[#17243a] md:text-5xl">

              Moving goods.
              <br />

              <span className="text-[#a6193c]">
                Connecting markets.
              </span>

            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Umbrella Logistics & Transportation provides logistics
              solutions designed to support the movement of goods
              across South Africa and Southern Africa.
            </p>

            <p className="mt-5 leading-7 text-gray-500">
              From long-distance transportation and cross-border
              freight forwarding to customs documentation and
              compliance support, our services are focused on
              coordinating the movement of goods efficiently and
              responsibly.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-3"
                >

                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-[#a6193c]"
                  />

                  <span className="text-sm font-medium text-[#17243a]">
                    {highlight}
                  </span>

                </div>
              ))}

            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#17243a] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#a6193c]"
            >
              Work with Umbrella

              <ArrowUpRight size={17} />

            </a>

          </motion.div>


          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >

            {/* Main card */}
            <div className="relative overflow-hidden rounded-[2rem] bg-[#17243a] p-8 md:p-10">

              {/* Decorative circles */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />

              <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full border border-white/10" />

              {/* Icon */}
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-[#a6193c]">

                <Truck
                  size={30}
                  className="text-white"
                />

              </div>

              <p className="relative mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                Logistics & Transportation
              </p>

              <h3 className="relative mt-3 max-w-md text-3xl font-bold leading-tight text-white md:text-4xl">
                A connected approach to freight movement.
              </h3>

              <p className="relative mt-5 max-w-lg leading-7 text-gray-400">
                Combining transportation, freight forwarding,
                customs processes and trade support into a
                coordinated logistics experience.
              </p>

              {/* Feature cards */}
              <div className="relative mt-10 grid gap-3 sm:grid-cols-2">

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                  <Globe2
                    size={22}
                    className="text-[#d62855]"
                  />

                  <p className="mt-4 font-semibold text-white">
                    Regional Reach
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Supporting cross-border movement across
                    Southern Africa.
                  </p>

                </div>


                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                  <ShieldCheck
                    size={22}
                    className="text-[#d62855]"
                  />

                  <p className="mt-4 font-semibold text-white">
                    Compliance Focus
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Supporting customs, documentation and
                    trade compliance requirements.
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>


        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 grid overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 sm:grid-cols-2 lg:grid-cols-4"
        >

          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`p-7 ${
                index !== stats.length - 1
                  ? "border-b border-gray-200 lg:border-b-0 lg:border-r"
                  : ""
              }`}
            >

              <p className="text-3xl font-bold text-[#a6193c]">
                {stat.value}
              </p>

              <p className="mt-2 text-sm font-medium text-gray-500">
                {stat.label}
              </p>

            </div>
          ))}

        </motion.div>

      </div>
    </section>
  );
}