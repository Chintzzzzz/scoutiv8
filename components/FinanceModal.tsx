"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function FinanceModal({
  email,
  trigger,
}: {
  email: string;
  trigger: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!mounted) return null;

  return (
    <>
      <div onClick={() => setOpen(true)} className="cursor-pointer">
        {trigger}
      </div>

      {open &&
        createPortal(
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-9999"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white/5 backdrop-blur-md border border-white/10 
              shadow-[0_0_30px_rgba(0,0,0,0.4)] 
              rounded-xl p-8 max-w-md w-[90%] text-center"
            >
              <h3 className="text-2xl font-bold text-[#daba0b] mb-4">
                Payments Coming Soon
              </h3>

              <p className="text-gray-300 mb-6">
                We are currently finalising our secure payment system.
                To continue, please email us directly and we’ll assist you personally.
              </p>

              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent("Scoutiv8 Booking Enquiry")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#daba0b] text-black py-3 rounded-lg font-semibold hover:opacity-90 transition mb-4"
              >
                Email Us to Continue
              </a>

              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-white text-sm"
              >
                Close
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
