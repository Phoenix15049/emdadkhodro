import { MapPinIcon, PhoneIcon, TruckIcon } from "@heroicons/react/24/outline";
import { CONTACT } from "../../config";

function Footer() {
  return (
    <footer className="bg-slate-950 px-4 pb-28 pt-14 text-white sm:px-6 sm:pb-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_.7fr_.9fr]">
          <div>
            <h2 className="text-3xl font-black text-orange-400">{CONTACT.businessName}</h2>
            <p className="mt-4 max-w-md leading-8 text-slate-300">
              امداد و حمل خودرو با چرخ‌گیر و سالم‌بر، خدمات فنی و بازسازی کامل خودرو؛ اعزام از نکا و حمل به سراسر کشور.
            </p>
          </div>

          <div>
            <h3 className="font-black">دسترسی سریع</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li><a className="transition hover:text-orange-400" href="#services">خدمات امدادی</a></li>
              <li><a className="transition hover:text-orange-400" href="#technical-services">خدمات فنی</a></li>
              <li><a className="transition hover:text-orange-400" href="#coverage">محدوده فعالیت</a></li>
              <li><a className="transition hover:text-orange-400" href="#process">روند درخواست</a></li>
              <li><a className="transition hover:text-orange-400" href="#faq">سوالات متداول</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-black">اطلاعات تماس</h3>
            <address className="mt-5 space-y-4 text-sm not-italic text-slate-300">
              <a href={CONTACT.phoneHref} className="flex items-center gap-3 transition hover:text-orange-400">
                <PhoneIcon className="h-5 w-5 text-orange-400" />
                <span dir="ltr">{CONTACT.phoneDisplay}</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPinIcon className="h-5 w-5 text-orange-400" />
                <span>{CONTACT.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <TruckIcon className="h-5 w-5 text-orange-400" />
                <span>{CONTACT.serviceArea}</span>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-800 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p suppressHydrationWarning>© {new Date().getFullYear()} تمامی حقوق برای {CONTACT.businessName} محفوظ است.</p>
          <p>هزینه و زمان انجام خدمت پس از بررسی موقعیت، خودرو و نوع درخواست اعلام می‌شود.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
