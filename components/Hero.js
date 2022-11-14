import { useRef, useState } from "react";
import Link from "next/link";
import Modal from "./Modal";

export default function Hero({ title, subtitle, bgImage }) {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  return (
    <>
      {/* Hero card */}
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
        <div className="mx-auto container sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src={bgImage.url}
                alt="People working on laptops"
              />
              <div className="absolute inset-0 bg-brand-blue bg-opacity-60" />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="text-center text-4xl font-title tracking-tight sm:text-5xl lg:text-6xl text-white">
                {title}
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
                {subtitle}
              </p>
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                  <Link href="" legacyBehavior>
                    <a
                      className="flex items-center cursor-pointer justify-center rounded-md border border-transparent bg-brand-orange px-4 py-3 text-base font-bold text-white shadow-sm hover:bg-brand-blue sm:px-8"
                      onClick={() => setOpen(true)}
                    >
                      Passivmitglied werden
                    </a>
                  </Link>

                  <Link href="/kontakt" legacyBehavior>
                    <a className="flex items-center justify-center rounded-md border border-transparent bg-white bg-opacity-30 px-4 py-3 text-base font-bold text-white shadow-sm hover:bg-opacity-70 sm:px-8">
                      Kontakt
                    </a>
                  </Link>
                </div>
              </div>
              <Modal
                open={open}
                setOpen={setOpen}
                cancelButtonRef={cancelButtonRef}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
