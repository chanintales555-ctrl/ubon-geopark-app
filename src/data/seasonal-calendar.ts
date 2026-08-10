import { LocalizedString } from '../types';

export interface SeasonalStatus {
  currentMonth: number;
  seasonName: LocalizedString;
  statusType: 'optimal' | 'transitional' | 'submerged';
  waterLevelStatus: LocalizedString;
  recommendation: LocalizedString;
  accessibleHighlightsCount: number;
}

export function getCurrentSeasonalStatus(monthIndex: number = new Date().getMonth() + 1): SeasonalStatus {
  // เดือน 11, 12, 1, 2, 3, 4, 5: ฤดูแล้ง (น้ำลด เห็นสามพันโบก 100%)
  if (monthIndex >= 11 || monthIndex <= 5) {
    return {
      currentMonth: monthIndex,
      seasonName: {
        th: 'ฤดูแล้ง (ฤดูทองแห่งการสำรวจ)',
        en: 'Dry Season (Golden Exploration Period)'
      },
      statusType: 'optimal',
      waterLevelStatus: {
        th: 'ระดับน้ำแม่น้ำโขงต่ำ - โผล่พ้นแก่งหิน 100%',
        en: 'Mekong water level low - 100% rock formations accessible'
      },
      recommendation: {
        th: 'เหมาะที่สุดสำหรับการชมสามพันโบก, ปากบ้อง, ผาสามหมื่นรู และล่องเรือแม่น้ำโขง',
        en: 'Ideal time for visiting Sam Phan Bok, Pak Bong, 30,000 Holes, and Mekong boat tours.'
      },
      accessibleHighlightsCount: 46
    };
  } 
  // เดือน 6 - 8: ปลายฝน ต้นหลาก
  else if (monthIndex >= 6 && monthIndex <= 8) {
    return {
      currentMonth: monthIndex,
      seasonName: {
        th: 'ฤดูฝน (ชมน้ำตกและแม่น้ำสองสี)',
        en: 'Monsoon Season (Waterfalls & Confluence)'
      },
      statusType: 'transitional',
      waterLevelStatus: {
        th: 'ระดับน้ำเริ่มสูงขึ้น - สามพันโบกเริ่มจมบางส่วน',
        en: 'Water level rising - Sam Phan Bok partially submerged'
      },
      recommendation: {
        th: 'แนะนำเที่ยวชมน้ำตกแสงจันทร์, แม่น้ำสองสี, ผาแต้ม และวัดเรืองแสง',
        en: 'Recommended to visit Saeng Chan Waterfall, Two-Color River, Pha Taem, and Glowing Temple.'
      },
      accessibleHighlightsCount: 32
    };
  }
  // เดือน 9 - 10: น้ำหลากสูงสุด
  else {
    return {
      currentMonth: monthIndex,
      seasonName: {
        th: 'ฤดูน้ำหลาก (ชมทุ่งดอกไม้และทะเลหมอก)',
        en: 'Peak Flood Season (Sea of Mist & Wildflowers)'
      },
      statusType: 'submerged',
      waterLevelStatus: {
        th: 'ระดับน้ำโขงสูง - สามพันโบกจมใต้น้ำสมบูรณ์',
        en: 'High Mekong water level - Sam Phan Bok submerged'
      },
      recommendation: {
        th: 'สามพันโบกจมใต้น้ำ แนะนำเที่ยวผาชนะไดชมทะเลหมอก, ผาแต้ม และทุ่งดอกไม้สร้อยสวรรค์',
        en: 'Sam Phan Bok submerged. Recommended: Pha Chana Dai mist, Pha Taem, & Soi Sawan wildflower bloom.'
      },
      accessibleHighlightsCount: 28
    };
  }
}
