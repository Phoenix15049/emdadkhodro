import { useEffect, useState } from "react";
import {
  Battery100Icon,
  BoltIcon,
  Cog6ToothIcon,
  CpuChipIcon,
  PaintBrushIcon,
  PhoneIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import batri from "./assets/images/batri.webp";
import charkh from "./assets/images/lastik.webp";
import mechanick from "./assets/images/mechanic.webp";
import yadakkesh from "./assets/images/yadakkesh.webp";
import Banner from "./components/header/Banner";
import FAQItem from "./components/header/FAQItem";
import Features from "./components/header/Features";
import Footer from "./components/header/Footer";
import Header from "./components/header/Header";
import Hero from "./components/header/Hero";
import ProcessCard from "./components/header/ProcessCard";
import ServiceCard from "./components/header/ServiceCard";
import WhyUs from "./components/header/WhyUs";
import { CONTACT } from "./config";
import "./App.css";

const services = [
  {
    img: yadakkesh,
    title: "چرخ‌گیر و سالم‌بر",
    description: "حمل ایمن خودرو با روش مناسب، از نکا و مازندران به مقصد موردنظر در سراسر کشور.",
  },
  {
    img: mechanick,
    title: "مکانیک سیار",
    description: "عیب‌یابی اولیه و رفع مشکلات قابل‌تعمیر در محل، پیش از تصمیم برای حمل خودرو.",
  },
  {
    img: batri,
    title: "باتری و برق خودرو",
    description: "بررسی باتری، باتری به باتری و رفع ایرادهای اولیه برق خودرو در صورت امکان.",
  },
  {
    img: charkh,
    title: "پنچرگیری و تعویض زاپاس",
    description: "رفع پنچری یا تعویض زاپاس در محل، متناسب با وضعیت لاستیک و ایمنی خودرو.",
  },
];

const technicalServices = [
  {
    title: "مکانیکی",
    description: "بررسی و تعمیر ایرادهای فنی موتور و قطعات مکانیکی خودرو.",
    icon: WrenchScrewdriverIcon,
  },
  {
    title: "جلوبندی‌سازی",
    description: "بررسی فرمان، تعلیق، اتصالات و رفع ایرادهای جلوبندی خودرو.",
    icon: Cog6ToothIcon,
  },
  {
    title: "صافکاری",
    description: "ارزیابی آسیب بدنه و هماهنگی صافکاری در فرایند بازسازی خودرو.",
    icon: PaintBrushIcon,
  },
  {
    title: "باتری‌سازی",
    description: "بررسی باتری، دینام، استارت و اجزای مرتبط با سیستم شارژ خودرو.",
    icon: Battery100Icon,
  },
  {
    title: "برق خودرو",
    description: "عیب‌یابی و رفع ایرادهای سیم‌کشی، روشنایی و تجهیزات الکتریکی.",
    icon: BoltIcon,
  },
  {
    title: "دیاگ و عیب‌یابی",
    description: "خواندن خطاهای خودرو و شناسایی دقیق‌تر منشأ مشکل پیش از تعمیر.",
    icon: CpuChipIcon,
  },
];

const processSteps = [
  {
    number: "۰۱",
    title: "شرح درخواست",
    description: "موقعیت، مدل خودرو، نوع خرابی یا مقصد حمل را تلفنی اعلام می‌کنید.",
  },
  {
    number: "۰۲",
    title: "انتخاب خدمت مناسب",
    description: "نیاز به امداد، چرخ‌گیر، سالم‌بر یا خدمات فنی بررسی و شرایط اولیه هماهنگ می‌شود.",
  },
  {
    number: "۰۳",
    title: "اعزام یا برنامه‌ریزی تعمیر",
    description: "امدادگر یا خودروبر اعزام می‌شود؛ برای خدمات تکمیلی نیز روند انجام کار مشخص خواهد شد.",
  },
];

const faqs = [
  {
    question: "آیا حمل خودرو به خارج از مازندران انجام می‌شود؟",
    answer: "بله، حمل خودرو به تمام نقاط کشور انجام می‌شود. مبدا، مقصد، نوع خودرو و وضعیت آن را اعلام کنید تا روش حمل و هزینه اولیه هماهنگ شود.",
  },
  {
    question: "چرخ‌گیر بهتر است یا سالم‌بر؟",
    answer: "انتخاب روش حمل به نوع خودرو، میزان آسیب، وضعیت چرخ‌ها و مسیر بستگی دارد. پس از توضیح شرایط خودرو، گزینه ایمن‌تر پیشنهاد می‌شود.",
  },
  {
    question: "هزینه خدمات چگونه محاسبه می‌شود؟",
    answer: "نوع خدمت، فاصله، مقصد، وضعیت خودرو و تجهیزات موردنیاز در هزینه مؤثر هستند. شرایط و مبلغ اولیه پیش از اعزام یا شروع کار اعلام می‌شود.",
  },
  {
    question: "برای بازسازی کامل خودرو چه خدماتی ارائه می‌شود؟",
    answer: "بسته به وضعیت خودرو، مکانیکی، جلوبندی، صافکاری، باتری‌سازی، برق خودرو و دیاگ قابل هماهنگی است. مراحل دقیق پس از بررسی خودرو مشخص می‌شود.",
  },
];

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="text-sm font-black text-orange-600">{eyebrow}</span>
      <h2 className="mt-3 text-2xl font-black leading-tight text-slate-950 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">{description}</p>
    </div>
  );
}

