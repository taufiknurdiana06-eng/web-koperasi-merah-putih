import {
  CompanyProfile,
  CoffeeProduct,
  ImagePromptItem,
  ArticleData,
  LogoElement,
  BrandIdentityData,
  MediaPromotionKit
} from "./types";

export const companyProfileData: CompanyProfile = {
  title: "Koperasi Desa Merah Putih",
  subtitle: "Membawa Cita Rasa Arabika Garut Terbaik ke Panggung Dunia",
  sections: {
    about: {
      title: "Tentang Koperasi",
      content: [
        "Koperasi Desa Merah Putih (KDKMP) adalah sebuah wadah kolaboratif berbasis kemasyarakatan yang didirikan dengan semangat gotong royong nasionalisme Indonesia. Kami berfokus pada pemberdayaan petani kopi lokal di wilayah pegunungan Kabupaten Garut, Jawa Barat, guna menghasilkan biji kopi specialty Arabika berkualitas tinggi yang mampu bersaing di pasar global.",
        "Dengan memadukan kearifan lokal dalam budidaya kopi tradisional dan integrasi teknologi pengolahan pasca-panen yang modern, KDKMP hadir tidak hanya sebagai produsen kopi, melainkan juga sebagai ekosistem berkelanjutan yang menjaga kelestarian alam pegunungan Garut sekaligus meningkatkan kesejahteraan ekonomi para petani kopi lokal di pelosok desa."
      ]
    },
    history: {
      title: "Sejarah Singkat",
      content: [
        "Didirikan pada tahun 2018 di lereng Gunung Cikuray, Garut, Koperasi Desa Merah Putih lahir dari kegelisahan kelompok tani kecil yang kerap kali menghadapi ketidakstabilan harga jual ceri kopi di tingkat tengkulak. Berbekal komitmen bersama untuk meningkatkan posisi tawar petani, kami mengonsolidasikan lebih dari 250 petani kopi dari berbagai desa di wilayah Garut, seperti Cigedug, Cikajang, dan Cisurupan.",
        "Nama 'Merah Putih' dipilih sebagai simbol persatuan, martabat, dan ambisi luhur untuk membawa komoditas asli tanah air, khususnya dari pegunungan vulkanis Garut, berkibar di pasar internasional. Dalam kurun waktu singkat, melalui pelatihan berkelanjutan dan standarisasi proses pengolahan, koperasi ini berhasil merambah pasar ekspor internasional perdana pada tahun 2021 dan terus bertumbuh menjadi pilar utama industri kopi specialty di Jawa Barat."
      ]
    },
    visionMission: {
      visionTitle: "Visi Koperasi",
      visionContent: "Menjadi koperasi produsen kopi specialty terkemuka di Indonesia yang mandiri, berdaya saing global, berkelanjutan secara ekologis, dan berlandaskan kesejahteraan petani serta kemakmuran bersama pada tahun 2030.",
      missionTitle: "Misi Koperasi",
      missionContent: [
        "Meningkatkan kualitas budidaya kopi Arabika Garut melalui penerapan Good Agricultural Practices (GAP) dan edukasi berkelanjutan kepada petani.",
        "Mengembangkan fasilitas pengolahan kopi pasca-panen berstandar internasional demi menjamin konsistensi cita rasa specialty coffee terbaik.",
        "Membangun rantai pasok perdagangan yang adil (Fair Trade) untuk memotong rantai perantara yang merugikan para petani mitra.",
        "Memasarkan dan mempromosikan Arabika Garut secara agresif baik di pasar domestik premium maupun pasar ekspor internasional.",
        "Menerapkan prinsip keberlanjutan lingkungan hidup melalui reboisasi kawasan kebun dan konservasi tanah di lereng-lereng pegunungan Garut."
      ]
    },
    values: {
      title: "Nilai-Nilai Koperasi",
      items: [
        { name: "Integritas & Kejujuran", description: "Menjamin transparansi penuh dalam rantai pasok dari kebun hingga ke cangkir (farm-to-cup)." },
        { name: "Kemitraan yang Adil", description: "Menghargai kerja keras petani dengan harga beli ceri yang adil dan pembagian keuntungan yang transparan." },
        { name: "Kualitas Tanpa Kompromi", description: "Menjaga standarisasi mutu tertinggi untuk setiap gram biji kopi yang dipasarkan." },
        { name: "Keseimbangan Ekologis", description: "Berkomitmen penuh pada kelestarian lingkungan pegunungan vulkanis Garut." },
        { name: "Gotong Royong", description: "Mengutamakan sinergi, solidaritas, dan kekuatan kebersamaan dalam memecahkan masalah kesejahteraan anggota." }
      ]
    },
    organization: {
      title: "Struktur Organisasi",
      structure: [
        { role: "Ketua Koperasi", name: "H. Ahmad Fauzi, S.E." },
        { role: "Wakil Ketua Koperasi", name: "Dadan Ramdani" },
        { role: "Sekretaris", name: "Siti Rahmawati, S.Pd." },
        { role: "Bendahara", name: "Rian Hidayat" },
        { role: "Kepala Hubungan Petani & Agronomi", name: "Cecep Supriatna" },
        { role: "Kepala Riset & Pengolahan Pasca Panen", name: "Aria Wijaya, M.Sc." },
        { role: "Kepala Pemasaran Internasional & Kemitraan", name: "Taufik Nurdiana" }
      ]
    },
    businessFields: {
      title: "Bidang Usaha",
      fields: [
        { title: "Budi Daya & Pembibitan", desc: "Penyediaan bibit Arabika Garut unggul bersertifikat serta pendampingan pemupukan organik bagi seluruh petani mitra." },
        { title: "Pengolahan Pasca-Panen", desc: "Pengelolaan stasiun pencucian (washing station) terpadu dengan metode pengolahan Fully Washed, Honey, Natural, dan Anaerobic Fermentation." },
        { title: "Perdagangan & Ekspor", desc: "Distribusi biji kopi hijau (green beans) berkualitas specialty ke roastery premium nasional, distributor luar negeri, dan pembeli internasional." },
        { title: "Agrowisata Edukatif", desc: "Pengembangan kawasan wisata edukasi kebun kopi terintegrasi di Garut untuk mengedukasi wisatawan mengenai proses farm-to-cup." }
      ]
    },
    garutUniqueness: {
      title: "Keunggulan Arabika Garut",
      points: [
        { title: "Kondisi Geografis Vulkanis", desc: "Tumbuh subur di tanah vulkanis lereng Gunung Cikuray, Gunung Papandayan, dan Gunung Guntur yang kaya akan unsur hara organik melimpah." },
        { title: "Ketinggian Kebun Optimal", desc: "Ditanam pada ketinggian 1.200 hingga 1.600 meter di atas permukaan laut (mdpl), memberikan keasaman yang cerah dan pengembangan rasa yang kompleks." },
        { title: "Karakteristik Cita Rasa Khas", desc: "Memiliki profil rasa unik yang cenderung kompleks, dengan perpaduan rasa manis buah tropis (fruity/citrusy), aroma melati (jasmine), keasaman yang menyegarkan, serta bodi yang lembut dan bersih." }
      ]
    },
    processingSteps: {
      title: "Proses Pengolahan Kopi",
      steps: [
        { number: "01", title: "Panen Pilih (Red Cherry Picking)", desc: "Petani hanya memetik buah kopi yang sudah matang sempurna berwarna merah cerah secara manual menggunakan tangan." },
        { number: "02", title: "Penyortiran Rambang (Floating Sort)", desc: "Ceri kopi dimasukkan ke dalam air untuk memisahkan ceri berkualitas (tenggelam) dengan ceri yang cacat atau kosong (mengambang)." },
        { number: "03", title: "Pengupasan Kulit (Pulping)", desc: "Ceri pilihan dikupas kulit luarnya dengan mesin pulper mekanis berbantuan air bersih mengalir." },
        { number: "04", title: "Fermentasi & Pencucian", desc: "Biji kopi berlendir difermentasi secara presisi (12-36 jam) untuk melepas lapisan mukilase dan mengunci cita rasa asam buah alami." },
        { number: "05", title: "Pengeringan (Drying)", desc: "Biji kopi dikeringkan secara perlahan di atas bed jemur raised bed di bawah sinar matahari langsung hingga kadar air menyusut ke angka standar 11-12%." },
        { number: "06", title: "Pengupasan Kulit Tanduk (Hulling)", desc: "Biji kopi kering (gabah) dikupas untuk menghasilkan biji kopi hijau (green beans) siap sortir." },
        { number: "07", title: "Sortasi Akhir (Manual Hand Sorting)", desc: "Biji kopi dipilah manual untuk memisahkan biji cacat (defect) guna memastikan standar mutu Specialty Coffee Association (SCA)." }
      ]
    },
    qualityStandards: {
      title: "Standar Mutu Koperasi",
      standards: [
        "Kadar Air Konsisten: Mengikuti standar internasional 11% - 12.5% menggunakan moisture meter digital terkalibrasi.",
        "Skor Cupping Tinggi: Minimal skor cupping 83+ berdasarkan standar Specialty Coffee Association (SCA) yang diuji oleh Q-Grader bersertifikat internasional.",
        "Toleransi Cacat Sangat Rendah: Zero primary defects (cacat utama nihil) untuk kemasan ekspor, diklasifikasikan sebagai Grade 1 Double Picked.",
        "Kemasan Aman: Pengemasan menggunakan kantong GrainPro kedap udara sebelum dimasukkan ke dalam karung goni premium untuk menjaga kelembapan alami selama pengapalan."
      ]
    },
    farmerCommitment: {
      title: "Komitmen terhadap Petani Lokal",
      content: [
        "Koperasi Desa Merah Putih mengoperasikan model bisnis Fair Trade sesungguhnya. Kami membeli ceri kopi merah dari petani mitra dengan harga 20-30% di atas harga pasar tengkulak rata-rata.",
        "Selain itu, kami mengalokasikan 10% dari keuntungan bersih ekspor tahunan untuk dana cadangan sosial petani, asuransi kecelakaan kerja kebun, penyediaan alat pertanian pelindung diri, dan beasiswa pendidikan bagi putra-putri keluarga petani kopi di desa."
      ]
    },
    communityEmpowerment: {
      title: "Program Pemberdayaan Masyarakat",
      programs: [
        { name: "Akademi Tani Muda Garut", desc: "Pelatihan budidaya regeneratif dan pemanfaatan pupuk kompos organik bagi generasi muda desa agar tertarik melanjutkan usaha pertanian kopi secara modern." },
        { name: "Kelompok Pemberdayaan Ibu-Ibu Sortir", desc: "Pelibatan dan pemberian upah yang adil bagi kelompok perempuan kepala keluarga di sekitar desa untuk pengerjaan penyortiran biji kopi berkualitas tinggi di pabrik." },
        { name: "Reboisasi Hijau Gunung", desc: "Penanaman pohon penaung produktif seperti alpukat, suren, dan macadamia di sela-sela pohon kopi untuk mengembalikan keanekaragaman hayati pegunungan." }
      ]
    },
    targetMarket: {
      title: "Target Pasar Koperasi",
      national: [
        "Roastery premium di Jakarta, Bandung, Surabaya, Bali, dan Yogyakarta.",
        "Jaringan kedai specialty coffee modern skala menengah hingga besar.",
        "Konsumen penikmat kopi rumahan premium melalui saluran e-commerce."
      ],
      international: [
        "Importir dan distributor green beans specialty di Jepang, Korea Selatan, dan Singapura.",
        "Roastery independen berskala premium di wilayah Eropa (Jerman, Belanda, Swedia).",
        "Pembeli berskala besar (buyer) di Amerika Serikat dan Australia."
      ]
    },
    collaborationOpps: {
      title: "Peluang Kerja Sama",
      options: [
        { title: "Kontrak Pasokan Rutin (Roastery)", desc: "Pasokan biji kopi hijau (green beans) premium berskala konstan sepanjang tahun dengan sistem kontrak harga tetap yang menguntungkan." },
        { title: "Kemitraan Custom Processing", desc: "Pembeli dapat memesan profil rasa khusus melalui metode eksperimental pasca-panen tertentu (misal: Anaerobic Carbonic Maceration)." },
        { title: "Kerja Sama CSR & Investasi", desc: "Peluang bagi korporasi nasional dan lembaga donor internasional untuk berinvestasi pada fasilitas ramah lingkungan dan kesejahteraan petani kopi lereng gunung." }
      ]
    },
    closing: {
      title: "Penutup",
      text: "Koperasi Desa Merah Putih bukan sekadar bisnis perdagangan komoditas kopi. Kami adalah jembatan yang menghubungkan kerja keras, tetesan keringat, dan cinta dari para petani kecil di pegunungan sunyi Garut dengan cangkir-cangkir kopi hangat para pecinta specialty coffee di kota-kota besar metropolitan dunia. Melalui kopi, kita menjaga alam, memelihara martabat bangsa, dan menyebarkan kehangatan cita rasa nusantara. Mari berkolaborasi bersama kami."
    }
  }
};

