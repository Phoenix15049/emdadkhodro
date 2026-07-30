import {
     MapPinIcon,
     PhoneIcon,
     EnvelopeIcon,
} from "@heroicons/react/24/outline";

function Footer() {
     return (
          <footer className="bg-slate-900 text-white">
               <div className="mx-auto max-w-7xl px-6 py-16">
                    <div className="grid grid-cols-4 gap-12">
                         {/* لوگو */}

                         <div>
                              <h2 className="text-4xl font-black text-orange-500">
                                   امداد نکا
                              </h2>

                              <p className="mt-5 leading-8 text-gray-300">
                                   ارائه خدمات امداد خودرو، یدک‌کش، مکانیک سیار
                                   و باتری به باتری به صورت شبانه‌روزی.
                              </p>
                         </div>

                         {/* لینک ها */}

                         <div>
                              <h3 className="mb-6 text-xl font-bold">
                                   دسترسی سریع
                              </h3>

                              <ul className="space-y-4 text-gray-300">
                                   <li>
                                        <a href="#">خانه</a>
                                   </li>

                                   <li>
                                        <a href="#">خدمات</a>
                                   </li>

                                   <li>
                                        <a href="#">درباره ما</a>
                                   </li>

                                   <li>
                                        <a href="#">تماس با ما</a>
                                   </li>
                              </ul>
                         </div>

                         {/* خدمات */}

                         <div>
                              <h3 className="mb-6 text-xl font-bold">خدمات</h3>

                              <ul className="space-y-4 text-gray-300">
                                   <li>یدک کش</li>

                                   <li>مکانیک سیار</li>

                                   <li>باتری به باتری</li>

                                   <li>پنچرگیری</li>
                              </ul>
                         </div>

                         {/* تماس */}

                         <div>
                              <h3 className="mb-6 text-xl font-bold">
                                   تماس با ما
                              </h3>

                              <div className="space-y-5">
                                   <div className="flex items-center gap-3">
                                        <PhoneIcon className="h-6 w-6 text-orange-500" />

                                        <span>09110000000</span>
                                   </div>

                                   <div className="flex items-center gap-3">
                                        <EnvelopeIcon className="h-6 w-6 text-orange-500" />

                                        <span>info@example.com</span>
                                   </div>

                                   <div className="flex items-start gap-3">
                                        <MapPinIcon className="h-6 w-6 text-orange-500" />

                                        <span>نکا، خیابان امام، پلاک ۱۲</span>
                                   </div>
                              </div>
                         </div>
                    </div>

                    {/* خط */}

                    <div className="my-10 h-px bg-slate-700"></div>

                    {/* پایین فوتر */}

                    <div className="flex items-center justify-between">
                         <p className="text-gray-400">
                              © تمامی حقوق محفوظ است.
                         </p>

                         <div className="flex gap-4">
                              <a
                                   href="#"
                                   className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 hover:bg-orange-500 transition"
                              >
                                   📷
                              </a>

                              <a
                                   href="#"
                                   className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 hover:bg-orange-500 transition"
                              >
                                   📱
                              </a>

                              <a
                                   href="#"
                                   className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 hover:bg-orange-500 transition"
                              >
                                   ✈️
                              </a>
                         </div>
                    </div>
               </div>
          </footer>
     );
}

export default Footer;
