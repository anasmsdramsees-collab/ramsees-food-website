# Ramsees Food — Corporate Website

موقع شركة رمسيس للأغذية (Corporate / Catalog Site). ليس متجرًا إلكترونيًا — النموذج مستوحى من Egypt Foods Group. الهدف: موزّعون، سوبرماركت، شركاء أعمال.

---

## هيكل الملفات

```
web site /
├── index.html          # الصفحة الرئيسية الوحيدة (SPA)
├── styles.css          # كل الـ CSS
├── script.js           # كل الـ JS
├── website.rtf         # المواصفات الأصلية
├── PROJECT.md          # هذا الملف
├── لوقو/               # شعارات جميع العلامات
│   ├── ramsees-logo.png                           # شعار رمسيس الرئيسي (PNG من PDF)
│   ├── Ramsees-food logo .pdf                     # الملف الأصلي
│   ├── ChatGPT Image May 13, 2026, 03_27_11 PM.png  # الرابية خضراء
│   ├── ChatGPT Image May 13, 2026, 03_27_03 PM.png  # الرابية زرقاء (ألبان)
│   ├── ChatGPT Image May 13, 2026, 03_26_17 PM.png  # Riva
│   ├── ChatGPT Image May 13, 2026, 05_10_19 PM.png  # Viva (أحدث نسخة)
│   ├── ChatGPT Image May 13, 2026, 03_26_02 PM.png  # Solo
│   ├── ChatGPT Image May 13, 2026, 03_25_57 PM.png  # Chipso
│   ├── Asset 1.png                                # Clenso
│   └── lanova-transparent.png                     # La Nova (خلفية مُزالة بـ PIL)
└── assets/
    ├── factory/        # صور المصنع
    ├── rabia/
    │   ├── products/
    │   │   ├── ارز/           # 4 أنواع أرز
    │   │   ├── الدقيق/        # 5 أنواع دقيق
    │   │   ├── مكرونة/        # 8 أنواع مكرونة
    │   │   ├── معلبات/        # فول، فاصوليا، حمص، بازلاء، ذرة، طماطم
    │   │   ├── بقوليات/       # عدس أحمر
    │   │   ├── صوص/           # 8 صوصات
    │   │   ├── oil-butter/    # زيوت وزبدة (مضافة مايو 13)
    │   │   │   ├── زيت-عباد-الشمس-1لتر.png
    │   │   │   ├── زيت-عباد-الشمس-1.8لتر.png
    │   │   │   ├── زيت-عباد-الشمس-3لتر.png
    │   │   │   ├── زيت-الذرة-1لتر.png
    │   │   │   ├── زيت-الذرة-1.8لتر.png
    │   │   │   ├── زيت-الذرة-3لتر.png
    │   │   │   ├── زبدة-بقري-200جم.png
    │   │   │   └── سمن-بلدي.png
    │   │   ├── jam/               # مربى (مضافة مايو 13)
    │   │   │   ├── الرابية_مربى_فراولة.png
    │   │   │   ├── الرابية_مربى_مشكلة.png
    │   │   │   └── الرابية_مربى_توت.png
    │   │   ├── الرابية_خل_ابيض.png
    │   │   ├── الرابية_خل_التفاح.png
    │   │   ├── الرابية_ملح_هيمالايا.png
    │   │   ├── الرابية_ملح_باليود_700جم.png   # مضاف مايو 13
    │   │   ├── الرابية_مرقة_الدجاج.png
    │   │   └── الرابية_مرقة_الخضار_v2.png
    │   └── ads/        # إعلانات الرابية + الرابية-زيوت-اعلان.png
    ├── dairy/
    │   ├── milk-fresh/
    │   ├── milk-uht/
    │   ├── milk-powder/
    │   ├── yogurt/
    │   ├── yogurt-greek/
    │   ├── laban/
    │   ├── cheese/
    │   └── ads/
    ├── riva/
    │   └── ads/
    ├── viva/
    │   ├── viva-product-1.png  → كولا 330ml
    │   ├── viva-product-2.png  → برتقال 330ml
    │   ├── viva-product-3.png  → ليمون 330ml
    │   ├── viva-product-4.png  → موهيتو 330ml
    │   ├── viva-product-5.png  → توت 330ml
    │   └── ads/
    ├── solo/
    ├── chipso/
    │   └── ads/
    └── street-ads/     # إعلانات الشارع (15 صورة)
        ├── viva-billboard.png
        ├── riva-billboard-small.png
        ├── riva-billboard-big.png
        ├── chipso-wall.png
        ├── chipso-street.png
        ├── clenso-shop-billboard.png
        ├── clenso-cafe.png
        ├── rabia-family-billboard.png
        ├── rabia-highway-products.png
        ├── rabia-dairy-busstop.png
        ├── rabia-oil-totem.png
        ├── rabia-butter-billboard.png
        ├── rabia-jam-strawberry-billboard.png  # مضاف مايو 13
        ├── rabia-jam-apricot-billboard.png     # مضاف مايو 13
        └── rabia-jam-fig-billboard.png         # مضاف مايو 13
```

---

## العلامات التجارية (8 علامات)

