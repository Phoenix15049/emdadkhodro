import {
  ArrowLeftIcon,
  CheckCircleIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import towTruck from "../../assets/images/tuwtruck.webp";
import { CONTACT } from "../../config";

const highlights = [
  "پاسخ‌گویی شبانه‌روزی",
  "حمل خودرو به سراسر کشور",
  "چرخ‌گیر، سالم‌بر و خدمات فنی",
];

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10">
        <img
          src={towTruck}
          alt="خودروبر امداد خودرو امیرحسین در نکا"
          width={1536}
          height={1024}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-[58%_center] opacity-40 sm:object-center sm:opacity-45"
        />
        <div className="absolute inset-0 bg-slate-950/55 sm:hidden" />
        <div className="absolute inset-0 hidden bg-gradient-to-l from-slate-950 via-slate-950/90 to-slate-950/40 sm:block" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      <div className="mx-auto flex min-h-[650px] max-w-7xl items-center px-4 py-14 text-center sm:min-h-[680px] sm:px-6 sm:py-16 lg:px-8 lg:py-24 lg:text-right">
        <div className="mx-auto max-w-4xl lg:mx-0">
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-orange-500/15 px-3.5 py-2 text-xs font-bold text-orange-100 backdrop-blur sm:mb-6 sm:px-4 sm:text-sm lg:mx-0">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-orange-400" />
            آماده پاسخ‌گویی و هماهنگی اعزام
          </div>

          <h1 className="text-[2.15rem] font-black leading-[1.3] sm:text-5xl lg:text-6xl">
            امداد خودرو نکا
            <span className="mt-2 block text-orange-400">خودروبر و خدمات کامل خودرو</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-8 text-slate-200 sm:mt-7 sm:text-lg sm:leading-9 lg:mx-0">
            امداد خودرو شبانه‌روزی ، حمل خودرو با چرخ‌گیر یا سالم‌بر به تمام نقاط کشور؛ همراه با خدمات مکانیکی، جلوبندی، صافکاری، باتری‌سازی، برق خودرو و دیاگ.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex min-h-14 w-full items-center justify-center gap-2.5 rounded-2xl bg-orange-500 px-5 py-4 text-sm font-black text-white shadow-xl shadow-orange-950/30 transition hover:-translate-y-0.5 hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300 sm:w-auto sm:gap-3 sm:px-7 sm:text-base"
              aria-label={`تماس مستقیم با شماره ${CONTACT.phonePlain}`}
            >
              <PhoneIcon className="h-6 w-6 shrink-0" />
              <span className="whitespace-nowrap">تماس مستقیم</span>
              <span dir="ltr" className="whitespace-nowrap border-r border-white/30 pr-2.5 sm:pr-3">
                {CONTACT.phoneDisplay}
              </span>
            </a>
            <a
              href="#services"
              className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur transition hover:border-white/50 hover:bg-white/15 sm:w-auto"
            >
              مشاهده خدمات
              <ArrowLeftIcon className="h-5 w-5" />
            </a>
          </div>

          <div className="mx-auto mt-7 grid max-w-3xl gap-2.5 sm:mt-9 sm:grid-cols-3 sm:gap-3 lg:mx-0">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-3 text-xs text-slate-100 backdrop-blur-sm sm:justify-start sm:px-4 sm:text-sm"
              >
                <CheckCircleIcon className="h-5 w-5 shrink-0 text-orange-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
