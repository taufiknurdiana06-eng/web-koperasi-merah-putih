import React, { useState } from "react";
import { Award, Copy, Check, ShieldAlert, Sparkles, Mountain, Leaf, Coffee, Milestone, Eye } from "lucide-react";
import { logoElements, brandIdentityData } from "../data";

interface LogoPhilosophyViewProps {
  onCopyAll: (text: string, label: string) => void;
}

export default function LogoPhilosophyView({ onCopyAll }: LogoPhilosophyViewProps) {
  const [activeElementIdx, setActiveElementIdx] = useState<number | null>(null);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const logoColorPalette = brandIdentityData.colors;

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const getFullLogoText = () => {
    let text = "KONSEP & FILOSOFI LOGO KOPERASI DESA MERAH PUTIH (KDKMP)\n\n";
    text += "FILOSOFI ELEMEN LOGO:\n";
    logoElements.forEach(el => {
      text += `- ${el.name}: ${el.meaning}\n`;
    });
    text += "\nPALET WARNA BRAND:\n";
    logoColorPalette.forEach(col => {
      text += `- ${col.name} (${col.hex}): ${col.meaning} | Penggunaan: ${col.usage}\n`;
    });
    text += "\nPANDUAN PENGGUNAAN LOGO:\n";
    brandIdentityData.logoGuidelines.forEach(g => {
      text += `- ${g.rule}: ${g.desc}\n`;
    });
    return text;
  };

  const logoPrompt = `Flat design vector logo, corporate, professional, minimalist, clean, simple, timeless, representing 'Koperasi Desa Merah Putih'. It features a stylized volcanic mountain shape of Garut combined elegantly with a green coffee leaf and two red and white geometric ribbon stripes at the base. High resolution, white clean background, perfect geometry, award-winning visual identity graphic design, Ultra realistic, commercial product photography, award winning, premium branding, luxury packaging, cinematic lighting, soft shadow, 8K, high detail, photorealistic, professional studio, minimalist composition, clean background, premium coffee brand, Indonesia specialty coffee, Arabica Garut.`;

  return (
    <div id="logo-philosophy" className="space-y-12">
      {/* Editorial Header */}
      <div className="bg-white rounded-2xl p-6 md:p-10 border border-zinc-200/80 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
        <div className="max-w-4xl space-y-4">
          <span className="px-3 py-1 bg-brand-gold/10 text-brand-gold text-xs font-semibold rounded-full border border-brand-gold/20 uppercase tracking-wider font-mono">
            Corporate Visual Identity
          </span>
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-brand-dark tracking-tight leading-tight">
            Konsep & Filosofi Logo KDKMP
          </h2>
          <p className="text-zinc-600 text-sm md:text-base leading-relaxed max-w-2xl">
            Desain logo Koperasi Desa Merah Putih menggabungkan nilai nasionalisme Indonesia, kekuatan alam vulkanik Kabupaten Garut, dan semangat kebersamaan ekonomi gotong royong dalam sebuah bentuk yang modern, bersih, dan berkelas dunia.
          </p>

          <div className="pt-4 flex flex-wrap gap-4 border-t border-zinc-100">
            <button
              onClick={() => onCopyAll(getFullLogoText(), "Konsep Logo & Filosofi")}
              className="px-5 py-2 bg-brand-green hover:bg-brand-green/95 text-white font-semibold text-xs rounded-lg shadow flex items-center gap-2 transition"
            >
              <Copy className="w-4 h-4" />
              Salin Filosofi Lengkap
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Visual Logo Playground */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Beautiful Interactive SVG Graphic */}
        <div className="bg-white border border-zinc-200 rounded-2xl p-6 md:p-10 shadow-sm flex flex-col items-center justify-center space-y-6">
          <div className="text-center">
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Interaktif Visualizer</h4>
            <p className="text-[11px] text-zinc-500">Klik elemen di daftar kanan untuk menyorot filosofi di sini</p>
          </div>

          {/* SVG Canvas representing Logo */}
          <div className="w-64 h-64 md:w-80 md:h-80 relative flex items-center justify-center bg-zinc-50 rounded-full border border-zinc-100 shadow-inner p-6">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full drop-shadow-md select-none transition duration-500"
            >
              {/* Concentric Circle (Koperasi) */}
              <circle
                cx="100"
                cy="100"
                r="95"
                fill="none"
                stroke={activeElementIdx === 5 ? "#D4AF37" : "#1B4D3E"}
                strokeWidth={activeElementIdx === 5 ? "6" : "4"}
                className="transition-all duration-300"
              />
              <circle
                cx="100"
                cy="100"
                r="88"
                fill="none"
                stroke="#1B4D3E"
                strokeWidth="1"
                strokeDasharray="4 4"
                opacity="0.5"
              />

              {/* Mountains (Gunung Garut) */}
              <polygon
                points="100,45 155,140 45,140"
                fill={activeElementIdx === 0 ? "#14392E" : "#1B4D3E"}
                stroke="#D4AF37"
                strokeWidth={activeElementIdx === 0 ? "3" : "1.5"}
                className="transition-all duration-300 cursor-pointer"
                onClick={() => setActiveElementIdx(0)}
              />
              <polygon
                points="100,45 125,90 100,100 75,90"
                fill="#ffffff"
                opacity="0.15"
              />

              {/* Wheat / Padi on Left & Right */}
              {/* Left Padi */}
              <path
                d="M 35,130 C 25,100 40,70 55,60"
                fill="none"
                stroke={activeElementIdx === 3 ? "#D4AF37" : "#B2902A"}
                strokeWidth="2"
                opacity="0.7"
              />
              <circle cx="35" cy="115" r="3" fill="#D4AF37" />
              <circle cx="33" cy="100" r="3" fill="#D4AF37" />
              <circle cx="35" cy="85" r="3" fill="#D4AF37" />
              <circle cx="43" cy="72" r="3" fill="#D4AF37" />

              {/* Right Padi */}
              <path
                d="M 165,130 C 175,100 160,70 145,60"
                fill="none"
                stroke={activeElementIdx === 3 ? "#D4AF37" : "#B2902A"}
                strokeWidth="2"
                opacity="0.7"
              />
              <circle cx="165" cy="115" r="3" fill="#D4AF37" />
              <circle cx="167" cy="100" r="3" fill="#D4AF37" />
              <circle cx="165" cy="85" r="3" fill="#D4AF37" />
              <circle cx="157" cy="72" r="3" fill="#D4AF37" />

              {/* Coffee Leaf inside Mountain */}
              <path
                d="M 100,85 C 88,100 88,115 100,125 C 112,115 112,100 100,85 Z"
                fill={activeElementIdx === 1 ? "#D4AF37" : "#FDFBF7"}
                stroke="#1B4D3E"
                strokeWidth="1.5"
                className="transition-all duration-300 cursor-pointer"
                onClick={() => setActiveElementIdx(1)}
              />
              <line x1="100" y1="90" x2="100" y2="120" stroke="#1B4D3E" strokeWidth="1" />
              <line x1="100" y1="100" x2="106" y2="97" stroke="#1B4D3E" strokeWidth="0.8" />
              <line x1="100" y1="106" x2="94" y2="103" stroke="#1B4D3E" strokeWidth="0.8" />
              <line x1="100" y1="112" x2="106" y2="109" stroke="#1B4D3E" strokeWidth="0.8" />

              {/* Red and White Ribbon Base (Merah Putih / Jabat Tangan) */}
              {/* Ribbon Red */}
              <path
                d="M 50,140 Q 100,150 150,140"
                fill="none"
                stroke={activeElementIdx === 6 ? "#EF4444" : "#D22B2B"}
                strokeWidth={activeElementIdx === 6 ? "10" : "7"}
                className="transition-all duration-300"
              />
              {/* Ribbon White */}
              <path
                d="M 50,147 Q 100,157 150,147"
                fill="none"
                stroke="#ffffff"
                strokeWidth="5"
                className="transition-all duration-300"
              />

              {/* Coffee Beans (Biji Kopi) at bottom center */}
              <ellipse
                cx="100"
                cy="165"
                rx="14"
                ry="8"
                fill={activeElementIdx === 2 ? "#D4AF37" : "#1B4D3E"}
                stroke="#D4AF37"
                strokeWidth="1"
                transform="rotate(-15 100 165)"
                className="transition-all duration-300 cursor-pointer"
                onClick={() => setActiveElementIdx(2)}
              />
              <path
                d="M 87,167 Q 100,165 113,163"
                fill="none"
                stroke="#FDFBF7"
                strokeWidth="1.2"
                transform="rotate(-15 100 165)"
              />

              {/* Text around outer circle */}
              <defs>
                <path
                  id="textPathUpper"
                  d="M 22,100 A 78,78 0 0,1 178,100"
                />
              </defs>
              <text fontSize="10.5" fontWeight="bold" fill="#1B4D3E" letterSpacing="1">
                <textPath href="#textPathUpper" startOffset="50%" textAnchor="middle">
                  KOPERASI DESA MERAH PUTIH
                </textPath>
              </text>
            </svg>
          </div>

          <div className="w-full text-center">
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-1">
              Informasi Elemen Terpilih:
            </span>
            {activeElementIdx !== null ? (
              <div className="bg-brand-cream border border-brand-gold/30 rounded-xl p-4 transition animate-fade-in">
                <h5 className="font-bold text-brand-dark text-sm mb-1">
                  {logoElements[activeElementIdx].name}
                </h5>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {logoElements[activeElementIdx].meaning}
                </p>
              </div>
            ) : (
              <div className="bg-zinc-50 border border-zinc-200 border-dashed rounded-xl p-4 text-xs text-zinc-500 italic">
                Arahkan kursor atau klik salah satu baris di samping kanan untuk memunculkan filosofi visual.
              </div>
            )}
          </div>
        </div>

        {/* Right: Detailed Philosophy List */}
        <div className="space-y-4 max-h-[480px] overflow-y-auto pr-2">
          {logoElements.map((el, idx) => (
            <button
              key={idx}
              onClick={() => setActiveElementIdx(idx)}
              className={`w-full text-left p-4 rounded-xl border transition flex items-start gap-3.5 ${
                activeElementIdx === idx
                  ? "border-brand-green bg-brand-green/5 ring-1 ring-brand-green shadow-sm"
                  : "border-zinc-200 bg-white hover:bg-zinc-50/50"
              }`}
            >
              <div className={`p-2 rounded-lg shrink-0 ${activeElementIdx === idx ? "bg-brand-green text-white" : "bg-zinc-100 text-zinc-500"}`}>
                {idx === 0 && <Mountain className="w-4 h-4" />}
                {idx === 1 && <Leaf className="w-4 h-4" />}
                {idx === 2 && <Coffee className="w-4 h-4" />}
                {idx === 3 && <Sparkles className="w-4 h-4" />}
                {idx === 4 && <Award className="w-4 h-4" />}
                {idx === 5 && <Milestone className="w-4 h-4" />}
                {idx === 6 && <Award className="w-4 h-4" />}
                {idx === 7 && <Leaf className="w-4 h-4" />}
                {idx === 8 && <Sparkles className="w-4 h-4" />}
              </div>
              <div className="space-y-0.5">
                <h5 className="font-bold text-brand-dark text-xs md:text-sm flex items-center gap-1.5">
                  {el.name}
                  {activeElementIdx === idx && <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>}
                </h5>
                <p className="text-zinc-500 text-xs line-clamp-2 leading-relaxed">
                  {el.meaning}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Brand Color Swatches Section */}
      <div className="bg-white rounded-xl p-6 md:p-8 border border-zinc-200/80 shadow-sm space-y-6">
        <div>
          <h4 className="text-lg font-serif font-bold text-brand-dark">Palet Warna Resmi Brand</h4>
          <p className="text-xs text-zinc-400">Kode warna heksadesimal resmi yang digunakan di seluruh media promosi KDKMP.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {logoColorPalette.map((col, idx) => (
            <div key={idx} className="border border-zinc-200 rounded-xl overflow-hidden shadow-sm flex flex-col bg-zinc-50">
              {/* Color Block */}
              <div
                className="h-20 w-full transition duration-300 relative group"
                style={{ backgroundColor: col.hex }}
              >
                <button
                  onClick={() => handleCopyHex(col.hex)}
                  className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-[10px] font-bold transition duration-300 gap-1.5"
                >
                  <Copy className="w-3.5 h-3.5" />
                  Salin Hex
                </button>
              </div>
              {/* Color Meta */}
              <div className="p-3 space-y-1 bg-white flex-1 flex flex-col justify-between">
                <div>
                  <h5 className="font-bold text-brand-dark text-xs leading-tight">{col.name}</h5>
                  <p className="text-[10px] text-zinc-400 font-mono mt-0.5 uppercase">{col.hex}</p>
                </div>
                {copiedHex === col.hex && (
                  <span className="text-[10px] text-green-600 font-bold flex items-center gap-1 animate-pulse mt-1">
                    <Check className="w-3 h-3" /> Copied!
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Logo Guidelines and Warnings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white rounded-xl p-6 border border-zinc-200 shadow-sm space-y-4">
          <h4 className="font-bold text-brand-dark text-xs uppercase tracking-wider flex items-center gap-1.5">
            <Milestone className="w-4 h-4 text-brand-green" />
            Panduan Penggunaan Logo (Do's and Don'ts)
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {brandIdentityData.logoGuidelines.map((g, i) => (
              <div key={i} className="p-3 bg-zinc-50 rounded-lg space-y-1 border border-zinc-100">
                <h5 className="font-bold text-brand-dark text-xs">{g.rule}</h5>
                <p className="text-zinc-500 text-[11px] leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-brand-cream/80 border border-brand-gold/30 rounded-xl p-6 space-y-4">
          <h4 className="font-bold text-brand-dark text-xs uppercase tracking-wider flex items-center gap-1.5">
            <Eye className="w-4 h-4 text-brand-gold" />
            Logo Prompt AI
          </h4>
          <p className="text-zinc-600 text-[11px] leading-relaxed">
            Salin prompt Bahasa Inggris terstruktur di bawah ini ke mesin AI untuk melahirkan logo flat vector beresolusi super tinggi:
          </p>
          <div className="p-2.5 bg-white border border-zinc-200 rounded-lg max-h-24 overflow-y-auto text-[10px] font-mono text-zinc-600 select-all leading-normal">
            {logoPrompt}
          </div>
          <button
            onClick={() => {
              navigator.clipboard.writeText(logoPrompt);
              setCopiedPrompt(true);
              setTimeout(() => setCopiedPrompt(false), 2000);
            }}
            className="w-full py-1.5 bg-brand-green text-white text-[11px] font-bold rounded-lg flex items-center justify-center gap-1.5 hover:bg-brand-green/95 transition shadow-sm"
          >
            {copiedPrompt ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            Salin Prompt Logo
          </button>
        </div>
      </div>
    </div>
  );
}
