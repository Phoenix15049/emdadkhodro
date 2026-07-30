import { BoltIcon, TagIcon ,ClockIcon} from "@heroicons/react/24/outline";


function Features() {
     return (
          <section className="bg-white py-10">
               <div className="mx-auto grid max-w-7xl grid-cols-3 gap-6 px-6">
                    {/* کارت اول */}
                    <div className="flex items-center justify-between rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
                         <div>
                              <h3 className="mb-2 text-xl font-bold">
                                   اعزام سریع
                              </h3>

                              <p className="text-sm text-gray-500">
                                   رسیدن در کمتر از ۳۰ دقیقه
                              </p>
                         </div>

                         <BoltIcon className="h-12 w-12 text-orange-500" />
                    </div>

                    {/* کارت دوم */}
                    <div className="flex items-center justify-between rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
                         <div>
                              <h3 className="mb-2 text-xl font-bold">
                                   هزینه شفاف
                              </h3>

                              <p className="text-sm text-gray-500">
                                   قبل از اعزام هزینه اعلام می‌شود.
                              </p>
                         </div>

                         <TagIcon className="h-12 w-12 text-orange-500" />
                    </div>

                    {/* کارت سوم */}
                    <div className="flex items-center justify-between rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
                         <div>
                              <h3 className="mb-2 text-xl font-bold">
                                   پشتیبانی ۲۴ ساعته
                              </h3>

                              <p className="text-sm text-gray-500">
                                   در تمام روزهای هفته
                              </p>
                         </div>

                         <ClockIcon className="h-12 w-12 text-orange-500" />
                    </div>
               </div>
          </section>
     );
}

export default Features;
