import {
  MapIcon,
  PhoneArrowUpRightIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import cityImage from "../../assets/images/neka.webp";

const reasons = [
  {
    title: "اعزام از نکا",
    description: "هماهنگی سریع برای نکا و مسیرهای اطراف با شناخت بهتر محدوده.",
    icon: MapIcon,
  },
  {
    title: "حمل سراسری",
    description: "امکان انتقال خودرو به شهر و مقصد موردنظر در سراسر کشور.",
    icon: ShieldCheckIcon,
  },
  {
    title: "خدمات یکپارچه",
    description: "امداد، حمل، تعمیرات و بازسازی خودرو در یک مسیر هماهنگ.",
    icon: WrenchScrewdriverIcon,
  },
  {
    title: "ارتباط مستقیم",
    description: "بدون فرم و واسطه؛ شرح مشکل و هماهنگی خدمت با یک تماس.",
    icon: PhoneArrowUpRightIcon,
  },
];

function WhyUs() {
  return (
    <section id="coverage" className="scroll-mt-24 bg-slate-50 px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-slate-950/15">
          <img
            src={cityImage}
            alt="محدوده فعالیت امداد خودرو امیرحسین در نکا"
            loading="lazy"
            decoding="async"
            width={1448}
            height={1086}
            className="aspect-[4/3] h-full w-full object-cover"
          />
          <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-slate-950/90 p-4 text-center text-white backdrop-blur sm:inset-x-6 sm:bottom-6 sm:p-5 sm:text-right">
            <p className="font-black">اعزام محلی، حمل سراسری</p>
            <p className="mt-1 text-xs leading-6 text-slate-300 sm:text-sm">
              اعزام از نکا و مسیرهای اطراف؛ حمل خودرو به تمام نقاط کشور با هماهنگی قبلی
            </p>
          </div>
        </div>

        <div className="text-center lg:text-right">
          <span className="text-sm font-black text-orange-600">محدوده و شیوه خدمت</span>
          <h2 className="mt-3 text-2xl font-black leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
            یک تماس برای امداد، حمل یا تعمیر خودرو
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base lg:mx-0">
            ابتدا وضعیت خودرو و مقصد بررسی می‌شود؛ سپس نوع خدمت، وسیله حمل و شرایط انجام کار با شما هماهنگ خواهد شد.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4">
            {reasons.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5 text-center sm:text-right">
                <Icon className="mx-auto h-8 w-8 text-orange-600 sm:mx-0" />
                <h3 className="mt-4 font-black text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