export const coffeeProductData: CoffeeProduct = {
  name: "Arabica Garut Premium Coffee Beans",
  tagline: "Warisan Vulkanik Lereng Cikuray dalam Setiap Sesapan Premium",
  sizes: [
    { weight: "250 gram", priceEstimate: "Rp 85.000 - Rp 95.000", bestFor: "Penggunaan Pribadi & Hadiah Premium" },
    { weight: "500 gram", priceEstimate: "Rp 160.000 - Rp 175.000", bestFor: "Home Brewer & Kafe Kecil" },
    { weight: "1 kg", priceEstimate: "Rp 290.000 - Rp 315.000", bestFor: "Kafe Specialty, Roastery, & Penyedia Food & Beverage" }
  ],
  description: {
    flavorProfile: "Sweet citrusy orange, black tea elegance, brown sugar sweetness, with hints of red apple and floral jasmine undertones.",
    aroma: "Intense floral jasmine, caramel, and refreshing sweet lime aroma.",
    acidity: "Bright, crisp, and clean citrus-like acidity (resembling sweet orange).",
    body: "Medium, smooth, and velvety body that coats the mouth beautifully.",
    aftertaste: "Clean, sweet, lingering brown sugar sweetness with a tea-like finish.",
    process: "Semi-Washed (Wet Hulled) or Full-Washed Dry Fermented (Sesuai Preferensi)",
    origin: "Cigedug & Cikajang, Kabupaten Garut, Jawa Barat, Indonesia.",
    altitude: "1.300 - 1.550 mdpl (meter di atas permukaan laut).",
    brewingGuidelines: [
      {
        method: "V60 (Filter/Pour Over)",
        ratio: "1:15 (15g Kopi, 225ml Air)",
        grindSize: "Medium (seperti garam meja)",
        steps: [
          "Gunakan air bersuhu 90°C - 92°C.",
          "Basahi kertas filter dengan air panas terlebih dahulu untuk membuang rasa kertas, lalu buang air sisa bilasan.",
          "Masukkan bubuk kopi 15g ke dalam dripper V60.",
          "Lakukan pre-wetting (blooming) dengan menyiram 30ml air selama 30-40 detik.",
          "Tuangkan air secara perlahan dengan gerakan memutar dari dalam ke luar hingga mencapai total 225ml dalam waktu sekitar 2 menit 15 detik.",
          "Sajikan dan nikmati selagi hangat untuk mendapatkan aroma floral dan keasaman jeruk yang optimal."
        ]
      },
      {
        method: "Tubruk Tradisional Premium",
        ratio: "1:12 (10g Kopi, 120ml Air)",
        grindSize: "Medium-Fine (agak halus)",
        steps: [
          "Masukkan 10g bubuk kopi segar ke dalam cangkir keramik hangat.",
          "Seduh dengan air panas bersuhu 93°C - 95°C sebanyak 120ml.",
          "Biarkan terekstraksi selama 4 menit tanpa diaduk untuk proses pelepasan aroma alami.",
          "Setelah 4 menit, aduk bagian atas kopi secara perlahan hingga ampas kopi tenggelam sepenuhnya ke dasar gelas.",
          "Kopi Tubruk khas Garut berkelas specialty siap disesap perlahan."
        ]
      }
    ]
  },
  specifications: [
    { label: "Spesies", value: "100% Arabica (Typica, Lini S, Kartika)" },
    { label: "Ketinggian Kebun", value: "1.300 - 1.550 mdpl" },
    { label: "Asal Geografis", value: "Lereng Gunung Cikuray, Garut, Jawa Barat, Indonesia" },
    { label: "Tingkat Sangrai (Roast Level)", value: "Medium Roast (Optimized for filter & manual brew)" },
    { label: "Tingkat Defect (Cacat Biji)", value: "Kurang dari 2% (SCA Grade 1 Specialty Standard)" },
    { label: "Sertifikasi Mutu", value: "Indikasi Geografis (IG) Kopi Arabika Garut & Halal Indonesia" },
    { label: "Kadar Air", value: "11.8%" }
  ],
  sellingPoints: [
    "Origin Tunggal (Single Origin): 100% murni biji kopi Arabika Garut dari kebun binaan mandiri, tanpa dicampur.",
    "Biji Pilihan Petani: Dipanen secara manual hanya buah merah matang sempurna demi konsistensi rasa buah manis alami.",
    "Skor Cupping Tinggi: Konsisten mencatatkan skor cupping di atas 83.5 poin di bawah penilaian Q-Grader berlisensi.",
    "Ramah Lingkungan (Sustainable): Ditanam di bawah naungan pohon rimbun hutan alam (shade-grown coffee) untuk melestarikan satwa liar dan kontur tanah pegunungan Garut."
  ],
  competitorAdvantages: [
    "Jaminan Keadilan Petani (Direct Trade): Pembelian langsung ke petani binaan dengan harga premium memotong tengkulak, menjamin kontinuitas pasokan kualitas tinggi dan ketertelusuran (traceability) lengkap.",
    "Profil Rasa Unik Teh Hitam & Jeruk Manis: Kombinasi keasaman jeruk garut lokal asli dengan kemurnian teh hitam melati yang jarang dimiliki arabika wilayah lain di luar Jawa Barat.",
    "Pasca-Panen Terkontrol: Koperasi memiliki laboratorium QC dan mesin huller modern mandiri, menjamin minimnya defect akibat jamur atau kontaminasi kotoran selama penjemuran dibanding pengolahan tradisional perorangan."
  ]
};

