import React, { useState } from "react";
import { Copy, Check, Filter, Search, Instagram, Facebook, Linkedin, Video, HelpCircle, Store, Globe } from "lucide-react";
import { mediaPromotionKit } from "../data";

interface MediaPromotionViewProps {
  onCopyAll: (text: string, label: string) => void;
}

export default function MediaPromotionView({ onCopyAll }: MediaPromotionViewProps) {
  const [activeTab, setActiveTab] = useState<"print" | "social" | "marketplace">("print");
  const [socialFilter, setSocialFilter] = useState<"all" | "instagram" | "facebook" | "linkedin" | "tiktok">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedItemIdx, setCopiedItemIdx] = useState<string | null>(null);

  const handleCopyItem = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItemIdx(key);
    setTimeout(() => setCopiedItemIdx(null), 2000);
  };

  const getFullSocialText = () => {
    let text = "KONTEN MEDIA SOSIAL & DIGITAL - KOPERASI DESA MERAH PUTIH\n\n";
    mediaPromotionKit.socialMediaPosts.forEach(post => {
      text += `=== POSTINGAN ${post.id}: ${post.topic.toUpperCase()} (${post.platform.toUpperCase()}) ===\n`;
      text += `Ide Visual:\n${post.visualIdea}\n\n`;
      text += `Caption:\n${post.caption}\n\n`;
    });
    return text;
  };

  // Filtered social posts
  const filteredPosts = mediaPromotionKit.socialMediaPosts.filter(post => {
    const matchesPlatform = socialFilter === "all" || post.platform === socialFilter;
    const matchesSearch = post.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.caption.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPlatform && matchesSearch;
  });

  return (
    <div id="media-promotion" className="space-y-10">
      {/* Editorial Header */}
      <div className="bg-white rounded-2xl p-6 md:p-10 border border-zinc-200/80 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
        <div className="max-w-4xl space-y-4">
          <span className="px-3 py-1 bg-brand-green/10 text-brand-green text-xs font-semibold rounded-full border border-brand-green/20 uppercase tracking-wider font-mono">
            Marketing Kit Builder
          </span>
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-brand-dark tracking-tight leading-tight">
            Media Promosi & Kampanye Digital
          </h2>
          <p className="text-zinc-600 text-sm md:text-base leading-relaxed max-w-2xl">
            Katalog salinan pemasaran (copywriting) berkonversi tinggi, template kampanye media sosial, pamflet pameran, serta optimasi deskripsi marketplace ritel.
          </p>

          <div className="pt-4 flex flex-wrap gap-4 border-t border-zinc-100">
            {/* View Filter Tabs */}
            <div className="flex bg-zinc-100 p-1 rounded-xl">
              <button
                onClick={() => setActiveTab("print")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition ${activeTab === "print" ? "bg-white text-brand-dark shadow-sm" : "text-zinc-500 hover:text-brand-dark"}`}
              >
                Media Cetak & Event
              </button>
              <button
                onClick={() => setActiveTab("social")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition ${activeTab === "social" ? "bg-white text-brand-dark shadow-sm" : "text-zinc-500 hover:text-brand-dark"}`}
              >
                Media Sosial (10 Posts)
              </button>
              <button
                onClick={() => setActiveTab("marketplace")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition ${activeTab === "marketplace" ? "bg-white text-brand-dark shadow-sm" : "text-zinc-500 hover:text-brand-dark"}`}
              >
                Marketplace & GMB
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tab 1: Print & Event Materials */}
      {activeTab === "print" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in">
          {/* Brosur */}
          <div className="bg-white rounded-xl p-6 border border-zinc-200/80 shadow-sm relative group space-y-4">
            <button
              onClick={() => handleCopyItem("brochure", Object.entries(mediaPromotionKit.brochureContent).map(([k, v]) => `${k.toUpperCase()}:\n${v}`).join("\n\n"))}
              className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-brand-dark bg-zinc-50 hover:bg-zinc-100 rounded-lg transition"
              title="Salin materi brosur"
            >
              {copiedItemIdx === "brochure" ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
            </button>
            <h4 className="text-base font-serif font-bold text-brand-dark">Copywriting Brosur Lipat Tiga</h4>
            <div className="space-y-3.5 text-xs md:text-sm text-zinc-600 divide-y divide-zinc-100">
              <div className="space-y-1 pt-0">
                <span className="text-[10px] text-brand-green font-bold uppercase tracking-wider">Halaman Cover Depan</span>
                <p className="leading-relaxed font-serif italic text-zinc-700">"{mediaPromotionKit.brochureContent.cover}"</p>
              </div>
              <div className="space-y-1 pt-3.5">
                <span className="text-[10px] text-brand-green font-bold uppercase tracking-wider">Bagian Dalam Kiri (Visi Sosial)</span>
                <p className="leading-relaxed">{mediaPromotionKit.brochureContent.insideLeft}</p>
              </div>
              <div className="space-y-1 pt-3.5">
                <span className="text-[10px] text-brand-green font-bold uppercase tracking-wider">Bagian Dalam Kanan (Proses Mutu)</span>
                <p className="leading-relaxed">{mediaPromotionKit.brochureContent.insideRight}</p>
              </div>
              <div className="space-y-1 pt-3.5">
                <span className="text-[10px] text-brand-green font-bold uppercase tracking-wider">Halaman Belakang (Kontak & B2B)</span>
                <p className="leading-relaxed font-mono bg-zinc-50 p-2 rounded text-[11px]">{mediaPromotionKit.brochureContent.back}</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Flyer */}
            <div className="bg-white rounded-xl p-6 border border-zinc-200/80 shadow-sm relative group space-y-3">
              <button
                onClick={() => handleCopyItem("flyer", `HEADLINE: ${mediaPromotionKit.flyerContent.headline}\n\nBODY: ${mediaPromotionKit.flyerContent.body}\n\nCTA: ${mediaPromotionKit.flyerContent.cta}`)}
                className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-brand-dark bg-zinc-50 hover:bg-zinc-100 rounded-lg transition"
                title="Salin materi flyer"
              >
                {copiedItemIdx === "flyer" ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
              </button>
              <h4 className="text-base font-serif font-bold text-brand-dark">Copywriting Flyer Promosi</h4>
              <div className="space-y-2 text-xs md:text-sm text-zinc-600">
                <div>
                  <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">Headline</span>
                  <p className="font-bold text-brand-green text-sm md:text-base">{mediaPromotionKit.flyerContent.headline}</p>
                </div>
                <div>
                  <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">Body Text</span>
                  <p className="leading-relaxed">{mediaPromotionKit.flyerContent.body}</p>
                </div>
                <div>
                  <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">Call to Action (CTA)</span>
                  <p className="font-semibold text-brand-red bg-red-50 p-2 rounded">{mediaPromotionKit.flyerContent.cta}</p>
                </div>
              </div>
            </div>

            {/* Poster & X-Banner */}
            <div className="bg-white rounded-xl p-6 border border-zinc-200/80 shadow-sm relative group space-y-3">
              <button
                onClick={() => handleCopyItem("xbanner", `TITLE: ${mediaPromotionKit.xBannerContent.title}\n\nBULLETS:\n${mediaPromotionKit.xBannerContent.bullets.join("\n")}\n\nFOOTER: ${mediaPromotionKit.xBannerContent.footer}`)}
                className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-brand-dark bg-zinc-50 hover:bg-zinc-100 rounded-lg transition"
                title="Salin materi x-banner"
              >
                {copiedItemIdx === "xbanner" ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
              </button>
              <h4 className="text-base font-serif font-bold text-brand-dark">Desain Konten X-Banner Display</h4>
              <div className="border border-brand-gold/30 rounded-xl p-5 bg-brand-cream space-y-3 font-sans max-w-sm mx-auto shadow-sm">
                <div className="text-center pb-2 border-b border-brand-gold/20">
                  <h5 className="font-bold text-brand-green text-sm tracking-widest uppercase">KDKMP SPECIALTY COFFEE</h5>
                  <p className="text-[9px] text-zinc-500 font-serif italic">Sinergi Merah Putih, Kopi Juara Dunia</p>
                </div>
                <ul className="space-y-1.5 text-[11px] text-zinc-700 font-medium">
                  {mediaPromotionKit.xBannerContent.bullets.map((b, idx) => (
                    <li key={idx} className="flex gap-1"><span>{b}</span></li>
                  ))}
                </ul>
                <div className="text-center pt-2 border-t border-brand-gold/20 text-[9px] font-bold text-brand-dark">
                  {mediaPromotionKit.xBannerContent.footer}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Social Media Posts with Filters & Search */}
      {activeTab === "social" && (
        <div className="space-y-6 animate-fade-in">
          {/* Filters Control Bar */}
          <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-xl flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Cari topik postingan..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-zinc-200 rounded-lg pl-10 pr-4 py-2 text-xs font-medium text-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-green focus:border-brand-green"
              />
            </div>

            {/* Social Platform Tabs */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSocialFilter("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${socialFilter === "all" ? "bg-brand-dark text-white border-brand-dark" : "bg-white text-zinc-600 border-zinc-200 hover:bg-zinc-50"}`}
              >
                Semua Platform
              </button>
              <button
                onClick={() => setSocialFilter("instagram")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition flex items-center gap-1 ${socialFilter === "instagram" ? "bg-[#E1306C] text-white border-[#E1306C]" : "bg-white text-zinc-600 border-zinc-200 hover:bg-zinc-50"}`}
              >
                <Instagram className="w-3.5 h-3.5" />
                Instagram
              </button>
              <button
                onClick={() => setSocialFilter("linkedin")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition flex items-center gap-1 ${socialFilter === "linkedin" ? "bg-[#0077B5] text-white border-[#0077B5]" : "bg-white text-zinc-600 border-zinc-200 hover:bg-zinc-50"}`}
              >
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn (B2B)
              </button>
              <button
                onClick={() => setSocialFilter("tiktok")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition flex items-center gap-1 ${socialFilter === "tiktok" ? "bg-black text-white border-black" : "bg-white text-zinc-600 border-zinc-200 hover:bg-zinc-50"}`}
              >
                <Video className="w-3.5 h-3.5" />
                TikTok
              </button>
            </div>

            <button
              onClick={() => onCopyAll(getFullSocialText(), "Seluruh Konten Media Sosial")}
              className="px-4 py-2 bg-brand-green text-white text-xs font-bold rounded-lg hover:bg-brand-green/95 transition shadow"
            >
              Salin Semua Post
            </button>
          </div>

          {/* Social Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPosts.map((post, idx) => (
                <div
                  key={post.id}
                  className="bg-white border border-zinc-200 rounded-xl p-5 relative group space-y-4 shadow-sm hover:shadow transition"
                >
                  <button
                    onClick={() => handleCopyItem(`social-${post.id}`, `TOPIK: ${post.topic}\n\nIDE VISUAL:\n${post.visualIdea}\n\nCAPTION:\n${post.caption}`)}
                    className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-brand-dark bg-zinc-50 hover:bg-zinc-100 rounded-lg transition"
                    title="Salin caption"
                  >
                    {copiedItemIdx === `social-${post.id}` ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                  </button>

                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-brand-green/10 text-brand-green font-mono text-xs font-bold flex items-center justify-center">
                      {post.id}
                    </span>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{post.platform} Campaign</span>
                  </div>

                  <div className="space-y-1">
                    <h5 className="font-bold text-brand-dark text-xs uppercase tracking-wider">Topik: {post.topic}</h5>
                    <div className="p-2.5 bg-zinc-50 border border-zinc-100 rounded-lg text-xs text-zinc-500 leading-normal italic">
                      <span className="font-bold text-zinc-700 block not-italic text-[10px] uppercase mb-0.5">💡 Ide Visual:</span>
                      {post.visualIdea}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Copywriting Caption:</span>
                    <div className="p-3 bg-brand-cream/40 border border-brand-gold/10 rounded-lg text-xs font-medium text-zinc-700 whitespace-pre-wrap select-all max-h-40 overflow-y-auto leading-relaxed scrollbar-thin">
                      {post.caption}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white border border-zinc-200 border-dashed rounded-xl p-12 text-center text-zinc-500 max-w-md mx-auto">
              <HelpCircle className="w-10 h-10 mx-auto text-zinc-300 mb-3" />
              <p className="text-sm font-semibold">Tidak ada postingan yang sesuai</p>
              <p className="text-xs text-zinc-400 mt-1">Coba sesuaikan kata pencarian atau pilih kategori platform lain.</p>
            </div>
          )}
        </div>
      )}

      {/* Tab 3: Marketplace Description & Google My Business */}
      {activeTab === "marketplace" && (
        <div className="space-y-8 animate-fade-in">
          {/* Shopee & Tokopedia Kit */}
          <div className="bg-white rounded-xl p-6 md:p-8 border border-zinc-200/80 shadow-sm relative group space-y-4">
            <button
              onClick={() => handleCopyItem("shopee", `TITLE: ${mediaPromotionKit.marketplace.shopeeTokopedia.title}\n\nDESCRIPTION:\n${mediaPromotionKit.marketplace.shopeeTokopedia.description}\n\nTAGS: ${mediaPromotionKit.marketplace.shopeeTokopedia.tags.join(" ")}`)}
              className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-brand-dark bg-zinc-50 hover:bg-zinc-100 rounded-lg transition"
              title="Salin deskripsi toko"
            >
              {copiedItemIdx === "shopee" ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
            </button>
            <div className="flex items-center gap-2">
              <Store className="w-5 h-5 text-brand-red" />
              <h4 className="text-lg font-serif font-bold text-brand-dark">Optimasi Deskripsi Shopee & Tokopedia</h4>
            </div>

            <div className="space-y-2.5">
              <div>
                <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">Judul Produk Rekomendasi (SEO Friendly)</span>
                <p className="font-bold text-brand-green text-sm md:text-base border-b border-zinc-100 pb-2">{mediaPromotionKit.marketplace.shopeeTokopedia.title}</p>
              </div>
              <div>
                <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">Deskripsi Produk Rinci</span>
                <div className="p-3 bg-zinc-50 border border-zinc-100 rounded-lg text-xs text-zinc-600 whitespace-pre-wrap leading-relaxed max-h-64 overflow-y-auto select-all">
                  {mediaPromotionKit.marketplace.shopeeTokopedia.description}
                </div>
              </div>
              <div>
                <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">Search Hashtags</span>
                <p className="text-xs text-zinc-500 font-mono font-semibold">{mediaPromotionKit.marketplace.shopeeTokopedia.tags.join("  ")}</p>
              </div>
            </div>
          </div>

          {/* Google Business Profile */}
          <div className="bg-white rounded-xl p-6 md:p-8 border border-zinc-200/80 shadow-sm relative group space-y-4">
            <button
              onClick={() => handleCopyItem("gmb", `TITLE: ${mediaPromotionKit.marketplace.googleMyBusiness.title}\n\nDESC:\n${mediaPromotionKit.marketplace.googleMyBusiness.description}`)}
              className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-brand-dark bg-zinc-50 hover:bg-zinc-100 rounded-lg transition"
              title="Salin deskripsi GMB"
            >
              {copiedItemIdx === "gmb" ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
            </button>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-brand-green" />
              <h4 className="text-lg font-serif font-bold text-brand-dark">Google Business Profile (GMB) Optimization</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1 space-y-3">
                <div className="p-4 bg-brand-cream/60 border border-brand-gold/15 rounded-xl space-y-2">
                  <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">Nama Bisnis GBP</span>
                  <p className="font-bold text-brand-dark text-xs">{mediaPromotionKit.marketplace.googleMyBusiness.title}</p>
                  <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">Kategori Utama</span>
                  <p className="text-zinc-600 text-xs">Koperasi Produsen Kopi / Supplier Kopi Specialty</p>
                </div>
              </div>

              <div className="md:col-span-2 space-y-2">
                <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">Deskripsi Utama GBP (Max 750 karakter)</span>
                <p className="text-xs text-zinc-600 bg-zinc-50 p-3 rounded-lg leading-relaxed border border-zinc-100">{mediaPromotionKit.marketplace.googleMyBusiness.description}</p>
              </div>
            </div>

            {/* GMB Post Updates */}
            <div className="pt-4 border-t border-zinc-100 space-y-3">
              <h5 className="font-bold text-brand-dark text-xs uppercase tracking-wider">Template Postingan Pembaruan GBP Berkala:</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {mediaPromotionKit.marketplace.googleMyBusiness.posts.map((post, idx) => (
                  <div key={idx} className="p-4 bg-zinc-50 rounded-xl border border-zinc-100 space-y-2 relative">
                    <button
                      onClick={() => handleCopyItem(`gmb-post-${idx}`, post.content)}
                      className="absolute top-3 right-3 p-1.5 text-zinc-400 hover:text-brand-dark bg-white hover:bg-zinc-100 rounded border border-zinc-200 transition"
                      title="Salin postingan ini"
                    >
                      {copiedItemIdx === `gmb-post-${idx}` ? <Check className="w-3 h-3 text-green-600" /> : <Copy className="w-3 h-3" />}
                    </button>
                    <h6 className="font-bold text-brand-green text-xs pr-6">{post.topic}</h6>
                    <p className="text-zinc-500 text-[11px] leading-relaxed select-all">{post.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
