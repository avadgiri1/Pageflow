const fs=require('fs'),p=require('path');
fs.mkdirSync('www/lib',{recursive:true});
fs.copyFileSync('index.html','www/index.html');fs.copyFileSync('icon.svg','www/icon.svg');
const m=[['pdfjs-dist/build/pdf.min.js','pdf.min.js'],['pdfjs-dist/build/pdf.worker.min.js','pdf.worker.min.js'],['mammoth/mammoth.browser.min.js','mammoth.browser.min.js'],['jszip/dist/jszip.min.js','jszip.min.js'],['xlsx/dist/xlsx.full.min.js','xlsx.full.min.js']];
for(const [s,d] of m)fs.copyFileSync(p.join('node_modules',s),p.join('www/lib',d));
