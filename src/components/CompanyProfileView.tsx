import React, { useState } from "react";
import { Copy, Check, Users, Shield, Target, Landmark, Award, ArrowRight, HeartHandshake } from "lucide-react";
import { companyProfileData } from "../data";

interface CompanyProfileViewProps {
  onCopyAll: (text: string, label: string) => void;
}

export default function CompanyProfileView({ onCopyAll }: CompanyProfileViewProps) {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const handleCopySection = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(key);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const getFullProfileText = () => {
    let fullText = `COMPANY PROFILE - ${companyProfileData.title.toUpperCase()}\n`;
    fullText += `${companyProfileData.subtitle}\n\n`;

    Object.entries(companyProfileData.sections).forEach(([key, sec]: any) => {
      fullText += `=========================================\n`;
      fullText += `${sec.title.toUpperCase()}\n`;
      fullText += `=========================================\n`;

      if (sec.content) {
        fullText += sec.content.join("\n\n") + "\n\n";
      } else if (sec.visionContent) {
        fullText += `VISION:\n${sec.visionContent}\n\nMISSION:\n` + sec.missionContent.map((m: string) => `- ${m}`).join("\n") + "\n\n";
      } else if (sec.items) {
        fullText += sec.items.map((it: any) => `${it.name}: ${it.description}`).join("\n") + "\n\n";
      } else if (sec.structure) {
        fullText += sec.structure.map((it: any) => `${it.role}: ${it.name}`).join("\n") + "\n\n";
      } else if (sec.fields) {
        fullText += sec.fields.map((it: any) => `${it.title}: ${it.desc}`).join("\n") + "\n\n";
      } else if (sec.points) {
        fullText += sec.points.map((it: any) => `${it.title}: ${it.desc}`).join("\n") + "\n\n";
      } else if (sec.steps) {
        fullText += sec.steps.map((it: any) => `${it.number}. ${it.title} - ${it.desc}`).join("\n") + "\n\n";
      } else if (sec.standards) {
        fullText += sec.standards.map((it: string) => `- ${it}`).join("\n") + "\n\n";
      } else if (sec.programs) {
        fullText += sec.programs.map((it: any) => `${it.name}: ${it.desc}`).join("\n") + "\n\n";
      } else if (sec.national) {
        fullText += `National:\n` + sec.national.map((it: string) => `- ${it}`).join("\n") + `\n\nInternational:\n` + sec.international.map((it: string) => `- ${it}`).join("\n") + "\n\n";
      } else if (sec.options) {
        fullText += sec.options.map((it: any) => `${it.title}: ${it.desc}`).join("\n") + "\n\n";
      } else if (sec.text) {
        fullText += sec.text + "\n\n";
      }
    });

    return fullText;
  };

  return (
    <div id="company-profile" className="space-y-12">
      {/* Editorial Header Card */}
      <div className="relative rounded-2xl overflow-hidden bg-brand-green text-white p-8 md:p-12 shadow-xl">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#FDFBF7_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="relative z-10 max-w-3xl space-y-4">
          <span className="px-3 py-1 bg-brand-gold/20 text-brand-gold text-xs font-semibold uppercase tracking-widest rounded-full border border-brand-gold/30">
            Official Document
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight">Company Profile</h2>
          <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
            {companyProfileData.subtitle}
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={() => onCopyAll(getFullProfileText(), "Company Profile")}
              className="px-6 py-2.5 bg-brand-gold hover:bg-brand-gold/90 text-brand-dark font-semibold rounded-lg shadow-lg flex items-center gap-2 transition duration-300 transform hover:-translate-y-0.5"
            >
              <Copy className="w-4 h-4" />
              Salin Profil Lengkap
            </button>
            <a
              href="#penutup"
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg border border-white/20 flex items-center gap-2 transition"
            >
              Baca Penutup
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Quick Navigation / Key Stats */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 border border-zinc-200/80 shadow-sm sticky top-6">
            <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">
              Ringkasan Koperasi
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-zinc-100">
                <span className="text-zinc-500 text-sm">Nama Resmi</span>
                <span className="font-bold text-brand-dark text-right text-sm">Koperasi Desa Merah Putih</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-zinc-100">
                <span className="text-zinc-500 text-sm">Singkatan</span>
                <span className="font-bold text-brand-dark text-sm">KDKMP</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-zinc-100">
                <span className="text-zinc-500 text-sm">Didirikan</span>
                <span className="font-bold text-brand-dark text-sm">Tahun 2018</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-zinc-100">
                <span className="text-zinc-500 text-sm">Lokasi Kebun</span>
                <span className="font-bold text-brand-dark text-sm">Garut, Jawa Barat</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-zinc-100">
                <span className="text-zinc-500 text-sm">Jumlah Petani</span>
                <span className="font-bold text-brand-dark text-sm">250+ Petani Mitra</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-500 text-sm">Standar Mutu</span>
                <span className="font-bold text-brand-green text-sm flex items-center gap-1">
                  <Award className="w-4 h-4 text-brand-gold" />
                  SCA Specialty (83+)
                </span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-brand-cream/80 border border-brand-gold/20 rounded-lg text-xs text-brand-green leading-relaxed">
              <p className="font-semibold text-brand-dark mb-1">💡 Catatan Kemitraan:</p>
              Dokumen ini dirancang khusus untuk mempermudah perolehan izin ekspor, proposal kerja sama B2B roastery premium, dan pendaftaran tender internasional.
            </div>
          </div>
        </div>

        {/* Right Columns: Company Profile Document Sections */}
        <div className="lg:col-span-2 space-y-8">
          {/* Tentang Koperasi */}
          <div className="bg-white rounded-xl p-6 md:p-8 border border-zinc-200/80 shadow-sm relative group">
            <button
              onClick={() => handleCopySection("about", companyProfileData.sections.about.content.join("\n\n"))}
              className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-brand-dark bg-zinc-50 hover:bg-zinc-100 rounded-lg transition"
              title="Salin bagian ini"
            >
              {copiedSection === "about" ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-brand-green/10 text-brand-green rounded-lg">
                <Landmark className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-dark">{companyProfileData.sections.about.title}</h3>
            </div>
            <div className="space-y-4 text-zinc-600 leading-relaxed text-sm md:text-base">
              {companyProfileData.sections.about.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {/* Sejarah Singkat */}
          <div className="bg-white rounded-xl p-6 md:p-8 border border-zinc-200/80 shadow-sm relative group">
            <button
              onClick={() => handleCopySection("history", companyProfileData.sections.history.content.join("\n\n"))}
              className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-brand-dark bg-zinc-50 hover:bg-zinc-100 rounded-lg transition"
              title="Salin bagian ini"
            >
              {copiedSection === "history" ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-brand-green/10 text-brand-green rounded-lg">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-dark">{companyProfileData.sections.history.title}</h3>
            </div>
            <div className="space-y-4 text-zinc-600 leading-relaxed text-sm md:text-base">
              {companyProfileData.sections.history.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {/* Visi & Misi */}
          <div className="bg-white rounded-xl p-6 md:p-8 border border-zinc-200/80 shadow-sm relative group">
            <button
              onClick={() => handleCopySection("visionMission", `VISION:\n${companyProfileData.sections.visionMission.visionContent}\n\nMISSION:\n${companyProfileData.sections.visionMission.missionContent.join("\n")}`)}
              className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-brand-dark bg-zinc-50 hover:bg-zinc-100 rounded-lg transition"
              title="Salin bagian ini"
            >
              {copiedSection === "visionMission" ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
            </button>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-brand-green/10 text-brand-green rounded-lg">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-dark">Visi & Misi Koperasi</h3>
            </div>
            <div className="space-y-6">
              <div className="p-4 bg-brand-cream border-l-4 border-brand-gold rounded-r-lg">
                <h4 className="font-bold text-brand-dark text-sm mb-1 uppercase tracking-wider">{companyProfileData.sections.visionMission.visionTitle}</h4>
                <p className="text-zinc-600 italic text-sm md:text-base leading-relaxed">
                  "{companyProfileData.sections.visionMission.visionContent}"
                </p>
              </div>
              <div>
                <h4 className="font-bold text-brand-dark text-sm mb-3 uppercase tracking-wider">{companyProfileData.sections.visionMission.missionTitle}</h4>
                <ul className="space-y-2.5">
                  {companyProfileData.sections.visionMission.missionContent.map((item, idx) => (
                    <li key={idx} className="flex gap-2.5 text-zinc-600 text-sm md:text-base leading-relaxed">
                      <span className="text-brand-red font-bold text-sm">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Nilai-Nilai Koperasi */}
          <div className="bg-white rounded-xl p-6 md:p-8 border border-zinc-200/80 shadow-sm relative group">
            <button
              onClick={() => handleCopySection("values", companyProfileData.sections.values.items.map(it => `${it.name}: ${it.description}`).join("\n"))}
              className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-brand-dark bg-zinc-50 hover:bg-zinc-100 rounded-lg transition"
              title="Salin bagian ini"
            >
              {copiedSection === "values" ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
            </button>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-brand-green/10 text-brand-green rounded-lg">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-dark">{companyProfileData.sections.values.title}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {companyProfileData.sections.values.items.map((val, idx) => (
                <div key={idx} className="p-4 bg-zinc-50 border border-zinc-100 rounded-xl space-y-1">
                  <h4 className="font-bold text-brand-dark text-sm md:text-base flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
                    {val.name}
                  </h4>
                  <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">{val.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Struktur Organisasi */}
          <div className="bg-white rounded-xl p-6 md:p-8 border border-zinc-200/80 shadow-sm relative group">
            <button
              onClick={() => handleCopySection("organization", companyProfileData.sections.organization.structure.map(it => `${it.role}: ${it.name}`).join("\n"))}
              className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-brand-dark bg-zinc-50 hover:bg-zinc-100 rounded-lg transition"
              title="Salin bagian ini"
            >
              {copiedSection === "organization" ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
            </button>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-brand-green/10 text-brand-green rounded-lg">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-dark">{companyProfileData.sections.organization.title}</h3>
            </div>
            <div className="border border-zinc-100 rounded-xl overflow-hidden divide-y divide-zinc-100">
              {companyProfileData.sections.organization.structure.map((member, idx) => (
                <div key={idx} className="flex justify-between items-center p-3.5 hover:bg-zinc-50 transition">
                  <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">{member.role}</span>
                  <span className="font-bold text-brand-dark text-sm md:text-base">{member.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bidang Usaha */}
          <div className="bg-white rounded-xl p-6 md:p-8 border border-zinc-200/80 shadow-sm relative group">
            <button
              onClick={() => handleCopySection("businessFields", companyProfileData.sections.businessFields.fields.map(it => `${it.title}: ${it.desc}`).join("\n"))}
              className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-brand-dark bg-zinc-50 hover:bg-zinc-100 rounded-lg transition"
              title="Salin bagian ini"
            >
              {copiedSection === "businessFields" ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
            </button>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-brand-green/10 text-brand-green rounded-lg">
                <Landmark className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-dark">{companyProfileData.sections.businessFields.title}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {companyProfileData.sections.businessFields.fields.map((field, idx) => (
                <div key={idx} className="p-4 bg-brand-cream/50 border border-zinc-200/60 rounded-xl space-y-1 hover:border-brand-green/30 transition">
                  <h4 className="font-bold text-brand-green text-sm md:text-base">{field.title}</h4>
                  <p className="text-zinc-600 text-xs md:text-sm leading-relaxed">{field.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Keunggulan Arabika Garut */}
          <div className="bg-white rounded-xl p-6 md:p-8 border border-zinc-200/80 shadow-sm relative group">
            <button
              onClick={() => handleCopySection("uniqueness", companyProfileData.sections.garutUniqueness.points.map(it => `${it.title}: ${it.desc}`).join("\n"))}
              className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-brand-dark bg-zinc-50 hover:bg-zinc-100 rounded-lg transition"
              title="Salin bagian ini"
            >
              {copiedSection === "uniqueness" ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
            </button>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-brand-green/10 text-brand-green rounded-lg">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-dark">{companyProfileData.sections.garutUniqueness.title}</h3>
            </div>
            <div className="space-y-4">
              {companyProfileData.sections.garutUniqueness.points.map((pt, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="text-brand-gold text-lg font-serif font-bold pt-0.5">0{idx+1}.</div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-sm md:text-base mb-1">{pt.title}</h4>
                    <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Proses Pengolahan */}
          <div className="bg-white rounded-xl p-6 md:p-8 border border-zinc-200/80 shadow-sm relative group">
            <button
              onClick={() => handleCopySection("processing", companyProfileData.sections.processingSteps.steps.map(it => `${it.number}. ${it.title} - ${it.desc}`).join("\n"))}
              className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-brand-dark bg-zinc-50 hover:bg-zinc-100 rounded-lg transition"
              title="Salin bagian ini"
            >
              {copiedSection === "processing" ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
            </button>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-brand-green/10 text-brand-green rounded-lg">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-dark">{companyProfileData.sections.processingSteps.title}</h3>
            </div>
            <div className="relative border-l border-zinc-200 ml-4 pl-6 space-y-6">
              {companyProfileData.sections.processingSteps.steps.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[37px] top-0 w-6 h-6 rounded-full bg-brand-green text-white flex items-center justify-center font-mono text-[10px] font-bold shadow-sm">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-sm md:text-base mb-1">{step.title}</h4>
                    <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Standar Mutu */}
          <div className="bg-white rounded-xl p-6 md:p-8 border border-zinc-200/80 shadow-sm relative group">
            <button
              onClick={() => handleCopySection("quality", companyProfileData.sections.qualityStandards.standards.join("\n"))}
              className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-brand-dark bg-zinc-50 hover:bg-zinc-100 rounded-lg transition"
              title="Salin bagian ini"
            >
              {copiedSection === "quality" ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-brand-green/10 text-brand-green rounded-lg">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-dark">{companyProfileData.sections.qualityStandards.title}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {companyProfileData.sections.qualityStandards.standards.map((std, idx) => (
                <div key={idx} className="p-4 bg-zinc-50 border border-zinc-100 rounded-xl flex gap-3">
                  <span className="text-brand-red font-bold text-base leading-none">✓</span>
                  <p className="text-zinc-600 text-xs md:text-sm leading-relaxed">{std}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Komitmen & Pemberdayaan */}
          <div className="bg-white rounded-xl p-6 md:p-8 border border-zinc-200/80 shadow-sm relative group">
            <button
              onClick={() => handleCopySection("empowerment", `COMMITMENT:\n${companyProfileData.sections.farmerCommitment.content.join("\n")}\n\nPROGRAMS:\n${companyProfileData.sections.communityEmpowerment.programs.map(it => `${it.name}: ${it.desc}`).join("\n")}`)}
              className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-brand-dark bg-zinc-50 hover:bg-zinc-100 rounded-lg transition"
              title="Salin bagian ini"
            >
              {copiedSection === "empowerment" ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
            </button>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-brand-green/10 text-brand-green rounded-lg">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-dark">Komitmen Petani & Pemberdayaan</h3>
            </div>
            <div className="space-y-6">
              <div className="space-y-3 text-zinc-600 leading-relaxed text-sm md:text-base">
                {companyProfileData.sections.farmerCommitment.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="pt-4 border-t border-zinc-100">
                <h4 className="font-bold text-brand-dark text-sm mb-3 uppercase tracking-wider">{companyProfileData.sections.communityEmpowerment.title}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {companyProfileData.sections.communityEmpowerment.programs.map((prog, idx) => (
                    <div key={idx} className="p-4 bg-brand-cream/40 border border-brand-gold/10 rounded-xl space-y-1">
                      <h5 className="font-bold text-brand-dark text-sm md:text-base">{prog.name}</h5>
                      <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">{prog.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Target Pasar & Kerja Sama */}
          <div className="bg-white rounded-xl p-6 md:p-8 border border-zinc-200/80 shadow-sm relative group">
            <button
              onClick={() => handleCopySection("targetMarket", `NATIONAL:\n${companyProfileData.sections.targetMarket.national.join("\n")}\n\nINTERNATIONAL:\n${companyProfileData.sections.targetMarket.international.join("\n")}\n\nCOLLABORATIONS:\n${companyProfileData.sections.collaborationOpps.options.map(it => `${it.title}: ${it.desc}`).join("\n")}`)}
              className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-brand-dark bg-zinc-50 hover:bg-zinc-100 rounded-lg transition"
              title="Salin bagian ini"
            >
              {copiedSection === "targetMarket" ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
            </button>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-brand-green/10 text-brand-green rounded-lg">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-dark">Target Pasar & Kemitraan</h3>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-zinc-50 border border-zinc-100 rounded-xl">
                  <h4 className="font-bold text-brand-red text-sm mb-2 uppercase tracking-wider">Pasar Nasional</h4>
                  <ul className="space-y-2 text-xs md:text-sm text-zinc-600">
                    {companyProfileData.sections.targetMarket.national.map((it, idx) => (
                      <li key={idx} className="flex gap-2"><span>•</span><span>{it}</span></li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 bg-brand-green/5 border border-brand-green/10 rounded-xl">
                  <h4 className="font-bold text-brand-green text-sm mb-2 uppercase tracking-wider">Pasar Internasional (Ekspor)</h4>
                  <ul className="space-y-2 text-xs md:text-sm text-zinc-600">
                    {companyProfileData.sections.targetMarket.international.map((it, idx) => (
                      <li key={idx} className="flex gap-2"><span>•</span><span>{it}</span></li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-100">
                <h4 className="font-bold text-brand-dark text-sm mb-3 uppercase tracking-wider">{companyProfileData.sections.collaborationOpps.title}</h4>
                <div className="space-y-3">
                  {companyProfileData.sections.collaborationOpps.options.map((opt, idx) => (
                    <div key={idx} className="flex gap-3">
                      <span className="w-5 h-5 bg-brand-gold/20 text-brand-gold rounded-full flex items-center justify-center font-bold text-xs mt-0.5">{idx+1}</span>
                      <div>
                        <h5 className="font-bold text-brand-dark text-sm md:text-base">{opt.title}</h5>
                        <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">{opt.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Penutup */}
          <div id="penutup" className="bg-brand-cream border border-brand-gold/30 rounded-xl p-6 md:p-8 relative group">
            <button
              onClick={() => handleCopySection("closing", companyProfileData.sections.closing.text)}
              className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-brand-dark bg-zinc-100/50 hover:bg-zinc-100 rounded-lg transition"
              title="Salin bagian ini"
            >
              {copiedSection === "closing" ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
            </button>
            <h3 className="text-xl font-serif font-bold text-brand-green mb-3">{companyProfileData.sections.closing.title}</h3>
            <p className="text-zinc-700 italic leading-relaxed text-sm md:text-base">
              "{companyProfileData.sections.closing.text}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
