function Header() {
     return (
          <header className="bg-white shadow-sm ">
               <div className="mx-auto max-w-7xl h-24 flex items-center justify-between px-6">
                    <div className="flex flex-col">
                         <h1 className="text-4xl font-black text-orange-500">
                              امداد نکا
                         </h1>

                         <span className="text-gray-500 text-sm">
                              امداد خودرو ۲۴ ساعته
                         </span>
                    </div>

                    <nav>
                         <ul className="flex items-center gap-12 font-medium">
                              <li className="cursor-pointer hover:text-orange-500 transition">
                                   خدمات
                              </li>

                              <li className="cursor-pointer hover:text-orange-500 transition">
                                   مناطق تحت پوشش
                              </li>

                              <li className="cursor-pointer hover:text-orange-500 transition">
                                   سوالات متداول
                              </li>

                              <li className="cursor-pointer hover:text-orange-500 transition">
                                   درباره ما
                              </li>
                         </ul>
                    </nav>

                    <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition cursor-pointer ">
                         📞 <span  dir="ltr">0911 000 0000</span>
                    </button>
               </div>
          </header>
     );
}

export default Header;
