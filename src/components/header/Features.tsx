import {
  MapIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    title: "حمل به سراسر کشور",
    description: "حمل خودرو از نکا و مازندران به مقصد موردنظر شما در تمام نقاط کشور.",
    icon: MapIcon,
  },
  {
    title: "چرخ‌گیر و سالم‌بر",
    description: "انتخاب روش حمل متناسب با نوع خودرو، وضعیت فنی و شرایط مسیر.",
    icon: TruckIcon,
  },
  {
    title: "خدمات فنی کامل",
    description: "از عیب‌یابی و تعمیرات تا صافکاری و بازسازی صفر تا صد خودرو.",
    icon: WrenchScrewdriverIcon,
  },
];

function Features() {
  return (
    <section className="relative z-10 -mt-8 px-4 sm:-mt-10 sm:px-6 lg:px-8" aria-labelledby="features-title">
      <h2 id="features-title" className="sr-only">مزایای امداد خودرو نکا</h2>
      <div className="mx-auto grid max-w-7xl gap-3 sm:gap-4 md:grid-cols-3">
        {features.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-xl shadow-slate-950/5 sm:flex-row sm:items-start sm:gap-4 sm:p-6 sm:text-right"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
              <Icon className="h-7 w-7" />
            </span>
            <div>
              <h3 className="text-lg font-black text-slate-950">{title}</h3>
              <p className="mt-1.5 text-sm leading-7 text-slate-600 sm:mt-2">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Features;
