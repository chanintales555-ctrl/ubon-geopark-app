import fs from 'fs';
import { getDocument } from 'pdfjs-dist/build/pdf.mjs';

const buf = new Uint8Array(fs.readFileSync('รายงานการสำรวจแหล่งธรณีวิทยาอุบลฯ.pdf'));
const doc = await getDocument({data: buf}).promise;
console.log('pages:', doc.numPages);

let txt = '';
for (let i = 1; i <= doc.numPages; i++) {
  const pg = await doc.getPage(i);
  const c = await pg.getTextContent();
  const s = c.items.map(x => x.str).join(' ');
  txt += '--- PAGE ' + i + ' ---\n' + s + '\n\n';
}

fs.writeFileSync('_pdf_text.txt', txt, 'utf8');
console.log('Done, length:', txt.length);