export const imagePrompts: ImagePromptItem[] = [
  {
    id: "prompt-product-1",
    title: "Foto Produk Studio Kemasan Standing Pouch Premium",
    category: "product",
    promptEnglish: "Ultra realistic, commercial product photography, award winning, premium branding, luxury packaging, cinematic lighting, soft shadow, 8K, high detail, photorealistic, professional studio, minimalist composition, clean background, premium coffee brand, Indonesia specialty coffee, Arabica Garut. A single elegant matte black standing pouch with gold leaf and minimalist red branding text for 'Arabica Garut Premium Coffee', placed centrally on a dark polished oak rustic wooden surface, scattered single glossy roasted coffee beans and a fresh green coffee leaf with water droplets nearby, soft warm side lighting creating a luxury cozy atmosphere, studio backdrop in a moody dark charcoal color.",
    tags: ["Standing Pouch", "Matte Black", "Premium", "Wood Surface"],
    localImageKey: "kdkmp_coffee_mockup"
  },
  {
    id: "prompt-mockup-black",
    title: "Mockup Kemasan Black Standing Pouch",
    category: "mockup",
    promptEnglish: "Ultra realistic, commercial product photography, award winning, premium branding, luxury packaging, cinematic lighting, soft shadow, 8K, high detail, photorealistic, professional studio, minimalist composition, clean background, premium coffee brand, Indonesia specialty coffee, Arabica Garut. Matte black standing pouch coffee bag mockup with beautiful metallic gold foil typography, placed on a high-end luxury marble countertop, soft warm daylight streaming in from a window on the side, creating gentle realistic drop shadows, background is a blurred high-end minimal specialty coffee shop interior, cinematic masterpiece.",
    tags: ["Standing Pouch", "Matte Black", "Gold Foil", "Marble Table", "Coffee Shop Background"]
  },
  {
    id: "prompt-mockup-kraft",
    title: "Mockup Kemasan Kraft Paper Eco-friendly Pouch",
    category: "mockup",
    promptEnglish: "Ultra realistic, commercial product photography, award winning, premium branding, luxury packaging, cinematic lighting, soft shadow, 8K, high detail, photorealistic, professional studio, minimalist composition, clean background, premium coffee brand, Indonesia specialty coffee, Arabica Garut. Eco-friendly organic brown Kraft paper standing coffee pouch mockup, with a sleek minimalist black stamped logo design 'KDKMP Arabica Garut', sitting naturally on a raw linen fabric runner, surrounded by unroasted raw green coffee beans and a small vintage burlap bag, warm earthy natural soft-focus background, rustic and elegant organic aesthetic.",
    tags: ["Kraft Paper", "Eco-friendly", "Linen Fabric", "Raw Beans", "Rustic Organic"]
  },
  {
    id: "prompt-mockup-box",
    title: "Mockup Box Premium Kado Specialty Coffee",
    category: "mockup",
    promptEnglish: "Ultra realistic, commercial product photography, award winning, premium branding, luxury packaging, cinematic lighting, soft shadow, 8K, high detail, photorealistic, professional studio, minimalist composition, clean background, premium coffee brand, Indonesia specialty coffee, Arabica Garut. A luxury rigid cardboard gift box packaging in deep forest green color, embossed with an elegant gold foil pattern of Mount Cikuray and the text 'Koperasi Desa Merah Putih Arabica Garut Specialty Series', lying half-open on a minimalist concrete plinth, showing a neat premium coffee bag and a golden brewing spoon inside, high-end catalog rendering, dramatic volumetric lighting.",
    tags: ["Premium Gift Box", "Forest Green", "Gold Foil", "Concrete Plinth", "Specialty Series"]
  },
  {
    id: "prompt-mockup-bag-cup",
    title: "Mockup Coffee Bag and Coffee Cup Setup",
    category: "mockup",
    promptEnglish: "Ultra realistic, commercial product photography, award winning, premium branding, luxury packaging, cinematic lighting, soft shadow, 8K, high detail, photorealistic, professional studio, minimalist composition, clean background, premium coffee brand, Indonesia specialty coffee, Arabica Garut. A minimalist design mockup containing one premium coffee paper bag in clean charcoal black and a matching ceramic matte coffee cup filled with dark hot coffee showing light rising steam, sitting on a modern microcement table, minimalist Scandinavian background, artistic framing, beautiful contrast.",
    tags: ["Coffee Bag", "Ceramic Cup", "Steam", "Microcement", "Scandinavian Style"]
  },
  {
    id: "prompt-display-supermarket",
    title: "Display Produk di Rak Supermarket Premium",
    category: "mockup",
    promptEnglish: "Ultra realistic, commercial product photography, award winning, premium branding, luxury packaging, cinematic lighting, soft shadow, 8K, high detail, photorealistic, professional studio, minimalist composition, clean background, premium coffee brand, Indonesia specialty coffee, Arabica Garut. Row of matte black and kraft paper coffee bags of 'KDKMP Arabica Garut' perfectly arranged on high-end lit wooden shelves in a premium gourmet organic supermarket, warm warm spotlights on the packages, elegant price tags in gold, upscale retail grocery store background out of focus.",
    tags: ["Supermarket Shelf", "Wooden Shelves", "Retail Display", "Warm Spotlight"]
  },
  {
    id: "prompt-display-coffeeshop",
    title: "Display Kopi di Bar Coffee Shop Premium",
    category: "mockup",
    promptEnglish: "Ultra realistic, commercial product photography, award winning, premium branding, luxury packaging, cinematic lighting, soft shadow, 8K, high detail, photorealistic, professional studio, minimalist composition, clean background, premium coffee brand, Indonesia specialty coffee, Arabica Garut. Two premium black standing pouches of KDKMP specialty coffee sitting elegantly next to a high-end commercial espresso machine and glass containers of roasted coffee beans on a sleek concrete espresso bar, barista hands working with steam in the far blurred background, gorgeous morning ambient light, cinematic depth of field.",
    tags: ["Coffee Shop Bar", "Espresso Machine", "Concrete Bar", "Ambient Morning Light"]
  },
  {
    id: "prompt-display-exhibition",
    title: "Display Stand Pameran Internasional",
    category: "mockup",
    promptEnglish: "Ultra realistic, commercial product photography, award winning, premium branding, luxury packaging, cinematic lighting, soft shadow, 8K, high detail, photorealistic, professional studio, minimalist composition, clean background, premium coffee brand, Indonesia specialty coffee, Arabica Garut. A high-end exhibition booth display table for Indonesian Specialty Coffee at an international expo in Tokyo. A beautiful arrangement of Arabica Garut pouches, glass flasks showing different roast levels, a stylish wooden map of Indonesia, minimalist signage with the name 'Koperasi Desa Merah Putih - Indonesia', elegant warm spotlights, global business aesthetic.",
    tags: ["International Exhibition", "Expo Stand", "Tokyo Expo", "Indonesian Specialty Coffee"]
  },
  {
    id: "prompt-logo-concept",
    title: "Desain Logo KDKMP Flat Vector",
    category: "logo",
    promptEnglish: "Flat design vector logo, corporate, professional, minimalist, clean, simple, timeless, representing 'Koperasi Desa Merah Putih'. It features a stylized volcanic mountain shape of Garut combined elegantly with a green coffee leaf and two red and white geometric ribbon stripes at the base. High resolution, white clean background, perfect geometry, award-winning visual identity graphic design.",
    tags: ["Vector Logo", "Flat Design", "Minimalist Logo", "Mountain and Coffee Leaf"]
  }
];

