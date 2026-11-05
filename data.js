/* FamilyBless · נתוני הגלריה · 05.11.2026 */
const FAMILY_CARDS = [
  [1,'ברכה למשפחה האהובה','בריאות, אהבה ואחדות','first','01-family-blessing.png'],
  [2,'בריאות ואור','התחזקות הגוף והנפש','short','02-health-light.png'],
  [3,'שפע ופרנסה','שפע במעשי ידינו','short','03-abundance.png'],
  [4,'שלום בית','כבוד, סליחה וקרבה','short','04-peace.png'],
  [5,'כושר ועוצמה','תנועה, חוסן וכוחות','short','05-strength.png'],
  [6,'שמחה וצחוק','רגעים מתוקים למשפחה','short','06-joy.png'],
  [7,'אחדות המשפחה','שורשים שמחברים דורות','short','07-unity.png'],
  [8,'בשורות טובות','תקווה והתחלות חדשות','short','08-good-news.png'],
  [9,'הצלחה והגשמה','להגשים חלומות באומץ','short','09-success.png'],
  [10,'הכרת הטוב','תודה על קרבה ונתינה','short','10-gratitude.png'],
  [11,'ברכת הדורות','אהבה בין דורות','short','11-generations.png'],
  [12,'כתר הבריאות','ברכה ב־12 שורות על בריאות','poems','12-crown-health.png'],
  [13,'אוצר האושר','ברכה ב־12 שורות על אושר','poems','13-treasure-joy.png'],
  [14,'שפע ללא גבולות','ברכה ב־12 שורות על פרנסה','poems','14-limitless-abundance.png'],
  [15,'כוח הדרך','ברכה ב־12 שורות על כושר וחוסן','poems','15-road-strength.png'],
  [16,'בית של שלום','ברכה ב־12 שורות על שלום בית','poems','16-house-peace.png'],
  [17,'ברכת החלומות','ברכה ב־12 שורות על הגשמה','poems','17-dreams.png'],
  [18,'חסד ואהבה','ברכה ב־12 שורות על נתינה','poems','18-kindness.png'],
  [19,'שמחת הדורות','ברכה ב־12 שורות על המשפחה','poems','19-generations-joy.png'],
  [20,'בשורות של אור','ברכה ב־12 שורות על תקווה','poems','20-news-light.png'],
  [21,'כתר המשפחה','ברכה ב־12 שורות על אחדות','poems','21-family-crown.png']
].map(([id,title,description,series,file])=>({id,title,description,series,file:'assets/cards/'+file}));
