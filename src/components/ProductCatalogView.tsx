import React, { useState } from "react";
import { Coffee, Copy, Check, Info, Flame, Award, Ruler, GlassWater, Thermometer, RotateCcw, Compass } from "lucide-react";
import { coffeeProductData } from "../data";

interface ProductCatalogViewProps {
  onCopyAll: (text: string, label: string) => void;
  mockupImagePath?: string;
}

export default function ProductCatalogView({ onCopyAll, mockupImagePath }: ProductCatalogViewProps) {
  const [selectedSize, setSelectedSize] = useState(0);
  const [selectedBrewMethod, setSelectedBrewMethod] = useState(0);
  const [copiedSpecs, setCopiedSpecs] = useState(false);

  // Flavor slider states (interactive for demo or learning)
  const flavorStats = [
    { label: "Acidity (Keasaman)", value: 8, desc: "Cerah, crisp seperti jeruk Garut manis" },
    { label: "Body (Kekentalan)", value: 6, desc: "Medium, lembut berserat beludru" },
    { label: "Sweetness (Kemanisan)", value: 8.5, desc: "Sangat menonjol, karamel & gula aren alami" },
    { label: "Aroma (Kewangian)", value: 9, desc: "Intensitas tinggi melati (jasmine) & jeruk nipis" },
    { label: "Aftertaste (Hasil Akhir)", value: 8, desc: "Clean cup, lingering manis daun teh hitam" }
  ];

  const handleCopyProductSpecs = () => {
    let text = `${coffeeProductData.name.toUpperCase()}\n`;
    text += `"${coffeeProductData.tagline}"\n\n`;
    text += `SPESIFIKASI TEKNIS:\n`;
    coffeeProductData.specifications.forEach(spec => {
      text += `- ${spec.label}: ${spec.value}\n`;
    });
    text += `\nCITA RASA (FLAVOR PROFILE):\n`;
    text += `- Flavor: ${coffeeProductData.description.flavorProfile}\n`;
    text += `- Aroma: ${coffeeProductData.description.aroma}\n`;
    text += `- Acidity: ${coffeeProductData.description.acidity}\n`;
    text += `- Body: ${coffeeProductData.description.body}\n`;
    text += `- Aftertaste: ${coffeeProductData.description.aftertaste}\n`;
    text += `\nKEUNGGULAN UTAMA (SELLING POINTS):\n`;
    coffeeProductData.sellingPoints.forEach(pt => {
      text += `- ${pt}\n`;
    });

    navigator.clipboard.writeText(text);
    setCopiedSpecs(true);
    setTimeout(() => setCopiedSpecs(false), 2000);
  };

  return (
    <div id="product-catalog" className="space-y-12">
      {/* Product Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-2xl p-6 md:p-10 border border-zinc-200/80 shadow-sm">
        {/* Left: Product Image & Size Selector */}
        <div className="space-y-6">
          <div className="relative rounded-xl overflow-hidden aspect-square bg-zinc-100 border border-zinc-200 shadow-inner group">
            {mockupImagePath ? (
              <img
                src={mockupImagePath}
                alt="Arabica Garut Premium Coffee Matte Black Pouch Mockup"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-zinc-400 bg-zinc-50">
                <Coffee className="w-16 h-16 mb-4 animate-pulse text-brand-green/30" />
                <span className="text-sm">Gambar mockup tidak ditemukan</span>
              </div>
            )}
            <div className="absolute top-4 left-4 bg-brand-green text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 border border-brand-green/20">
              <Award className="w-3.5 h-3.5 text-brand-gold fill-brand-gold" />
              Specialty Grade 1
            </div>
            <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md text-white text-[11px] font-mono px-3 py-1.5 rounded-md">
              Single Origin Cikuray
            </div>
          </div>

          {/* Sizes Row */}
          <div>
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">Pilih Ukuran Kemasan:</h4>
            <div className="grid grid-cols-3 gap-3">
              {coffeeProductData.sizes.map((sz, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSize(idx)}
                  className={`p-3.5 rounded-xl border text-left transition duration-300 ${
                    selectedSize === idx
                      ? "border-brand-green bg-brand-green/5 ring-1 ring-brand-green"
                      : "border-zinc-200 bg-zinc-50/50 hover:bg-zinc-50"
                  }`}
                >
                  <div className="font-bold text-brand-dark text-sm md:text-base">{sz.weight}</div>
                  <div className="text-[11px] text-zinc-500 mt-1">{sz.priceEstimate}</div>
                </button>
              ))}
            </div>
            {/* Active size helper description */}
            <div className="mt-3 text-xs text-zinc-500 bg-brand-cream/60 p-3 rounded-lg border border-brand-gold/15">
              <span className="font-semibold text-brand-green">✓ Direkomendasikan untuk:</span> {coffeeProductData.sizes[selectedSize].bestFor}
            </div>
          </div>
        </div>

        {/* Right: Product Details & Specs */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="px-3 py-1 bg-brand-red/10 text-brand-red text-xs font-semibold rounded-full border border-brand-red/20 uppercase tracking-wider font-mono">
              Produk Unggulan (Hero Product)
            </span>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark tracking-tight">
              {coffeeProductData.name}
            </h3>
            <p className="text-brand-green font-medium text-sm md:text-base italic">
              "{coffeeProductData.tagline}"
            </p>
          </div>

          <div className="space-y-3 pt-3 border-t border-zinc-100">
            <div className="flex justify-between items-center">
              <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Spesifikasi Teknis</h4>
              <button
                onClick={handleCopyProductSpecs}
                className="text-xs text-brand-green font-semibold hover:text-brand-dark flex items-center gap-1 bg-zinc-100 px-2 py-1 rounded hover:bg-zinc-200 transition"
              >
                {copiedSpecs ? <Check className="w-3 h-3 text-green-600" /> : <Copy className="w-3 h-3" />}
                Salin Spesifikasi
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {coffeeProductData.specifications.map((spec, idx) => (
                <div key={idx} className="flex flex-col p-2.5 bg-zinc-50 border border-zinc-100 rounded-lg">
                  <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">{spec.label}</span>
                  <span className="text-sm font-bold text-brand-dark mt-0.5">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Selling Points */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Kunci Keunggulan (Selling Point)</h4>
            <ul className="space-y-2">
              {coffeeProductData.sellingPoints.map((pt, idx) => (
                <li key={idx} className="flex gap-2.5 text-xs md:text-sm text-zinc-600 leading-relaxed">
                  <span className="text-brand-gold font-bold">✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Flavor Profile Visualization & Competitor Advantages */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Flavor Profile Bars */}
        <div className="bg-white rounded-xl p-6 md:p-8 border border-zinc-200/80 shadow-sm space-y-6">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-brand-green" />
            <h4 className="text-lg font-serif font-bold text-brand-dark">Karakteristik Cita Rasa (Flavor Chart)</h4>
          </div>

          <div className="space-y-5">
            {flavorStats.map((stat, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold text-zinc-700">
                  <span>{stat.label}</span>
                  <span className="font-mono text-brand-green">{stat.value} / 10</span>
                </div>
                <div className="w-full h-2.5 bg-zinc-100 rounded-full overflow-hidden relative">
                  <div
                    className="h-full bg-brand-gold rounded-full transition-all duration-1000"
                    style={{ width: `${stat.value * 10}%` }}
                  ></div>
                </div>
                <p className="text-[11px] text-zinc-400 italic font-light">{stat.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-4 bg-brand-cream/80 border border-brand-gold/15 rounded-xl space-y-2 text-xs text-zinc-600">
            <div className="font-bold text-brand-dark flex items-center gap-1.5 text-xs">
              <Info className="w-3.5 h-3.5 text-brand-green" />
              Catatan Sensorik Q-Grader:
            </div>
            <p className="leading-relaxed">
              "Arabica Garut Premium menonjolkan keasaman asam jeruk sitrun alami yang segar (sweet acidity), yang diseimbangkan secara elegan dengan rasa manis karamel cokelat di lidah serta keharuman bunga melati di hidung. Bodi medium memastikan rasa kopi terasa mantap namun tetap bersih (clean cup) saat ditelan."
            </p>
          </div>
        </div>

        {/* Competitor Advantages & Quality Assurance */}
        <div className="bg-white rounded-xl p-6 md:p-8 border border-zinc-200/80 shadow-sm space-y-6">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-brand-red" />
            <h4 className="text-lg font-serif font-bold text-brand-dark">Keunggulan Dibanding Kompetitor</h4>
          </div>

          <div className="space-y-4">
            {coffeeProductData.competitorAdvantages.map((adv, idx) => (
              <div key={idx} className="p-4 bg-brand-green/5 border-l-4 border-brand-green rounded-r-xl space-y-1">
                <h5 className="font-bold text-brand-green text-sm flex items-center gap-1.5">
                  Alternatif Lebih Unggul #{idx+1}
                </h5>
                <p className="text-zinc-600 text-xs md:text-sm leading-relaxed">{adv}</p>
              </div>
            ))}
          </div>

          <div className="border border-dashed border-zinc-200 rounded-xl p-4 flex gap-4 items-center bg-zinc-50/50">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-gold shadow-sm border border-zinc-100 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h5 className="font-bold text-brand-dark text-xs uppercase tracking-wider">Garansi Keaslian Geografis</h5>
              <p className="text-zinc-500 text-[11px] leading-relaxed mt-0.5">
                Setiap biji kopi kami memiliki traceability QR code yang melacak letak kebun, nama petani penyedia, hingga tanggal roasting demi menjamin kemurnian 100% Arabica Garut Specialty.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Brewing Guide (Interactive Widget) */}
      <div className="bg-white rounded-xl p-6 md:p-8 border border-zinc-200/80 shadow-sm space-y-6">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div className="flex items-center gap-2.5">
            <GlassWater className="w-5 h-5 text-brand-green" />
            <div>
              <h4 className="text-lg font-serif font-bold text-brand-dark">Rekomendasi Penyeduhan (Brewing Guide)</h4>
              <p className="text-xs text-zinc-400">Ikuti resep presisi untuk melepaskan potensi rasa penuh biji kopi.</p>
            </div>
          </div>
          {/* Method Tabs */}
          <div className="flex bg-zinc-100 p-1 rounded-lg">
            {coffeeProductData.description.brewingGuidelines.map((g, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedBrewMethod(idx)}
                className={`px-4 py-1.5 rounded-md text-xs font-semibold transition ${
                  selectedBrewMethod === idx
                    ? "bg-white text-brand-dark shadow-sm"
                    : "text-zinc-500 hover:text-brand-dark"
                }`}
              >
                {g.method}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Method Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-zinc-100">
          <div className="space-y-4">
            <div className="bg-brand-cream/50 rounded-xl p-4 border border-brand-gold/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Rasio Seduh</span>
                <span className="text-sm font-bold text-brand-green">{coffeeProductData.description.brewingGuidelines[selectedBrewMethod].ratio}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Tingkat Gilingan</span>
                <span className="text-sm font-bold text-brand-dark">{coffeeProductData.description.brewingGuidelines[selectedBrewMethod].grindSize}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Suhu Air Ideal</span>
                <span className="text-sm font-bold text-brand-red flex items-center gap-1">
                  <Thermometer className="w-4 h-4" />
                  90°C - 93°C
                </span>
              </div>
            </div>
            <div className="p-3 bg-zinc-50 border border-zinc-150 rounded-lg text-center text-[10px] text-zinc-400 font-mono">
              ☕ Rekomendasi ketel leher angsa untuk penyeduhan V60.
            </div>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h5 className="font-bold text-brand-dark text-xs uppercase tracking-wider mb-2">Langkah Penyeduhan Berurutan:</h5>
            <ol className="space-y-2.5">
              {coffeeProductData.description.brewingGuidelines[selectedBrewMethod].steps.map((step, idx) => (
                <li key={idx} className="flex gap-3 text-xs md:text-sm text-zinc-600 leading-relaxed">
                  <span className="w-5 h-5 bg-zinc-100 text-zinc-600 font-mono rounded-full flex items-center justify-center font-bold text-xs mt-0.5 shrink-0">
                    {idx+1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
