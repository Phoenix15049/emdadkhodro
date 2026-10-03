# امداد خودرو نکا

سایت تک‌صفحه‌ای معرفی خدمات امداد خودرو و یدک‌کش در نکا (مازندران) — [emdadneka.ir](https://emdadneka.ir)

## تکنولوژی‌ها

- React 19 + TypeScript
- Vite 8 + Tailwind CSS 4
- پیش‌رندر (SSR → HTML استاتیک) برای سئو

## اجرا

```bash
npm install
npm run dev      # محیط توسعه
npm run build    # بیلد + پیش‌رندر + بررسی سئو
npm start        # سرو کردن پوشه dist روی پورت 3000 (یا PORT)
```

## ساختار

- `src/config.ts` — اطلاعات تماس و نام کسب‌وکار
- `src/components/header/` — بخش‌های صفحه
- `src/entry-server.tsx` و `scripts/prerender.mjs` — پیش‌رندر HTML
- `scripts/check-build.mjs` — بررسی خروجی بیلد (canonical، JSON-LD، H1 و ...)
- `server.js` — سرور ساده Node برای پروداکشن
- `public/` — فونت‌ها، آیکون‌ها، robots.txt و sitemap.xml
