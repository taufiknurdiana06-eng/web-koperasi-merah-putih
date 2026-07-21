import React, { useState } from "react";
import { BookOpen, Copy, Check, Quote, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { articleData } from "../data";

interface ArticleViewProps {
  onCopyAll: (text: string, label: string) => void;
}

export default function ArticleView({ onCopyAll }: ArticleViewProps) {
  const [fontSize, setFontSize] = useState<"sm" | "base" | "lg" | "xl">("base");
  const [copiedSectionIdx, setCopiedSectionIdx] = useState<number | null>(null);
  const [copiedQuotes, setCopiedQuotes] = useState(false);

  const getFullArticleText = () => {
    let text = `${articleData.title.toUpperCase()}\n`;
    text += `Oleh: ${articleData.author} | ${articleData.date}\n\n`;

    articleData.sections.forEach(sec => {
      text += `--- ${sec.heading.toUpperCase()} ---\n`;
      text += sec.paragraphs.join("\n\n") + "\n\n";
    });

    text += `KUTIPAN KUNCI:\n`;
    articleData.keyQuotes.forEach(q => {
      text += `"${q}"\n`;
    });

    return text;
  };

  const handleCopySection = (idx: number, heading: string, paragraphs: string[]) => {
    const text = `${heading.toUpperCase()}\n\n${paragraphs.join("\n\n")}`;
    navigator.clipboard.writeText(text);
    setCopiedSectionIdx(idx);
    setTimeout(() => setCopiedSectionIdx(null), 2000);
  };

  const fontSizeClass = {
    sm: "text-sm",
    base: "text-sm md:text-base",
    lg: "text-base md:text-lg",
    xl: "text-lg md:text-xl"
  }[fontSize];

  return (
    <div id="business-article" className="space-y-10">
      {/* Editorial Header */}
      <div className="bg-white rounded-2xl p-6 md:p-10 border border-zinc-200/80 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
        <div className="max-w-4xl space-y-4">
          <span className="px-3 py-1 bg-brand-green/10 text-brand-green text-xs font-semibold rounded-full border border-brand-green/20 uppercase tracking-wider font-mono">
            Premium Business Feature
          </span>
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-brand-dark tracking-tight leading-tight">
            {articleData.title}
          </h2>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-zinc-500 font-medium">
            <span>Oleh: <strong className="text-brand-dark">{articleData.author}</strong></span>
            <span>•</span>
            <span>{articleData.date}</span>
            <span>•</span>
            <span className="bg-zinc-100 text-zinc-700 px-2 py-0.5 rounded flex items-center gap-1">
              <BookOpen className="w-3 h-3 text-brand-green" />
              {articleData.readTime}
            </span>
          </div>

          <div className="pt-4 flex flex-wrap gap-4 items-center justify-between border-t border-zinc-100">
            <button
              onClick={() => onCopyAll(getFullArticleText(), "Business Article")}
              className="px-5 py-2 bg-brand-green hover:bg-brand-green/95 text-white font-semibold text-xs rounded-lg shadow flex items-center gap-2 transition"
            >
              <Copy className="w-4 h-4" />
              Salin Seluruh Artikel
            </button>

            {/* Typography Controls */}
            <div className="flex items-center gap-1.5 text-xs text-zinc-500">
              <span className="font-semibold mr-1">Ukuran Huruf:</span>
              <button
                onClick={() => setFontSize("sm")}
                className={`p-1 px-2.5 rounded border transition ${fontSize === "sm" ? "bg-zinc-100 text-brand-dark border-zinc-300 font-bold" : "bg-white hover:bg-zinc-50 border-zinc-200"}`}
                title="Kecil"
              >
                A-
              </button>
              <button
                onClick={() => setFontSize("base")}
                className={`p-1 px-2.5 rounded border transition ${fontSize === "base" ? "bg-zinc-100 text-brand-dark border-zinc-300 font-bold" : "bg-white hover:bg-zinc-50 border-zinc-200"}`}
                title="Normal"
              >
                A
              </button>
              <button
                onClick={() => setFontSize("lg")}
                className={`p-1 px-2.5 rounded border transition ${fontSize === "lg" ? "bg-zinc-100 text-brand-dark border-zinc-300 font-bold" : "bg-white hover:bg-zinc-50 border-zinc-200"}`}
                title="Besar"
              >
                A+
              </button>
              <button
                onClick={() => setFontSize("xl")}
                className={`p-1 px-2.5 rounded border transition ${fontSize === "xl" ? "bg-zinc-100 text-brand-dark border-zinc-300 font-bold" : "bg-white hover:bg-zinc-50 border-zinc-200"}`}
                title="Sangat Besar"
              >
                A++
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Editorial Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: Editorial Pull Quotes */}
        <div className="space-y-6 lg:col-span-1">
          <div className="bg-brand-green text-white rounded-xl p-6 shadow-sm border border-brand-green/20 sticky top-6 space-y-6">
            <div className="flex items-center gap-2 text-brand-gold">
              <Quote className="w-5 h-5 fill-brand-gold" />
              <h4 className="text-xs font-bold uppercase tracking-widest font-sans">Kutipan Utama</h4>
            </div>

            <div className="space-y-6 divide-y divide-white/10">
              {articleData.keyQuotes.map((q, idx) => (
                <div key={idx} className={`pt-4 first:pt-0 space-y-2`}>
                  <p className="text-sm italic font-serif leading-relaxed text-zinc-100">
                    "{q}"
                  </p>
                  <span className="text-[10px] text-brand-gold uppercase tracking-widest font-mono">
                    {idx === 0 ? "Prinsip Koperasi" : "Testimoni Anggota"}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                navigator.clipboard.writeText(articleData.keyQuotes.map(q => `"${q}"`).join("\n\n"));
                setCopiedQuotes(true);
                setTimeout(() => setCopiedQuotes(false), 2000);
              }}
              className="w-full py-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition"
            >
              {copiedQuotes ? <Check className="w-3.5 h-3.5 text-brand-gold" /> : <Copy className="w-3.5 h-3.5" />}
              Salin Semua Kutipan
            </button>
          </div>
        </div>

        {/* Right Side: Article Paragraphs */}
        <div className="lg:col-span-2 space-y-8">
          {articleData.sections.map((sec, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 md:p-8 border border-zinc-200/80 shadow-sm relative group space-y-4 transition hover:shadow-md hover:border-zinc-300/80"
            >
              {/* Copy Section Button */}
              <button
                onClick={() => handleCopySection(idx, sec.heading, sec.paragraphs)}
                className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-brand-dark bg-zinc-50 hover:bg-zinc-100 rounded-lg transition"
                title="Salin bagian ini"
              >
                {copiedSectionIdx === idx ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
              </button>

              {/* Heading */}
              <h3 className="text-lg md:text-xl font-serif font-bold text-brand-dark pr-8 leading-tight">
                {sec.heading}
              </h3>

              {/* Paragraphs */}
              <div className={`space-y-4 text-zinc-600 leading-relaxed ${fontSizeClass}`}>
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-justify indent-4 md:indent-8 first:indent-0">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
