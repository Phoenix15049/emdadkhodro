import { PhoneIcon } from "@heroicons/react/24/solid";

function Banner() {
  return (
    <section className="my-24">

      <div className="mx-auto max-w-7xl px-6">

        <div
          className="relative overflow-hidden rounded-3xl bg-slate-900 px-16 py-14"
        >
          {/* بک‌گراند */}
          <div className="absolute inset-0 bg-[url('/road.jpg')] bg-cover bg-center opacity-20"></div>

          {/* لایه تیره */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* محتوا */}
          <div className="relative flex items-center justify-between">

            {/* متن */}
            <div>

              <span className="rounded-full bg-orange-500 px-4 py-2 text-sm font-bold text-white">
                امداد خودرو ۲۴ ساعته
              </span>

              <h2 className="mt-6 text-5xl font-black leading-tight text-white">
                خودرو شما در مسیر
                <br />
                متوقف شده است؟
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-gray-300">
                کافی است با ما تماس بگیرید؛ تیم امداد نکا در سریع‌ترین زمان
                ممکن به محل شما اعزام خواهد شد.
              </p>

            </div>

            {/* دکمه تماس */}

            <button
              className="cursor-pointer flex items-center gap-3 rounded-2xl bg-orange-500 px-8 py-5 text-lg font-bold text-white transition hover:bg-orange-600"
            >
              <PhoneIcon className="h-6 w-6" />

              تماس با امدادگر
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Banner;