export const articleData: ArticleData = {
  title: "Keberhasilan Koperasi Desa Merah Putih dalam Membawa Kopi Arabika Garut Menembus Pasar Internasional",
  author: "Taufik Nurdiana (Kepala Pemasaran Internasional & Kemitraan KDKMP)",
  date: "21 Juli 2026",
  readTime: "7 Menit Baca",
  sections: [
    {
      heading: "Eksotisme Lereng Vulkanis Garut dan Potensi Emas Hitam yang Tersembunyi",
      paragraphs: [
        "Kabupaten Garut, Jawa Barat, sejak masa kolonial Hindia Belanda telah diakui secara geomorfologis sebagai salah satu surga tersembunyi bagi budidaya tanaman kopi. Dikelilingi oleh jajaran gunung berapi aktif yang kokoh seperti Gunung Cikuray, Papandayan, Guntur, dan Talaga Bodas, wilayah ini diberkahi dengan tanah vulkanis andosol yang sangat subur. Tanah tipe ini kaya akan materi organik belahan perut bumi yang menyediakan nutrisi berlimpah secara alami bagi varietas tanaman Arabika premium.",
        "Ketinggian kebun kopi di wilayah Garut yang berkisar di rentang optimal 1.200 hingga 1.600 meter di atas permukaan laut (mdpl), disertai suhu sejuk konstan antara 16°C hingga 22°C, menciptakan iklim mikro yang ideal. Di lingkungan ini, buah kopi atau ceri matang dengan lambat, memungkinkan akumulasi glukosa dan senyawa asam kompleks berkembang secara sempurna di dalam bijinya. Hasilnya adalah biji kopi Arabika dengan profil rasa luar biasa: perpaduan keasaman buah jeruk (citrusy) yang segar, bodi yang velvety, serta aroma floral manis mirip bunga melati yang sulit ditandingi oleh daerah penghasil kopi lain.",
        "Namun, selama berpuluh-puluh tahun, potensi luar biasa dari 'emas hitam' pegunungan Garut ini seolah terkubur dalam bayang-bayang kegagalan struktural rantai pasok. Para petani kopi tradisional di Cigedug, Cikajang, dan Cisurupan kerap berjuang sendiri tanpa modal, pengetahuan pasca-panen, dan akses pasar yang mumpuni. Ceri kopi hasil keringat mereka dihargai sangat murah oleh jaringan tengkulak oportunis yang mempermainkan harga demi keuntungan pribadi. Di sinilah, sebuah gerakan kolektif berpayung Koperasi Desa Merah Putih (KDKMP) lahir untuk merevolusi nasib petani dan membawa kopi Garut naik kelas."
      ]
    },
    {
      heading: "Awal Berdirinya Koperasi Desa Merah Putih: Mengonsolidasi Mimpi Petani Kecil",
      paragraphs: [
        "Lahir di akhir tahun 2018 di sebuah gubuk kecil di Cigedug, Koperasi Desa Merah Putih didirikan atas inisiatif beberapa tokoh pemuda penggiat tani kopi lokal bersama puluhan petani sepuh yang lelah terjerat utang tengkulak. Semangat gotong royong dan tekad nasionalisme menjadi fondasi awal koperasi. Mereka menyadari bahwa satu-satunya cara untuk melawan hegemoni makelar kopi adalah dengan menyatukan kekuatan produksi, memperbaiki kualitas pasca-panen secara kolektif, dan membangun satu pintu pemasaran profesional.",
        "Konsolidasi tidaklah mudah pada awalnya. Banyak petani yang skeptis akibat pengalaman buruk dengan koperasi-koperasi papan nama di masa lalu. Namun, melalui pendekatan personal yang persuasif dari rumah ke rumah, serta komitmen transparansi keuangan dari para pendiri, kepercayaan lambat laun mulai terbangun. KDKMP memosisikan diri bukan sebagai entitas bisnis luar, melainkan milik bersama di mana setiap petani anggota adalah pemilik suara tertinggi.",
        "Dari yang awalnya hanya beranggotakan 25 orang, koperasi ini bertransformasi pesat. Para petani diajarkan tentang pentingnya memetik hanya buah kopi yang telah berwarna merah penuh (panen pilih), serta didorong untuk menghentikan kebiasaan petik asalan (petik hijau-kuning-merah) yang merusak kualitas rasa. Konsolidasi ini berhasil menciptakan volume pasokan yang stabil dan kualitas ceri yang seragam sebagai modal awal menembus pasar premium nasional."
      ]
    },
    {
      heading: "Edukasi Agronomi Regeneratif dan Standarisasi Pengolahan Pasca-Panen",
      paragraphs: [
        "Langkah revolusioner berikutnya yang dilakukan KDKMP adalah meningkatkan kualitas produk melalui standarisasi budidaya dan pengolahan pasca-panen. Di bawah bimbingan tim agronomi koperasi yang berkolaborasi dengan akademisi pertanian, para petani beralih ke metode agronomi regeneratif. Mereka meninggalkan penggunaan pestisida kimia sintetis dan beralih memanfaatkan pupuk kompos organik berbahan dasar limbah kulit ceri kopi dan kotoran ternak lokal.",
        "Selain ramah lingkungan, metode shade-grown coffee (menanam kopi di bawah pohon penaung) diterapkan kembali secara ketat. Pohon suren, alpukat, dan macadamia ditanam berdampingan dengan pohon kopi untuk mencegah erosi tanah di lereng curam, sekaligus memberikan pendapatan tambahan bagi petani di luar musim panen kopi.",
        "Di sektor pasca-panen, koperasi menginvestasikan sisa hasil usaha untuk membangun stasiun pencucian (washing station) modern mandiri. KDKMP mengadopsi standarisasi ketat yang diakui secara global. Metode pengolahan diperluas secara ilmiah, meliputi Fully Washed Double Fermentation yang menghasilkan rasa bersih (clean cup), metode Honey dengan rasa manis karamel pekat, serta Natural Dry Process yang menonjolkan keasaman buah-buahan tropis yang intens. Koperasi juga merekrut Q-Grader (analis cita rasa kopi bersertifikat internasional) internal untuk mengevaluasi setiap batch produksi guna memastikan skor cupping berada di rentang Specialty Coffee (83+ poin)."
      ]
    },
    {
      heading: "Sertifikasi Internasional dan Pintu Gerbang Pasar Ekspor",
      paragraphs: [
        "Kualitas yang prima tanpa adanya bukti legalitas formal seringkali menyulitkan penetrasi pasar dunia. Memahami hal tersebut, Koperasi Desa Merah Putih secara proaktif mengurus sertifikasi Indikasi Geografis (IG) Kopi Arabika Garut bekerjasama dengan pemerintah daerah dan Kementerian Hukum dan HAM RI. Sertifikasi IG ini merupakan pengakuan hukum internasional terhadap keunikan cita rasa komoditas kopi spesifik geografis Garut yang tidak bisa diklaim oleh wilayah lain.",
        "Tidak berhenti di situ, demi menyasar pasar yang mengedepankan tanggung jawab sosial, koperasi meraih sertifikasi Fair Trade (Perdagangan Adil) dan sertifikasi organik untuk sebagian wilayah kebun anggota. Sertifikasi ini memberikan sinyal kuat kepada para importir luar negeri bahwa KDKMP mengelola komoditas mereka tanpa mengeksploitasi buruh tani, ramah lingkungan, dan membagi hasil keuntungan secara adil ke tingkat akar rumput.",
        "Transformasi ke era digital juga dimaksimalkan dengan baik. KDKMP membangun identitas digital premium melalui situs web multi-bahasa, pembuatan katalog digital interaktif (digital product catalog), serta optimasi akun LinkedIn profesional untuk menjaring buyer korporat global. Kehadiran digital yang bersih, modern, dan profesional memberikan kesan bahwa KDKMP bukanlah koperasi desa biasa yang tertinggal teknologi, melainkan mitra ekspor specialty coffee yang andal dan modern."
      ]
    },
    {
      heading: "Lompatan Besar: Ekspor Perdana Menembus Jepang dan Eropa",
      paragraphs: [
        "Buah manis dari konsistensi mutu dan branding digital ini akhirnya tiba pada pertengahan tahun 2021. Di tengah hantaman tantangan logistik global, Koperasi Desa Merah Putih berhasil melakukan pengapalan ekspor perdana satu kontainer penuh green beans Arabika Garut senilai USD 120.000 (sekitar Rp 1,8 Miliar) langsung ke salah satu distributor specialty coffee ternama di Tokyo, Jepang.",
        "Keberhasilan ekspor perdana tersebut menjadi pemantik rasa percaya diri luar biasa bagi seluruh jajaran pengurus dan petani anggota koperasi. Cita rasa unik Arabika Garut yang dipasarkan KDKMP mendapatkan sambutan sangat positif dari para pelaku industri kopi di Tokyo karena memiliki aroma jasmine yang eksotis dan clean aftertaste. Distributor Jepang tersebut kemudian menandatangani kontrak pasokan rutin jangka panjang berdurasi tiga tahun.",
        "Kesuksesan di Jepang segera menyebar ke negara lain. Pada akhir tahun 2023, melalui keikutsertaan aktif dalam pameran internasional Specialty Coffee Association of Europe (SCAE) di Jerman, KDKMP berhasil mengamankan kontrak ekspor baru dengan roastery premium asal Hamburg, Jerman dan Amsterdam, Belanda. Keberhasilan menembus pasar Eropa yang terkenal memiliki regulasi ketat terhadap ambang batas pestisida membuktikan bahwa kopi Arabika Garut dari KDKMP memiliki kualitas kebersihan dan keamanan pangan kelas dunia."
      ]
    },
    {
      heading: "Dampak Finansial Nyata dan Kisah Sukses Pak Dudung di Kaki Cikuray",
      paragraphs: [
        "Keberhasilan KDKMP melompat ke pasar global membawa dampak perubahan ekonomi yang sangat signifikan di desa-desa lereng Gunung Cikuray. Keuntungan ekspor dialirkan kembali ke petani dalam bentuk harga beli ceri merah yang stabil dan tinggi—mencapai 30% di atas harga rata-rata pasar lokal yang biasa ditawarkan tengkulak tradisional.",
        "Salah satu potret nyata kesuksesan ini dialami oleh Pak Dudung (54 tahun), seorang bapak dengan tiga anak yang menggarap lahan kebun seluas satu hektar di Cigedug. Sebelum bergabung dengan koperasi, Pak Dudung hidup dalam kecemasan konstan setiap kali musim panen tiba. Ia kerap dipaksa menjual kopi gabahnya dengan sistem ijon berharga sangat rendah demi mencukupi kebutuhan sekolah anak-anaknya.",
        "Sejak bergabung menjadi anggota KDKMP pada tahun 2019, Pak Dudung mendapatkan bantuan pelatihan agronomi gratis untuk memperbaiki kualitas tanaman kopinya. Pada musim panen raya tahun lalu, seluruh hasil panen ceri merah Pak Dudung dibeli tunai oleh koperasi dengan harga premium standar ekspor. Dari pendapatan tersebut, untuk pertama kalinya dalam hidupnya, Pak Dudung tidak hanya mampu melunasi seluruh utang masa lalunya, tetapi juga berhasil merenovasi rumah bambunya menjadi rumah tembok permanen yang kokoh, serta membiayai kuliah putri pertamanya di salah satu universitas negeri di Bandung. Kisah Pak Dudung hanyalah satu dari ratusan kisah sukses petani Garut yang berhasil merdeka secara finansial bersama koperasi."
      ]
    },
    {
      heading: "Menatap Masa Depan: Hilirisasi, Agrowisata, dan Ambisi Karbon Netral",
      paragraphs: [
        "Tidak ingin lekas puas dengan pencapaian yang ada, Koperasi Desa Merah Putih telah merancang serangkaian strategi jangka panjang untuk memperkokoh eksistensinya. Fokus utama saat ini adalah percepatan program hilirisasi produk. Selain mengekspor green beans mentah, koperasi mulai memproduksi kopi sangrai (roasted beans) dalam kemasan premium ritel untuk dipasarkan langsung ke jaringan supermarket mewah domestik dan ekspor ritel e-commerce global.",
        "KDKMP juga tengah mengembangkan konsep kawasan agrowisata kopi edukatif terintegrasi di Garut. Proyek ini akan mengundang para pecinta kopi, roaster, dan wisatawan internasional untuk tinggal di desa, memetik ceri bersama petani, belajar proses roasting tradisional, hingga menyeduh kopi di tengah sejuknya kebun lereng gunung. Hal ini dipercaya akan melipatgandakan pendapatan ekonomi sirkular masyarakat desa setempat.",
        "Terakhir, sejalan dengan isu perubahan iklim global, koperasi memiliki komitmen besar untuk bertransformasi menjadi produsen kopi karbon netral pertama di Jawa Barat. Melalui program Agroforestry Berkelanjutan, setiap pohon kopi yang ditanam dipetakan secara digital untuk menghitung kapasitas penyerapan karbonnya. Hasil perhitungan karbon ini ditargetkan dapat dijual ke pasar karbon internasional sebagai insentif tambahan bagi para petani yang menjaga hutan tetap hijau.",
        "Kesimpulannya, Koperasi Desa Merah Putih telah membuktikan bahwa dengan persatuan gotong royong, standarisasi mutu tanpa kompromi, dan sentuhan personal branding yang premium, produk asli pedesaan Indonesia mampu meruntuhkan skeptisisme global dan bersinar terang di pasar ekspor internasional. KDKMP bukan sekadar tentang segelas kopi, ia adalah kisah perjuangan martabat petani Indonesia di panggung dunia."
      ]
    }
  ],
  keyQuotes: [
    "Kopi Arabika Garut memiliki anugerah tanah vulkanis yang unik. Tugas koperasi adalah merawat anugerah itu dengan standardisasi mutu internasional dan mendistribusikan kemakmurannya kembali ke tangan para petani.",
    "Sebelum ada koperasi, kami memetik buah kopi dengan air mata kecemasan harga murah. Kini, kami memetik ceri merah dengan senyuman kepastian kesejahteraan. (Pak Dudung, Petani Kopi Cigedug, Garut)"
  ]
};

