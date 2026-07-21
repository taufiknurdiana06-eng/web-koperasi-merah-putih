import React, { useState } from "react";
import {
  Coffee,
  BookOpen,
  Copy,
  Check,
  Award,
  Users,
  Target,
  FileText,
  Sparkles,
  Megaphone,
  Compass,
  ArrowUpRight,
  MapPin,
  Trees,
  Flag,
  Globe2,
  Bookmark
} from "lucide-react";

// Import custom views
import CompanyProfileView from "./components/CompanyProfileView";
import ProductCatalogView from "./components/ProductCatalogView";
import ArticleView from "./components/ArticleView";
import LogoPhilosophyView from "./components/LogoPhilosophyView";
import BrandIdentityView from "./components/BrandIdentityView";
import MediaPromotionView from "./components/MediaPromotionView";
import PromptGeneratorView from "./components/PromptGeneratorView";

// Hardcoded references to the generated high-quality images
const COFFEE_MOCKUP_IMAGE = "/src/assets/images/kdkmp_coffee_mockup_1784644680706.jpg";
const GARUT_HERO_IMAGE = "/src/assets/images/garut_mountains_hero_1784644698910.jpg";

export default function App() {
  const [activeTab, setActiveTab] = useState<
    "dashboard" | "profile" | "product" | "identity" | "logo" | "article" | "media" | "prompts"
  >("dashboard");

  // Global toast state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    triggerToast(`📋 ${label} berhasil disalin ke clipboard!`);
  };

  return (
    <div className="min-h-screen bg-brand-dark flex flex-col font-sans selection:bg-brand-gold selection:text-brand-dark">
      {/* Premium Sticky Header */}
      <header className="sticky top-0 z-50 bg-brand-dark text-white border-b border-white/5 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Minimalist Flag / Badge */}
            <div className="w-8 h-8 rounded-lg bg-brand-red flex flex-col justify-between p-1 overflow-hidden shrink-0 shadow-sm border border-white/10">
              <div className="h-1/2 w-full bg-white"></div>
            </div>
            <div>
              <h1 className="text-sm font-bold tracking-wider uppercase font-sans flex items-center gap-1">
                KDKMP <span className="text-brand-gold text-xs font-light">Banjar</span>
              </h1>
              <p className="text-[10px] text-zinc-400 font-medium">Koperasi Desa Merah Putih</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-zinc-300">
            <span className="flex items-center gap-1 text-[11px] bg-brand-green px-2.5 py-1 rounded-full text-brand-cream border border-brand-green/20">
              <Globe2 className="w-3.5 h-3.5 text-brand-gold" />
              Specialty Coffee Exporter
            </span>
          </div>
        </div>
      </header>

      {/* Hero Banner Grid (Editorial visual context) */}
      <div className="relative bg-brand-dark text-white overflow-hidden h-64 md:h-80 shadow-md">
        {/* Background Image with elegant overlay */}
        <img
          src={GARUT_HERO_IMAGE}
          alt="Mist-covered coffee plantation on Mount Cikuray, Garut"
          className="absolute inset-0 w-full h-full object-cover opacity-35 filter brightness-90 saturate-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-8 md:pb-12 space-y-3">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 bg-brand-red text-white text-[10px] font-bold tracking-widest uppercase rounded">
              Indonesia
            </span>
            <span className="text-brand-gold text-xs font-mono">1.500 mdpl • Lereng Cikuray</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight">
            Portal Branding Terpadu KDKMP
          </h2>
          <p className="text-sm md:text-base text-zinc-300 font-light max-w-xl leading-relaxed">
            Paket lengkap identitas merek, profil koperasi, dokumentasi produk, media promosi, dan panduan visual Arabika Garut Specialty.
          </p>
        </div>
      </div>

      {/* Horizontal Tabbed Navigation Rail */}
      <div className="bg-white border-b border-zinc-200/80 sticky top-[68px] z-40 shadow-sm overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex">
          <nav className="flex space-x-6 min-w-max py-1">
            {[
              { id: "dashboard", label: "Ringkasan", icon: Compass },
              { id: "profile", label: "Company Profile", icon: FileText },
              { id: "product", label: "Produk Arabika", icon: Coffee },
              { id: "identity", label: "Identitas Brand", icon: Bookmark },
              { id: "logo", label: "Konsep Logo", icon: Sparkles },
              { id: "article", label: "Artikel Bisnis", icon: BookOpen },
              { id: "media", label: "Media Promosi", icon: Megaphone },
              { id: "prompts", label: "Prompt AI", icon: Award }
            ].map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-4 px-1 border-b-2 font-semibold text-xs md:text-sm flex items-center gap-2 transition duration-200 ${
                    isActive
                      ? "border-brand-green text-brand-green"
                      : "border-transparent text-zinc-500 hover:text-brand-dark hover:border-zinc-300"
                  }`}
                >
                  <TabIcon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Container Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {activeTab === "dashboard" && (
          <div className="space-y-12 animate-fade-in">
            {/* Quick Greeting Box */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center bg-white rounded-2xl p-6 md:p-8 border border-zinc-200/80 shadow-sm">
              <div className="lg:col-span-2 space-y-4">
                <span className="px-3 py-1 bg-brand-gold/10 text-brand-gold text-[10px] font-bold rounded-full border border-brand-gold/20 uppercase tracking-wider font-mono">
                  Welcome to Brand Hub
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-dark tracking-tight">
                  Sinergi Koperasi Desa, Mengharumkan Kopi Nusantara
                </h3>
                <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
                  Selamat datang di hub konsultasi merek Koperasi Desa Merah Putih (KDKMP). Kami merangkai seluruh dokumen penting, profil korporasi, deskripsi produk, strategi media, dan rekayasa visual AI ke dalam satu portal interaktif yang dinamis. Gunakan tombol salin di setiap modul untuk mentransfer materi promosi langsung ke Word, PDF, atau editor desain Anda.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <button
                    onClick={() => setActiveTab("profile")}
                    className="px-5 py-2.5 bg-brand-green hover:bg-brand-green/95 text-white text-xs font-semibold rounded-lg shadow-md flex items-center gap-2 transition"
                  >
                    Buka Company Profile
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActiveTab("prompts")}
                    className="px-5 py-2.5 bg-zinc-100 hover:bg-zinc-200 text-brand-dark text-xs font-semibold rounded-lg border border-zinc-200 flex items-center gap-2 transition"
                  >
                    Eksplor Prompt AI
                  </button>
                </div>
              </div>

              {/* Graphic Feature Box embedding generated package mockup */}
              <div className="bg-brand-cream border border-brand-gold/20 rounded-xl overflow-hidden shadow-sm relative group p-4 flex flex-col items-center">
                <div className="w-full aspect-square rounded-lg overflow-hidden border border-zinc-200/60 bg-white relative">
                  <img
                    src={COFFEE_MOCKUP_IMAGE}
                    alt="Premium KDKMP packaging"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2 left-2 bg-brand-dark/80 text-white text-[9px] font-mono px-2 py-1 rounded">
                    Mockup Pouch Premium
                  </div>
                </div>
                <div className="mt-3 text-center space-y-1">
                  <span className="font-serif font-bold text-xs text-brand-green block">Arabica Garut Premium Coffee</span>
                  <p className="text-[10px] text-zinc-500">Materi kemasan aluminium hitam matte hot stamp emas</p>
                </div>
              </div>
            </div>

            {/* Strategic Pillars Cards */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest text-center">Tiga Pilar Utama KDKMP</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-zinc-200/80 shadow-sm flex gap-4">
                  <div className="p-3 bg-brand-green/10 text-brand-green rounded-lg h-11 w-11 flex items-center justify-center shrink-0">
                    <Trees className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-bold text-brand-dark text-sm md:text-base">Agroforestri Berkelanjutan</h5>
                    <p className="text-zinc-500 text-xs leading-relaxed">
                      Ditanam di bawah rimbunnya pohon penaung alami di lereng gunung Garut untuk memelihara tanah vulkanis dan habitat flora-fauna.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-zinc-200/80 shadow-sm flex gap-4">
                  <div className="p-3 bg-brand-green/10 text-brand-green rounded-lg h-11 w-11 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-bold text-brand-dark text-sm md:text-base">Kemitraan Adil (Fair Trade)</h5>
                    <p className="text-zinc-500 text-xs leading-relaxed">
                      Membeli langsung ceri merah matang dari 250+ petani mitra lokal di atas harga pasar guna meningkatkan taraf kesejahteraan keluarga desa.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-zinc-200/80 shadow-sm flex gap-4">
                  <div className="p-3 bg-brand-green/10 text-brand-green rounded-lg h-11 w-11 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-bold text-brand-dark text-sm md:text-base">Mutu Specialty SCA 83+</h5>
                    <p className="text-zinc-500 text-xs leading-relaxed">
                      Sertifikasi Indikasi Geografis dan standardisasi laboratorium QC ketat yang menjamin cita rasa jeruk segar dan aroma jasmine melati.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Geographical Map Mockup */}
            <div className="bg-white border border-zinc-200 rounded-xl p-6 md:p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-brand-green">
                    <MapPin className="w-5 h-5" />
                    <h4 className="font-serif font-bold text-lg">Asal Geografis & Geologi Vulkanis</h4>
                  </div>
                  <p className="text-zinc-600 text-xs md:text-sm leading-relaxed text-justify">
                    Kabupaten Garut, Jawa Barat didominasi oleh deretan kerucut vulkanis subur yang kaya akan andosol organik melimpah. Biji kopi Arabika kami dibudidayakan langsung pada lereng-lereng curam <strong>Gunung Cikuray, Gunung Papandayan, dan Gunung Guntur</strong> dengan ketinggian berkisar antara 1.300 hingga 1.550 meter di atas permukaan laut. Suhu sejuk konstan ini mendorong buah kopi matang perlahan, mengunci profil keasaman manis buah yang luar biasa.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="p-3 bg-zinc-50 rounded-lg">
                      <span className="text-[10px] text-zinc-400 font-bold block uppercase tracking-wider">Gunung Utama</span>
                      <span className="text-xs font-bold text-brand-dark">Mt. Cikuray & Mt. Papandayan</span>
                    </div>
                    <div className="p-3 bg-zinc-50 rounded-lg">
                      <span className="text-[10px] text-zinc-400 font-bold block uppercase tracking-wider">Unsur Tanah</span>
                      <span className="text-xs font-bold text-brand-dark">Vulkanik Andosol Organik</span>
                    </div>
                  </div>
                </div>

                {/* Conceptual Map Illustration */}
                <div className="relative border border-zinc-200 rounded-xl overflow-hidden aspect-video bg-zinc-50 flex items-center justify-center p-4">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#8B5E3C_1px,transparent_1px)] [background-size:12px_12px]"></div>
                  <div className="text-center space-y-3 z-10">
                    <div className="inline-flex p-3 bg-brand-green/10 text-brand-green rounded-full shadow-sm border border-brand-green/10">
                      <Compass className="w-6 h-6 animate-spin-slow" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-brand-dark block uppercase tracking-wider">Peta Terintegrasi Garut, Jawa Barat</span>
                      <span className="text-[10px] text-zinc-500">Kawasan Cigedug, Cikajang, Cisurupan</span>
                    </div>
                    {/* Tiny visual badges representing altitudes */}
                    <div className="flex gap-2 justify-center">
                      <span className="px-2 py-0.5 bg-brand-green text-white text-[9px] font-mono rounded">1.300m</span>
                      <span className="px-2 py-0.5 bg-brand-green text-white text-[9px] font-mono rounded">1.450m</span>
                      <span className="px-2 py-0.5 bg-brand-green text-white text-[9px] font-mono rounded">1.550m</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Dynamic Views */}
        {activeTab === "profile" && <CompanyProfileView onCopyAll={handleCopyText} />}
        {activeTab === "product" && (
          <ProductCatalogView onCopyAll={handleCopyText} mockupImagePath={COFFEE_MOCKUP_IMAGE} />
        )}
        {activeTab === "identity" && <BrandIdentityView onCopyAll={handleCopyText} />}
        {activeTab === "logo" && <LogoPhilosophyView onCopyAll={handleCopyText} />}
        {activeTab === "article" && <ArticleView onCopyAll={handleCopyText} />}
        {activeTab === "media" && <MediaPromotionView onCopyAll={handleCopyText} />}
        {activeTab === "prompts" && (
          <PromptGeneratorView onCopyAll={handleCopyText} mockupImagePath={COFFEE_MOCKUP_IMAGE} />
        )}
      </main>

      {/* Corporate Premium Footer */}
      <footer className="bg-brand-dark text-white border-t border-white/5 py-12 mt-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-brand-red flex flex-col justify-between p-0.5 overflow-hidden shadow">
              <div className="h-1/2 w-full bg-white"></div>
            </div>
            <div>
              <p className="text-xs font-bold tracking-wider uppercase font-sans">
                KOPERASI DESA MERAH PUTIH (KDKMP)
              </p>
              <p className="text-[10px] text-zinc-400">Mahakarya Arabika Garut Specialty untuk Panggung Dunia</p>
            </div>
          </div>

          <div className="text-center md:text-right space-y-1 text-[11px] text-zinc-500 font-medium">
            <p>© 2026 Koperasi Desa Merah Putih. All Rights Reserved.</p>
            <p>Designed for Garut Coffee Farmers & Specialty Roasters Globally.</p>
          </div>
        </div>
      </footer>

      {/* Global Toast Notification System */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-brand-dark text-white text-xs font-semibold px-4 py-3 rounded-xl border border-white/10 shadow-2xl flex items-center gap-2 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-brand-gold animate-ping"></span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
