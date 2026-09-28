(function () {
  "use strict";

  // Curated Thai copy for this static prototype. Brand and feature names stay
  // consistent with the product vocabulary; unlisted strings remain English.
  var th = {
    "Product": "ผลิตภัณฑ์", "Scouting Service": "บริการวิเคราะห์เกม", "Pricing": "ราคา",
    "Compare SpotScout plans.": "เปรียบเทียบแพ็กเกจ SpotScout",
    "Tag and review each match from one workspace.": "ติดแท็กและทบทวนการแข่งขันในพื้นที่ทำงานเดียว",
    "Tag match events and keep review notes beside the video.": "ติดแท็กเหตุการณ์และจดบันทึกไว้ข้างวิดีโอ",
    "Build a report from tagged events.": "สร้างรายงานจากเหตุการณ์ที่ติดแท็ก",
    "Collect match tags and key moments in a report that coaches can review.": "รวบรวมแท็กและจังหวะสำคัญไว้ในรายงานให้โค้ชทบทวน",
    "Add player tracking": "เพิ่มการติดตามผู้เล่น",
    "with Scout Lab.": "ด้วย Scout Lab",
    "Review player positions, court coverage and movement for sports supported by the selected tools.": "ทบทวนตำแหน่ง พื้นที่การเล่น และการเคลื่อนที่ในกีฬาที่เครื่องมือรองรับ",
    "Map player movement across the court.": "ดูตำแหน่งการเคลื่อนที่ของผู้เล่นบนสนาม",
    "Compare player coverage and activity across court zones.": "เปรียบเทียบพื้นที่และกิจกรรมของผู้เล่นในแต่ละโซนสนาม",
    "Review movement sequences.": "ทบทวนลำดับการเคลื่อนที่",
    "Compare movement paths across a match.": "เปรียบเทียบเส้นทางการเคลื่อนที่ตลอดการแข่งขัน",
    "Start with scouting.": "เริ่มจากการวิเคราะห์เกม",
    "Add spatial analysis.": "เพิ่มการวิเคราะห์ตำแหน่ง",
    "Compare manual review tools with the additional tracking features in Scout Lab.": "เปรียบเทียบเครื่องมือทบทวนเกมด้วยตนเองกับฟีเจอร์ติดตามผู้เล่นใน Scout Lab",
    "Learn the SpotScout workflow.": "เรียนรู้ขั้นตอนการใช้ SpotScout",
    "Guides and training are planned for scouting, video review and match reporting.": "กำลังวางแผนคู่มือและการอบรมเรื่องการวิเคราะห์เกม ทบทวนวิดีโอ และจัดทำรายงาน",
    "Account sign-in · planned": "ระบบบัญชี · อยู่ระหว่างวางแผน",
    "Real account access is not connected in this preview.": "ต้นแบบนี้ยังไม่เชื่อมระบบบัญชีจริง",
    "Device management · planned": "จัดการอุปกรณ์ · อยู่ระหว่างวางแผน",
    "Device registration is not available yet.": "ยังไม่เปิดระบบลงทะเบียนอุปกรณ์",
    "Website payments · not active": "ชำระเงินผ่านเว็บ · ยังไม่เปิด",
    "This preview does not accept payments.": "ต้นแบบนี้ยังไม่รับชำระเงิน",
    "License checks · not connected": "ตรวจสิทธิ์ใช้งาน · ยังไม่เชื่อมต่อ",
    "Download and plan access are not verified yet.": "ยังไม่มีระบบตรวจสอบสิทธิ์ดาวน์โหลดหรือแพ็กเกจ",
    "Learn the scouting": "เรียนรู้ขั้นตอนวิเคราะห์เกม",
    "and review steps.": "และทบทวนวิดีโอ",
    "Planned lessons cover match setup, event tagging, video review and reports.": "บทเรียนที่กำลังวางแผนครอบคลุมการตั้งค่าเกม การติดแท็ก ทบทวนวิดีโอ และรายงาน",
    "Preview Fundamentals": "ดูตัวอย่างบทเรียนพื้นฐาน",
    "Course titles, lesson lengths and progress below are examples. No lessons are available to play yet.": "ชื่อคอร์ส ระยะเวลา และความคืบหน้าเป็นตัวอย่าง ขณะนี้ยังไม่มีบทเรียนให้เล่น",
    "Sign-in is a visual preview. No session is created.": "หน้าตัวอย่างการเข้าสู่ระบบนี้ไม่ได้สร้างเซสชันจริง",
    "Terms and Privacy Policy are not published. This preview does not create an account.": "ยังไม่ได้เผยแพร่ข้อกำหนดและนโยบายความเป็นส่วนตัว ต้นแบบนี้ไม่สร้างบัญชีจริง",
    "No account is saved by this form.": "แบบฟอร์มนี้ไม่ได้บันทึกบัญชี",
    "Support contact will be published at launch": "จะแจ้งช่องทางติดต่อเมื่อเปิดบริการ",
    "Not published yet": "ยังไม่ประกาศ",
    "Support hours and response times will be announced when the service opens.": "จะแจ้งเวลาทำการและเวลาตอบกลับเมื่อเปิดบริการ",
    "Privacy · not published": "นโยบายความเป็นส่วนตัว · ยังไม่เผยแพร่",
    "Terms · not published": "ข้อกำหนดการใช้งาน · ยังไม่เผยแพร่",
    "License · not published": "ข้อตกลงสิทธิ์ใช้งาน · ยังไม่เผยแพร่",
    "Learn": "เรียนรู้", "Support": "ช่วยเหลือ", "Sign in": "เข้าสู่ระบบ",
    "Download": "ดาวน์โหลด", "Get SpotScout": "เลือกใช้ SpotScout", "Download for Windows": "ดาวน์โหลดสำหรับ Windows",
    "Language": "ภาษา", "Switch color theme": "เปลี่ยนธีมสี", "Open navigation": "เปิดเมนูนำทาง",
    "SpotScout Lab — See the Game. Understand More.": "SpotScout Lab — มองเห็นเกม เข้าใจเกมมากขึ้น",
    "Plans & Pricing — SpotScout Lab": "แพ็กเกจและราคา — SpotScout Lab", "Sign in — SpotScout Lab": "เข้าสู่ระบบ — SpotScout Lab",
    "Create an account — SpotScout Lab": "สร้างบัญชี — SpotScout Lab", "Your account — SpotScout Lab": "บัญชีของคุณ — SpotScout Lab",
    "Scouting Service — SpotScout Lab": "บริการวิเคราะห์เกม — SpotScout Lab", "SpotScout Academy — SpotScout Lab": "SpotScout Academy — SpotScout Lab",
    "SpotScout Fundamentals — SpotScout Lab": "พื้นฐาน SpotScout — SpotScout Lab", "Support — SpotScout Lab": "ช่วยเหลือ — SpotScout Lab",
    "Download for Windows — SpotScout Lab": "ดาวน์โหลดสำหรับ Windows — SpotScout Lab",
    "Illustrative prices for prototype planning. Final prices and terms are not confirmed.": "ราคาเป็นตัวอย่างเพื่อวางแผน ยังไม่ยืนยันราคาและเงื่อนไขจำหน่าย",
    "Purchases are not open yet": "ยังไม่เปิดให้ซื้อ",
    "Release not available yet": "ยังไม่มีรุ่นที่เปิดให้ดาวน์โหลด",
    "Release not announced": "ยังไม่ประกาศรุ่นเผยแพร่",
    "Preview only. Account access is not connected. Do not enter a real password.": "หน้าตัวอย่างเท่านั้น ระบบบัญชียังไม่เชื่อมต่อ กรุณาอย่ากรอกรหัสผ่านจริง",
    "Preview only. Account creation and purchases are not connected. Do not enter a real password.": "หน้าตัวอย่างเท่านั้น ระบบสมัครบัญชีและการซื้อยังไม่เชื่อมต่อ กรุณาอย่ากรอกรหัสผ่านจริง",
    "Downloads are not available yet": "ยังไม่เปิดให้ดาวน์โหลด",
    "Review match video, organize tagged events and prepare reports in one desktop workspace.": "ทบทวนวิดีโอการแข่งขัน จัดเหตุการณ์ที่ติดแท็ก และเตรียมรายงานในพื้นที่ทำงานเดียว",
    "When released, the installer will require an account and an active license. Account checks and checkout are not connected yet.": "เมื่อเปิดให้ดาวน์โหลด จะต้องมีบัญชีและสิทธิ์ใช้งานที่ยังไม่หมดอายุ ขณะนี้ระบบบัญชีและการชำระเงินยังไม่เชื่อมต่อ",
    "When released, the installer will require an account and an active license.": "เมื่อเปิดให้ดาวน์โหลด จะต้องมีบัญชีและสิทธิ์ใช้งานที่ยังไม่หมดอายุ",
    "View plan examples ↗": "ดูตัวอย่างแพ็กเกจ ↗",
    "Downloads will require a SpotScout account and an active license. Account, payment and download checks are not connected yet, and no installer is currently available.": "การดาวน์โหลดต้องมีบัญชี SpotScout และสิทธิ์ใช้งานที่ยังไม่หมดอายุ ขณะนี้ระบบบัญชี การชำระเงิน และการตรวจสิทธิ์ยังไม่เชื่อมต่อ และยังไม่มีไฟล์ติดตั้ง",
    "SAMPLE ACCOUNT PREVIEW": "ตัวอย่างหน้าบัญชี",
    "Sample account preview": "ตัวอย่างหน้าบัญชี",
    "Example data for the account portal design.": "ข้อมูลตัวอย่างสำหรับแสดงรูปแบบหน้าบัญชี",
    "Sample account": "บัญชีตัวอย่าง",
    "Example plan and order data; no personal account is connected.": "ข้อมูลแพ็กเกจและคำสั่งบริการเป็นตัวอย่าง ไม่มีบัญชีส่วนบุคคลเชื่อมต่อ",
    "Sample account view. These example details are not linked to a real account.": "ตัวอย่างหน้าบัญชี รายละเอียดเหล่านี้ไม่ได้เชื่อมกับบัญชีจริง",
    "Product screens and sample account details are illustrative. Account access, checkout and downloads are not connected in this preview.": "ภาพหน้าจอและข้อมูลบัญชีเป็นตัวอย่าง ระบบบัญชี การชำระเงิน และดาวน์โหลดไม่ได้เชื่อมต่อในต้นแบบนี้",
    "Review match video, organize tagged events and prepare reports in one desktop workspace.": "ทบทวนวิดีโอการแข่งขัน จัดเหตุการณ์ที่ติดแท็ก และเตรียมรายงานในพื้นที่ทำงานเดียว",
    "01 / A clearer view of the game": "01 / เห็นรายละเอียดของเกมชัดขึ้น",
    "Scroll to explore": "เลื่อนเพื่อดูรายละเอียด",
    "Scroll to explore SpotScout": "เลื่อนเพื่อดู SpotScout",
    "1 frame": "1 เฟรม",
    "12:06 total": "ความยาวรวม 12:06",
    "01—04": "01—04",
    "GAME 02 · 08:17": "เกม 02 · 08:17",
    "Account, payment and download controls are planned for a future release.": "ระบบบัญชี การชำระเงิน และการดาวน์โหลดจะพัฒนาในรุ่นถัดไป",
    "Designed for match review.": "ออกแบบมาเพื่อทบทวนการแข่งขัน",
    "View download status": "ดูสถานะการดาวน์โหลด",
    "SpotScout Lab · Match Review": "SpotScout Lab · ทบทวนการแข่งขัน",
    "EVENTS": "เหตุการณ์",
    "Rally won": "ชนะการตีโต้",
    "PLAYER DATA": "ข้อมูลผู้เล่น",
    "Match Review · Game 04": "ทบทวนการแข่งขัน · เกม 04",
    "GAME 04 · 00:42.18": "เกม 04 · 00:42.18",
    "Attack sequence": "จังหวะบุก",
    "Player movement": "การเคลื่อนที่ของผู้เล่น",
    "Lost point": "เสียแต้ม",
    "Built for Windows.": "สร้างสำหรับ Windows",
    "Choose the sport for your match.": "เลือกชนิดกีฬาของการแข่งขัน",
    "The scouting service page shows the intended request flow. Video transfer and order placement are not connected in this prototype.": "หน้าเว็บแสดงตัวอย่างขั้นตอนบริการ แต่การส่งวิดีโอและคำสั่งบริการยังไม่เชื่อมกับระบบจริง",
    "View download status": "ดูสถานะการดาวน์โหลด",
    "Privacy": "ความเป็นส่วนตัว",
    "SpotScout Lab home": "หน้าหลัก SpotScout Lab",
    "Main navigation": "เมนูหลัก",
    "Mobile navigation": "เมนูสำหรับมือถือ",
    "SpotScout desktop app preview": "ภาพตัวอย่างโปรแกรม SpotScout บนคอมพิวเตอร์",
    "Play preview": "เล่นวิดีโอตัวอย่าง",
    "Billing period": "รอบการชำระเงิน",
    "Explore Quick Scout": "ดูบริการ Quick Scout",
    "Explore advanced analysis": "ดูบริการวิเคราะห์ขั้นสูง",
    "Enter your password": "กรอกรหัสผ่าน",
    "Play lesson": "เล่นบทเรียน",
    "Instagram": "Instagram",
    "YouTube": "YouTube",
    "LinkedIn": "LinkedIn",
    "Scouting review · Match 04": "ทบทวนเกม · เกม 04",
    "Net approach · Won": "เข้าหน้าตาข่าย · ได้แต้ม",
    "Review player positioning and movement for sports and footage supported by the analysis tools.": "ทบทวนตำแหน่งและการเคลื่อนที่ของผู้เล่นในกีฬาและวิดีโอที่เครื่องมือรองรับ",
    "Scouting orders": "คำสั่งบริการวิเคราะห์",
    "COURSE 01 / 07": "คอร์ส 01 / 07",
    "SPOTSCOUT FUNDAMENTALS": "พื้นฐาน SPOTSCOUT",
    "LESSON 01": "บทเรียน 01",
    "INSTALLATION": "การติดตั้ง",
    "LESSON 01 / 08": "บทเรียน 01 / 08",
    "⤢": "⤢",
    "1080p": "1080p",
    "1 frame": "1 เฟรม",
    "Product preview · Match Review": "ภาพตัวอย่างผลิตภัณฑ์ · ทบทวนการแข่งขัน",
    "spotscoutlab.com": "spotscoutlab.com",
    "SpotScout Lab": "SpotScout Lab",
    "Sports performance intelligence": "ระบบวิเคราะห์สมรรถนะกีฬา", "See the Game.": "มองเห็นเกม",
    "Understand More.": "เข้าใจเกมมากขึ้น", "Professional scouting, video analysis and performance intelligence — built for modern sport.": "เครื่องมือวิเคราะห์เกมและวิดีโอสำหรับโค้ชและทีมกีฬา",
    "Download SpotScout": "ดาวน์โหลด SpotScout", "Explore Scout Lab": "ดู Scout Lab",
    "Analyze video faster": "ทบทวนวิดีโอได้เป็นระบบ", "Find deeper insights": "ค้นหารูปแบบการเล่นได้ชัดเจนขึ้น", "Review tags by time": "ดูแท็กตามช่วงเวลา",
    "Present like a pro": "สื่อสารผลวิเคราะห์ได้ชัดเจน", "Badminton · Women’s Singles": "แบดมินตัน · หญิงเดี่ยว",
    "Review session": "หน้าทบทวนเกม", "Game": "เกม", "Timeline": "ไทม์ไลน์",
    "Players": "ผู้เล่น", "Analytics": "การวิเคราะห์", "Reports": "รายงาน", "Settings": "ตั้งค่า",
    "Match review": "ทบทวนการแข่งขัน", "All events": "เหตุการณ์ทั้งหมด", "Analysis notes": "บันทึกวิเคราะห์",
    "REVIEW": "ทบทวนเกม", "Rally 14": "แรลลี 14", "Net approach · Won": "เข้าหน้าตาข่าย · ได้แต้ม",
    "GAME TIMELINE": "ไทม์ไลน์การแข่งขัน", "Events": "เหตุการณ์", "Notes": "บันทึก",
    "Net approach": "เข้าหน้าตาข่าย", "Won": "ได้แต้ม", "Clear": "ลูกโด่ง", "Neutral": "ไม่มีฝ่ายได้เปรียบ",
    "Smash attempt": "จังหวะตบ", "Unforced error": "เสียเอง", "Error": "เสียแต้ม",
    "COURT MAP": "แผนที่สนาม", "RALLIES": "แรลลี", "WIN RATE": "อัตราชนะ",
    "SpotScout for Windows": "SpotScout สำหรับ Windows", "Product preview · Match Review": "ภาพตัวอย่างผลิตภัณฑ์ · หน้าทบทวนเกม",
    "A workspace built for scouts": "พื้นที่ทำงานสำหรับผู้วิเคราะห์เกม", "Scouting starts": "เริ่มวิเคราะห์เกม",
    "with a better view.": "จากภาพที่ชัดเจนขึ้น", "Tag, organize and review games in a focused workspace. Keep every moment connected to the analysis that follows.": "ติดป้ายเหตุการณ์ จัดระเบียบ และทบทวนเกมในพื้นที่เดียว เชื่อมแต่ละจังหวะเข้ากับการวิเคราะห์",
    "ADD EVENT": "เพิ่มเหตุการณ์", "Offense": "เกมรุก", "Defense": "เกมรับ", "Transition": "เปลี่ยนจังหวะ",
    "Set play": "เซตเพลย์", "Create a tag": "สร้างแท็ก", "Scout faster": "วิเคราะห์เกมได้คล่องขึ้น",
    "A workspace built for scouts.": "พื้นที่ทำงานที่ออกแบบมาสำหรับผู้วิเคราะห์เกม", "Tag, organize and analyze games in a clean, powerful interface.": "ติดแท็ก จัดระเบียบ และวิเคราะห์เกมจากหน้าจอเดียว",
    "Explore the workspace": "ดูพื้นที่ทำงาน", "Review every moment": "ทบทวนได้ทุกจังหวะ",
    "Frame-by-frame control.": "ควบคุมวิดีโอได้ทีละเฟรม", "Navigate, tag and review every key moment with precision.": "เลื่อนไปยังจังหวะสำคัญ ติดแท็ก และย้อนดูได้อย่างแม่นยำ",
    "See the timeline": "ดูไทม์ไลน์", "PLAYER REPORT": "รายงานผู้เล่น", "Player #23": "ผู้เล่นหมายเลข 23",
    "Guard · Match 04": "การ์ด · เกมที่ 04", "PTS": "คะแนน", "REB": "รีบาวด์", "AST": "แอสซิสต์",
    "Present what matters": "นำเสนอสิ่งสำคัญ", "Turn analysis into impact.": "สรุปข้อมูลให้โค้ชนำไปใช้ได้",
    "Create clear reports and visualizations to communicate insights.": "จัดทำรายงานและภาพสรุปเพื่อสื่อสารข้อค้นพบจากเกม",
    "Compare plans": "เปรียบเทียบแพ็กเกจ", "Advanced analysis": "การวิเคราะห์ขั้นสูง",
    "Go deeper with": "วิเคราะห์ได้มากขึ้นด้วย", "Scout Lab.": "Scout Lab",
    "Player tracking, heatmaps, court mapping and movement analysis — uncover the full story behind the game.": "ติดตามตำแหน่งผู้เล่น ดูแผนที่ความหนาแน่น และวิเคราะห์การเคลื่อนที่ในสนาม",
    "From the moment": "จากจังหวะเดียว", "to the whole match.": "สู่ภาพรวมทั้งเกม", "A connected analysis workflow": "เชื่อมการวิเคราะห์ตลอดทั้งเกม",
    "PLAYER 03": "ผู้เล่น 03", "01 / Player tracking": "01 / ติดตามผู้เล่น", "Follow every movement.": "ดูการเคลื่อนที่ของผู้เล่น",
    "Track movement and positioning with a clear spatial view.": "แสดงตำแหน่งและเส้นทางการเคลื่อนที่บนผังสนาม",
    "LOW": "ต่ำ", "HIGH": "สูง", "02 / Heatmaps": "02 / แผนที่ความหนาแน่น",
    "See where impact happens.": "ดูพื้นที่ที่มีการเคลื่อนไหว", "Reveal player coverage and activity across the court.": "เปรียบเทียบการเคลื่อนที่และพื้นที่ที่ผู้เล่นครอบคลุม",
    "ATTACK ZONE": "โซนบุก", "03 / Court mapping": "03 / ผังสนาม", "Make space visible.": "เห็นตำแหน่งในสนามได้ชัดเจน",
    "Visualize positioning, zones and team shape.": "แสดงตำแหน่ง โซน และรูปแบบการยืนของทีม",
    "START": "เริ่ม", "END": "จบ", "04 / Movement analysis": "04 / วิเคราะห์การเคลื่อนที่",
    "Understand the pattern.": "ดูรูปแบบการเคลื่อนที่", "Connect movement sequences to tactical behavior.": "เชื่อมลำดับการเคลื่อนที่เข้ากับรูปแบบการเล่น",
    "Scout Lab extends the SpotScout scouting workflow.": "Scout Lab เพิ่มเครื่องมือวิเคราะห์เชิงพื้นที่ให้กับขั้นตอนการทำงานของ SpotScout",
    "See what’s included": "ดูสิ่งที่รวมในแพ็กเกจ", "Choose your level of analysis": "เลือกระดับการวิเคราะห์",
    "One workflow.": "ทำงานในขั้นตอนเดียว", "More ways to see.": "เห็นรายละเอียดของเกมได้มากขึ้น",
    "Start with the essentials, then add deeper performance insight.": "เริ่มจากเครื่องมือวิเคราะห์พื้นฐาน แล้วเพิ่มการวิเคราะห์ตำแหน่งและการเคลื่อนที่",
    "Scouting workspace": "พื้นที่วิเคราะห์เกม", "Build a clear, repeatable scouting workflow from video to report.": "จัดขั้นตอนตั้งแต่วิดีโอ การติดแท็ก ไปจนถึงรายงาน",
    "Manual scouting & tagging": "วิเคราะห์และติดแท็กด้วยตนเอง", "Timeline & video review": "ไทม์ไลน์และทบทวนวิดีโอ",
    "HUD, reports & export": "HUD รายงาน และส่งออกไฟล์", "Advanced tracking analysis": "วิเคราะห์การติดตามขั้นสูง",
    "View Scout": "ดูแพ็กเกจ Scout", "Go further": "เพิ่มเครื่องมือวิเคราะห์", "Advanced performance insight": "การวิเคราะห์สมรรถนะขั้นสูง",
    "Everything in Scout, with spatial tracking and movement analysis.": "รวมเครื่องมือใน Scout พร้อมการติดตามตำแหน่งและวิเคราะห์การเคลื่อนที่",
    "Everything in Scout": "รวมทุกอย่างใน Scout", "Player tracking & heatmaps": "ติดตามผู้เล่นและแผนที่ความหนาแน่น",
    "Court mapping & movement": "ผังสนามและการเคลื่อนที่", "Advanced analytics reports": "รายงานการวิเคราะห์ขั้นสูง",
    "Pricing": "ราคา", "Simple, transparent pricing.": "ราคาและแพ็กเกจ", "Choose the plan that fits your workflow.": "เลือกแพ็กเกจให้เหมาะกับการใช้งานของคุณ",
    "Annual": "รายปี", "Lifetime": "ซื้อขาด", "01 / Individual": "01 / บุคคล", "Essential tools for individual scouts and coaches.": "เครื่องมือพื้นฐานสำหรับโค้ชและผู้วิเคราะห์เกมรายบุคคล",
    "/ year": "/ ปี", "Scouting Workspace": "พื้นที่วิเคราะห์เกม", "Timeline & Tagging": "ไทม์ไลน์และการติดแท็ก",
    "HUD & Reports": "HUD และรายงาน", "Export Video & Data": "ส่งออกวิดีโอและข้อมูล", "1 user · 1 registered device": "1 บัญชี · ลงทะเบียนได้ 1 อุปกรณ์",
    "Get Scout": "เลือกแพ็กเกจ Scout", "1 active device at a time": "เปิดใช้งานได้ครั้งละ 1 อุปกรณ์",
    "FEATURED PLAN": "แพ็กเกจแนะนำ", "MOST RECOMMENDED": "แพ็กเกจแนะนำ", "02 / Advanced": "02 / ขั้นสูง",
    "Review player positioning, court coverage and movement when supported by the selected sport and footage.": "ทบทวนตำแหน่ง พื้นที่การเล่น และการเคลื่อนที่ เฉพาะกีฬาและวิดีโอที่ระบบรองรับ",
    "Advanced analysis tools for serious performance insight.": "เครื่องมือวิเคราะห์ขั้นสูงสำหรับดูตำแหน่งและรูปแบบการเล่น",
    "Player Tracking & Heatmaps": "ติดตามผู้เล่นและแผนที่ความหนาแน่น", "Court Mapping & Movement": "ผังสนามและการเคลื่อนที่",
    "Advanced Reports": "รายงานขั้นสูง", "Up to 2 registered devices": "ลงทะเบียนได้สูงสุด 2 อุปกรณ์", "Get Scout Lab": "เลือกแพ็กเกจ Scout Lab",
    "03 / Organization": "03 / องค์กร", "Team": "Team", "Built for teams, organizations and academies.": "สำหรับทีม องค์กร และสถาบันกีฬา",
    "From ฿29,900": "เริ่มต้น ฿29,900", "Everything in Scout Lab": "รวมทุกอย่างใน Scout Lab", "3 user seats included": "รวม 3 ที่นั่งผู้ใช้",
    "Team management": "จัดการสมาชิกทีม", "Multiple concurrent users": "ผู้ใช้หลายคนใช้งานพร้อมกันได้", "Priority support": "บริการช่วยเหลือลำดับความสำคัญ",
    "Contact Sales": "ติดต่อฝ่ายขาย", "Additional seats available": "ซื้อที่นั่งเพิ่มได้",
    "University and organization licensing includes custom deployment and training options.": "มีตัวเลือกสิทธิ์ใช้งาน การติดตั้ง และการฝึกอบรมสำหรับมหาวิทยาลัยและองค์กร",
    "Talk to our team ↗": "พูดคุยกับทีมงาน ↗", "Learn & support": "เรียนรู้และช่วยเหลือ",
    "Learn. Improve.": "เรียนรู้และพัฒนา", "Get more from SpotScout.": "ใช้ SpotScout ได้เต็มที่ยิ่งขึ้น",
    "From step-by-step guides to instructor-led training, build your skills and get practical results.": "เรียนรู้ผ่านคู่มือและการอบรม เพื่อพัฒนาทักษะการวิเคราะห์เกม",
    "Documentation": "คู่มือ", "Step-by-step manuals and guides.": "คู่มือการใช้งานทีละขั้นตอน", "Video tutorials": "วิดีโอสอนใช้งาน",
    "Learn at your own pace.": "เรียนรู้ได้ตามเวลาของคุณ", "Live training": "อบรมสด", "Join instructor-led sessions.": "เข้าร่วมการอบรมกับผู้สอน",
    "Monthly workshop": "เวิร์กช็อปรายเดือน", "Practice with other analysts.": "ฝึกวิเคราะห์ร่วมกับผู้เข้าร่วมคนอื่น",
    "FAQ": "คำถามที่พบบ่อย", "Answers to common questions.": "คำตอบสำหรับคำถามทั่วไป", "Get help from our team.": "ติดต่อทีมช่วยเหลือ",
    "Visit SpotScout Academy": "ไปที่ SpotScout Academy", "Your learning path": "เส้นทางการเรียนรู้",
    "From your first match": "ตั้งแต่การแข่งขันแรก", "to advanced analysis.": "ไปจนถึงการวิเคราะห์ขั้นสูง",
    "Learn in small steps, build confidence with each match, and keep your workflow moving.": "เรียนรู้ทีละขั้นและนำไปใช้กับการวิเคราะห์แต่ละเกม",
    "Explore the Academy": "ดูบทเรียนทั้งหมด", "Getting started": "เริ่มต้นใช้งาน", "Create a project": "สร้างโปรเจกต์",
    "Scout & tag events": "วิเคราะห์และติดแท็กเหตุการณ์", "Timeline & review": "ไทม์ไลน์และทบทวนเกม",
    "HUD & reports": "HUD และรายงาน", "Tracking & analytics": "การติดตามและวิเคราะห์",
    "Scouting service": "บริการวิเคราะห์เกม", "Need the analysis,": "ต้องการผลวิเคราะห์", "not the software?": "โดยไม่ต้องใช้ซอฟต์แวร์เองหรือไม่?",
    "Send us your match. Our analysts turn your footage into clear, actionable insights.": "ส่งวิดีโอการแข่งขันให้ทีมวิเคราะห์ แล้วรับรายงานที่จัดระเบียบพร้อมใช้งาน",
    "Learn about scouting service": "ดูรายละเอียดบริการวิเคราะห์เกม", "Share the match": "ส่งวิดีโอการแข่งขัน",
    "Drive link or upload": "ลิงก์ Drive หรืออัปโหลด", "Choose analysis": "เลือกรูปแบบวิเคราะห์", "Pick a service level": "เลือกระดับบริการ",
    "We analyze": "ทีมงานวิเคราะห์", "Analyst review": "ผู้วิเคราะห์ตรวจทาน", "Get your report": "รับรายงาน",
    "Video + insights": "วิดีโอและผลวิเคราะห์", "Submit your match": "ส่งข้อมูลการแข่งขัน", "Google Drive link": "ลิงก์ Google Drive",
    "Continue": "ดำเนินการต่อ", "Prototype prices · Quick Scout from ฿4,900 · Advanced from ฿9,900": "ราคาตัวอย่างสำหรับต้นแบบ · Quick Scout เริ่มต้น ฿4,900 · Advanced เริ่มต้น ฿9,900",
    "Quick Scout": "Quick Scout", "Focused analysis": "วิเคราะห์ประเด็นสำคัญ", "for one game.": "สำหรับหนึ่งเกม",
    "Key moments · Highlights · Match summary": "จังหวะสำคัญ · ไฮไลต์ · สรุปการแข่งขัน", "From ฿4,900": "เริ่มต้น ฿4,900",
    "Advanced Analysis": "Advanced Analysis", "Deeper performance": "วิเคราะห์เกม", "insight.": "เชิงลึก", "Tactical breakdown · Tracking · Heatmaps": "แท็กติก · ติดตามตำแหน่ง · แผนที่ความหนาแน่น",
    "From ฿9,900": "เริ่มต้น ฿9,900", "Your account": "บัญชีของคุณ", "Everything": "ข้อมูลทั้งหมด", "in one place.": "รวมไว้ในที่เดียว",
    "Manage your plan, downloads, devices and scouting orders in your personal portal.": "จัดการแพ็กเกจ ดาวน์โหลด อุปกรณ์ และคำสั่งบริการจากบัญชีของคุณ",
    "Explore your account": "ดูตัวอย่างบัญชี", "Overview": "ภาพรวม",
    "Downloads": "ดาวน์โหลด", "Devices": "อุปกรณ์", "Scouting orders": "คำสั่งบริการวิเคราะห์", "Learning": "บทเรียน",
    "MONDAY, FEBRUARY 10, 2027": "วันจันทร์ที่ 10 กุมภาพันธ์ 2027", "Welcome back, Coach.": "ยินดีต้อนรับกลับมา โค้ช",
    "Here’s what’s happening with your account.": "นี่คือตัวอย่างข้อมูลบัญชีของคุณ", "Coach Example": "บัญชีตัวอย่าง",
    "Individual plan": "แพ็กเกจบุคคล", "SUBSCRIPTION": "แพ็กเกจสมาชิก", "Active": "ใช้งานอยู่ · ตัวอย่าง",
    "Renews 10 Feb 2027": "ต่ออายุ 10 ก.พ. 2027 · ตัวอย่าง", "Manage plan ↗": "จัดการแพ็กเกจ ↗",
    "DEVICES": "อุปกรณ์", "Desktop-PC": "คอมพิวเตอร์ตั้งโต๊ะ", "Notebook": "โน้ตบุ๊ก", "Registered": "ลงทะเบียนแล้ว · ตัวอย่าง",
    "Manage devices ↗": "จัดการอุปกรณ์ ↗", "SCOUTING ORDERS": "คำสั่งบริการวิเคราะห์", "open orders": "รายการที่เปิดอยู่",
    "1 completed · 1 processing": "เสร็จแล้ว 1 · กำลังดำเนินการ 1", "1 waiting for review": "รอตรวจสอบ 1", "View orders ↗": "ดูคำสั่งบริการ ↗",
    "DOWNLOADS": "ดาวน์โหลด", "for Windows": "สำหรับ Windows", "Version 1.0 · Latest": "ยังไม่มีรุ่นที่เปิดให้ดาวน์โหลด",
    "Windows 10 / 11": "Windows 10 / 11", "Download ↗": "ดูสถานะดาวน์โหลด ↗", "Continue learning": "เรียนต่อ",
    "SpotScout Fundamentals": "พื้นฐานการใช้ SpotScout", "Lesson 6 of 8 · Scouting a match": "บทที่ 6 จาก 8 · วิเคราะห์การแข่งขัน",
    "Continue course ↗": "เรียนต่อ ↗", "Professional tools deserve professional protection.": "สถานะระบบบัญชีและการชำระเงิน",
    "Secure authentication": "การเข้าสู่ระบบ", "Account access with modern sign-in options.": "ระบบบัญชีจริงยังไม่เชื่อมต่อในต้นแบบนี้",
    "Device access control": "จัดการอุปกรณ์", "Review and revoke registered devices.": "การจัดการอุปกรณ์จะเปิดเมื่อระบบบัญชีพร้อม",
    "Protected payments": "การชำระเงิน", "Checkout handled by trusted providers.": "ยังไม่เปิดรับชำระเงินผ่านเว็บไซต์",
    "Account-based licensing": "สิทธิ์ใช้งานตามบัญชี", "Licenses are assigned to your account.": "ระบบตรวจสอบสิทธิ์ยังไม่เชื่อมต่อ",
    "Built for the desktop.": "ออกแบบมาสำหรับคอมพิวเตอร์", "Designed for real analysis.": "เพื่อการทบทวนการแข่งขัน",
    "Bring your video, scouting notes and performance insight into one dedicated workspace.": "รวมวิดีโอ บันทึกการวิเคราะห์ และข้อมูลการแข่งขันไว้ในพื้นที่ทำงานเดียว",
    "Windows 10": "Windows 10", "Windows 11": "Windows 11", "Version 1.0": "รุ่นยังไม่ประกาศ",
    "System requirements": "ความต้องการระบบ", "Sign in with your SpotScout account after installation.": "เมื่อเปิดดาวน์โหลด จะต้องเข้าสู่ระบบและมีสิทธิ์ใช้งานที่ยังไม่หมดอายุ",
    "See more.": "เห็นมากขึ้น", "Understand more.": "เข้าใจเกมมากขึ้น", "Bring professional sports analysis into your workflow.": "นำเครื่องมือวิเคราะห์กีฬาเข้ามาใช้ในขั้นตอนการทำงานของคุณ",
    "Plans & pricing": "แพ็กเกจและราคา", "Choose the tools that": "เลือกเครื่องมือให้ตรงกับ", "match your ambition.": "เป้าหมายของคุณ",
    "One scouting workflow, two individual plans, and a flexible option for teams.": "แพ็กเกจบุคคลสองแบบ และตัวเลือกสำหรับทีม",
    "Advanced video analysis": "วิเคราะห์วิดีโอขั้นสูง", "University and organization licensing": "สิทธิ์ใช้งานสำหรับมหาวิทยาลัยและองค์กร",
    "Custom licensing, deployment and training options are available for universities, clubs and academies.": "มีตัวเลือกสิทธิ์ใช้งาน การติดตั้ง และการอบรมสำหรับมหาวิทยาลัย สโมสร และสถาบันกีฬา",
    "Discuss a team plan": "สอบถามแพ็กเกจทีม", "Plan comparison": "เปรียบเทียบแพ็กเกจ", "Know what’s included.": "ตรวจสอบสิ่งที่รวมในแต่ละแพ็กเกจ",
    "Capability": "ความสามารถ", "Scouting & video review": "วิเคราะห์เกมและทบทวนวิดีโอ", "Included": "รวมในแพ็กเกจ",
    "Scouting workspace": "พื้นที่วิเคราะห์เกม", "Timeline & tagging": "ไทม์ไลน์และการติดแท็ก", "Video review & frame control": "ทบทวนวิดีโอและควบคุมทีละเฟรม",
    "HUD & highlight export": "HUD และส่งออกไฮไลต์", "Reports & data export": "รายงานและส่งออกข้อมูล", "Standard": "มาตรฐาน", "Advanced": "ขั้นสูง",
    "Performance analysis": "วิเคราะห์สมรรถนะ", "Player tracking": "ติดตามผู้เล่น", "Heatmaps & court mapping": "แผนที่ความหนาแน่นและผังสนาม",
    "Movement analysis": "วิเคราะห์การเคลื่อนที่", "Access & support": "การเข้าถึงและความช่วยเหลือ", "Registered devices": "อุปกรณ์ที่ลงทะเบียนได้",
    "Up to 2": "สูงสุด 2", "By seat": "ตามจำนวนที่นั่ง", "Concurrent devices": "อุปกรณ์ที่ใช้งานพร้อมกัน", "Multiple": "หลายอุปกรณ์",
    "Users / seats": "ผู้ใช้ / ที่นั่ง", "3 included": "รวม 3 ที่นั่ง", "Training & priority support": "การอบรมและความช่วยเหลือเร่งด่วน",
    "Guides": "คู่มือ", "Guides + workshops": "คู่มือและเวิร์กช็อป", "Priority + team training": "บริการเร่งด่วนและอบรมทีม",
    "Individual licenses support one active device at a time. Scout Lab may register up to two devices, but only one can be active at once. Team access uses separate accounts for each seat.": "แพ็กเกจบุคคลใช้งานได้ครั้งละหนึ่งอุปกรณ์ Scout Lab ลงทะเบียนได้สูงสุดสองอุปกรณ์ แต่เปิดใช้งานได้ครั้งละหนึ่งเครื่อง ส่วนแพ็กเกจทีมใช้บัญชีแยกตามจำนวนที่นั่ง",
    "Frequently asked questions": "คำถามที่พบบ่อย", "Good to know.": "ข้อมูลที่ควรรู้",
    "Can I change computers?": "เปลี่ยนคอมพิวเตอร์ที่ใช้งานได้ไหม?",
    "Yes. Manage registered devices in your account portal. The number of registered devices depends on your plan.": "เงื่อนไขการย้ายอุปกรณ์จะจัดการผ่านบัญชีเมื่อระบบสมาชิกเปิดใช้งาน จำนวนอุปกรณ์ขึ้นอยู่กับแพ็กเกจ",
    "Can I use SpotScout on two computers?": "ใช้ SpotScout บนคอมพิวเตอร์สองเครื่องได้ไหม?",
    "Individual licenses allow one active device at a time. Scout Lab can register up to two devices, but only one may be active at once.": "แพ็กเกจบุคคลเปิดใช้งานได้ครั้งละหนึ่งเครื่อง Scout Lab ลงทะเบียนได้สูงสุดสองเครื่อง แต่ใช้งานได้ครั้งละหนึ่งเครื่อง",
    "What does Lifetime mean?": "แพ็กเกจซื้อขาดหมายถึงอะไร?", "Lifetime is a one-time license for the SpotScout plan purchased. Update and support terms will be confirmed before launch.": "เงื่อนไขสิทธิ์ใช้งานและการอัปเดตของแพ็กเกจซื้อขาดยังต้องยืนยันก่อนเปิดขาย",
    "Are updates included?": "รวมการอัปเดตหรือไม่?", "Update coverage is being finalized. The final license terms will be shown before purchase.": "เงื่อนไขการอัปเดตยังไม่ยืนยัน รายละเอียดจริงจะแจ้งก่อนเปิดขาย",
    "Can teams share one account?": "ทีมใช้บัญชีเดียวร่วมกันได้ไหม?", "No. Team plans use seat-based access. Each user signs in with their own account.": "ไม่ได้ แพ็กเกจทีมแยกบัญชีตามจำนวนที่นั่ง ผู้ใช้แต่ละคนเข้าสู่ระบบด้วยบัญชีของตนเอง",
    "What happens when my annual plan expires?": "เมื่อแพ็กเกจรายปีหมดอายุจะเกิดอะไรขึ้น?", "Your subscription status and access options will appear in your account portal. You can renew or review your plan there.": "สถานะและตัวเลือกการต่ออายุจะแสดงในบัญชีเมื่อระบบสมาชิกพร้อมใช้งาน",
    "SpotScout Lab · Account access": "SpotScout Lab · เข้าถึงบัญชี", "Your scouting work,": "งานวิเคราะห์เกมของคุณ", "ready when you are.": "พร้อมเมื่อคุณต้องการ",
    "Sign in to manage your license, devices, learning and scouting orders.": "เข้าสู่ระบบเพื่อจัดการสิทธิ์ อุปกรณ์ บทเรียน และคำสั่งบริการ",
    "One account for your SpotScout workflow": "บัญชีเดียวสำหรับ SpotScout", "Secure account-based licensing": "สิทธิ์ใช้งานผูกกับบัญชี",
    "Welcome back": "ยินดีต้อนรับกลับ", "Sign in to SpotScout": "เข้าสู่ระบบ SpotScout", "Choose how you’d like to continue.": "เลือกวิธีเข้าสู่ระบบ",
    "Continue with Google": "ดำเนินการต่อด้วย Google", "Continue with Microsoft": "ดำเนินการต่อด้วย Microsoft",
    "or continue with email": "หรือใช้อีเมล", "Email address": "อีเมล", "Password": "รหัสผ่าน", "Show": "แสดง",
    "Hide": "ซ่อน", "Forgot password?": "ลืมรหัสผ่าน?", "New to SpotScout?": "ยังไม่มีบัญชี SpotScout?",
    "Create an account": "สร้างบัญชี", "By continuing, you agree to the Terms and Privacy Policy.": "เมื่อดำเนินการต่อ แสดงว่าคุณยอมรับข้อกำหนดการใช้งานและนโยบายความเป็นส่วนตัว",
    "Start with a clearer view": "เริ่มต้นด้วยภาพที่ชัดเจนขึ้น", "Set up your": "สร้างบัญชี", "SpotScout account.": "SpotScout ของคุณ",
    "Your account keeps your license, devices, training and scouting orders together.": "รวมสิทธิ์ใช้งาน อุปกรณ์ บทเรียน และคำสั่งบริการไว้ในบัญชีเดียว",
    "Designed for the whole analysis workflow.": "สำหรับทุกขั้นตอนการวิเคราะห์เกม", "Scout · Review · Analyze · Report": "วิเคราะห์ · ทบทวน · สรุป · รายงาน",
    "Create account": "สร้างบัญชี", "Join SpotScout Lab": "เข้าร่วม SpotScout Lab", "Create an account for your SpotScout products.": "สร้างบัญชีสำหรับผลิตภัณฑ์ SpotScout",
    "Full name": "ชื่อและนามสกุล", "Confirm password": "ยืนยันรหัสผ่าน", "I agree to the": "ฉันยอมรับ",
    "Terms": "ข้อกำหนดการใช้งาน", "Privacy Policy": "นโยบายความเป็นส่วนตัว", "or sign up with": "หรือสมัครด้วย",
    "Already have an account?": "มีบัญชีอยู่แล้ว?", "Account creation is shown as a prototype only.": "การสมัครบัญชียังเป็นเพียงหน้าตัวอย่าง",
    "ACCOUNT": "บัญชี", "Plans & Billing": "แพ็กเกจและการชำระเงิน", "Scouting Orders": "คำสั่งบริการวิเคราะห์",
    "Back to SpotScout Lab": "กลับไป SpotScout Lab", "Sign out": "ออกจากระบบ", "Monday, February 10, 2027": "วันจันทร์ที่ 10 กุมภาพันธ์ 2027",
    "Here’s a quick view of your SpotScout account.": "ข้อมูลบัญชีตัวอย่าง SpotScout", "Individual account": "บัญชีบุคคล",
    "INDIVIDUAL PLAN": "แพ็กเกจบุคคล", "/ 2 registered": "/ ลงทะเบียน 2 อุปกรณ์", "Windows 11 · Active now": "Windows 11 · กำลังใช้งาน · ตัวอย่าง",
    "Windows 10 · Last used 3 days ago": "Windows 10 · ใช้ล่าสุด 3 วันก่อน · ตัวอย่าง", "Manage devices": "จัดการอุปกรณ์",
    "1 active device allowed at a time": "เปิดใช้งานได้ครั้งละ 1 อุปกรณ์", "View all ↗": "ดูทั้งหมด ↗", "recent orders": "คำสั่งล่าสุด",
    "Badminton": "แบดมินตัน", "Basketball": "บาสเกตบอล", "Volleyball": "วอลเลย์บอล", "Complete": "เสร็จแล้ว · ตัวอย่าง",
    "Processing": "กำลังดำเนินการ · ตัวอย่าง", "Waiting": "รอดำเนินการ · ตัวอย่าง", "Version 1.0 · Latest release": "ยังไม่มีรุ่นที่เปิดให้ดาวน์โหลด",
    "LEARNING": "บทเรียน", "Continue where you left off · Lesson 6 of 8": "เรียนต่อจากเดิม · บทที่ 6 จาก 8",
    "Sample account view. Device, billing and order actions are not connected to a live account system.": "ข้อมูลบัญชีนี้เป็นตัวอย่าง การจัดการอุปกรณ์ การชำระเงิน และคำสั่งบริการยังไม่เชื่อมกับระบบจริง",
    "SpotScout scouting service": "บริการวิเคราะห์เกม SpotScout", "Professional analysis.": "รับการวิเคราะห์จากทีมงาน", "Without new software.": "โดยไม่ต้องใช้ซอฟต์แวร์เอง",
    "Share your footage and let our analysts turn it into useful, organized insight.": "ส่งวิดีโอให้ทีมงานช่วยจัดทำรายงานและสรุปจังหวะสำคัญ",
    "Submit a match": "ส่งข้อมูลการแข่งขัน", "SCOUTING REVIEW · MATCH 04": "ตัวอย่างการวิเคราะห์ · เกมที่ 04", "HIGHLIGHT": "ไฮไลต์",
    "Tactical breakdown": "วิเคราะห์แท็กติก", "A clear process": "ขั้นตอนชัดเจน", "From match footage": "จากวิดีโอการแข่งขัน", "to useful insight.": "สู่รายงานที่นำไปใช้ได้",
    "Send a Google Drive link or video URL with access enabled.": "ส่งลิงก์ Google Drive หรือวิดีโอที่ทีมงานเปิดดูได้",
    "Choose your analysis": "เลือกรูปแบบวิเคราะห์", "Select a focused match review or a deeper performance analysis.": "เลือกการสรุปเกมหรือการวิเคราะห์สมรรถนะเชิงลึก",
    "We review the game": "ทีมงานทบทวนเกม", "An analyst organizes key moments, patterns and observations.": "ผู้วิเคราะห์จัดระเบียบจังหวะสำคัญ รูปแบบการเล่น และข้อสังเกต",
    "Receive your report": "รับรายงาน", "Get a clear summary with supporting video and visual insight.": "รับสรุปผลพร้อมวิดีโอและภาพประกอบ",
    "Start a scouting order": "เริ่มส่งคำขอวิเคราะห์", "Tell us about your match.": "กรอกรายละเอียดการแข่งขัน", "Complete the steps to prepare a request. This prototype does not upload videos or place live orders.": "กรอกข้อมูลเพื่อเตรียมคำขอ ต้นแบบนี้ยังไม่อัปโหลดวิดีโอหรือส่งคำสั่งจริง",
    "Sport": "กีฬา", "Match info": "ข้อมูลการแข่งขัน", "Video": "วิดีโอ", "Service": "บริการ", "Summary": "สรุป",
    "STEP 1 OF 5": "ขั้นตอน 1 จาก 5", "What sport are we reviewing?": "ต้องการให้วิเคราะห์กีฬาอะไร?", "Choose a sport for your match.": "เลือกชนิดกีฬาของการแข่งขัน",
    "Select a sport": "เลือกกีฬา", "Football": "ฟุตบอล", "Other": "อื่น ๆ", "STEP 2 OF 5": "ขั้นตอน 2 จาก 5",
    "Add match information.": "เพิ่มข้อมูลการแข่งขัน", "Help our analysts understand the context.": "ช่วยให้ทีมวิเคราะห์เข้าใจบริบทของเกม",
    "Team or player": "ทีม หรือผู้เล่น", "Opponent": "คู่แข่ง", "Competition": "รายการแข่งขัน", "Match date": "วันที่แข่งขัน",
    "STEP 3 OF 5": "ขั้นตอน 3 จาก 5", "Share the match video.": "แชร์วิดีโอการแข่งขัน", "Use a link our analysts can open.": "ใช้ลิงก์ที่ทีมวิเคราะห์เปิดดูได้",
    "Google Drive or video link": "ลิงก์ Google Drive หรือวิดีโอ", "Notes for the analyst": "หมายเหตุถึงผู้วิเคราะห์",
    "Check that the link allows our team to access the video.": "ตรวจสอบว่าทีมงานได้รับอนุญาตให้เปิดลิงก์วิดีโอ",
    "STEP 4 OF 5": "ขั้นตอน 4 จาก 5", "Choose your service.": "เลือกบริการ", "Final prices and delivery timing will be confirmed before an order is placed.": "ยืนยันราคาและเวลาส่งมอบก่อนส่งคำสั่งซื้อ",
    "Key moments, player highlights and a match summary.": "จังหวะสำคัญ ไฮไลต์ผู้เล่น และสรุปการแข่งขัน",
    "Tactical review, tracking, heatmaps and deeper insight.": "ทบทวนแท็กติก ติดตามตำแหน่ง และดูแผนที่ความหนาแน่น",
    "STEP 5 OF 5": "ขั้นตอน 5 จาก 5", "Review your request.": "ตรวจสอบคำขอ", "Check the details below. No order will be submitted from this prototype.": "ตรวจสอบรายละเอียด ต้นแบบนี้ยังไม่ส่งคำสั่งจริง",
    "Match": "การแข่งขัน", "Video link": "ลิงก์วิดีโอ", "Estimated from": "ราคาเริ่มต้น", "Back": "ย้อนกลับ", "Submit request": "ส่งคำขอ",
    "Prototype pricing for planning purposes only. The service workflow, payments and video transfer are not connected.": "ราคาเป็นตัวอย่างเพื่อวางแผน ขั้นตอนบริการ การชำระเงิน และการส่งวิดีโอยังไม่เชื่อมกับระบบจริง",
    "SpotScout Academy": "SpotScout Academy", "Master your": "เรียนรู้", "analysis workflow.": "ขั้นตอนการวิเคราะห์เกม",
    "Practical lessons for scouting, video review and performance analysis — from your first match to advanced insight.": "บทเรียนการวิเคราะห์เกม การทบทวนวิดีโอ และสมรรถนะ ตั้งแต่เริ่มต้นจนถึงขั้นสูง",
    "Start with Fundamentals": "เริ่มจากบทเรียนพื้นฐาน", "SPOTSCOUT ACADEMY": "SpotScout Academy", "BEGINNER · 8 LESSONS": "ระดับเริ่มต้น · 8 บทเรียน",
    "Fundamentals": "พื้นฐาน", "45 minutes · 8 lessons": "45 นาที · 8 บทเรียน", "Learning library": "คลังบทเรียน",
    "Build skill, one match": "พัฒนาทักษะทีละเกม", "at a time.": "อย่างเป็นขั้นตอน", "Choose a guide, course or workshop that fits the next step in your work.": "เลือกคู่มือ คอร์ส หรือเวิร์กช็อปให้เหมาะกับสิ่งที่ต้องการเรียนรู้",
    "All learning": "ทั้งหมด", "Courses": "คอร์ส", "Workshops": "เวิร์กช็อป", "VIDEO COURSE": "วิดีโอคอร์ส", "BEGINNER": "ระดับเริ่มต้น",
    "Learn the workflow from project setup to your first report.": "เรียนรู้ตั้งแต่สร้างโปรเจกต์จนถึงจัดทำรายงานแรก",
    "8 lessons · 45 minutes": "8 บทเรียน · 45 นาที", "Start course ↗": "เริ่มเรียน ↗", "INTERMEDIATE": "ระดับกลาง",
    "Make a fast, consistent review routine for your matches.": "สร้างขั้นตอนทบทวนการแข่งขันที่รวดเร็วและสม่ำเสมอ",
    "6 lessons · 32 minutes": "6 บทเรียน · 32 นาที", "Coming soon ↗": "ยังไม่เปิดให้เรียน", "FIELD GUIDE": "คู่มือภาคสนาม",
    "ALL LEVELS": "ทุกระดับ", "Reports that coaches can use": "รายงานที่โค้ชนำไปใช้ได้", "Turn your observations into a clear and useful summary.": "สรุปข้อสังเกตให้ชัดเจนและนำไปใช้ได้",
    "5 minute read": "ใช้เวลาอ่าน 5 นาที", "Read guide ↗": "อ่านคู่มือ ↗", "LIVE": "สด", "SESSION": "เซสชัน",
    "MONTHLY WORKSHOP": "เวิร์กช็อปรายเดือน", "Practical Match Review": "ฝึกทบทวนการแข่งขัน", "Join a guided session and practice with match footage.": "ฝึกวิเคราะห์วิดีโอในการอบรมที่มีผู้สอน",
    "Online · 60 minutes": "ออนไลน์ · 60 นาที", "View sessions ↗": "ดูรอบอบรม ↗", "A structured learning journey": "เส้นทางการเรียนรู้ที่เป็นขั้นตอน",
    "Learn in the order": "เรียนตามลำดับ", "you’ll use it.": "การใช้งานจริง", "01 · Getting started": "01 · เริ่มต้นใช้งาน", "02 · Create a project": "02 · สร้างโปรเจกต์",
    "03 · Scout a match": "03 · วิเคราะห์เกม", "04 · Review the timeline": "04 · ทบทวนไทม์ไลน์", "05 · Create a report": "05 · สร้างรายงาน", "06 · Explore Scout Lab": "06 · ดู Scout Lab",
    "Academy": "Academy", "Beginner · 8 lessons · 45 minutes": "ระดับเริ่มต้น · 8 บทเรียน · 45 นาที",
    "Get comfortable with the full SpotScout workflow, from project setup to sharing a clear report.": "เรียนรู้ขั้นตอน SpotScout ตั้งแต่สร้างโปรเจกต์จนถึงแชร์รายงาน",
    "0% complete": "เรียนแล้ว 0%", "COURSE CONTENT": "เนื้อหาคอร์ส", "Installation": "ติดตั้งโปรแกรม", "Sign in & licensing": "เข้าสู่ระบบและสิทธิ์ใช้งาน",
    "Create a project": "สร้างโปรเจกต์", "Import your video": "นำเข้าวิดีโอ", "Create useful tags": "สร้างแท็กที่ใช้ได้จริง",
    "Scout a match": "วิเคราะห์การแข่งขัน", "Review the timeline": "ทบทวนไทม์ไลน์", "Export a report": "ส่งออกรายงาน",
    "COURSE PROGRESS": "ความคืบหน้าคอร์ส", "Install SpotScout for Windows.": "ติดตั้ง SpotScout สำหรับ Windows",
    "Set up SpotScout on your Windows PC, then sign in with the account associated with your license.": "ติดตั้ง SpotScout บนคอมพิวเตอร์ Windows แล้วเข้าสู่ระบบด้วยบัญชีที่มีสิทธิ์ใช้งาน",
    "In this lesson": "ในบทเรียนนี้", "• Check system requirements": "• ตรวจสอบความต้องการระบบ", "• Install SpotScout for Windows": "• ติดตั้ง SpotScout สำหรับ Windows",
    "• Open SpotScout and sign in": "• เปิด SpotScout และเข้าสู่ระบบ", "← Previous lesson": "← บทก่อนหน้า", "Next lesson": "บทถัดไป",
    "SpotScout support": "ช่วยเหลือ SpotScout", "Help for the work": "ความช่วยเหลือสำหรับงาน", "you’re doing.": "ที่คุณกำลังทำ",
    "Find an answer, follow a guide, or tell us what you need.": "ค้นหาคำตอบ อ่านคู่มือ หรือติดต่อเรา",
    "Install, sign in and set up your first project.": "ติดตั้ง เข้าสู่ระบบ และสร้างโปรเจกต์แรก", "Scouting workflow": "ขั้นตอนวิเคราะห์เกม",
    "Tag events, review a timeline and share results.": "ติดแท็กเหตุการณ์ ทบทวนไทม์ไลน์ และแชร์ผลลัพธ์",
    "Account & devices": "บัญชีและอุปกรณ์", "Manage your subscription and registered devices.": "จัดการแพ็กเกจและอุปกรณ์ที่ลงทะเบียน",
    "Scout Lab analysis": "การวิเคราะห์ด้วย Scout Lab", "Learn about tracking, court mapping and heatmaps.": "เรียนรู้เรื่องการติดตามผู้เล่น ผังสนาม และแผนที่ความหนาแน่น",
    "Still need a hand?": "ต้องการความช่วยเหลือเพิ่มเติม?", "Talk to our team.": "ติดต่อทีมงาน", "Send a note about your setup, license or analysis workflow. We’ll point you to the right next step.": "ส่งคำถามเกี่ยวกับการติดตั้ง สิทธิ์ใช้งาน หรือขั้นตอนวิเคราะห์เกม",
    "Email support": "ส่งอีเมลขอความช่วยเหลือ", "SUPPORT HOURS": "เวลาทำการ", "Monday – Friday": "วันจันทร์ – ศุกร์",
    "Response time will be confirmed at launch.": "จะแจ้งเวลาตอบกลับเมื่อเปิดบริการ", "Questions about scouting services?": "สอบถามบริการวิเคราะห์เกม?",
    "Common questions": "คำถามทั่วไป", "Quick answers.": "คำตอบสั้น ๆ", "What does SpotScout run on?": "SpotScout ใช้งานบนระบบใด?",
    "SpotScout is a Windows desktop application. The website helps with product information, learning, account management and support.": "SpotScout เป็นโปรแกรมสำหรับ Windows เว็บไซต์นี้ใช้ดูข้อมูลผลิตภัณฑ์ บทเรียน บัญชี และการช่วยเหลือ",
    "Can I download before signing in?": "ต้องเข้าสู่ระบบก่อนดาวน์โหลดหรือไม่?",
    "Yes. Downloads will require a SpotScout account and an active license. Payment, account and download checks are not connected yet, and no installer is currently available.": "ใช่ การดาวน์โหลดจะต้องใช้บัญชี SpotScout และสิทธิ์ใช้งานที่ยังไม่หมดอายุ ขณะนี้ระบบบัญชี การชำระเงิน และการตรวจสิทธิ์ยังไม่เชื่อมต่อ และยังไม่มีไฟล์ติดตั้งให้ดาวน์โหลด",
    "Yes. The prototype keeps the download link easy to access. Account sign-in happens after installation.": "การดาวน์โหลดจะต้องเข้าสู่ระบบและตรวจสอบสิทธิ์ก่อน ขณะนี้ยังไม่มีไฟล์ติดตั้งให้ดาวน์โหลด",
    "How do team licenses work?": "สิทธิ์ใช้งานแบบทีมทำงานอย่างไร?", "Team plans use seats with a separate SpotScout account for each user. Team members can work at the same time.": "แพ็กเกจทีมกำหนดจำนวนที่นั่ง และผู้ใช้แต่ละคนต้องมีบัญชี SpotScout แยกกัน",
    "Can I send a match for analysis?": "ส่งการแข่งขันให้ทีมวิเคราะห์ได้ไหม?", "Yes. The scouting service page shows the intended request flow. Video transfer and order placement are not connected in this prototype.": "หน้าเว็บแสดงขั้นตอนตัวอย่าง แต่การส่งวิดีโอและคำสั่งบริการยังไม่เชื่อมกับระบบจริง",
    "Make room for": "เตรียมพื้นที่สำหรับ", "better analysis.": "การวิเคราะห์ที่ชัดเจนขึ้น",
    "Download the desktop application and bring scouting, video review and performance insight into one workspace.": "รวมการวิเคราะห์เกม ทบทวนวิดีโอ และข้อมูลสมรรถนะไว้ในโปรแกรมเดียว",
    "Windows 10 · Windows 11 · Version 1.0": "Windows 10 · Windows 11 · ยังไม่ประกาศรุ่น",
    "Final hardware requirements will be confirmed with the release build.": "จะยืนยันสเปกเครื่องเมื่อมีโปรแกรมรุ่นเผยแพร่",
    "Operating system": "ระบบปฏิบัติการ", "Windows 10 or Windows 11": "Windows 10 หรือ Windows 11", "Processor": "หน่วยประมวลผล",
    "64-bit compatible processor": "หน่วยประมวลผลที่รองรับ 64 บิต", "Memory": "หน่วยความจำ", "Requirements to be confirmed": "รอยืนยันความต้องการ",
    "Graphics": "การ์ดจอ", "Internet": "อินเทอร์เน็ต", "Needed for account sign-in and license activation": "ต้องใช้เพื่อเข้าสู่ระบบและเปิดใช้งานสิทธิ์",
    "PRODUCT": "ผลิตภัณฑ์", "LEARN": "เรียนรู้", "Tutorials": "วิดีโอสอน", "Training": "การอบรม", "SERVICES": "บริการ", "University": "มหาวิทยาลัย",
    "COMPANY": "เกี่ยวกับเรา", "About": "ข้อมูลบริษัท", "Contact": "ติดต่อ", "LEGAL": "ข้อกฎหมาย", "License agreement": "ข้อตกลงสิทธิ์ใช้งาน",
    "© 2026 SpotScout Lab. All rights reserved.": "© 2026 SpotScout Lab สงวนลิขสิทธิ์", "Professional sports analysis software": "ซอฟต์แวร์วิเคราะห์กีฬา",
    "Search": "ค้นหา", "Search guides and common questions": "ค้นหาคู่มือและคำถามที่พบบ่อย", "Your full name": "ชื่อและนามสกุลของคุณ",
    "At least 8 characters": "อย่างน้อย 8 ตัวอักษร", "Re-enter your password": "กรอกรหัสผ่านอีกครั้ง",
    "What would you like us to focus on?": "ต้องการให้ทีมงานเน้นวิเคราะห์เรื่องใด?", "Your team or athlete": "ทีมของคุณหรือนักกีฬา",
    "Opponent name": "ชื่อคู่แข่ง", "League, event or friendly": "ลีก รายการ หรือเกมกระชับมิตร", "Select a sport": "เลือกชนิดกีฬา",
    "This sign-in option is a visual prototype and is not connected yet.": "ปุ่มเข้าสู่ระบบนี้เป็นเพียงต้นแบบและยังไม่เชื่อมต่อระบบจริง",
    "Choose a service to continue.": "เลือกบริการเพื่อดำเนินการต่อ", "Request prepared for the prototype. No order or video was sent.": "เตรียมคำขอในต้นแบบแล้ว แต่ยังไม่มีการส่งคำสั่งหรือวิดีโอ",
    "The Windows installer will be added here when SpotScout is ready to release.": "ยังไม่มีไฟล์ติดตั้งให้ดาวน์โหลด ระบบจะเปิดเมื่อโปรแกรมพร้อมเผยแพร่",
    "Device controls will be available when account licensing is connected.": "การจัดการอุปกรณ์จะเปิดเมื่อเชื่อมระบบบัญชีและสิทธิ์ใช้งาน",
    "Device management is a prototype view and is not connected yet.": "การจัดการอุปกรณ์ยังเป็นหน้าตัวอย่างและไม่เชื่อมกับระบบจริง",
    "Lesson videos will be connected in the Academy build.": "วิดีโอบทเรียนจะเปิดเมื่อระบบ Academy พร้อมใช้งาน",
    "Lesson selection changed. Course progress is a preview.": "เปลี่ยนบทเรียนแล้ว ความคืบหน้าเป็นข้อมูลตัวอย่าง",
    "Your details look ready. Account creation is not connected in this prototype.": "ข้อมูลครบแล้ว แต่ต้นแบบนี้ยังไม่เชื่อมระบบสร้างบัญชี",
    "Sign-in is not connected in this prototype. The account screen uses sample data.": "ต้นแบบนี้ยังไม่เชื่อมระบบเข้าสู่ระบบ และหน้าบัญชีใช้ข้อมูลตัวอย่าง",
    "The email or password is incorrect.": "อีเมลหรือรหัสผ่านไม่ถูกต้อง", "Passwords do not match.": "รหัสผ่านไม่ตรงกัน",
    "Learn more": "ดูรายละเอียด", "Explore the workspace": "ดูพื้นที่ทำงาน", "View Scout": "ดูแพ็กเกจ Scout"
  };

  var toEn = {};
  Object.keys(th).forEach(function (en) { toEn[th[en]] = en; });
  var enKeys = Object.keys(th).sort(function (a, b) { return b.length - a.length; });
  var thKeys = Object.keys(toEn).sort(function (a, b) { return b.length - a.length; });
  var attrNames = ["placeholder", "aria-label", "title", "alt"];
  var current = "en";

  function clean(value) { return String(value || "").replace(/\s+/g, " ").trim(); }
  function replacePhrases(value, keys, dictionary, latinBoundaries) {
    var result = value;
    keys.forEach(function (key) {
      if (!key) return;
      var escaped = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      var pattern = latinBoundaries && /^[A-Za-z]/.test(key)
        ? new RegExp("(^|[^A-Za-z])" + escaped + "(?=$|[^A-Za-z])", "g")
        : null;
      result = pattern ? result.replace(pattern, function (_all, lead) { return lead + dictionary[key]; }) : result.split(key).join(dictionary[key]);
    });
    return result;
  }
  function english(value) {
    var v = clean(value);
    if (Object.prototype.hasOwnProperty.call(toEn, v)) return toEn[v];
    return replacePhrases(v, thKeys, toEn, false);
  }
  function translate(value) {
    var en = english(value);
    if (current !== "th") return en;
    if (Object.prototype.hasOwnProperty.call(th, en)) return th[en];
    return replacePhrases(en, enKeys, th, true);
  }

  function translateTextNode(node) {
    var raw = node.nodeValue;
    var match = raw.match(/^(\s*)([\s\S]*?)(\s*)$/);
    if (!match) return;
    var source = clean(match[2]);
    if (!source || /^[\d\s.,:;/%+×·#↗↘→←▶◀⟳⟲⌄⛶☰◐◎▰▱•]+$/.test(source)) return;
    var result = translate(source);
    if (result !== source) node.nodeValue = match[1] + result + match[3];
  }

  function apply(root) {
    document.documentElement.lang = current;
    document.querySelectorAll("[data-set-language]").forEach(function (button) {
      var active = button.getAttribute("data-set-language") === current;
      button.setAttribute("aria-pressed", active ? "true" : "false");
      button.classList.toggle("active", active);
    });
    var walker = document.createTreeWalker(root || document.body, NodeFilter.SHOW_TEXT);
    var node;
    while ((node = walker.nextNode())) translateTextNode(node);
    (root || document.body).querySelectorAll(attrNames.map(function (x) { return "[" + x + "]"; }).join(",")).forEach(function (el) {
      attrNames.forEach(function (name) {
        if (el.hasAttribute(name)) {
          var value = el.getAttribute(name);
          var translated = translate(value);
          if (translated !== value) el.setAttribute(name, translated);
        }
      });
    });
    var title = document.querySelector("title");
    if (title) title.textContent = translate(english(title.textContent));
    var description = document.querySelector('meta[name="description"]');
    if (description) description.content = current === "th"
      ? "SpotScout Lab — เครื่องมือวิเคราะห์เกมและวิดีโอสำหรับกีฬา บน Windows"
      : "SpotScout Lab — professional sports scouting, video analysis and performance intelligence for Windows.";
  }

  function setLanguage(language) {
    current = language === "th" ? "th" : "en";
    try { window.localStorage.setItem("spotscout-language", current); } catch (_) { /* optional preference */ }
    apply(document.body);
  }

  document.addEventListener("click", function (event) {
    var button = event.target.closest("[data-set-language]");
    if (button) setLanguage(button.getAttribute("data-set-language"));
  });

  try {
    var saved = window.localStorage.getItem("spotscout-language");
    if (saved === "th" || saved === "en") current = saved;
    else if (/^th(?:-|$)/i.test(navigator.language || "")) current = "th";
  } catch (_) { /* use browser default */ }

  apply(document.body);
  if ("MutationObserver" in window) {
    var observer = new MutationObserver(function (records) {
      records.forEach(function (record) {
        if (record.type === "characterData") translateTextNode(record.target);
        else record.addedNodes.forEach(function (node) {
          if (node.nodeType === Node.TEXT_NODE) translateTextNode(node);
          else if (node.nodeType === Node.ELEMENT_NODE) apply(node);
        });
      });
    });
    observer.observe(document.body, { subtree: true, childList: true, characterData: true });
  }
  window.SpotScoutI18n = { t: translate, setLanguage: setLanguage, getLanguage: function () { return current; } };
})();
