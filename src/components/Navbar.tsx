import { Menu, Truck, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Network", href: "#network" },
  { name: "Tracking", href: "#tracking" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-gray-200/70 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a
          href="#"
          onClick={closeMobileMenu}
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#a6193c]">
            <Truck size={23} className="text-white" />
          </div>

          <div>
            <p className="text-lg font-bold tracking-tight text-[#17243a]">
              UMBRELLA
            </p>

            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-gray-500">
              Logistics & Transportation
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition hover:text-[#a6193c]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Quote Button */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="rounded-full bg-[#17243a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#a6193c]"
          >
            Request a Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 text-[#17243a] lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <nav className="mx-auto max-w-7xl px-6 py-5">

            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-[#a6193c]"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Quote Button */}
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="mt-4 flex items-center justify-center rounded-xl bg-[#a6193c] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#7f102f]"
            >
              Request a Quote
            </a>

          </nav>
        </div>
      )}
    </header>
  );
}