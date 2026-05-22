const SHEET_ID = 'ชีต1';
const HEADERS = ['id','date','supervisor','teacher','subject','level','score','manage','learner','innovation','measure','classroom','comment'];
function setup(){const sh=SpreadsheetApp.openById(SHEET_ID).getSheets()[0]; if(sh.getLastRow()===0){sh.appendRow(HEADERS);} }
function doGet(){setup(); const sh=SpreadsheetApp.openById(SHEET_ID).getSheets()[0]; const values=sh.getDataRange().getValues(); const heads=values.shift(); const data=values.filter(r=>r.join('')!=='').map(r=>{let o={}; heads.forEach((h,i)=>o[h]=r[i]); return o;}); return output(data);}
function doPost(e){setup(); const sh=SpreadsheetApp.openById(SHEET_ID).getSheets()[0]; const d=JSON.parse(e.postData.contents); sh.appendRow(HEADERS.map(h=>d[h] || '')); return output({status:'success'});}
function output(obj){return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);}
