export type Language = 'th' | 'en';

export type Amphoe = 'pho-sai' | 'sri-mueang-mai' | 'khong-chiam' | 'sirindhorn';

export type GeositeCategory = 'geomorphology' | 'fossil' | 'archaeology' | 'nature' | 'culture';

export interface LocalizedString {
  th: string;
  en: string;
}

export interface Geosite {
  id: string;
  name: LocalizedString;
  amphoe: Amphoe;
  category: GeositeCategory;
  coords: {
    lat: number;
    lng: number;
  };
  elevation?: number;
  image: string;
  imageCredit: string;
  description: LocalizedString;
  geologicalAge?: LocalizedString;
  rockFormation?: LocalizedString;
  bestSeason: {
    startMonth: number; // 1-12
    endMonth: number;   // 1-12
    note: LocalizedString;
  };
  difficulty: 'easy' | 'moderate' | 'hard';
  estimatedTime: LocalizedString;
  facilities: string[];
  warnings: LocalizedString[];
  audioGuideUrl?: string;
  audioDuration?: string;
  isHighlight: boolean;
  isConservationGeosite?: boolean;
  geologicalValueRating?: 'high' | 'medium' | 'low';
  developmentPotential?: 'high' | 'medium' | 'low';
  passportStamp: {
    icon: string;
    stampTitle: LocalizedString;
    checkInRadiusMeters: number;
  };
}

export interface Geoproduct {
  id: string;
  name: LocalizedString;
  category: 'textile' | 'food' | 'handicraft' | 'service';
  amphoe: Amphoe;
  villageName: LocalizedString;
  image: string;
  description: LocalizedString;
  priceRange?: string;
  contactPhone?: string;
  contactLine?: string;
  contactFacebook?: string;
}

export interface UserStamp {
  geositeId: string;
  timestamp: string; // ISO String
  lat: number;
  lng: number;
  isSimulated?: boolean;
}

export interface ExplorerLevelInfo {
  level: number;
  title: LocalizedString;
  minStamps: number;
  maxStamps: number;
  badgeIcon: string;
}

export interface ImageCreditInfo {
  filename: string;
  locationName: string;
  source: string;
  license: string;
  author: string;
  url: string;
}
