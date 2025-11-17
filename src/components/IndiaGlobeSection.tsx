import React from "react";
import { Globe } from "@/components/ui/globe";

const IndiaGlobeSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-white to-trovo-green/5 overflow-hidden">
      <div className="container-custom flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          Connecting India, Together
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">
          Trovo brings people and payments together across India. Our network connects every corner, making financial rewards accessible to all.
        </p>
        <div className="w-full flex justify-center">
          <div
            className="relative flex items-center justify-center"
            style={{width: '100%', maxWidth: 500, height: 500, minHeight: 320, overflow: 'visible'}}
          >
            <div
              className="rounded-full shadow-xl border border-gray-200 bg-white"
              style={{width: '100%', maxWidth: 420, height: 420, minHeight: 320, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.08)', border: '1px solid #e5e7eb'}}
            >
              <Globe />
              <span className="absolute inset-0 flex items-center justify-center text-trovo-green font-bold text-xl pointer-events-none">Trovo Network</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndiaGlobeSection;
