export interface CompanyProfile {
  title: string;
  subtitle: string;
  sections: {
    about: {
      title: string;
      content: string[];
    };
    history: {
      title: string;
      content: string[];
    };
    visionMission: {
      visionTitle: string;
      visionContent: string;
      missionTitle: string;
      missionContent: string[];
    };
    values: {
      title: string;
      items: { name: string; description: string }[];
    };
    organization: {
      title: string;
      structure: { role: string; name: string }[];
    };
    businessFields: {
      title: string;
      fields: { title: string; desc: string }[];
    };
    garutUniqueness: {
      title: string;
      points: { title: string; desc: string }[];
    };
    processingSteps: {
      title: string;
      steps: { number: string; title: string; desc: string }[];
    };
    qualityStandards: {
      title: string;
      standards: string[];
    };
    farmerCommitment: {
      title: string;
      content: string[];
    };
    communityEmpowerment: {
      title: string;
      programs: { name: string; desc: string }[];
    };
    targetMarket: {
      title: string;
      national: string[];
      international: string[];
    };
    collaborationOpps: {
      title: string;
      options: { title: string; desc: string }[];
    };
    closing: {
      title: string;
      text: string;
    };
  };
}

export interface CoffeeProduct {
  name: string;
  tagline: string;
  sizes: { weight: string; priceEstimate: string; bestFor: string }[];
  description: {
    flavorProfile: string;
    aroma: string;
    acidity: string;
    body: string;
    aftertaste: string;
    process: string;
    origin: string;
    altitude: string;
    brewingGuidelines: { method: string; ratio: string; grindSize: string; steps: string[] }[];
  };
  specifications: { label: string; value: string }[];
  sellingPoints: string[];
  competitorAdvantages: string[];
}

export interface ImagePromptItem {
  id: string;
  title: string;
  category: "product" | "mockup" | "logo";
  promptEnglish: string;
  tags: string[];
  localImageKey?: string;
}

export interface ArticleData {
  title: string;
  author: string;
  date: string;
  readTime: string;
  sections: { heading: string; paragraphs: string[] }[];
  keyQuotes: string[];
}

export interface LogoElement {
  name: string;
  meaning: string;
  iconName: string;
}

export interface BrandColor {
  name: string;
  hex: string;
  rgb: string;
  meaning: string;
  usage: string;
}

export interface BrandIdentityData {
  tagline: string;
  brandStory: string[];
  brandPersonality: { trait: string; desc: string }[];
  brandVoice: { style: string; rule: string }[];
  brandValues: { title: string; desc: string }[];
  colors: BrandColor[];
  fonts: { type: string; name: string; usage: string }[];
  logoGuidelines: { rule: string; desc: string }[];
  packagingConcept: { title: string; desc: string }[];
}

export interface SocialMediaPost {
  id: number;
  platform: "instagram" | "facebook" | "linkedin" | "tiktok";
  topic: string;
  caption: string;
  visualIdea: string;
}

export interface MarketplaceKit {
  shopeeTokopedia: {
    title: string;
    description: string;
    tags: string[];
  };
  googleMyBusiness: {
    title: string;
    description: string;
    posts: { topic: string; content: string }[];
  };
}

export interface MediaPromotionKit {
  brochureContent: {
    cover: string;
    insideLeft: string;
    insideRight: string;
    back: string;
  };
  flyerContent: {
    headline: string;
    body: string;
    cta: string;
  };
  bannerContent: {
    sizeLandscape: string;
    text: string;
  };
  posterContent: {
    headline: string;
    subheadline: string;
    body: string;
  };
  xBannerContent: {
    title: string;
    bullets: string[];
    footer: string;
  };
  socialMediaPosts: SocialMediaPost[];
  marketplace: MarketplaceKit;
}