export const logoElements: LogoElement[] = [
  { name: "Gunung Garut (Cikuray)", meaning: "Melambangkan asal geografis vulkanik tempat kopi tumbuh subur, sekaligus simbol keteguhan, cita-cita tinggi, serta kejayaan koperasi untuk terus berdiri tegak di panggung nasional dan global.", iconName: "Mountain" },
  { name: "Daun Kopi", meaning: "Menggambarkan kesuburan, kehidupan agraris yang berkelanjutan, kemurnian proses alamwi, serta komitmen ekologis terhadap alam pegunungan Garut.", iconName: "Leaf" },
  { name: "Biji Kopi Specialty", meaning: "Melambangkan fokus bisnis utama koperasi dalam menghasilkan biji kopi kualitas Specialty berstandar dunia yang menjadi sumber kemakmuran anggotanya.", iconName: "Coffee" },
  { name: "Butir Padi", meaning: "Melambangkan kemakmuran, kecukupan pangan, ketahanan ekonomi pedesaan, serta filosofi padi yang 'kian berisi kian merunduk' sebagai dasar kerendahan hati koperasi.", iconName: "Wheat" },
  { name: "Jabat Tangan", meaning: "Simbol gotong royong, kemitraan yang adil (fair trade), keterbukaan kerja sama (kolaborasi), serta persatuan yang erat antarpengurus dan petani anggota.", iconName: "Handshake" },
  { name: "Bentuk Lingkaran Koperasi", meaning: "Melambangkan kebulatan tekad, persatuan yang tidak terputus, perlindungan anggota, serta sistem asas kekeluargaan koperasi yang kokoh.", iconName: "CircleDot" },
  { name: "Warna Merah Putih", meaning: "Mencerminkan identitas nasionalisme Indonesia, keberanian melangkah ke pasar dunia (merah), serta ketulusan komitmen gotong royong petani lokal (putih).", iconName: "Flag" },
  { name: "Warna Hijau Alami", meaning: "Melambangkan kelestarian alam pegunungan, pertanian berkelanjutan (sustainability), kesegaran, serta kesehatan.", iconName: "Palette" },
  { name: "Warna Emas", meaning: "Melambangkan kualitas premium (specialty), kejayaan ekonomi, kemakmuran petani, serta prestasi internasional.", iconName: "Sparkles" }
];

export const brandIdentityData: BrandIdentityData = {
  tagline: "Sinergi Merah Putih, Mahakarya Arabika Garut",
  brandStory: [
    "Di bawah kabut pagi lereng Gunung Cikuray, ratusan petani Koperasi Desa Merah Putih melangkah menyusuri jalan setapak kebun kopi. Tangan-tangan kokoh mereka merawat setiap batang kopi Arabika dengan penuh kasih, memetik hanya ceri merah matang terbaik yang telah menyerap kekayaan mineral tanah vulkanis Garut yang subur.",
    "Setiap butir biji kopi KDKMP adalah sebuah cerita tentang persatuan bangsa Indonesia, keadilan bagi para petani kecil yang mandiri, serta komitmen tanpa syarat terhadap mutu specialty coffee dunia. Melalui cangkir kopi Anda, kami menghadirkan tidak hanya kesegaran jeruk tropis yang cerah dan keanggunan aroma melati, tetapi juga secercah harapan baru, renovasi rumah-rumah keluarga petani, dan pendidikan yang layak bagi putra-putri di kaki gunung.",
    "Kami memadukan ketulusan gotong royong tanah air dengan profesionalisme berstandar internasional. Inilah persembahan luhur Koperasi Desa Merah Putih: Mahakarya Arabika Garut untuk Dunia."
  ],
  brandPersonality: [
    { trait: "Patriotik & Bangga", desc: "Membawa nama bangsa Indonesia (Merah Putih) dengan bangga, mempromosikan nasionalisme positif dan identitas budaya nusantara lewat kopi." },
    { trait: "Premium & Elegan", desc: "Menjunjung tinggi keindahan estetika visual, kualitas produk specialty tanpa kompromi, dan layanan profesional kelas dunia." },
    { trait: "Earthy & Berkelanjutan (Natural)", desc: "Dekat dengan tanah, menghormati alam vulkanis, berkomitmen melestarikan hutan, dan merawat ekosistem hidup para petani." },
    { trait: "Kolaboratif (Gotong Royong)", desc: "Ramah, bersahabat, terbuka terhadap kemitraan global, serta meyakini bahwa kesuksesan sejati harus dirayakan bersama secara adil." }
  ],
  brandVoice: [
    { style: "Profesional & Berwibawa", rule: "Gunakan diksi tata bahasa Indonesia baku yang sopan, meyakinkan, dan berbobot dalam setiap dokumen resmi dan presentasi B2B ekspor." },
    { style: "Hangat & Humanis", rule: "Tampilkan cerita perjuangan nyata di balik kebun, gunakan kata-kata yang menyentuh hati (storytelling) saat berkomunikasi dengan konsumen retail pecinta kopi." },
    { style: "Inspiratif & Visioner", rule: "Tekankan visi masa depan mengenai pelestarian alam, reboisasi, dan pemberdayaan generasi muda pertanian kopi modern." }
  ],
  brandValues: [
    { title: "Fair Trade (Keadilan Sosial)", desc: "Menghargai jerih payah petani dengan kepastian harga tinggi, bonus ekspor, serta dukungan beasiswa pendidikan anak petani." },
    { title: "Eco-Sustainability (Konservasi Hijau)", desc: "Praktik budidaya ramah lingkungan di bawah pohon penaung guna melestarikan tanah vulkanik pegunungan Garut." },
    { title: "Traceability (Ketertelusuran Lengkap)", desc: "Setiap bungkus kopi kami dapat dilacak asal usul kebun petaninya secara transparan untuk kepuasan pembeli premium." }
  ],
  colors: [
    { name: "Merah Merah Putih", hex: "#D22B2B", rgb: "rgb(210, 43, 43)", meaning: "Melambangkan keberanian bertarung di pasar internasional, gairah (passion) para petani, serta nasionalisme Indonesia.", usage: "Warna aksen utama, logo, kemasan edisi khusus, tombol call-to-action utama." },
    { name: "Hijau Vulkanik", hex: "#1B4D3E", rgb: "rgb(27, 77, 62)", meaning: "Mencerminkan suburnya lereng gunung vulkanis Garut, komitmen ramah lingkungan, kelestarian ekologis, serta keteduhan.", usage: "Warna latar belakang primer, warna teks dominan untuk elemen editorial premium." },
    { name: "Emas Specialty", hex: "#D4AF37", rgb: "rgb(212, 175, 55)", meaning: "Melambangkan mutu kopi specialty kelas dunia, kejayaan ekonomi bersama, kemakmuran petani, serta sentuhan mewah.", usage: "Warna garis logo, border ornamen kemasan, sertifikasi produk premium, serta highlight teks penting." },
    { name: "Putih Gotong Royong", hex: "#FFFFFF", rgb: "rgb(255, 255, 255)", meaning: "Menggambarkan kesucian niat gotong royong, keadilan rantai pasok yang bersih, serta keterbukaan kemitraan.", usage: "Warna latar belakang kertas, warna teks kontras pada latar belakang hijau atau merah." },
    { name: "Hitam Premium", hex: "#111111", rgb: "rgb(17, 17, 17)", meaning: "Menampilkan profesionalisme modern, kemewahan (luxury packaging), keseriusan mutu, serta kepekatan cairan kopi seduh espresso.", usage: "Warna kemasan standing pouch premium, teks body utama, serta elemen branding modern." }
  ],
  fonts: [
    { type: "Display & Headings", name: "Playfair Display (Serif)", usage: "Digunakan untuk judul utama company profile, cover dokumen, headline poster promosi, serta nama merek kemasan untuk menonjolkan keanggunan, nilai sejarah, dan kemewahan editorial." },
    { type: "Body Text & UI Elements", name: "Plus Jakarta Sans (Sans-Serif)", usage: "Digunakan untuk teks deskripsi panjang, struktur menu aplikasi, keterangan spesifikasi produk, dan salinan brosur guna memastikan keterbacaan yang sangat tinggi, bersih, dan modern di semua perangkat." },
    { type: "Technical & Metadata", name: "JetBrains Mono (Monospace)", usage: "Digunakan untuk menulis parameter teknis kopi (ketinggian, kadar air, skor cupping), panduan koordinat geografis kebun, serta prompt gambar AI guna menampilkan presisi riset dan kesan modern yang terstruktur." }
  ],
  logoGuidelines: [
    { rule: "Ruang Kosong Minimal (Clear Space)", desc: "Logo harus selalu dilingkupi oleh ruang kosong minimal selebar 25% dari diameter lingkaran logo untuk menjaga kejelasan keterbacaan visual logo." },
    { rule: "Larangan Distorsi", desc: "Dilarang menarik, memampatkan, memiringkan, atau mengubah proporsi aspek rasio logo KDKMP dalam bentuk dan media apa pun." },
    { rule: "Kontras Warna", desc: "Gunakan versi logo berwarna Emas/Putih pada latar belakang gelap (seperti Hitam Premium atau Hijau Vulkanik). Gunakan logo versi berwarna penuh pada latar belakang terang (seperti Putih atau Cream)." }
  ],
  packagingConcept: [
    { title: "Matte Black Specialty Series (250g & 500g)", desc: "Kemasan menggunakan flat bottom standing pouch berbahan aluminium foil tebal di bagian dalam dengan lapisan luar matte black (hitam doff) yang mewah. Dilengkapi zipper kedap udara dan One-Way Degassing Valve (katup udara satu arah) kualitas tinggi untuk membuang gas CO2 hasil roasting tanpa membiarkan oksigen masuk merusak kesegaran biji kopi. Sentuhan akhir berupa hot stamping foil berwarna emas metalik untuk outline logo gunung dan tulisan merek." },
    { title: "Eco Kraft Paper Series (1kg B2B Cafe)", desc: "Kemasan ramah lingkungan menggunakan kertas kraft cokelat tebal bertekstur alami dengan laminasi bio-plastik ramah lingkungan di bagian dalam. Memiliki desain cap stempel hitam minimalis bergaya vintage artisan. Sangat cocok dipajang di rak kedai kopi modern yang mengusung tema eco-green, organik, dan dekat dengan alam." }
  ]
};

