import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Truck,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const countries = [
  {
    name: "South Africa",
    code: "ZA",
    description: "Regional logistics starting point",
  },
  {
    name: "Mozambique",
    code: "MZ",
    description: "Cross-border freight destination",
  },
  {
    name: "Zimbabwe",
    code: "ZW",
    description: "Cross-border freight destination",
  },
  {
    name: "Zambia",
    code: "ZM",
    description: "Cross-border freight destination",
  },
  {
    name: "Malawi",
    code: "MW",
    description: "Cross-border freight destination",
  },
  {
    name: "Eswatini",
    code: "SZ",
    description: "Cross-border freight destination",
  },
  {
    name: "Botswana",
    code: "BW",
    description: "Cross-border freight destination",
  },
];

export default function Network() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  return (
    <section
      id="network"
      className="scroll-mt-24 overflow-hidden bg-[#17243a] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#d62855]" />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d62855]">
              Regional Network
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            Connecting Southern Africa
            <span className="text-[#d62855]">
              {" "}through logistics.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Umbrella supports cross-border freight forwarding between
            South Africa and key destinations across Southern Africa.
          </p>
        </motion.div>

        {/* Network visual */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">

          {/* LEFT — Network visualization */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[500px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#101827]"
          >

            {/* Background glow */}
            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a6193c]/10 blur-3xl" />

            {/* Grid */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Network title */}
            <div className="absolute left-6 top-6 z-10">
              <div className="flex items-center gap-2">

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#a6193c]">
                  <Truck size={17} className="text-white" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    Freight Network
                  </p>

                  <p className="font-semibold text-white">
                    Southern Africa
                  </p>
                </div>

              </div>
            </div>

            {/* South Africa central node */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(214,40,85,0.3)",
                  "0 0 0 14px rgba(214,40,85,0)",
                  "0 0 0 0 rgba(214,40,85,0)",
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
              className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
            >
              <button
                onClick={() => setSelectedCountry(countries[0])}
                className="flex flex-col items-center"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#d62855] bg-[#a6193c] shadow-xl">
                  <MapPin
                    size={30}
                    className="text-white"
                  />
                </div>

                <div className="mt-3 rounded-full bg-[#17243a] px-4 py-2 text-xs font-bold text-white">
                  SOUTH AFRICA
                </div>
              </button>
            </motion.div>

            {/* Connection lines */}
            <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2">

              {/* Botswana */}
              <div className="absolute left-[57%] top-[24%] h-px w-[25%] rotate-[18deg] bg-gradient-to-r from-[#d62855] to-transparent" />

              {/* Zimbabwe */}
              <div className="absolute left-[56%] top-[39%] h-px w-[26%] rotate-[8deg] bg-gradient-to-r from-[#d62855] to-transparent" />

              {/* Mozambique */}
              <div className="absolute left-[55%] top-[53%] h-px w-[30%] rotate-[-8deg] bg-gradient-to-r from-[#d62855] to-transparent" />

              {/* Eswatini */}
              <div className="absolute left-[54%] top-[63%] h-px w-[23%] rotate-[-18deg] bg-gradient-to-r from-[#d62855] to-transparent" />

              {/* Zambia */}
              <div className="absolute left-[38%] top-[32%] h-px w-[22%] rotate-[155deg] bg-gradient-to-r from-[#d62855] to-transparent" />

              {/* Malawi */}
              <div className="absolute left-[35%] top-[47%] h-px w-[25%] rotate-[170deg] bg-gradient-to-r from-[#d62855] to-transparent" />

            </div>

            {/* Destination nodes */}

            {/* Botswana */}
            <button
              onClick={() => setSelectedCountry(countries[6])}
              className="absolute right-[9%] top-[18%] z-20 flex items-center gap-2"
            >
              <span className="h-3 w-3 rounded-full bg-[#d62855] shadow-[0_0_12px_rgba(214,40,85,0.8)]" />
              <span className="text-xs font-semibold text-white">
                BOTSWANA
              </span>
            </button>

            {/* Zimbabwe */}
            <button
              onClick={() => setSelectedCountry(countries[2])}
              className="absolute right-[7%] top-[38%] z-20 flex items-center gap-2"
            >
              <span className="h-3 w-3 rounded-full bg-[#d62855] shadow-[0_0_12px_rgba(214,40,85,0.8)]" />
              <span className="text-xs font-semibold text-white">
                ZIMBABWE
              </span>
            </button>

            {/* Mozambique */}
            <button
              onClick={() => setSelectedCountry(countries[1])}
              className="absolute right-[4%] top-[54%] z-20 flex items-center gap-2"
            >
              <span className="h-3 w-3 rounded-full bg-[#d62855] shadow-[0_0_12px_rgba(214,40,85,0.8)]" />
              <span className="text-xs font-semibold text-white">
                MOZAMBIQUE
              </span>
            </button>

            {/* Eswatini */}
            <button
              onClick={() => setSelectedCountry(countries[5])}
              className="absolute right-[15%] bottom-[19%] z-20 flex items-center gap-2"
            >
              <span className="h-3 w-3 rounded-full bg-[#d62855] shadow-[0_0_12px_rgba(214,40,85,0.8)]" />
              <span className="text-xs font-semibold text-white">
                ESWATINI
              </span>
            </button>

            {/* Zambia */}
            <button
              onClick={() => setSelectedCountry(countries[3])}
              className="absolute left-[8%] top-[27%] z-20 flex items-center gap-2"
            >
              <span className="h-3 w-3 rounded-full bg-[#d62855] shadow-[0_0_12px_rgba(214,40,85,0.8)]" />
              <span className="text-xs font-semibold text-white">
                ZAMBIA
              </span>
            </button>

            {/* Malawi */}
            <button
              onClick={() => setSelectedCountry(countries[4])}
              className="absolute left-[8%] top-[49%] z-20 flex items-center gap-2"
            >
              <span className="h-3 w-3 rounded-full bg-[#d62855] shadow-[0_0_12px_rgba(214,40,85,0.8)]" />
              <span className="text-xs font-semibold text-white">
                MALAWI
              </span>
            </button>

            {/* Bottom label */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border-t border-white/10 pt-5">

              <div className="flex items-center gap-2">
                <CheckCircle2
                  size={16}
                  className="text-[#d62855]"
                />

                <span className="text-xs text-gray-400">
                  Cross-border freight forwarding
                </span>
              </div>

              <span className="text-xs font-semibold text-gray-500">
                7 DESTINATIONS
              </span>

            </div>

          </motion.div>

          {/* RIGHT — Selected destination */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col"
          >

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d62855]">
              Explore the network
            </p>

            <h3 className="mt-4 text-3xl font-bold text-white">
              Regional reach.
              <br />
              Connected logistics.
            </h3>

            <p className="mt-5 leading-7 text-gray-400">
              Select a destination to explore the regions included
              in Umbrella's cross-border freight forwarding network.
            </p>

            {/* Selected country card */}
            <motion.div
              key={selectedCountry.code}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-start justify-between">

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                    Selected destination
                  </p>

                  <h4 className="mt-2 text-2xl font-bold text-white">
                    {selectedCountry.name}
                  </h4>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#a6193c]">
                  <MapPin
                    size={22}
                    className="text-white"
                  />
                </div>

              </div>

              <p className="mt-4 text-sm leading-6 text-gray-400">
                {selectedCountry.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#d62855]">
                <span>
                  {selectedCountry.code}
                </span>

                <ArrowRight size={16} />

                <span>
                  Southern Africa Network
                </span>
              </div>

            </motion.div>

            {/* Country selector */}
            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2">

              {countries.map((country) => (
                <button
                  key={country.code}
                  onClick={() => setSelectedCountry(country)}
                  className={`rounded-xl border px-3 py-3 text-left text-xs font-semibold transition ${
                    selectedCountry.code === country.code
                      ? "border-[#d62855] bg-[#a6193c]/10 text-white"
                      : "border-white/10 bg-white/5 text-gray-400 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <span className="block text-[10px] text-gray-500">
                    {country.code}
                  </span>

                  <span className="mt-1 block">
                    {country.name}
                  </span>
                </button>
              ))}

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}