function App() {
  const [showMobileCall, setShowMobileCall] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateMobileCallVisibility = () => {
      const hero = document.getElementById("top");
      const header = document.getElementById("site-header");

      if (!hero || !header) return;

      setShowMobileCall(hero.getBoundingClientRect().bottom <= header.offsetHeight);
      ticking = false;
    };

    const requestUpdate = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateMobileCallVisibility);
        ticking = true;
      }
    };

    updateMobileCallVisibility();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <a
        href="#main-content"
        className="sr-only fixed right-4 top-4 z-[100] rounded-xl bg-white px-4 py-3 font-black text-slate-950 shadow-xl focus:not-sr-only"
      >
        پرش به محتوای اصلی
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Features />

        <section id="services" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="امداد و حمل خودرو"
              title="خدمت مناسب برای وضعیت خودروی شما"
              description="ابتدا شرایط خودرو بررسی می‌شود تا امدادگر یا وسیله حمل متناسب با مشکل و مسیر انتخاب شود."
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} href={CONTACT.phoneHref} />
              ))}
            </div>
          </div>
        </section>

        <section id="technical-services" className="scroll-mt-24 bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start lg:gap-16">
              <div className="text-center lg:sticky lg:top-28 lg:text-right">
                <span className="text-sm font-black text-orange-400">خدمات فنی و تکمیلی</span>
                <h2 className="mt-3 text-2xl font-black leading-tight sm:text-4xl lg:text-5xl">
                  از عیب‌یابی تا بازسازی صفر تا صد خودرو
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-slate-300 sm:text-base lg:mx-0">
                  برای تعمیرات جزئی یا بازسازی کامل، خدمات موردنیاز خودرو پس از بررسی به‌صورت مرحله‌ای و هماهنگ برنامه‌ریزی می‌شود.
                </p>
                <a
                  href={CONTACT.phoneHref}
                  className="mt-7 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl bg-orange-500 px-7 py-4 font-black text-white transition hover:bg-orange-600 sm:w-auto"
                >
                  <PhoneIcon className="h-6 w-6" />
                  مشاوره درباره وضعیت خودرو
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {technicalServices.map(({ title, description, icon: Icon }) => (
                  <article key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm transition hover:border-orange-400/40 hover:bg-white/10 sm:p-6 sm:text-right">
                    <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-400 sm:mx-0">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h3 className="mt-5 text-lg font-black">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <WhyUs />

        <section id="process" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="روند درخواست"
              title="از تماس تا اعزام یا شروع تعمیر"
              description="بدون ثبت‌نام و فرم طولانی؛ فقط اطلاعات ضروری برای انتخاب درست خدمت دریافت می‌شود."
            />
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {processSteps.map((step) => (
                <ProcessCard key={step.number} {...step} />
              ))}
            </div>
          </div>
        </section>

        <Banner />

        <section id="faq" className="scroll-mt-24 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              eyebrow="پرسش‌های متداول"
              title="اطلاعات ضروری پیش از تماس"
              description="برای اعلام دقیق هزینه، زمان و روش انجام کار، موقعیت و وضعیت خودرو باید بررسی شود."
            />
            <div className="mt-10 grid gap-3">
              {faqs.map((faq) => (
                <FAQItem key={faq.question} {...faq} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <div
        className={`fixed inset-x-3 z-50 transition duration-300 sm:hidden ${
          showMobileCall
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-8 opacity-0"
        }`}
        style={{ bottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
        aria-hidden={!showMobileCall}
      >
        <a
          href={CONTACT.phoneHref}
          tabIndex={showMobileCall ? 0 : -1}
          className="flex min-h-14 items-center justify-center gap-2.5 rounded-2xl border border-orange-400/30 bg-orange-500 px-4 py-3.5 text-sm font-black text-white shadow-2xl shadow-slate-950/30"
          aria-label={`تماس فوری با شماره ${CONTACT.phonePlain}`}
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/15">
            <PhoneIcon className="h-5 w-5" />
          </span>
          <span>تماس فوری</span>
          <span dir="ltr" className="whitespace-nowrap font-bold">{CONTACT.phoneDisplay}</span>
        </a>
      </div>
    </div>
  );
}

export default App;
