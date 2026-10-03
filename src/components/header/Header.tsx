import { useState } from "react";
import {
  Bars3Icon,
  PhoneIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { CONTACT } from "../../config";

const navItems = [
  { label: "خدمات امدادی", href: "#services" },
  { label: "خدمات فنی", href: "#technical-services" },
  { label: "محدوده فعالیت", href: "#coverage" },
  { label: "روند درخواست", href: "#process" },
  { label: "سوالات متداول", href: "#faq" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      id="site-header"
      className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur"
    >
      <div className="relative mx-auto flex h-[72px] max-w-7xl items-center justify-center px-4 sm:h-20 sm:justify-between sm:px-6 lg:px-8">
        <a
          href="#top"
          className="group flex min-w-0 max-w-[calc(100%-4.5rem)] items-center justify-center gap-2.5 text-center sm:max-w-none sm:justify-start sm:gap-3 sm:text-right"
          aria-label={`صفحه اصلی ${CONTACT.businessName}`}
          onClick={closeMenu}
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-base font-black text-white shadow-lg shadow-orange-500/20 sm:h-11 sm:w-11 sm:rounded-2xl sm:text-lg">
            ا
          </span>
          <span className="min-w-0">
            <strong className="block truncate text-base font-black leading-6 text-slate-950 sm:text-xl">
              {CONTACT.businessName}
            </strong>
            <span className="block truncate text-[11px] leading-5 text-slate-500 sm:text-sm">
              امداد، حمل و خدمات خودرو
            </span>
          </span>
        </a>

        <nav className="hidden xl:block" aria-label="منوی اصلی">
          <ul className="flex items-center gap-7 text-sm font-bold text-slate-700">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="transition hover:text-orange-600" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute right-4 flex items-center gap-2 sm:static">
          <a
            href={CONTACT.phoneHref}
            className="hidden items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 sm:flex"
            aria-label={`تماس فوری با ${CONTACT.businessName}، شماره ${CONTACT.phonePlain}`}
          >
            <PhoneIcon className="h-5 w-5" />
            <span dir="ltr">{CONTACT.phoneDisplay}</span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:border-orange-300 hover:bg-orange-50 sm:h-11 sm:w-11 xl:hidden"
            aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white px-4 py-3 shadow-lg xl:hidden"
          aria-label="منوی موبایل"
        >
          <ul className="mx-auto grid max-w-7xl gap-1 text-center sm:text-right">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  className="block rounded-xl px-4 py-3 font-bold text-slate-700 transition hover:bg-orange-50 hover:text-orange-700"
                  href={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
