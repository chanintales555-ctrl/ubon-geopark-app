import { Geoproduct } from '../types';

export const GEOPRODUCTS: Geoproduct[] = [
  {
    id: 'GP-01',
    name: {
      th: 'ผ้าฝ้ายลายผาแต้ม (กลุ่มทอผ้าบ้านกุ่ม)',
      en: 'Ban Kum Prehistoric Art Cotton Weaving'
    },
    category: 'textile',
    amphoe: 'khong-chiam',
    villageName: { th: 'บ้านกุ่ม ต.ห้วยไผ่ อ.โขงเจียม', en: 'Ban Kum, Huay Phai, Khong Chiam' },
    image: './assets/products/pha-lai-pha-taem.jpg',
    description: {
      th: 'ผ้าทอมือเอกลักษณ์เฉพาะอุทยานธรณี นำลวดลายภาพเขียนสีโบราณ 3,000 ปีผาแต้ม (เช่น รูปปลาบึก สุ่มจับปลา) มาประยุกต์ทอบนผืนผ้าด้วยสีย้อมธรรมชาติจากเปลือกไม้ท้องถิ่น',
      en: 'Handwoven cotton fabrics featuring 3,000-year-old Pha Taem prehistoric rock art motifs, dyed with local tree bark extracts.'
    },
    priceRange: '350 - 2,500 บาท',
    contactPhone: '081-234-5678',
    contactFacebook: 'กลุ่มทอผ้าบ้านกุ่ม ผาแต้ม'
  },
  {
    id: 'GP-02',
    name: {
      th: 'ผ้ากาบบัวอุบลราชธานี',
      en: 'Ubon Ratchathani Kabbua Woven Silk'
    },
    category: 'textile',
    amphoe: 'khong-chiam',
    villageName: { th: 'วิสาหกิจชุมชนทอผ้าอุบลราชธานี', en: 'Ubon Woven Silk Community Enterprise' },
    image: './assets/products/pha-kab-bua.jpg',
    description: {
      th: 'ผ้าเอกลักษณ์ประจำจังหวัดอุบลราชธานี ผสาน 5 เทคนิคการทอมือโบราณ (มัดหมี่, มัดมี่ตีนกลอน, ขิด, ย้อมสีธรรมชาติ) งดงามประณีตระดับมรดกทางวัฒนธรรม',
      en: 'The signature traditional heritage fabric of Ubon Ratchathani combining 5 historic hand-weaving techniques.'
    },
    priceRange: '850 - 6,000 บาท',
    contactPhone: '045-244-100',
    contactFacebook: 'OTOP ผ้ากาบบัวอุบล'
  },
  {
    id: 'GP-03',
    name: {
      th: 'ปลาแดดเดียวแม่น้ำโขง (กลุ่มวิสาหกิจชุมชนบ้านผา)',
      en: 'Ban Pha Sun-Dried Mekong River Fish'
    },
    category: 'food',
    amphoe: 'pho-sai',
    villageName: { th: 'บ้านผาชัน ต.เหล่างาม อ.โพธิ์ไทร', en: 'Ban Pha Chan, Pho Sai' },
    image: './assets/products/pla-daed-diao.jpg',
    description: {
      th: 'ผลิตภัณฑ์ถนอมอาหารแปรรูปปลาธรรมชาติจากแม่น้ำโขง (ปลาคัง, ปลาบึก, ปลาคังหมักสมุนไพร) สะอาด ปลอดภัย ปราศจากสารกันบูด',
      en: 'Traditional sun-dried freshwater fish harvested directly from Mekong River currents, seasoned with local herbs.'
    },
    priceRange: '150 - 400 บาท/กก.',
    contactPhone: '089-987-6543'
  },
  {
    id: 'GP-04',
    name: {
      th: 'ผลิตภัณฑ์หินทรายแกะสลักจำลอง',
      en: 'Carved Sandstone Geopark Miniatures'
    },
    category: 'handicraft',
    amphoe: 'pho-sai',
    villageName: { th: 'กลุ่มหัตถกรรมหินทรายบ้านโป่งเป้า', en: 'Ban Pong Pao Stone Crafters' },
    image: './assets/products/handicraft.jpg',
    description: {
      th: 'ของที่ระลึกหัตถกรรมแกะสลักหินทรายรูปสามพันโบก เสาเฉลียง และโมเดลฟอสซิลไดโนเสาร์ ฝีมือช่างชุมชนท้องถิ่น',
      en: 'Handcrafted sandstone souvenirs carving mini Sam Phan Bok potholes and dinosaur fossils.'
    },
    priceRange: '100 - 800 บาท',
    contactPhone: '086-111-2233'
  },
  {
    id: 'GP-05',
    name: {
      th: 'บริการเรือนำเที่ยวสามพันโบก-หาดสลึง',
      en: 'Sam Phan Bok Eco Boat Tour Service'
    },
    category: 'service',
    amphoe: 'pho-sai',
    villageName: { th: 'ชมรมเรือนำเที่ยวหาดสลึง อ.โพธิ์ไทร', en: 'Hat Salueng Boat Tourism Club' },
    image: './assets/geosites/sam-phan-bok.jpg',
    description: {
      th: 'บริการเรือหางยาวพาชมสามพันโบก ปากบ้อง ผาสามหมื่นรู พร้อมมัคคุเทศก์น้อยท้องถิ่นบอกเล่าเรื่องราวธรณีวิทยา',
      en: 'Local longtail boat tours navigating Mekong rapids, potholes, and gorges guided by local youth geoguides.'
    },
    priceRange: '500 - 1,000 บาท/ลำ (1-8 คน)',
    contactPhone: '081-999-8877'
  },
  {
    id: 'GP-06',
    name: {
      th: 'ปลาแก้วตากแห้ง เขื่อนสิรินธร',
      en: 'Sirindhorn Dam Dried Glass Fish'
    },
    category: 'food',
    amphoe: 'sirindhorn',
    villageName: { th: 'กลุ่มแม่บ้านเกษตรกรเขื่อนสิรินธร', en: 'Sirindhorn Dam Women Farmers Group' },
    image: './assets/products/pla-daed-diao.jpg',
    description: {
      th: 'ปลาแก้วตัวเล็กอบแห้งทอดกรอบ รสชาติกลมกล่อม ของฝากขึ้นชื่อจากอ่างเก็บน้ำเขื่อนสิรินธร',
      en: 'Crispy dried miniature glass fish harvested from Sirindhorn reservoir, rich in calcium.'
    },
    priceRange: '100 - 250 บาท/ถุง',
    contactPhone: '084-555-4433'
  }
];
