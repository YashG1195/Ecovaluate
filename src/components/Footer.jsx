import React from "react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#D7E2EB] pt-16 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 font-bold text-xl text-slate-900">
              <div className="w-9 h-9 bg-gradient-to-br from-[#006a39] to-[#0A7A42] rounded-xl grid place-items-center text-white text-[16px]">
                <span className="material-symbols-outlined">eco</span>
              </div>
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #006a39, #0058bb)" }}
              >
                EcoValuate
              </span>
            </div>
            <p className="text-slate-500 text-sm mt-4">
              Empowering sustainable tech lifecycles through smart diagnostics and secure data wiping.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-base font-semibold mb-6">Product</h4>
            <ul className="space-y-3 m-0 p-0 list-none">
              <li><a className="text-slate-500 text-sm hover:text-[#006a39] transition-colors no-underline" href="#">Features</a></li>
              <li><a className="text-slate-500 text-sm hover:text-[#006a39] transition-colors no-underline" href="#pricing">Pricing</a></li>
              <li><a className="text-slate-500 text-sm hover:text-[#006a39] transition-colors no-underline" href="#">Security</a></li>
              <li><a className="text-slate-500 text-sm hover:text-[#006a39] transition-colors no-underline" href="#">API</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-base font-semibold mb-6">Company</h4>
            <ul className="space-y-3 m-0 p-0 list-none">
              <li><a className="text-slate-500 text-sm hover:text-[#006a39] transition-colors no-underline" href="#">About Us</a></li>
              <li><a className="text-slate-500 text-sm hover:text-[#006a39] transition-colors no-underline" href="#">Careers</a></li>
              <li><a className="text-slate-500 text-sm hover:text-[#006a39] transition-colors no-underline" href="#">Blog</a></li>
              <li><a className="text-slate-500 text-sm hover:text-[#006a39] transition-colors no-underline" href="#">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-base font-semibold mb-6">Legal</h4>
            <ul className="space-y-3 m-0 p-0 list-none">
              <li><a className="text-slate-500 text-sm hover:text-[#006a39] transition-colors no-underline" href="#">Privacy Policy</a></li>
              <li><a className="text-slate-500 text-sm hover:text-[#006a39] transition-colors no-underline" href="#">Terms of Service</a></li>
              <li><a className="text-slate-500 text-sm hover:text-[#006a39] transition-colors no-underline" href="#">Compliance</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#D7E2EB] py-8 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} EcoValuate. All rights reserved. Built for a Greener Earth.
        </div>
      </div>
    </footer>
  );
}
