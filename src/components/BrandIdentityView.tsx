import React, { useState } from "react";
import { BookOpen, Copy, Check, Info, Award, UserCheck, Mic, Sparkles, FolderOpen } from "lucide-react";
import { brandIdentityData } from "../data";

interface BrandIdentityViewProps {
  onCopyAll: (text: string, label: string) => void;
}

export default function BrandIdentityView({ onCopyAll }: BrandIdentityViewProps) {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const handleCopySection = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(key);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const getFullIdentityText = () => {
    let text = "IDENTITAS BRAND LENGKAP - KOPERASI DESA MERAH PUTIH\n\n";
    text += `TAGLINE: "${brandIdentityData.tagline}"\n\n`;
    text += "BRAND STORY:\n" + brandIdentityData.brandStory.join("\n\n") + "\n\n";
    text += "BRAND PERSONALITY:\n" + brandIdentityData.brandPersonality.map(p => `- ${p.trait}: ${p.desc}`).join("\n") + "\n\n";
    text += "BRAND VOICE:\n" + brandIdentityData.brandVoice.map(v => `- ${v.style}: ${v.rule}`).join("\n") + "\n\n";
    text += "BRAND VALUES:\n" + brandIdentityData.brandValues.map(v => `- ${v.title}: ${v.desc}`).join("\n") + "\n\n";
    text += "FONTS:\n" + brandIdentityData.fonts.map(f => `- ${f.type}: ${f.name} | Penggunaan: ${f.usage}`).join("\n") + "\n\n";
    text += "KONSEP KEMASAN:\n" + brandIdentityData.packagingConcept.map(p => `- ${p.title}: ${p.desc}`).join("\n") + "\n\n";
    return text;
  };

  return (
    <div id="brand-identity" className="space-y-12">
      {/* Editorial Header */}
      <div className="bg-white rounded-2xl p-6 md:p-10 border border-zinc-200/80 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
        <div className="max-w-4xl space-y-4">
          <span className="px-3 py-1 bg-brand-red/10 text-brand-red text-xs font-semibold rounded-full border border-brand-red/20 uppercase tracking-wider font-mono">
            Brand Platform Book
          </span>
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-brand-dark tracking-tight leading-tight">
            Brand Identity Guidelines
          </h2>
          <p className="text-zinc-600 text-sm md:text-base leading-relaxed max-w-2xl">
            Sistem identitas merek luhur Koperasi Desa Merah Putih: Mengawinkan kebanggaan nasionalisme, ketulusan petani desa, dan kemewahan rasa kopi specialty.
          </p>

          <div className="pt-4 flex flex-wrap gap-4 border-t border-zinc-100">
            <button
              onClick={() => onCopyAll(getFullIdentityText(), "Identitas Brand Lengkap")}
              className="px-5 py-2 bg-brand-green hover:bg-brand-green/95 text-white font-semibold text-xs rounded-lg shadow flex items-center gap-2 transition"
            >
              <Copy className="w-4 h-4" />
              Salin Identitas Brand Lengkap
            </button>
          </div>
        </div>
      </div>

      {/* Tagline & Brand Story */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column: Tagline & Values */}
        <div className="space-y-6">
          <div className="bg-brand-green text-white rounded-xl p-6 shadow-sm space-y-4 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold font-mono block">Tagline Resmi</span>
            <blockquote className="text-xl font-serif italic font-semibold leading-normal">
              "{brandIdentityData.tagline}"
            </blockquote>
            <button
              onClick={() => handleCopySection("tagline", brandIdentityData.tagline)}
              className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded text-xs font-semibold flex items-center gap-1.5 transition"
            >
              {copiedSection === "tagline" ? <Check className="w-3.5 h-3.5 text-brand-gold" /> : <Copy className="w-3.5 h-3.5" />}
              Salin Tagline
            </button>
          </div>

          <div className="bg-white rounded-xl p-6 border border-zinc-200/80 shadow-sm space-y-4">
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-4 h-4 text-brand-green" />
              Nilai Utama Merek
            </h4>
            <div className="space-y-4">
              {brandIdentityData.brandValues.map((val, idx) => (
                <div key={idx} className="space-y-1">
                  <h5 className="font-bold text-brand-dark text-xs md:text-sm">{val.title}</h5>
                  <p className="text-zinc-500 text-[11px] leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column: Brand Story */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 md:p-8 border border-zinc-200/80 shadow-sm space-y-6 relative group">
          <button
            onClick={() => handleCopySection("story", brandIdentityData.brandStory.join("\n\n"))}
            className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-brand-dark bg-zinc-50 hover:bg-zinc-100 rounded-lg transition"
            title="Salin bagian ini"
          >
            {copiedSection === "story" ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
          </button>

          <div className="flex items-center gap-2.5">
            <BookOpen className="w-5 h-5 text-brand-green" />
            <h3 className="text-lg md:text-xl font-serif font-bold text-brand-dark">Kisah Merek (Brand Story)</h3>
          </div>

          <div className="space-y-4 text-zinc-600 text-sm md:text-base leading-relaxed text-justify">
            {brandIdentityData.brandStory.map((p, idx) => (
              <p key={idx} className="indent-4 md:indent-8 first:indent-0">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Brand Personality & Voice */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Brand Personality */}
        <div className="bg-white rounded-xl p-6 md:p-8 border border-zinc-200/80 shadow-sm space-y-6">
          <div className="flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-brand-green" />
            <h3 className="text-lg font-serif font-bold text-brand-dark">Personalitas Merek (Brand Personality)</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {brandIdentityData.brandPersonality.map((pers, idx) => (
              <div key={idx} className="p-4 bg-zinc-50 rounded-xl space-y-1 border border-zinc-100 hover:border-brand-green/20 transition">
                <span className="w-6 h-6 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center font-mono text-xs font-bold mb-2">
                  0{idx+1}
                </span>
                <h4 className="font-bold text-brand-dark text-xs md:text-sm">{pers.trait}</h4>
                <p className="text-zinc-500 text-[11px] leading-relaxed">{pers.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Voice */}
        <div className="bg-white rounded-xl p-6 md:p-8 border border-zinc-200/80 shadow-sm space-y-6">
          <div className="flex items-center gap-2">
            <Mic className="w-5 h-5 text-brand-red" />
            <h3 className="text-lg font-serif font-bold text-brand-dark">Gaya Komunikasi (Brand Voice)</h3>
          </div>
          <div className="space-y-4">
            {brandIdentityData.brandVoice.map((voice, idx) => (
              <div key={idx} className="p-4 bg-brand-cream/50 rounded-xl space-y-1 border border-brand-gold/10">
                <h4 className="font-bold text-brand-green text-xs md:text-sm">{voice.style}</h4>
                <p className="text-zinc-600 text-xs md:text-sm leading-relaxed">{voice.rule}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Typography & Packaging Concept */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Typography */}
        <div className="bg-white rounded-xl p-6 border border-zinc-200 shadow-sm space-y-5">
          <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-brand-gold" />
            Tipografi Resmi Brand
          </h4>
          <div className="space-y-4">
            {brandIdentityData.fonts.map((f, idx) => (
              <div key={idx} className="space-y-1 pb-3 border-b border-zinc-100 last:border-0 last:pb-0">
                <span className="text-[10px] text-zinc-400 uppercase tracking-wider font-bold block">{f.type}</span>
                <h5 className="font-bold text-brand-dark text-sm">{f.name}</h5>
                <p className="text-[11px] text-zinc-500 leading-relaxed">{f.usage}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Packaging Concept */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 md:p-8 border border-zinc-200 shadow-sm space-y-6">
          <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
            <FolderOpen className="w-4 h-4 text-brand-green" />
            Konsep Kemasan Premium (Packaging Concept)
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {brandIdentityData.packagingConcept.map((p, idx) => (
              <div key={idx} className="p-4 bg-zinc-50 border border-zinc-100 rounded-xl space-y-2">
                <h5 className="font-bold text-brand-dark text-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                  {p.title}
                </h5>
                <p className="text-zinc-500 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
