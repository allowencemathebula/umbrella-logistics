import {
  ArrowUpRight,
  Boxes,
  FileCheck,
  Globe2,
  Layers3,
  Warehouse,
  Scale,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Import & Export of Goods",
    description:
      "Supporting the movement of goods while maintaining legally compliant processes across applicable categories.",
    icon: Globe2,
  },
  {
    number: "02",
    title: "Customs Clearing & Documentation",
    description:
      "Managing customs clearing and documentation requirements across SARS and SADC regimes.",
    icon: FileCheck,
  },
  {
    number: "03",
    title: "Cross-Border Freight Forwarding",
    description:
      "Coordinating freight movement between South Africa and key Southern African destinations.",
    icon: Boxes,
  },
  {
    number: "04",
    title: "Multimodal Transport Management",
    description:
      "Managing logistics across road, sea, rail and air cargo to support different transportation requirements.",
    icon: Layers3,
  },
  {
    number: "05",
    title: "Transit Warehousing & Distribution",
    description:
      "Supporting bonded storage, cargo consolidation, transit warehousing and distribution requirements.",
    icon: Warehouse,
  },
  {
    number: "06",
    title: "Trade Advisory & Compliance Support",
    description:
      "Providing trade advisory and compliance support focused on minimizing unnecessary costs and delays.",
    icon: Scale,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 bg-[#f6f7f9] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#a6193c]" />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a6193c]">
              What We Do
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight text-[#17243a] md:text-5xl">
            Logistics solutions built
            <span className="text-[#a6193c]">
              {" "}around your needs.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            From cross-border freight forwarding to customs documentation
            and warehousing, Umbrella provides coordinated logistics
            solutions for businesses operating across Southern Africa.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group"
              >
                <div className="relative h-full overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#a6193c]/30 hover:shadow-xl">

                  {/* Number */}
                  <div className="absolute right-6 top-6 text-sm font-bold text-gray-200 transition-colors group-hover:text-[#a6193c]/30">
                    {service.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#17243a] transition-colors duration-300 group-hover:bg-[#a6193c]">
                    <Icon
                      size={25}
                      className="text-white"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="max-w-xs text-xl font-bold leading-snug text-[#17243a]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {service.description}
                  </p>

                  {/* Bottom link */}
                  <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-[#a6193c]">
                    <span>
                      Learn more
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}