| العلامة | القسم | اللون | Tab ID | ملاحظات |
|---------|-------|-------|--------|---------|
| الرابية (خضراء) | منتجات غذائية | `#2e7d32` | `rabia-food` | أرز، مكرونة، دقيق، معلبات، صوصات، زيوت، زبدة، مربى، ملح، خل، مرقة |
| الرابية (زرقاء) | ألبان | `#1565c0` | `rabia-dairy` | حليب طازج/UHT/بودرة، زبادي، زبادي يوناني، لبن رايب، جبن |
| Riva | مياه معدنية | `#0d47a1` | `riva` | عبوات 330ml — 18.9L |
| Viva | مشروبات غازية | `#c62828` | `viva` | كولا، برتقال، ليمون، موهيتو، توت — 330ml |
| Solo | مشروب طاقة | `#212121` | `solo` | 250ml — شبابي/رياضي |
| Chipso | شيبس وسناكس | `#f57c00` | `chipso` | 8 نكهات: أصلي، جبنة، حار+ليمون، باربكيو، كاتشب، خل+ملح، شطة دكوة، بيتزا |
| Clenso | قهوة مختصة | `#4e342e` | — (external) | متجر منفصل: `../../Clenso/index.html` |
| La Nova | شوكولاتة فاخرة | `#6a1b9a` | — (external) | متجر منفصل: `../../Clenso/lanova.html` |

---

## أقسام الصفحة

```
#home        → Hero + شريط الشعارات (brand strip)
#about       → من نحن
#brands      → كاردز العلامات (8 كاردز)
#products    → تابز المنتجات
#ads         → علاماتنا في الشارع (12 إعلان شارعي)
#contact     → تواصل معنا
```

---

## نقاط تقنية مهمة

### اللغة والاتجاه
- `lang="ar" dir="rtl"` على `<html>`
- خطوط: Cairo (عربي) + Poppins (إنجليزي) من Google Fonts

### الـ Brand Cards
- كل كارد `<a href="#products" data-goto-tab="TAB_ID">`
- الضغط عليه يشغّل `activateTab(tabId)` في script.js ويسكرول للمنتجات
- Clenso و La Nova: يفتحان متاجرهما المنفصلة في `target="_blank"`

### معالجة اللوغوهات
- معظم الشعارات: `mix-blend-mode: multiply` على خلفية بيضاء
- La Nova: خلفية داكنة أُزيلت بـ Python PIL → `lanova-transparent.png`
- Clenso: `mix-blend-mode: multiply` على خلفية بيضاء (`transparent-logo` class)

### الـ Responsive
- 820px: nav burger، tabs تنسحب أفقياً، grids تُكسر
- 520px: كل شيء عمود واحد، padding مضغوط، font أصغر

### صور المنتجات
- كلها في `assets/` — لا توجد مسارات `../` في الـ HTML

---

## مشروع Clenso (sibling)

```
/Users/anaselimam/Desktop/my projects /Clenso/
├── index.html      # متجر Clenso الرئيسي
├── lanova.html     # متجر La Nova المستقل (مُنشأ مايو 13)
├── logo/
├── products/
│   └──  chocolate/
└── posters/
```

- روابط محلية الآن: `../../Clenso/index.html` و `../../Clenso/lanova.html`
- عند الرفع على Netlify: يجب تحديث الروابط لـ URLs الحقيقية

---

## الرفع (Deployment)

### الخطوات
1. رفع Clenso على Netlify → الحصول على URL
2. رفع La Nova (`lanova.html`) — إما مع Clenso أو موقع منفصل
3. تحديث روابط Clenso و La Nova في `index.html` من المسارات المحلية للـ live URLs
4. رفع موقع رمسيس على Netlify

### الدومين
- **الدومين الرسمي:** `www.ramseesfoods.com`
- الـ canonical URL والـ OG tags محدّثة في `index.html`
- عند الرفع: يجب ربط الدومين بـ Netlify من DNS settings

### الأدوات
- Netlify CLI مثبّت: `netlify`
- للرفع: `netlify deploy --prod --dir="."`

---

## تاريخ التطوير

| التاريخ | التغيير |
|---------|---------|
| مايو 13, 2026 | بناء الموقع من الصفر |
| مايو 13, 2026 | ربط كاردز العلامات بتابز المنتجات |
| مايو 13, 2026 | منتجات Viva الـ 5 (كولا، برتقال، ليمون، موهيتو، توت) |
| مايو 13, 2026 | قسم "علاماتنا في الشارع" — 10 إعلانات شارعية |
| مايو 13, 2026 | إنشاء `lanova.html` — متجر La Nova المستقل داخل Clenso |
| مايو 13, 2026 | Responsive كامل — tabs scroll، section padding، factory gallery |
| مايو 13, 2026 | منتجات الزيوت والزبدة (6 زيوت + زبدة + سمن) + بيلبوردين شارعيين جدد |
| مايو 13, 2026 | ملح باليود 700جم في أساسيات المطبخ |
| مايو 13, 2026 | قسم المربى (فراولة، مشكلة فواكه، توت أزرق) في تاب الرابية الغذائية |
| مايو 13, 2026 | تحديث معرض المصنع — إضافة خط تعبئة المربى + خطوط Riva + مقر الشركة (12 صورة) |
| مايو 13, 2026 | 3 إعلانات شارعية جديدة للمربى (فراولة، مشمش، تين) — الإجمالي 15 إعلان |
