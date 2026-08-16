import {
  ArrowRight,
  Check,
  Clock3,
  MapPin,
  Package,
  Search,
  Truck,
} from "lucide-react";

import { useState } from "react";
import type { FormEvent } from "react";

import { motion } from "framer-motion";
import { getShipmentByReference } from "../lib/api";
import type { Shipment } from "../lib/api";

// Demo reference numbers — seed these into the database with
// backend/seed.sql so the buttons below work out of the box.
const demoReferences = [
  "UMB-2026-00124",
  "UMB-2026-00125",
  "UMB-2026-00126",
];

const trackingSteps = [
  "Booking Confirmed",
  "Cargo Collected",
  "In Transit",
  "Customs Processing",
  "Delivered",
];

export default function Tracking() {
  const [reference, setReference] = useState("");
  const [shipment, setShipment] = useState<Shipment | null>(null);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  async function runSearch(ref: string) {
    setLoading(true);

    try {
      const result = await getShipmentByReference(ref.trim());
      setShipment(result);
    } catch {
      setShipment(null);
    } finally {
      setSearched(true);
      setLoading(false);
    }
  }

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    runSearch(reference);
  }

  function getStepIndex(status: string) {
    return trackingSteps.indexOf(status);
  }

  return (
    <section
      id="tracking"
      className="bg-[#f6f7f9] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#a6193c]" />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a6193c]">
              Shipment Tracking
            </span>

            <span className="h-px w-10 bg-[#a6193c]" />
          </div>

          <h2 className="text-4xl font-bold leading-tight text-[#17243a] md:text-5xl">
            Know where your shipment
            <span className="text-[#a6193c]"> stands.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Enter your shipment reference to view the latest
            available shipment status.
          </p>
        </motion.div>

        {/* Search */}
        <motion.form
          onSubmit={handleSearch}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row"
        >
          <div className="relative flex-1">
            <Search
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={reference}
              onChange={(event) => setReference(event.target.value)}
              placeholder="Enter shipment reference"
              className="w-full rounded-2xl border border-gray-200 bg-white py-4 pl-14 pr-5 text-[#17243a] outline-none transition focus:border-[#a6193c] focus:ring-4 focus:ring-[#a6193c]/10"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 rounded-2xl bg-[#a6193c] px-7 py-4 font-semibold text-white transition hover:bg-[#7f102f] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Searching..." : "Track Shipment"}
            <ArrowRight size={18} />
          </button>
        </motion.form>

        {/* Demo references */}
        <div className="mx-auto mt-5 max-w-2xl text-center">
          <p className="text-xs text-gray-500">
            Demo references:
          </p>

          <div className="mt-2 flex flex-wrap justify-center gap-2">
            {demoReferences.map((ref) => (
              <button
                key={ref}
                type="button"
                onClick={() => {
                  setReference(ref);
                  runSearch(ref);
                }}
                className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 transition hover:border-[#a6193c] hover:text-[#a6193c]"
              >
                {ref}
              </button>
            ))}
          </div>
        </div>

        {/* Error message */}
        {searched && !loading && !shipment && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-10 max-w-2xl rounded-2xl border border-red-200 bg-red-50 p-5 text-center"
          >
            <p className="font-semibold text-red-700">
              Shipment not found
            </p>

            <p className="mt-1 text-sm text-red-600">
              Please check the reference number and try again.
            </p>
          </motion.div>
        )}

        {/* Shipment result */}
        {shipment && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-xl"
          >

            {/* Result header */}
            <div className="bg-[#17243a] p-6 md:p-8">

              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                    Shipment Reference
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    {shipment.reference}
                  </h3>
                </div>

                <div className="inline-flex items-center gap-2 self-start rounded-full bg-[#a6193c] px-4 py-2 text-sm font-semibold text-white">
                  <span className="h-2 w-2 rounded-full bg-white" />
                  {shipment.status}
                </div>

              </div>

            </div>

            {/* Shipment information */}
            <div className="grid gap-px border-b border-gray-200 bg-gray-200 md:grid-cols-3">

              <div className="bg-white p-6">
                <div className="flex items-center gap-3">
                  <MapPin
                    size={20}
                    className="text-[#a6193c]"
                  />

                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Origin
                  </p>
                </div>

                <p className="mt-3 font-semibold text-[#17243a]">
                  {shipment.origin}
                </p>
              </div>

              <div className="bg-white p-6">
                <div className="flex items-center gap-3">
                  <MapPin
                    size={20}
                    className="text-[#a6193c]"
                  />

                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Destination
                  </p>
                </div>

                <p className="mt-3 font-semibold text-[#17243a]">
                  {shipment.destination}
                </p>
              </div>

              <div className="bg-white p-6">
                <div className="flex items-center gap-3">
                  <Package
                    size={20}
                    className="text-[#a6193c]"
                  />

                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Cargo
                  </p>
                </div>

                <p className="mt-3 font-semibold text-[#17243a]">
                  {shipment.cargo}
                </p>
              </div>

            </div>

            {/* Progress */}
            <div className="p-6 md:p-10">

              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                    Current status
                  </p>

                  <h4 className="mt-2 text-2xl font-bold text-[#17243a]">
                    {shipment.status}
                  </h4>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock3 size={16} />
                  {shipment.updatedAt
                    ? `Updated ${new Date(shipment.updatedAt).toLocaleString()}`
                    : "Updated recently"}
                </div>

              </div>

              {/* Progress bar */}
              <div className="mt-8">

                <div className="h-2 overflow-hidden rounded-full bg-gray-100">

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${shipment.progress}%` }}
                    transition={{ duration: 1 }}
                    className="h-full rounded-full bg-[#a6193c]"
                  />

                </div>

                <div className="mt-3 flex justify-between text-xs text-gray-400">
                  <span>Shipment progress</span>

                  <span>
                    {shipment.progress}%
                  </span>
                </div>

              </div>

              {/* Timeline */}
              <div className="mt-12">

                <div className="space-y-0">

                  {trackingSteps.map((step, index) => {

                    const currentStep =
                      getStepIndex(shipment.status);

                    const completed =
                      index <= currentStep;

                    return (
                      <div
                        key={step}
                        className="relative flex gap-5"
                      >

                        {/* Vertical line */}
                        {index !== trackingSteps.length - 1 && (
                          <div
                            className={`absolute left-5 top-10 h-full w-px ${
                              index < currentStep
                                ? "bg-[#a6193c]"
                                : "bg-gray-200"
                            }`}
                          />
                        )}

                        {/* Circle */}
                        <div
                          className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                            completed
                              ? "bg-[#a6193c] text-white"
                              : "bg-gray-100 text-gray-400"
                          }`}
                        >
                          {completed ? (
                            <Check size={18} />
                          ) : (
                            <span className="text-xs font-bold">
                              {index + 1}
                            </span>
                          )}
                        </div>

                        {/* Step text */}
                        <div className="pb-10">

                          <p
                            className={`font-semibold ${
                              completed
                                ? "text-[#17243a]"
                                : "text-gray-400"
                            }`}
                          >
                            {step}
                          </p>

                          {index === currentStep && (
                            <p className="mt-1 text-sm text-gray-500">
                              {shipment.statusDescription}
                            </p>
                          )}

                        </div>

                      </div>
                    );
                  })}

                </div>

              </div>

            </div>

            {/* Bottom notice */}
            <div className="flex flex-col gap-4 border-t border-gray-200 bg-gray-50 p-6 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#17243a]">
                  <Truck
                    size={18}
                    className="text-white"
                  />
                </div>

                <p className="text-sm text-gray-600">
                  Shipment information is updated as new
                  tracking events become available.
                </p>

              </div>

              <a
                href="#contact"
                className="whitespace-nowrap text-sm font-semibold text-[#a6193c] hover:underline"
              >
                Need help?
              </a>

            </div>

          </motion.div>
        )}

      </div>
    </section>
  );
}