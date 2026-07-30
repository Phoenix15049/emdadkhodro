import {
  ClockIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

import mechanic from "../../assets/images/neka.png";

function WhyUs() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-16 px-6">

        {/* تصویر */}

        <div className="flex justify-center">

          <img
            src={mechanic}
            alt="mechanic"
            className="w-full max-w-xl rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
          />

        </div>

        {/* متن */}

        <div>

          <span className="font-bold text-orange-500">
            چرا ما؟
          </span>

          <h2 className="mt-3 text-5xl font-black leading-tight">
            چرا امداد خودرو نکا
            <br />
            بهترین انتخاب است؟
          </h2>

          <p className="mt-6 leading-8 text-gray-500">
            ما با تیمی حرفه‌ای، تجهیزات کامل و پشتیبانی شبانه‌روزی،
            آماده ارائه خدمات امداد خودرو در کوتاه‌ترین زمان ممکن هستیم.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-5">

            <div className="rounded-2xl border p-6">

              <ClockIcon className="mb-3 h-10 w-10 text-orange-500" />

              <h3 className="font-bold">
                حضور سریع
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                کمتر از ۳۰ دقیقه
              </p>

            </div>

            <div className="rounded-2xl border p-6">

              <ShieldCheckIcon className="mb-3 h-10 w-10 text-orange-500" />

              <h3 className="font-bold">
                تضمین کیفیت
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                خدمات استاندارد
              </p>

            </div>

            <div className="rounded-2xl border p-6">

              <UserGroupIcon className="mb-3 h-10 w-10 text-orange-500" />

              <h3 className="font-bold">
                امدادگران متخصص
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                افراد باتجربه
              </p>

            </div>

            <div className="rounded-2xl border p-6">

              <MapPinIcon className="mb-3 h-10 w-10 text-orange-500" />

              <h3 className="font-bold">
                پوشش گسترده
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                نکا و جاده‌های اطراف
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyUs;