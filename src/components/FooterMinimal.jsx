import React from 'react';

export default function FooterMinimal() {
  return (
    <footer className="bg-[#12111C] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-white/60 text-sm">
          <div className="h-5 w-5 rounded-sm bg-gradient-to-br from-emerald-300 to-cyan-400" />
          <span>Автопомощник © 2025</span>
        </div>
        <div className="text-xs text-white/40">OpenAI • n8n • Privacy • Terms</div>
      </div>
    </footer>
  );
}
