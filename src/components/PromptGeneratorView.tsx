import React, { useState } from "react";
import { Copy, Check, Filter, Image, HelpCircle, Search, Sparkles, Sliders } from "lucide-react";
import { imagePrompts } from "../data";

interface PromptGeneratorViewProps {
  onCopyAll: (text: string, label: string) => void;
  mockupImagePath?: string;
}

export default function PromptGeneratorView({ onCopyAll, mockupImagePath }: PromptGeneratorViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "product" | "mockup" | "logo">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedPromptId, setCopiedPromptId] = useState<string | null>(null);

  const handleCopyPrompt = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPromptId(id);
    setTimeout(() => setCopiedPromptId(null), 2000);
  };

  const getFullPromptsText = () => {
    let text = "DAFTAR PROMPT AI IMAGE GENERATION - KOPERASI DESA MERAH PUTIH\n\n";
    imagePrompts.forEach(p => {
      text += `--- ${p.title.toUpperCase()} (${p.category.toUpperCase()}) ---\n`;
      text += `Prompt:\n${p.promptEnglish}\n\n`;
      text += `Tags: ${p.tags.join(", ")}\n\n`;
    });
    return text;
  };

  const filteredPrompts = imagePrompts.filter(p => {
    const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.promptEnglish.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div id="prompt-generator" className="space-y-10">
      {/* Editorial Header */}
      <div className="bg-white rounded-2xl p-6 md:p-10 border border-zinc-200/80 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
        <div className="max-w-4xl space-y-4">
          <span className="px-3 py-1 bg-brand-gold/10 text-brand-gold text-xs font-semibold rounded-full border border-brand-gold/20 uppercase tracking-wider font-mono">
            AI Creative Assistant
          </span>
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-brand-dark tracking-tight leading-tight">
            AI Image & Mockup Prompt Generator
          </h2>
          <p className="text-zinc-600 text-sm md:text-base leading-relaxed max-w-2xl">
            Kumpulan instruksi prompt AI bahasa Inggris beresolusi super tinggi (8K) yang sangat detail untuk merekayasa mockup kemasan premium, foto produk komersial studio, dan visualisasi stand pameran internasional.
          </p>

          <div className="pt-4 flex flex-wrap gap-4 border-t border-zinc-100 justify-between items-center">
            {/* Category Filter Pills */}
            <div className="flex bg-zinc-100 p-1 rounded-xl">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${selectedCategory === "all" ? "bg-white text-brand-dark shadow-sm" : "text-zinc-500 hover:text-brand-dark"}`}
              >
                Semua Prompt
              </button>
              <button
                onClick={() => setSelectedCategory("product")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${selectedCategory === "product" ? "bg-white text-brand-dark shadow-sm" : "text-zinc-500 hover:text-brand-dark"}`}
              >
                Foto Produk Studio
              </button>
              <button
                onClick={() => setSelectedCategory("mockup")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${selectedCategory === "mockup" ? "bg-white text-brand-dark shadow-sm" : "text-zinc-500 hover:text-brand-dark"}`}
              >
                Mockup Kemasan & Display
              </button>
              <button
                onClick={() => setSelectedCategory("logo")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${selectedCategory === "logo" ? "bg-white text-brand-dark shadow-sm" : "text-zinc-500 hover:text-brand-dark"}`}
              >
                Vektor Logo
              </button>
            </div>

            <button
              onClick={() => onCopyAll(getFullPromptsText(), "Seluruh Prompt AI")}
              className="px-4 py-2 bg-brand-green text-white text-xs font-bold rounded-lg hover:bg-brand-green/95 transition shadow-sm"
            >
              Salin Semua Prompt (B2B)
            </button>
          </div>
        </div>
      </div>

      {/* Control Bar */}
      <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-xl flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Cari prompt atau kata kunci..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-zinc-200 rounded-lg pl-10 pr-4 py-2 text-xs font-medium text-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-green focus:border-brand-green"
          />
        </div>

        <div className="text-xs text-zinc-500 font-medium">
          Menampilkan <strong className="text-brand-dark font-bold">{filteredPrompts.length}</strong> dari {imagePrompts.length} Prompt
        </div>
      </div>

      {/* Prompts Layout */}
      <div className="grid grid-cols-1 gap-6">
        {filteredPrompts.length > 0 ? (
          filteredPrompts.map((p, idx) => (
            <div
              key={p.id}
              className="bg-white rounded-xl border border-zinc-200/80 p-6 shadow-sm hover:shadow transition relative flex flex-col md:flex-row gap-6"
            >
              {/* Optional Visual Preview (if available, e.g. for the pre-generated mockup) */}
              {p.localImageKey === "kdkmp_coffee_mockup" && mockupImagePath ? (
                <div className="w-full md:w-44 shrink-0 rounded-lg overflow-hidden border border-zinc-100 aspect-square relative group bg-zinc-50 shadow-sm self-start">
                  <img
                    src={mockupImagePath}
                    alt={p.title}
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-[10px] font-bold">
                    Pre-generated Asset
                  </div>
                </div>
              ) : (
                <div className="w-full md:w-44 shrink-0 rounded-lg border border-dashed border-zinc-300 aspect-square bg-zinc-50 flex flex-col items-center justify-center text-zinc-400 font-mono text-[10px] p-4 text-center self-start">
                  <Image className="w-6 h-6 mb-2 text-zinc-300" />
                  <span>Siap di-generate di Midjourney / DALL-E / Imagen</span>
                </div>
              )}

              {/* Prompt Text details */}
              <div className="flex-1 space-y-4 relative pr-10">
                {/* Individual copy button */}
                <button
                  onClick={() => handleCopyPrompt(p.id, p.promptEnglish)}
                  className="absolute top-0 right-0 p-2 text-zinc-400 hover:text-brand-dark bg-zinc-50 hover:bg-zinc-100 rounded-lg transition border border-zinc-100 shadow-sm"
                  title="Salin Prompt AI"
                >
                  {copiedPromptId === p.id ? <Check className="w-4 h-4 text-green-600 animate-bounce" /> : <Copy className="w-4 h-4" />}
                </button>

                <div className="space-y-1">
                  <span className="px-2 py-0.5 bg-zinc-100 text-zinc-600 rounded text-[10px] font-bold uppercase tracking-wider font-mono">
                    {p.category}
                  </span>
                  <h4 className="text-sm md:text-base font-bold text-brand-dark font-sans pr-6">
                    {p.title}
                  </h4>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">Prompt AI Bahasa Inggris (Bebas Modifikasi):</span>
                  <p className="p-3 bg-zinc-50 border border-zinc-100 rounded-lg text-xs font-mono font-medium text-zinc-600 select-all leading-relaxed whitespace-normal">
                    {p.promptEnglish}
                  </p>
                </div>

                {/* Displaying prompt tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {p.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="bg-brand-cream border border-brand-gold/15 text-brand-green font-medium text-[10px] px-2.5 py-0.5 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white border border-zinc-200 border-dashed rounded-xl p-12 text-center text-zinc-500 max-w-md mx-auto">
            <HelpCircle className="w-10 h-10 mx-auto text-zinc-300 mb-3" />
            <p className="text-sm font-semibold">Tidak ada prompt yang sesuai</p>
            <p className="text-xs text-zinc-400 mt-1">Coba sesuaikan pencarian Anda.</p>
          </div>
        )}
      </div>

      {/* AI Engineering Tips */}
      <div className="bg-brand-cream/80 border border-brand-gold/25 rounded-xl p-6 space-y-4">
        <h4 className="font-bold text-brand-green text-xs uppercase tracking-wider flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-brand-gold fill-brand-gold" />
          Tips Merancang Foto Komersial dengan Generator AI:
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-zinc-600 leading-relaxed">
          <div className="space-y-1">
            <h5 className="font-bold text-brand-dark">1. Rasio Aspek (Aspect Ratio)</h5>
            <p>Untuk Instagram feed gunakan rasio 1:1 (`--ar 1:1`). Untuk website hero banner gunakan rasio landscape 16:9 (`--ar 16:9`). Untuk Instagram stories gunakan 9:16.</p>
          </div>
          <div className="space-y-1">
            <h5 className="font-bold text-brand-dark">2. Penambahan Kata Kunci Kualitas</h5>
            <p>Kami telah menyematkan kata-kata wajib seperti "Award winning, cinematic lighting, luxury packaging, photorealistic" di akhir prompt untuk memastikan output gambar bermutu tinggi.</p>
          </div>
          <div className="space-y-1">
            <h5 className="font-bold text-brand-dark">3. Pengaturan Kontras Warna</h5>
            <p>Untuk kopi specialty, gunakan pencahayaan "Moody golden hour sunlight" atau "Soft studio key lighting" untuk melahirkan bayangan lembut berdimensi tinggi yang premium.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
