import towTruck from "../../../src/assets/images/tuwtruck.png";

function Hero() {
     return (
          <section className="bg-white">
               <div className="mx-auto max-w-7xl px-6 py-16">
                    <div className="grid grid-cols-2 items-center gap-12">
                         {/* متن */}
                         <div>
                              <h2 className="text-6xl font-black leading-tight text-slate-900">
                                   امداد خودرو نکا،
                              </h2>

                              <h2 className="mt-2 text-6xl font-black text-orange-500">
                                   سریع و مطمئن
                              </h2>

                              <p className="mt-8 text-gray-600 leading-9 text-lg">
                                   امداد خودرو ۲۴ ساعته در نکا و جاده‌های اطراف.
                                   خدمات مکانیک سیار، باتری به باتری، پنچرگیری و
                                   یدک‌کش در کوتاه‌ترین زمان ممکن.
                              </p>

                              <div className="mt-10 flex gap-4">
                                   <button className="rounded-xl bg-orange-500 px-8 py-4 font-bold text-white transition hover:bg-orange-600 cursor-pointer">
                                        تماس با امدادگر
                                   </button>

                                   <button className="rounded-xl border border-gray-300 px-8 py-4 font-bold hover:bg-gray-100 cursor-pointer">
                                        مشاهده خدمات
                                   </button>
                              </div>
                         </div>

                         {/* تصویر */}
                         <div className="flex justify-center">
                              <img
                                   src={towTruck}
                                   alt="امداد خودرو"
                                   className="w-full max-w-xl rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
                              />
                         </div>
                    </div>
               </div>
          </section>
     );
}

export default Hero;