export const mediaPromotionKit: MediaPromotionKit = {
  brochureContent: {
    cover: "KOPERASI DESA MERAH PUTIH: MAHAKARYA ARABIKA GARUT UNTUK DUNIA. Sebuah lembaran persembahan kopi specialty premium dari lereng vulkanis Gunung Cikuray, Jawa Barat, Indonesia.",
    insideLeft: "Kisah Kemitraan Adil (Fair Trade): Kami percaya kopi terbaik lahir dari kebahagiaan para petani kami. Melalui program pembagian bonus ekspor langsung, asuransi kesehatan kebun, dan beasiswa pendidikan anak petani, KDKMP berkomitmen mengangkat derajat hidup 250+ keluarga petani lokal di Cigedug dan Cikajang. Setiap cangkir kopi yang Anda seduh adalah investasi nyata bagi masa depan generasi muda pedesaan Jawa Barat.",
    insideRight: "Proses Mutu Specialty Terkendali: Kami merawat kualitas dari hulu ke hilir. Hanya ceri merah matang penuh yang dipetik tangan, disortir rambang secara ketat, difermentasi terkontrol di stasiun pencucian modern, dan dikeringkan perlahan di atas raised bed. Hasilnya? Biji kopi specialty dengan skor cupping rata-rata 83+ bersertifikasi resmi Indikasi Geografis (IG). Rasakan eksotisme aroma jasmine, keasaman segar jeruk manis, serta lingering brown sugar aftertaste yang bersih.",
    back: "HUBUNGI KAMI UNTUK KERJA SAMA B2B & EKSPOR. Kantor Pusat & Stasiun Pengolahan: Jl. Raya Cikajang No. 45, Cigedug, Garut, Jawa Barat, Indonesia. Email: partnership@kdkmpcoffee.co.id. Telepon/WhatsApp: +62 812-3456-7890. Website resmi: www.kdkmpcoffee.co.id"
  },
  flyerContent: {
    headline: "Bawa Cita Rasa Bintang Lima ke Kafe & Rumah Anda",
    body: "Arabica Garut Premium Coffee Beans dari Koperasi Desa Merah Putih adalah kombinasi sempurna antara kesuburan tanah vulkanis lereng Cikuray dan dedikasi gotong royong petani binaan lokal. Tersedia dalam kemasan 250g, 500g, dan 1kg. Sangat cocok untuk filter pour-over V60 maupun seduhan tubruk tradisional mewah.",
    cta: "Dapatkan Sampel Gratis untuk Kafe Anda! Hubungi WhatsApp Kemitraan KDKMP di +62 812-3456-7890 sekarang."
  },
  bannerContent: {
    sizeLandscape: "Spanduk Banner Gathering / Pameran Ukuran 3x1 Meter",
    text: "SELAMAT DATANG DI BOOTH KOPERASI DESA MERAH PUTIH (KDKMP) - SPECIALTY COFFEE ARABICA GARUT INDONESIA. 'Sinergi Merah Putih, Mahakarya Arabika Garut untuk Panggung Dunia'. Nikmati free cupping session hari ini!"
  },
  posterContent: {
    headline: "Kopi yang Membangun Desa, Mengharumkan Bangsa",
    subheadline: "100% Arabica Specialty Single Origin Garut",
    body: "Setiap bungkus kopi Koperasi Desa Merah Putih berkontribusi langsung pada kesejahteraan ekonomi petani kecil di lereng Gunung Cikuray, pelestarian lingkungan gunung dari bahaya longsor melalui reboisasi agroforestri, serta mengharumkan nama specialty coffee Indonesia di kancah ekspor internasional."
  },
  xBannerContent: {
    title: "ARABICA GARUT SPECIALTY COFFEE",
    bullets: [
      "✓ 100% Single Origin Arabica Garut",
      "✓ Ketinggian Optimal 1.300 - 1.550 mdpl",
      "✓ Skor Cupping SCA Konsisten 83.5+",
      "✓ Sertifikasi Indikasi Geografis (IG)",
      "✓ Kemitraan Adil (Fair Trade Direct Trade)",
      "✓ Kemasan Premium dengan Valve & Zipper"
    ],
    footer: "Koperasi Desa Merah Putih - Sinergi Merah Putih, Kopi Juara Dunia"
  },
  socialMediaPosts: [
    {
      id: 1,
      platform: "instagram",
      topic: "Edukasi Panen Pilih (Ceri Merah)",
      visualIdea: "Foto tangan petani yang keriput namun kokoh sedang memegang satu dompol buah kopi Arabika yang semuanya berwarna merah menyala cerah di lereng Cikuray. Pencahayaan matahari pagi yang hangat menembus sela-sela daun hijau berembun.",
      caption: "☕️ Merah Sempurna, Rasa Sempurna! \n\nTahu kah Anda bahwa rahasia cita rasa manis buah alami (sweetness) pada kopi Arabika Garut kami dimulai dari kedisiplinan panen pilih? \n\nPetani mitra Koperasi Desa Merah Putih dilatih secara khusus untuk hanya memetik ceri kopi yang sudah berwarna merah ranum sempurna. Kami mengabaikan ceri hijau atau kuning demi menghindari rasa sepat (astringent) dan pahit kasar di cangkir Anda.\n\nSatu petikan yang penuh kesabaran, menghasilkan mahakarya rasa untuk dunia. Nikmati kesegaran murni Arabica Garut Premium hari ini! \n\n#KoperasiDesaMerahPutih #ArabikaGarut #SpecialtyCoffee #PanenPilih #GarutCoffee #FarmToCup #IndonesianCoffee"
    },
    {
      id: 2,
      platform: "instagram",
      topic: "Profil Rasa Khas (Flavor Notes)",
      visualIdea: "Infografis estetis berlatar belakang hitam matte minimalis, menampilkan ilustrasi buah jeruk manis yang teriris, secangkir teh hitam melati yang mengepul hangat, dan butiran gula cokelat alami. Di tengahnya terdapat kemasan KDKMP 250g.",
      caption: "🍊 Seperti Menyesap Teh Jeruk Manis Hangat di Tengah Pegunungan!\n\nArabica Garut Premium memiliki keunikan rasa yang sangat kompleks dan elegan. Ketika Anda menyeduhnya dengan metode filter (V60), bersiaplah menyambut:\n\n✨ Sweet Citrusy Orange – Keasaman menyegarkan khas jeruk garut asli.\n✨ Black Tea Elegance – Karakter seduhan teh hitam melati yang anggun.\n✨ Brown Sugar Sweetness – Rasa manis karamel alami yang tertinggal lama di lidah (lingering aftertaste).\n\nTanpa tambahan perasa buatan apa pun, rasa ini murni terlahir dari mineral tanah vulkanis lereng Gunung Cikuray setinggi 1.500 mdpl. Buktikan sendiri sensasinya!\n\n#FlavorNotes #V60Filter #ManualBrewing #KDKMPCoffee #ArabicaGarutSpecialty #SpecialtyCoffeeAssociation"
    },
    {
      id: 3,
      platform: "instagram",
      topic: "Kemitraan Adil (Fair Trade Story)",
      visualIdea: "Foto candid Pak Dudung, salah satu petani mitra koperasi, tersenyum lebar dengan latar belakang rumah bata permanen barunya dan kebun kopi hijau yang rimbun.",
      caption: "🌾 Lebih dari Sekadar Secangkir Kopi: Tentang Martabat & Senyuman Petani.\n\nDi balik rasa premium Arabica Garut KDKMP, terdapat komitmen perdagangan adil (Fair Trade) yang nyata. Kami membeli ceri kopi langsung dari petani mitra kami dengan harga 20-30% di atas rata-rata pasar tengkulak.\n\nKami percaya bahwa kopi berkualitas tinggi hanya bisa lahir dari petani yang bahagia dan sejahtera. Sebagian hasil penjualan kopi Anda disalurkan kembali dalam bentuk dana asuransi kesehatan kebun, bantuan pupuk kompos gratis, dan beasiswa sekolah anak-anak desa kaki gunung.\n\nMari ikut ambil bagian dalam gerakan gotong royong memerdekakan petani kopi Indonesia. Hormat kami untuk kerja keras mereka! 💪🇮🇩\n\n#FairTradeCoffee #DirectTrade #KesejahteraanPetani #GotongRoyong #PetaniKopiGarut #KDKMPPeduli"
    },
    {
      id: 4,
      platform: "instagram",
      topic: "Sertifikasi Indikasi Geografis (IG)",
      visualIdea: "Foto close-up sertifikat Indikasi Geografis resmi dari Kemenkumham RI dengan latar belakang biji kopi hijau (green beans) tersortir rapi dan sebuah cangkir cupping keramik putih.",
      caption: "📜 Resmi Dilindungi: Kopi Arabika Garut Asli KDKMP!\n\nKopi Arabika Garut kini telah mengantongi sertifikat Indikasi Geografis (IG) resmi. Ini berarti cita rasa unik buah citrus dan aroma melati pada kopi kami diakui secara hukum internasional sebagai karakteristik khas yang HANYA bisa dihasilkan oleh tanah vulkanis Kabupaten Garut, Jawa Barat.\n\nSertifikasi IG ini menjamin keaslian 100% produk KDKMP dari pemalsuan produk, menjaga keluhuran nama kopi Garut di mata importir internasional, dan memastikan Anda selalu mendapatkan produk premium yang autentik.\n\nSeduh yang asli, dukung yang murni!\n\n#IndikasiGeografis #ArabikaGarutAsli #LegalitasMutu #KDKMPIdentity #KopiJawaBarut #SCAI #SpecialtyJava"
    },
    {
      id: 5,
      platform: "instagram",
      topic: "Metode Pasca Panen (Fully Washed)",
      visualIdea: "Foto aerial stasiun pengolahan basah (wet mill) koperasi yang sangat bersih. Air jernih pegunungan mengalir di selokan pencucian beton, membasahi biji kopi gabah kuning pucat.",
      caption: "💧 Kemurnian Rasa Terjaga Melalui Proses 'Fully Washed'.\n\nUntuk Anda pecinta kopi dengan karakter rasa yang bersih, tajam, dan menyegarkan (clean cup), varian Fully Washed Dry Fermentation dari KDKMP adalah jawabannya.\n\nSetelah dikupas kulitnya, biji kopi difermentasi kering selama 12-24 jam menggunakan ragi alami untuk memecah lendir buah secara perlahan, dicuci bersih dengan air pegunungan steril, lalu dikeringkan perlahan di atas raised bed.\n\nProses yang bersih ini menghasilkan keasaman jeruk citrus yang bersinar terang dan menonjolkan aroma melati yang elegan saat diseduh. Bersih prosesnya, spektakuler rasanya!\n\n#FullyWashedCoffee #ProcessingMethods #CleanCup #ArabicaGarutPremium #KDKMPProcess"
    },
    {
      id: 6,
      platform: "instagram",
      topic: "Edukasi Brewing Pour Over V60",
      visualIdea: "Video pendek estetis atau korsel foto yang memperlihatkan tetesan kopi kopi perlahan menetes dari dripper keramik V60 ke server kaca. Di latar belakang terdapat uap air panas tipis diterangi sinar matahari sore.",
      caption: "⏱️ Panduan Menyeduh Pour Over V60 Sempurna di Rumah!\n\nIngin mendapatkan aroma floral melati dan rasa buah jeruk manis yang optimal dari Arabica Garut Premium kami? Ikuti resep brewing rumahan ini:\n\n1️⃣ Rasio: 1:15 (15 gram kopi gilingan MEDIUM, diseduh dengan 225ml air).\n2️⃣ Suhu Air: Stabilkan di angka 91°C.\n3️⃣ Blooming: Basahi kopi dengan 30ml air panas selama 40 detik untuk membuang gas CO2 (proses degassing).\n4️⃣ Tuangan Kedua: Tuang melingkar perlahan dari tengah hingga mencapai 120ml.\n5️⃣ Tuangan Akhir: Tuang kembali hingga mencapai 225ml. Selesaikan tuangan dalam waktu maksimal 2 menit 15 detik.\n\nSajikan di cangkir keramik favorit Anda, hirup aromanya, seduh perlahan, rasakan perbedaannya!\n\n#V60Recipe #BrewingGuide #HomeBaristaIndonesia #ManualBrewingIndo #KDKMPRecipe #PourOverCoffee"
    },
    {
      id: 7,
      platform: "instagram",
      topic: "Sustainable Agroforestry (Go Green)",
      visualIdea: "Foto sudut rendah (low-angle) kebun kopi rindang di bawah naungan pohon alpukat besar yang berbuah lebat, menembus cahaya matahari berseri di lereng bukit Garut.",
      caption: "🌳 Menjaga Hutan, Menghidupkan Kopi.\n\nPohon kopi kami tidak ditanam di lahan gundul yang panas. KDKMP berkomitmen menerapkan sistem Agroforestry (wanatani) di mana tanaman kopi tumbuh subur di bawah naungan pohon penaung pelindung seperti alpukat, suren, dan macadamia.\n\nPohon-pohon pelindung ini berfungsi ganda:\n☘️ Mencegah bahaya erosi tanah di lereng bukit terjal Garut.\n☘️ Melindungi habitat burung dan mikroba tanah hutan.\n☘️ Memberikan pendapatan tambahan buah alpukat bagi petani.\n\nKopi yang nikmat tidak boleh merusak bumi tempat ia berpijak. Mari seduh kopi ramah lingkungan bersama kami!\n\n#AgroforestryCoffee #SaveCikuray #KopiRamahLingkungan #SustainableAgriculture #GoGreenIndonesia #KDKMPEcology"
    },
    {
      id: 8,
      platform: "instagram",
      topic: "Pilihan Ukuran Kemasan (Product Range)",
      visualIdea: "Foto berjajar tiga kemasan standing pouch KDKMP hitam premium berjejer rapi berurutan ukuran dari terkecil 250g, 500g, hingga karung kraft 1kg. Background kayu gelap elegan.",
      caption: "⚖️ Sesuai Kebutuhan Anda: 250g, 500g, & 1kg!\n\nKami mengerti setiap pecinta kopi memiliki tingkat konsumsi yang berbeda-beda. KDKMP Arabica Garut Specialty kini hadir dalam tiga varian ukuran:\n\n🎁 250 gram: Pas untuk konsumsi pribadi mingguan, menjaga kopi tetap fresh maksimal di rumah.\n🏡 500 gram: Ideal untuk home brewer aktif, persediaan kantor, atau hadiah hantaran premium.\n☕️ 1 kilogram: Pilihan paling hemat dan tepat untuk pemilik kafe specialty, bisnis roastery, dan pengusaha F&B.\n\nSemua ukuran dilengkapi dengan katup udara satu arah (degassing valve) premium untuk menjamin kualitas kesegaran rasa biji kopi tetap prima hingga ke tangan Anda.\n\nYang mana pilihan ukuran favorit Anda hari ini? Tulis di kolom komentar! 👇\n\n#ProductRange #KDKMPPackaging #PremiumCoffeeBeans #SupplierKopiKafe #RoasteryBandung #JakartaCoffee"
    },
    {
      id: 9,
      platform: "instagram",
      topic: "Behind The Scenes (Tim Penguji Mutu Q-Grader)",
      visualIdea: "Foto seorang wanita muda anggota tim QC koperasi menggunakan sendok cupping khusus sedang menyeruput kopi dengan kencang (slurping) dari mangkuk cupping kaca, fokus matanya tajam, memegang clipboard penilaian SCA.",
      caption: "🕵️‍♀️ Lolos Uji Sensorik Ketat: Hanya Skor 83+ yang Dirilis!\n\nSebelum satu kemasan kopi KDKMP sampai di tangan Anda atau dimuat ke kontainer ekspor, biji kopi tersebut harus melewati meja pengujian rasa (cupping room) yang dingin dan presisi.\n\nTim Quality Control kami yang dipimpin oleh Q-Grader bersertifikasi internasional Specialty Coffee Association (SCA) melakukan blind cupping untuk menilai konsistensi:\n✔️ Keasaman (Acidity)\n✔️ Rasa Manis (Sweetness)\n✔️ Kebersihan Rasa (Clean Cup)\n✔️ Keseimbangan Rasa (Balance)\n\nJika skor cupping berada di bawah 83 poin, batch tersebut tidak akan pernah masuk ke kategori Premium Specialty Series kami. Mutu tanpa kompromi adalah janji suci kami kepada Anda.\n\n#QualityControl #QGraderIndonesia #CuppingCoffee #SCAScores #SpecialtyQuality #KDKMPStandards"
    },
    {
      id: 10,
      platform: "instagram",
      topic: "Edisi Ekspor Kebanggaan Indonesia",
      visualIdea: "Foto estetis tumpukan karung goni bertuliskan sablon 'KDKMP Arabica Garut Specialty Coffee - Produce of Indonesia' yang sedang dimuat ke dalam kontainer ekspor besi berwarna biru tua, berlatar langit sore pelabuhan Tanjung Priok yang jingga.",
      caption: "🚢 Dari Garut untuk Dunia: Mengharumkan Merah Putih di Panggung Kopi Internasional!\n\nDengan rasa bangga dan syukur, kontainer ekspor berisi puluhan ton biji kopi Arabika Garut Koperasi Desa Merah Putih kembali berlayar melintasi samudra menuju pelabuhan Hamburg, Jerman dan Tokyo, Jepang.\n\nKerja keras para petani kecil di lereng bukit sunyi Garut kini dihargai, diseduh, dan dipuji oleh para penikmat specialty coffee di kedai-kedai kopi elit metropolitan Tokyo dan Hamburg.\n\nIni bukan sekadar transaksi ekspor perdagangan komoditas biasa. Ini adalah bukti nyata bahwa koperasi desa berbasis gotong royong mampu menembus batas global dan membawa produk kebanggaan nasional berkibar tinggi di pasar internasional.\n\nTerima kasih atas dukungan Anda semua yang terus menyeduh perjuangan kami! Sinergi Merah Putih, Mahakarya Arabika Garut untuk Dunia! 🇲🇨✈️🌍\n\n#IndonesiaEkspor #KDKMPInternational #KopiIndonesiaMendunia #GarutToTheWorld #BanggaBuatanIndonesia #B2BCoffeePartnership"
    }
  ],
  marketplace: {
    shopeeTokopedia: {
      title: "Kopi Arabica Garut Premium Specialty Beans 250g - Koperasi Desa Merah Putih",
      description: "SELAMAT DATANG DI TOKO RESMI KOPERASI DESA MERAH PUTIH (KDKMP)\n\n100% ORIGINAL SINGLE ORIGIN ARABICA SPECIALTY COFFEE BEANS DIRECTLY FROM PETANI BINAAN GARUT\n\nNikmati mahakarya cita rasa kopi Arabika Garut berkelas specialty hasil budidaya gotong royong petani lokal lereng Gunung Cikuray, Garut, Jawa Barat. Ditumbuhkan pada ketinggian optimal 1.300 - 1.550 mdpl di atas tanah vulkanik yang subur, menghasilkan karakter rasa buah tropis yang menyegarkan dan keanggunan aroma bunga melati murni.\n\nSPESIFIKASI PRODUK:\n• Jenis Kopi: 100% Arabika Single Origin\n• Varietas: Typica, Lini S, Kartika\n• Asal Daerah: Cigedug & Cikajang, Garut, Jawa Barat\n• Ketinggian: 1.300 - 1.550 mdpl\n• Proses Pasca-Panen: Fully Washed Dry Fermentation\n• Profil Sangrai (Roast Level): Medium Roast\n• Cupping Notes: Bright Citrusy Orange, Black Tea Elegance, Brown Sugar Sweetness, Clean lingering finish\n• Skor Cupping: SCA 83.5+ (Specialty Grade)\n• Kadar Air: 11.8%\n• Sertifikasi: Indikasi Geografis (IG) Kopi Arabika Garut & Halal Indonesia\n• Kemasan: Matte Black Standing Pouch premium dengan One-Way Air Degassing Valve (katup udara satu arah) + Zipper kedap udara untuk menjaga kesegaran maksimal biji kopi.\n\nPILIHAN BENTUK:\n- BIJI KOPI: Untuk Anda yang memiliki grinder sendiri di rumah/kafe (rekomendasi agar kesegaran bertahan paling lama).\n- GILING KASAR (Coarse): Untuk French Press, Cold Brew, Cupping.\n- GILING MEDIUM: Untuk Pour Over V60, Kalita Wave, Aeropress, Syphon.\n- GILING HALUS (Fine): Untuk Tubruk Tradisional, Espresso, Mokapot.\n\nCATATAN PENGIRIMAN:\nHarap mencantumkan pilihan gilingan (BIJI / KASAR / MEDIUM / HALUS) pada kolom catatan pembeli saat checkout. Jika tidak ada catatan, produk akan dikirimkan dalam bentuk BIJI KOPI utuh.\n\nMENGAPA MEMILIH KOPI KDKMP?\n1. Keadilan Petani (Fair Trade): Pembelian langsung tanpa tengkulak memastikan para petani mendapatkan upah adil di atas harga pasar rata-rata.\n2. Jaminan Mutu Tinggi: Diproses dengan standar laboratorium QC koperasi yang dikepalai Q-Grader bersertifikat internasional.\n3. Ramah Lingkungan (Sustainable): Ditanam di bawah naungan pohon agroforestri guna melestarikan tanah dan satwa liar pegunungan Garut.\n\nSeduh Kopi Juara, Sejahterakan Petani Desa! Pesan sekarang sebelum kehabisan batch panen minggu ini!",
      tags: ["#KopiArabikaGarut", "#ArabikaGarutSpecialty", "#KopiKDKMP", "#KoperasiDesaMerahPutih", "#BijiKopiGarut", "#SingleOriginGarut", "#SpecialtyCoffeeBeans", "#KopiV60Filter"]
    },
    googleMyBusiness: {
      title: "Koperasi Desa Merah Putih (KDKMP) - Specialty Arabica Garut Coffee",
      description: "Pusat produsen, pengolahan pasca-panen, dan eksportir resmi biji kopi Arabika Specialty Single Origin asal pegunungan lereng Gunung Cikuray, Kabupaten Garut, Jawa Barat. Kami berkomitmen menyuplai biji kopi hijau (green beans) dan kopi sangrai (roasted beans) berkualitas tinggi berstandar Specialty Coffee Association (SCA) kepada roastery premium nasional, jaringan kafe modern, importir mancanegara, serta pecinta kopi ritel dengan prinsip perdagangan adil (Fair Trade) dan pertanian berkelanjutan (Agroforestry).",
      posts: [
        {
          topic: "Pembaruan Penawaran Kemitraan B2B",
          content: "Kabar gembira bagi pemilik bisnis kafe and roastery! Koperasi Desa Merah Putih (KDKMP) kini membuka slot kontrak pasokan rutin jangka panjang untuk Green Beans Arabica Garut Specialty Batch Panen Terbaru Tahun Ini. Kami menjamin konsistensi kadar air 11-12%, nihil cacat utama (zero primary defects), skor cupping konsisten 83.5+, serta dokumentasi ketertelusuran lengkap (traceability) langsung dari petani mitra kami di lereng Gunung Cikuray. Kunjungi kantor operasional kami di Jl. Raya Cikajang No. 45, Garut atau hubungi Tim Kemitraan kami untuk mendapatkan Free Sample Pack 100g hari ini!"
        },
        {
          topic: "Kegiatan Edukasi Akademi Tani Muda",
          content: "Sebagai bagian dari pilar komitmen pemberdayaan masyarakat desa, Koperasi Desa Merah Putih (KDKMP) baru saja sukses menggelar lokakarya 'Akademi Tani Muda Garut' angkatan ke-4 di Cigedug. Kegiatan ini diikuti oleh 45 pemuda desa lereng Cikuray untuk mempelajari budidaya kopi regeneratif berbasis pupuk organik kompos dan digitalisasi pelacakan pohon penaung agroforestri. Melalui edukasi berkelanjutan ini, kami optimistis regenerasi petani kopi modern yang peduli lingkungan dan menguasai standar mutu dunia akan terwujud nyata di tanah Garut!"
        }
      ]
    }
  }
};
