import React from 'react';
import { Home, AlertTriangle } from 'lucide-react';

export default function NotFound({ onReturnHome }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#F8F8F3] text-[#111111]">
      <div className="max-w-md w-full p-10 rounded-3xl bg-white border border-black/10 shadow-sm text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-full bg-neutral-100 flex items-center justify-center">
          <AlertTriangle className="w-8 h-8 text-[#111111]" />
        </div>

        <div>
          <span className="text-xs font-mono text-[#777777] tracking-wider uppercase font-semibold">
            HTTP 404 &bull; INFERENCE ERROR
          </span>
          <h1 className="font-editorial-serif text-3xl font-normal text-[#111111] mt-2">
            Endpoint Not Found
          </h1>
          <p className="text-sm text-[#555555] mt-2 leading-relaxed font-sans">
            The route or model checkpoint you requested does not exist in this neural network cluster.
          </p>
        </div>

        <div className="p-3.5 rounded-2xl bg-[#F8F8F3] font-mono text-xs text-[#555555] border border-black/[0.06] text-left">
          <span className="text-red-600 font-semibold">404 Exception</span>: route '/missing' resolved null tensor
        </div>

        <button
          type="button"
          onClick={onReturnHome}
          className="editorial-pill-btn w-full inline-flex items-center justify-center gap-2 py-3.5 font-semibold text-sm shadow-md"
        >
          <Home className="w-4 h-4" />
          <span>Return to Muhammad Sinan's Portfolio</span>
        </button>
      </div>
    </div>
  );
}
