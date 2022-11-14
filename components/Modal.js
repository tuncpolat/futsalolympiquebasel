import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function Modal({ open, setOpen, cancelButtonRef }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="/logo_ob.png"
                      alt=""
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-title leading-6 text-gray-900"
                    >
                      Deine Unterstützung ist gefragt
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Werde jetzt Passivmitglied unseres Vereins. Mit dem
                        Betrag von <strong>50 CHF pro Saison</strong> leistest
                        du eine wertvolle Unterstützung. Als Dankeschön erhältst
                        du, sofern du dies möchtest, die Spielberichte der
                        Partien direkt per Mail zugeschickt. Herzlichen Dank!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-brand-blue px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                    onClick={() => {
                      window.open(
                        "https://checkout.stripe.com/c/pay/cs_live_a1cS5T9I93P2z3AheplsNdg6caobVEx4jsk5dvzeazOoFMuxEuVxzUr7FQ#fidkdWxOYHwnPyd1blppbHNgWjA0T2AwM11AUFVcNk9Ga1Bxbjd9dXVdaVxjc2pQVEdCVU1pYG58S0BsNVxCMU1xPVRiaG4wTXdCc11nPXVVMnFWYXdVXDBPNVY0RGdmQH9ocHZoZE5UQTxzNTVPX0JKVGltcCcpJ3VpbGtuQH11anZgYUxhJz8nY19gYVFSN1dGNkd8ZEYxYFBQJyknd2BjYHd3YHdKd2xibGsnPydtcXF1dj8qKnJycitjcHF2ZGlqaXxodWx0cGBnZHZgaStmbSoneCUl",
                        "_blank"
                      );
                      setOpen(false);
                    }}
                  >
                    Passivmitglied werden
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none  sm:col-start-1 sm:mt-0 sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Abbrechen
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
