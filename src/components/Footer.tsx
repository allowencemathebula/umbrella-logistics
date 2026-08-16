import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Truck,
} from "lucide-react";

const footerLinks = {
  company: [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Network", href: "#network" },
    { name: "Tracking", href: "#tracking" },
  ],
  services: [
    {
      name: "Long-Distance Transportation",
      href: "#services",
    },
    {
      name: "Cross-Border Freight",
      href: "#services",
    },
    {
      name: "Customs Clearing",
      href: "#services",
    },
    {
      name: "Trade Compliance",
      href: "#services",
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0e1727] text-white">

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">

          {/* BRAND */}
          <div>

            <a
              href="#"
              className="inline-flex items-center gap-3"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#a6193c]">
                <Truck size={25} />
              </div>

              <div>
                <p className="text-lg font-bold tracking-tight">
                  UMBRELLA
                </p>

                <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-gray-500">
                  Logistics & Transportation
                </p>
              </div>

            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-gray-400">
              Logistics and transportation solutions supporting
              long-distance and cross-border movement of goods
              across Southern Africa.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#a6193c] px-5 py-3 text-sm font-semibold transition hover:bg-[#c2214c]"
            >
              Request a Quote
              <ArrowUpRight size={16} />
            </a>

          </div>


          {/* COMPANY */}
          <div>

            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>

            <ul className="mt-6 space-y-4">

              {footerLinks.company.map((link) => (
                <li key={link.name}>

                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition hover:text-white"
                  >
                    {link.name}
                  </a>

                </li>
              ))}

            </ul>

          </div>


          {/* SERVICES */}
          <div>

            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>

            <ul className="mt-6 space-y-4">

              {footerLinks.services.map((link) => (
                <li key={link.name}>

                  <a
                    href={link.href}
                    className="text-sm leading-6 text-gray-400 transition hover:text-white"
                  >
                    {link.name}
                  </a>

                </li>
              ))}

            </ul>

          </div>


          {/* CONTACT */}
          <div>

            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              {/* Phone */}
              <a
                href="tel:+27715228690"
                className="group flex gap-3"
              >

                <Phone
                  size={18}
                  className="mt-0.5 shrink-0 text-[#d62855]"
                />

                <span className="text-sm text-gray-400 transition group-hover:text-white">
                  +27 (71) 522-8690
                </span>

              </a>


              {/* Email */}
              <a
                href="mailto:umbrella.ult@gmail.com"
                className="group flex gap-3"
              >

                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-[#d62855]"
                />

                <span className="break-all text-sm text-gray-400 transition group-hover:text-white">
                  umbrella.ult@gmail.com
                </span>

              </a>


              {/* Location */}
              <div className="flex gap-3">

                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[#d62855]"
                />

                <span className="text-sm leading-6 text-gray-400">
                  Stand No.1275/33 B
                  <br />
                  Kamaqhekeza
                  <br />
                  Nkomazi
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* Bottom bar */}
      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Umbrella Logistics &
            Transportation. All rights reserved.
          </p>

          <p className="text-xs text-gray-500">
            Logistics • Transportation • Cross-Border Freight
          </p>

        </div>

      </div>

    </footer>
  );
}