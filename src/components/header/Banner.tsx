import { CheckCircleIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { CONTACT } from "../../config";

const restorationItems = [
  "بررسی فنی و دیاگ",
  "مکانیکی و جلوبندی",
  "صافکاری، برق و باتری‌سازی",
];

function Banner() {
  return (
    <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-950 px-5 py-9 text-center text-white shadow-2xl sm:px-10 sm:py-10 lg:px-14 lg:py-14 lg:text-right">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-10">
          <div>
            <span className="inline-flex rounded-full bg-orange-500/15 px-4 py-2 text-sm font-bold text-orange-300">
              بازسازی صفر تا صد خودرو
            </span>
            <h2 className="mt-5 text-2xl font-black leading-tight sm:text-4xl">
              برای تعمیرات پراکنده، چند مجموعه مختلف پیدا نکنید.
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-8 text-slate-300 sm:text-base lg:mx-0">
              وضعیت خودرو را توضیح دهید تا خدمات موردنیاز، از عیب‌یابی و تعمیرات فنی تا بدنه و برق خودرو، به‌صورت هماهنگ برنامه‌ریزی شود.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 text-sm text-slate-200 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6 lg:justify-start">
              {restorationItems.map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 shrink-0 text-orange-400" />
                  {item}
                </span>
              ))}
            </div>
          </div>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl bg-orange-500 px-7 py-4 font-black text-white transition hover:bg-orange-600 sm:mx-auto sm:w-auto lg:mx-0"
          >
            <PhoneIcon className="h-6 w-6" />
            مشاوره و هماهنگی
          </a>
        </div>
      </div>
    </section>
  );
}

export default Banner;
