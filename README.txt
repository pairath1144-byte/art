ระบบนิเทศออนไลน์ โรงเรียนบ้านสากอ - ฉบับสมบูรณ์

ไฟล์หลัก
- index.html : แอพหลัก ใช้งานได้ทั้งคอมและมือถือ
- Code.gs : Google Apps Script สำหรับเชื่อม Google Sheets
- manifest.json / sw.js : รองรับติดตั้งเป็น PWA
- assets/ : โลโก้และรูปประกอบ

วิธีเชื่อม Google Sheets จริง
1) เปิด Google Sheets ที่ให้มา
2) ไปที่ Extensions > Apps Script
3) วางโค้ดจากไฟล์ Code.gs
4) กด Run ฟังก์ชัน setup 1 ครั้ง และอนุญาตสิทธิ์
5) Deploy > New deployment > Web app
6) Execute as: Me / Who has access: Anyone
7) คัดลอก Web App URL
8) เปิดแอพ > ตั้งค่าระบบ > วาง URL > บันทึกการเชื่อมต่อ

รหัสเริ่มต้นหน้า Login: 1234

ฟังก์ชันที่ใช้งานได้
- Dashboard สถิติและกราฟ
- บันทึกการนิเทศ
- ประเมินรายด้าน
- กำหนดแผนการนิเทศ
- รายงานผล พิมพ์ PDF / Export CSV
- ประวัติ ค้นหา ลบข้อมูล
- จัดการผู้ใช้งาน
- ตั้งค่าการเชื่อม Google Sheets
- PWA ใช้งานบนมือถือได้
