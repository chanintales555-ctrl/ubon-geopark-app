import { Geosite } from '../types';

export const GEOSITES: Geosite[] = [
  {
    id: 'GS-PH-02',
    name: {
      th: "สามพันโบก",
      en: "Sam Phan Bok Pothole"
    },
    amphoe: 'pho-sai',
    category: 'geomorphology',
    coords: { lat: 15.7951, lng: 105.3958 },
    elevation: 120,
    image: './assets/geosites/sam-phan-bok.jpg',
    imageCredit: "Ubon Geopark Official (https://ubongeopark.org/geopark/wp-content/uploads/2026/07/LINE_ALBUM_สามพันโบก_260703_1.jpg)",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nบริเวณบ้านสองคอน ต.โพธิ์ไทร อ.โพธิ์ไทร จ.อุบลราชธานี พิกัด (WGS84) 0565800 E 1748200 N ระวางอำเภอโพธิ์ไทร (6040 I) ขอบเขตยาวประมาณ 3 กิโลเมตร\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nแก่งหินทรายกลางลำน้ำโขงที่ยิ่งใหญ่ มีหลุมกุมภลักษณ์ (Pothole) หรือที่ชาวบ้านเรียกว่า \"โบก\" มากกว่า 3,000 หลุม เกิดจากการกัดเซาะของกระแสน้ำวนในฤดูน้ำหลาก ถือเป็นแกรนด์แคนยอนเมืองไทยที่มีกุมภลักษณ์มากที่สุดในอาเซียน\n\n🪨 ลักษณะทางธรณีวิทยา:\nเป็นลานหินทรายในหมวดหินภูพาน (Phu Phan Formation) อายุประมาณ 110 ล้านปี มีโครงสร้างกุมภลักษณ์หลากหลายรูปทรง ทั้งทรงกลม ทรงรี รูปหัวใจ และรูปสัตว์ต่างๆ ขนาดตั้งแต่ 10 เซนติเมตร ถึงมากกว่า 10 เมตร\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nควรมีการจัดทำป้ายสื่อความหมายทางธรณีวิทยา ปรับปรุงเส้นทางเดินชมโบกอย่างปลอดภัย ป้องกันการขีดเขียนบนหิน และส่งเสริมเรือท่องเที่ยวท้องถิ่น",
      en: "A vast sandstone reef in the Mekong River featuring over 3,000 potholes formed by water erosion (eddy currents). It is dubbed the Grand Canyon of Thailand."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียสตอนต้น (~110 ล้านปี)",
      en: "ยุคครีเทเชียสตอนต้น (~110 ล้านปี)"
    },
    rockFormation: {
      th: "หินทรายและหินทรายปนกรวด - หมวดหินภูพาน (Phu Phan Formation)",
      en: "หินทรายและหินทรายปนกรวด - หมวดหินภูพาน (Phu Phan Formation)"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "06:00 - 18:00 (แนะนำช่วงฤดูแล้ง พ.ย. - พ.ค.)",
        en: "06:00 - 18:00 (แนะนำช่วงฤดูแล้ง พ.ย. - พ.ค.)"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["ลานจอดรถ","ร้านอาหาร","ห้องน้ำ","บริการนำเที่ยว"],
    warnings: [{"th":"ห้ามขีดเขียนบนหิน ห้ามทิ้งขยะ และระมัดระวังอันตรายจากการลื่นไถล","en":"ห้ามขีดเขียนบนหิน ห้ามทิ้งขยะ และระมัดระวังอันตรายจากการลื่นไถล"}],
    isHighlight: true,
    isConservationGeosite: true,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ สามพันโบก", en: "Sam Phan Bok Pothole Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-PH-03',
    name: {
      th: "สามหมื่นรู",
      en: "Sam Muen Ru Pothole"
    },
    amphoe: 'pho-sai',
    category: 'geomorphology',
    coords: { lat: 15.8034, lng: 105.3901 },
    elevation: 120,
    image: './assets/geosites/sam-muen-ru.jpg',
    imageCredit: "Ubon Geopark Official (https://ubongeopark.org/geopark/wp-content/uploads/2026/07/03-scaled.jpg)",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nอยู่ในพื้นที่บ้านสองคอน ต.โพธิ์ไทร อ.โพธิ์ไทร จ.อุบลราชธานี พิกัด (WGS84) 0565200 E 1749100 N ระวางอำเภอโพธิ์ไทร (6040 I) ขอบเขตยาวประมาณ 500 เมตร\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nหน้าผาหินทรายที่มีรูพรุนจำนวนมหาศาลตลอดแนวหน้าผา เกิดจากการกัดเซาะของกระแสน้ำโขงและการผุพังทางกายภาพ ถือเป็นหน้าผาที่มีรูมากที่สุดในอาเซียน\n\n🪨 ลักษณะทางธรณีวิทยา:\nชั้นหินทรายหมวดหินภูพาน (Phu Phan Formation) อายุประมาณ 110 ล้านปี มีลักษณะเป็นรูพรุนตามแนวชั้นหิน เกิดจากกระบวนการกัดกร่อนของน้ำโขงร่วมกับการคายความร้อนและการแตกผุพังทางกายภาพ\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nควรจัดจุดชมวิวจากเรือท่องเที่ยว และติดป้ายสื่อความหมายกระบวนการเกิดรูหินทราย",
      en: "A sandstone cliff face with tens of thousands of holes and small potholes created by the Mekong River's erosion, representing the largest concentration of such features in ASEAN."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียส (Cretaceous)",
      en: "ยุคครีเทเชียส (Cretaceous)"
    },
    rockFormation: {
      th: "หินทราย (Sandstone) - หมวดหินภูพาน (Phu Phan Formation)",
      en: "หินทราย (Sandstone) - หมวดหินภูพาน (Phu Phan Formation)"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "เปิดตลอดเวลา (ชมได้จากบนเรือ)",
        en: "เปิดตลอดเวลา (ชมได้จากบนเรือ)"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["ไม่มี"],
    warnings: [{"th":"ชมทัศนียภาพจากบนเรือ ห้ามปีนป่ายหน้าผา","en":"ชมทัศนียภาพจากบนเรือ ห้ามปีนป่ายหน้าผา"}],
    isHighlight: true,
    isConservationGeosite: true,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ สามหมื่นรู", en: "Sam Muen Ru Pothole Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-PH-04',
    name: {
      th: "ปากบ้อง",
      en: "Pak Bong"
    },
    amphoe: 'pho-sai',
    category: 'geomorphology',
    coords: { lat: 15.808, lng: 105.385 },
    elevation: 120,
    image: './assets/geosites/pak-bong.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nอยู่ในพื้นที่บ้านสำโรง ต.สำโรง อ.โพธิ์ไทร จ.อุบลราชธานี พิกัด (WGS84) 0558200 E 1741500 N ระวางอำเภอโพธิ์ไทร (6040 I) ขอบเขตยาวประมาณ 1,000 เมตร\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nจุดที่แม่น้ำโขงแคบที่สุดตลอดความยาวกว่า 4,000 กิโลเมตร โดยมีความกว้างเพียงประมาณ 56 เมตร ขนาบด้วยหน้าผาหินทรายสูงชันทั้งสองฝั่ง ทำให้กระแสน้ำบริเวณนี้ไหลเชี่ยวและลึกมาก\n\n🪨 ลักษณะทางธรณีวิทยา:\nเกิดจากการร่องน้ำโขงกัดเซาะตัดผ่านหน้าผาหินทรายหมวดหินภูพานตามแนวรอยแยก (Joints) ทำให้เกิดร่องน้ำแคบและลึกมาก (Narrow gorge)\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nจัดตั้งป้ายเตือนความปลอดภัยเนื่องจากกระแสน้ำเชี่ยว และจัดจุดชมวิวริมหน้าผาอย่างปลอดภัย",
      en: "The narrowest bottleneck of the entire Mekong River, measuring only about 56 meters wide. The river is flanked by steep sandstone cliffs, creating strong and deep currents."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียสตอนต้น",
      en: "ยุคครีเทเชียสตอนต้น"
    },
    rockFormation: {
      th: "หินทราย (Sandstone) - หมวดหินภูพาน (Phu Phan Formation)",
      en: "หินทราย (Sandstone) - หมวดหินภูพาน (Phu Phan Formation)"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "เปิดตลอดเวลา",
        en: "เปิดตลอดเวลา"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["ไม่มี"],
    warnings: [{"th":"สวมเสื้อชูชีพตลอดการล่องเรือเนื่องจากกระแสน้ำเชี่ยว","en":"สวมเสื้อชูชีพตลอดการล่องเรือเนื่องจากกระแสน้ำเชี่ยว"}],
    isHighlight: true,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ ปากบ้อง", en: "Pak Bong Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-PH-05',
    name: {
      th: "ผาชัน",
      en: "Pha Chan Cliff"
    },
    amphoe: 'pho-sai',
    category: 'geomorphology',
    coords: { lat: 15.815, lng: 105.38 },
    elevation: 120,
    image: './assets/geosites/pha-chan.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nบริเวณบ้านผาชัน ต.สำโรง อ.โพธิ์ไทร จ.อุบลราชธานี พิกัด (WGS84) 0556868 E 1740497 N ระวางอำเภอโพธิ์ไทร (6040 I) ขอบเขตยาวประมาณ 1,200 เมตร\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nหน้าผาหินทรายสูงชันริมแม่น้ำโขง มีความยาวหลายกิโลเมตร มองเห็นทิวทัศน์แม่น้ำโขงและฝั่งประเทศลาวได้อย่างตระการตา\n\n🪨 ลักษณะทางธรณีวิทยา:\nประกอบด้วยหินทรายหมวดหินภูพาน อายุประมาณ 110 ล้านปี แสดงแนวการวางตัวของชั้นหินชัดเจน (Bedding) dip angle 18 องศา / dip direction 240 องศา มีแนวรอยแตกและเพิงผาหินทรายขนาดใหญ่\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nควรพัฒนาเส้นทางท่องเที่ยวทางเรือและทางเดินชมวิวริมหน้าผา พร้อมป้ายสื่อความหมายทางธรณีวิทยา",
      en: "A towering, steep sandstone cliff along the Mekong River offering spectacular views and displaying clear, layered sedimentary rock formations."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียส (Cretaceous)",
      en: "ยุคครีเทเชียส (Cretaceous)"
    },
    rockFormation: {
      th: "หินทราย (Sandstone) - หมวดหินเสาขัว และ หมวดหินภูพาน",
      en: "หินทราย (Sandstone) - หมวดหินเสาขัว และ หมวดหินภูพาน"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "08:00 - 17:00",
        en: "08:00 - 17:00"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["ลานจอดรถ","จุดชมวิว"],
    warnings: [{"th":"ห้ามปีนป่ายออกนอกเขตปลอดภัย และไม่ทิ้งขยะ","en":"ห้ามปีนป่ายออกนอกเขตปลอดภัย และไม่ทิ้งขยะ"}],
    isHighlight: false,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ ผาชัน", en: "Pha Chan Cliff Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-PH-17',
    name: {
      th: "ผาสิลาเลข",
      en: "Pha Sila Lek Cliff"
    },
    amphoe: 'pho-sai',
    category: 'geomorphology',
    coords: { lat: 15.799, lng: 105.392 },
    elevation: 120,
    image: './assets/geosites/sam-phan-bok.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nบริเวณริมฝั่งแม่น้ำโขง บ้านผาชัน ต.สำโรง อ.โพธิ์ไทร จ.อุบลราชธานี\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nแผ่นหินทรายริมแม่น้ำโขงที่มีการจารึกตัวเลขและรอยสลักโบราณ บอกเล่าเรื่องราวประวัติศาสตร์และการบันทึกระดับน้ำโขงในอดีต\n\n🪨 ลักษณะทางธรณีวิทยา:\nชั้นหินทรายหมวดหินภูพาน อายุประมาณ 110 ล้านปี มีความคงทนต่อการผุพังกัดกร่อนสูง แสดงร่องรอยการสลักตัวเลขและตัวอักษรโบราณบนระนาบชั้นหิน (Bedding plane) ที่โผล่พ้นน้ำในฤดูแล้ง\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nควรอนุรักษ์รอยจารึกโบราณ ป้องกันการสัมผัสทำลาย และติดป้ายประวัติศาสตร์ทางธรณีวิทยา",
      en: "A sandstone cliff by the Mekong featuring historical water-level markings from the French colonial era, blended with natural erosion patterns."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียส (Cretaceous)",
      en: "ยุคครีเทเชียส (Cretaceous)"
    },
    rockFormation: {
      th: "หินทราย (Sandstone) - หมวดหินภูพาน (Phu Phan Formation)",
      en: "หินทราย (Sandstone) - หมวดหินภูพาน (Phu Phan Formation)"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "เปิดตลอดเวลา",
        en: "เปิดตลอดเวลา"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["ไม่มี"],
    warnings: [{"th":"ห้ามขีดเขียนทับร่องรอยประวัติศาสตร์","en":"ห้ามขีดเขียนทับร่องรอยประวัติศาสตร์"}],
    isHighlight: false,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ ผาสิลาเลข", en: "Pha Sila Lek Cliff Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-PH-18',
    name: {
      th: "หาดสลุง",
      en: "Had Salung Beach"
    },
    amphoe: 'pho-sai',
    category: 'nature',
    coords: { lat: 15.822, lng: 105.378 },
    elevation: 120,
    image: './assets/geosites/had-salueng.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nบ้านสองคอน ต.โพธิ์ไทร อ.โพธิ์ไทร จ.อุบลราชธานี\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nหาดทรายริมแม่น้ำโขงที่มีทรายเนื้อละเอียดสีขาวงดงาม ปรากฏให้เห็นเฉพาะช่วงฤดูแล้งเมื่อระดับน้ำโขงลดลง เป็นจุดพักผ่อนและจุดลงเรือท่องเที่ยวชมสามพันโบก\n\n🪨 ลักษณะทางธรณีวิทยา:\nเกิดจากการสะสมตัวของตะกอนทรายแม่น้ำโขง (Fluvial bar / Sand deposit) ในฤดูแล้งเมื่อกระแสน้ำชะลอความเร็ว\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nจัดระเบียบร้านค้าและเรือท่องเที่ยว ปรับปรุงภูมิทัศน์ริมหาดทรายอย่างยั่งยืน",
      en: "A beautiful sandy beach along the Mekong River that emerges during the dry season. It serves as the main pier for boat tours to Sam Phan Bok."
    },
    geologicalAge: {
      th: "ยุคควอเทอร์นารี (Quaternary)",
      en: "ยุคควอเทอร์นารี (Quaternary)"
    },
    rockFormation: {
      th: "ตะกอนทรายแม่น้ำ (River Sand) - ตะกอนน้ำพา (Alluvium)",
      en: "ตะกอนทรายแม่น้ำ (River Sand) - ตะกอนน้ำพา (Alluvium)"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "06:00 - 18:00",
        en: "06:00 - 18:00"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["ที่จอดรถ","ร้านอาหาร","ห้องน้ำ","จุดจอดเรือ"],
    warnings: [{"th":"รักษาความสะอาดพื้นที่หาดทราย","en":"รักษาความสะอาดพื้นที่หาดทราย"}],
    isHighlight: false,
    isConservationGeosite: true,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ หาดสลุง", en: "Had Salung Beach Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-PH-20',
    name: {
      th: "ผาวัดใจ",
      en: "Wad Jai Cliff"
    },
    amphoe: 'pho-sai',
    category: 'culture',
    coords: { lat: 15.811, lng: 105.382 },
    elevation: 120,
    image: './assets/geosites/pha-wad-jai.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nบริเวณริมหน้าผาผาชัน อ.โพธิ์ไทร จ.อุบลราชธานี\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nชะง่อนหน้าผาหินทรายยื่นออกไปเหนือลำน้ำโขง เป็นจุดชมทิวทัศน์ริมหน้าผาหินทรายสูงชันที่มีความตื่นเต้นท้าทาย มองเห็นทัศนียภาพโค้งน้ำโขงกว้างไกล\n\n🪨 ลักษณะทางธรณีวิทยา:\nส่วนหนึ่งของหน้าผาหินทรายหมวดหินภูพาน เกิดจากการยกตัวของที่ราบสูงโคราชและการกัดเซาะตามแนวรอยแยกของน้ำโขง\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nติดตั้งราวกั้นความปลอดภัยและป้ายเตือนระมัดระวังอันตรายตกหน้าผา",
      en: "An overhanging sandstone cliff jutting out over the Mekong River, popular among tourists for daring photo opportunities."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียส (Cretaceous)",
      en: "ยุคครีเทเชียส (Cretaceous)"
    },
    rockFormation: {
      th: "หินทราย (Sandstone) - หมวดหินภูพาน (Phu Phan Formation)",
      en: "หินทราย (Sandstone) - หมวดหินภูพาน (Phu Phan Formation)"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "เปิดตลอดเวลา",
        en: "เปิดตลอดเวลา"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["ไม่มี"],
    warnings: [{"th":"ใช้ความระมัดระวังสูงสุดในการเข้าใกล้ขอบผา","en":"ใช้ความระมัดระวังสูงสุดในการเข้าใกล้ขอบผา"}],
    isHighlight: false,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ ผาวัดใจ", en: "Wad Jai Cliff Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-PH-21',
    name: {
      th: "สวนหินสีประกายแสง",
      en: "Prakai Saeng Rock Garden"
    },
    amphoe: 'pho-sai',
    category: 'geomorphology',
    coords: { lat: 15.792, lng: 105.398 },
    elevation: 120,
    image: './assets/geosites/suan-hin-si.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nบริเวณริมฝั่งแม่น้ำโขง บ.คำจ้าว ต.เหล่างาม อ.โพธิ์ไทร จังหวัดอุบลราชธานี พิกัด (WGS84) 544300 E 1745200 N ระวางอำเภอโพธิ์ไทร (6040 I) แหล่งมีความยาวประมาณ 300 เมตร\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nเป็นหินที่มีลักษณะสะท้อนแสงเป็นประกายระยิบระยับเมื่อเวลาแสงแดดส่อง เมื่อมองในระยะไกลดูเหมือนเป็นก้อนโลหะสีเงินสะท้อนแสงดูแปลกตา เป็นแหล่งธรณีสัณฐานที่โดดเด่นสวยงาม\n\n🪨 ลักษณะทางธรณีวิทยา:\nเป็นหินซิลิกา (siliceous rock) ที่อยู่ในหมวดหินภูพาน อายุประมาณ 110 ล้านปี แข็งและมีสีต่างๆ เช่น น้ำตาลออกเหลือง ดำ ชมพู แดง ลักษณะดังกล่าวแสดงถึงกระบวนการเกิดจากการสะสมตัวของซิลิกา (silica: SiO2) ระหว่างกระบวนการเกิดเป็นหิน หรือเรียกว่าการก่อตัวใหม่ (diagenesis) ในสภาพซิลิกาอิ่มตัวในน้ำที่มีการเคลื่อนที่ในตะกอนทราย ซึ่งลักษณะเช่นนี้หาดูได้ยาก\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nจัดตั้งให้เป็นแหล่งอนุรักษ์ธรณีวิทยา และส่งเสริมการท่องเที่ยวเชิงวิชาการเพื่อการเรียนรู้กระบวนการทางธรณีวิทยา",
      en: "A vast rock platform that sparkles brilliantly like silver metal when struck by sunlight."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียส (Cretaceous)",
      en: "ยุคครีเทเชียส (Cretaceous)"
    },
    rockFormation: {
      th: "หินทรายเนื้อซิลิกา (Siliceous Sandstone) - หมวดหินภูพาน (Phu Phan Formation)",
      en: "หินทรายเนื้อซิลิกา (Siliceous Sandstone) - หมวดหินภูพาน (Phu Phan Formation)"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "06:00 - 18:00",
        en: "06:00 - 18:00"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["ไม่มี"],
    warnings: [{"th":"ห้ามทุบหรือเก็บก้อนหินออกจากพื้นที่โดยเด็ดขาด","en":"ห้ามทุบหรือเก็บก้อนหินออกจากพื้นที่โดยเด็ดขาด"}],
    isHighlight: true,
    isConservationGeosite: true,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ สวนหินสีประกายแสง", en: "Prakai Saeng Rock Garden Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-PH-22',
    name: {
      th: "หาดหงส์",
      en: "Had Hong Beach"
    },
    amphoe: 'pho-sai',
    category: 'nature',
    coords: { lat: 15.79, lng: 105.4 },
    elevation: 120,
    image: './assets/geosites/had-hong.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nบริเวณริมฝั่งแม่น้ำโขงใกล้กับหาดสลึง อ.โพธิ์ไทร จ.อุบลราชธานี\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nเนินทรายธรรมชาติขนาดใหญ่ริมแม่น้ำโขง มีเนื้อทรายละเอียดสีขาวสะอาด เกิดจากการพัดพาสะสมตัวของตะกอนทรายในฤดูแล้งเมื่อระดับน้ำโขงลดลง ได้รับการขนานนามว่า \"ทะเลทรายริมแม่น้ำโขง\"\n\n🪨 ลักษณะทางธรณีวิทยา:\nเกิดจากกระบวนการทางอุทกวิทยา (Hydrological process) ของแม่น้ำโขง ที่พัดพาตะกอนทรายเม็ดละเอียดจากกระแสน้ำวนมาตกสะสมตัวในบริเวณส่วนโค้งน้ำโขงในยุคปัจจุบัน (Quaternary period)\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nอนุรักษ์สภาพเนินทรายธรรมชาติ ห้ามยานพาหนะขับขึ้นเนินทรายเพื่อป้องกันการพังทลาย",
      en: "A massive sand dune along the Mekong River, created by wind and water deposition, famously dubbed the \"Sahara of Thailand.\""
    },
    geologicalAge: {
      th: "ยุคโฮโลซีน (Holocene)",
      en: "ยุคโฮโลซีน (Holocene)"
    },
    rockFormation: {
      th: "ตะกอนทรายอายุน้อย (Recent Sand) - ตะกอนน้ำพาและลมพา",
      en: "ตะกอนทรายอายุน้อย (Recent Sand) - ตะกอนน้ำพาและลมพา"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "06:00 - 18:00",
        en: "06:00 - 18:00"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["ไม่มี"],
    warnings: [{"th":"ห้ามขับขี่รถ ATV หรือยานพาหนะขึ้นบนเนินทรายเพื่อรักษาสภาพธรรมชาติ","en":"ห้ามขับขี่รถ ATV หรือยานพาหนะขึ้นบนเนินทรายเพื่อรักษาสภาพธรรมชาติ"}],
    isHighlight: false,
    isConservationGeosite: true,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ หาดหงส์", en: "Had Hong Beach Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-PH-23',
    name: {
      th: "เสาเฉลียง บ้านโป่งเปา",
      en: "Sao Chaliang (Ban Pong Pao) Pillar"
    },
    amphoe: 'pho-sai',
    category: 'geomorphology',
    coords: { lat: 15.74, lng: 105.35 },
    elevation: 120,
    image: './assets/geosites/sam-muen-ru.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nบ้านโป่งเปา ต.เหล่างาม อ.โพธิ์ไทร จ.อุบลราชธานี\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nกลุ่มเสาเฉลียงหินทรายธรรมชาติรูปร่างคล้ายเห็ด ตั้งอยู่กระจายตัวในบริเวณบ้านโป่งเปา เป็นปรากฏการณ์ทางธรณีสัณฐานที่งดงามและน่าสนใจ\n\n🪨 ลักษณะทางธรณีวิทยา:\nประกอบด้วยหินทรายปนกรวดในหมวดหินภูพาน เกิดจากการผุพังอยู่กับที่และการกัดกร่อนของลม น้ำ และความร้อน (Differential weathering) ทำให้ชั้นหินบนที่มีความแข็งแกร่งกว่าคงเหลืออยู่เป็นหมวกเห็ด ขณะที่ชั้นหินล่างผุพังไปกลายเป็นเสา\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nทำป้ายสื่อความหมายทางธรณีวิทยาและปรับปรุงเส้นทางเดินเข้าชมอย่างเป็นระเบียบ",
      en: "Large mushroom-shaped sandstone pillars formed by millions of years of natural erosion, standing prominently in a natural setting."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียส (Cretaceous)",
      en: "ยุคครีเทเชียส (Cretaceous)"
    },
    rockFormation: {
      th: "หินทราย (Sandstone) - หมวดหินภูพาน วางทับ หมวดหินเสาขัว",
      en: "หินทราย (Sandstone) - หมวดหินภูพาน วางทับ หมวดหินเสาขัว"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "08:00 - 17:00",
        en: "08:00 - 17:00"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["ที่จอดรถ"],
    warnings: [{"th":"ห้ามปีนป่ายหรือขีดเขียนบนเสาหิน","en":"ห้ามปีนป่ายหรือขีดเขียนบนเสาหิน"}],
    isHighlight: false,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ เสาเฉลียง บ้านโป่งเปา", en: "Sao Chaliang (Ban Pong Pao) Pillar Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-SI-01',
    name: {
      th: "แหล่งไดโนเสาร์ยุคสุดท้าย",
      en: "Dinosaur Yuk Sud Tai Site"
    },
    amphoe: 'sri-mueang-mai',
    category: 'fossil',
    coords: { lat: 15.52, lng: 105.28 },
    elevation: 120,
    image: './assets/geosites/kok-pha-suam.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nอยู่ในบริเวณโคกผาส้วม บ้านทุ่งบุญ ต.นาคำ อ.ศรีเมืองใหม่ จ.อุบลราชธานี พิกัด (WGS84) 0531339 E 1712786 N ระวางอำเภอศรีเมืองใหม่ (6039 I) ขอบเขตยาวประมาณ 100 เมตร\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nเป็นแหล่งที่พบซากกระดูกไดโนเสาร์ที่มีอายุอ่อนที่สุดในประเทศไทย คือ ไดโนเสาร์กินพืชอิกัวโนดอน \"สยามโมดอน นิ่มงามมิ\" (Siamodon nimngami) อายุประมาณ 110 ล้านปี\n\n🪨 ลักษณะทางธรณีวิทยา:\nประกอบด้วยหินทรายสีน้ำตาลแดงอมม่วง เนื้อหินมีลักษณะเนื้อละเอียดถึงปานกลาง อยู่ในหมวดหินโคกกรวด อายุประมาณ 100-110 ล้านปี นอกจากนี้ยังพบฟันปลาฉลามโบราณ เกล็ดปลาโบราณ และกระดองเต่าโบราณ\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nควรเร่งอนุรักษ์พื้นที่อย่างเร่งด่วน จัดสร้างศูนย์เรียนรู้และวิจัย ซากดึกดำบรรพ์เพื่อการศึกษา",
      en: "An excavation site yielding fossils of Iguanodontian dinosaurs and contemporary fauna. It represents the final era of dinosaurs in Thailand before their extinction."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียสตอนต้น (~100 ล้านปี)",
      en: "ยุคครีเทเชียสตอนต้น (~100 ล้านปี)"
    },
    rockFormation: {
      th: "หินกรวดมนและหินทราย (Conglomerate & Sandstone) - หมวดหินโคกกรวด (Khok Kruat Formation)",
      en: "หินกรวดมนและหินทราย (Conglomerate & Sandstone) - หมวดหินโคกกรวด (Khok Kruat Formation)"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "08:30 - 16:30",
        en: "08:30 - 16:30"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["ศูนย์จัดแสดง","ที่จอดรถ","ห้องน้ำ"],
    warnings: [{"th":"ห้ามขุดค้นหรือเก็บเศษหิน/ซากดึกดำบรรพ์โดยไม่ได้รับอนุญาต","en":"ห้ามขุดค้นหรือเก็บเศษหิน/ซากดึกดำบรรพ์โดยไม่ได้รับอนุญาต"}],
    isHighlight: true,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ แหล่งไดโนเสาร์ยุคสุดท้าย", en: "Dinosaur Yuk Sud Tai Site Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-SI-06',
    name: {
      th: "เสาเฉลียงยักษ์",
      en: "Sao Chaliang Yak Rock Pillar"
    },
    amphoe: 'sri-mueang-mai',
    category: 'geomorphology',
    coords: { lat: 15.651, lng: 105.312 },
    elevation: 120,
    image: './assets/geosites/sao-chaliang-yak.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nอยู่ในพื้นที่บ้านสองคอน ต.โพธิ์ไทร อ.โพธิ์ไทร จ.อุบลราชธานี พิกัด (WGS84) 0564500 E 1746200 N ระวางอำเภอโพธิ์ไทร (6040 I)\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nเสาเฉลียงหินทรายขนาดใหญ่ที่สุดในพื้นที่ มีความสูงและขนาดยิ่งใหญ่ตระการตา เกิดจากการกัดกร่อนทางธรรมชาติมาหลายล้านปี\n\n🪨 ลักษณะทางธรณีวิทยา:\nเสาหินทรายหมวดหินภูพาน มีความสูงกว่า 8 เมตร สแกนชั้นเฉียงระดับขนาดใหญ่ (Cross-bedding) แสดงทิศทางกระแสน้ำโบราณ\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nพัฒนาเป็นจุดแวะชมสำคัญทางธรณีวิทยา ติดป้ายสื่อความหมายทางวิชาการ",
      en: "The largest mushroom-shaped sandstone pillar in Thailand and ASEAN, a geological marvel hidden within the forest."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียสตอนต้น (~110 ล้านปี)",
      en: "ยุคครีเทเชียสตอนต้น (~110 ล้านปี)"
    },
    rockFormation: {
      th: "หินทราย (Sandstone) - หมวดหินภูพาน (Phu Phan Fm.) ทับ หมวดหินเสาขัว (Sao Khua Fm.)",
      en: "หินทราย (Sandstone) - หมวดหินภูพาน (Phu Phan Fm.) ทับ หมวดหินเสาขัว (Sao Khua Fm.)"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "08:00 - 16:30",
        en: "08:00 - 16:30"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["ลานจอดรถ"],
    warnings: [{"th":"ห้ามขีดเขียน ห้ามก่อกองไฟบริเวณโคนเสาหิน","en":"ห้ามขีดเขียน ห้ามก่อกองไฟบริเวณโคนเสาหิน"}],
    isHighlight: true,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ เสาเฉลียงยักษ์", en: "Sao Chaliang Yak Rock Pillar Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-SI-16',
    name: {
      th: "น้ำตกผาหลวง",
      en: "Pha Luang Waterfall"
    },
    amphoe: 'sri-mueang-mai',
    category: 'nature',
    coords: { lat: 15.54, lng: 105.32 },
    elevation: 120,
    image: './assets/geosites/namtok-pha-luang.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nอยู่ในพื้นที่วนอุทยานน้ำตกผาหลวง บ้านนาเลิน ต.นาเลิน อ.ศรีเมืองใหม่ จ.อุบลราชธานี พิกัด (WGS84) 0541003 E 1725560 N ระวางบ้านฟ้าห่วน (6040 II) ขอบเขตยาวประมาณ 50 เมตร\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nน้ำตกผาหลวงเป็นน้ำตกที่มีความโดดเด่นเป็นอย่างมากเพราะเป็นน้ำตกที่มีถ้ำอยู่ใต้น้ำตกเปรียบเสมือนมีม่านน้ำตกที่ปกปิดถ้ำ สามารถมองเห็นได้ในระยะไกลเนื่องจากเป็นน้ำตกที่มีม่านน้ำตกกว้างมากและหน้าผาน้ำตกมีความสูง\n\n🪨 ลักษณะทางธรณีวิทยา:\nเป็นน้ำตกขนาดใหญ่ที่แบ่งเป็น 2 ส่วน คือ ส่วนแรกเป็นหน้าผาสูงประมาณ 20 เมตร ยาว 30 เมตร ประกอบด้วยหินทรายปนกรวด สีขาวปนเทา อยู่ในหมวดหินภูพาน อายุประมาณ 110 ล้านปี อยู่ชั้นบน และส่วนที่เป็นถ้ำอยู่ชั้นล่างหน้าผาน้ำตก ประกอบด้วยหินทรายแป้ง สีเทาดำ สีน้ำตาลม่วง อยู่ในหมวดหินเสาขัว อายุประมาณ 120 ล้านปี แสดงการวางตัวของชั้นหินชัดเจน dip angle 15 องศา / dip direction 35 องศา\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nพัฒนาเป็นแหล่งศึกษาธรรมชาติทางธรณีวิทยา จัดทำป้ายสื่อความหมายทางวิชาการ ปรับปรุงเส้นทางเดินให้ปลอดภัย",
      en: "A scenic waterfall cascading down a curved sandstone cliff. In early winter, the rocky plateau above blooms with wild flowers."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียส (Cretaceous)",
      en: "ยุคครีเทเชียส (Cretaceous)"
    },
    rockFormation: {
      th: "หินทราย (Sandstone) - หมวดหินภูพาน (Phu Phan Formation)",
      en: "หินทราย (Sandstone) - หมวดหินภูพาน (Phu Phan Formation)"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "08:00 - 16:30",
        en: "08:00 - 16:30"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["ลานกางเต็นท์","ห้องน้ำ","ศูนย์บริการ"],
    warnings: [{"th":"ห้ามเด็ดดอกไม้ป่าบนลานหิน และนำขยะกลับลงมาด้วย","en":"ห้ามเด็ดดอกไม้ป่าบนลานหิน และนำขยะกลับลงมาด้วย"}],
    isHighlight: false,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ น้ำตกผาหลวง", en: "Pha Luang Waterfall Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-SI-19',
    name: {
      th: "ภูกงข้าว (ภูโบลง)",
      en: "Phu Kong Khao Hill"
    },
    amphoe: 'sri-mueang-mai',
    category: 'geomorphology',
    coords: { lat: 15.51, lng: 105.25 },
    elevation: 120,
    image: './assets/geosites/pak-bong.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nลานหินทรายธรรมชาติในเขต อ.ศรีเมืองใหม่ จ.อุบลราชธานี\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nโขดหินทรายธรรมชาติทรงกรวยสูงคล้ายกองข้าวเปลือก ตั้งโดดเด่นบนลานหินทราย เป็นจุดชมทิวทัศน์ธรรมชาติและเป็นแหล่งเรียนรู้ทางธรณีวิทยาที่งดงาม\n\n🪨 ลักษณะทางธรณีวิทยา:\nเกิดจากการผุพังและการกัดกร่อนตามแนวรอยแตกของหินทรายในหมวดหินภูพาน (Phu Phan Formation) ทำให้หินส่วนที่เหลือมีรูปร่างเป็นโคนกรวยคล้ายกองข้าว\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nจัดทำป้ายสื่อความหมายและจัดเส้นทางท่องเที่ยวทางธรณีวิทยา",
      en: "A flat-topped mesa hill resembling a traditional Isan thread-spinning tool, standing out against the surrounding plains."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียส (Cretaceous)",
      en: "ยุคครีเทเชียส (Cretaceous)"
    },
    rockFormation: {
      th: "หินทราย (Sandstone) - หมวดหินพระวิหาร (Phra Wihan Formation)",
      en: "หินทราย (Sandstone) - หมวดหินพระวิหาร (Phra Wihan Formation)"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "เปิดตลอดเวลา",
        en: "เปิดตลอดเวลา"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["ไม่มี"],
    warnings: [{"th":"อนุรักษ์พื้นที่ป่าชุมชนรอบภูเขา","en":"อนุรักษ์พื้นที่ป่าชุมชนรอบภูเขา"}],
    isHighlight: false,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ ภูกงข้าว (ภูโบลง)", en: "Phu Kong Khao Hill Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-SI-35',
    name: {
      th: "หินเต่าชมจันทร์",
      en: "Hin Tao Chom Chan"
    },
    amphoe: 'sri-mueang-mai',
    category: 'geomorphology',
    coords: { lat: 15.541, lng: 105.321 },
    elevation: 120,
    image: './assets/geosites/hin-tao-chom-chan.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nอยู่บริเวณบ้านซะซอม ต.นาโพธิ์กลาง อ.โขงเจียม จ.อุบลราชธานี พิกัด (WGS84) 0563800 E 1726500 N ระวางบ้านนาโพธิ์กลาง (6140 III)\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nประติมากรรมหินทรายธรรมชาติรูปร่างคล้ายเต่ายักษ์หมอบหันหน้าชมดวงจันทร์ยามค่ำคืน เกิดจากการผุพังอยู่กับที่และการกัดเซาะของลมและน้ำ\n\n🪨 ลักษณะทางธรณีวิทยา:\nโขดหินทรายหมวดหินภูพาน (Phu Phan Formation) เกิดกระบวนการกัดกร่อนเฉพาะส่วน (Selective weathering) ทำให้หินทรงกลมมนคล้ายกระดองและหัวเต่า\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nติดป้ายสื่อความหมายทางธรณีวิทยาและปรับปรุงเส้นทางเดินเท้าเชื่อมโยงผาชะนะได",
      en: "A naturally sculpted sandstone boulder resembling a turtle looking up at the moon, resting on a rocky plateau."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียส (Cretaceous)",
      en: "ยุคครีเทเชียส (Cretaceous)"
    },
    rockFormation: {
      th: "หินทราย (Sandstone) - หมวดหินภูพาน (Phu Phan Formation)",
      en: "หินทราย (Sandstone) - หมวดหินภูพาน (Phu Phan Formation)"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "08:00 - 16:30",
        en: "08:00 - 16:30"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["ห้องน้ำในวนอุทยาน"],
    warnings: [{"th":"ห้ามปีนป่ายบนหัวเต่าหิน","en":"ห้ามปีนป่ายบนหัวเต่าหิน"}],
    isHighlight: false,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ หินเต่าชมจันทร์", en: "Hin Tao Chom Chan Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-SI-41',
    name: {
      th: "ผาเจ็ก",
      en: "Pha Jek Cliff"
    },
    amphoe: 'sri-mueang-mai',
    category: 'geomorphology',
    coords: { lat: 15.55, lng: 105.33 },
    elevation: 120,
    image: './assets/geosites/pha-chan.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nอยู่ในเขตอุทยานแห่งชาติผาแต้ม อ.โขงเจียม จ.อุบลราชธานี พิกัด (WGS84) 0564200 E 1715800 N ระวางบ้านหนองผือ (6139 IV)\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nหน้าผาหินทรายริมแม่น้ำโขงที่มีภาพเขียนสีโบราณใต้เพิงผา มีจุดชมวิวโค้งอ่าวแม่น้ำโขงและทิวมะพร้าวที่สวยงามตระการตา\n\n🪨 ลักษณะทางธรณีวิทยา:\nหน้าผาหินทรายที่เกิดจากการยกตัวของที่ราบสูงโคราชและการกัดเซาะของแม่น้ำโขง ชั้นหินทรายหมวดหินภูพานวางตัวซ้อนชั้นสวยงาม\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nจัดทำเส้นทางเดินชมธรรมชาติริมหน้าผา (Skywalk) และอนุรักษ์ภาพเขียนสีโบราณ",
      en: "A long sandstone cliff offering panoramic views of complex mountain ranges and forests. Excellent spot for sunset viewing."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียส (Cretaceous)",
      en: "ยุคครีเทเชียส (Cretaceous)"
    },
    rockFormation: {
      th: "หินทราย (Sandstone) - หมวดหินภูพาน (Phu Phan Formation)",
      en: "หินทราย (Sandstone) - หมวดหินภูพาน (Phu Phan Formation)"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "08:00 - 18:00",
        en: "08:00 - 18:00"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["ลานจอดรถธรรมชาติ"],
    warnings: [{"th":"ระมัดระวังการเดินริมหน้าผา","en":"ระมัดระวังการเดินริมหน้าผา"}],
    isHighlight: false,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ ผาเจ็ก", en: "Pha Jek Cliff Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-SI-42',
    name: {
      th: "ลานผาผึ้ง",
      en: "Lan Pha Phueng"
    },
    amphoe: 'sri-mueang-mai',
    category: 'geomorphology',
    coords: { lat: 15.548, lng: 105.328 },
    elevation: 120,
    image: './assets/geosites/lan-pha-phueng.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nบริเวณอุทยานแห่งชาติผาแต้ม อ.โขงเจียม จ.อุบลราชธานี พิกัด (WGS84) 0557200 E 1703500 N\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nลานหินทรายกว้างขวางบนยอดผา มีรังผึ้งตามธรรมชาติเกาะตามเพิงผา เป็นจุดชมวิวและชมทุ่งดอกไม้ดินยามปลายฝนต้นหนาว\n\n🪨 ลักษณะทางธรณีวิทยา:\nลานหินทรายหมวดหินภูพาน มีลานหินปุ่มและชั้นเฉียงระดับจากการพัดพาสะสมตัวของทางน้ำโบราณ\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nจัดทำเส้นทางเดินศึกษาธรรมชาติทุ่งดอกไม้ดินและจุดชมวิว",
      en: "A spacious sandstone platform showcasing diverse natural weathering patterns and unique lithophytic plant life."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียส (Cretaceous)",
      en: "ยุคครีเทเชียส (Cretaceous)"
    },
    rockFormation: {
      th: "หินทราย (Sandstone) - หมวดหินภูพาน (Phu Phan Formation)",
      en: "หินทราย (Sandstone) - หมวดหินภูพาน (Phu Phan Formation)"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "08:00 - 16:30",
        en: "08:00 - 16:30"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["ไม่มี"],
    warnings: [{"th":"ห้ามทิ้งขยะและไม่เก็บพรรณไม้บนลานหิน","en":"ห้ามทิ้งขยะและไม่เก็บพรรณไม้บนลานหิน"}],
    isHighlight: false,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ ลานผาผึ้ง", en: "Lan Pha Phueng Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-KH-07',
    name: {
      th: "กลุ่มเสาเฉลียง วัดผานางคอย",
      en: "Krum Sao Chaliang of Wat Pha Naang Koi"
    },
    amphoe: 'khong-chiam',
    category: 'culture',
    coords: { lat: 15.61, lng: 105.52 },
    elevation: 120,
    image: './assets/geosites/suan-hin-si.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nวัดถ้ำผานางคอย (หลวงปู่พรหมมา) ต.นาโพธิ์กลาง อ.โขงเจียม จ.อุบลราชธานี พิกัด (WGS84) 0562500 E 1718200 N\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nกลุ่มเสาเฉลียงหินทรายรูปเห็ดทรงแปลกตา ตั้งอยู่บริเวณวัดถ้ำผานางคอย (หลวงปู่พรหมมา) ล้อมรอบด้วยธรรมชาติอันร่มรื่นและหินรูปเจดีย์\n\n🪨 ลักษณะทางธรณีวิทยา:\nหินทรายปนกรวดในหมวดหินภูพาน แสดงชั้นเฉียงระดับและการผุพังอยู่กับที่ทางธรรมชาติ\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nพัฒนาเป็นจุดท่องเที่ยวเชิงธรรมะและธรณีวิทยา ร่วมกับวัดผานางคอย",
      en: "A cluster of mushroom-shaped sandstone pillars scattered around the peaceful grounds of Wat Pha Naang Koi."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียส (Cretaceous)",
      en: "ยุคครีเทเชียส (Cretaceous)"
    },
    rockFormation: {
      th: "หินทรายและหินโคลน - หมวดหินภูพาน และ หมวดหินเสาขัว",
      en: "หินทรายและหินโคลน - หมวดหินภูพาน และ หมวดหินเสาขัว"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "06:00 - 18:00",
        en: "06:00 - 18:00"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["ที่จอดรถ","ห้องน้ำ"],
    warnings: [{"th":"สำรวมกิริยาและแต่งกายสุภาพในเขตวัด","en":"สำรวมกิริยาและแต่งกายสุภาพในเขตวัด"}],
    isHighlight: false,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ กลุ่มเสาเฉลียง วัดผานางคอย", en: "Krum Sao Chaliang of Wat Pha Naang Koi Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-KH-08',
    name: {
      th: "ผาชนะได",
      en: "Pha Chana Dai Cliff"
    },
    amphoe: 'khong-chiam',
    category: 'geomorphology',
    coords: { lat: 15.625, lng: 105.612 },
    elevation: 120,
    image: './assets/geosites/had-hong.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nอยู่บ้านซะซอม ต.นาโพธิ์กลาง อ.โขงเจียม จ.อุบลราชธานี พิกัด (WGS84) 0566168 E 1727091 N ระวางบ้านนาโพธิ์กลาง (6140 III) ขอบเขตยาวประมาณ 60 เมตร\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nเป็นจุดชมพระอาทิตย์ขึ้นจุดแรกของประเทศไทย และเป็นจุดชมวิวชายแดนลาวที่สวยงามเป็นอย่างมาก\n\n🪨 ลักษณะทางธรณีวิทยา:\nเป็นหน้าผาที่มีทิศไปทางตะวันออก พื้นที่เป็นหินทรายสีเทา ขนาดตะกอนมีขนาดปานกลางถึงหยาบ มีกรวดปน ซึ่งเม็ดกรวดมีขนาดตั้งแต่ 0.3-3 เซนติเมตร จัดอยู่ในหมวดหินภูพาน อายุประมาณ 110 ล้านปี ชั้นหินวางตัวชัดเจน (bedding) dip angle 20 องศา / dip direction 297 องศา แสดงชั้นเฉียงระดับ (x-bedding) dip angle 22 องศา / dip direction 273 องศา บริเวณใกล้เคียงยังพบ sand crack\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nจัดเจ้าหน้าที่ดูแลความปลอดภัยบริเวณขอบหน้าผาสูงชันในช่วงเทศกาลปีใหม่ที่มีนักท่องเที่ยวกว่า 4,000 คน และทำป้ายสื่อความหมายธรณีวิทยา",
      en: "The easternmost cliff of Thailand, serving as the country's reference point for sunrise. It offers breathtaking views of the Mekong and sea of mist."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียส (~130 ล้านปี)",
      en: "ยุคครีเทเชียส (~130 ล้านปี)"
    },
    rockFormation: {
      th: "หินทราย (Sandstone) - หมวดหินเสาขัว (Sao Khua Formation)",
      en: "หินทราย (Sandstone) - หมวดหินเสาขัว (Sao Khua Formation)"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "04:30 - 18:00",
        en: "04:30 - 18:00"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["ลานกางเต็นท์","ห้องน้ำ"],
    warnings: [{"th":"ห้ามส่งเสียงดังรบกวนสัตว์ป่าและนักท่องเที่ยวอื่น","en":"ห้ามส่งเสียงดังรบกวนสัตว์ป่าและนักท่องเที่ยวอื่น"}],
    isHighlight: false,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ ผาชนะได", en: "Pha Chana Dai Cliff Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-KH-09',
    name: {
      th: "ถ้ำปาฏิหาริย์",
      en: "Tham Pathihan Cave"
    },
    amphoe: 'khong-chiam',
    category: 'geomorphology',
    coords: { lat: 15.63, lng: 105.58 },
    elevation: 120,
    image: './assets/geosites/tham-pathihan-cave.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nที่บ้านซะซอม ต.นาโพธิ์กลาง อ.โขงเจียม จ.อุบลราชธานี พิกัด (WGS84) 0561505 E 1724873 N ระวางบ้านนาโพธิ์กลาง (6140 III) ขอบเขตยาวประมาณ 100 เมตร\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nเป็นถ้ำขนาดใหญ่ที่เกิดในหินทราย (โดยปกติถ้ำโดยมากจะเกิดจากหินปูน) ภายในถ้ำกว้างขวางและสงบร่มรื่น\n\n🪨 ลักษณะทางธรณีวิทยา:\nถ้ำหินทรายปากถ้ำกว้างประมาณ 10 เมตร ลึกจากปากถ้ำถึงบริเวณพระนอนประมาณ 70 เมตร และบริเวณรอบถ้ำมีลานหินทรายลักษณะเป็นปุ่มๆ เกิดจากกระบวนการผุพังอยู่กับที่และกร่อนตามระนาบชั้นหิน โดยน้ำเป็นตัวกัดกร่อน หินทรายอยู่ในหมวดหินภูพาน อายุประมาณ 110 ล้านปี\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nควรติดป้ายให้ความรู้ด้านธรณีวิทยา และบริหารจัดการร่วมกับทางวัดในการพัฒนาแหล่ง",
      en: "A large sandstone rock shelter and cave featuring formations and serving as a tranquil meditation site."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียส (~130 ล้านปี)",
      en: "ยุคครีเทเชียส (~130 ล้านปี)"
    },
    rockFormation: {
      th: "หินทราย (Sandstone) - หมวดหินเสาขัว (Sao Khua Formation)",
      en: "หินทราย (Sandstone) - หมวดหินเสาขัว (Sao Khua Formation)"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "08:00 - 17:00",
        en: "08:00 - 17:00"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["ที่จอดรถ"],
    warnings: [{"th":"ห้ามจับหินงอกหินย้อย และรักษาความสงบ","en":"ห้ามจับหินงอกหินย้อย และรักษาความสงบ"}],
    isHighlight: false,
    isConservationGeosite: true,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ ถ้ำปาฏิหาริย์", en: "Tham Pathihan Cave Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-KH-10',
    name: {
      th: "น้ำตกสร้อยสวรรค์",
      en: "Soi Sawan Waterfall"
    },
    amphoe: 'khong-chiam',
    category: 'nature',
    coords: { lat: 15.524, lng: 105.578 },
    elevation: 120,
    image: './assets/geosites/sao-chaliang-yak.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nอุทยานแห่งชาติผาแต้ม ต.ห้วยไผ่ อ.โขงเจียม จ.อุบลราชธานี พิกัด (WGS84) 0558500 E 1709200 N\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nน้ำตกขนาดใหญ่ที่เกิดจากสายน้ำ 2 สายไหลมาบรรจบกันตกลงมาจากหน้าผาหินทรายสูง 20 เมตร ล้อมรอบด้วยทุ่งดอกไม้ดินสวยงาม\n\n🪨 ลักษณะทางธรณีวิทยา:\nหน้าผาหินทรายหมวดหินภูพานและหมวดหินเสาขัว เกิดจากการตัดผ่านของลำน้ำ 2 สายบนชั้นหินต่างระดับ\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nปรับปรุงเส้นทางเดินศึกษาธรรมชาติทุ่งดอกไม้ดินและน้ำตก",
      en: "A large waterfall formed by two streams cascading from a high cliff and meeting at the bottom, resembling a necklace."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียส (~110 ล้านปี)",
      en: "ยุคครีเทเชียส (~110 ล้านปี)"
    },
    rockFormation: {
      th: "หินทราย (Sandstone) - หมวดหินภูพาน (Phu Phan Formation)",
      en: "หินทราย (Sandstone) - หมวดหินภูพาน (Phu Phan Formation)"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "08:00 - 16:30",
        en: "08:00 - 16:30"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["ลานจอดรถ","ร้านค้า","ห้องน้ำ"],
    warnings: [{"th":"ห้ามนำพลาสติกใช้ครั้งเดียวทิ้งเข้าพื้นที่","en":"ห้ามนำพลาสติกใช้ครั้งเดียวทิ้งเข้าพื้นที่"}],
    isHighlight: false,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ น้ำตกสร้อยสวรรค์", en: "Soi Sawan Waterfall Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-KH-11',
    name: {
      th: "น้ำตกแสงจันทร์",
      en: "Saeng Chan Waterfall"
    },
    amphoe: 'khong-chiam',
    category: 'nature',
    coords: { lat: 15.535, lng: 105.58 },
    elevation: 120,
    image: './assets/geosites/saeng-chan-waterfall.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nอยู่ในพื้นที่บ้านทุ่งนาเมือง ต.นาโพธิ์กลาง อ.โขงเจียม จ.อุบลราชธานี พิกัด (WGS84) 0563271 E 1715480 N ระวางบ้านนาโพธิ์กลาง (6140 III) ขอบเขตยาว 50 เมตร\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nลักษณะเป็นน้ำตกที่ไหลผ่านรูของหิน ซึ่งทำให้เกิดเป็นจุดที่โดดเด่นสวยงามเพราะแสงแดดตกกระทบสายน้ำ ทำให้เกิดประกายระยิบระยับสวยงาม และจะมีแสงจันทร์ลอดรูในสายน้ำตกในเวลากลางคืน จึงได้ชื่อว่าน้ำตกแสงจันทร์\n\n🪨 ลักษณะทางธรณีวิทยา:\nเป็นน้ำตกหินทรายอยู่ในหมวดหินภูพาน อายุประมาณ 110 ล้านปี มีจำนวน 2 ชั้น จุดเด่นอยู่ที่น้ำตกชั้นล่างสูงประมาณ 7 เมตร ลักษณะเป็นน้ำตกที่ไหลผ่านรูของหิน ซึ่งคาดว่าเดิมน่าจะเป็นกุมภลักษณ์แล้วเกิดการหลุดออกของหินชั้นล่าง ทำให้น้ำเกิดการกัดเซาะเกิดเป็นรูหินขึ้น และพบถ้ำหินทรายขนาดประมาณลึก 5 เมตร กว้าง 10 เมตร ทางทิศตะวันตก อีกทั้งมีจุดเด่นทางธรณีวิทยาคือ แสดงแนวชั้นเฉียงระดับอยู่ตรงผนังน้ำตกทางตะวันตก\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nอยู่ในพื้นที่อุทยานแห่งชาติผาแต้ม ได้รับการบริหารจัดการเป็นอย่างดีในทุกๆ ด้าน",
      en: "Also known as the \"Hole Waterfall,\" it is a natural marvel where water flows through a perfectly circular hole in the rock, resembling moonlight shining through."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียส",
      en: "ยุคครีเทเชียส"
    },
    rockFormation: {
      th: "หินทราย (Sandstone) - หมวดหินภูพาน (Phu Phan Formation)",
      en: "หินทราย (Sandstone) - หมวดหินภูพาน (Phu Phan Formation)"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "08:00 - 16:30",
        en: "08:00 - 16:30"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["ลานจอดรถ","ห้องน้ำ"],
    warnings: [{"th":"ห้ามลงเล่นน้ำในบริเวณแอ่งลึกและห้ามโยนหินลงรู","en":"ห้ามลงเล่นน้ำในบริเวณแอ่งลึกและห้ามโยนหินลงรู"}],
    isHighlight: true,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ น้ำตกแสงจันทร์", en: "Saeng Chan Waterfall Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-KH-12',
    name: {
      th: "เสาเฉลียงคู่",
      en: "Sao Chaliang Ku Pillar"
    },
    amphoe: 'khong-chiam',
    category: 'geomorphology',
    coords: { lat: 15.62, lng: 105.6 },
    elevation: 120,
    image: './assets/geosites/sao-chaliang-ku-pillar.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nบ้านซะซอม ต.นาโพธิ์กลาง อ.โขงเจียม จ.อุบลราชธานี พิกัด (WGS84) 0563901 E 1726228 N ระวางบ้านนาโพธิ์กลาง (6140 III) ขอบเขตยาว 40 เมตร\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nเป็นลักษณะเสาเฉลียง 2 ต้นตั้งอยู่คู่กันอย่างโดดเด่น เสาเฉลียงทั้ง 2 ต้นมีความสูงใกล้เคียงกัน เป็นจุดที่มีความน่าสนใจทางธรณีวิทยาและด้านการท่องเที่ยวเป็นอย่างมาก\n\n🪨 ลักษณะทางธรณีวิทยา:\nลักษณะเสาเฉลียงประกอบด้วยหินทรายปนกรวด สีเทา มีเม็ดตะกอนละเอียดปานกลาง อยู่ในหมวดหินภูพาน อายุประมาณ 110 ล้านปี มีความสูงประมาณ 3 เมตร แบ่งเป็นส่วนลักษณะคล้ายร่มสูงประมาณ 0.4 เมตร และส่วนที่มีลักษณะคล้ายเสาสูงประมาณ 2.6 เมตร เสาเฉลียงแห่งนี้เป็นการตกตะกอนสะสมตัวโดยธารน้ำไหลแบบประสานสายที่มีขนาดค่อนข้างใหญ่ มีกระแสน้ำรุนแรง พัดพาเอาตะกอนทั้งขนาดใหญ่ถึงเล็กมาสะสมตัวกัน ลักษณะเสาเฉลียงมีอิทธิพลมาจาก การกร่อนโดยกระแสน้ำ นอกจากนี้ชั้นหินยังแสดงชั้นเฉียงระดับชัดเจนซึ่งสามารถบ่งบอกถึงทิศทางการไหลของแม่น้ำโบราณ\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nมัคคุเทศก์ท้องถิ่นพานักท่องเที่ยวแวะชมระหว่างเส้นทางเดินเท้าขึ้นผาชะนะได อุทยานควรจัดระเบียบและทำป้ายข้อควรปฏิบัติ",
      en: "Twin mushroom-shaped sandstone pillars standing beside the route to Pha Chana Dai, serving as a popular photo stop."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียส",
      en: "ยุคครีเทเชียส"
    },
    rockFormation: {
      th: "หินทราย (Sandstone) - หมวดหินภูพาน / หมวดหินเสาขัว",
      en: "หินทราย (Sandstone) - หมวดหินภูพาน / หมวดหินเสาขัว"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "เปิดตลอดเวลา",
        en: "เปิดตลอดเวลา"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["ไม่มี"],
    warnings: [{"th":"ระวังอันตรายจากรถสัญจรขณะถ่ายรูป","en":"ระวังอันตรายจากรถสัญจรขณะถ่ายรูป"}],
    isHighlight: false,
    isConservationGeosite: true,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ เสาเฉลียงคู่", en: "Sao Chaliang Ku Pillar Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-KH-13',
    name: {
      th: "ผาแต้ม",
      en: "Pha Taem Cliff"
    },
    amphoe: 'khong-chiam',
    category: 'archaeology',
    coords: { lat: 15.399, lng: 105.514 },
    elevation: 120,
    image: './assets/geosites/pha-taem-cliff.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nต.ห้วยไผ่ อ.โขงเจียม จ.อุบลราชธานี พิกัด (WGS84) 0555500 E 1702800 N\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nหน้าผาหินทรายสูงชันตระหง่านริมแม่น้ำโขง เป็นแหล่งภาพเขียนสีโบราณยุคก่อนประวัติศาสตร์ที่ยาวที่สุดในประเทศไทย มีภาพคน สัตว์ มือ และลายเส้น อายุกว่า 3,000-4,000 ปี\n\n🪨 ลักษณะทางธรณีวิทยา:\nหน้าผาหินทรายหมวดหินภูพานและหมวดหินเสาขัว เกิดจากการยกตัวของเทือกเขาและการกัดเซาะของแม่น้ำโขง ทำให้เกิดเพิงผาหินแนวยาวกว่า 180 เมตร\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nได้รับการบริหารจัดการเป็นอย่างดี มีทางเดินชมภาพเขียนสี ป้ายสื่อความหมาย และศูนย์บริการนักท่องเที่ยว",
      en: "A continuous, steep sandstone cliff featuring Thailand's longest gallery of prehistoric rock paintings (3,000-4,000 years old) with over 300 figures depicting ancient life."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียส (~130 ล้านปี)",
      en: "ยุคครีเทเชียส (~130 ล้านปี)"
    },
    rockFormation: {
      th: "หินทรายและหินทรายแป้ง - หมวดหินภูพาน วางทับ หมวดหินเสาขัว",
      en: "หินทรายและหินทรายแป้ง - หมวดหินภูพาน วางทับ หมวดหินเสาขัว"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "06:00 - 18:00",
        en: "06:00 - 18:00"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["ศูนย์บริการ","ลานจอดรถ","ร้านค้า","ห้องน้ำ"],
    warnings: [{"th":"ห้ามจับหรือสัมผัสภาพเขียนสีโดยเด็ดขาด ห้ามขีดเขียน","en":"ห้ามจับหรือสัมผัสภาพเขียนสีโดยเด็ดขาด ห้ามขีดเขียน"}],
    isHighlight: true,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ ผาแต้ม", en: "Pha Taem Cliff Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-KH-14',
    name: {
      th: "แม่น้ำสองสี",
      en: "Song Si River"
    },
    amphoe: 'khong-chiam',
    category: 'geomorphology',
    coords: { lat: 15.318, lng: 105.5 },
    elevation: 120,
    image: './assets/geosites/song-si-river.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nอยู่ในพื้นที่บ้านด่านเก่า ต.โขงเจียม อ.โขงเจียม จ.อุบลราชธานี พิกัด (WGS84) 0553666 E 1693627 N ระวางอำเภอศรีเมืองใหม่ (6039 I) ขอบเขตยาวประมาณ 2,000 เมตร\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nเป็นจุดที่แม่น้ำมูลไหลมาบรรจบกับแม่น้ำโขง ซึ่งแม่น้ำมูลเป็นน้ำที่ไหลมาจากเขื่อนปากมูลจะมีความใส ส่วนน้ำในแม่น้ำโขงมีความขุ่นมากกว่า เมื่อไหลมาพบกันจึงทำให้เห็นความแตกต่างระหว่างสีน้ำทำให้เป็นน้ำสองสี \"โขงสีปูน มูลสีคราม\" เป็นจุดท่องเที่ยวที่ถูกสรรสร้างโดยธรรมชาติอย่างน่าประทับใจ\n\n🪨 ลักษณะทางธรณีวิทยา:\nเป็นจุดที่มีความโดดเด่นเป็นอย่างมากเนื่องจากแสดงลักษณะธรณีสัณฐานที่สวยงาม อีกทั้งบริเวณกลางแม่น้ำยังมีโขดหิน แก่งหินทรายที่สวยงาม ซึ่งเกิดจากกระบวนการกร่อนของทางน้ำ\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nจุดชมวิวแม่น้ำสองสีมีการบริหารจัดการค่อนข้างดี ควรจัดระเบียบร้านค้าไม่ให้บดบังทัศนียภาพอันงดงาม",
      en: "The confluence of the Mekong (turbid/brown) and Mun (clear/blue) rivers, creating a distinct \"two-color\" phenomenon during the flood season."
    },
    geologicalAge: {
      th: "ยุคโฮโลซีน (Holocene)",
      en: "ยุคโฮโลซีน (Holocene)"
    },
    rockFormation: {
      th: "ตะกอนทางน้ำ (Fluvial Deposits) - ตะกอนน้ำพา (Alluvium)",
      en: "ตะกอนทางน้ำ (Fluvial Deposits) - ตะกอนน้ำพา (Alluvium)"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "เปิดตลอดเวลา",
        en: "เปิดตลอดเวลา"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["จุดชมวิว","ศาลาพักผ่อน","ร้านอาหาร"],
    warnings: [{"th":"ไม่ทิ้งขยะลงแหล่งน้ำ","en":"ไม่ทิ้งขยะลงแหล่งน้ำ"}],
    isHighlight: true,
    isConservationGeosite: true,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ แม่น้ำสองสี", en: "Song Si River Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-KH-24',
    name: {
      th: "ถ้ำเจีย",
      en: "Tham Jia Cave"
    },
    amphoe: 'khong-chiam',
    category: 'geomorphology',
    coords: { lat: 15.405, lng: 105.51 },
    elevation: 120,
    image: './assets/geosites/namtok-pha-luang.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nอยู่ในเขตอุทยานแห่งชาติผาแต้ม อ.โขงเจียม จ.อุบลราชธานี พิกัด (WGS84) 0561200 E 1722500 N\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nเพิงผาถ้ำหินทรายธรรมชาติที่เป็นถ้ำค้างคาว มีค้างคาวอาศัยอยู่ตามธรรมชาติ คำว่า \"เจีย\" เป็นภาษาอีสานแปลว่าค้างคาว\n\n🪨 ลักษณะทางธรณีวิทยา:\nลักษณะเป็นหน้าผาหินทรายสีเทาอยู่ในหมวดหินภูพาน อายุประมาณ 110 ล้านปี เกิดกระบวนการกัดเซาะตามแนวชั้นหินอ่อนเกิดเป็นโพรงเพิงผาถ้ำธรรมชาติ\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nควรมีป้ายให้ความรู้ด้านธรณีวิทยาและมีแนวเขตให้ชมวิวเพื่อความปลอดภัย",
      en: "A small cave within Pha Taem National Park, home to a large colony of bats (\"Jia\" means bat in the local dialect)."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียส",
      en: "ยุคครีเทเชียส"
    },
    rockFormation: {
      th: "หินทราย (Sandstone) - หมวดหินภูพาน",
      en: "หินทราย (Sandstone) - หมวดหินภูพาน"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "08:00 - 16:30",
        en: "08:00 - 16:30"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["ไม่มี"],
    warnings: [{"th":"ห้ามใช้ไฟฉายส่องกวนค้างคาว และห้ามส่งเสียงดัง","en":"ห้ามใช้ไฟฉายส่องกวนค้างคาว และห้ามส่งเสียงดัง"}],
    isHighlight: false,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ ถ้ำเจีย", en: "Tham Jia Cave Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-KH-25',
    name: {
      th: "ถ้ำมืด",
      en: "Tham Mued Cave"
    },
    amphoe: 'khong-chiam',
    category: 'geomorphology',
    coords: { lat: 15.41, lng: 105.508 },
    elevation: 120,
    image: './assets/geosites/hin-tao-chom-chan.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nอยู่ในพื้นที่บ้านผาชัน อ.โพธิ์ไทร จ.อุบลราชธานี พิกัด (WGS84) 0556868 E 1740497 N ระวางอำเภอโพธิ์ไทร (6040 I) ขอบเขตยาวประมาณ 1,200 เมตร\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nเป็นถ้ำหินทรายที่มีขนาดใหญ่และลึกที่สุดในประเทศไทยเท่าที่เคยสำรวจพบถ้ำหินทราย สภาพสมบูรณ์มาก\n\n🪨 ลักษณะทางธรณีวิทยา:\nเป็นหินทราย ลักษณะเนื้อหินมีสีเทา มีขนาดตะกอนตั้งแต่ปานกลางถึงหยาบ ปนกรวดที่ประกอบด้วย ควอตซ์ ขนาด 0.3-3 เซนติเมตร อยู่ในหมวดหินภูพาน อายุประมาณ 110 ล้านปี แสดงแนวการวางตัวของชั้นหินชัดเจน (bedding) dip angle 18 องศา / dip direction 240 องศา บริเวณภายในถ้ำยังพบกุมภลักษณ์กระจายอยู่ทั่วไป ขนาดตั้งแต่ 50-80 เซนติเมตร ถ้ำมืดนี้เกิดจากกระบวนการผุพังอยู่กับที่และการกร่อนตามแนวระนาบของชั้นหินที่มีความคงทนต่อการผุกร่อนน้อย โดยมีน้ำเป็นตัวกัดกร่อนและพัดพาเม็ดทรายออกไปทีละน้อย อีกทั้งมีการพังทลายของชั้นหินจนเป็นโพรงถ้ำและมีขนาดใหญ่ขึ้นเรื่อยๆ\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nถ้ำมืดมีศักยภาพในการพัฒนาเป็นแหล่งท่องเที่ยวแนวธรรมชาติ-ผจญภัยมาก ประชาสัมพันธ์ในโปรแกรมล่องเรือผาชัน และจัดทำเส้นทางเดินเท้าและป้ายเตือน",
      en: "A deep rock shelter where sunlight cannot reach. It contains traces of ancient human habitation and pottery shards."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียส",
      en: "ยุคครีเทเชียส"
    },
    rockFormation: {
      th: "หินทราย (Sandstone) - หมวดหินเสาขัว",
      en: "หินทราย (Sandstone) - หมวดหินเสาขัว"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "08:00 - 16:30",
        en: "08:00 - 16:30"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["ไม่มี"],
    warnings: [{"th":"ห้ามเคลื่อนย้ายวัตถุโบราณและห้ามขีดเขียน","en":"ห้ามเคลื่อนย้ายวัตถุโบราณและห้ามขีดเขียน"}],
    isHighlight: false,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ ถ้ำมืด", en: "Tham Mued Cave Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-KH-26',
    name: {
      th: "แก่งสเลกอน",
      en: "Salegon Rapids"
    },
    amphoe: 'khong-chiam',
    category: 'geomorphology',
    coords: { lat: 15.65, lng: 105.62 },
    elevation: 120,
    image: './assets/geosites/lan-pha-phueng.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nกลางลำน้ำโขง อ.โขงเจียม จ.อุบลราชธานี\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nกลุ่มแก่งหินทรายกว้างขวางโผล่ขึ้นกลางลำน้ำโขง มีสายน้ำไหลเชี่ยวผ่านโขดหิน เกิดเป็นประติมากรรมหินทรายรูปทรงแปลกตาจำนวนมาก\n\n🪨 ลักษณะทางธรณีวิทยา:\nเป็นชั้นหินทรายในหมวดหินเสาขัว (Sao Khua Formation) อายุประมาณ 120 ล้านปี มีกระแสธารน้ำโขงกัดเซาะเกิดเป็นกุมภลักษณ์และโขดหินริ้วคลื่น\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nจัดจุดชมวิวและเส้นทางล่องเรือท่องเที่ยวทางน้ำอย่างปลอดภัย",
      en: "Beautiful rock rapids in the Mekong River that only reveal themselves during the dry season when water levels drop."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียส",
      en: "ยุคครีเทเชียส"
    },
    rockFormation: {
      th: "หินทราย (Sandstone) - หมวดหินภูพาน",
      en: "หินทราย (Sandstone) - หมวดหินภูพาน"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "เปิดตลอดเวลา",
        en: "เปิดตลอดเวลา"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["ไม่มี"],
    warnings: [{"th":"ระมัดระวังกระแสน้ำเชี่ยว","en":"ระมัดระวังกระแสน้ำเชี่ยว"}],
    isHighlight: false,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ แก่งสเลกอน", en: "Salegon Rapids Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-KH-27',
    name: {
      th: "ภูสะมุย",
      en: "Sa Mui Mountain"
    },
    amphoe: 'khong-chiam',
    category: 'geomorphology',
    coords: { lat: 15.58, lng: 105.59 },
    elevation: 120,
    image: './assets/geosites/tham-pathihan-cave.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nบริเวณภูสะมุย ต.นาโพธิ์กลาง อ.โขงเจียม จ.อุบลราชธานี พิกัด (WGS84) 0558200 E 1735500 N\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nก้อนหินทรายขนาดใหญ่หนักหลายตันตั้งซ้อนกันอย่างอัศจรรย์ สามารถใช้มือผลักให้หินโยกไปมาได้โดยไม่ตกจากฐาน\n\n🪨 ลักษณะทางธรณีวิทยา:\nเกิดจากกระบวนการผุพังอยู่กับที่และการกัดกร่อนของลมและน้ำ (Differential weathering) ในหินทรายหมวดหินภูพาน ทำให้ก้อนหินบนเหลือจุดสัมผัสกับหินฐานเพียงเล็กน้อย\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nจัดทำป้ายสื่อความหมายทางธรณีวิทยาและทำราวกั้นเพื่อความปลอดภัย",
      en: "High viewpoint offering sweeping vistas of the Mekong and Laos."
    },
    geologicalAge: {
      th: "ครีเทเชียส",
      en: "ครีเทเชียส"
    },
    rockFormation: {
      th: "หินทราย - หมวดหินภูพาน",
      en: "หินทราย - หมวดหินภูพาน"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "ช่วงเวลาที่เหมาะสม ฤดูน้ำลด (พ.ย. - พ.ค.)",
        en: "Best season: Nov - May"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["🅿️ ลานจอดรถ"],
    warnings: [],
    isHighlight: false,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ ภูสะมุย", en: "Sa Mui Mountain Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-KH-28',
    name: {
      th: "ภูหินเหล็กไฟ",
      en: "Phu Hin Lek Fai Mountain"
    },
    amphoe: 'khong-chiam',
    category: 'geomorphology',
    coords: { lat: 15.59, lng: 105.58 },
    elevation: 120,
    image: './assets/geosites/saeng-chan-waterfall.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nเทือกเขาหินทรายในเขต อ.โขงเจียม จ.อุบลราชธานี\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nภูเขาหินทรายที่มีลานหินกว้างขวาง และมีก้อนหินทรายปนแร่เหล็กเนื้อแน่น มีสีน้ำตาลเข้มถึงดำคล้ายสีเหล็กไฟ เป็นแหล่งเรียนรู้เรื่องแร่และหิน\n\n🪨 ลักษณะทางธรณีวิทยา:\nหินทรายในหมวดหินภูพานที่มีการสะสมตัวของสารละลายแร่เหล็ก (Iron oxide / Lateritic capping) แทรกซึมในเนื้อหิน ทำให้เกิดความคงทนและมีสีเข้มคล้ายเหล็กไฟ\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nจัดทำเส้นทางศึกษาธรรมชาติทางธรณีวิทยา",
      en: "Sandstone mountain scattered with flint-like rocks."
    },
    geologicalAge: {
      th: "ครีเทเชียส",
      en: "ครีเทเชียส"
    },
    rockFormation: {
      th: "หินทราย - หมวดหินภูพาน",
      en: "หินทราย - หมวดหินภูพาน"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "ช่วงเวลาที่เหมาะสม ฤดูน้ำลด (พ.ย. - พ.ค.)",
        en: "Best season: Nov - May"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["🅿️ ลานจอดรถ"],
    warnings: [],
    isHighlight: false,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ ภูหินเหล็กไฟ", en: "Phu Hin Lek Fai Mountain Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-KH-29',
    name: {
      th: "น้ำตกโกลึก",
      en: "Bok Luek Waterfall"
    },
    amphoe: 'khong-chiam',
    category: 'nature',
    coords: { lat: 15.55, lng: 105.42 },
    elevation: 120,
    image: './assets/geosites/sao-chaliang-ku-pillar.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nห้วยธรรมชาติตามแนวอุทยานแห่งชาติผาแต้ม อ.โขงเจียม จ.อุบลราชธานี\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nน้ำตกหินทรายขนาดเล็กที่สายน้ำไหลผ่านโขดหินทรายในป่าเบญจพรรณธรรมชาติอันสงบร่มรื่น มีแอ่งน้ำธรรมชาติให้เล่นน้ำคลายร้อน\n\n🪨 ลักษณะทางธรณีวิทยา:\nผาหินทรายหมวดหินภูพาน เกิดจากการเปลี่ยนแปลงระดับของชั้นหิน (Structural feature) ทำให้สายน้ำกัดเซาะเกิดเป็นชั้นน้ำตกและกุมภลักษณ์ขนาดเล็ก\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nอนุรักษ์ธรรมชาติและจัดป้ายสื่อความหมายทางนิเวศวิทยา",
      en: "Waterfall plunging into a deep plunge pool surrounded by forest."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียส",
      en: "Cretaceous Period"
    },
    rockFormation: {
      th: "หินทราย - หมวดหินภูพาน",
      en: "หินทราย - หมวดหินภูพาน"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "ช่วงเวลาที่เหมาะสม ฤดูน้ำลด (พ.ย. - พ.ค.)",
        en: "Best season: Nov - May"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["🅿️ ลานจอดรถ"],
    warnings: [],
    isHighlight: false,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ น้ำตกโกลึก", en: "Bok Luek Waterfall Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-KH-30',
    name: {
      th: "ภูอานม้า",
      en: "Phu An Ma Mountain"
    },
    amphoe: 'khong-chiam',
    category: 'geomorphology',
    coords: { lat: 15.55, lng: 105.42 },
    elevation: 120,
    image: './assets/geosites/phu-an-ma-mountain.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nบริเวณบ้านนาโพธิ์กลาง อ.โขงเจียม จ.อุบลราชธานี พิกัด (WGS84) 0561500 E 1721500 N\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nเป็นลักษณะเพิงผาหินที่มีลักษณะหินขนาดใหญ่ 2 ก้อนเรียงคู่กัน ซึ่งถ้ามองจากด้านล่างจะเห็นหิน 2 ก้อนนั้นคล้ายอานม้า 2 ใบ วางเรียงคู่กัน\n\n🪨 ลักษณะทางธรณีวิทยา:\nเป็นหน้าผาหินทรายที่เป็นจุดชมวิวแม่น้ำมูลที่สวยงามมาก หินทรายในบริเวณนี้มีลักษณะสีเทา สีเทาอมม่วง ขนาดเม็ดตะกอนละเอียด เนื้อหินมีเม็ดกรวดขนาด 0.3-4 เซนติเมตร อยู่ในหมวดหินภูพาน บริเวณหน้าผาเป็นลักษณะหน้าผา 2 ชั้น อีกทั้งมีลักษณะแสดงแนวชั้นเฉียงระดับที่เป็นอิทธิพลจากกระแสน้ำและมีลักษณะการกัดเซาะของน้ำกระจายอยู่ทั่วไป\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nอยู่ในเขตอุทยานแห่งชาติผาแต้ม มีการบริหารจัดการแหล่งที่ดีอยู่แล้ว",
      en: "Mountain peak with a distinct saddle-like depression."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียส",
      en: "Cretaceous Period"
    },
    rockFormation: {
      th: "หินทราย - หมวดหินพระวิหาร",
      en: "หินทราย - หมวดหินพระวิหาร"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "ช่วงเวลาที่เหมาะสม ฤดูน้ำลด (พ.ย. - พ.ค.)",
        en: "Best season: Nov - May"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["🅿️ ลานจอดรถ"],
    warnings: [],
    isHighlight: false,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ ภูอานม้า", en: "Phu An Ma Mountain Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-KH-31',
    name: {
      th: "เสาระเบียง ภูจันทร์แดง",
      en: "Sao Rabiang of Phu Chan Daeng"
    },
    amphoe: 'khong-chiam',
    category: 'geomorphology',
    coords: { lat: 15.55, lng: 105.42 },
    elevation: 120,
    image: './assets/geosites/pha-taem-cliff.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nอยู่ในพื้นที่ป่าสงวนแห่งชาติภูหล่น ต.สงยาง อ.ศรีเมืองใหม่ จ.อุบลราชธานี พิกัด (WGS84) 0532387 E 1725362 N ระวางบ้านหนองแสง (6038 II) ขอบเขตยาว 100 เมตร\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nมีลักษณะเป็นเสาระเบียงขนาดใหญ่ขนาดสูงประมาณ 8 เมตร ยาวประมาณ 20 เมตร ยาวต่อเนื่องวางตัวอย่างสวยงาม บริเวณใกล้เคียงยังมีเสาเฉลียงรูปแก้วไวน์แปลกตา และหินสมองกระจายอยู่ทั่วไป\n\n🪨 ลักษณะทางธรณีวิทยา:\nเป็นหินทรายหมวดหินภูพาน อายุประมาณ 110 ล้านปี มีรูปร่างเป็นเสาระเบียงเนื่องจากกระบวนการกร่อน (erosion) โดยกระแสน้ำ มีลักษณะเป็นรูพรุนตามแนวข้าง แสดงแนวชั้นเฉียงระดับของชั้นหินชัดเจน บริเวณพื้นแสดงลักษณะหินสมอง (sand cracks) ที่เกิดจากการเปลี่ยนแปลงอุณหภูมิร้อน/เย็น และลานหินปุ่ม\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nติดตั้งป้ายสื่อความหมายทางวิชาการเพื่อให้ความรู้ด้านธรณีวิทยาของการเกิดเสาระเบียงและรอยชั้นเฉียงระดับ",
      en: "Sandstone pillars arranged naturally like a balcony."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียส",
      en: "Cretaceous Period"
    },
    rockFormation: {
      th: "หินทราย - หมวดหินภูพาน",
      en: "หินทราย - หมวดหินภูพาน"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "ช่วงเวลาที่เหมาะสม ฤดูน้ำลด (พ.ย. - พ.ค.)",
        en: "Best season: Nov - May"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["🅿️ ลานจอดรถ"],
    warnings: [],
    isHighlight: false,
    isConservationGeosite: true,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ เสาระเบียง ภูจันทร์แดง", en: "Sao Rabiang of Phu Chan Daeng Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-KH-32',
    name: {
      th: "น้ำตกห้วยนาเมืองใหญ่",
      en: "Huai Na Mueang Yai Waterfall"
    },
    amphoe: 'khong-chiam',
    category: 'nature',
    coords: { lat: 15.55, lng: 105.42 },
    elevation: 120,
    image: './assets/geosites/huai-na-mueang-yai-waterfall.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nบ้านทุ่งนาเมือง ต.นาโพธิ์กลาง อ.โขงเจียม จ.อุบลราชธานี พิกัด (WGS84) 0563850 E 1717439 N ระวางบ้านนาโพธิ์กลาง (6140 III) ขอบเขตยาว 200 เมตร\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nเป็นน้ำตกที่ไหลต่อเนื่องมาจากลำห้วย และเกิดการเปลี่ยนแปลงระดับของชั้นหินทำให้กลายเป็นน้ำตกห้วยนาเมืองใหญ่ ในช่วงน้ำน้อย น้ำจะไหลลอดแผ่นหิน แล้วพุ่งตกลงมาดูคล้ายน้ำพุ่งออกมาจากใต้ลานหิน\n\n🪨 ลักษณะทางธรณีวิทยา:\nเป็นลานหินทรายที่อยู่ในหมวดหินภูพาน อายุประมาณ 110 ล้านปี มีความสูงประมาณ 5 เมตร แสดงลักษณะกุมภลักษณ์กระจายอยู่ทั่วบริเวณ เกิดจากกระบวนการของน้ำวนตัวกลิ้งก้อนกรวดกัดกร่อนหินเป็นวงกลมขนาด 10-100 เซนติเมตร และแสดงลักษณะหินเป็นคลื่น\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nติดป้ายสื่อความหมายทางธรณีวิทยาเรื่องน้ำไหลลอดแผ่นหินเพื่อสร้างความรู้และแรงดึงดูดแก่นักท่องเที่ยว",
      en: "Cascading step-waterfall in the deep forest."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียส",
      en: "Cretaceous Period"
    },
    rockFormation: {
      th: "หินทราย - หมวดหินภูพาน",
      en: "Sandstone - หมวดหินภูพาน"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "ช่วงเวลาที่เหมาะสม ฤดูน้ำลด (พ.ย. - พ.ค.)",
        en: "Best season: Nov - May"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["🅿️ ลานจอดรถ"],
    warnings: [],
    isHighlight: false,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ น้ำตกห้วยนาเมืองใหญ่", en: "Huai Na Mueang Yai Waterfall Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-KH-33',
    name: {
      th: "น้ำตกห้วยพอก",
      en: "Huai Pok Waterfall"
    },
    amphoe: 'khong-chiam',
    category: 'nature',
    coords: { lat: 15.55, lng: 105.42 },
    elevation: 120,
    image: './assets/geosites/huai-pok-waterfall.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nบริเวณศูนย์บริการนักท่องเที่ยวผาชะนะได อ.โขงเจียม จ.อุบลราชธานี\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nน้ำตกหินทรายขนาดเล็กบนลำห้วยพอก มีสายน้ำไหลผ่านลานหินทรายร่มรื่น เป็นจุดพักผ่อนของนักท่องเที่ยวที่เดินทางมาผาชะนะได\n\n🪨 ลักษณะทางธรณีวิทยา:\nลานหินทรายหมวดหินภูพาน (Phu Phan Formation) แสดงลักษณะรอยริ้วคลื่น (Ripple marks) และกุมภลักษณ์ขนาดเล็ก\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nปรับปรุงภูมิทัศน์และทำป้ายสื่อความหมายนิเวศวิทยาทางน้ำ",
      en: "Hidden waterfall located near the Pha Chana Dai viewpoint."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียส",
      en: "Cretaceous Period"
    },
    rockFormation: {
      th: "หินทราย - หมวดหินภูพาน",
      en: "Sandstone - หมวดหินภูพาน"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "ช่วงเวลาที่เหมาะสม ฤดูน้ำลด (พ.ย. - พ.ค.)",
        en: "Best season: Nov - May"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["🅿️ ลานจอดรถ"],
    warnings: [],
    isHighlight: false,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ น้ำตกห้วยพอก", en: "Huai Pok Waterfall Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-KH-34',
    name: {
      th: "น้ำตกคิด",
      en: "Kid Waterfall"
    },
    amphoe: 'khong-chiam',
    category: 'nature',
    coords: { lat: 15.55, lng: 105.42 },
    elevation: 120,
    image: './assets/geosites/song-si-river.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nอยู่ที่บ้านซะซอม ต.นาโพธิ์กลาง อ.โขงเจียม จ.อุบลราชธานี พิกัด (WGS84) 0561918 E 1725421 N ระวางบ้านนาโพธิ์กลาง (6140 III) ขอบเขตยาว 30 เมตร\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nเป็นน้ำตกที่ไหลผ่านหน้าผาหินทราย จัดว่าเป็นน้ำตกเล็กๆ อยู่ติดถนนดิน คมนาคมค่อนข้างสะดวก จะมีน้ำเฉพาะช่วงฤดูฝนเท่านั้น\n\n🪨 ลักษณะทางธรณีวิทยา:\nพื้นที่เป็นหินทรายที่อยู่ในหมวดหินภูพาน อายุประมาณ 110 ล้านปี น้ำตกลักษณะเป็นหน้าผาหินทรายที่มีความสูงประมาณ 5 เมตร บริเวณโดยรอบพบกุมภลักษณ์ และลักษณะการคายความร้อนของหินทราย (sand crack) ซึ่งเป็นจุดเด่นด้านธรณีวิทยาที่น่าสนใจ\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nพัฒนาเป็นจุดแวะพักระหว่างเส้นทางไปผาชะนะได จัดทำป้ายสื่อความหมายให้ความรู้เรื่อง sand crack",
      en: "Small waterfall along the hiking trail."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียส",
      en: "Cretaceous Period"
    },
    rockFormation: {
      th: "หินทราย - หมวดหินภูพาน",
      en: "Sandstone - หมวดหินภูพาน"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "ช่วงเวลาที่เหมาะสม ฤดูน้ำลด (พ.ย. - พ.ค.)",
        en: "Best season: Nov - May"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["🅿️ ลานจอดรถ"],
    warnings: [],
    isHighlight: false,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ น้ำตกคิด", en: "Kid Waterfall Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-KH-36',
    name: {
      th: "เสาพญาครุฑ",
      en: "Sao Phaya Krut Pillar"
    },
    amphoe: 'khong-chiam',
    category: 'geomorphology',
    coords: { lat: 15.55, lng: 105.42 },
    elevation: 120,
    image: './assets/geosites/phu-an-ma-mountain.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nบริเวณลานหินทรายใกล้ผาแต้ม อ.โขงเจียม จ.อุบลราชธานี พิกัด (WGS84) 0558800 E 1704200 N\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nโขดหินทรายธรรมชาติที่มีรูปทรงชะลูดสูงคล้ายพญาครุฑกางพัด ตั้งโดดเด่นกลางลานหินทราย เป็นจุดถ่ายภาพและศึกษาธรณีสัณฐาน\n\n🪨 ลักษณะทางธรณีวิทยา:\nเสาหินทรายหมวดหินภูพาน เกิดจากการผุพังกัดกร่อนทางธรรมชาติ (Differential weathering) ทำให้ส่วนฐานผุกร่อนมากกว่าส่วนยอด\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nทำป้ายสื่อความหมายและจัดเส้นทางเดินชมอย่างเป็นระเบียบ",
      en: "Sandstone pillar oddly shaped like a spreading Garuda."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียส",
      en: "Cretaceous Period"
    },
    rockFormation: {
      th: "หินทราย - หมวดหินภูพานทับเสาขัว",
      en: "Sandstone - หมวดหินภูพานทับเสาขัว"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "ช่วงเวลาที่เหมาะสม ฤดูน้ำลด (พ.ย. - พ.ค.)",
        en: "Best season: Nov - May"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["🅿️ ลานจอดรถ"],
    warnings: [],
    isHighlight: false,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ เสาพญาครุฑ", en: "Sao Phaya Krut Pillar Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-KH-37',
    name: {
      th: "ผาเมย",
      en: "Pha Muei Cliff"
    },
    amphoe: 'khong-chiam',
    category: 'geomorphology',
    coords: { lat: 15.55, lng: 105.42 },
    elevation: 120,
    image: './assets/geosites/pha-mey.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nอยู่ในเขตอุทยานแห่งชาติผาแต้ม อ.โขงเจียม จ.อุบลราชธานี พิกัด (WGS84) 0564500 E 1716200 N\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nหน้าผาหินทรายคู่กับผาเจ๊ก แสดงชั้นหินทรายหมวดหินภูพานวางตัวสวยงาม มีเพิงหินและเส้นทางศึกษาธรรมชาติริมหน้าผา\n\n🪨 ลักษณะทางธรณีวิทยา:\nหน้าผาสูงชันริมแม่น้ำโขง เกิดจากการยกตัวของแผ่นดินและรอยเหลื่อมซ้อน แสดงการแทรกสลับชั้นหินทรายและหินดินดาน\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nพัฒนาเส้นทางศึกษาธรรมชาติริมหน้าผาร่วมกับผาเจ๊ก",
      en: "Cliff extending from Pha Taem with interesting geological marks."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียส",
      en: "Cretaceous Period"
    },
    rockFormation: {
      th: "หินทราย - หมวดหินภูพาน",
      en: "Sandstone - หมวดหินภูพาน"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "ช่วงเวลาที่เหมาะสม ฤดูน้ำลด (พ.ย. - พ.ค.)",
        en: "Best season: Nov - May"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["🅿️ ลานจอดรถ"],
    warnings: [],
    isHighlight: false,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ ผาเมย", en: "Pha Muei Cliff Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-KH-38',
    name: {
      th: "หาดวิจิตรา",
      en: "Had Vichitra Beach"
    },
    amphoe: 'khong-chiam',
    category: 'nature',
    coords: { lat: 15.55, lng: 105.42 },
    elevation: 120,
    image: './assets/geosites/had-vichitra-beach.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nอยู่ ต.ห้วยไผ่ อ.โขงเจียม จ.อุบลราชธานี พิกัด (WGS84) 0556840 E 1702153 N ระวางบ้านหนองผือ (6139 IV) ขอบเขตยาว 1,000 เมตร\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nเป็นชายหาดทรายขาวสะอาดริมแม่น้ำโขง เหมาะสำหรับเป็นที่พักผ่อนและท่องเที่ยวชมวิวที่สวยงาม เกิดจากการสะสมตัวของตะกอนแม่น้ำโขง\n\n🪨 ลักษณะทางธรณีวิทยา:\nเป็นพื้นที่งอกออกมาจากแผ่นดิน เกิดจากกระบวนการสะสมตัวของตะกอนทรายแม่น้ำโขง แสดงลักษณะธรณีสัณฐานของแม่น้ำที่สวยงาม\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nทำป้ายเตือนบริเวณที่มีความลาดชันสูงและลึก เพื่อป้องกันอันตรายจากการจมน้ำ และสร้างป้ายสื่อความหมายกระบวนการสะสมตัวของตะกอนทราย",
      en: "White sandy beach along the Mun river before it joins the Mekong."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียส",
      en: "Cretaceous Period"
    },
    rockFormation: {
      th: "ตะกอนทราย - ตะกอนน้ำพา",
      en: "ตะกอนทราย - ตะกอนน้ำพา"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "ช่วงเวลาที่เหมาะสม ฤดูน้ำลด (พ.ย. - พ.ค.)",
        en: "Best season: Nov - May"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["🅿️ ลานจอดรถ"],
    warnings: [],
    isHighlight: false,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ หาดวิจิตรา", en: "Had Vichitra Beach Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-KH-39',
    name: {
      th: "แก่งพิสมัย",
      en: "Pitsamai Rapids"
    },
    amphoe: 'khong-chiam',
    category: 'geomorphology',
    coords: { lat: 15.55, lng: 105.42 },
    elevation: 120,
    image: './assets/geosites/pitsamai-rapids.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nบริเวณริมฝั่งแม่น้ำโขง ใกล้กับหาดวิจิตรา ต.ห้วยไผ่ อ.โขงเจียม จ.อุบลราชธานี\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nแก่งหินทรายโผล่กลางลำน้ำโขง ใกล้กับหาดวิจิตรา สายน้ำกัดเซาะหินเกิดเป็นโขดหินรูปร่างแปลกตางดงาม เป็นจุดชมบั้งไฟพญานาคยามออกพรรษา\n\n🪨 ลักษณะทางธรณีวิทยา:\nเกิดจากการกัดกร่อนของทางน้ำในชั้นหินทราย ทำให้เกิดโขดหินรูปแบบต่างๆ ในแม่น้ำโขง\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nจัดทำเส้นทางท่องเที่ยวเชื่อมโยงกับหาดวิจิตราและจุดชมบั้งไฟพญานาค",
      en: "River rapids featuring beautiful rock formations in flowing water."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียส",
      en: "Cretaceous Period"
    },
    rockFormation: {
      th: "หินทราย - หมวดหินภูพาน",
      en: "Sandstone - หมวดหินภูพาน"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "ช่วงเวลาที่เหมาะสม ฤดูน้ำลด (พ.ย. - พ.ค.)",
        en: "Best season: Nov - May"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["🅿️ ลานจอดรถ"],
    warnings: [],
    isHighlight: false,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ แก่งพิสมัย", en: "Pitsamai Rapids Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-KH-40',
    name: {
      th: "โบกแก่งสร้อย",
      en: "Bok Keang Soi Pothole"
    },
    amphoe: 'khong-chiam',
    category: 'geomorphology',
    coords: { lat: 15.55, lng: 105.42 },
    elevation: 120,
    image: './assets/geosites/huai-na-mueang-yai-waterfall.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nอยู่ที่บ้านท่าล้ง ต.ห้วยไผ่ อ.โขงเจียม จ.อุบลราชธานี พิกัด (WGS84) 0563959 E 1708439 N ระวางบ้านหนองผือ (6139 IV) ขอบเขตยาว 1,000 เมตร\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nชาวบ้านบริเวณนั้นตั้งชื่อว่า \"เก้าพันโบก\" เป็นพื้นที่ที่มีโบกจำนวนมากนับหลายพันโบก ด้านหลังจะเห็นหน้าผาของผาเจ๊กและผาเมยเป็นที่โดดเด่นสวยงามมาก\n\n🪨 ลักษณะทางธรณีวิทยา:\nเป็นเนินหินทรายที่มีแม่น้ำโขงไหลโอบล้อมลักษณะคล้ายรูปเลนส์ อยู่ในหมวดหินเสาขัว อายุประมาณ 120 ล้านปี พบกุมภลักษณ์หลากหลายรูปทรงกระจายอยู่ทั่วไปขนาด 15 เซนติเมตร - 7 เมตร\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nพัฒนาเป็นจุดท่องเที่ยวทางเรือของอุทยาน (Geopark Boat) และศึกษาเส้นทางเดินเท้าเชื่อมโยงผาเจ๊ก-ผาเมย",
      en: "Small clusters of potholes near Soi Sawan Waterfall."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียส",
      en: "Cretaceous Period"
    },
    rockFormation: {
      th: "หินทราย - หมวดหินภูพาน",
      en: "Sandstone - หมวดหินภูพาน"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "ช่วงเวลาที่เหมาะสม ฤดูน้ำลด (พ.ย. - พ.ค.)",
        en: "Best season: Nov - May"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["🅿️ ลานจอดรถ"],
    warnings: [],
    isHighlight: false,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ โบกแก่งสร้อย", en: "Bok Keang Soi Pothole Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-SI-15',
    name: {
      th: "แก่งตะนะ",
      en: "Kaeng Tana Rapids"
    },
    amphoe: 'sirindhorn',
    category: 'geomorphology',
    coords: { lat: 15.295, lng: 105.466 },
    elevation: 120,
    image: './assets/geosites/kaeng-tana-rapids.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nอุทยานแห่งชาติแก่งตะนะ อ.สิรินธร จ.อุบลราชธานี พิกัด (WGS84) 0551200 E 1690800 N\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nแก่งหินทรายกลางแม่น้ำมูลที่ใหญ่ที่สุด มีสายน้ำเชี่ยวไหลผ่านแก่งหินทรายในหมวดหินโคกกรวด กลางแก่งมีดอนตะนะและสะพานแขวนชมวิว\n\n🪨 ลักษณะทางธรณีวิทยา:\nประกอบด้วยหินทรายและหินทรายแป้งหมวดหินโคกกรวด (Khok Kruat Formation) สายน้ำกัดเซาะหินเกิดเป็นโขดหินและถ้ำใต้ผิวน้ำ\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nได้รับการดูแลโดยอุทยานแห่งชาติแก่งตะนะ มีสะพานแขวนและป้ายสื่อความหมายธรรมชาติ",
      en: "The largest and most beautiful rock rapids in the Mun River. Massive sandstone barriers traverse the river, creating small cascades and strong currents."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียส",
      en: "ยุคครีเทเชียส"
    },
    rockFormation: {
      th: "หินทรายและหินทรายแป้ง - หมวดหินโคกกรวด (Khok Kruat Formation)",
      en: "หินทรายและหินทรายแป้ง - หมวดหินโคกกรวด (Khok Kruat Formation)"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "08:00 - 18:00",
        en: "08:00 - 18:00"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["ที่จอดรถ","บ้านพัก","ศูนย์บริการ","ห้องน้ำ"],
    warnings: [{"th":"ห้ามลงเล่นน้ำในบริเวณแก่งเด็ดขาดเนื่องจากกระแสน้ำเชี่ยวและมีน้ำวน","en":"ห้ามลงเล่นน้ำในบริเวณแก่งเด็ดขาดเนื่องจากกระแสน้ำเชี่ยวและมีน้ำวน"}],
    isHighlight: false,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ แก่งตะนะ", en: "Kaeng Tana Rapids Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-SI-43',
    name: {
      th: "ถ้ำพระ",
      en: "Tham Phra Cave"
    },
    amphoe: 'sirindhorn',
    category: 'geomorphology',
    coords: { lat: 15.3, lng: 105.47 },
    elevation: 120,
    image: './assets/geosites/tham-phra-cave.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nอยู่ในบริเวณอุทยานแห่งชาติแก่งตะนะ ต.คำเขื่อนแก้ว อ.สิรินธร จ.อุบลราชธานี พิกัด (WGS84) 0552141 E 1691480 N ระวางอำเภอศรีเมืองใหม่ (6039 I) ขอบเขตยาว 50 เมตร\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nเป็นที่เคยเสด็จของพระเจ้าจิตเสน (กษัตริย์ขอม) ในสมัยประมาณ 200-300 ปีที่แล้ว ภายในถ้ำมีเตียงนอนหินของพระเจ้าจิตเสน ศิลาจารึก และฐานโยนี (จำลอง) บริเวณทางเดินมีน้ำตกรากไทรไหลซึมตลอดปี\n\n🪨 ลักษณะทางธรณีวิทยา:\nเป็นถ้ำหินทรายขนาดกว้าง 15 เมตร ยาว 20 เมตร สูง 4 เมตร ชั้นหินที่อ่อนกว่าได้ผุพังออกไป จึงเกิดลักษณะเป็นโพรงถ้ำขึ้น\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nจัดปรับภูมิทัศน์ วางศิลาจารึกและฐานรูปเคารพให้เหมาะสม ติดป้ายสื่อความหมายทางประวัติศาสตร์และธรณีวิทยา",
      en: "A large sandstone rock shelter housing ancient Buddha statues, revered as a sacred site by locals."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียส",
      en: "ยุคครีเทเชียส"
    },
    rockFormation: {
      th: "หินทราย (Sandstone) - หมวดหินเสาขัว",
      en: "หินทราย (Sandstone) - หมวดหินเสาขัว"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "08:00 - 16:30",
        en: "08:00 - 16:30"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["ไม่มี"],
    warnings: [{"th":"สำรวมกิริยาและไม่จุดธูปเทียนในปริมาณมากเกินไปเพื่อรักษาสภาพหิน","en":"สำรวมกิริยาและไม่จุดธูปเทียนในปริมาณมากเกินไปเพื่อรักษาสภาพหิน"}],
    isHighlight: false,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ ถ้ำพระ", en: "Tham Phra Cave Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-SI-44',
    name: {
      th: "น้ำตกตาดโตน",
      en: "Tat Ton Waterfall"
    },
    amphoe: 'sirindhorn',
    category: 'nature',
    coords: { lat: 15.31, lng: 105.45 },
    elevation: 120,
    image: './assets/geosites/huai-pok-waterfall.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nบริเวณ อ.สิรินธร จ.อุบลราชธานี พิกัด (WGS84) 0548500 E 1688500 N\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nน้ำตกหินทรายขนาดเล็กบนห้วยตาดโตน สายน้ำไหลผ่านตาดหินกว้างขวาง ร่มรื่นด้วยป่าไม้เบญจพรรณ\n\n🪨 ลักษณะทางธรณีวิทยา:\nตาดหินทรายในหมวดหินโคกกรวด เกิดจากกระแสน้ำพัดพาสะสมตัวและกัดกร่อนชั้นหินทางน้ำ\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nพัฒนาเป็นจุดพักผ่อนเล่นน้ำของชุมชนและนักท่องเที่ยว",
      en: "A medium-sized waterfall cascading over a wide sandstone plateau. The water is clear and suitable for swimming in designated areas."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียส",
      en: "ยุคครีเทเชียส"
    },
    rockFormation: {
      th: "หินทราย (Sandstone) - หมวดหินภูพาน",
      en: "หินทราย (Sandstone) - หมวดหินภูพาน"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "08:00 - 17:00",
        en: "08:00 - 17:00"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["ที่จอดรถ","ร้านอาหาร"],
    warnings: [{"th":"รักษาความสะอาดบริเวณแอ่งน้ำ","en":"รักษาความสะอาดบริเวณแอ่งน้ำ"}],
    isHighlight: false,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ น้ำตกตาดโตน", en: "Tat Ton Waterfall Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-SI-45',
    name: {
      th: "ภูพร้าว (วัดเรืองแสง)",
      en: "Phu Phrao Mountain"
    },
    amphoe: 'sirindhorn',
    category: 'culture',
    coords: { lat: 15.146, lng: 105.467 },
    elevation: 120,
    image: './assets/geosites/phu-phrao-mountain.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nวัดสิรินธรวรารามภูพร้าว ต.ช่องเม็ก อ.สิรินธร จ.อุบลราชธานี\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nเนินเขาหินทรายที่เป็นที่ตั้งของวัดสิรินธรวรารามภูพร้าว โดดเด่นด้วยจิตรกรรมต้นกัลปพฤกษ์เรืองแสงในยามค่ำคืนบนผนังอุโบสถ และเป็นจุดชมวิว panoramic สองฝั่งแม่น้ำโขงและอ่างเก็บน้ำเขื่อนสิรินธร\n\n🪨 ลักษณะทางธรณีวิทยา:\nตั้งอยู่บนเนินเขาหินทรายหมวดหินโคกกรวด (Khok Kruat Formation) อายุประมาณ 100 ล้านปี มองเห็นทัศนียภาพธรณีสัณฐานของอ่างเก็บน้ำและทิวเขาชายแดนไทย-ลาว\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nจุดท่องเที่ยวทางศาสนาและจุดชมทัศนียภาพยามค่ำคืนที่ได้รับความนิยมสูง",
      en: "A hill hosting the famous \"Glowing Temple\" (Wat Sirindhorn Wararam). It features a fluorescent Tree of Life art piece and offers panoramic views of the Sirindhorn Dam."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียส",
      en: "ยุคครีเทเชียส"
    },
    rockFormation: {
      th: "หินทราย (Sandstone) - หมวดหินพระวิหาร",
      en: "หินทราย (Sandstone) - หมวดหินพระวิหาร"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "06:00 - 20:00 (ชมเรืองแสงช่วงค่ำ)",
        en: "06:00 - 20:00 (ชมเรืองแสงช่วงค่ำ)"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["ที่จอดรถลานกว้าง","ห้องน้ำ"],
    warnings: [{"th":"แต่งกายสุภาพ สำรวมกิริยา และไม่ทำลายงานพุทธศิลป์","en":"แต่งกายสุภาพ สำรวมกิริยา และไม่ทำลายงานพุทธศิลป์"}],
    isHighlight: true,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ ภูพร้าว (วัดเรืองแสง)", en: "Phu Phrao Mountain Stamp" },
      checkInRadiusMeters: 300
    }
  },
  {
    id: 'GS-SI-46',
    name: {
      th: "แก่งแซะน้อย",
      en: "Kaeng Se Noi Rapids"
    },
    amphoe: 'sirindhorn',
    category: 'geomorphology',
    coords: { lat: 15.2, lng: 105.35 },
    elevation: 120,
    image: './assets/geosites/pha-mey.jpg',
    imageCredit: "Ubon Geopark Archive",
    description: {
      th: "📍 ที่ตั้งและการเข้าถึง:\nลำน้ำในเขต อ.สิรินธร จ.อุบลราชธานี\n\n📌 ลักษณะเด่นและคุณค่าทางธรณีวิทยา:\nแก่งหินในลำน้ำที่มีความเงียบสงบ ล้อมรอบด้วยธรรมชาติป่าไม้เบญจพรรณและทิวทัศน์สายน้ำ เหมาะสำหรับการพักผ่อนหย่อนใจและศึกษาธรรมชาติ\n\n🪨 ลักษณะทางธรณีวิทยา:\nโขดหินทรายหมวดหินโคกกรวดที่ถูกสายน้ำกัดกร่อนเป็นลานหินและตาดหินกว้าง แสดงรอยริ้วคลื่นโบราณ (Ripple marks)\n\n🌿 แนวทางการพัฒนาและการท่องเที่ยว:\nอนุรักษ์ธรรมชาติและจัดเส้นทางท่องเที่ยวเชิงนิเวศ",
      en: "Tranquil rock rapids in a stream surrounded by lush forests, ideal for relaxation."
    },
    geologicalAge: {
      th: "ยุคครีเทเชียส",
      en: "ยุคครีเทเชียส"
    },
    rockFormation: {
      th: "หินทราย (Sandstone) - หมวดหินโคกกรวด",
      en: "หินทราย (Sandstone) - หมวดหินโคกกรวด"
    },
    bestSeason: {
      startMonth: 11,
      endMonth: 5,
      note: {
        th: "เปิดตลอดเวลา",
        en: "เปิดตลอดเวลา"
      }
    },
    difficulty: 'moderate',
    estimatedTime: { th: '1 - 2 ชั่วโมง', en: '1 - 2 Hours' },
    facilities: ["ไม่มี"],
    warnings: [{"th":"อนุรักษ์สิ่งแวดล้อมริมลำน้ำ","en":"อนุรักษ์สิ่งแวดล้อมริมลำน้ำ"}],
    isHighlight: false,
    passportStamp: {
      icon: '🪨',
      stampTitle: { th: "ตราประทับ แก่งแซะน้อย", en: "Kaeng Se Noi Rapids Stamp" },
      checkInRadiusMeters: 300
    }
  },
];

export const HIGHLIGHT_GEOSITES = GEOSITES.filter(g => g.isHighlight);

